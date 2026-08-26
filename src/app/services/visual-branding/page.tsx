import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Palette, Layers, PenTool, BookOpen, Lightbulb } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Visual Branding & Identity Design Sri Lanka | Logo Design | Sketchworks',
  description: 'Professional branding agency in Sri Lanka. Logo design, brand guidelines, marketing collateral, and complete visual identity systems for businesses.',
  keywords: ['logo design Sri Lanka', 'branding agency Colombo', 'visual identity', 'brand guidelines', 'marketing design'],
  openGraph: {
    title: 'Visual Branding Services | Sketchworks',
    description: 'Build a memorable brand that resonates with your audience. Complete visual identity systems crafted for Sri Lankan businesses.',
    type: 'website',
  },
};

const services = [
  {
    icon: Palette,
    title: 'Logo Design',
    description: 'Memorable wordmarks, symbols, and combination marks that capture your brand essence.',
    deliverables: ['Primary logo', 'Secondary variations', 'Favicon', 'Brand mark'],
  },
  {
    icon: Layers,
    title: 'Brand Guidelines',
    description: 'Comprehensive style guides ensuring consistent brand application across all touchpoints.',
    deliverables: ['Color palette', 'Typography system', 'Usage rules', 'Do\'s and don\'s'],
  },
  {
    icon: PenTool,
    title: 'Marketing Collateral',
    description: 'Print and digital materials that communicate your brand professionally.',
    deliverables: ['Business cards', 'Letterheads', 'Brochures', 'Social media templates'],
  },
  {
    icon: BookOpen,
    title: 'Brand Strategy',
    description: 'Strategic foundation defining your position, voice, and visual direction.',
    deliverables: ['Brand positioning', 'Voice & tone', 'Target audience', 'Competitive analysis'],
  },
];

const process = [
  {
    step: '01',
    title: 'Discovery',
    description: 'Deep dive into your business, audience, competitors, and aspirations through workshops and research.',
  },
  {
    step: '02',
    title: 'Strategy',
    description: 'Defining your brand positioning, personality, and visual direction based on insights.',
  },
  {
    step: '03',
    title: 'Design',
    description: 'Creating multiple concepts, refining selected directions, and developing the complete system.',
  },
  {
    step: '04',
    title: 'Delivery',
    description: 'Providing all files, guidelines, and support for seamless implementation across channels.',
  },
];

const portfolio = [
  {
    client: 'Ceylon Tea Co.',
    category: 'Complete Rebrand',
    description: 'Modernized heritage brand for international export market while honoring 150-year legacy.',
    image: '/images/work/ceylon-tea.jpg',
  },
  {
    client: 'Colombo Tech Hub',
    category: 'Startup Identity',
    description: 'Vibrant tech-forward identity for co-working space targeting young entrepreneurs.',
    image: '/images/work/tech-hub.jpg',
  },
  {
    client: 'Ayurveda Plus',
    category: 'Wellness Brand',
    description: 'Serene, natural aesthetic for premium Ayurvedic product line expanding to Middle East.',
    image: '/images/work/ayurveda.jpg',
  },
];

export default function VisualBrandingPage() {
  return (
    <main className="min-h-screen bg-canvas">
      {/* Hero Section */}
      <section className="bg-graphite text-white py-20 md:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="font-heading font-extrabold text-4xl md:text-5xl lg:text-6xl mb-6">
              Visual Branding That{' '}
              <span className="text-neon-volt">Sticks</span>
            </h1>
            <p className="font-body text-lg md:text-xl text-gray-300 mb-8">
              Build a memorable brand that resonates with your audience. From logos to complete 
              brand guidelines, we create cohesive visual systems for Sri Lankan businesses.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-neon-volt text-graphite font-body font-semibold px-6 py-3 rounded-md hover:bg-white transition-colors focus:outline-none focus:ring-2 focus:ring-neon-volt focus:ring-offset-2 focus:ring-offset-graphite"
            >
              Start Your Brand Project
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
              What We Create
            </h2>
            <p className="font-body text-gray-600 text-lg">
              Comprehensive branding services from strategy to execution.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={index} className="bg-canvas p-8 rounded-lg">
                  <div className="w-12 h-12 bg-blueprint text-white rounded-lg flex items-center justify-center mb-6">
                    <Icon className="w-6 h-6" aria-hidden="true" />
                  </div>
                  <h3 className="font-heading font-bold text-xl mb-3">{service.title}</h3>
                  <p className="font-body text-gray-600 mb-6">{service.description}</p>
                  <ul className="space-y-2" aria-label={`${service.title} deliverables`}>
                    {service.deliverables.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                        <span className="text-neon-volt mt-0.5" aria-hidden="true">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 md:py-24 bg-canvas" aria-labelledby="process-heading">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 id="process-heading" className="font-heading font-bold text-3xl md:text-4xl mb-4">
              Our Branding Process
            </h2>
            <p className="font-body text-gray-600 text-lg">
              A proven methodology that balances creativity with strategic thinking.
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

      {/* Portfolio Section */}
      <section className="py-16 md:py-24 bg-white" aria-labelledby="work-heading">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 id="work-heading" className="font-heading font-bold text-3xl md:text-4xl mb-4">
              Recent Branding Work
            </h2>
            <p className="font-body text-gray-600 text-lg">
              Real projects for Sri Lankan businesses across industries.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {portfolio.map((project, index) => (
              <article key={index} className="group">
                <div className="aspect-square bg-gray-200 rounded-lg mb-4 overflow-hidden">
                  {/* Placeholder for actual project image - replace with real images */}
                  <div className="w-full h-full bg-gradient-to-br from-blueprint to-graphite flex items-center justify-center text-white">
                    <Palette className="w-16 h-16 opacity-50" aria-hidden="true" />
                  </div>
                </div>
                <h3 className="font-heading font-bold text-xl mb-1 group-hover:text-blueprint transition-colors">
                  {project.client}
                </h3>
                <p className="text-neon-volt font-body font-medium text-sm mb-2">{project.category}</p>
                <p className="font-body text-gray-600 text-sm">{project.description}</p>
              </article>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 text-blueprint font-body font-semibold hover:underline focus:outline-none focus:underline"
            >
              View Full Portfolio
              <ArrowRight className="w-5 h-5" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* Investment Section */}
      <section className="py-16 md:py-24 bg-canvas" aria-labelledby="investment-heading">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 id="investment-heading" className="font-heading font-bold text-3xl md:text-4xl mb-6 text-center">
              Branding Investment
            </h2>
            <div className="bg-white rounded-lg p-8 md:p-12">
              <p className="font-body text-gray-700 text-lg mb-6">
                Every brand is unique, so we tailor our approach to your specific needs. 
                Most complete branding projects fall within these ranges:
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="font-body text-gray-700">Logo Design Only</span>
                  <span className="font-heading font-bold text-graphite">LKR 45,000 - 85,000</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="font-body text-gray-700">Visual Identity System</span>
                  <span className="font-heading font-bold text-graphite">LKR 120,000 - 250,000</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="font-body text-gray-700">Complete Brand Package</span>
                  <span className="font-heading font-bold text-graphite">LKR 280,000 - 500,000+</span>
                </div>
              </div>
              <p className="font-body text-gray-600 text-sm mb-6">
                * Pricing varies based on scope, complexity, and usage rights. Contact us for a detailed quote.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-neon-volt text-graphite font-body font-semibold px-6 py-3 rounded-md hover:bg-white transition-colors focus:outline-none focus:ring-2 focus:ring-neon-volt focus:ring-offset-2 focus:ring-offset-white w-full md:w-auto justify-center"
              >
                Request Custom Quote
                <ArrowRight className="w-5 h-5" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-graphite text-white py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">
            Ready to Build a Memorable Brand?
          </h2>
          <p className="font-body text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Let's discuss your vision and create a visual identity that sets you apart 
            in the Sri Lankan market and beyond.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-neon-volt text-graphite font-body font-semibold px-8 py-4 rounded-md hover:bg-white transition-colors focus:outline-none focus:ring-2 focus:ring-neon-volt focus:ring-offset-2 focus:ring-offset-graphite"
          >
            Start Your Brand Journey
            <ArrowRight className="w-5 h-5" aria-hidden="true" />
          </Link>
        </div>
      </section>
    </main>
  );
}
