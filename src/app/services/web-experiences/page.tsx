import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Globe, Smartphone, Zap, Shield, BarChart } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Web Design & Development Sri Lanka | Custom Websites | Sketchworks',
  description: 'Professional web design and development in Sri Lanka. Fast, accessible, SEO-optimized websites and web applications built with modern technologies.',
  keywords: ['web design Sri Lanka', 'website developer Colombo', 'e-commerce', 'PWA', 'web application'],
  openGraph: {
    title: 'Web Experiences | Sketchworks',
    description: 'Fast, accessible, and beautiful websites that convert. Modern web applications using cutting-edge technologies.',
    type: 'website',
  },
};

const features = [
  {
    icon: Globe,
    title: 'Custom Websites',
    description: 'Tailored designs that reflect your brand and engage your audience across all devices.',
  },
  {
    icon: Smartphone,
    title: 'Progressive Web Apps',
    description: 'App-like experiences that work offline, load instantly, and install on any device.',
  },
  {
    icon: Zap,
    title: 'Performance First',
    description: 'Lightning-fast load times optimized for Core Web Vitals and search rankings.',
  },
  {
    icon: Shield,
    title: 'Accessibility Built-In',
    description: 'WCAG AA compliant websites ensuring everyone can use your digital products.',
  },
  {
    icon: BarChart,
    title: 'E-commerce Solutions',
    description: 'Secure online stores with seamless checkout and inventory management.',
  },
];

const technologies = [
  'Next.js 14 (App Router)',
  'React & TypeScript',
  'Tailwind CSS',
  'Node.js & Express',
  'PostgreSQL & MongoDB',
  'GraphQL & REST APIs',
  'AWS & Vercel',
  'Stripe & PayHere',
];

const process = [
  {
    step: '01',
    title: 'Discovery',
    description: 'Understanding your goals, audience, and technical requirements through detailed workshops.',
  },
  {
    step: '02',
    title: 'UX Design',
    description: 'Wireframes and prototypes focused on user flows, accessibility, and conversion optimization.',
  },
  {
    step: '03',
    title: 'Development',
    description: 'Clean, maintainable code using modern frameworks and best practices for performance.',
  },
  {
    step: '04',
    title: 'Launch & Support',
    description: 'Thorough testing, deployment, and ongoing maintenance to ensure long-term success.',
  },
];

export default function WebExperiencesPage() {
  return (
    <main className="min-h-screen bg-canvas">
      {/* Hero Section */}
      <section className="bg-graphite text-white py-20 md:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="font-heading font-extrabold text-4xl md:text-5xl lg:text-6xl mb-6">
              Web Experiences That{' '}
              <span className="text-neon-volt">Perform</span>
            </h1>
            <p className="font-body text-lg md:text-xl text-gray-300 mb-8">
              Fast, accessible, and beautiful websites that convert. We build modern 
              web applications using cutting-edge technologies for Sri Lankan businesses.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-neon-volt text-graphite font-body font-semibold px-6 py-3 rounded-md hover:bg-white transition-colors focus:outline-none focus:ring-2 focus:ring-neon-volt focus:ring-offset-2 focus:ring-offset-graphite"
            >
              Start Your Project
              <ArrowRight className="w-5 h-5" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-white" aria-labelledby="features-heading">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 id="features-heading" className="font-heading font-bold text-3xl md:text-4xl mb-4">
              What We Build
            </h2>
            <p className="font-body text-gray-600 text-lg">
              From simple landing pages to complex web applications, we deliver excellence.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="bg-canvas p-8 rounded-lg">
                  <div className="w-12 h-12 bg-blueprint text-white rounded-lg flex items-center justify-center mb-6">
                    <Icon className="w-6 h-6" aria-hidden="true" />
                  </div>
                  <h3 className="font-heading font-bold text-xl mb-3">{feature.title}</h3>
                  <p className="font-body text-gray-600">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-16 md:py-24 bg-canvas" aria-labelledby="tech-heading">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 id="tech-heading" className="font-heading font-bold text-3xl md:text-4xl mb-4">
              Modern Tech Stack
            </h2>
            <p className="font-body text-gray-600 text-lg">
              We use battle-tested technologies that ensure performance, scalability, and maintainability.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {technologies.map((tech, index) => (
              <span
                key={index}
                className="bg-white px-4 py-2 rounded-full text-sm font-body text-gray-700 border border-gray-200"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 md:py-24 bg-white" aria-labelledby="process-heading">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 id="process-heading" className="font-heading font-bold text-3xl md:text-4xl mb-4">
              Our Development Process
            </h2>
            <p className="font-body text-gray-600 text-lg">
              Transparent collaboration from concept to launch and beyond.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {process.map((item) => (
              <div key={item.step} className="relative">
                <div className="w-16 h-16 bg-neon-volt text-graphite rounded-full flex items-center justify-center mx-auto mb-4 font-heading font-bold text-xl">
                  {item.step}
                </div>
                <h3 className="font-heading font-bold text-lg mb-2 text-center">{item.title}</h3>
                <p className="font-body text-gray-600 text-sm text-center">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Performance Metrics Section */}
      <section className="py-16 md:py-24 bg-canvas" aria-labelledby="performance-heading">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto bg-white rounded-lg p-8 md:p-12">
            <h2 id="performance-heading" className="font-heading font-bold text-3xl md:text-4xl mb-6 text-center">
              Performance Standards
            </h2>
            <p className="font-body text-gray-600 text-lg mb-8 text-center">
              Every website we build meets these Core Web Vitals targets:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { metric: 'FCP', target: '< 1.0s', label: 'First Contentful Paint' },
                { metric: 'LCP', target: '< 2.5s', label: 'Largest Contentful Paint' },
                { metric: 'TBT', target: '< 200ms', label: 'Total Blocking Time' },
                { metric: 'CLS', target: '< 0.1', label: 'Cumulative Layout Shift' },
              ].map((item) => (
                <div key={item.metric} className="text-center p-4 bg-canvas rounded-lg">
                  <div className="text-3xl md:text-4xl font-heading font-bold text-blueprint mb-2">
                    {item.target}
                  </div>
                  <div className="font-body font-semibold text-gray-700 mb-1">{item.metric}</div>
                  <div className="font-body text-xs text-gray-500">{item.label}</div>
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
            Ready to Build Something Great?
          </h2>
          <p className="font-body text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Let's discuss your project and create a web experience that drives results 
            for your Sri Lankan business.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-neon-volt text-graphite font-body font-semibold px-8 py-4 rounded-md hover:bg-white transition-colors focus:outline-none focus:ring-2 focus:ring-neon-volt focus:ring-offset-2 focus:ring-offset-graphite"
          >
            Get Free Consultation
            <ArrowRight className="w-5 h-5" aria-hidden="true" />
          </Link>
        </div>
      </section>
    </main>
  );
}
