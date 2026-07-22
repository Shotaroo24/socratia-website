"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import dynamic from "next/dynamic";
import Button from "@/components/ui/Button";
import { SITE_CONFIG } from "@/lib/constants";

// Lazy-load Clerk-dependent auth components to avoid blocking the initial paint.
// A static "Log in" link is shown while the auth state loads.
const LoginPlaceholder = (
  <Link
    href="/login"
    className="text-body font-medium transition-colors duration-200"
    style={{ color: "#8899AA" }}
  >
    Log in
  </Link>
);

const NavAuthDesktop = dynamic(
  () => import("./NavAuth").then((m) => m.NavAuthDesktop),
  { ssr: false, loading: () => LoginPlaceholder }
);

const NavAuthMobile = dynamic(
  () => import("./NavAuth").then((m) => m.NavAuthMobile),
  {
    ssr: false,
    loading: () => (
      <Link
        href="/login"
        className="font-medium transition-colors py-1"
        style={{ color: "#8899AA" }}
      >
        Log in
      </Link>
    ),
  }
);

const publicNavLinks = [
  { label: "Our Service", href: "/#service" },
  { label: "FAQ", href: "/#faq" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const isDashboard = pathname?.startsWith("/dashboard");
  const navLinks = isDashboard ? [] : publicNavLinks;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-navy/95 backdrop-blur-md shadow-md"
          : "bg-navy backdrop-blur-sm"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Text logo */}
        <Link href="/" className="flex-shrink-0 group">
          <span
            className="font-heading font-medium text-xl md:text-2xl uppercase transition-opacity duration-200 group-hover:opacity-80"
            style={{ color: "#E8DFD0", letterSpacing: "0.12em" }}
          >
            Socratia
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-body font-medium text-text-light/70 hover:text-main transition-colors duration-200"
            >
              {link.label}
            </Link>
          ))}
          {!isDashboard && <Button href="/apply">{SITE_CONFIG.ctaLabel}</Button>}
          <NavAuthDesktop />
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden inline-flex items-center justify-center min-h-11 min-w-11 p-2 text-text-light/80 hover:text-main transition-colors"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          aria-controls="nav-mobile-menu"
        >
          {menuOpen ? <XIcon /> : <MenuIcon />}
        </button>
      </div>

      {/* Mobile dropdown */}
      <div
        id="nav-mobile-menu"
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          menuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
        } bg-navy border-t border-main-light/20`}
      >
        <div className="px-6 py-5 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-body text-text-light/80 hover:text-main font-medium transition-colors py-1"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          {!isDashboard && (
            <Link
              href="/apply"
              className="text-body font-medium transition-colors py-1"
              style={{ color: "#C9A84C" }}
              onClick={() => setMenuOpen(false)}
            >
              {SITE_CONFIG.ctaLabel}
            </Link>
          )}
          <NavAuthMobile onClose={() => setMenuOpen(false)} />
        </div>
      </div>
    </header>
  );
}

function MenuIcon() {
  return (
    <svg
      className="w-6 h-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg
      className="w-6 h-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
  );
}
