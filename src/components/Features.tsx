import SectionHeader from "@/components/ui/SectionHeader";

const features = [
  {
    number: "01",
    title: "Textbook & Video",
    description:
      "First, you'll build a strong foundation by studying independently with our original textbooks and videos. This allows you to learn the fundamentals of Japanese from scratch, at your own pace.",
  },
  {
    number: "02",
    title: "Live Lesson",
    description:
      "Next, you'll join us for live lessons to put your knowledge into practice. Together, we will refine your conversation skills and pronunciation, applying the grammar, vocabulary, and expressions you've learned from textbooks and videos.",
  },
  {
    number: "03",
    title: "Support",
    description:
      "Throughout your journey, we will provide ongoing support tailored to you. And, you can ask us questions anytime you need help or clarification.",
  },
] as const;

export default function Features() {
  return (
    <section id="features" className="bg-cream py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          label="Features"
          title="Features of Our Course"
          subtitle="To help you learn Japanese in the fastest and most efficient way possible, we've combined all the essential elements of Japanese learning—textbooks, videos, live lessons, and support—into one all-in-one course."
        />

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature.number}
              className="group bg-white border border-border rounded-2xl p-8 text-center shadow-md hover:shadow-md hover:-translate-y-1"
              style={{
                borderTop: '2px solid #C9A84C',
                transition: 'all 0.25s ease',
              }}
            >
              {/* Number */}
              <p className="font-heading text-4xl text-main font-light tracking-widest mb-5 italic">
                {feature.number}
              </p>
              {/* Title */}
              <h3 className="font-heading text-xl text-ink font-bold uppercase tracking-wider mb-4">
                {feature.title}
              </h3>
              {/* Description */}
              <p className="text-subtext leading-relaxed text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
