import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, ExternalLink } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Our Portfolio | Sketchworks - Web Design & Development Projects Sri Lanka',
  description: 'Explore our portfolio of web design, branding, and software development projects for Sri Lankan businesses. Real results, measurable impact.',
  keywords: ['portfolio', 'web design projects', 'branding work', 'case studies', 'Sri Lanka'],
  openGraph: {
    title: 'Portfolio | Sketchworks',
    description: 'Browse our latest projects showcasing web experiences, branding, and business systems.',
    type: 'website',
  },
};

const projects = [
  {
    slug: 'ceylon-tea-rebrand',
    client: 'Ceylon Tea Co.',
    category: 'Visual Branding',
    title: 'Heritage Meets Modernity',
    description: 'Complete brand transformation for a 150-year-old tea exporter targeting premium international markets.',
    services: ['Logo Design', 'Brand Guidelines', 'Packaging', 'Website'],
    image: '/images/work/ceylon-tea.jpg',
    link: '/portfolio/case-studies/ceylon-tea-rebrand',
  },
  {
    slug: 'colombo-tech-hub',
    client: 'Colombo Tech Hub',
    category: 'Web Experience',
    title: 'Digital Home for Entrepreneurs',
    description: 'Modern website and booking system for Colombo\'s premier co-working space and startup community.',
    services: ['Web Design', 'Booking System', 'Member Portal', 'SEO'],
    image: '/images/work/tech-hub.jpg',
    link: '/portfolio/case-studies/colombo-tech-hub',
  },
  {
    slug: 'ayurveda-plus-ecommerce',
    client: 'Ayurveda Plus',
    category: 'E-commerce',
    title: 'Wellness Products Online',
    description: 'Full e-commerce platform for Ayurvedic product manufacturer expanding to Middle East markets.',
    services: ['E-commerce', 'Payment Integration', 'Inventory System', 'Multi-currency'],
    image: '/images/work/ayurveda.jpg',
    link: '/portfolio/case-studies/ayurveda-plus-ecommerce',
  },
];

const categories = ['All', 'Visual Branding', 'Web Experience', 'E-commerce', 'Business Systems'];

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-canvas">
      {/* Hero Section */}
      <section className="bg-graphite text-white py-20 md:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="font-heading font-extrabold text-4xl md:text-5xl lg:text-6xl mb-6">
              Work That{' '}
              <span className="text-neon-volt">Speaks</span>
            </h1>
            <p className="font-body text-lg md:text-xl text-gray-300 mb-8">
              Real projects for Sri Lankan businesses. Each case study shows 
              the challenge, our approach, and measurable results.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-white border-b border-gray-200" aria-label="Project categories">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3">
            {categories.map((category, index) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-full text-sm font-body transition-colors focus:outline-none focus:ring-2 focus:ring-neon-volt ${
                  index === 0
                    ? 'bg-blueprint text-white'
                    : 'bg-canvas text-gray-700 hover:bg-gray-200'
                }`}
                aria-pressed={index === 0}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 md:py-24" aria-labelledby="projects-heading">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="projects-heading" className="sr-only">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <article
                key={project.slug}
                className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <Link href={project.link} className="block focus:outline-none focus:ring-2 focus:ring-neon-volt">
                  <div className="aspect-video bg-gradient-to-br from-blueprint to-graphite relative overflow-hidden">
                    {/* Placeholder for project image */}
                    <div className="absolute inset-0 flex items-center justify-center text-white">
                      <span className="text-6xl opacity-20">{project.client.charAt(0)}</span>
                    </div>
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="text-white font-body font-semibold flex items-center gap-2">
                        View Case Study
                        <ArrowRight className="w-5 h-5" aria-hidden="true" />
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-neon-volt font-body font-medium text-sm mb-2">{project.category}</p>
                    <h3 className="font-heading font-bold text-xl mb-2 group-hover:text-blueprint transition-colors">
                      {project.title}
                    </h3>
                    <p className="font-body text-gray-600 text-sm mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.services.slice(0, 3).map((service, index) => (
                        <span
                          key={index}
                          className="bg-canvas px-2 py-1 rounded text-xs font-body text-gray-600"
                        >
                          {service}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-graphite text-white py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">
            Ready to Be Our Next Success Story?
          </h2>
          <p className="font-body text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Let's discuss your project and create something remarkable together.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-neon-volt text-graphite font-body font-semibold px-8 py-4 rounded-md hover:bg-white transition-colors focus:outline-none focus:ring-2 focus:ring-neon-volt focus:ring-offset-2 focus:ring-offset-graphite"
          >
            Start Your Project
            <ArrowRight className="w-5 h-5" aria-hidden="true" />
          </Link>
        </div>
      </section>
    </main>
  );
}
