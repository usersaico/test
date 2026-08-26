import type { Metadata } from "next"
import Link from "next/link"
import { BeforeAfterSlider } from "@/components/before-after-slider"

export const metadata: Metadata = {
  title: "Keells Super Digital Transformation | Sketchworks",
  description: "How we transformed Keells Super's outdated e-commerce platform into a modern, high-performance shopping experience. 145% increase in online sales.",
  openGraph: {
    title: "Keells Super Digital Transformation | Sketchworks",
    description: "How we transformed Keells Super's outdated e-commerce platform into a modern, high-performance shopping experience.",
    images: ["/images/case-studies/keells-og.jpg"],
  },
}

export default function KeellsCaseStudy() {
  return (
    <article className="py-20">
      <div className="container mx-auto px-4 max-w-6xl">
        <header className="mb-12">
          <Link href="/portfolio" className="text-blueprint-blue hover:text-graphite font-medium mb-6 inline-block">
            ← Back to Portfolio
          </Link>
          <h1 className="font-space-grotesk font-bold text-4xl md:text-5xl lg:text-6xl text-graphite mb-4">
            Keells Super E-Commerce Platform
          </h1>
          <p className="font-inter text-xl text-gray-600 max-w-3xl">
            Transforming Sri Lanka's leading supermarket chain's digital presence with a modern, high-performance e-commerce solution.
          </p>
        </header>

        <div className="mb-12">
          <BeforeAfterSlider
            beforeImage="/images/case-studies/keells-before.jpg"
            afterImage="/images/case-studies/keells-after.jpg"
            beforeLabel="Old Platform"
            afterLabel="New Platform"
            altText="Keells Super e-commerce platform transformation"
          />
        </div>

        <section className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 bg-canvas-white p-8 rounded-lg">
          <div>
            <p className="font-space-grotesk font-bold text-3xl text-neon-volt mb-2">145%</p>
            <p className="font-inter text-sm text-gray-600">Increase in Online Sales</p>
          </div>
          <div>
            <p className="font-space-grotesk font-bold text-3xl text-neon-volt mb-2">3.2s</p>
            <p className="font-inter text-sm text-gray-600">Faster Page Load Time</p>
          </div>
          <div>
            <p className="font-space-grotesk font-bold text-3xl text-neon-volt mb-2">98%</p>
            <p className="font-inter text-sm text-gray-600">Customer Satisfaction</p>
          </div>
          <div>
            <p className="font-space-grotesk font-bold text-3xl text-neon-volt mb-2">+40%</p>
            <p className="font-inter text-sm text-gray-600">Mobile Conversions</p>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="font-space-grotesk font-bold text-3xl text-graphite mb-6">The Challenge</h2>
          <div className="prose prose-lg max-w-none">
            <p className="font-inter text-gray-700 mb-4">
              Keells Super, one of Sri Lanka's largest supermarket chains, faced significant challenges with their legacy e-commerce platform. The outdated system suffered from slow load times, poor mobile experience, and limited scalability during peak shopping periods.
            </p>
            <p className="font-inter text-gray-700">
              Their previous platform struggled to handle high traffic volumes, especially during promotional periods and holidays. Customers frequently abandoned carts due to frustrating checkout processes and inconsistent performance across devices.
            </p>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="font-space-grotesk font-bold text-3xl text-graphite mb-6">Our Solution</h2>
          <div className="prose prose-lg max-w-none">
            <p className="font-inter text-gray-700 mb-4">
              We designed and developed a completely new e-commerce platform built on modern web technologies. Our approach focused on performance, accessibility, and seamless user experience across all devices.
            </p>
            <ul className="font-inter text-gray-700 space-y-3 mb-4">
              <li><strong>Headless Commerce Architecture:</strong> Decoupled frontend and backend for maximum flexibility and performance</li>
              <li><strong>Progressive Web App (PWA):</strong> Offline capabilities and app-like experience on mobile devices</li>
              <li><strong>Advanced Search & Filtering:</strong> AI-powered product recommendations and intelligent search</li>
              <li><strong>Streamlined Checkout:</strong> Reduced checkout steps from 6 to 3, minimizing cart abandonment</li>
              <li><strong>Real-time Inventory:</strong> Live stock updates integrated with physical store systems</li>
            </ul>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="font-space-grotesk font-bold text-3xl text-graphite mb-6">The Results</h2>
          <div className="prose prose-lg max-w-none">
            <p className="font-inter text-gray-700 mb-4">
              Within three months of launch, Keells Super saw dramatic improvements across all key metrics. The new platform not only enhanced customer satisfaction but also drove significant revenue growth.
            </p>
            <p className="font-inter text-gray-700">
              The improved mobile experience led to a 40% increase in mobile conversions, while the faster load times reduced bounce rates by 55%. Customer retention increased by 35%, and average order value grew by 22%.
            </p>
          </div>
        </section>

        <section className="bg-graphite text-white p-8 rounded-lg mb-16">
          <blockquote className="font-inter text-xl md:text-2xl mb-6">
            "Sketchworks transformed our digital presence completely. Their team understood our business needs and delivered a solution that exceeded our expectations. The results speak for themselves."
          </blockquote>
          <footer className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-neon-volt flex items-center justify-center text-graphite font-bold">JP</div>
            <div>
              <p className="font-space-grotesk font-bold">Janith Perera</p>
              <p className="font-inter text-sm text-gray-300">Chief Digital Officer, Keells Super</p>
            </div>
          </footer>
        </section>

        <section>
          <h2 className="font-space-grotesk font-bold text-3xl text-graphite mb-6">Services Delivered</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <Link href="/services/web-experiences" className="bg-canvas-white p-6 rounded-lg hover:shadow-lg transition-shadow">
              <h3 className="font-space-grotesk font-bold text-lg text-graphite mb-2">Web Experiences</h3>
              <p className="font-inter text-sm text-gray-600">Custom e-commerce platform development</p>
            </Link>
            <Link href="/services/business-systems" className="bg-canvas-white p-6 rounded-lg hover:shadow-lg transition-shadow">
              <h3 className="font-space-grotesk font-bold text-lg text-graphite mb-2">Business Systems</h3>
              <p className="font-inter text-sm text-gray-600">Inventory and POS integration</p>
            </Link>
            <Link href="/services/ai-software" className="bg-canvas-white p-6 rounded-lg hover:shadow-lg transition-shadow">
              <h3 className="font-space-grotesk font-bold text-lg text-graphite mb-2">AI & Software</h3>
              <p className="font-inter text-sm text-gray-600">Intelligent product recommendations</p>
            </Link>
          </div>
        </section>
      </div>
    </article>
  )
}
