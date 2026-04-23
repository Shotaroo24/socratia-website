"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen bg-cream flex items-center justify-center px-6">
      <div className="text-center max-w-md">
        <div
          className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
          style={{ background: "rgba(201,168,76,0.1)", border: "2px solid #C9A84C" }}
        >
          <span className="text-2xl" style={{ color: "#C9A84C" }}>!</span>
        </div>
        <h1 className="font-heading text-2xl font-bold text-ink mb-3">
          Something went wrong
        </h1>
        <p className="text-subtext text-sm leading-relaxed mb-6">
          An unexpected error occurred. Please try again or contact us if the problem
          persists.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button
            onClick={reset}
            className="px-6 py-3 rounded-full text-sm font-medium transition-all duration-200 hover:-translate-y-0.5"
            style={{ background: "#C9A84C", color: "#0B1522" }}
          >
            Try again
          </button>
          <a
            href="mailto:info@socratiaacademy.com"
            className="px-6 py-3 rounded-full text-sm font-medium border border-border text-subtext hover:text-ink hover:border-ink transition-colors duration-200"
          >
            Contact support
          </a>
        </div>
      </div>
    </div>
  );
}
