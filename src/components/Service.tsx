const CARDS = [
  {
    num: '01',
    title: 'Textbook Learning',
    desc: 'Practical grammar, vocabulary, and cultural context — built for beginners from the ground up.',
    gradient: 'linear-gradient(135deg,#1E3355 0%,#0B1522 100%)',
    icon: (
      <svg width="36" height="36" fill="none" viewBox="0 0 24 24" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
  },
  {
    num: '02',
    title: 'Video Learning',
    desc: '94 structured videos covering all topics with pronunciation guides and real-life examples.',
    gradient: 'linear-gradient(135deg,#162640 0%,#0B1522 100%)',
    icon: (
      <svg width="36" height="36" fill="none" viewBox="0 0 24 24" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="5 3 19 12 5 21 5 3" fill="rgba(201,168,76,0.15)" stroke="#C9A84C" />
      </svg>
    ),
  },
  {
    num: '03',
    title: 'Live Lessons',
    desc: '1-on-1 conversation practice twice a week — the fastest path from knowledge to speaking.',
    gradient: 'linear-gradient(135deg,#1a2d4a 0%,#0B1522 100%)',
    icon: (
      <svg width="36" height="36" fill="none" viewBox="0 0 24 24" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="4" fill="rgba(201,168,76,0.1)" />
        <path d="M4 20c0-4 3.582-7 8-7s8 3 8 7" fill="rgba(201,168,76,0.05)" />
      </svg>
    ),
  },
  {
    num: '04',
    title: 'Support',
    desc: 'Personalized guidance via Discord and Email throughout your entire course period.',
    gradient: 'linear-gradient(135deg,#162030 0%,#0B1522 100%)',
    icon: (
      <svg width="36" height="36" fill="none" viewBox="0 0 24 24" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
  },
] as const;

export default function Service() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <span
            className="inline-block text-xs font-semibold tracking-[0.22em] uppercase mb-4"
            style={{ color: '#896520' }}
          >
            What&apos;s Inside
          </span>
          <h2 className="font-heading text-4xl md:text-5xl text-ink font-bold leading-tight">
            Everything You Need to Learn Japanese
          </h2>
        </div>

        {/* 2×2 card grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {CARDS.map((card) => (
            <div
              key={card.num}
              className="flex overflow-hidden rounded-xl border border-border bg-cream"
              style={{ boxShadow: '0 1px 8px rgba(0,0,0,0.04)', minHeight: 140 }}
            >
              {/* Icon panel */}
              <div
                className="flex items-center justify-center flex-shrink-0"
                style={{ width: 120, background: card.gradient }}
              >
                {card.icon}
              </div>

              {/* Text */}
              <div className="px-6 py-6">
                <p
                  className="font-heading mb-1"
                  style={{ fontSize: '1.05rem', color: '#896520', lineHeight: 1 }}
                >
                  {card.num}
                </p>
                <h3 className="font-heading text-xl font-bold text-ink mb-2">{card.title}</h3>
                <p className="text-subtext text-sm leading-relaxed">{card.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
