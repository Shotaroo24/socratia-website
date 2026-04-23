"use client";

import Link from "next/link";
import { useUser } from "@clerk/nextjs";

function PlayIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
      <path d="M8 5.14v14l11-7-11-7z" />
    </svg>
  );
}

function BookIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
      <path d="M4 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6zm4 0v12h8a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H8zm2 3h4v1.5h-4V9zm0 3h4v1.5h-4V12z" />
    </svg>
  );
}

function ChatIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
      <path d="M2 5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H7l-4 4V5z" />
    </svg>
  );
}

function DocumentIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
      <path d="M6 2a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6H6zm7 1.5L18.5 9H14a1 1 0 0 1-1-1V3.5zM8 13h8v1.5H8V13zm0-3h8v1.5H8V10z" />
    </svg>
  );
}

const cards = [
  {
    icon: <PlayIcon />,
    title: "Start learning",
    description: "Access the video lessons and begin your Japanese learning journey.",
    buttonLabel: "Watch video",
    href: "/dashboard/lessons",
    external: false,
  },
  {
    icon: <BookIcon />,
    title: "Textbook",
    description: "Download the course slides on Google Slides for study and review.",
    buttonLabel: "Open textbook",
    href: "https://drive.google.com/drive/folders/1aSVSYPUnArzUteZSITekUfC2KNiu_gvY?usp=drive_link",
    external: true,
  },
  {
    icon: <ChatIcon />,
    title: "Discord community",
    description: "Join our private Discord to ask questions.",
    buttonLabel: "Join Discord",
    href: "https://discord.gg/7d376hwSgU",
    external: true,
  },
  {
    icon: <DocumentIcon />,
    title: "Course guide",
    description: "Step-by-step instructions on how to progress through the course effectively.",
    buttonLabel: "Open course guide",
    href: "/dashboard/guide",
    external: false,
  },
];

export default function DashboardClient() {
  const { user, isLoaded } = useUser();
  const firstName = isLoaded && user?.firstName ? user.firstName : null;

  return (
    <div className="bg-cream min-h-screen">
      <div className="max-w-5xl mx-auto px-6 pt-4 pb-20 md:pt-6 md:pb-6">

        {/* ─── Welcome Banner ─────────────────────────────────────── */}
        <div
          className="rounded-2xl px-8 py-6 mb-4"
          style={{ background: "#0B1522" }}
        >
          <p
            className="font-medium uppercase mb-2"
            style={{
              color: "#C9A84C",
              fontSize: "12px",
              letterSpacing: "0.18em",
            }}
          >
            {isLoaded && firstName
              ? `WELCOME BACK, ${firstName.toUpperCase()}!`
              : "WELCOME BACK!"}
          </p>
          <h1
            className="font-heading leading-snug text-2xl md:text-3xl"
            style={{ color: "#F2EDE4" }}
          >
            Let&apos;s Enjoy Japanese <span style={{ color: "#C9A84C" }}>to the Fullest!</span>
          </h1>
        </div>

        {/* ─── Content: loading skeleton / 4-Card Grid ────────────── */}
        {!isLoaded ? (
          /* Loading skeleton */
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-4">
            {[...Array(4)].map((_, i) => (
              <div
                key={i}
                className="rounded-xl animate-pulse"
                style={{
                  background: "#FFFFFF",
                  border: "0.5px solid rgba(27,42,74,0.12)",
                  padding: "16px 20px",
                  height: 160,
                  boxShadow: "0 2px 8px rgba(11,21,34,0.07)",
                }}
              />
            ))}
          </div>
        ) : (
          /* 4-Card Grid */
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-4">
            {cards.map((card) => (
              <div
                key={card.title}
                className="rounded-xl flex flex-col gap-3 transition-all duration-200 ease-in-out hover:-translate-y-0.5"
                style={{
                  background: "#FFFFFF",
                  border: "0.5px solid rgba(27,42,74,0.12)",
                  padding: "16px 20px",
                  boxShadow: "0 2px 8px rgba(11,21,34,0.07)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.boxShadow =
                    "0 8px 24px rgba(11,21,34,0.13)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.boxShadow =
                    "0 2px 8px rgba(11,21,34,0.07)";
                }}
              >
                {/* Icon box */}
                <div
                  className="flex items-center justify-center rounded-lg flex-shrink-0"
                  style={{
                    width: 40,
                    height: 40,
                    background: "#0B1522",
                    color: "#C9A84C",
                  }}
                >
                  {card.icon}
                </div>

                {/* Text */}
                <div className="flex-1">
                  <h2
                    className="font-heading font-semibold text-lg md:text-xl mb-1"
                    style={{ color: "#0B1522" }}
                  >
                    {card.title}
                  </h2>
                  <p className="text-sm md:text-base leading-relaxed" style={{ color: "#5A6A7A" }}>
                    {card.description}
                  </p>
                </div>

                {/* Button */}
                {card.external ? (
                  <a
                    href={card.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-opacity hover:opacity-80 self-start"
                    style={{ background: "#C9A84C", color: "#0B1522", padding: "8px 18px" }}
                  >
                    {card.buttonLabel}
                  </a>
                ) : (
                  <Link
                    href={card.href}
                    className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-opacity hover:opacity-80 self-start"
                    style={{ background: "#C9A84C", color: "#0B1522", padding: "8px 18px" }}
                  >
                    {card.buttonLabel}
                  </Link>
                )}
              </div>
            ))}
          </div>
        )}

      </div>
    </div>
  );
}
