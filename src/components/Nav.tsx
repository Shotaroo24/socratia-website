"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Button from "@/components/ui/Button";
import { SITE_CONFIG } from "@/lib/constants";

const navLinks = [
  { label: "Our Service", href: "#service" },
  { label: "FAQ", href: "#faq" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

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
            className="font-heading font-medium text-xl uppercase transition-opacity duration-200 group-hover:opacity-80"
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
              className="text-sm font-medium text-text-light/70 hover:text-main transition-colors duration-200"
            >
              {link.label}
            </Link>
          ))}
          <Button href={SITE_CONFIG.trialFormUrl} external>
            Apply Now
          </Button>
          <span className="text-sm font-medium text-text-muted/40 cursor-not-allowed select-none">
            Log in
          </span>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 text-text-light/80 hover:text-main transition-colors"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? <XIcon /> : <MenuIcon />}
        </button>
      </div>

      {/* Mobile dropdown */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          menuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
        } bg-navy border-t border-main-light/20`}
      >
        <div className="px-6 py-5 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-text-light/80 hover:text-main font-medium transition-colors py-1"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Button
            href={SITE_CONFIG.trialFormUrl}
            external
            className="w-full justify-center"
          >
            Apply Now
          </Button>
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
