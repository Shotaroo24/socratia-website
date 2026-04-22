const STATS = [
  { num: '94',  label: 'Video Lessons',        sub: 'Every topic, step by step'  },
  { num: '17+', label: 'Hours of Content',     sub: 'Study at your own pace'     },
  { num: '2×',  label: 'Live Sessions / Week', sub: '1-on-1 on Google Meet'      },
  { num: '∞',   label: 'Lifetime Access',      sub: 'All materials, forever'     },
] as const;

export default function StatsBand() {
  return (
    <section
      style={{
        background: '#060D18',
        borderTop: '1px solid rgba(201,168,76,0.12)',
      }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div
          className="grid grid-cols-2 md:grid-cols-4"
          style={{ gap: 1, background: 'rgba(201,168,76,0.12)' }}
        >
          {STATS.map((s) => (
            <div
              key={s.num}
              className="px-6 py-10 text-center"
              style={{ background: '#060D18' }}
            >
              <p
                className="font-heading font-bold text-main"
                style={{ fontSize: 'clamp(2.8rem,4vw,4rem)', lineHeight: 1, marginBottom: 8 }}
              >
                {s.num}
              </p>
              <p className="text-text-light font-medium text-sm mb-1">{s.label}</p>
              <p className="text-text-muted text-xs">{s.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
