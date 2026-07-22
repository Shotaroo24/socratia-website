import Button from "@/components/ui/Button";
import { SITE_CONFIG } from "@/lib/constants";

const FEATURES: { icon: React.ReactNode; text: string }[] = [
  { icon: <BookIcon />, text: "Slide-based textbooks" },
  { icon: <PlayIcon />, text: "94 video lessons · 17+ hours" },
  { icon: <UserIcon />, text: "8 live 1-on-1 sessions · 2× per week" },
  { icon: <MessageIcon />, text: "WhatsApp support throughout" },
  { icon: <InfinityIcon />, text: "Lifetime access to all materials" },
];

const TRIAL_DETAILS: { label: string; value: string; highlight?: true }[] = [
  { label: "Duration", value: "45 min" },
  { label: "Platform", value: "Google Meet" },
  { label: "Cost", value: "Free", highlight: true },
];

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="relative overflow-hidden py-24 md:py-32"
      style={{
        background: "linear-gradient(160deg,#060D18 0%,#0B1522 40%,#162640 100%)",
      }}
    >
      {/* Gold glow */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: -120,
          right: -120,
          width: 600,
          height: 600,
          background: "radial-gradient(circle,rgba(201,168,76,0.07) 0%,transparent 65%)",
          pointerEvents: "none",
        }}
      />

      <div className="relative max-w-6xl mx-auto px-6 text-center">
        {/* Eyebrow */}
        <p className="inline-block text-xs font-semibold tracking-[0.22em] uppercase mb-4 text-main">
          PRICING &amp; FREE TRIAL
        </p>

        {/* Eyebrow divider */}
        <div aria-hidden="true" className="w-[34px] h-px bg-main mx-auto my-4" />

        {/* Title */}
        <h2 className="font-heading text-4xl md:text-5xl font-bold leading-tight">
          <span className="text-text-light">One program. </span>
          <span className="text-main">Everything included.</span>
        </h2>

        {/* Price */}
        <p className="font-heading text-3xl md:text-4xl font-bold leading-none text-main mt-8">
          {SITE_CONFIG.price}
        </p>
        <p className="text-text-muted text-sm md:text-base mt-3">
          &asymp; 1,496 SAR &middot; one-time payment &middot; no subscription
        </p>

        {/* Feature list */}
        <div className="mx-auto mt-10 flex flex-col items-start gap-3.5 max-w-[400px]">
          {FEATURES.map(({ icon, text }) => (
            <div key={text} className="flex items-center gap-3">
              <span className="text-main flex-shrink-0">{icon}</span>
              <span className="text-text-light text-sm md:text-base">{text}</span>
            </div>
          ))}
        </div>

        {/* Trial band */}
        <div
          className="mx-auto mt-12 max-w-[620px] p-6"
          style={{
            borderTop: "0.5px solid rgba(201,168,76,0.22)",
            borderBottom: "0.5px solid rgba(201,168,76,0.22)",
          }}
        >
          <h3 className="font-heading text-2xl font-bold text-text-light mb-5">
            Try it free before you decide
          </h3>
          <div className="flex flex-wrap items-center justify-center gap-10">
            {TRIAL_DETAILS.map(({ label, value, highlight }) => (
              <div key={label} className="text-center">
                <p className="text-xs tracking-[0.12em] uppercase text-text-muted mb-1.5">
                  {label}
                </p>
                <p
                  className={`font-heading text-xl ${highlight ? "text-main" : "text-text-light"}`}
                >
                  {value}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <Button href="/apply" className="mt-12">
          {SITE_CONFIG.ctaLabel}&ensp;&rarr;
        </Button>

        {/* Note */}
        <p className="font-heading italic text-xs text-text-muted mt-5">
          No credit card &middot; No commitment
        </p>
      </div>
    </section>
  );
}

function BookIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
    </svg>
  );
}

function PlayIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="9" />
      <polygon points="10 8 16 12 10 16 10 8" fill="currentColor" stroke="none" />
    </svg>
  );
}

function UserIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="8" r="4" />
      <path d="M4 20c0-4 3.582-7 8-7s8 3 8 7" />
    </svg>
  );
}

function MessageIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
    </svg>
  );
}

function InfinityIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M18.178 12c3.822 0 3.822 6 0 6-3.822 0-5.356-6-9.178-6s-3.822 6 0 6c3.822 0 5.356-6 9.178-6z" />
    </svg>
  );
}
