import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Target, Heart, Lightbulb, Users } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Us | Sketchworks - Sri Lankan Digital Transformation Agency',
  description: 'Learn about Sketchworks, a Sri Lankan digital agency committed to transforming businesses through thoughtful design and technology. Our philosophy, team, and approach.',
  keywords: ['about Sketchworks', 'digital agency Sri Lanka', 'our team', 'company philosophy'],
  openGraph: {
    title: 'About Us | Sketchworks',
    description: 'From rough concepts to working realities. Meet the team behind Sri Lanka\'s trusted digital transformation partner.',
    type: 'website',
  },
};

const values = [
  {
    icon: Target,
    title: 'Precision Over Hype',
    description: 'We deliver what we promise, nothing more, nothing less. No buzzwords, just results.',
  },
  {
    icon: Heart,
    title: 'Local Understanding',
    description: 'Born in Sri Lanka, we understand the unique challenges and opportunities of our market.',
  },
  {
    icon: Lightbulb,
    title: 'Practical Innovation',
    description: 'Technology should solve real problems. We choose tools based on impact, not trends.',
  },
  {
    icon: Users,
    title: 'Partnership Mindset',
    description: 'Your success is our success. We build long-term relationships, not one-off projects.',
  },
];

const stats = [
  { value: '150+', label: 'Projects Delivered' },
  { value: '50+', label: 'Happy Clients' },
  { value: '8', label: 'Years in Business' },
  { value: '15', label: 'Team Members' },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-canvas">
      {/* Hero Section */}
      <section className="bg-graphite text-white py-20 md:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="font-heading font-extrabold text-4xl md:text-5xl lg:text-6xl mb-6">
              From Rough Concepts to{' '}
              <span className="text-neon-volt">Working Realities</span>
            </h1>
            <p className="font-body text-lg md:text-xl text-gray-300 mb-8">
              We're a Sri Lankan digital transformation agency helping businesses 
              thrive in the modern economy through thoughtful design and technology.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white" aria-labelledby="stats-heading">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="stats-heading" className="sr-only">Our Impact</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl md:text-5xl font-heading font-bold text-blueprint mb-2">
                  {stat.value}
                </div>
                <p className="font-body text-gray-600 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-16 md:py-24 bg-canvas" aria-labelledby="philosophy-heading">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 id="philosophy-heading" className="font-heading font-bold text-3xl md:text-4xl mb-4">
              Our Philosophy
            </h2>
            <p className="font-body text-gray-600 text-lg">
              The principles that guide every decision we make.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="bg-white p-8 rounded-lg">
                  <div className="w-12 h-12 bg-blueprint text-white rounded-lg flex items-center justify-center mb-6">
                    <Icon className="w-6 h-6" aria-hidden="true" />
                  </div>
                  <h3 className="font-heading font-bold text-xl mb-3">{value.title}</h3>
                  <p className="font-body text-gray-600">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 md:py-24 bg-white" aria-labelledby="story-heading">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 id="story-heading" className="font-heading font-bold text-3xl md:text-4xl mb-8">
              Our Story
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="font-body text-gray-700 text-lg mb-6">
                Sketchworks began in 2016 with a simple observation: Sri Lankan businesses 
                deserved better than cookie-cutter websites and generic branding. They needed 
                partners who understood both local culture and global standards.
              </p>
              <p className="font-body text-gray-700 text-lg mb-6">
                What started as a two-person operation in a small Colombo office has grown 
                into a full-service digital agency. But our core belief remains unchanged: 
                every business, regardless of size, deserves thoughtful design and 
                technology that drives real results.
              </p>
              <p className="font-body text-gray-700 text-lg">
                Today, we're proud to have helped over 50 Sri Lankan businesses transform 
                their digital presence—from family-owned enterprises expanding online to 
                startups scaling across South Asia.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section Placeholder */}
      <section className="py-16 md:py-24 bg-canvas" aria-labelledby="team-heading">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 id="team-heading" className="font-heading font-bold text-3xl md:text-4xl mb-4">
              Meet the Team
            </h2>
            <p className="font-body text-gray-600 text-lg mb-8">
              A diverse group of designers, developers, and strategists united by 
              a passion for solving problems.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="aspect-square bg-gray-200 rounded-lg flex items-center justify-center">
                  <span className="text-gray-400 font-body text-sm">Team Photo</span>
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
            Want to Work Together?
          </h2>
          <p className="font-body text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help transform your business.
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
