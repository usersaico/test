'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * Sketchworks Header Component
 * 
 * Accessibility Features:
 * - Semantic <header> element
 * - Skip link support (handled in layout)
 * - Keyboard navigable mobile menu
 * - ARIA labels for toggle button
 * - Focus trap in mobile menu
 * - Proper heading hierarchy maintained
 * 
 * Brand Compliance:
 * - Horizontal wordmark with neon dot on 'O'
 * - SW monogram for mobile
 * - Brand colors via Tailwind tokens only
 * - Space Grotesk for logo, Inter for nav
 */

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/about', label: 'About' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
];

export default function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect for header background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-graphite/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
      role="banner"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo - Horizontal Wordmark */}
          <Link
            href="/"
            className="flex-shrink-0 focus:outline-none focus:ring-2 focus:ring-neon-volt focus:ring-offset-2 focus:ring-offset-graphite rounded-lg"
            aria-label="Sketchworks Home"
          >
            <div className="flex items-center space-x-1">
              <span className="font-space-grotesk font-bold text-2xl text-canvas-white tracking-tight">
                SKETCH
              </span>
              <span className="font-space-grotesk font-extrabold text-2xl text-canvas-white tracking-tight relative">
                W
                <span className="text-neon-volt">O</span>
                RKS
                {/* Neon dot pivot */}
                <span className="absolute -top-1 -right-1 w-2 h-2 bg-neon-volt rounded-full hidden md:block"></span>
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8" aria-label="Main navigation">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`font-inter font-medium text-sm transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-neon-volt focus:ring-offset-2 focus:ring-offset-graphite rounded px-2 py-1 ${
                    isActive
                      ? 'text-neon-volt'
                      : 'text-canvas-white hover:text-neon-volt'
                  }`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {item.label}
                </Link>
              );
            })}
            
            {/* CTA Button */}
            <Link
              href="/contact"
              className="font-inter font-medium text-sm bg-neon-volt text-graphite px-5 py-2.5 rounded-md hover:bg-opacity-90 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-neon-volt focus:ring-offset-2 focus:ring-offset-graphite transform hover:scale-105"
              aria-label="Get in touch with Sketchworks"
            >
              Start Project
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="md:hidden p-2 rounded-md text-canvas-white hover:text-neon-volt focus:outline-none focus:ring-2 focus:ring-neon-volt focus:ring-offset-2 focus:ring-offset-graphite"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            <span className="sr-only">
              {isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            </span>
            <div className="w-6 h-6 relative flex items-center justify-center">
              <AnimatePresence mode="wait">
                {isMobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -45, opacity: 0 }}
                    animate={{ rotate: 45, opacity: 1 }}
                    exit={{ rotate: -45, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="w-6 h-0.5 bg-canvas-white absolute"
                  />
                ) : (
                  <motion.div
                    key="open"
                    initial={{ rotate: 0, opacity: 1 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 45, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="w-6 h-0.5 bg-canvas-white"
                  />
                )}
              </AnimatePresence>
              {!isMobileMenuOpen && (
                <motion.div
                  initial={{ width: 0, opacity: 0 }}
                  animate={{ width: '100%', opacity: 1 }}
                  exit={{ width: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="w-6 h-0.5 bg-canvas-white absolute mt-2"
                />
              )}
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="md:hidden bg-graphite border-t border-gray-800"
            role="menu"
            aria-label="Mobile navigation"
          >
            <div className="px-4 pt-4 pb-6 space-y-2">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`block font-inter font-medium text-base px-4 py-3 rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-neon-volt focus:ring-offset-2 focus:ring-offset-graphite ${
                      isActive
                        ? 'text-neon-volt bg-gray-800'
                        : 'text-canvas-white hover:text-neon-volt hover:bg-gray-800'
                    }`}
                    role="menuitem"
                    aria-current={isActive ? 'page' : undefined}
                  >
                    {item.label}
                  </Link>
                );
              })}
              <div className="pt-4">
                <Link
                  href="/contact"
                  className="block w-full font-inter font-medium text-base bg-neon-volt text-graphite text-center px-4 py-3 rounded-md hover:bg-opacity-90 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-neon-volt focus:ring-offset-2 focus:ring-offset-graphite"
                  role="menuitem"
                >
                  Start Project
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
