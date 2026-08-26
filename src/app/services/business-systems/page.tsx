import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Database, Settings, Cloud, BarChart, Shield } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Business Systems & Automation Sri Lanka | Custom Software | Sketchworks',
  description: 'Custom business software development in Sri Lanka. CRM, inventory management, workflow automation, and API integrations for growing businesses.',
  keywords: ['business software Sri Lanka', 'CRM development', 'workflow automation', 'inventory system', 'API integration'],
  openGraph: {
    title: 'Business Systems | Sketchworks',
    description: 'Streamline operations with custom business software. Scalable systems that grow with your organization.',
    type: 'website',
  },
};

const services = [
  {
    icon: Database,
    title: 'Custom CRM Systems',
    description: 'Tailored customer relationship management solutions that fit your sales process perfectly.',
    benefits: ['Lead tracking', 'Pipeline management', 'Customer insights', 'Team collaboration'],
  },
  {
    icon: Settings,
    title: 'Workflow Automation',
    description: 'Eliminate manual tasks and reduce errors with intelligent automation workflows.',
    benefits: ['Process mapping', 'Task automation', 'Approval flows', 'Notifications'],
  },
  {
    icon: Cloud,
    title: 'Cloud Migration',
    description: 'Securely move your legacy systems to modern cloud infrastructure for better scalability.',
    benefits: ['AWS/Azure setup', 'Data migration', 'Security hardening', 'Cost optimization'],
  },
  {
    icon: BarChart,
    title: 'Business Intelligence',
    description: 'Transform raw data into actionable insights with custom dashboards and reports.',
    benefits: ['Real-time analytics', 'Custom dashboards', 'Automated reporting', 'KPI tracking'],
  },
  {
    icon: Shield,
    title: 'API Integrations',
    description: 'Connect your existing tools and platforms for seamless data flow across systems.',
    benefits: ['Third-party APIs', 'Webhook setup', 'Data synchronization', 'Error handling'],
  },
];

const industries = [
  'Retail & E-commerce',
  'Manufacturing',
  'Healthcare',
  'Finance & Banking',
  'Hospitality',
  'Logistics',
  'Education',
  'Professional Services',
];

export default function BusinessSystemsPage() {
  return (
    <main className="min-h-screen bg-canvas">
      {/* Hero Section */}
      <section className="bg-graphite text-white py-20 md:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="font-heading font-extrabold text-4xl md:text-5xl lg:text-6xl mb-6">
              Business Systems That{' '}
              <span className="text-neon-volt">Scale</span>
            </h1>
            <p className="font-body text-lg md:text-xl text-gray-300 mb-8">
              Streamline operations with custom business software. We build scalable 
              systems that grow with your Sri Lankan organization.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-neon-volt text-graphite font-body font-semibold px-6 py-3 rounded-md hover:bg-white transition-colors focus:outline-none focus:ring-2 focus:ring-neon-volt focus:ring-offset-2 focus:ring-offset-graphite"
            >
              Discuss Your Needs
              <ArrowRight className="w-5 h-5" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24 bg-white" aria-labelledby="services-heading">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 id="services-heading" className="font-heading font-bold text-3xl md:text-4xl mb-4">
              What We Build
            </h2>
            <p className="font-body text-gray-600 text-lg">
              Custom software solutions designed for your unique business requirements.
            </p>
          </div>
          <div className="space-y-8 max-w-5xl mx-auto">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={index} className="bg-canvas p-8 rounded-lg flex flex-col md:flex-row gap-6">
                  <div className="w-16 h-16 bg-blueprint text-white rounded-lg flex-shrink-0 flex items-center justify-center">
                    <Icon className="w-8 h-8" aria-hidden="true" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-heading font-bold text-2xl mb-3">{service.title}</h3>
                    <p className="font-body text-gray-600 mb-4">{service.description}</p>
                    <ul className="grid grid-cols-2 gap-2" aria-label={`${service.title} benefits`}>
                      {service.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-gray-700">
                          <span className="text-neon-volt" aria-hidden="true">✓</span>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-16 md:py-24 bg-canvas" aria-labelledby="industries-heading">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 id="industries-heading" className="font-heading font-bold text-3xl md:text-4xl mb-4">
              Industries We Serve
            </h2>
            <p className="font-body text-gray-600 text-lg">
              Deep expertise across diverse sectors in Sri Lanka and the region.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {industries.map((industry, index) => (
              <span
                key={index}
                className="bg-white px-5 py-3 rounded-full text-sm font-body text-gray-700 border border-gray-200"
              >
                {industry}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-16 md:py-24 bg-white" aria-labelledby="approach-heading">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 id="approach-heading" className="font-heading font-bold text-3xl md:text-4xl mb-8 text-center">
              Our Approach
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: 'Understand First',
                  desc: 'We spend time learning your business inside-out before writing a single line of code.',
                },
                {
                  title: 'Build Modular',
                  desc: 'Systems designed with flexibility in mind, allowing easy updates and expansions.',
                },
                {
                  title: 'Document Everything',
                  desc: 'Comprehensive documentation ensures your team can maintain and extend the system.',
                },
                {
                  title: 'Support Long-term',
                  desc: 'Ongoing maintenance and support packages keep your systems running smoothly.',
                },
              ].map((item, index) => (
                <div key={index} className="bg-canvas p-6 rounded-lg">
                  <div className="w-10 h-10 bg-neon-volt text-graphite rounded-full flex items-center justify-center font-heading font-bold mb-4">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                  <h3 className="font-heading font-bold text-xl mb-2">{item.title}</h3>
                  <p className="font-body text-gray-600">{item.desc}</p>
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
            Ready to Modernize Your Operations?
          </h2>
          <p className="font-body text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Let's discuss how custom software can solve your business challenges 
            and drive efficiency across your organization.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-neon-volt text-graphite font-body font-semibold px-8 py-4 rounded-md hover:bg-white transition-colors focus:outline-none focus:ring-2 focus:ring-neon-volt focus:ring-offset-2 focus:ring-offset-graphite"
          >
            Schedule Consultation
            <ArrowRight className="w-5 h-5" aria-hidden="true" />
          </Link>
        </div>
      </section>
    </main>
  );
}
