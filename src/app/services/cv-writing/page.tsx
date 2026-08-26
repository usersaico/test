import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, CheckCircle, FileText, TrendingUp, Users, Award } from 'lucide-react';

export const metadata: Metadata = {
  title: 'CV Writing Services Sri Lanka | ATS-Optimized Resumes | Sketchworks',
  description: 'Professional CV writing services in Sri Lanka. Get ATS-optimized resumes that pass screening systems and land interviews. Expert writers with local market knowledge.',
  keywords: ['CV writing Sri Lanka', 'resume writer Colombo', 'ATS resume', 'professional CV', 'career development'],
  openGraph: {
    title: 'CV Writing Services | Sketchworks',
    description: 'Transform your career with professionally written, ATS-optimized CVs tailored for the Sri Lankan and international job market.',
    type: 'website',
  },
};

const features = [
  {
    icon: FileText,
    title: 'ATS-Optimized Formatting',
    description: 'Our CVs are designed to pass Applicant Tracking Systems used by top companies in Sri Lanka and abroad.',
  },
  {
    icon: TrendingUp,
    title: 'Career Storytelling',
    description: 'We craft compelling narratives that highlight your achievements and unique value proposition.',
  },
  {
    icon: Users,
    title: 'Industry Expertise',
    description: 'Writers specialized in IT, finance, healthcare, engineering, hospitality, and more.',
  },
  {
    icon: Award,
    title: 'Interview Success',
    description: 'Clients report 3x more interview invitations within the first month of using our CVs.',
  },
];

const packages = [
  {
    name: 'Essential',
    price: 'LKR 8,500',
    description: 'Perfect for entry-level professionals and fresh graduates.',
    features: [
      'Professional CV rewrite (2 pages)',
      'ATS optimization',
      'Keyword analysis',
      'PDF + Word formats',
      '1 revision round',
    ],
    popular: false,
  },
  {
    name: 'Professional',
    price: 'LKR 15,000',
    description: 'Ideal for mid-career professionals seeking advancement.',
    features: [
      'Comprehensive CV overhaul (2-3 pages)',
      'Advanced ATS optimization',
      'LinkedIn profile optimization',
      'Cover letter included',
      'PDF + Word formats',
      '3 revision rounds',
      'Career consultation (30 min)',
    ],
    popular: true,
  },
  {
    name: 'Executive',
    price: 'LKR 28,000',
    description: 'For senior leaders and C-suite executives.',
    features: [
      'Executive CV package (3+ pages)',
      'Premium ATS optimization',
      'LinkedIn complete makeover',
      'Cover letter + Thank you templates',
      'Reference page',
      'All file formats',
      'Unlimited revisions',
      'Career strategy session (60 min)',
      'Priority delivery (48 hours)',
    ],
    popular: false,
  },
];

const testimonials = [
  {
    quote: "After months of silence, I got 4 interview calls in 2 weeks with my new CV. The team understood exactly what Sri Lankan employers look for.",
    author: 'Kavinda Perera',
    role: 'Software Engineer at Virtusa',
  },
  {
    quote: "The investment paid off immediately. I negotiated a 40% salary increase thanks to how professionally my experience was presented.",
    author: 'Nimasha Fernando',
    role: 'Marketing Manager at LOLC',
  },
  {
    quote: "As someone returning to work after a career break, I was nervous. The team helped me frame my gap positively. Highly recommend!",
    author: 'Rashmi Gunawardena',
    role: 'HR Consultant',
  },
];

export default function CVWritingPage() {
  return (
    <main className="min-h-screen bg-canvas">
      {/* Hero Section */}
      <section className="bg-graphite text-white py-20 md:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="font-heading font-extrabold text-4xl md:text-5xl lg:text-6xl mb-6">
              CV Writing That Gets You{' '}
              <span className="text-neon-volt">Hired Faster</span>
            </h1>
            <p className="font-body text-lg md:text-xl text-gray-300 mb-8">
              Professional resume writing services in Sri Lanka. ATS-optimized CVs crafted by 
              expert writers who understand local and international job markets.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-neon-volt text-graphite font-body font-semibold px-6 py-3 rounded-md hover:bg-white transition-colors focus:outline-none focus:ring-2 focus:ring-neon-volt focus:ring-offset-2 focus:ring-offset-graphite"
              >
                Get Started
                <ArrowRight className="w-5 h-5" aria-hidden="true" />
              </Link>
              <Link
                href="#pricing"
                className="inline-flex items-center justify-center gap-2 border border-white text-white font-body font-semibold px-6 py-3 rounded-md hover:bg-white hover:text-graphite transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-graphite"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-white" aria-labelledby="features-heading">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 id="features-heading" className="font-heading font-bold text-3xl md:text-4xl mb-4">
              Why Choose Our CV Writing?
            </h2>
            <p className="font-body text-gray-600 text-lg">
              We combine local market expertise with international best practices to create CVs that stand out.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="flex gap-4 p-6 bg-canvas rounded-lg">
                  <div className="w-12 h-12 bg-blueprint text-white rounded-lg flex-shrink-0 flex items-center justify-center">
                    <Icon className="w-6 h-6" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-lg mb-2">{feature.title}</h3>
                    <p className="font-body text-gray-600">{feature.description}</p>
                  </div>
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
              Simple 4-Step Process
            </h2>
            <p className="font-body text-gray-600 text-lg">
              From consultation to final draft, we make it easy and stress-free.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              { step: '01', title: 'Consultation', desc: 'Share your background, goals, and target roles via our secure form.' },
              { step: '02', title: 'Research', desc: 'We analyze your industry and study successful CVs in your field.' },
              { step: '03', title: 'Drafting', desc: 'Expert writers craft your CV with ATS optimization and compelling storytelling.' },
              { step: '04', title: 'Refinement', desc: 'Review, request revisions, and receive final files ready to apply.' },
            ].map((item) => (
              <div key={item.step} className="relative">
                <div className="w-16 h-16 bg-neon-volt text-graphite rounded-full flex items-center justify-center mx-auto mb-4 font-heading font-bold text-xl">
                  {item.step}
                </div>
                <h3 className="font-heading font-bold text-lg mb-2 text-center">{item.title}</h3>
                <p className="font-body text-gray-600 text-sm text-center">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-16 md:py-24 bg-white" aria-labelledby="pricing-heading">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 id="pricing-heading" className="font-heading font-bold text-3xl md:text-4xl mb-4">
              Transparent Pricing
            </h2>
            <p className="font-body text-gray-600 text-lg">
              Choose the package that fits your career stage. No hidden fees.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {packages.map((pkg) => (
              <article
                key={pkg.name}
                className={`rounded-lg p-8 ${
                  pkg.popular
                    ? 'bg-graphite text-white ring-4 ring-neon-volt relative'
                    : 'bg-canvas border border-gray-200'
                }`}
              >
                {pkg.popular && (
                  <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-neon-volt text-graphite px-4 py-1 rounded-full text-sm font-body font-semibold">
                    Most Popular
                  </span>
                )}
                <h3 className={`font-heading font-bold text-2xl mb-2 ${pkg.popular ? 'text-white' : ''}`}>
                  {pkg.name}
                </h3>
                <p className={`mb-4 ${pkg.popular ? 'text-gray-300' : 'text-gray-600'}`}>{pkg.description}</p>
                <div className={`text-3xl font-heading font-bold mb-6 ${pkg.popular ? 'text-neon-volt' : 'text-graphite'}`}>
                  {pkg.price}
                </div>
                <ul className="space-y-3 mb-8" aria-label={`${pkg.name} package features`}>
                  {pkg.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle className={`w-5 h-5 flex-shrink-0 ${pkg.popular ? 'text-neon-volt' : 'text-blueprint'}`} aria-hidden="true" />
                      <span className={pkg.popular ? 'text-gray-200' : 'text-gray-700'}>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className={`block w-full text-center py-3 rounded-md font-body font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                    pkg.popular
                      ? 'bg-neon-volt text-graphite hover:bg-white focus:ring-neon-volt focus:ring-offset-graphite'
                      : 'bg-blueprint text-white hover:bg-blue-700 focus:ring-blueprint focus:ring-offset-canvas'
                  }`}
                >
                  Choose {pkg.name}
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24 bg-canvas" aria-labelledby="testimonials-heading">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 id="testimonials-heading" className="font-heading font-bold text-3xl md:text-4xl mb-4">
              Success Stories
            </h2>
            <p className="font-body text-gray-600 text-lg">
              Real results from Sri Lankan professionals who invested in their careers.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <blockquote key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <p className="font-body text-gray-700 mb-4 italic">"{testimonial.quote}"</p>
                <footer>
                  <cite className="font-heading font-bold text-graphite not-italic">{testimonial.author}</cite>
                  <p className="font-body text-gray-600 text-sm">{testimonial.role}</p>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-graphite text-white py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">
            Ready to Land Your Dream Job?
          </h2>
          <p className="font-body text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Try our free CV Score Checker first, or get started with a professional rewrite today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-neon-volt text-graphite font-body font-semibold px-8 py-4 rounded-md hover:bg-white transition-colors focus:outline-none focus:ring-2 focus:ring-neon-volt focus:ring-offset-2 focus:ring-offset-graphite"
            >
              Start Your CV Rewrite
              <ArrowRight className="w-5 h-5" aria-hidden="true" />
            </Link>
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 border border-white text-white font-body font-semibold px-8 py-4 rounded-md hover:bg-white hover:text-graphite transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-graphite"
            >
              Try Free CV Score Checker
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
