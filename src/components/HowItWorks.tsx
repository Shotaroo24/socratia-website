const INPUT_ITEMS  = ['Slide-based textbooks', '94 structured videos', '17+ hours of content'] as const;
const PRAC_ITEMS   = ['2× weekly live sessions', 'Flexible rescheduling', 'Ongoing personal support'] as const;

export default function HowItWorks() {
  return (
    <section id="howto" className="bg-cream py-24 md:py-32">
      <div className="max-w-[900px] mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <span
            className="inline-block text-xs font-semibold tracking-[0.22em] uppercase mb-4"
            style={{ color: '#896520' }}
          >
            How It Works
          </span>
          <h2 className="font-heading text-4xl md:text-5xl text-ink font-bold leading-tight mb-3">
            Why Input + Live Practice Works
          </h2>
          <p className="text-subtext text-lg leading-relaxed max-w-lg mx-auto">
            Most Japanese courses give you one without the other. We give you both — in the right sequence.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-[1fr_80px_1fr] items-stretch">
          {/* Input */}
          <div
            className="bg-white rounded-2xl p-10 border border-border"
            style={{ boxShadow: '0 2px 16px rgba(0,0,0,0.05)' }}
          >
            <div className="mb-7">
              <span
                className="font-heading block"
                style={{ fontSize: '3.5rem', fontWeight: 700, color: 'rgba(201,168,76,0.22)', lineHeight: 1 }}
              >
                01
              </span>
              <h3 className="font-heading text-[1.75rem] font-bold text-ink mt-1.5">Input</h3>
            </div>
            <p className="text-subtext text-sm leading-relaxed mb-5">
              Build vocabulary, grammar, and comprehension through our textbooks and 94 videos — at your own pace.
            </p>
            {INPUT_ITEMS.map((item) => (
              <div key={item} className="flex items-center gap-2.5 mb-2">
                <span className="w-1.5 h-1.5 rounded-full bg-main flex-shrink-0" />
                <span className="text-subtext text-sm">{item}</span>
              </div>
            ))}
          </div>

          {/* Arrow — horizontal on desktop, vertical on mobile */}
          <div className="hidden md:flex items-center justify-center flex-shrink-0">
            <span className="text-main text-2xl leading-none">→</span>
          </div>
          <div className="flex md:hidden items-center justify-center py-5" aria-hidden="true">
            <span className="text-main text-2xl leading-none rotate-90">↓</span>
          </div>

          {/* Practice */}
          <div
            className="bg-navy rounded-2xl p-10"
            style={{ boxShadow: '0 2px 24px rgba(0,0,0,0.2)' }}
          >
            <div className="mb-7">
              <span
                className="font-heading block"
                style={{ fontSize: '3.5rem', fontWeight: 700, color: 'rgba(201,168,76,0.3)', lineHeight: 1 }}
              >
                02
              </span>
              <h3
                className="font-heading text-[1.75rem] font-bold mt-1.5"
                style={{ color: '#C9A84C' }}
              >
                Practice
              </h3>
            </div>
            <p className="text-text-muted text-sm leading-relaxed mb-5">
              Apply your knowledge in real 1-on-1 conversation. Live sessions activate what you&rsquo;ve learned &mdash; the fastest path to fluency.
            </p>
            {PRAC_ITEMS.map((item) => (
              <div key={item} className="flex items-center gap-2.5 mb-2">
                <span className="w-1.5 h-1.5 rounded-full bg-main flex-shrink-0" />
                <span className="text-text-muted text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
