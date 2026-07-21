import Button from "@/components/ui/Button";
import { SITE_CONFIG } from "@/lib/constants";

export default function Hero() {
  return (
    <section
      className="relative overflow-hidden flex items-center justify-center"
      style={{
        minHeight: 'calc(100vh - 64px)',
        background:
          "radial-gradient(ellipse 120% 80% at 25% 40%, #1E3355 0%, #0B1522 55%, #060D18 100%)",
      }}
    >
      {/* Subtle gold glow — center */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '800px',
          height: '400px',
          background: 'radial-gradient(ellipse, rgba(201,168,76,0.04) 0%, transparent 65%)',
          pointerEvents: 'none',
        }}
      />

      {/* Noise texture overlay */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.4'/%3E%3C/svg%3E")`,
          backgroundSize: '200px 200px',
          opacity: 0.05,
          pointerEvents: 'none',
        }}
      />

      <div className="relative max-w-3xl mx-auto px-6 py-20 text-center">
        {/* Badge */}
        <p
          className="text-main font-medium text-xs uppercase mb-8 tracking-[0.28em]"
        >
          — For Complete Beginners —
        </p>

        {/* Title */}
        <h1
          className="font-heading text-[2.5rem] md:text-5xl lg:text-6xl xl:text-[4.25rem] text-text-light font-bold leading-[1.1] tracking-tight mb-8"
          style={{ textShadow: '0 2px 20px rgba(0,0,0,0.3)' }}
        >
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
          href="/apply"
          className="text-base w-auto px-8 md:px-10 py-4 shadow-lg"
        >
          {SITE_CONFIG.ctaLabel}&ensp;›
        </Button>
      </div>
    </section>
  );
}
