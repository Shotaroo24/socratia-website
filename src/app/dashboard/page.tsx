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
          background:
            "linear-gradient(175deg, #0B1522 0%, #162640 60%, #1E3355 100%)",
        }}
      >
        {/* Subtle radial glow */}
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
            style={{
              fontSize: "clamp(2.2rem, 6vw, 3.75rem)",
              color: "#C9A84C",
            }}
          >
            to the Fullest!
          </h1>

          {/* Gold divider */}
          <div
            className="mx-auto mb-7"
            style={{ width: 40, height: 1, background: "#C9A84C", opacity: 0.6 }}
            aria-hidden="true"
          />

          <p className="text-text-light/70 text-lg leading-relaxed max-w-xl mx-auto mb-10">
            Before starting, please read through the course details on this
            page. We can&apos;t wait to start a wonderful Japanese journey with
            you!
          </p>

          <Button href="#">Start Learning</Button>
        </div>
      </section>

      {/* ─── 2. Join Our Community ───────────────────────────────── */}
      <section className="py-24 md:py-32" style={{ background: "#FFFFFF" }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
            {/* Text */}
            <div className="w-full md:w-1/2">
              <span className="inline-block text-main text-xs font-semibold tracking-[0.2em] uppercase mb-4">
                BEFORE YOU START
              </span>
              <h2 className="font-heading font-bold text-4xl md:text-5xl text-ink leading-tight mb-5">
                Join Our Community
              </h2>
              <div
                className="mb-6"
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
              <Button
                href="https://discord.gg/7d376hwSgU"
                external
              >
                Join Now
              </Button>
            </div>

            {/* Image */}
            <div className="w-full md:w-1/2 relative rounded-xl overflow-hidden shadow-xl aspect-[4/3]">
              <Image
                src="/images/discord.jpg"
                alt="Discord Community"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ─── 3. How to Proceed ───────────────────────────────────── */}
      <section className="py-24 md:py-32 bg-cream">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
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
            <div className="bg-white rounded-xl border border-border shadow-sm p-8 flex flex-col">
              <p
                className="font-heading text-3xl leading-none mb-3"
                style={{ color: "#C9A84C" }}
              >
                01
              </p>
              <div
                className="mb-5"
                style={{ width: 32, height: 1, background: "#C9A84C" }}
                aria-hidden="true"
              />
              <h3 className="font-heading font-bold text-xl text-ink mb-4 leading-snug">
                Recommended Study Flow &amp; Time Commitment
              </h3>
              <div className="text-subtext text-sm leading-relaxed space-y-3 flex-1">
                <p>
                  To get the best results, we recommend studying{" "}
                  <strong className="text-ink">5–7 hours per week:</strong>
                </p>
                <ul className="list-none space-y-1 pl-0">
                  <li className="flex items-start gap-2">
                    <span style={{ color: "#C9A84C" }}>—</span>
                    <span>Live conversation sessions: 2 sessions per week</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span style={{ color: "#C9A84C" }}>—</span>
                    <span>
                      Self-study (videos + textbooks): about 3–5 hours per week
                    </span>
                  </li>
                </ul>
                <div
                  className="my-4"
                  style={{ height: 1, background: "#E8E2D6" }}
                  aria-hidden="true"
                />
                <p>
                  <strong className="text-ink">Week 1:</strong> Lesson 1
                  (Hiragana &amp; Katakana)
                </p>
                <p>
                  <strong className="text-ink">Week 2 onwards:</strong> Complete
                  4 Standard Lessons per week (Videos + Textbooks)
                </p>
                <div
                  className="my-4"
                  style={{ height: 1, background: "#E8E2D6" }}
                  aria-hidden="true"
                />
                <p className="text-xs text-subtext/80 italic">
                  Optional: Use the Advanced Grammar, Words Summary, and
                  Particle Summary sections to reinforce your understanding.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-xl border border-border shadow-sm p-8 flex flex-col">
              <p
                className="font-heading text-3xl leading-none mb-3"
                style={{ color: "#C9A84C" }}
              >
                02
              </p>
              <div
                className="mb-5"
                style={{ width: 32, height: 1, background: "#C9A84C" }}
                aria-hidden="true"
              />
              <h3 className="font-heading font-bold text-xl text-ink mb-4 leading-snug">
                Conversation Lessons
              </h3>
              <div className="text-subtext text-sm leading-relaxed space-y-4 flex-1">
                <div className="flex items-start gap-2">
                  <span
                    className="mt-1 flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold"
                    style={{ background: "rgba(201,168,76,0.12)", color: "#C9A84C" }}
                  >
                    ✓
                  </span>
                  <p>
                    You can book and reschedule your 1-on-1 conversation
                    sessions freely during your course period.
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <span
                    className="mt-1 flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold"
                    style={{ background: "rgba(201,168,76,0.12)", color: "#C9A84C" }}
                  >
                    ✓
                  </span>
                  <p>
                    Please make sure all sessions are completed within your
                    1-month plan period.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-xl border border-border shadow-sm p-8 flex flex-col">
              <p
                className="font-heading text-3xl leading-none mb-3"
                style={{ color: "#C9A84C" }}
              >
                03
              </p>
              <div
                className="mb-5"
                style={{ width: 32, height: 1, background: "#C9A84C" }}
                aria-hidden="true"
              />
              <h3 className="font-heading font-bold text-xl text-ink mb-4 leading-snug">
                Questions &amp; Support
              </h3>
              <p className="text-subtext text-sm leading-relaxed flex-1">
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
      </section>

      {/* ─── 4. Here is the Textbook ─────────────────────────────── */}
      <section
        className="py-24 md:py-32"
        style={{
          background:
            "linear-gradient(175deg, #0B1522 0%, #162640 60%, #1E3355 100%)",
        }}
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row-reverse items-center gap-12 md:gap-16">
            {/* Text */}
            <div className="w-full md:w-1/2">
              <span className="inline-block text-main text-xs font-semibold tracking-[0.2em] uppercase mb-4">
                DOWNLOAD FROM HERE
              </span>
              <h2 className="font-heading font-bold text-4xl md:text-5xl text-text-light leading-tight mb-5">
                Here is the Textbook
              </h2>
              <div
                className="mb-6"
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
              <Button
                href="https://drive.google.com/drive/folders/1aSVSYPUnArzUteZSITekUfC2KNiu_gvY?usp=drive_link"
                external
              >
                Check Out
              </Button>
            </div>

            {/* Image */}
            <div className="w-full md:w-1/2 relative rounded-xl overflow-hidden shadow-2xl aspect-[4/3]">
              <Image
                src="/images/textbook.jpg"
                alt="Course Textbook"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              {/* Subtle overlay */}
              <div
                className="absolute inset-0"
                aria-hidden="true"
                style={{
                  background:
                    "linear-gradient(to top, rgba(11,21,34,0.4) 0%, transparent 60%)",
                }}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
