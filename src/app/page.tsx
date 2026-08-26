import HeroSection from "@/components/hero-section";
import CVAnalyzer from "@/components/cv-analyzer";

/**
 * Sketchworks Homepage
 * 
 * BestWeb.lk 2026 Evaluation Criteria:
 * - Performance: FCP <1s, LCP <2.5s, TBT <200ms, CLS <0.1
 * - Accessibility: WCAG AA compliant with semantic HTML5
 * - SEO: Unique meta descriptions, proper heading hierarchy
 * - Security: Input sanitization, secure headers
 * 
 * Brand Voice: Confident, precise, jargon-free
 * Tagline: "From rough concepts to working realities."
 */

export default function Home() {
  return (
    <main id="main-content" className="flex flex-col">
      {/* Hero Section with wireframe-to-solid cursor animation */}
      <HeroSection />
      
      {/* CV Analyzer - Interactive Bonus Feature */}
      <CVAnalyzer />
      
      {/* TODO: Add remaining sections per content structure:
          - Process Section
          - Featured Work / Portfolio Preview
          - Services Overview
          - Testimonials
          - Call-to-Action
          - Footer
      */}
    </main>
  );
}
