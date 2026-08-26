import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class", "class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // Brand Colors - DO NOT DEVIATE
      colors: {
        graphite: "#1A1A1A",
        blueprint: "#0F4C81",
        neonVolt: "#CCFF00",
        canvas: "#F8F9FA",
        pureWhite: "#FFFFFF",
      },
      // Typography System
      fontFamily: {
        heading: ["var(--font-space-grotesk)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
        code: ["var(--font-jetbrains-mono)", "monospace"],
      },
      // Font Weights per brand guidelines
      fontWeight: {
        regular: "400",
        medium: "500",
        bold: "700",
        extraBold: "800",
      },
      // Custom focus ring for accessibility (WCAG AA compliant)
      ringColor: {
        neon: "#CCFF00",
      },
      ringWidth: {
        "focus": "2",
      },
      // Animation timing for smooth interactions
      transitionTimingFunction: {
        "smooth": "cubic-bezier(0.4, 0, 0.2, 1)",
      },
      // Performance-optimized max widths
      maxWidth: {
        "content": "1200px",
        "prose": "720px",
      },
    },
  },
  plugins: [],
};

export default config;
