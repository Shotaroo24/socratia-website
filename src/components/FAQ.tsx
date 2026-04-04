"use client";

import { useState } from "react";
import SectionHeader from "@/components/ui/SectionHeader";

const faqs = [
  {
    q: "How much time per week is required for this course?",
    a: (
      <>
        <p className="mb-3 text-subtext">It depends on your plan and goals!</p>
        <ul className="flex flex-col gap-2 text-subtext text-sm leading-relaxed">
          <li>
            <strong className="text-ink">Self-Study Plan:</strong> You have
            complete freedom. Study whenever and however much you like at your
            own pace.
          </li>
          <li>
            <strong className="text-ink">Group &amp; Premium Plans:</strong> We
            recommend setting aside about 6–10 hours per week. This includes 2
            hours of live conversation practice and roughly 4–5 hours of
            self-study (videos &amp; textbooks) to prepare and review.
          </li>
        </ul>
      </>
    ),
  },
  {
    q: "What if I can't attend a live lesson?",
    a: (
      <>
        <p className="mb-3 text-subtext">
          The policy differs slightly to ensure the best learning environment.
        </p>
        <ul className="flex flex-col gap-2 text-subtext text-sm leading-relaxed">
          <li>
            <strong className="text-ink">Group Plan:</strong> At the start of
            the course, we coordinate a fixed weekly schedule that works for all
            3 group members. To maintain the group&apos;s momentum, missed
            lessons cannot be rescheduled. However, you can always catch up on
            the content using the textbooks and videos, so you won&apos;t fall
            behind!
          </li>
          <li>
            <strong className="text-ink">Premium Individual Plan:</strong> You
            enjoy maximum flexibility! If your schedule changes, you can
            reschedule your lessons as many times as needed within your 1-month
            course period.
          </li>
        </ul>
      </>
    ),
  },
  {
    q: "Can beginners join the course?",
    a: (
      <p className="text-subtext leading-relaxed">
        <strong className="text-ink">Absolutely!</strong> This course is
        designed specifically for complete beginners and beginners in Japanese.
        Each lesson is carefully structured to help you build Japanese skills
        from the basics. Plus, you can ask questions at any time during your
        studies, so even complete beginners can feel confident and supported
        throughout the course. So, don&apos;t worry at all!
      </p>
    ),
  },
  {
    q: "What happens after the course period ends?",
    a: (
      <p className="text-subtext leading-relaxed">
        Even after completing the course, you will have{" "}
        <strong className="text-ink">
          unlimited, lifetime access to all textbooks and video materials
        </strong>
        . You can review them anytime, as many times as you like.
      </p>
    ),
  },
] as const;

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="bg-cream py-24 md:py-32">
      <div className="max-w-3xl mx-auto px-6">
        <SectionHeader label="FAQ" title="Frequently Asked Questions" />

        <div className="flex flex-col divide-y divide-border">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={i}>
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full text-left py-6 flex items-start justify-between gap-4 group"
                  aria-expanded={isOpen}
                >
                  <span
                    className="font-semibold text-ink group-hover:text-main transition-colors duration-200 leading-snug"
                    style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.2rem' }}
                  >
                    {faq.q}
                  </span>
                  <span
                    className={`flex-shrink-0 mt-0.5 text-main transition-transform duration-300 ${
                      isOpen ? "rotate-45" : "rotate-0"
                    }`}
                    aria-hidden="true"
                  >
                    <PlusIcon />
                  </span>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? "max-h-[600px] opacity-100 pb-6" : "max-h-0 opacity-0"
                  }`}
                >
                  {faq.a}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function PlusIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
    >
      <line x1="9" y1="3" x2="9" y2="15" />
      <line x1="3" y1="9" x2="15" y2="9" />
    </svg>
  );
}
