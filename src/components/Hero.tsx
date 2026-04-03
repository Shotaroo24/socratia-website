import Button from "@/components/ui/Button";
import { SITE_CONFIG } from "@/lib/constants";

export default function Hero() {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        background:
          "linear-gradient(175deg, #0B1522 0%, #162640 60%, #1E3355 100%)",
      }}
    >
      {/* Subtle radial highlight */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 40%, rgba(201,168,76,0.06) 0%, transparent 70%)",
        }}
      />

      <div className="relative max-w-3xl mx-auto px-6 py-36 md:py-44 text-center">
        {/* Badge */}
        <p
          className="text-main font-medium text-xs uppercase mb-8 tracking-[0.28em]"
        >
          — For Complete Beginners —
        </p>

        {/* Title */}
        <h1 className="font-heading text-5xl md:text-6xl lg:text-[4.25rem] text-text-light font-bold leading-[1.1] tracking-tight mb-8">
          The Premier Japanese Speaking Program
        </h1>

        {/* Gold divider */}
        <div className="w-10 h-px bg-main mx-auto mb-8" aria-hidden="true" />

        {/* Subtext */}
        <p className="text-text-muted text-lg leading-relaxed mb-12 max-w-lg mx-auto">
          Our &ldquo;Input + Live Practice&rdquo; method turns your knowledge
          into usable Japanese speaking skills in just 30 days.
        </p>

        {/* CTA */}
        <Button
          href={SITE_CONFIG.trialFormUrl}
          external
          className="text-base px-10 py-4 shadow-lg"
        >
          Apply for a Free Trial&ensp;›
        </Button>
      </div>
    </section>
  );
}
