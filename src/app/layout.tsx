import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import AIChatbot from "@/components/ai-chatbot";
import "./globals.css";

/**
 * Font Optimization for Performance (BestWeb.lK Criteria)
 * - All fonts preloaded with display: swap for FCP <1s
 * - Space Grotesk: Headings (Bold/ExtraBold)
 * - Inter: Body text (Regular/Medium)
 * - JetBrains Mono: Code/technical accents
 */
const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  preload: true,
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
  preload: true,
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  // SEO: Unique meta description per BestWeb.lk criteria
  title: {
    default: "Sketchworks | From rough concepts to working realities",
    template: "%s | Sketchworks",
  },
  description:
    "Sri Lanka's premier digital transformation agency. We build exceptional web experiences, visual branding, business systems, and AI-powered software solutions.",
  keywords: [
    "web design Sri Lanka",
    "digital agency Colombo",
    "branding services",
    "business systems",
    "AI software development",
    "CV writing services",
    "BestWeb.lk 2026",
  ],
  authors: [{ name: "Sketchworks", url: "https://sketchworks.lk" }],
  creator: "Sketchworks",
  publisher: "Sketchworks",
  
  // OpenGraph for social sharing
  openGraph: {
    type: "website",
    locale: "en_LK",
    alternateLocale: ["en_US", "en_GB"],
    title: "Sketchworks | Digital Transformation Agency Sri Lanka",
    description: "From rough concepts to working realities. Award-winning digital agency in Colombo.",
    siteName: "Sketchworks",
    url: "https://sketchworks.lk",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Sketchworks - Digital Transformation Agency",
      },
    ],
  },
  
  // Twitter Cards
  twitter: {
    card: "summary_large_image",
    title: "Sketchworks | Digital Transformation Agency",
    description: "From rough concepts to working realities.",
    images: ["/twitter-image.png"],
  },
  
  // Robots.txt configuration
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  
  // Verification tokens (add your actual tokens)
  verification: {
    google: "your-google-verification-token",
    yandex: "your-yandex-verification-token",
  },
};

// JSON-LD Schema for Organization (SEO Bonus)
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Sketchworks",
  url: "https://sketchworks.lk",
  logo: "https://sketchworks.lk/logo.png",
  description: "Sri Lanka's premier digital transformation agency",
  foundingDate: "2024",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Colombo",
    addressCountry: "LK",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+94-77-XXX-XXXX",
    contactType: "customer service",
    availableLanguage: ["English", "Sinhala", "Tamil"],
  },
  sameAs: [
    "https://linkedin.com/company/sketchworks-lk",
    "https://twitter.com/sketchworkslk",
    "https://facebook.com/sketchworkslk",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Preconnect for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* PWA manifest */}
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#CCFF00" />
        <link rel="apple-touch-icon" href="/icon-192x192.png" />
        {/* JSON-LD Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable} antialiased`}
      >
        {/* Accessibility: Skip to main content link */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-neon-volt focus:text-graphite focus:font-bold focus:rounded-lg"
        >
          Skip to main content
        </a>
        
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
          {/* AI Chatbot Component */}
          <AIChatbot />
        </ThemeProvider>
      </body>
    </html>
  );
}
