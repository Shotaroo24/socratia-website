import Link from "next/link";

const DETAILS = [
  { label: 'Duration', value: '60 min' },
  { label: 'Platform', value: 'Google Meet' },
  { label: 'Cost', value: 'Free' },
] as const;

export default function FreeTrial() {
  return (
    <section
      className="relative overflow-hidden py-24 md:py-32"
      style={{
        background: 'linear-gradient(160deg,#060D18 0%,#0B1522 40%,#162640 100%)',
      }}
    >
      {/* Gold glow */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: -120,
          right: -120,
          width: 600,
          height: 600,
          background: 'radial-gradient(circle,rgba(201,168,76,0.07) 0%,transparent 65%)',
          pointerEvents: 'none',
        }}
      />

      <div className="relative max-w-6xl mx-auto px-6 text-center">

        {/* Eyebrow */}
        <p
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: 11,
            letterSpacing: '0.35em',
            textTransform: 'uppercase',
            color: '#C9A84C',
            margin: 0,
          }}
        >
          STILL UNSURE?
        </p>

        {/* Eyebrow divider */}
        <div
          aria-hidden="true"
          style={{ width: 32, height: 1, background: '#C9A84C', margin: '28px auto' }}
        />

        {/* Title */}
        <h2
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 'clamp(32px, 5vw, 48px)',
            fontWeight: 700,
            lineHeight: 1.1,
            margin: 0,
          }}
        >
          <span style={{ color: '#F5F0E8' }}>Apply for a </span>
          <span style={{ color: '#C9A84C' }}>Free Trial Lesson</span>
        </h2>

        {/* Section divider */}
        <div
          aria-hidden="true"
          style={{ width: 40, height: 1, background: 'rgba(201,168,76,0.5)', margin: '32px auto' }}
        />

        {/* Body */}
        <p
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: '0.95rem',
            color: 'rgba(245,240,232,0.65)',
            lineHeight: 1.7,
            maxWidth: 640,
            margin: '0 auto',
          }}
        >
          A one-hour conversation on Google Meet. Meet your teacher, experience the method, and see if Socratia is right for you.
        </p>

        {/* Details */}
        <div
          style={{
            maxWidth: 720,
            margin: '40px auto',
          }}
        >
          <div
            style={{
              borderTop: '1px solid rgba(245,240,232,0.1)',
              borderBottom: '1px solid rgba(245,240,232,0.1)',
              padding: '24px 0',
            }}
          >
            <div
              className="flex flex-col sm:flex-row items-center justify-center"
              style={{ gap: 'clamp(20px, 5vw, 48px)' }}
            >
              {DETAILS.map(({ label, value }) => (
                <div key={label} className="text-center">
                  <p
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: 10,
                      letterSpacing: '0.25em',
                      textTransform: 'uppercase',
                      color: 'rgba(245,240,232,0.5)',
                      marginBottom: 6,
                    }}
                  >
                    {label}
                  </p>
                  <p
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: 20,
                      color: '#F5F0E8',
                      lineHeight: 1,
                      margin: 0,
                    }}
                  >
                    {value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <Link
          href="/apply"
          className="inline-flex items-center justify-center py-3 px-8 rounded-full text-sm font-medium transition-colors duration-200"
          style={{ background: '#C9A84C', color: '#0B1522' }}
        >
          Apply Now →
        </Link>

        {/* Note */}
        <p
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontStyle: 'italic',
            fontSize: 12,
            color: 'rgba(245,240,232,0.5)',
            marginTop: 20,
            marginBottom: 0,
          }}
        >
          No credit card · No commitment
        </p>

      </div>
    </section>
  );
}
