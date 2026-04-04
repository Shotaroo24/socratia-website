import Image from "next/image";
import SectionHeader from "@/components/ui/SectionHeader";

const blocks = [
  {
    id: "textbook",
    number: "01",
    label: "Textbook Learning",
    image: "/images/textbook.jpg",
    imageAlt: "Textbook Learning",
    description:
      "Our slide-based textbooks provide a balanced mix of practical conversations, detailed grammar, and essential daily vocabulary—plus cultural columns on Japanese food, tourist spots, and real-life insights into everyday life in Japan.",
    imageLeft: true,
  },
  {
    id: "video",
    number: "02",
    label: "Video Learning",
    image: "/images/video.jpg",
    imageAlt: "Video Learning",
    description:
      "Over 94 engaging videos (17+ hours) walk you through every topic with clear explanations, pronunciation tips, and real-life examples—covering all content from the textbooks, step by step.",
    imageLeft: false,
  },
  {
    id: "live-lesson",
    number: "03",
    label: "Live Lessons",
    image: "/images/live-lesson.jpg",
    imageAlt: "Live Lessons",
    description:
      "Practice Japanese conversation and pronunciation with us twice a week. Use Japanese in real conversations to strengthen retention—turning passive knowledge into practical communication skills.",
    imageLeft: true,
  },
  {
    id: "support",
    number: "04",
    label: "Community Support",
    image: "/images/support.jpg",
    imageAlt: "Community Support",
    description:
      "Ask questions about Japanese learning anytime—we respond promptly. We track your progress carefully and provide personalized advice tailored to your pace, goals, and learning style.",
    imageLeft: false,
  },
] as const;

export default function Service() {
  return (
    <section
      id="service"
      className="relative py-24 md:py-32"
      style={{ background: 'linear-gradient(160deg, #FFFFFF 0%, #FDFCFA 60%, #FAF8F4 100%)' }}
    >
      {/* Noise texture overlay */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.4'/%3E%3C/svg%3E")`,
          backgroundSize: '200px 200px',
          opacity: 0.04,
          pointerEvents: 'none',
        }}
      />
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          label="Our Service — $399"
          title="Everything You Need to Learn Japanese"
          subtitle="We'll help you go from a complete beginner to being able to engage in simple daily conversations—through textbook learning, video learning, and live lessons, all backed by our support."
        />

        <div className="flex flex-col gap-14 md:gap-16">
          {blocks.map((block) => (
            <div
              key={block.id}
              className={`flex flex-col overflow-hidden rounded-xl shadow-sm ${
                block.imageLeft ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Image side */}
              <div className="relative w-full md:w-1/2 aspect-[4/3] md:aspect-auto min-h-[260px]">
                <Image
                  src={block.image}
                  alt={block.imageAlt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                {/* Navy gradient overlay */}
                <div
                  className="absolute inset-0"
                  aria-hidden="true"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(11,21,34,0.80) 0%, rgba(11,21,34,0.25) 45%, transparent 100%)",
                  }}
                />
              </div>

              {/* Text side */}
              <div
                className={`w-full md:w-1/2 bg-white flex flex-col justify-center px-6 py-10 md:px-12 md:py-14 ${
                  !block.imageLeft ? "md:text-right" : ""
                }`}
              >
                <p
                  className="font-heading text-3xl mb-3 leading-none"
                  style={{ color: '#C9A84C', fontWeight: 'normal' }}
                >
                  {block.number}
                </p>
                <div className={`w-8 h-px bg-main mb-4 ${!block.imageLeft ? "md:ml-auto" : ""}`} aria-hidden="true" />
                <span className="inline-block font-heading text-ink font-bold mb-5" style={{ fontSize: '1.625rem' }}>
                  {block.label}
                </span>
<p className="text-subtext leading-relaxed text-sm md:text-base mb-7">
                  {block.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
