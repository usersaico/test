'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';

const navLinks = [
  { href: '/services', label: 'Services' },
  { href: '/portfolio', label: 'Work' },
  { href: '/about', label: 'About' },
  { href: '/blog', label: 'Insights' },
  { href: '/contact', label: 'Contact' },
];

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  
  // Parallax effect for logo
  const logoY = useTransform(scrollY, [0, 200], [0, 50]);
  const logoOpacity = useTransform(scrollY, [0, 100], [1, 0.7]);
  
  // Header background blur intensity
  const headerBlur = useTransform(scrollY, [0, 50], [0, 12]);
  const isScrolled = useTransform(scrollY, [0, 20], [0, 1]);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [mobileMenuOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 left-0 right-0 z-50"
        style={{
          backdropFilter: useTransform(isScrolled, [0, 1], ['blur(0px)', 'blur(12px)']),
          backgroundColor: useTransform(isScrolled, [0, 1], ['transparent', 'rgba(26,26,26,0.95)'])
        }}
      >
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex items-center justify-between h-20 md:h-24">
            <Link
              href="/"
              className="group relative z-50"
              aria-label="Sketchworks Home"
            >
              <motion.div 
                className="flex items-baseline space-x-1"
                style={{ y: logoY, opacity: logoOpacity }}
              >
                <span className="text-xl md:text-2xl font-bold text-white tracking-tight">
                  SKETCH
                </span>
                <span className="text-xl md:text-2xl font-bold text-white/40 tracking-tight group-hover:text-white transition-colors duration-300">
                  W
                </span>
                <motion.span 
                  className="relative inline-block w-3 h-3 md:w-4 md:h-4"
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
                <span className="text-xl md:text-2xl font-bold text-white/40 tracking-tight group-hover:text-white transition-colors duration-300">
                  RKS
                </span>
              </motion.div>
            </Link>

            <nav className="hidden md:flex items-center space-x-8" aria-label="Main navigation">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={link.href}
                    className={`relative text-sm font-medium tracking-wide transition-colors duration-300 ${
                      pathname === link.href
                        ? 'text-neon-volt'
                        : 'text-white/60 hover:text-white'
                    }`}
                  >
                    {link.label}
                    <motion.span
                      className="absolute -bottom-2 left-0 right-0 h-px bg-neon-volt"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: pathname === link.href ? 1 : 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </Link>
                </motion.div>
              ))}
            </nav>

            <motion.div 
              className="hidden md:block"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
            >
              <Link
                href="/contact"
                className="group relative px-6 py-2.5 text-sm font-medium text-white border border-white/20 rounded-full overflow-hidden transition-all duration-300 hover:border-neon-volt/50 hover:shadow-[0_0_20px_rgba(204,255,0,0.1)]"
              >
                <span className="relative z-10">Start Project</span>
                <motion.span 
                  className="absolute inset-0 bg-white/5"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </Link>
            </motion.div>

            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden relative z-50 w-10 h-10 flex items-center justify-center"
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileMenuOpen}
            >
              <div className="w-5 h-5 relative">
                <motion.span
                  className="absolute h-px bg-white origin-left"
                  animate={mobileMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: -8 }}
                  style={{ width: mobileMenuOpen ? '100%' : '100%' }}
                />
                <motion.span
                  className="absolute h-px bg-white"
                  animate={mobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                  style={{ top: '50%', translateY: '-50%' }}
                />
                <motion.span
                  className="absolute h-px bg-white origin-left"
                  animate={mobileMenuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 8 }}
                  style={{ width: mobileMenuOpen ? '100%' : '80%' }}
                />
              </div>
            </motion.button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="fixed inset-0 bg-graphite/98 backdrop-blur-xl z-40 md:hidden"
              onClick={() => setMobileMenuOpen(false)}
            />
            
            <motion.nav
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed inset-0 z-40 md:hidden flex items-center justify-center"
            >
              <ul className="space-y-8 text-center px-6">
                {navLinks.map((link, index) => (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 + index * 0.08 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`text-3xl md:text-4xl font-bold tracking-wide block py-2 ${
                        pathname === link.href
                          ? 'text-neon-volt'
                          : 'text-white/60 hover:text-white'
                      }`}
                    >
                      {link.label}
                    </Link>
                  </motion.li>
                ))}
                <motion.li
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  <Link
                    href="/contact"
                    onClick={() => setMobileMenuOpen(false)}
                    className="inline-block mt-8 px-10 py-4 text-lg font-medium text-graphite bg-neon-volt rounded-full hover:shadow-[0_0_40px_rgba(204,255,0,0.4)] transition-shadow duration-300"
                  >
                    Start Project
                  </Link>
                </motion.li>
              </ul>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
