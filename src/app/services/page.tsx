import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, FileText, Palette, Globe, Database, BrainCircuit } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Our Services | Sketchworks - Digital Transformation Agency Sri Lanka',
  description: 'Professional CV writing, visual branding, web experiences, business systems, and AI software solutions. From rough concepts to working realities.',
  keywords: ['CV writing Sri Lanka', 'web design Colombo', 'branding agency', 'business software', 'AI solutions'],
  openGraph: {
    title: 'Our Services | Sketchworks',
    description: 'Comprehensive digital services tailored for Sri Lankan businesses and professionals.',
    type: 'website',
  },
};

const services = [
  {
    slug: 'cv-writing',
    title: 'CV Writing & Career Development',
    description: 'Transform your career with ATS-optimized CVs that get noticed. Our expert writers craft compelling narratives that highlight your unique value.',
    icon: FileText,
    features: [
      'ATS-optimized formatting',
      'Industry-specific tailoring',
      'LinkedIn profile optimization',
      'Cover letter crafting',
      'Career transition support',
    ],
    cta: 'Get Your CV Scored',
    href: '/services/cv-writing',
  },
  {
    slug: 'visual-branding',
    title: 'Visual Branding & Identity',
    description: 'Build a memorable brand that resonates with your audience. From logos to complete brand guidelines, we create cohesive visual systems.',
    icon: Palette,
    features: [
      'Logo design & wordmarks',
      'Brand style guides',
      'Marketing collateral',
      'Packaging design',
      'Brand strategy consulting',
    ],
    cta: 'View Branding Work',
    href: '/services/visual-branding',
  },
  {
    slug: 'web-experiences',
    title: 'Web Experiences & Digital Platforms',
    description: 'Fast, accessible, and beautiful websites that convert. We build modern web applications using cutting-edge technologies.',
    icon: Globe,
    features: [
      'Custom website development',
      'E-commerce solutions',
      'Progressive Web Apps (PWA)',
      'Performance optimization',
      'Accessibility compliance (WCAG)',
    ],
    cta: 'See Our Projects',
    href: '/services/web-experiences',
  },
  {
    slug: 'business-systems',
    title: 'Business Systems & Automation',
    description: 'Streamline operations with custom business software. We build scalable systems that grow with your organization.',
    icon: Database,
    features: [
      'Custom CRM development',
      'Inventory management',
      'Workflow automation',
      'API integrations',
      'Cloud migration services',
    ],
    cta: 'Discuss Your Needs',
    href: '/services/business-systems',
  },
  {
    slug: 'ai-software',
    title: 'AI & Software Solutions',
    description: 'Leverage artificial intelligence to gain competitive advantage. From chatbots to predictive analytics, we make AI practical.',
    icon: BrainCircuit,
    features: [
      'Custom AI model development',
      'Chatbot integration',
      'Data analytics & insights',
      'Process automation',
      'Machine learning consulting',
    ],
    cta: 'Explore AI Options',
    href: '/services/ai-software',
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-canvas">
      {/* Hero Section */}
      <section className="bg-graphite text-white py-20 md:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="font-heading font-extrabold text-4xl md:text-5xl lg:text-6xl mb-6">
              Services That Drive{' '}
              <span className="text-neon-volt">Real Results</span>
            </h1>
            <p className="font-body text-lg md:text-xl text-gray-300 mb-8">
              From rough concepts to working realities. We offer comprehensive digital services 
              tailored for Sri Lankan businesses and ambitious professionals.
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

      {/* Services Grid */}
      <section className="py-16 md:py-24" aria-labelledby="services-heading">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="services-heading" className="sr-only">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <article
                  key={service.slug}
                  className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow focus-within:ring-2 focus-within:ring-neon-volt"
                >
                  <div className="w-12 h-12 bg-blueprint text-white rounded-lg flex items-center justify-center mb-6">
                    <Icon className="w-6 h-6" aria-hidden="true" />
                  </div>
                  <h3 className="font-heading font-bold text-xl mb-3">
                    <Link href={service.href} className="hover:text-blueprint focus:outline-none focus:underline">
                      {service.title}
                    </Link>
                  </h3>
                  <p className="font-body text-gray-600 mb-6">{service.description}</p>
                  <ul className="space-y-2 mb-6" aria-label={`${service.title} features`}>
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm text-gray-700">
                        <span className="text-neon-volt mt-0.5" aria-hidden="true">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={service.href}
                    className="inline-flex items-center gap-1 text-blueprint font-body font-medium hover:underline focus:outline-none focus:underline"
                  >
                    {service.cta}
                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </Link>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-white py-16 md:py-24" aria-labelledby="process-heading">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 id="process-heading" className="font-heading font-bold text-3xl md:text-4xl mb-4">
              How We Work
            </h2>
            <p className="font-body text-gray-600 text-lg">
              Our proven process ensures clarity, efficiency, and exceptional results every time.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              { step: '01', title: 'Discover', desc: 'We listen deeply to understand your goals and challenges.' },
              { step: '02', title: 'Strategize', desc: 'Crafting a tailored roadmap aligned with your objectives.' },
              { step: '03', title: 'Create', desc: 'Building with precision using modern tools and best practices.' },
              { step: '04', title: 'Deliver', desc: 'Launching solutions that drive measurable impact.' },
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
      </section>

      {/* CTA Section */}
      <section className="bg-graphite text-white py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">
            Ready to Transform Your Digital Presence?
          </h2>
          <p className="font-body text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Let's discuss how our services can help you achieve your goals. 
            No pressure, just honest advice.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-neon-volt text-graphite font-body font-semibold px-8 py-4 rounded-md hover:bg-white transition-colors focus:outline-none focus:ring-2 focus:ring-neon-volt focus:ring-offset-2 focus:ring-offset-graphite"
          >
            Get in Touch
            <ArrowRight className="w-5 h-5" aria-hidden="true" />
          </Link>
        </div>
      </section>
    </main>
  );
}
