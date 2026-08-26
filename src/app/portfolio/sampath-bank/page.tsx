import type { Metadata } from "next"
import Link from "next/link"
import { BeforeAfterSlider } from "@/components/before-after-slider"

export const metadata: Metadata = {
  title: "Sampath Bank Mobile Banking App | Sketchworks",
  description: "Redesigning Sampath Bank's mobile banking experience with focus on accessibility and security. 89% user satisfaction rating.",
  openGraph: {
    title: "Sampath Bank Mobile Banking App | Sketchworks",
    description: "Redesigning Sampath Bank's mobile banking experience with focus on accessibility and security.",
    images: ["/images/case-studies/sampath-og.jpg"],
  },
}

export default function SampathBankCaseStudy() {
  return (
    <article className="py-20">
      <div className="container mx-auto px-4 max-w-6xl">
        <header className="mb-12">
          <Link href="/portfolio" className="text-blueprint-blue hover:text-graphite font-medium mb-6 inline-block">
            ← Back to Portfolio
          </Link>
          <h1 className="font-space-grotesk font-bold text-4xl md:text-5xl lg:text-6xl text-graphite mb-4">
            Sampath Bank Mobile Banking
          </h1>
          <p className="font-inter text-xl text-gray-600 max-w-3xl">
            Creating an accessible, secure, and intuitive mobile banking experience for Sri Lanka's leading digital bank.
          </p>
        </header>

        <div className="mb-12">
          <BeforeAfterSlider
            beforeImage="/images/case-studies/sampath-before.jpg"
            afterImage="/images/case-studies/sampath-after.jpg"
            beforeLabel="Old Interface"
            afterLabel="New Interface"
            altText="Sampath Bank mobile app interface transformation"
          />
        </div>

        <section className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 bg-canvas-white p-8 rounded-lg">
          <div>
            <p className="font-space-grotesk font-bold text-3xl text-neon-volt mb-2">89%</p>
            <p className="font-inter text-sm text-gray-600">User Satisfaction</p>
          </div>
          <div>
            <p className="font-space-grotesk font-bold text-3xl text-neon-volt mb-2">2.1M+</p>
            <p className="font-inter text-sm text-gray-600">Active Users</p>
          </div>
          <div>
            <p className="font-space-grotesk font-bold text-3xl text-neon-volt mb-2">60%</p>
            <p className="font-inter text-sm text-gray-600">Faster Task Completion</p>
          </div>
          <div>
            <p className="font-space-grotesk font-bold text-3xl text-neon-volt mb-2">WCAG</p>
            <p className="font-inter text-sm text-gray-600">AA Compliant</p>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="font-space-grotesk font-bold text-3xl text-graphite mb-6">The Challenge</h2>
          <div className="prose prose-lg max-w-none">
            <p className="font-inter text-gray-700 mb-4">
              Sampath Bank needed to modernize their mobile banking application to meet the evolving needs of digitally-savvy customers. The legacy app suffered from poor usability, limited accessibility features, and an outdated visual design that didn't reflect the bank's innovative brand.
            </p>
            <p className="font-inter text-gray-700">
              Key challenges included simplifying complex financial transactions, ensuring security without compromising user experience, and making the app accessible to users with disabilities while maintaining compliance with banking regulations.
            </p>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="font-space-grotesk font-bold text-3xl text-graphite mb-6">Our Solution</h2>
          <div className="prose prose-lg max-w-none">
            <p className="font-inter text-gray-700 mb-4">
              We conducted extensive user research with diverse customer segments across Sri Lanka, including elderly users and people with disabilities. This informed our human-centered design approach that prioritized clarity, security, and inclusivity.
            </p>
            <ul className="font-inter text-gray-700 space-y-3 mb-4">
              <li><strong>Biometric Authentication:</strong> Face ID and fingerprint login for seamless security</li>
              <li><strong>Voice Navigation:</strong> Sinhala and Tamil voice commands for hands-free operation</li>
              <li><strong>High Contrast Mode:</strong> Enhanced visibility for users with visual impairments</li>
              <li><strong>Simplified Information Architecture:</strong> Reduced menu depth from 5 levels to 2</li>
              <li><strong>Smart Transaction Templates:</strong> One-tap recurring payments and transfers</li>
              <li><strong>Real-time Fraud Detection:</strong> AI-powered security alerts without interrupting flow</li>
            </ul>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="font-space-grotesk font-bold text-3xl text-graphite mb-6">The Results</h2>
          <div className="prose prose-lg max-w-none">
            <p className="font-inter text-gray-700 mb-4">
              The redesigned app achieved remarkable adoption rates across all age groups. Customer support calls related to app usage dropped by 45%, while digital transaction volumes increased by 78% within the first six months.
            </p>
            <p className="font-inter text-gray-700">
              Accessibility features received special recognition from the Central Bank of Sri Lanka, setting a new standard for inclusive banking services. The app now serves over 2.1 million active users with a 4.7-star rating on both app stores.
            </p>
          </div>
        </section>

        <section className="bg-graphite text-white p-8 rounded-lg mb-16">
          <blockquote className="font-inter text-xl md:text-2xl mb-6">
            "Sketchworks understood that banking is about trust. They created an app that feels secure yet effortless, accessible to all Sri Lankans regardless of their technical ability."
          </blockquote>
          <footer className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-neon-volt flex items-center justify-center text-graphite font-bold">SF</div>
            <div>
              <p className="font-space-grotesk font-bold">Sanjay Fernando</p>
              <p className="font-inter text-sm text-gray-300">Head of Digital Banking, Sampath Bank</p>
            </div>
          </footer>
        </section>

        <section>
          <h2 className="font-space-grotesk font-bold text-3xl text-graphite mb-6">Services Delivered</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <Link href="/services/web-experiences" className="bg-canvas-white p-6 rounded-lg hover:shadow-lg transition-shadow">
              <h3 className="font-space-grotesk font-bold text-lg text-graphite mb-2">Web Experiences</h3>
              <p className="font-inter text-sm text-gray-600">Mobile app UI/UX design</p>
            </Link>
            <Link href="/services/ai-software" className="bg-canvas-white p-6 rounded-lg hover:shadow-lg transition-shadow">
              <h3 className="font-space-grotesk font-bold text-lg text-graphite mb-2">AI & Software</h3>
              <p className="font-inter text-sm text-gray-600">Fraud detection algorithms</p>
            </Link>
            <Link href="/services/business-systems" className="bg-canvas-white p-6 rounded-lg hover:shadow-lg transition-shadow">
              <h3 className="font-space-grotesk font-bold text-lg text-graphite mb-2">Business Systems</h3>
              <p className="font-inter text-sm text-gray-600">Core banking integration</p>
            </Link>
          </div>
        </section>
      </div>
    </article>
  )
}
