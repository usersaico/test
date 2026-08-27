'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const serviceLinks = [
  { href: '/services/cv-writing', label: 'CV Writing' },
  { href: '/services/visual-branding', label: 'Visual Branding' },
  { href: '/services/web-experiences', label: 'Web Experiences' },
  { href: '/services/business-systems', label: 'Business Systems' },
  { href: '/services/ai-software', label: 'AI & Software' },
];

const companyLinks = [
  { href: '/about', label: 'About Us' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/blog', label: 'Insights' },
  { href: '/contact', label: 'Contact' },
];

const socialLinks = [
  { href: 'https://linkedin.com', label: 'LinkedIn', icon: 'M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z' },
  { href: 'https://twitter.com', label: 'Twitter', icon: 'M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z' },
  { href: 'https://github.com', label: 'GitHub', icon: 'M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z' },
];

export default function Footer() {
  return (
    <footer className="bg-graphite border-t border-white/5">
      <div className="container mx-auto px-6 md:px-12 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
          {/* Brand Column */}
          <motion.div 
            className="lg:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Link href="/" className="inline-block mb-6 group">
              <div className="flex flex-col items-start space-y-1">
                <span className="text-2xl font-bold text-white tracking-tight">SKETCH</span>
                <div className="flex items-center justify-center w-full">
                  <span className="text-2xl font-bold text-white/40 tracking-tight group-hover:text-white transition-colors duration-300">
                    W
                  </span>
                  <motion.span 
                    className="relative inline-block w-4 h-4 mx-1"
                    animate={{ 
                      scale: [1, 1.2, 1],
                      boxShadow: [
                        '0 0 0 rgba(204,255,0,0)',
                        '0 0 20px rgba(204,255,0,0.5)',
                        '0 0 0 rgba(204,255,0,0)'
                      ]
                    }}
                    transition={{ 
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <span className="absolute inset-0 bg-neon-volt rounded-full" />
                    <span className="absolute inset-0 bg-neon-volt rounded-full blur-sm opacity-50" />
                  </motion.span>
                  <span className="text-2xl font-bold text-white/40 tracking-tight group-hover:text-white transition-colors duration-300">
                    RKS
                  </span>
                </div>
              </div>
            </Link>
            
            <p className="text-white/60 text-sm leading-relaxed mb-6 max-w-xs">
              From rough concepts to working realities. We transform ambitious ideas into 
              precision-crafted digital experiences.
            </p>

            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-10 h-10 flex items-center justify-center rounded-full border border-white/10 text-white/60 hover:text-neon-volt hover:border-neon-volt/50 transition-all duration-300"
                  aria-label={social.label}
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d={social.icon} />
                  </svg>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Services Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-xs font-semibold text-white/40 uppercase tracking-wider mb-6">
              Services
            </h3>
            <ul className="space-y-4">
              {serviceLinks.map((link, index) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 hover:text-neon-volt transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Company Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-xs font-semibold text-white/40 uppercase tracking-wider mb-6">
              Company
            </h3>
            <ul className="space-y-4">
              {companyLinks.map((link, index) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 hover:text-neon-volt transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-xs font-semibold text-white/40 uppercase tracking-wider mb-6">
              Contact
            </h3>
            <address className="not-italic space-y-3">
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="text-sm text-white/60"
              >
                Colombo, Sri Lanka
              </motion.p>
              <motion.a
                href="mailto:hello@sketchworks.lk"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="block text-sm text-white/60 hover:text-neon-volt transition-colors duration-300"
              >
                hello@sketchworks.lk
              </motion.a>
            </address>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div 
          className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} Sketchworks. All rights reserved.
          </p>
          
          <div className="flex items-center space-x-6">
            <Link
              href="/privacy"
              className="text-xs text-white/40 hover:text-white transition-colors duration-300"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-xs text-white/40 hover:text-white transition-colors duration-300"
            >
              Terms of Service
            </Link>
          </div>

          <motion.p 
            className="text-xs text-white/40 flex items-center gap-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            Made with precision in Sri Lanka 🇱🇰
          </motion.p>
        </motion.div>
      </div>
    </footer>
  );
}
