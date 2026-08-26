import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "CV Writing Tips That Get You Hired in Sri Lanka | Sketchworks",
  description: "Expert advice on crafting CVs that stand out in the Sri Lankan job market. Real examples from successful career transitions.",
  openGraph: {
    title: "CV Writing Tips That Get You Hired in Sri Lanka",
    description: "Expert advice on crafting CVs that stand out in the Sri Lankan job market.",
    type: "article",
    publishedTime: "2024-02-05",
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
          <p className="font-inter text-sm text-gray-500 mb-4">February 5, 2024 · 7 min read</p>
          <h1 className="font-space-grotesk font-bold text-4xl md:text-5xl text-graphite mb-6">
            CV Writing Tips That Get You Hired in Sri Lanka
          </h1>
          <p className="font-inter text-xl text-gray-600">
            Stand out in a competitive job market with a CV that showcases your value clearly and professionally.
          </p>
        </header>

        <div className="prose prose-lg max-w-none mb-16">
          <p className="font-inter text-gray-700 mb-6">
            Last year, we reviewed over 500 CVs while hiring for three positions at Sketchworks. Only 12 candidates made it to the interview stage. The difference between those who progressed and those who didn't wasn't necessarily experience—it was presentation.
          </p>
          <p className="font-inter text-gray-700 mb-6">
            In Sri Lanka's increasingly competitive job market, your CV is often your first and only chance to make an impression. Here's how to ensure it counts.
          </p>

          <h2 className="font-space-grotesk font-bold text-2xl text-graphite mt-12 mb-4">The Sri Lankan Hiring Context</h2>
          <p className="font-inter text-gray-700 mb-6">
            Sri Lankan employers typically spend less than 30 seconds scanning each CV during initial screening. This isn't because they're dismissive—they're overwhelmed. A single advertised position at a reputable company can attract 200+ applications. Your CV must communicate value immediately.
          </p>
          <p className="font-inter text-gray-700 mb-6">
            Additionally, many Sri Lankan companies now use Applicant Tracking Systems (ATS) to filter applications before human eyes ever see them. If your CV isn't formatted correctly, it may be rejected automatically regardless of your qualifications.
          </p>

          <h2 className="font-space-grotesk font-bold text-2xl text-graphite mt-12 mb-4">Structure That Works</h2>
          
          <h3 className="font-space-grotesk font-bold text-xl text-graphite mt-8 mb-3">Contact Information</h3>
          <p className="font-inter text-gray-700 mb-6">
            Keep it simple: full name, phone number, professional email address, LinkedIn profile URL, and location (city is sufficient). Avoid including unnecessary details like age, marital status, or photographs unless specifically requested. Modern Sri Lankan employers don't require these, and including them can appear outdated.
          </p>

          <h3 className="font-space-grotesk font-bold text-xl text-graphite mt-8 mb-3">Professional Summary</h3>
          <p className="font-inter text-gray-700 mb-6">
            Replace the obsolete "objective statement" with a 3-4 line professional summary that highlights your key achievements and what you bring to the role. For example:
          </p>
          <blockquote className="border-l-4 border-neon-volt pl-4 my-6 italic text-gray-700">
            "Marketing manager with 8 years of experience driving digital transformation for Sri Lankan retail brands. Increased online sales by 156% for current employer through integrated e-commerce strategy. Seeking to leverage expertise in data-driven marketing to grow market share for innovative FMCG company."
          </blockquote>

          <h3 className="font-space-grotesk font-bold text-xl text-graphite mt-8 mb-3">Work Experience</h3>
          <p className="font-inter text-gray-700 mb-6">
            List positions in reverse chronological order. For each role, include:
          </p>
          <ul className="font-inter text-gray-700 space-y-3 mb-6">
            <li>Job title and company name</li>
            <li>Employment dates (month/year format)</li>
            <li>3-5 bullet points highlighting achievements, not just responsibilities</li>
          </ul>
          <p className="font-inter text-gray-700 mb-6">
            The critical mistake most candidates make is listing duties instead of accomplishments. Compare these examples:
          </p>
          <p className="font-inter text-gray-700 mb-3"><strong>Weak:</strong> "Responsible for managing social media accounts"</p>
          <p className="font-inter text-gray-700 mb-6"><strong>Strong:</strong> "Grew Instagram following from 2,000 to 15,000 in 12 months, generating 340 qualified leads and LKR 2.3M in attributed revenue"</p>

          <h3 className="font-space-grotesk font-bold text-xl text-graphite mt-8 mb-3">Education</h3>
          <p className="font-inter text-gray-700 mb-6">
            Include degree, institution, graduation year, and relevant honors. If you have work experience, keep this section brief. Recent graduates can expand with relevant coursework, projects, or GPA if above 3.5.
          </p>

          <h3 className="font-space-grotesk font-bold text-xl text-graphite mt-8 mb-3">Skills</h3>
          <p className="font-inter text-gray-700 mb-6">
            Focus on hard skills relevant to the position. Group them logically: technical skills, languages, certifications. Be honest—don't list skills you can't demonstrate in an interview.
          </p>

          <h2 className="font-space-grotesk font-bold text-2xl text-graphite mt-12 mb-4">Formatting for Success</h2>
          <ul className="font-inter text-gray-700 space-y-3 mb-6">
            <li><strong>Length:</strong> Maximum 2 pages for experienced professionals, 1 page for early career</li>
            <li><strong>Font:</strong> Clean, professional typefaces (Inter, Calibri, Arial). Size 10-12pt for body text.</li>
            <li><strong>File format:</strong> PDF unless specifically requested otherwise. Name the file professionally: "FirstName_LastName_CV.pdf"</li>
            <li><strong>White space:</strong> Use margins and spacing to improve readability. Dense text gets skipped.</li>
            <li><strong>Consistency:</strong> Maintain uniform formatting for headings, dates, and bullet points throughout.</li>
          </ul>

          <h2 className="font-space-grotesk font-bold text-2xl text-graphite mt-12 mb-4">Common Mistakes to Avoid</h2>
          <ul className="font-inter text-gray-700 space-y-3 mb-6">
            <li><strong>Spelling and grammar errors:</strong> Proofread multiple times, then have someone else review. Typos signal carelessness.</li>
            <li><strong>Generic CVs:</strong> Tailor your CV for each application. Highlight relevant experience for that specific role.</li>
            <li><strong>Unexplained gaps:</strong> Address employment gaps briefly but honestly. Professional development or family responsibilities are valid reasons.</li>
            <li><strong>Salary expectations:</strong> Don't include salary history or expectations unless explicitly requested.</li>
            <li><strong>References available:</strong> This phrase is unnecessary. Employers will ask if they want references.</li>
            <li><strong>Creative designs:</strong> Unless applying for design roles, keep formatting clean and professional. ATS systems struggle with complex layouts.</li>
          </ul>

          <h2 className="font-space-grotesk font-bold text-2xl text-graphite mt-12 mb-4">Optimizing for ATS Systems</h2>
          <p className="font-inter text-gray-700 mb-6">
            Many large Sri Lankan corporations and multinational companies use ATS software. To ensure your CV passes automated screening:
          </p>
          <ul className="font-inter text-gray-700 space-y-3 mb-6">
            <li>Use standard section headings (Experience, Education, Skills)</li>
            <li>Incorporate keywords from the job description naturally</li>
            <li>Avoid tables, columns, graphics, or unusual symbols</li>
            <li>Save as PDF with selectable text (not scanned images)</li>
            <li>Use common fonts that render correctly across systems</li>
          </ul>

          <h2 className="font-space-grotesk font-bold text-2xl text-graphite mt-12 mb-4">The Follow-Up Strategy</h2>
          <p className="font-inter text-gray-700 mb-6">
            Submitting your CV is only the first step. Follow up professionally within one week if you haven't received acknowledgment. A brief, polite email expressing continued interest can move your application forward.
          </p>
          <p className="font-inter text-gray-700 mb-6">
            Also leverage LinkedIn to connect with hiring managers or team members at target companies. Personal referrals significantly increase interview chances compared to cold applications.
          </p>

          <h2 className="font-space-grotesk font-bold text-2xl text-graphite mt-12 mb-4">When to Seek Professional Help</h2>
          <p className="font-inter text-gray-700 mb-6">
            Consider professional CV writing services if:
          </p>
          <ul className="font-inter text-gray-700 space-y-3 mb-6">
            <li>You're changing careers and need to reframe transferable skills</li>
            <li>You've been unemployed for an extended period</li>
            <li>You're returning to work after a significant break</li>
            <li>You're not getting interviews despite strong qualifications</li>
            <li>English isn't your first language and you want polished phrasing</li>
          </ul>
          <p className="font-inter text-gray-700 mb-6">
            At Sketchworks, our CV writing service combines professional writing expertise with ATS optimization and industry-specific insights. We've helped hundreds of Sri Lankan professionals land their dream roles.
          </p>

          <h2 className="font-space-grotesk font-bold text-2xl text-graphite mt-12 mb-4">Final Thoughts</h2>
          <p className="font-inter text-gray-700 mb-6">
            Your CV is a marketing document, not a biography. Every word should serve the purpose of demonstrating your value to potential employers. Invest time in crafting it well—the ROI in terms of interview opportunities and career advancement is substantial.
          </p>
          <p className="font-inter text-gray-700">
            Remember: the goal isn't to get the job with your CV. The goal is to get the interview. Make sure your CV opens that door.
          </p>
        </div>

        <nav className="border-t border-gray-200 pt-8">
          <div className="flex justify-between items-center">
            <Link href="/blog" className="text-blueprint-blue hover:text-graphite font-medium">
              ← More Blog Posts
            </Link>
            <Link href="/services/cv-writing" className="bg-neon-volt text-graphite px-6 py-3 rounded-md font-medium hover:bg-neon-volt/90 transition-colors">
              Get Professional CV Help
            </Link>
          </div>
        </nav>
      </div>
    </article>
  )
}
