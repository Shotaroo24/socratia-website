"use client";

import Image from "next/image";
import { useUser } from "@clerk/nextjs";
import Button from "@/components/ui/Button";

export default function DashboardPage() {
  const { user, isLoaded } = useUser();
  const firstName = isLoaded && user?.firstName ? user.firstName : null;

  return (
    <div className="bg-cream min-h-screen">

      {/* ─── 1. Hero ─────────────────────────────────────────────── */}
      <section
        className="relative py-28 md:py-36 text-center overflow-hidden"
        style={{
          background: "linear-gradient(175deg, #0B1522 0%, #162640 60%, #1E3355 100%)",
        }}
      >
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 70% 50% at 50% 60%, rgba(201,168,76,0.08) 0%, transparent 70%)",
          }}
        />
        <div className="relative max-w-3xl mx-auto px-6">
          {isLoaded && firstName && (
            <p className="text-main text-sm font-semibold tracking-[0.2em] uppercase mb-5">
              Welcome back, {firstName}!
            </p>
          )}
          <h1
            className="font-heading font-bold leading-tight text-text-light mb-2"
            style={{ fontSize: "clamp(2.2rem, 6vw, 3.75rem)" }}
          >
            Let&apos;s Enjoy Japanese
          </h1>
          <h1
            className="font-heading font-bold leading-tight mb-6"
            style={{ fontSize: "clamp(2.2rem, 6vw, 3.75rem)", color: "#C9A84C" }}
          >
            to the Fullest!
          </h1>
          <div
            className="mx-auto mb-7"
            style={{ width: 40, height: 1, background: "#C9A84C", opacity: 0.6 }}
            aria-hidden="true"
          />
          <p className="text-text-light/70 text-lg leading-relaxed max-w-xl mx-auto mb-10">
            Before starting, please read through the course details on this
            page. We can&apos;t wait to start a wonderful Japanese journey with you!
          </p>
          <Button href="#">Start Learning</Button>
        </div>
      </section>

      {/* ─── 2. Join Our Community ───────────────────────────────── */}
      <section className="py-24 md:py-32 bg-cream">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-stretch gap-10 md:gap-16 md:h-[420px]">

            {/* Text */}
            <div className="w-full md:w-1/2 flex flex-col justify-center">
              <span className="inline-block text-main text-xs font-semibold tracking-[0.2em] uppercase mb-4">
                BEFORE YOU START
              </span>
              <h2 className="font-heading font-bold text-4xl md:text-5xl text-ink leading-tight mb-4">
                Join Our Community
              </h2>
              <div
                className="mb-5"
                style={{ width: 40, height: 2, background: "#C9A84C" }}
                aria-hidden="true"
              />
              <p className="text-subtext text-base md:text-lg leading-relaxed mb-8">
                Our course has set up a private Discord community where you can
                freely ask questions anytime. So, before starting the course,
                please join the Discord group via the link below. Rest assured,
                your personal information will not be disclosed to other members
                on Discord. If you don&apos;t have Discord, please download it
                from your app store!
              </p>
              <div>
                <Button href="https://discord.gg/7d376hwSgU" external>
                  Join Now
                </Button>
              </div>
            </div>

            {/* Image */}
            <div className="relative w-full md:w-1/2 min-h-[280px] rounded-xl overflow-hidden shadow-xl">
              <Image
                src="/images/discord.jpg"
                alt="Discord Community"
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div
                className="absolute inset-0"
                aria-hidden="true"
                style={{
                  background:
                    "linear-gradient(to top, rgba(11,21,34,0.80) 0%, rgba(11,21,34,0.25) 45%, transparent 100%)",
                }}
              />
            </div>

          </div>
        </div>
      </section>

      {/* ─── 3. How to Proceed (white bg, richer cards) ──────────── */}
      <section className="py-24 md:py-32" style={{ background: "#FFFFFF" }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-4xl md:text-5xl text-ink leading-tight">
              How to Proceed with your Course
            </h2>
            <div
              className="mx-auto mt-5"
              style={{ width: 40, height: 2, background: "#C9A84C" }}
              aria-hidden="true"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {/* Card 1 */}
            <div className="group flex flex-col rounded-xl border border-border overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              {/* Navy header bar */}
              <div
                className="px-8 pt-8 pb-6"
                style={{ background: "linear-gradient(135deg, #0B1522 0%, #162640 100%)" }}
              >
                <p
                  className="font-heading leading-none mb-2"
                  style={{ fontSize: "3.5rem", color: "#C9A84C", opacity: 0.9 }}
                >
                  01
                </p>
                <h3 className="font-heading font-bold text-xl text-text-light leading-snug">
                  Recommended Study Flow &amp; Time Commitment
                </h3>
              </div>

              {/* Body */}
              <div className="bg-white flex-1 flex flex-col px-8 py-7 space-y-4 text-sm text-subtext leading-relaxed">
                <p>
                  To get the best results, we recommend{" "}
                  <strong className="text-ink">5–7 hours per week:</strong>
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-3">
                    <span
                      className="mt-0.5 w-5 h-5 flex-shrink-0 rounded-full flex items-center justify-center text-[10px] font-bold"
                      style={{ background: "rgba(201,168,76,0.15)", color: "#C9A84C" }}
                    >
                      ✓
                    </span>
                    <span>Live conversation sessions: 2 per week</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span
                      className="mt-0.5 w-5 h-5 flex-shrink-0 rounded-full flex items-center justify-center text-[10px] font-bold"
                      style={{ background: "rgba(201,168,76,0.15)", color: "#C9A84C" }}
                    >
                      ✓
                    </span>
                    <span>Self-study (videos + textbooks): 3–5 hours per week</span>
                  </li>
                </ul>
                <div style={{ height: 1, background: "#E8E2D6" }} aria-hidden="true" />
                <div className="space-y-2">
                  <p>
                    <strong className="text-ink">Week 1:</strong> Lesson 1 — Hiragana &amp; Katakana
                  </p>
                  <p>
                    <strong className="text-ink">Week 2+:</strong> 4 Standard Lessons per week
                  </p>
                </div>
                <div style={{ height: 1, background: "#E8E2D6" }} aria-hidden="true" />
                <p className="text-xs text-subtext/70 italic">
                  Optional: Advanced Grammar, Words Summary, and Particle Summary sections available for extra reinforcement.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="group flex flex-col rounded-xl border border-border overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <div
                className="px-8 pt-8 pb-6"
                style={{ background: "linear-gradient(135deg, #0B1522 0%, #162640 100%)" }}
              >
                <p
                  className="font-heading leading-none mb-2"
                  style={{ fontSize: "3.5rem", color: "#C9A84C", opacity: 0.9 }}
                >
                  02
                </p>
                <h3 className="font-heading font-bold text-xl text-text-light leading-snug">
                  Conversation Lessons
                </h3>
              </div>

              <div className="bg-white flex-1 flex flex-col px-8 py-7 space-y-5 text-sm text-subtext leading-relaxed">
                <div className="flex items-start gap-3">
                  <span
                    className="mt-0.5 w-5 h-5 flex-shrink-0 rounded-full flex items-center justify-center text-[10px] font-bold"
                    style={{ background: "rgba(201,168,76,0.15)", color: "#C9A84C" }}
                  >
                    ✓
                  </span>
                  <p>
                    Book and reschedule your 1-on-1 conversation sessions freely
                    throughout your course period.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span
                    className="mt-0.5 w-5 h-5 flex-shrink-0 rounded-full flex items-center justify-center text-[10px] font-bold"
                    style={{ background: "rgba(201,168,76,0.15)", color: "#C9A84C" }}
                  >
                    ✓
                  </span>
                  <p>
                    All sessions must be completed within your 1-month plan period.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="group flex flex-col rounded-xl border border-border overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <div
                className="px-8 pt-8 pb-6"
                style={{ background: "linear-gradient(135deg, #0B1522 0%, #162640 100%)" }}
              >
                <p
                  className="font-heading leading-none mb-2"
                  style={{ fontSize: "3.5rem", color: "#C9A84C", opacity: 0.9 }}
                >
                  03
                </p>
                <h3 className="font-heading font-bold text-xl text-text-light leading-snug">
                  Questions &amp; Support
                </h3>
              </div>

              <div className="bg-white flex-1 flex flex-col px-8 py-7 text-sm text-subtext leading-relaxed">
                <p className="flex-1">
                  If you have any questions or need support, please reach out to
                  us anytime via Discord or Email. We are here to help you!
                </p>
                <div className="mt-8">
                  <Button
                    href="https://discord.gg/7d376hwSgU"
                    external
                    variant="outline"
                  >
                    Ask on Discord
                  </Button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ─── 4. Here is the Textbook ─────────────────────────────── */}
      <section
        className="py-24 md:py-32"
        style={{
          background: "linear-gradient(175deg, #0B1522 0%, #162640 60%, #1E3355 100%)",
        }}
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-stretch gap-10 md:gap-16 md:h-[420px]">

            {/* Text */}
            <div className="w-full md:w-1/2 flex flex-col justify-center">
              <span className="inline-block text-main text-xs font-semibold tracking-[0.2em] uppercase mb-4">
                DOWNLOAD FROM HERE
              </span>
              <h2 className="font-heading font-bold text-4xl md:text-5xl text-text-light leading-tight mb-4">
                Here is the Textbook
              </h2>
              <div
                className="mb-5"
                style={{ width: 40, height: 2, background: "#C9A84C" }}
                aria-hidden="true"
              />
              <p className="text-text-light/70 text-base md:text-lg leading-relaxed mb-8">
                The textbooks (slides) can be accessed via the link below. It
                has been compiled on Google Slides, so please feel free to use
                it for your study preparation and review. If you want to make
                notes or edits on the Slides, please make a copy of the slides
                (go to &ldquo;File&rdquo; → &ldquo;Make a copy&rdquo;) and use
                it freely. If you have any questions or need clarification, feel
                free to ask anytime in the Discord community!
              </p>
              <div>
                <Button
                  href="https://drive.google.com/drive/folders/1aSVSYPUnArzUteZSITekUfC2KNiu_gvY?usp=drive_link"
                  external
                >
                  Check Out
                </Button>
              </div>
            </div>

            {/* Image — Join Our Community と同一スタイル */}
            <div className="relative w-full md:w-1/2 min-h-[280px] rounded-xl overflow-hidden shadow-xl">
              <Image
                src="/images/socratia-logo.png"
                alt="Socratia Academy Textbook"
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div
                className="absolute inset-0"
                aria-hidden="true"
                style={{
                  background:
                    "linear-gradient(to top, rgba(11,21,34,0.80) 0%, rgba(11,21,34,0.25) 45%, transparent 100%)",
                }}
              />
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
