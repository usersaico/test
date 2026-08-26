import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service | Sketchworks',
  description: 'Clear terms for our digital services. Fair policies for Sri Lankan businesses and individuals.',
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-canvas-white pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-4xl md:text-5xl font-extrabold text-graphite mb-8 font-heading">
          Terms of Service
        </h1>
        <p className="text-lg text-gray-600 mb-12 font-body">
          Effective: January 2026. By using our services, you agree to these terms.
        </p>

        <article className="prose prose-lg max-w-none font-body">
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-graphite mb-4 font-heading">1. Services Overview</h2>
            <p className="text-gray-700 mb-4">
              Sketchworks provides CV writing, branding, web development, business systems, and AI solutions. We deliver from rough concepts to working realities.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-graphite mb-4 font-heading">2. Payment Terms</h2>
            <p className="text-gray-700 mb-4">
              Projects require 50% upfront, 50% on delivery. Invoices are due within 14 days. Late payments incur 2% monthly interest.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-graphite mb-4 font-heading">3. Revisions & Refunds</h2>
            <p className="text-gray-700 mb-4">
              Two revision rounds included per project. Additional revisions billed at LKR 5,000/hour. Refunds available within 7 days if deliverables don't match scope.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-graphite mb-4 font-heading">4. Intellectual Property</h2>
            <p className="text-gray-700 mb-4">
              Upon full payment, you own final deliverables. We retain rights to showcase work in our portfolio unless explicitly waived in writing.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-graphite mb-4 font-heading">5. Limitation of Liability</h2>
            <p className="text-gray-700 mb-4">
              We're not liable for indirect damages, lost profits, or third-party service disruptions. Our maximum liability equals the project fee paid.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-graphite mb-4 font-heading">6. Termination</h2>
            <p className="text-gray-700 mb-4">
              Either party may terminate with 14 days written notice. You pay for completed work. We'll deliver all assets created up to termination date.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-graphite mb-4 font-heading">7. Governing Law</h2>
            <p className="text-gray-700">
              These terms are governed by Sri Lankan law. Disputes resolved through Colombo Commercial Arbitration Centre.
            </p>
          </section>
        </article>
      </div>
    </main>
  );
}
