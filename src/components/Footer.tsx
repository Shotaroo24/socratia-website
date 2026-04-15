import Link from "next/link";
import { SITE_CONFIG } from "@/lib/constants";

const policyLinks = [
  { label: "Terms & Conditions", href: "/terms" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Commercial Disclosure", href: "/commercial-disclosure" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy pt-16 pb-8">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 pb-12 border-b border-main-light/20">
          {/* Connect with us */}
          <div>
            <h3 className="font-heading text-xl font-semibold text-text-light mb-5">
              Connect with us
            </h3>
            <div className="flex gap-3">
              <SocialIcon href="https://www.instagram.com/shotaroo.20" label="Instagram">
                <InstagramIcon />
              </SocialIcon>
              <SocialIcon href="https://www.tiktok.com/@shotaro.20" label="TikTok">
                <TikTokIcon />
              </SocialIcon>
              <SocialIcon href="https://www.youtube.com/@shotaro.20" label="YouTube">
                <YouTubeIcon />
              </SocialIcon>
            </div>
          </div>

          {/* Our Mission */}
          <div>
            <h3 className="font-heading text-xl font-semibold text-text-light mb-5">
              Our Mission
            </h3>
            <p className="text-text-muted text-sm leading-relaxed">
              Our mission is to bring you the best Japanese learning experience
            </p>
          </div>

          {/* Our Policy */}
          <div>
            <h3 className="font-heading text-xl font-semibold text-text-light mb-5">
              Our Policy
            </h3>
            <ul className="space-y-2.5">
              {policyLinks.map((link) => (
                <li key={link.href} className="flex items-center gap-2">
                  <ChevronRightIcon />
                  <Link
                    href={link.href}
                    className="text-sm text-text-muted hover:text-main transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Get in Touch */}
          <div>
            <h3 className="font-heading text-xl font-semibold text-text-light mb-5">
              Get in Touch
            </h3>
            <a
              href={`mailto:${SITE_CONFIG.email}`}
              className="flex items-center gap-2.5 text-sm text-text-muted hover:text-main transition-colors duration-200"
            >
              <MailIcon />
              <span>{SITE_CONFIG.email}</span>
            </a>
          </div>
        </div>

        <p className="text-center text-sm text-text-muted mt-8">
          Copyright &copy; {currentYear} {SITE_CONFIG.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

function SocialIcon({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      aria-label={label}
      className="w-10 h-10 rounded-full bg-navy-mid border border-main-light/30 text-text-muted flex items-center justify-center hover:bg-main hover:text-navy hover:border-main transition-all duration-200 hover:-translate-y-0.5"
    >
      {children}
    </a>
  );
}

function ChevronRightIcon() {
  return (
    <svg
      className="w-3.5 h-3.5 text-main flex-shrink-0"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2.5}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg
      className="w-4 h-4 flex-shrink-0"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
      />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

function TikTokIcon() {
  return (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.75a8.18 8.18 0 004.78 1.52V6.82a4.85 4.85 0 01-1.01-.13z" />
    </svg>
  );
}

function YouTubeIcon() {
  return (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
      <path d="M23.495 6.205a3.007 3.007 0 00-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 00.527 6.205a31.247 31.247 0 00-.522 5.805 31.247 31.247 0 00.522 5.783 3.007 3.007 0 002.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 002.088-2.088 31.247 31.247 0 00.5-5.783 31.247 31.247 0 00-.5-5.805zM9.609 15.601V8.408l6.264 3.602z" />
    </svg>
  );
}
