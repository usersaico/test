import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, BrainCircuit, MessageSquare, TrendingUp, Cog, Shield } from 'lucide-react';

export const metadata: Metadata = {
  title: 'AI & Software Solutions Sri Lanka | Machine Learning | Chatbots | Sketchworks',
  description: 'AI-powered software solutions in Sri Lanka. Custom machine learning models, chatbots, predictive analytics, and process automation for businesses.',
  keywords: ['AI development Sri Lanka', 'machine learning', 'chatbot integration', 'predictive analytics', 'automation'],
  openGraph: {
    title: 'AI & Software Solutions | Sketchworks',
    description: 'Leverage artificial intelligence to gain competitive advantage. Practical AI solutions for Sri Lankan businesses.',
    type: 'website',
  },
};

const services = [
  {
    icon: BrainCircuit,
    title: 'Custom AI Models',
    description: 'Tailored machine learning solutions trained on your data to solve specific business problems.',
    applications: ['Image recognition', 'Natural language processing', 'Predictive modeling', 'Anomaly detection'],
  },
  {
    icon: MessageSquare,
    title: 'Intelligent Chatbots',
    description: '24/7 customer support with AI chatbots that understand context and provide helpful responses.',
    applications: ['Customer service', 'Lead qualification', 'Internal helpdesk', 'Multilingual support'],
  },
  {
    icon: TrendingUp,
    title: 'Data Analytics & Insights',
    description: 'Transform raw data into actionable business intelligence with advanced analytics.',
    applications: ['Sales forecasting', 'Customer segmentation', 'Market analysis', 'Performance dashboards'],
  },
  {
    icon: Cog,
    title: 'Process Automation',
    description: 'Automate repetitive tasks using AI-driven workflows that learn and improve over time.',
    applications: ['Document processing', 'Email classification', 'Data entry', 'Quality control'],
  },
  {
    icon: Shield,
    title: 'AI Consulting',
    description: 'Strategic guidance on AI adoption, feasibility studies, and implementation roadmaps.',
    applications: ['Technology assessment', 'ROI analysis', 'Team training', 'Ethics & compliance'],
  },
];

const benefits = [
  { stat: '40%', label: 'Average cost reduction through automation' },
  { stat: '3x', label: 'Faster response times with AI chatbots' },
  { stat: '85%', label: 'Improved accuracy in data processing' },
  { stat: '24/7', label: 'Continuous operation without downtime' },
];

export default function AISoftwarePage() {
  return (
    <main className="min-h-screen bg-canvas">
      {/* Hero Section */}
      <section className="bg-graphite text-white py-20 md:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="font-heading font-extrabold text-4xl md:text-5xl lg:text-6xl mb-6">
              AI Solutions That{' '}
              <span className="text-neon-volt">Deliver</span>
            </h1>
            <p className="font-body text-lg md:text-xl text-gray-300 mb-8">
              Leverage artificial intelligence to gain competitive advantage. From chatbots 
              to predictive analytics, we make AI practical for Sri Lankan businesses.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-neon-volt text-graphite font-body font-semibold px-6 py-3 rounded-md hover:bg-white transition-colors focus:outline-none focus:ring-2 focus:ring-neon-volt focus:ring-offset-2 focus:ring-offset-graphite"
            >
              Explore AI Options
              <ArrowRight className="w-5 h-5" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 md:py-24 bg-white" aria-labelledby="benefits-heading">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 id="benefits-heading" className="font-heading font-bold text-3xl md:text-4xl mb-4">
              Why Invest in AI?
            </h2>
            <p className="font-body text-gray-600 text-lg">
              Real measurable impact from AI implementations across industries.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {benefits.map((item, index) => (
              <div key={index} className="text-center p-6 bg-canvas rounded-lg">
                <div className="text-4xl md:text-5xl font-heading font-bold text-blueprint mb-2">
                  {item.stat}
                </div>
                <p className="font-body text-gray-600 text-sm">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24 bg-canvas" aria-labelledby="services-heading">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 id="services-heading" className="font-heading font-bold text-3xl md:text-4xl mb-4">
              Our AI Capabilities
            </h2>
            <p className="font-body text-gray-600 text-lg">
              End-to-end AI solutions from strategy to deployment and maintenance.
            </p>
          </div>
          <div className="space-y-8 max-w-5xl mx-auto">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={index} className="bg-white p-8 rounded-lg">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="w-16 h-16 bg-blueprint text-white rounded-lg flex-shrink-0 flex items-center justify-center">
                      <Icon className="w-8 h-8" aria-hidden="true" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-heading font-bold text-2xl mb-3">{service.title}</h3>
                      <p className="font-body text-gray-600 mb-4">{service.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {service.applications.map((app, i) => (
                          <span
                            key={i}
                            className="bg-canvas px-3 py-1 rounded-full text-xs font-body text-gray-700"
                          >
                            {app}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-16 md:py-24 bg-white" aria-labelledby="approach-heading">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 id="approach-heading" className="font-heading font-bold text-3xl md:text-4xl mb-8 text-center">
              Our AI Development Process
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  step: '01',
                  title: 'Assess',
                  desc: 'Identify high-impact use cases and evaluate data readiness for AI implementation.',
                },
                {
                  step: '02',
                  title: 'Develop',
                  desc: 'Build and train models using best practices in ML engineering and validation.',
                },
                {
                  step: '03',
                  title: 'Deploy',
                  desc: 'Integrate AI solutions into existing systems with monitoring and continuous improvement.',
                },
              ].map((item) => (
                <div key={item.step} className="text-center">
                  <div className="w-16 h-16 bg-neon-volt text-graphite rounded-full flex items-center justify-center mx-auto mb-4 font-heading font-bold text-xl">
                    {item.step}
                  </div>
                  <h3 className="font-heading font-bold text-lg mb-2">{item.title}</h3>
                  <p className="font-body text-gray-600 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-graphite text-white py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">
            Ready to Harness AI for Your Business?
          </h2>
          <p className="font-body text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Let's explore how artificial intelligence can solve your challenges 
            and create new opportunities for growth.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-neon-volt text-graphite font-body font-semibold px-8 py-4 rounded-md hover:bg-white transition-colors focus:outline-none focus:ring-2 focus:ring-neon-volt focus:ring-offset-2 focus:ring-offset-graphite"
          >
            Start AI Conversation
            <ArrowRight className="w-5 h-5" aria-hidden="true" />
          </Link>
        </div>
      </section>
    </main>
  );
}
