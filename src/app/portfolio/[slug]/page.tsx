'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';

const caseStudies: Record<string, {
  title: string;
  client: string;
  category: string;
  date: string;
  challenge: string;
  solution: string;
  results: string[];
  testimonial: { quote: string; author: string; role: string };
  beforeImage: string;
  afterImage: string;
}> = {
  'tech-startup-rebrand': {
    title: 'FinTech Startup Rebrand',
    client: 'PayLanka',
    category: 'Visual Branding',
    date: '2025-11',
    challenge: 'PayLanka was an unknown startup entering Sri Lanka\'s crowded digital payments space. Established banks dominated trust perception. Their initial branding felt generic and failed to communicate security or innovation.',
    solution: 'We developed a brand system balancing trust and innovation. The logo combines a shield (security) with upward arrow (growth). Color palette uses Blueprint Blue for trust, accented with Neon Volt for tech-forward energy. Brand guidelines covered all touchpoints from app UI to merchant signage.',
    results: [
      'Brand recognition increased 340% in 6 months',
      'Series A funding of $2.3M secured within 4 months',
      'Merchant signups up 180% post-rebrand',
      'App store rating improved from 3.8 to 4.7 stars',
    ],
    testimonial: {
      quote: 'Sketchworks didn\'t just design a logo. They gave us a brand that investors trusted immediately. The rebrand paid for itself 100x when we closed our funding round.',
      author: 'Kasun Perera',
      role: 'CEO, PayLanka',
    },
    beforeImage: '/portfolio/paylanka-before.webp',
    afterImage: '/portfolio/paylanka-after.webp',
  },
  'ecommerce-platform-build': {
    title: 'E-commerce Platform Build',
    client: 'Ceylon Crafts',
    category: 'Web Experiences',
    date: '2025-09',
    challenge: 'Ceylon Crafts represented 200+ rural artisans selling handmade goods at weekend markets. No online presence meant zero weekday sales. International customers couldn\'t access their products despite high demand.',
    solution: 'Built a custom e-commerce platform with multi-vendor support. Each artisan gets a profile page. Integrated international shipping calculators, multiple payment gateways (cards, bank transfer, COD), and Sinhala/Tamil language toggle. Mobile-first design for local buyers.',
    results: [
      'Online sales now 65% of total revenue',
      'Shipping to 28 countries worldwide',
      'Average order value: LKR 12,500',
      'Artisan income increased average 45%',
    ],
    testimonial: {
      quote: 'We went from selling only on Saturdays to earning every day. My mother in Kandy now earns more than my brother working in the Middle East. This changed our family\'s future.',
      author: 'Nadeesha Silva',
      role: 'Founder, Ceylon Crafts',
    },
    beforeImage: '/portfolio/ceylon-crafts-before.webp',
    afterImage: '/portfolio/ceylon-crafts-after.webp',
  },
  'hospital-management-system': {
    title: 'Hospital Management System',
    client: 'Colombo Medical Centre',
    category: 'Business Systems',
    date: '2025-07',
    challenge: 'CMC used paper-based patient records causing 2+ hour wait times, lost files, and medication errors. Doctors spent 40% of time on paperwork. Patients complained about repetitive form-filling across visits.',
    solution: 'Developed HIPAA-compliant hospital management system with electronic health records, appointment scheduling, pharmacy integration, and lab result tracking. Tablet-based check-in kiosks reduce reception workload. SMS reminders cut no-shows by 60%.',
    results: [
      'Wait times reduced from 120 to 25 minutes',
      'Zero record errors in 18 months',
      'Doctor administrative time down 65%',
      'Patient satisfaction score: 4.8/5',
    ],
    testimonial: {
      quote: 'Our doctors can finally focus on patients instead of paperwork. The system paid for itself in 8 months through efficiency gains alone. Best investment we\'ve made.',
      author: 'Dr. Rajesh Fernando',
      role: 'Medical Director, CMC',
    },
    beforeImage: '/portfolio/cmc-before.webp',
    afterImage: '/portfolio/cmc-after.webp',
  },
};

export default function CaseStudyPage() {
  const params = useParams();
  const slug = params?.slug as string;
  const project = caseStudies[slug];
  const [sliderPosition, setSliderPosition] = useState(50);

  if (!project) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-graphite mb-4">Project not found</h1>
          <Link href="/portfolio" className="text-blueprint-blue hover:text-neon-volt">
            ← Back to portfolio
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-canvas-white pt-24 pb-16">
      <article className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <header className="mb-12">
          <Link href="/portfolio" className="inline-flex items-center text-sm text-gray-500 hover:text-neon-volt mb-6 font-body">
            ← Back to portfolio
          </Link>
          <span className="inline-block px-3 py-1 bg-neon-volt/20 text-graphite text-sm font-medium rounded-full mb-4 font-body">
            {project.category}
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-graphite mb-4 font-heading">
            {project.title}
          </h1>
          <p className="text-xl text-gray-600 font-body">Client: {project.client}</p>
        </header>

        {/* Before/After Slider */}
        <section className="mb-16" aria-label="Before and After comparison">
          <h2 className="sr-only">Before and After Comparison</h2>
          <div className="relative aspect-video bg-gray-200 rounded-lg overflow-hidden select-none">
            {/* After Image (Background) */}
            <div className="absolute inset-0 bg-blueprint-blue flex items-center justify-center text-white">
              <span>After: {project.client} transformation</span>
            </div>
            
            {/* Before Image (Clipped Foreground) */}
            <div 
              className="absolute inset-0 bg-gray-600 flex items-center justify-center text-white"
              style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
            >
              <span>Before: Original state</span>
            </div>

            {/* Slider Handle */}
            <input
              type="range"
              min="0"
              max="100"
              value={sliderPosition}
              onChange={(e) => setSliderPosition(Number(e.target.value))}
              className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-10"
              aria-label="Drag to compare before and after images"
              aria-valuemin={0}
              aria-valuemax={100}
              aria-valuenow={sliderPosition}
            />
            <div 
              className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 w-1 h-full bg-neon-volt z-5 pointer-events-none"
              style={{ left: `${sliderPosition}%` }}
            />
            <div 
              className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-neon-volt rounded-full flex items-center justify-center z-5 pointer-events-none shadow-lg"
              style={{ left: `${sliderPosition}%` }}
            >
              <svg className="w-5 h-5 text-graphite" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
              </svg>
            </div>
          </div>
          <p className="text-center text-sm text-gray-500 mt-4 font-body">
            Drag slider to compare before and after
          </p>
        </section>

        {/* Project Details */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-2xl font-bold text-graphite mb-4 font-heading">Challenge</h2>
            <p className="text-gray-700 font-body leading-relaxed">{project.challenge}</p>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-graphite mb-4 font-heading">Solution</h2>
            <p className="text-gray-700 font-body leading-relaxed">{project.solution}</p>
          </div>
        </div>

        {/* Results */}
        <section className="bg-neon-volt/10 rounded-lg p-8 mb-16">
          <h2 className="text-2xl font-bold text-graphite mb-6 font-heading">Results</h2>
          <ul className="space-y-4">
            {project.results.map((result, index) => (
              <li key={index} className="flex items-start gap-3 font-body">
                <svg className="w-6 h-6 text-neon-volt flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-800">{result}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Testimonial */}
        <blockquote className="border-l-4 border-neon-volt pl-8 mb-16">
          <p className="text-xl text-gray-700 italic font-body mb-4">"{project.testimonial.quote}"</p>
          <footer className="font-body">
            <cite className="not-italic font-semibold text-graphite">{project.testimonial.author}</cite>
            <span className="text-gray-500 ml-2">{project.testimonial.role}</span>
          </footer>
        </blockquote>

        {/* CTA */}
        <div className="text-center">
          <h2 className="text-2xl font-bold text-graphite mb-4 font-heading">Ready for your transformation?</h2>
          <Link 
            href="/contact" 
            className="inline-block bg-neon-volt text-graphite px-8 py-4 rounded-lg font-bold font-body hover:bg-opacity-90 transition-colors"
          >
            Start your project →
          </Link>
        </div>
      </article>
    </main>
  );
}
