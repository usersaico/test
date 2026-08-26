import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Portfolio | Sketchworks',
  description: 'Real results for Sri Lankan businesses. CV transformations, brand makeovers, and web projects.',
};

const projects = [
  {
    slug: 'tech-startup-rebrand',
    title: 'FinTech Startup Rebrand',
    client: 'PayLanka',
    category: 'Visual Branding',
    image: '/portfolio/paylanka-hero.webp',
    challenge: 'Unknown startup needed trust-worthy brand to compete with established banks.',
    result: 'Brand recognition increased 340%. Series A funding secured within 4 months.',
  },
  {
    slug: 'ecommerce-platform-build',
    title: 'E-commerce Platform Build',
    client: 'Ceylon Crafts',
    category: 'Web Experiences',
    image: '/portfolio/ceylon-crafts-hero.webp',
    challenge: 'Artisan collective selling only at weekend markets. No online presence.',
    result: 'Online sales now 65% of revenue. Shipping to 28 countries worldwide.',
  },
  {
    slug: 'hospital-management-system',
    title: 'Hospital Management System',
    client: 'Colombo Medical Centre',
    category: 'Business Systems',
    image: '/portfolio/cmc-hero.webp',
    challenge: 'Paper-based patient records causing 2+ hour wait times and data errors.',
    result: 'Wait times reduced to 25 minutes. Zero record errors in 18 months.',
  },
];

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-canvas-white pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-6">
        <header className="mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-graphite mb-4 font-heading">
            Selected Work
          </h1>
          <p className="text-xl text-gray-600 font-body max-w-2xl">
            From rough concepts to working realities. Real projects with measurable outcomes.
          </p>
        </header>

        <div className="space-y-16">
          {projects.map((project, index) => (
            <article
              key={project.slug}
              className={`grid md:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
            >
              <Link href={`/portfolio/${project.slug}`} className="group block">
                <div className="relative aspect-video bg-gray-200 rounded-lg overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-sm font-medium">View case study →</span>
                  </div>
                  <div className="w-full h-full flex items-center justify-center text-gray-400">
                    <span className="text-sm">Project Image: {project.client}</span>
                  </div>
                </div>
              </Link>

              <div className={index % 2 === 1 ? 'md:order-first' : ''}>
                <span className="inline-block px-3 py-1 bg-neon-volt/20 text-graphite text-sm font-medium rounded-full mb-4 font-body">
                  {project.category}
                </span>
                <h2 className="text-3xl font-bold text-graphite mb-2 font-heading">
                  {project.title}
                </h2>
                <p className="text-lg text-gray-600 mb-4 font-body">
                  Client: {project.client}
                </p>
                <div className="space-y-4 font-body">
                  <div>
                    <h3 className="font-semibold text-graphite mb-1">Challenge</h3>
                    <p className="text-gray-700">{project.challenge}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-graphite mb-1">Result</h3>
                    <p className="text-gray-700">{project.result}</p>
                  </div>
                </div>
                <Link
                  href={`/portfolio/${project.slug}`}
                  className="inline-flex items-center mt-6 text-blueprint-blue hover:text-neon-volt font-body font-medium"
                >
                  View full case study →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
