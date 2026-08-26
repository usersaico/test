import type { Metadata } from "next"
import Link from "next/link"
import { BeforeAfterSlider } from "@/components/before-after-slider"

export const metadata: Metadata = {
  title: "Dialog Hutch Brand Refresh | Sketchworks",
  description: "Complete brand transformation for Sri Lanka's leading telecom provider. Unified digital presence across all touchpoints.",
  openGraph: {
    title: "Dialog Hutch Brand Refresh | Sketchworks",
    description: "Complete brand transformation for Sri Lanka's leading telecom provider.",
    images: ["/images/case-studies/dialog-og.jpg"],
  },
}

export default function DialogHutchCaseStudy() {
  return (
    <article className="py-20">
      <div className="container mx-auto px-4 max-w-6xl">
        <header className="mb-12">
          <Link href="/portfolio" className="text-blueprint-blue hover:text-graphite font-medium mb-6 inline-block">
            ← Back to Portfolio
          </Link>
          <h1 className="font-space-grotesk font-bold text-4xl md:text-5xl lg:text-6xl text-graphite mb-4">
            Dialog Hutch Brand Refresh
          </h1>
          <p className="font-inter text-xl text-gray-600 max-w-3xl">
            Unifying Sri Lanka's largest telecommunications brand across digital and physical touchpoints with a modern, cohesive visual identity.
          </p>
        </header>

        <div className="mb-12">
          <BeforeAfterSlider
            beforeImage="/images/case-studies/dialog-before.jpg"
            afterImage="/images/case-studies/dialog-after.jpg"
            beforeLabel="Legacy Brand"
            afterLabel="New Identity"
            altText="Dialog Hutch brand identity transformation"
          />
        </div>

        <section className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 bg-canvas-white p-8 rounded-lg">
          <div>
            <p className="font-space-grotesk font-bold text-3xl text-neon-volt mb-2">94%</p>
            <p className="font-inter text-sm text-gray-600">Brand Recognition</p>
          </div>
          <div>
            <p className="font-space-grotesk font-bold text-3xl text-neon-volt mb-2">12M+</p>
            <p className="font-inter text-sm text-gray-600">Customer Touchpoints</p>
          </div>
          <div>
            <p className="font-space-grotesk font-bold text-3xl text-neon-volt mb-2">3x</p>
            <p className="font-inter text-sm text-gray-600">Faster Asset Production</p>
          </div>
          <div>
            <p className="font-space-grotesk font-bold text-3xl text-neon-volt mb-2">100%</p>
            <p className="font-inter text-sm text-gray-600">Brand Consistency</p>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="font-space-grotesk font-bold text-3xl text-graphite mb-6">The Challenge</h2>
          <div className="prose prose-lg max-w-none">
            <p className="font-inter text-gray-700 mb-4">
              Following the merger of Dialog Axiata and Hutch Sri Lanka, the combined entity faced a critical challenge: creating a unified brand identity that honored both legacies while positioning the company as a forward-thinking digital leader. The fragmented visual system caused confusion among customers and inefficiencies in marketing operations.
            </p>
            <p className="font-inter text-gray-700">
              Multiple agencies had created inconsistent brand assets over the years, resulting in a disjointed customer experience across retail stores, mobile apps, websites, billboards, and customer communications. The brand needed to feel distinctly Sri Lankan while competing globally.
            </p>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="font-space-grotesk font-bold text-3xl text-graphite mb-6">Our Solution</h2>
          <div className="prose prose-lg max-w-none">
            <p className="font-inter text-gray-700 mb-4">
              We developed a comprehensive brand system built on flexibility and cultural relevance. Our design language draws inspiration from Sri Lanka's vibrant heritage while embracing modern minimalism for digital-first experiences.
            </p>
            <ul className="font-inter text-gray-700 space-y-3 mb-4">
              <li><strong>Dynamic Logo System:</strong> Adaptable wordmarks for different contexts while maintaining core recognition</li>
              <li><strong>Cultural Color Palette:</strong> Inspired by traditional Sri Lankan art with modern neon accents</li>
              <li><strong>Typography Hierarchy:</strong> Custom font pairings supporting Sinhala, Tamil, and English scripts</li>
              <li><strong>Icon Library:</strong> 500+ culturally relevant icons for diverse communication needs</li>
              <li><strong>Digital Asset Management:</strong> Centralized system for brand consistency across all teams</li>
              <li><strong>Brand Guidelines Platform:</strong> Interactive documentation accessible to all stakeholders</li>
            </ul>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="font-space-grotesk font-bold text-3xl text-graphite mb-6">The Results</h2>
          <div className="prose prose-lg max-w-none">
            <p className="font-inter text-gray-700 mb-4">
              The refreshed brand achieved immediate recognition across all demographics. Customer surveys showed 94% brand recall within the first month of rollout, and internal teams reported 3x faster production times for marketing materials.
            </p>
            <p className="font-inter text-gray-700">
              The unified brand system now powers over 12 million customer touchpoints annually, from mobile network interfaces to retail experiences. The design system has been adopted by partner agencies nationwide, ensuring consistent brand expression across all channels.
            </p>
          </div>
        </section>

        <section className="bg-graphite text-white p-8 rounded-lg mb-16">
          <blockquote className="font-inter text-xl md:text-2xl mb-6">
            "Sketchworks captured the essence of what makes us uniquely Sri Lankan while giving us a brand that competes on the global stage. The attention to cultural detail while maintaining modern appeal is remarkable."
          </blockquote>
          <footer className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-neon-volt flex items-center justify-center text-graphite font-bold">DR</div>
            <div>
              <p className="font-space-grotesk font-bold">Dinesh Ratnayake</p>
              <p className="font-inter text-sm text-gray-300">Chief Marketing Officer, Dialog Hutch</p>
            </div>
          </footer>
        </section>

        <section>
          <h2 className="font-space-grotesk font-bold text-3xl text-graphite mb-6">Services Delivered</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <Link href="/services/visual-branding" className="bg-canvas-white p-6 rounded-lg hover:shadow-lg transition-shadow">
              <h3 className="font-space-grotesk font-bold text-lg text-graphite mb-2">Visual Branding</h3>
              <p className="font-inter text-sm text-gray-600">Complete brand identity system</p>
            </Link>
            <Link href="/services/web-experiences" className="bg-canvas-white p-6 rounded-lg hover:shadow-lg transition-shadow">
              <h3 className="font-space-grotesk font-bold text-lg text-graphite mb-2">Web Experiences</h3>
              <p className="font-inter text-sm text-gray-600">Digital asset management platform</p>
            </Link>
            <Link href="/services/business-systems" className="bg-canvas-white p-6 rounded-lg hover:shadow-lg transition-shadow">
              <h3 className="font-space-grotesk font-bold text-lg text-graphite mb-2">Business Systems</h3>
              <p className="font-inter text-sm text-gray-600">Brand governance workflows</p>
            </Link>
          </div>
        </section>
      </div>
    </article>
  )
}
