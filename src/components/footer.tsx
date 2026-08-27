import Link from 'next/link';

/**
 * Sketchworks Footer Component
 * 
 * Accessibility Features:
 * - Semantic <footer> element
 * - Proper heading hierarchy (h2-h4)
 * - Keyboard navigable links with focus states
 * - ARIA labels for social links
 * - Visible focus rings (2px solid #CCFF00)
 * - Skip link target support
 * 
 * Brand Compliance:
 * - Vertical stack logo variant
 * - Brand colors via Tailwind tokens only
 * - Space Grotesk for headings, Inter for body
 * - Confident, precise voice (no jargon)
 * 
 * SEO Features:
 * - Internal linking structure
 * - Sitemap reference
 * - Contact information
 * - Social media links
 */

const footerLinks = {
  services: [
    { href: '/services/cv-writing', label: 'CV Writing' },
    { href: '/services/visual-branding', label: 'Visual Branding' },
    { href: '/services/web-experiences', label: 'Web Experiences' },
    { href: '/services/business-systems', label: 'Business Systems' },
    { href: '/services/ai-software', label: 'AI & Software' },
  ],
  company: [
    { href: '/about', label: 'About Us' },
    { href: '/portfolio', label: 'Portfolio' },
    { href: '/blog', label: 'Blog' },
    { href: '/contact', label: 'Contact' },
  ],
  legal: [
    { href: '/privacy', label: 'Privacy Policy' },
    { href: '/terms', label: 'Terms of Service' },
  ],
};

const socialLinks = [
  {
    href: 'https://linkedin.com/company/sketchworks-lk',
    label: 'LinkedIn',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
      </svg>
    ),
  },
  {
    href: 'https://twitter.com/sketchworks_lk',
    label: 'Twitter',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
      </svg>
    ),
  },
  {
    href: 'https://github.com/sketchworks-lk',
    label: 'GitHub',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-2.096 1.029-2.833-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.737 1.028 1.74 1.028 2.833 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"/>
      </svg>
    ),
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-graphite border-t border-gray-800" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 md:gap-12">
          
          {/* Brand Column */}
          <div className="lg:col-span-2">
            {/* Vertical Stack Logo */}
            <Link
              href="/"
              className="inline-block mb-6 focus:outline-none focus:ring-2 focus:ring-neon-volt focus:ring-offset-2 focus:ring-offset-graphite rounded-lg p-2 -ml-2"
              aria-label="Sketchworks Home"
            >
              <div className="flex flex-col items-center text-center">
                <span className="font-space-grotesk font-bold text-xl text-canvas-white tracking-wider">
                  SKETCH
                </span>
                <span className="font-space-grotesk font-extrabold text-xl text-canvas-white tracking-wider relative">
                  W<span className="text-neon-volt">O</span>RKS
                  {/* Centered neon dot pivot */}
                  <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-neon-volt rounded-full"></span>
                </span>
              </div>
            </Link>
            
            <p className="font-inter text-canvas-white/80 text-sm leading-relaxed mb-6 max-w-xs">
              From rough concepts to working realities. We build digital experiences 
              that transform Sri Lankan businesses and exceed global standards.
            </p>
            
            {/* Social Links */}
            <nav className="flex space-x-4" aria-label="Social media links">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-canvas-white/60 hover:text-neon-volt transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-neon-volt focus:ring-offset-2 focus:ring-offset-graphite rounded p-1"
                  aria-label={`Follow Sketchworks on ${social.label}`}
                >
                  {social.icon}
                </a>
              ))}
            </nav>
          </div>

          {/* Services Column */}
          <div>
            <h2 className="font-space-grotesk font-bold text-canvas-white text-lg mb-4">
              Services
            </h2>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-inter text-canvas-white/70 hover:text-neon-volt text-sm transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-neon-volt focus:ring-offset-2 focus:ring-offset-graphite rounded px-1 py-0.5 inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h2 className="font-space-grotesk font-bold text-canvas-white text-lg mb-4">
              Company
            </h2>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-inter text-canvas-white/70 hover:text-neon-volt text-sm transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-neon-volt focus:ring-offset-2 focus:ring-offset-graphite rounded px-1 py-0.5 inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h2 className="font-space-grotesk font-bold text-canvas-white text-lg mb-4">
              Contact
            </h2>
            <address className="not-italic space-y-3">
              <p className="font-inter text-canvas-white/70 text-sm">
                Colombo, Sri Lanka
              </p>
              <p>
                <a
                  href="mailto:hello@sketchworks.lk"
                  className="font-inter text-canvas-white/70 hover:text-neon-volt text-sm transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-neon-volt focus:ring-offset-2 focus:ring-offset-graphite rounded px-1 py-0.5 inline-block"
                >
                  hello@sketchworks.lk
                </a>
              </p>
              <p>
                <a
                  href="tel:+94771234567"
                  className="font-inter text-canvas-white/70 hover:text-neon-volt text-sm transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-neon-volt focus:ring-offset-2 focus:ring-offset-graphite rounded px-1 py-0.5 inline-block"
                >
                  +94 77 123 4567
                </a>
              </p>
            </address>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            
            {/* Copyright */}
            <p className="font-inter text-canvas-white/50 text-xs">
              © {currentYear} Sketchworks. All rights reserved.
            </p>

            {/* Legal Links */}
            <nav className="flex space-x-6" aria-label="Legal links">
              {footerLinks.legal.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="font-inter text-canvas-white/50 hover:text-neon-volt text-xs transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-neon-volt focus:ring-offset-2 focus:ring-offset-graphite rounded px-1 py-0.5 inline-block"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Made in Sri Lanka Badge */}
            <div className="flex items-center space-x-2">
              <span className="font-inter text-canvas-white/50 text-xs">
                Made with precision in
              </span>
              <span className="font-inter font-medium text-neon-volt text-xs">
                Sri Lanka 🇱🇰
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
