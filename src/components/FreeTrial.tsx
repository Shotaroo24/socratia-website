import Button from "@/components/ui/Button";
import { SITE_CONFIG } from "@/lib/constants";

export default function FreeTrial() {
  return (
    <section
      className="relative overflow-hidden py-28 md:py-36"
      style={{
        background:
          "linear-gradient(160deg, #060D18 0%, #0B1522 40%, #162640 75%, #1A2E4A 100%)",
      }}
    >
      {/* Gold glow — top left */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: '-100px',
          left: '-100px',
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle, rgba(201,168,76,0.08) 0%, transparent 65%)',
          pointerEvents: 'none',
        }}
      />

      {/* Gold glow — bottom right */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          bottom: '-80px',
          right: '-80px',
          width: '350px',
          height: '350px',
          background: 'radial-gradient(circle, rgba(201,168,76,0.05) 0%, transparent 60%)',
          pointerEvents: 'none',
        }}
      />

      <div className="relative max-w-2xl mx-auto px-6 text-center">
        {/* Eyebrow */}
        <p className="text-main font-medium text-xs uppercase tracking-[0.28em] mb-5">
          — Still Unsure? —
        </p>

        {/* Heading */}
        <h2 className="font-heading text-4xl md:text-5xl text-text-light font-bold leading-tight mb-4">
          Apply for a{' '}
          <span style={{ color: '#C9A84C' }}>Free Trial Lesson</span>
        </h2>

        {/* Gold divider */}
        <div className="w-10 h-px bg-main mx-auto mb-8" aria-hidden="true" />

        {/* Body */}
        <p className="text-text-muted text-lg leading-relaxed mb-4">
          We understand that investing in a course is a big decision. To help
          you see the value for yourself, we&rsquo;re offering a{" "}
          <strong className="text-text-light font-semibold">
            free 1-hour Japanese trial lesson
          </strong>{" "}
          on Google Meet.
        </p>
        <p className="text-text-muted text-lg leading-relaxed mb-12">
          We&rsquo;ll walk you through our teaching method, show you how our
          courses are structured, and answer any questions you have. Let&rsquo;s
          find out if we&rsquo;re a perfect match to achieve your goals
          together!
        </p>

        {/* CTA */}
        <Button
          href="/apply"
          className="text-base w-auto px-8 md:px-10 py-4 shadow-lg"
        >
          Apply for a Free Trial&ensp;›
        </Button>
      </div>
    </section>
  );
}
