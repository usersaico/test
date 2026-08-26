'use client';

import { useState, useRef, useEffect } from 'react';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

const INITIAL_MESSAGES: Message[] = [
  {
    role: 'assistant',
    content: 'Hi! I\'m the Sketchworks AI assistant. Ask me about our services, pricing, or how we can help transform your business.',
  },
];

const QUICK_QUESTIONS = [
  'What services do you offer?',
  'How much does CV writing cost?',
  'Do you work with startups?',
  'What\'s your typical timeline?',
];

export default function AIChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>(INITIAL_MESSAGES);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const generateResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();
    
    if (lowerMessage.includes('service') || lowerMessage.includes('offer')) {
      return 'We offer five core services:\n\n1. **CV Writing** - ATS-optimized resumes that get interviews\n2. **Visual Branding** - Logos, brand guidelines, complete identity systems\n3. **Web Experiences** - Fast, accessible websites and web apps\n4. **Business Systems** - Custom software for operations automation\n5. **AI & Software** - AI integration and custom development\n\nWhich would you like to know more about?';
    }
    
    if (lowerMessage.includes('cv') || lowerMessage.includes('resume') || lowerMessage.includes('cost') || lowerMessage.includes('price')) {
      return 'Our CV writing packages:\n\n• **Essential** - LKR 12,500\n  - Professional CV rewrite\n  - ATS optimization\n  - 2 revision rounds\n\n• **Professional** - LKR 18,500\n  - Everything in Essential\n  - LinkedIn profile optimization\n  - Cover letter included\n\n• **Executive** - LKR 28,500\n  - Everything in Professional\n  - Career strategy session\n  - Priority 48-hour delivery\n\nReady to upgrade your CV?';
    }
    
    if (lowerMessage.includes('startup')) {
      return 'Absolutely! We love working with Sri Lankan startups. We offer:\n\n• **Startup Brand Package** - LKR 285,000\n  Complete visual identity to help you stand out to investors\n\n• **MVP Web Development** - From LKR 350,000\n  Fast, scalable web presence to validate your idea\n\n• **Flexible Payment Terms**\n  We understand cash flow challenges. Let\'s discuss options.\n\nMany of our best case studies started as early-stage companies!';
    }
    
    if (lowerMessage.includes('timeline') || lowerMessage.includes('long') || lowerMessage.includes('week') || lowerMessage.includes('day')) {
      return 'Typical project timelines:\n\n• **CV Writing**: 3-5 business days (48hr rush available)\n• **Logo Design**: 2-3 weeks\n• **Complete Branding**: 4-6 weeks\n• **Website (5 pages)**: 4-8 weeks\n• **Custom Software**: 8-16 weeks depending on complexity\n\nWe always provide a detailed timeline before starting. Need something faster? Ask about our rush service.';
    }
    
    if (lowerMessage.includes('contact') || lowerMessage.includes('reach') || lowerMessage.includes('email') || lowerMessage.includes('phone')) {
      return 'You can reach us:\n\n📧 Email: hello@sketchworks.lk\n📱 WhatsApp: +94 77 XXX XXXX\n📍 Office: Colombo 03, Sri Lanka\n⏰ Hours: Mon-Fri, 9AM-6PM\n\nOr use the contact form on this website. We respond within 24 hours!';
    }
    
    if (lowerMessage.includes('thank')) {
      return 'You\'re welcome! Is there anything else I can help you with?';
    }
    
    if (lowerMessage.includes('hello') || lowerMessage.includes('hi') || lowerMessage.includes('hey')) {
      return 'Hello! Great to meet you. How can Sketchworks help transform your business today?';
    }
    
    return 'Thanks for your question! For detailed inquiries, I recommend contacting our team directly at hello@sketchworks.lk or using the contact form. We respond within 24 hours with personalized answers.\n\nIn the meantime, feel free to ask about our services, pricing, or process!';
  };

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      role: 'user',
      content: input.trim(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    // Simulate AI response delay
    await new Promise((resolve) => setTimeout(resolve, 800 + Math.random() * 700));

    const response: Message = {
      role: 'assistant',
      content: generateResponse(userMessage.content),
    };

    setIsTyping(false);
    setMessages((prev) => [...prev, response]);
  };

  const handleQuickQuestion = (question: string) => {
    setInput(question);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* Chat Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-neon-volt rounded-full shadow-lg flex items-center justify-center hover:bg-opacity-90 transition-colors focus:outline-none focus:ring-2 focus:ring-neon-volt focus:ring-offset-2"
        aria-label={isOpen ? 'Close chat' : 'Open chat'}
        aria-expanded={isOpen}
      >
        {isOpen ? (
          <svg className="w-6 h-6 text-graphite" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-6 h-6 text-graphite" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
        )}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div
          className="fixed bottom-24 right-6 z-50 w-80 sm:w-96 bg-white rounded-lg shadow-2xl border border-gray-200 overflow-hidden flex flex-col"
          style={{ maxHeight: '500px' }}
          role="dialog"
          aria-label="Chat with Sketchworks AI assistant"
        >
          {/* Header */}
          <div className="bg-graphite text-white px-4 py-3 flex items-center gap-3">
            <div className="w-8 h-8 bg-neon-volt rounded-full flex items-center justify-center">
              <span className="text-graphite font-bold text-sm">SW</span>
            </div>
            <div>
              <h3 className="font-semibold text-sm">Sketchworks Assistant</h3>
              <p className="text-xs text-gray-300">Online • Replies instantly</p>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50" style={{ minHeight: '300px' }}>
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] px-4 py-2 rounded-lg text-sm ${
                    message.role === 'user'
                      ? 'bg-blueprint-blue text-white'
                      : 'bg-white border border-gray-200 text-gray-800'
                  }`}
                >
                  <p className="whitespace-pre-line">{message.content}</p>
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white border border-gray-200 px-4 py-2 rounded-lg">
                  <div className="flex gap-1">
                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Questions */}
          {messages.length <= 2 && (
            <div className="px-4 py-2 bg-gray-50 border-t border-gray-100">
              <p className="text-xs text-gray-500 mb-2">Quick questions:</p>
              <div className="flex flex-wrap gap-2">
                {QUICK_QUESTIONS.map((question, index) => (
                  <button
                    key={index}
                    onClick={() => handleQuickQuestion(question)}
                    className="text-xs bg-white border border-gray-200 px-3 py-1 rounded-full hover:border-neon-volt hover:text-neon-volt transition-colors"
                  >
                    {question}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Input */}
          <div className="p-4 bg-white border-t border-gray-200">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Type your message..."
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-neon-volt focus:border-transparent"
                aria-label="Type your message"
              />
              <button
                onClick={handleSend}
                disabled={!input.trim()}
                className="px-4 py-2 bg-neon-volt text-graphite rounded-lg font-semibold text-sm hover:bg-opacity-90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-neon-volt focus:ring-offset-2"
                aria-label="Send message"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
