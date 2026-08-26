"use client";

import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useState } from "react";

/**
 * Hero Section - Sketchworks Homepage
 * 
 * Features:
 * - Wireframe-to-solid cursor animation (brand signature effect)
 * - Optimized for LCP <2.5s performance target
 * - Accessible heading hierarchy (H1)
 * - Responsive design with mobile-first approach
 * - Reduced motion support for accessibility
 */

interface WireframeCursorProps {
  isHovering: boolean;
}

function WireframeCursor({ isHovering }: WireframeCursorProps) {
  // Cursor position tracking
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Transform cursor appearance based on hover state
  const scale = useTransform(cursorX, () => (isHovering ? 1.5 : 1));
  const opacity = useTransform(cursorY, () => (isHovering ? 0.8 : 1));

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
    };

    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, [cursorX, cursorY]);

  return (
    <motion.div
      className="fixed pointer-events-none z-50 hidden lg:block"
      style={{
        x: cursorX,
        y: cursorY,
        scale,
        opacity,
      }}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      aria-hidden="true"
    >
      {/* Neon dot cursor - brand signature */}
      <div className="relative w-8 h-8">
        {/* Solid circle (appears on hover) */}
        <motion.div
          className="absolute inset-0 bg-neonVolt rounded-full"
          initial={{ scale: 0 }}
          animate={{ scale: isHovering ? 1 : 0 }}
          transition={{ duration: 0.2 }}
        />
        
        {/* Wireframe circle (default state) */}
        <motion.div
          className="absolute inset-0 border-2 border-neonVolt rounded-full"
          initial={{ scale: 1 }}
          animate={{ scale: isHovering ? 0 : 1 }}
          transition={{ duration: 0.2 }}
        />
        
        {/* Crosshair lines (wireframe effect) */}
        <motion.div
          className="absolute top-1/2 left-0 w-8 h-px bg-neonVolt origin-center"
          animate={{ scaleX: isHovering ? 2 : 1, rotate: isHovering ? 45 : 0 }}
          transition={{ duration: 0.3 }}
        />
        <motion.div
          className="absolute top-0 left-1/2 h-8 w-px bg-neonVolt origin-center"
          animate={{ scaleY: isHovering ? 2 : 1, rotate: isHovering ? 45 : 90 }}
          transition={{ duration: 0.3 }}
        />
      </div>
    </motion.div>
  );
}

interface HeroSectionProps {
  onCtaClick?: () => void;
}

export default function HeroSection({ onCtaClick }: HeroSectionProps) {
  const [isHovering, setIsHovering] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  // Check for reduced motion preference
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  // Animation variants for text content
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1] as const,
      },
    },
  };

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-canvas"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      aria-labelledby="hero-heading"
    >
      {/* Custom cursor (disabled for reduced motion preference) */}
      {!prefersReducedMotion && <WireframeCursor isHovering={isHovering} />}

      {/* Background gradient mesh - optimized for performance */}
      <div
        className="absolute inset-0 opacity-5"
        aria-hidden="true"
      >
        <div className="absolute top-0 left-0 w-96 h-96 bg-blueprint rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-neonVolt rounded-full blur-3xl" />
      </div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(#1A1A1A 1px, transparent 1px),
                           linear-gradient(90deg, #1A1A1A 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
        aria-hidden="true"
      />

      {/* Main content */}
      <div className="relative z-10 max-w-content mx-auto px-6 py-20 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          {/* Tagline - Brand voice: confident, precise, jargon-free */}
          <motion.p
            variants={itemVariants}
            className="font-body text-lg md:text-xl font-medium text-blueprint uppercase tracking-wider"
          >
            From rough concepts to working realities
          </motion.p>

          {/* Main heading - H1 for SEO and accessibility */}
          <motion.h1
            id="hero-heading"
            variants={itemVariants}
            className="font-heading text-5xl md:text-7xl lg:text-8xl font-extrabold text-graphite leading-tight"
          >
            We Build{" "}
            <span className="relative inline-block">
              <span className="relative z-10">Digital</span>
              <motion.span
                className="absolute bottom-2 left-0 w-full h-3 bg-neonVolt -z-10"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.8, duration: 0.6 }}
              />
            </span>{" "}
            Excellence
          </motion.h1>

          {/* Subheading */}
          <motion.p
            variants={itemVariants}
            className="font-body text-lg md:text-xl text-graphite/80 max-w-prose mx-auto leading-relaxed"
          >
            Sketchworks is Sri Lanka&apos;s premier digital transformation agency.
            We craft exceptional web experiences, visual branding, business systems,
            and AI-powered software solutions that drive real results.
          </motion.p>

          {/* CTA Buttons - Accessible with proper focus states */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center pt-8"
          >
            <a
              href="#featured-work"
              className="group relative inline-flex items-center justify-center px-8 py-4 bg-graphite text-pureWhite font-body font-medium rounded-lg overflow-hidden transition-all duration-300 hover:bg-blueprint focus:ring-2 focus:ring-neon focus:ring-offset-2 focus:ring-offset-canvas"
              onFocus={() => setIsHovering(true)}
              onBlur={() => setIsHovering(false)}
            >
              <span className="relative z-10">View Our Work</span>
              <motion.span
                className="absolute inset-0 bg-neonVolt"
                initial={{ x: "-100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
                aria-hidden="true"
              />
              <span className="relative z-10 group-hover:text-graphite transition-colors">
                View Our Work
              </span>
            </a>

            <a
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-graphite text-graphite font-body font-medium rounded-lg transition-all duration-300 hover:border-neonVolt hover:bg-neonVolt hover:text-graphite focus:ring-2 focus:ring-neon focus:ring-offset-2 focus:ring-offset-canvas"
              onFocus={() => setIsHovering(true)}
              onBlur={() => setIsHovering(false)}
            >
              Start a Project
            </a>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            variants={itemVariants}
            className="pt-12 flex flex-wrap justify-center gap-8 md:gap-16"
          >
            <div className="text-center">
              <p className="font-heading text-3xl md:text-4xl font-bold text-neonVolt">
                150+
              </p>
              <p className="font-body text-sm text-graphite/60">Projects Delivered</p>
            </div>
            <div className="text-center">
              <p className="font-heading text-3xl md:text-4xl font-bold text-neonVolt">
                98%
              </p>
              <p className="font-body text-sm text-graphite/60">Client Satisfaction</p>
            </div>
            <div className="text-center">
              <p className="font-heading text-3xl md:text-4xl font-bold text-neonVolt">
                5★
              </p>
              <p className="font-body text-sm text-graphite/60">BestWeb.lk Rated</p>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator - accessible and animated */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.6 }}
      >
        <a
          href="#process-section"
          className="flex flex-col items-center gap-2 text-graphite/60 hover:text-graphite transition-colors focus:outline-none focus:ring-2 focus:ring-neon focus:ring-offset-2 focus:ring-offset-canvas rounded"
          aria-label="Scroll to learn more about our process"
        >
          <span className="font-body text-xs uppercase tracking-wider">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            aria-hidden="true"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 5v14M19 12l-7 7-7-7" />
            </svg>
          </motion.div>
        </a>
      </motion.div>
    </section>
  );
}
