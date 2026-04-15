import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
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
  return (
    <ClerkProvider>
      <html
        lang="en"
        className={`${cormorant.variable} ${dmSans.variable} h-full antialiased`}
      >
        <head>
          {/* Preconnect to Clerk domains to reduce auth SDK latency */}
          <link rel="preconnect" href="https://grown-dogfish-64.clerk.accounts.dev" />
          <link rel="preconnect" href="https://img.clerk.com" />
        </head>
        <body className="min-h-full flex flex-col">
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
