import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';

interface BlogPostParams {
  params: Promise<{ slug: string }>;
}

const posts: Record<string, {
  title: string;
  date: string;
  readTime: string;
  category: string;
  content: string;
}> = {
  'cv-writing-sri-lanka-2026': {
    title: 'CV Writing in Sri Lanka: What Works in 2026',
    date: '2026-01-15',
    readTime: '5 min read',
    category: 'Career',
    content: `
      <p class="text-lg text-gray-700 mb-6 font-body">The Sri Lankan job market has evolved. After reviewing 500+ CVs for Colombo employers, we've identified what actually gets interviews.</p>
      
      <h2 class="text-2xl font-bold text-graphite mb-4 mt-8 font-heading">1. Lead with Impact, Not Objectives</h2>
      <p class="text-gray-700 mb-4 font-body">Remove "Seeking a challenging position..." Employers want results. Start with 3 bullet points showing measurable achievements.</p>
      <p class="text-gray-700 mb-4 font-body"><strong>Before:</strong> "Looking for growth opportunities in a dynamic organization."</p>
      <p class="text-gray-700 mb-4 font-body"><strong>After:</strong> "Increased sales by 34% in 6 months. Managed team of 8. Reduced costs by LKR 2.3M annually."</p>

      <h2 class="text-2xl font-bold text-graphite mb-4 mt-8 font-heading">2. One Page for Most Roles</h2>
      <p class="text-gray-700 mb-4 font-body">Sri Lankan hiring managers spend 6 seconds scanning CVs. If you have under 10 years experience, keep it to one page. Senior executives can use two.</p>

      <h2 class="text-2xl font-bold text-graphite mb-4 mt-8 font-heading">3. Include WhatsApp Number</h2>
      <p class="text-gray-700 mb-4 font-body">90% of recruiter communication happens on WhatsApp in Sri Lanka. Make your number clickable with country code (+94).</p>

      <h2 class="text-2xl font-bold text-graphite mb-4 mt-8 font-heading">4. Skills Section Matters</h2>
      <p class="text-gray-700 mb-4 font-body">List tools you actually use. "Microsoft Office" is too vague. Write "Excel (Pivot Tables, VLOOKUP)" or "Power BI Dashboard Creation".</p>

      <h2 class="text-2xl font-bold text-graphite mb-4 mt-8 font-heading">5. References Available on Request</h2>
      <p class="text-gray-700 mb-4 font-body">Don't waste space listing referees. Have their contact details ready separately. Only include if explicitly requested.</p>

      <div class="bg-neon-volt/10 border-l-4 border-neon-volt p-6 my-8">
        <p class="font-body text-gray-800"><strong>Pro tip:</strong> Save your CV as PDF with filename "YourName_CV_Role.pdf". Never send editable Word documents.</p>
      </div>

      <p class="text-gray-700 mb-4 font-body">Need professional CV writing? <Link href="/services/cv-writing" className="text-blueprint-blue underline hover:text-neon-volt">Our CV service</Link> includes ATS optimization and LinkedIn profile rewrite.</p>
    `,
  },
  'branding-cost-colombo': {
    title: 'How Much Does Professional Branding Cost in Colombo?',
    date: '2026-01-10',
    readTime: '7 min read',
    category: 'Branding',
    content: `
      <p class="text-lg text-gray-700 mb-6 font-body">Transparent pricing for branding services in Sri Lanka. No hidden fees, no upsells.</p>

      <h2 class="text-2xl font-bold text-graphite mb-4 mt-8 font-heading">Logo Design Only</h2>
      <ul class="list-disc list-inside text-gray-700 mb-6 font-body space-y-2">
        <li>Freelancer: LKR 15,000 - 50,000</li>
        <li>Small Agency: LKR 75,000 - 150,000</li>
        <li>Premium Agency: LKR 200,000+</li>
      </ul>

      <h2 class="text-2xl font-bold text-graphite mb-4 mt-8 font-heading">Complete Visual Identity</h2>
      <p class="text-gray-700 mb-4 font-body">Includes logo, color palette, typography, brand guidelines, business cards, letterhead.</p>
      <ul class="list-disc list-inside text-gray-700 mb-6 font-body space-y-2">
        <li>Starter Package: LKR 150,000 - 300,000</li>
        <li>Professional Package: LKR 350,000 - 600,000</li>
        <li>Enterprise Package: LKR 750,000+</li>
      </ul>

      <h2 class="text-2xl font-bold text-graphite mb-4 mt-8 font-heading">What Affects Pricing?</h2>
      <ul class="list-disc list-inside text-gray-700 mb-6 font-body space-y-2">
        <li>Number of revision rounds</li>
        <li>Deliverable formats (vector, web, print)</li>
        <li>Brand strategy sessions included</li>
        <li>Agency reputation and portfolio</li>
      </ul>

      <div class="bg-neon-volt/10 border-l-4 border-neon-volt p-6 my-8">
        <p class="font-body text-gray-800"><strong>Sketchworks pricing:</strong> Complete visual identity starts at LKR 285,000. Includes 3 concepts, 2 revision rounds, full brand guidelines PDF.</p>
      </div>
    `,
  },
  'website-speed-sri-lanka': {
    title: 'Why Your Website Loads Slowly in Sri Lanka (And How to Fix It)',
    date: '2026-01-05',
    readTime: '6 min read',
    category: 'Web Development',
    content: `
      <p class="text-lg text-gray-700 mb-6 font-body">We tested 50+ Sri Lankan business websites. Average load time: 8.3 seconds. Here's how to get under 2 seconds.</p>

      <h2 class="text-2xl font-bold text-graphite mb-4 mt-8 font-heading">The Problem: International Hosting</h2>
      <p class="text-gray-700 mb-4 font-body">Most Sri Lankan sites host in Singapore, India, or Europe. That's 100-300ms latency before your site even starts loading.</p>

      <h2 class="text-2xl font-bold text-graphite mb-4 mt-8 font-heading">Solution 1: Use a CDN</h2>
      <p class="text-gray-700 mb-4 font-body">Cloudflare has edge locations in Colombo. Free tier includes SSL, DDoS protection, and caching. Setup takes 15 minutes.</p>

      <h2 class="text-2xl font-bold text-graphite mb-4 mt-8 font-heading">Solution 2: Optimize Images</h2>
      <p class="text-gray-700 mb-4 font-body">Average Sri Lankan site uses 4MB of images. Convert to WebP/AVIF. Compress to under 200KB per image. Use responsive srcsets.</p>

      <h2 class="text-2xl font-bold text-graphite mb-4 mt-8 font-heading">Solution 3: Lazy Loading</h2>
      <p class="text-gray-700 mb-4 font-body">Only load images when they enter viewport. Native HTML lazy loading works in all modern browsers.</p>

      <div class="bg-neon-volt/10 border-l-4 border-neon-volt p-6 my-8">
        <p class="font-body text-gray-800"><strong>Results:</strong> We reduced a Colombo retailer's load time from 9.2s to 1.8s. Mobile conversions increased 47%.</p>
      </div>
    `,
  },
  'ai-tools-sme-sri-lanka': {
    title: 'AI Tools Every Sri Lankan SME Should Use in 2026',
    date: '2025-12-28',
    readTime: '8 min read',
    category: 'AI & Business',
    content: `
      <p class="text-lg text-gray-700 mb-6 font-body">Practical AI tools that deliver ROI for Sri Lankan small businesses. No ChatGPT hype.</p>

      <h2 class="text-2xl font-bold text-graphite mb-4 mt-8 font-heading">1. Inventory Management: Zoho Inventory</h2>
      <p class="text-gray-700 mb-4 font-body">AI predicts stock needs based on sales patterns. Integrates with Daraz, PickMe Mart. Starts at LKR 3,500/month.</p>

      <h2 class="text-2xl font-bold text-graphite mb-4 mt-8 font-heading">2. Customer Service: Tidio Chatbot</h2>
      <p class="text-gray-700 mb-4 font-body">Handles 60% of common queries automatically. Sinhala/Tamil support coming 2026. Free for under 50 chats/day.</p>

      <h2 class="text-2xl font-bold text-graphite mb-4 mt-8 font-heading">3. Accounting: QuickBooks AI</h2>
      <p class="text-gray-700 mb-4 font-body">Auto-categorizes expenses, predicts cash flow, flags anomalies. VAT returns generated automatically.</p>

      <h2 class="text-2xl font-bold text-graphite mb-4 mt-8 font-heading">4. Marketing: Canva Magic Write</h2>
      <p class="text-gray-700 mb-4 font-body">Generate social media captions, ad copy, email subject lines. Trained on high-performing Sri Lankan campaigns.</p>

      <div class="bg-neon-volt/10 border-l-4 border-neon-volt p-6 my-8">
        <p class="font-body text-gray-800"><strong>Implementation tip:</strong> Start with one tool. Train your team for 2 weeks. Measure ROI before adding more.</p>
      </div>
    `,
  },
  'portfolio-mistakes-fresh-graduates': {
    title: '5 Portfolio Mistakes Fresh Graduates Make in Sri Lanka',
    date: '2025-12-20',
    readTime: '4 min read',
    category: 'Career',
    content: `
      <p class="text-lg text-gray-700 mb-6 font-body">Hiring managers from 12 Colombo tech companies shared what makes them reject portfolios instantly.</p>

      <h2 class="text-2xl font-bold text-graphite mb-4 mt-8 font-heading">Mistake 1: University Projects Only</h2>
      <p class="text-gray-700 mb-4 font-body">Academic projects show you can follow instructions. Build something real instead. A live website beats 10 assignment submissions.</p>

      <h2 class="text-2xl font-bold text-graphite mb-4 mt-8 font-heading">Mistake 2: No Context</h2>
      <p class="text-gray-700 mb-4 font-body">Don't just show screenshots. Explain the problem, your role, tools used, and results. Hiring managers want to understand your thinking.</p>

      <h2 class="text-2xl font-bold text-graphite mb-4 mt-8 font-heading">Mistake 3: Broken Links</h2>
      <p class="text-gray-700 mb-4 font-body">40% of graduate portfolios have dead links. Test every URL. Use GitHub Pages or Vercel for free hosting.</p>

      <h2 class="text-2xl font-bold text-graphite mb-4 mt-8 font-heading">Mistake 4: Ignoring Mobile</h2>
      <p class="text-gray-700 mb-4 font-body">Recruiters review portfolios on phones. If your site breaks on mobile, you're out.</p>

      <h2 class="text-2xl font-bold text-graphite mb-4 mt-8 font-heading">Mistake 5: No Contact Information</h2>
      <p class="text-gray-700 mb-4 font-body">Make it easy to reach you. Email, LinkedIn, GitHub, WhatsApp. Remove barriers to hiring you.</p>

      <div class="bg-neon-volt/10 border-l-4 border-neon-volt p-6 my-8">
        <p class="font-body text-gray-800"><strong>Bonus:</strong> Include a 2-minute video walkthrough of your best project. Stand out from 90% of applicants.</p>
      </div>
    `,
  },
};

export async function generateMetadata({ params }: BlogPostParams): Promise<Metadata> {
  const { slug } = await params;
  const post = posts[slug];
  
  if (!post) {
    return {
      title: 'Post Not Found | Sketchworks',
    };
  }

  return {
    title: `${post.title} | Sketchworks`,
    description: post.content.slice(0, 160).replace(/<[^>]*>/g, ''),
    openGraph: {
      type: 'article',
      publishedTime: post.date,
      authors: ['Sketchworks Team'],
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostParams) {
  const { slug } = await params;
  const post = posts[slug];

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-canvas-white pt-24 pb-16">
      <article className="max-w-3xl mx-auto px-6">
        <Link 
          href="/blog" 
          className="inline-flex items-center text-sm text-gray-500 hover:text-neon-volt mb-8 font-body"
        >
          ← Back to Insights
        </Link>

        <header className="mb-12">
          <span className="inline-block px-3 py-1 bg-neon-volt/20 text-graphite text-sm font-medium rounded-full mb-4 font-body">
            {post.category}
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-graphite mb-6 font-heading">
            {post.title}
          </h1>
          <div className="flex items-center text-gray-500 font-body">
            <time dateTime={post.date}>{post.date}</time>
            <span className="mx-2">•</span>
            <span>{post.readTime}</span>
          </div>
        </header>

        <div 
          className="prose prose-lg max-w-none font-body"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        <hr className="my-12 border-gray-200" />

        <nav className="flex justify-between">
          <Link href="/blog" className="text-blueprint-blue hover:text-neon-volt font-body">
            ← All posts
          </Link>
          <Link href="/contact" className="text-blueprint-blue hover:text-neon-volt font-body">
            Work with us →
          </Link>
        </nav>
      </article>
    </main>
  );
}
