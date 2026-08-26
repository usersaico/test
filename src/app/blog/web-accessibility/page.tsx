import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Web Accessibility: Building Inclusive Digital Experiences | Sketchworks",
  description: "Why web accessibility matters for Sri Lankan businesses and how to implement WCAG guidelines effectively.",
  openGraph: {
    title: "Web Accessibility: Building Inclusive Digital Experiences",
    description: "Why web accessibility matters for Sri Lankan businesses and how to implement WCAG guidelines effectively.",
    type: "article",
    publishedTime: "2024-02-12",
  },
}

export default function BlogPost() {
  return (
    <article className="py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <header className="mb-12">
          <Link href="/blog" className="text-blueprint-blue hover:text-graphite font-medium mb-6 inline-block">
            ← Back to Blog
          </Link>
          <p className="font-inter text-sm text-gray-500 mb-4">February 12, 2024 · 9 min read</p>
          <h1 className="font-space-grotesk font-bold text-4xl md:text-5xl text-graphite mb-6">
            Web Accessibility: Building Inclusive Digital Experiences
          </h1>
          <p className="font-inter text-xl text-gray-600">
            Making the web work for everyone isn't just ethical—it's essential for business success in Sri Lanka's diverse market.
          </p>
        </header>

        <div className="prose prose-lg max-w-none mb-16">
          <p className="font-inter text-gray-700 mb-6">
            Approximately 15% of Sri Lanka's population lives with some form of disability. That's over 3 million potential customers who may struggle to use websites and apps that aren't designed with accessibility in mind. Yet, a recent audit of popular Sri Lankan websites found that 94% failed basic accessibility checks.
          </p>
          <p className="font-inter text-gray-700 mb-6">
            This isn't just a missed opportunity—it's exclusion. And in an increasingly digital economy, digital exclusion means economic exclusion.
          </p>

          <h2 className="font-space-grotesk font-bold text-2xl text-graphite mt-12 mb-4">What Is Web Accessibility?</h2>
          <p className="font-inter text-gray-700 mb-6">
            Web accessibility means designing and developing websites, applications, and digital tools so that people with disabilities can use them effectively. This includes people with:
          </p>
          <ul className="font-inter text-gray-700 space-y-3 mb-6">
            <li><strong>Visual impairments:</strong> Blindness, low vision, color blindness</li>
            <li><strong>Hearing impairments:</strong> Deafness, hard of hearing</li>
            <li><strong>Motor impairments:</strong> Limited hand movement, tremors, paralysis</li>
            <li><strong>Cognitive impairments:</strong> Learning disabilities, memory issues, attention disorders</li>
            <li><strong>Temporary disabilities:</strong> Broken arm, eye surgery recovery, situational limitations</li>
          </ul>
          <p className="font-inter text-gray-700 mb-6">
            The key insight: accessibility features designed for permanent disabilities also benefit people with temporary or situational limitations. Captions help deaf users, but they also help someone watching a video in a noisy café or quiet library.
          </p>

          <h2 className="font-space-grotesk font-bold text-2xl text-graphite mt-12 mb-4">The Business Case for Accessibility</h2>
          <p className="font-inter text-gray-700 mb-6">
            Beyond ethics and legal compliance, accessibility makes good business sense:
          </p>
          <ul className="font-inter text-gray-700 space-y-3 mb-6">
            <li><strong>Expanded market reach:</strong> 3 million+ Sri Lankans with disabilities represent significant purchasing power</li>
            <li><strong>Improved SEO:</strong> Accessible websites rank better in search engines</li>
            <li><strong>Better mobile experience:</strong> Accessibility improvements enhance usability on all devices</li>
            <li><strong>Reduced legal risk:</strong> Accessibility lawsuits are increasing globally</li>
            <li><strong>Enhanced brand reputation:</strong> Inclusive companies earn customer loyalty</li>
          </ul>
          <p className="font-inter text-gray-700 mb-6">
            A Sri Lankan bank we worked with saw a 23% increase in online banking adoption among senior citizens after implementing accessibility improvements. This demographic had previously struggled with their digital platform, preferring branch visits despite longer wait times.
          </p>

          <h2 className="font-space-grotesk font-bold text-2xl text-graphite mt-12 mb-4">Understanding WCAG Guidelines</h2>
          <p className="font-inter text-gray-700 mb-6">
            The Web Content Accessibility Guidelines (WCAG) are the international standard for web accessibility. They're organized around four principles, often remembered by the acronym POUR:
          </p>
          
          <h3 className="font-space-grotesk font-bold text-xl text-graphite mt-8 mb-3">Perceivable</h3>
          <p className="font-inter text-gray-700 mb-6">
            Information must be presentable to users in ways they can perceive. This means providing text alternatives for images, captions for videos, and sufficient color contrast. Users should be able to see or hear your content regardless of their sensory abilities.
          </p>

          <h3 className="font-space-grotesk font-bold text-xl text-graphite mt-8 mb-3">Operable</h3>
          <p className="font-inter text-gray-700 mb-6">
            Interface components must be operable by all users. Everything should work with keyboard alone (no mouse required). Give users enough time to read and interact. Avoid content that flashes or moves in ways that could trigger seizures.
          </p>

          <h3 className="font-space-grotesk font-bold text-xl text-graphite mt-8 mb-3">Understandable</h3>
          <p className="font-inter text-gray-700 mb-6">
            Information and operation must be clear. Use simple language, consistent navigation, and predictable behavior. Help users avoid and correct mistakes in forms. People should understand what's happening on your website without confusion.
          </p>

          <h3 className="font-space-grotesk font-bold text-xl text-graphite mt-8 mb-3">Robust</h3>
          <p className="font-inter text-gray-700 mb-6">
            Content must work with current and future technologies. Use valid HTML, proper ARIA labels, and ensure compatibility with assistive technologies like screen readers. Your website should work across different browsers, devices, and assistive tools.
          </p>

          <h2 className="font-space-grotesk font-bold text-2xl text-graphite mt-12 mb-4">Common Accessibility Failures in Sri Lankan Websites</h2>
          <ul className="font-inter text-gray-700 space-y-3 mb-6">
            <li><strong>Missing alt text:</strong> Images without descriptions are invisible to screen reader users</li>
            <li><strong>Poor color contrast:</strong> Light gray text on white backgrounds is unreadable for many</li>
            <li><strong>Mouse-only navigation:</strong> No keyboard support excludes people with motor impairments</li>
            <li><strong>Auto-playing media:</strong> Videos or audio that start automatically can't be stopped by some users</li>
            <li><strong>Inaccessible forms:</strong> Missing labels, unclear error messages, impossible timeouts</li>
            <li><strong>Complex language:</strong> Jargon and complicated sentences exclude non-native speakers and cognitive disabilities</li>
          </ul>

          <h2 className="font-space-grotesk font-bold text-2xl text-graphite mt-12 mb-4">Practical Implementation Steps</h2>
          
          <h3 className="font-space-grotesk font-bold text-xl text-graphite mt-8 mb-3">Start with an Audit</h3>
          <p className="font-inter text-gray-700 mb-6">
            Use automated tools like axe DevTools, WAVE, or Lighthouse to identify obvious issues. These catch about 30-40% of problems. Then conduct manual testing with actual users who have disabilities—their insights reveal issues no tool can detect.
          </p>

          <h3 className="font-space-grotesk font-bold text-xl text-graphite mt-8 mb-3">Fix Critical Issues First</h3>
          <p className="font-inter text-gray-700 mb-6">
            Prioritize fixes based on impact:
          </p>
          <ol className="font-inter text-gray-700 space-y-3 mb-6 list-decimal list-inside">
            <li>Keyboard navigation barriers (users literally can't access content)</li>
            <li>Missing form labels (can't complete transactions)</li>
            <li>Poor color contrast (can't read text)</li>
            <li>Missing alt text (images provide no information)</li>
            <li>Confusing navigation (can't find what they need)</li>
          </ol>

          <h3 className="font-space-grotesk font-bold text-xl text-graphite mt-8 mb-3">Build Accessibility Into Your Process</h3>
          <p className="font-inter text-gray-700 mb-6">
            Don't treat accessibility as an afterthought. Include it in:
          </p>
          <ul className="font-inter text-gray-700 space-y-3 mb-6">
            <li>Design reviews (check color contrast, focus states, touch target sizes)</li>
            <li>Development checklists (semantic HTML, ARIA labels, keyboard testing)</li>
            <li>QA testing (screen reader testing, keyboard-only navigation)</li>
            <li>Content creation (alt text, headings, plain language)</li>
          </ul>

          <h2 className="font-space-grotesk font-bold text-2xl text-graphite mt-12 mb-4">Accessibility in the Sri Lankan Context</h2>
          <p className="font-inter text-gray-700 mb-6">
            Sri Lanka presents unique accessibility challenges:
          </p>
          <ul className="font-inter text-gray-700 space-y-3 mb-6">
            <li><strong>Multilingual content:</strong> Screen readers must handle Sinhala, Tamil, and English correctly</li>
            <li><strong>Mobile-first users:</strong> Many Sri Lankans access the internet primarily via smartphones with limited data</li>
            <li><strong>Varying digital literacy:</strong> Interfaces must be intuitive for first-time internet users</li>
            <li><strong>Infrastructure limitations:</strong> Slower connections mean heavy pages timeout before loading</li>
          </ul>
          <p className="font-inter text-gray-700 mb-6">
            We developed an accessible government services portal that loads fully on 2G networks, works flawlessly with Tamil and Sinhala screen readers, and guides users through complex forms with clear instructions in all three languages. Accessibility isn't one-size-fits-all—it requires cultural and contextual understanding.
          </p>

          <h2 className="font-space-grotesk font-bold text-2xl text-graphite mt-12 mb-4">Testing with Real Users</h2>
          <p className="font-inter text-gray-700 mb-6">
            Automated tools and expert reviews are valuable, but nothing replaces testing with actual users who have disabilities. Partner with organizations like the Sri Lanka Council for Persons with Disabilities to recruit testers. Their feedback will surprise you—issues you never considered become obvious barriers.
          </p>
          <p className="font-inter text-gray-700 mb-6">
            One client insisted their website was accessible because it passed automated tests. User testing revealed that their dropdown menus were completely unusable for screen reader users—a critical flaw no tool had caught.
          </p>

          <h2 className="font-space-grotesk font-bold text-2xl text-graphite mt-12 mb-4">The Path Forward</h2>
          <p className="font-inter text-gray-700 mb-6">
            Accessibility isn't a project with an end date. It's an ongoing commitment to inclusive design. Technology evolves, standards update, and user needs change. Build accessibility into your organizational culture, not just your codebase.
          </p>
          <p className="font-inter text-gray-700 mb-6">
            Start today. Audit one page. Fix one barrier. Train one team member. Small steps compound into meaningful change. Every improvement makes the web more inclusive for millions of Sri Lankans.
          </p>
          <p className="font-inter text-gray-700">
            At Sketchworks, accessibility isn't optional—it's foundational. Every project we deliver meets WCAG AA standards minimum. Because everyone deserves equal access to digital opportunities.
          </p>
        </div>

        <nav className="border-t border-gray-200 pt-8">
          <div className="flex justify-between items-center">
            <Link href="/blog" className="text-blueprint-blue hover:text-graphite font-medium">
              ← More Blog Posts
            </Link>
            <Link href="/services/web-experiences" className="bg-neon-volt text-graphite px-6 py-3 rounded-md font-medium hover:bg-neon-volt/90 transition-colors">
              Build an Accessible Website
            </Link>
          </div>
        </nav>
      </div>
    </article>
  )
}
