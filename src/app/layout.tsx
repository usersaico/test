import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
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
    "BestWeb.lk",
  ],
  authors: [{ name: "Sketchworks", url: "https://sketchworks.lk" }],
  creator: "Sketchworks",
  publisher: "Sketchworks",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://sketchworks.lk"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_LK",
    siteName: "Sketchworks",
    title: "Sketchworks | Digital Transformation Agency Sri Lanka",
    description:
      "From rough concepts to working realities. Award-winning digital agency in Sri Lanka specializing in web experiences, branding, and AI solutions.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Sketchworks - Digital Transformation Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sketchworks | Digital Transformation Agency",
    description: "From rough concepts to working realities.",
    images: ["/twitter-image.png"],
  },
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
  verification: {
    // Add verification codes when deployed
    // google: 'verification-code',
  },
};

/**
 * JSON-LD Schema for Organization (SEO Bonus Points)
 * Structured data for search engines
 */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Sketchworks",
  url: "https://sketchworks.lk",
  logo: "https://sketchworks.lk/logo.png",
  description:
    "Sri Lanka's premier digital transformation agency building exceptional web experiences and AI-powered solutions.",
  foundingDate: "2024",
  address: {
    "@type": "PostalAddress",
    addressCountry: "LK",
    addressLocality: "Colombo",
    addressRegion: "Western Province",
  },
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    availableLanguage: ["English", "Sinhala", "Tamil"],
  },
  sameAs: [
    "https://linkedin.com/company/sketchworks",
    "https://twitter.com/sketchworks_lk",
    "https://facebook.com/sketchworkslk",
  ],
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        {/* Preload critical assets for performance */}
        <link
          rel="preload"
          href="/fonts/space-grotesk.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        {/* PWA Manifest */}
        <link rel="manifest" href="/manifest.json" />
        {/* Theme color for mobile browsers */}
        <meta name="theme-color" content="#1A1A1A" />
        {/* Apple Touch Icon */}
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        {/* JSON-LD Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-body antialiased min-h-screen bg-canvas text-graphite">
        {/* Theme Provider for Dark Mode */}
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {/* Skip to main content for accessibility */}
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-neonVolt focus:text-graphite focus:font-bold focus:ring-2 focus:ring-neon focus:rounded"
          >
            Skip to main content
          </a>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
