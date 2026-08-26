"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider, type ThemeProviderProps } from "next-themes";

/**
 * Theme Provider for Dark Mode Support
 * Enables system preference detection and manual theme switching
 * Required for PWA and accessibility compliance
 */

export function ThemeProvider({
  children,
  ...props
}: ThemeProviderProps) {
  const [mounted, setMounted] = React.useState(false);

  // Prevent hydration mismatch by waiting for client-side mount
  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <>{children}</>;
  }

  return (
    <NextThemesProvider
      {...props}
    >
      {children}
    </NextThemesProvider>
  );
}
