import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | Sketchworks',
  description: 'Privacy policy for Sketchworks digital agency. Learn how we collect, use, and protect your personal data.',
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-canvas-white pt-24 pb-16">
      <div className="max-w-3xl mx-auto px-6">
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-graphite mb-4 font-heading">
            Privacy Policy
          </h1>
          <p className="text-lg text-gray-600 font-body">
            Last updated: January 2026
          </p>
        </header>

        <article className="prose prose-lg max-w-none font-body">
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-graphite mb-4 font-heading">1. Introduction</h2>
            <p className="text-gray-700">
              Sketchworks ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-graphite mb-4 font-heading">2. Information We Collect</h2>
            <h3 className="text-xl font-semibold text-graphite mb-2 font-heading">Personal Information</h3>
            <p className="text-gray-700 mb-4">
              We may collect personal information that you voluntarily provide to us when you:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Fill out our contact form</li>
              <li>Subscribe to our newsletter</li>
              <li>Use our CV Analyzer tool</li>
              <li>Communicate with us via email, phone, or chat</li>
              <li>Engage our services as a client</li>
            </ul>
            <p className="text-gray-700 mt-4">
              This information may include your name, email address, phone number, company details, and any other information you choose to provide.
            </p>

            <h3 className="text-xl font-semibold text-graphite mb-2 mt-6 font-heading">Automatically Collected Information</h3>
            <p className="text-gray-700 mb-4">
              When you visit our website, we may automatically collect certain information about your device and browsing activities, including:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>IP address and browser type</li>
              <li>Operating system and device information</li>
              <li>Pages visited and time spent on pages</li>
              <li>Referring website addresses</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-graphite mb-4 font-heading">3. How We Use Your Information</h2>
            <p className="text-gray-700 mb-4">We use the information we collect to:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Respond to your inquiries and provide customer support</li>
              <li>Deliver our services and manage client relationships</li>
              <li>Send newsletters and marketing communications (with your consent)</li>
              <li>Analyze website usage and improve our services</li>
              <li>Comply with legal obligations</li>
              <li>Protect against fraud and unauthorized access</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-graphite mb-4 font-heading">4. Data Sharing and Disclosure</h2>
            <p className="text-gray-700 mb-4">
              We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li><strong>Service Providers:</strong> With trusted third-party vendors who assist us in operating our business (e.g., hosting providers, email services)</li>
              <li><strong>Legal Requirements:</strong> When required by law or to protect our rights and safety</li>
              <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
              <li><strong>With Your Consent:</strong> When you explicitly agree to share your information</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-graphite mb-4 font-heading">5. Data Security</h2>
            <p className="text-gray-700">
              We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-graphite mb-4 font-heading">6. Your Rights</h2>
            <p className="text-gray-700 mb-4">Depending on your location, you may have the following rights regarding your personal data:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Access to your personal information</li>
              <li>Correction of inaccurate or incomplete data</li>
              <li>Deletion of your personal information</li>
              <li>Restriction or objection to processing</li>
              <li>Data portability</li>
              <li>Withdrawal of consent at any time</li>
            </ul>
            <p className="text-gray-700 mt-4">
              To exercise these rights, please contact us at{' '}
              <a href="mailto:privacy@sketchworks.lk" className="text-blueprint-blue hover:underline">
                privacy@sketchworks.lk
              </a>.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-graphite mb-4 font-heading">7. Cookies and Tracking</h2>
            <p className="text-gray-700">
              Our website uses cookies and similar tracking technologies to enhance user experience and analyze site traffic. You can control cookie settings through your browser preferences. Disabling cookies may affect certain website functionalities.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-graphite mb-4 font-heading">8. Third-Party Links</h2>
            <p className="text-gray-700">
              Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these external sites. We encourage you to review their privacy policies.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-graphite mb-4 font-heading">9. Children's Privacy</h2>
            <p className="text-gray-700">
              Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us immediately.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-graphite mb-4 font-heading">10. Changes to This Policy</h2>
            <p className="text-gray-700">
              We may update this Privacy Policy from time to time. The updated version will be posted on this page with a revised "Last updated" date. We encourage you to review this policy periodically.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-graphite mb-4 font-heading">11. Contact Us</h2>
            <p className="text-gray-700 mb-4">
              If you have questions or concerns about this Privacy Policy or our data practices, please contact us:
            </p>
            <address className="not-italic text-gray-700">
              <p>Email: privacy@sketchworks.lk</p>
              <p>Phone: +94 11 234 5678</p>
              <p>Address: 123 Galle Road, Colombo 03, Sri Lanka</p>
            </address>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-graphite mb-4 font-heading">12. Data Controller</h2>
            <p className="text-gray-700">
              For users in the European Economic Area (EEA), the data controller is:
            </p>
            <p className="text-gray-700 mt-2">
              Sketchworks (Pvt) Ltd<br />
              Registration No: PV 123456<br />
              123 Galle Road, Colombo 03, Sri Lanka
            </p>
          </section>
        </article>
      </div>
    </main>
  );
}
