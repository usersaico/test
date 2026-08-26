import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Insights | Sketchworks Blog',
  description: 'Digital transformation tips for Sri Lankan businesses. CV advice, branding insights, and tech trends.',
};

const posts = [
  {
    slug: 'cv-writing-sri-lanka-2026',
    title: 'CV Writing in Sri Lanka: What Works in 2026',
    excerpt: 'Local employers want clarity, not fluff. Learn how to structure your CV for Colombo job market success.',
    date: '2026-01-15',
    readTime: '5 min read',
    category: 'Career',
  },
  {
    slug: 'branding-cost-colombo',
    title: 'How Much Does Professional Branding Cost in Colombo?',
    excerpt: 'Transparent pricing breakdown for logos, brand guidelines, and visual identity packages in Sri Lanka.',
    date: '2026-01-10',
    readTime: '7 min read',
    category: 'Branding',
  },
  {
    slug: 'website-speed-sri-lanka',
    title: 'Why Your Website Loads Slowly in Sri Lanka (And How to Fix It)',
    excerpt: 'Local hosting vs international CDNs. Real performance data from 50+ Sri Lankan business websites.',
    date: '2026-01-05',
    readTime: '6 min read',
    category: 'Web Development',
  },
  {
    slug: 'ai-tools-sme-sri-lanka',
    title: 'AI Tools Every Sri Lankan SME Should Use in 2026',
    excerpt: 'Practical AI solutions for inventory, customer service, and marketing. No hype, just ROI.',
    date: '2025-12-28',
    readTime: '8 min read',
    category: 'AI & Business',
  },
  {
    slug: 'portfolio-mistakes-fresh-graduates',
    title: '5 Portfolio Mistakes Fresh Graduates Make in Sri Lanka',
    excerpt: 'What hiring managers actually look for. Real feedback from Colombo tech companies.',
    date: '2025-12-20',
    readTime: '4 min read',
    category: 'Career',
  },
];

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-canvas-white pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-6">
        <header className="mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-graphite mb-4 font-heading">
            Insights
          </h1>
          <p className="text-xl text-gray-600 font-body max-w-2xl">
            Digital transformation tips for Sri Lankan businesses. No jargon, just practical advice.
          </p>
        </header>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow"
            >
              <Link href={`/blog/${post.slug}`} className="block p-6">
                <span className="inline-block px-3 py-1 bg-neon-volt/20 text-graphite text-sm font-medium rounded-full mb-4 font-body">
                  {post.category}
                </span>
                <h2 className="text-xl font-bold text-graphite mb-3 font-heading line-clamp-2">
                  {post.title}
                </h2>
                <p className="text-gray-600 mb-4 font-body line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="flex items-center text-sm text-gray-500 font-body">
                  <time dateTime={post.date}>{post.date}</time>
                  <span className="mx-2">•</span>
                  <span>{post.readTime}</span>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
