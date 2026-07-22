import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { getClerkFrontendApiHost } from "@/lib/clerkFrontendApi";

// Self-hosted (repo-vendored) variable fonts — see src/app/fonts/.
// Avoids fetching from Google Fonts at build time (next/font/google requires
// network access during `next build`, which fails in network-restricted CI).
const cormorant = localFont({
  src: "./fonts/cormorant-garamond-latin-variable.woff2",
  variable: "--font-cormorant",
  weight: "300 700",
  display: "swap",
});

const dmSans = localFont({
  src: "./fonts/dm-sans-latin-variable.woff2",
  variable: "--font-dm-sans",
  weight: "100 1000",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://socratiaacademy.com'),
  title: {
    default: 'Socratia Academy — Japanese for the Arab World',
    template: '%s | Socratia Academy',
  },
  description: 'The premier Japanese speaking program for Arabic speakers. Structured curriculum, live sessions, and expert support — built for Gulf learners.',
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
  },
  openGraph: {
    siteName: 'Socratia Academy',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Socratia Academy — Japanese for the Arab World',
    description: 'The premier Japanese speaking program for Arabic speakers.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const clerkFapi = getClerkFrontendApiHost();

  return (
    <ClerkProvider>
      <html
        lang="en"
        className={`${cormorant.variable} ${dmSans.variable} h-full antialiased`}
      >
        <head>
          {/* Preconnect to Clerk domains to reduce auth SDK latency */}
          <link rel="preconnect" href={`https://${clerkFapi}`} />
          <link rel="preconnect" href="https://img.clerk.com" />
        </head>
        <body className="min-h-full flex flex-col">
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
