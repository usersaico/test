import { Metadata } from 'next';
import { ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact Us | Sketchworks - Digital Agency Sri Lanka',
  description: 'Get in touch with Sketchworks for web design, branding, CV writing, or software development. Free consultations for Sri Lankan businesses.',
  keywords: ['contact Sketchworks', 'web design inquiry', 'branding quote', 'CV writing contact'],
  openGraph: {
    title: 'Contact Us | Sketchworks',
    description: 'Ready to start your project? Let us discuss how we can help transform your business.',
    type: 'website',
  },
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-canvas">
      {/* Hero Section */}
      <section className="bg-graphite text-white py-20 md:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="font-heading font-extrabold text-4xl md:text-5xl lg:text-6xl mb-6">
              Let's Start a{' '}
              <span className="text-neon-volt">Conversation</span>
            </h1>
            <p className="font-body text-lg md:text-xl text-gray-300 mb-8">
              Have a project in mind? Want to learn more about our services? 
              We'd love to hear from you. No pressure, just honest advice.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 md:py-24 bg-white" aria-labelledby="contact-form-heading">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <h2 id="contact-form-heading" className="sr-only">Contact Form</h2>
            <form className="space-y-6" action="/api/contact" method="POST">
              {/* Honeypot field - hidden from users, catches bots */}
              <div className="hidden" aria-hidden="true">
                <label htmlFor="company_website">Company Website</label>
                <input type="text" id="company_website" name="company_website" tabIndex={-1} autoComplete="off" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block font-body font-medium text-gray-700 mb-2">
                    First Name <span className="text-red-500" aria-hidden="true">*</span>
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-md font-body focus:outline-none focus:ring-2 focus:ring-neon-volt focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block font-body font-medium text-gray-700 mb-2">
                    Last Name <span className="text-red-500" aria-hidden="true">*</span>
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-md font-body focus:outline-none focus:ring-2 focus:ring-neon-volt focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block font-body font-medium text-gray-700 mb-2">
                  Email Address <span className="text-red-500" aria-hidden="true">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-md font-body focus:outline-none focus:ring-2 focus:ring-neon-volt focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block font-body font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md font-body focus:outline-none focus:ring-2 focus:ring-neon-volt focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="service" className="block font-body font-medium text-gray-700 mb-2">
                  Service Interested In <span className="text-red-500" aria-hidden="true">*</span>
                </label>
                <select
                  id="service"
                  name="service"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-md font-body focus:outline-none focus:ring-2 focus:ring-neon-volt focus:border-transparent bg-white"
                >
                  <option value="">Select a service</option>
                  <option value="cv-writing">CV Writing & Career Development</option>
                  <option value="visual-branding">Visual Branding & Identity</option>
                  <option value="web-experiences">Web Experiences & Digital Platforms</option>
                  <option value="business-systems">Business Systems & Automation</option>
                  <option value="ai-software">AI & Software Solutions</option>
                  <option value="other">Other / Not Sure</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block font-body font-medium text-gray-700 mb-2">
                  Your Message <span className="text-red-500" aria-hidden="true">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-md font-body focus:outline-none focus:ring-2 focus:ring-neon-volt focus:border-transparent resize-vertical"
                ></textarea>
              </div>

              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="consent"
                  name="consent"
                  required
                  className="mt-1 w-4 h-4 text-blueprint border-gray-300 rounded focus:ring-neon-volt"
                />
                <label htmlFor="consent" className="font-body text-sm text-gray-600">
                  I agree to the processing of my personal data as described in the{' '}
                  <a href="/privacy" className="text-blueprint underline hover:text-blue-700">Privacy Policy</a>.
                  <span className="text-red-500" aria-hidden="true">*</span>
                </label>
              </div>

              <button
                type="submit"
                className="w-full md:w-auto inline-flex items-center justify-center gap-2 bg-neon-volt text-graphite font-body font-semibold px-8 py-4 rounded-md hover:bg-white transition-colors focus:outline-none focus:ring-2 focus:ring-neon-volt focus:ring-offset-2 focus:ring-offset-white"
              >
                Send Message
                <ArrowRight className="w-5 h-5" aria-hidden="true" />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-16 md:py-24 bg-canvas" aria-labelledby="contact-info-heading">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 id="contact-info-heading" className="font-heading font-bold text-3xl md:text-4xl mb-8 text-center">
              Other Ways to Reach Us
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg text-center">
                <h3 className="font-heading font-bold text-lg mb-2">Email</h3>
                <p className="font-body text-gray-600 mb-2">For general inquiries:</p>
                <a href="mailto:hello@sketchworks.lk" className="text-blueprint font-body font-medium hover:underline">
                  hello@sketchworks.lk
                </a>
              </div>
              <div className="bg-white p-6 rounded-lg text-center">
                <h3 className="font-heading font-bold text-lg mb-2">Phone</h3>
                <p className="font-body text-gray-600 mb-2">Call us during business hours:</p>
                <a href="tel:+94112345678" className="text-blueprint font-body font-medium hover:underline">
                  +94 11 234 5678
                </a>
              </div>
              <div className="bg-white p-6 rounded-lg text-center">
                <h3 className="font-heading font-bold text-lg mb-2">Office</h3>
                <p className="font-body text-gray-600 mb-2">Visit us in Colombo:</p>
                <address className="font-body text-gray-600 not-italic">
                  123 Galle Road,<br />
                  Colombo 03,<br />
                  Sri Lanka
                </address>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
