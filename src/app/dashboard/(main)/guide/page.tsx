import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Course Guide",
  description: "Step-by-step guide for your Japanese learning journey",
  robots: { index: false, follow: false },
};

const timelineItems = [
  {
    number: "01",
    title: "Recommended Study Flow & Time Commitment",
    content: (
      <div className="space-y-4 text-base leading-relaxed" style={{ color: "#5A6A7A" }}>
        <p>
          To get the best results, we recommend studying{" "}
          <strong style={{ color: "#0B1522" }}>5–7 hours per week:</strong>
        </p>
        <ul className="space-y-2 pl-0">
          <li className="flex items-start gap-3">
            <span
              className="rounded-full flex-shrink-0"
              style={{ background: "#C9A84C", width: 6, height: 6, marginTop: "0.55rem" }}
            />
            <span>Live conversation sessions: 2 sessions per week</span>
          </li>
          <li className="flex items-start gap-3">
            <span
              className="rounded-full flex-shrink-0"
              style={{ background: "#C9A84C", width: 6, height: 6, marginTop: "0.55rem" }}
            />
            <span>Independent study (videos + textbooks): about 3–5 hours per week</span>
          </li>
        </ul>
        <div style={{ height: 1, background: "#E8E2D6" }} aria-hidden="true" />
        <p>
          <strong style={{ color: "#0B1522" }}>Week 1:</strong>{" "}Lesson 1 — Hiragana &amp; Katakana
        </p>
        <p>
          <strong style={{ color: "#0B1522" }}>Week 2 onwards:</strong>{" "}Complete 4 Standard Lessons
          per week (Videos + Textbooks)
        </p>
        <div style={{ height: 1, background: "#E8E2D6" }} aria-hidden="true" />
        <p className="text-sm italic" style={{ color: "rgba(90,106,122,0.7)" }}>
          Optional: Use the Advanced Grammar, Words Summary, and Particle Summary sections
          to reinforce your understanding.
        </p>
      </div>
    ),
  },
  {
    number: "02",
    title: "Conversation Lessons",
    content: (
      <div className="space-y-3 text-base leading-relaxed" style={{ color: "#5A6A7A" }}>
        <div className="flex items-start gap-3">
          <span
            className="rounded-full flex-shrink-0"
            style={{ background: "#C9A84C", width: 6, height: 6, marginTop: "0.55rem" }}
          />
          <p>
            You can book and reschedule your 1-on-1 conversation sessions freely
            during your course period.
          </p>
        </div>
        <div className="flex items-start gap-3">
          <span
            className="rounded-full flex-shrink-0"
            style={{ background: "#C9A84C", width: 6, height: 6, marginTop: "0.55rem" }}
          />
          <p>
            Please make sure all sessions are completed within your 1-month course period.
          </p>
        </div>
      </div>
    ),
  },
  {
    number: "03",
    title: "Questions & Support",
    content: (
      <div>
        <p className="text-base leading-relaxed" style={{ color: "#5A6A7A" }}>
          If you have any questions or need support, please reach out to us anytime via
          WhatsApp. We are here to help you!
        </p>
      </div>
    ),
  },
];

export default function GuidePage() {
  return (
    <div className="min-h-screen py-12 pb-24 md:pb-12 px-5" style={{ background: "#FAF7F2" }}>
      <div className="max-w-3xl mx-auto">

        {/* Back link */}
        <Link
          href="/dashboard"
          className="inline-flex items-center gap-2 text-sm font-medium mb-10 transition-opacity hover:opacity-70"
          style={{ color: "#5A6A7A" }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-4 h-4"
          >
            <path d="M19 12H5M12 5l-7 7 7 7" />
          </svg>
          Back to Dashboard
        </Link>

        {/* Page heading */}
        <div className="mb-14">
          <h1
            className="font-heading font-bold leading-tight text-4xl md:text-5xl"
            style={{ color: "#0B1522" }}
          >
            How to Proceed with your Course
          </h1>
          <div
            className="mt-5"
            style={{ width: 40, height: 2, background: "#C9A84C" }}
            aria-hidden="true"
          />
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical gold line */}
          <div
            className="absolute top-7 bottom-7"
            style={{
              left: "1.75rem",
              width: 1,
              background: "linear-gradient(to bottom, #C9A84C 0%, rgba(201,168,76,0.3) 100%)",
            }}
            aria-hidden="true"
          />

          <div className="space-y-16 md:space-y-12">
            {timelineItems.map((item) => (
              <div key={item.number} className="relative flex gap-8 md:gap-12">

                {/* Number node */}
                <div className="flex-shrink-0 relative z-10">
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center font-heading font-bold text-lg"
                    style={{
                      background: "#0B1522",
                      border: "2px solid #C9A84C",
                      color: "#C9A84C",
                      boxShadow: "0 0 0 4px rgba(201,168,76,0.08)",
                    }}
                  >
                    {item.number}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 pt-3 pb-2">
                  <h3
                    className="font-heading font-bold leading-snug mb-4"
                    style={{ color: "#0B1522", fontSize: "clamp(1.2rem, 3vw, 1.5rem)" }}
                  >
                    {item.title}
                  </h3>
                  {item.content}
                </div>

              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
