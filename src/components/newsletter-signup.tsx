'use client';

import { useState } from 'react';

export default function NewsletterSignup() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus('error');
      setMessage('Please enter a valid email address.');
      return;
    }

    setStatus('loading');

    // Simulate API call for double opt-in
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // In production, this would call your API endpoint
    // which sends a confirmation email with opt-in link
    setStatus('success');
    setMessage('Check your inbox! We\'ve sent a confirmation email to complete your signup.');
    setEmail('');
  };

  return (
    <section className="bg-graphite rounded-lg p-8 md:p-12" aria-labelledby="newsletter-heading">
      <div className="max-w-2xl mx-auto text-center">
        <h2 id="newsletter-heading" className="text-3xl font-bold text-white mb-4 font-heading">
          Stay Ahead of the Curve
        </h2>
        <p className="text-gray-300 mb-8 font-body">
          Monthly insights on digital transformation in Sri Lanka. No spam, unsubscribe anytime.
        </p>

        {status === 'success' ? (
          <div className="bg-neon-volt/20 border border-neon-volt rounded-lg p-6" role="status" aria-live="polite">
            <svg className="w-8 h-8 text-neon-volt mx-auto mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <p className="text-white font-body">{message}</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex flex-col sm:flex-row gap-4">
              <label htmlFor="email-input" className="sr-only">Email address</label>
              <input
                id="email-input"
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (status === 'error') setStatus('idle');
                }}
                placeholder="your@email.com"
                disabled={status === 'loading'}
                className="flex-1 px-6 py-4 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-neon-volt focus:border-transparent disabled:opacity-50 font-body"
                aria-describedby={status === 'error' ? 'email-error' : undefined}
                aria-invalid={status === 'error'}
              />
              <button
                type="submit"
                disabled={status === 'loading'}
                className="px-8 py-4 bg-neon-volt text-graphite rounded-lg font-bold font-body hover:bg-opacity-90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-neon-volt focus:ring-offset-2 focus:ring-offset-graphite"
              >
                {status === 'loading' ? 'Sending...' : 'Subscribe'}
              </button>
            </div>
            
            {status === 'error' && (
              <p id="email-error" className="text-red-400 text-sm font-body" role="alert">
                {message}
              </p>
            )}
            
            <p className="text-xs text-gray-400 font-body">
              By subscribing, you agree to our{' '}
              <a href="/privacy" className="text-neon-volt underline hover:text-white">
                Privacy Policy
              </a>
              . Double opt-in required.
            </p>
          </form>
        )}

        {/* Trust indicators */}
        <div className="mt-8 flex flex-wrap justify-center gap-6 text-xs text-gray-400 font-body">
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <span>No spam, ever</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
            <span>Unsubscribe anytime</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            <span>Secure & encrypted</span>
          </div>
        </div>
      </div>
    </section>
  );
}
