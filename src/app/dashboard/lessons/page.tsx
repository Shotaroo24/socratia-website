"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { sections, type Lesson } from "@/data/lessons";

// ─── Icons ───────────────────────────────────────────────────────────────────

function ChevronDownIcon({ open }: { open: boolean }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-4 h-4 flex-shrink-0 transition-transform duration-200"
      style={{
        transform: open ? "rotate(180deg)" : "rotate(0deg)",
        color: "#5A6A7A",
      }}
    >
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}

function PlayIcon({ active }: { active: boolean }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-3 h-3 flex-shrink-0"
      style={{ color: active ? "#C9A84C" : "#5A6A7A" }}
    >
      <path d="M8 5.14v14l11-7-11-7z" />
    </svg>
  );
}

function MenuIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-5 h-5"
    >
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  );
}

function ArrowLeftIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-3.5 h-3.5 flex-shrink-0"
    >
      <path d="M19 12H5M12 5l-7 7 7 7" />
    </svg>
  );
}

// ─── Sidebar ─────────────────────────────────────────────────────────────────

function Sidebar({
  activeLesson,
  onSelect,
  onClose,
}: {
  activeLesson: Lesson;
  onSelect: (lesson: Lesson) => void;
  onClose: () => void;
}) {
  const [openSection, setOpenSection] = useState<string>(sections[0].id);

  const toggleSection = (id: string) => {
    setOpenSection((prev) => (prev === id ? "" : id));
  };

  return (
    <div
      className="flex flex-col"
      style={{
        width: 280,
        height: "100%",
        background: "#FAF7F2",
        borderRight: "0.5px solid #E8E2D6",
      }}
    >
      {/* ─── Sticky header ─────────────────────────────────────── */}
      <div
        className="flex-shrink-0 flex items-center justify-between px-4 py-3"
        style={{ borderBottom: "0.5px solid #E8E2D6" }}
      >
        <Link
          href="/dashboard"
          className="inline-flex items-center gap-1.5 transition-colors"
          style={{ color: "#5A6A7A" }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "#0B1522")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "#5A6A7A")}
        >
          <ArrowLeftIcon />
          {/* font-size 14px as specified */}
          <span style={{ fontSize: 14 }}>Back to Dashboard</span>
        </Link>
        <button
          onClick={onClose}
          className="flex items-center justify-center rounded transition-opacity hover:opacity-60"
          style={{ color: "#5A6A7A", padding: "2px" }}
          aria-label="Close sidebar"
        >
          <MenuIcon />
        </button>
      </div>

      {/* ─── Scrollable section list ───────────────────────────── */}
      <nav className="flex-1 overflow-y-auto py-2">
        {sections.map((section) => {
          const isOpen = openSection === section.id;
          return (
            <div key={section.id} className="px-2 mb-1">
              <button
                onClick={() => toggleSection(section.id)}
                className="w-full flex items-center justify-between gap-2 px-3 py-2.5 text-left transition-colors hover:opacity-80"
                style={{
                  background: "#FFFFFF",
                  border: "0.5px solid #E8E2D6",
                  borderRadius: 8,
                }}
              >
                {/* section label: 13px */}
                <span
                  className="uppercase"
                  style={{
                    color: "#C9A84C",
                    fontSize: 13,
                    fontWeight: 500,
                    letterSpacing: "0.05em",
                  }}
                >
                  {section.title}
                </span>
                <ChevronDownIcon open={isOpen} />
              </button>

              {isOpen && (
                <ul className="mt-1 flex flex-col" style={{ gap: 2 }}>
                  {section.lessons.map((lesson) => {
                    const isActive = lesson.id === activeLesson.id;
                    return (
                      <li key={lesson.id}>
                        <button
                          onClick={() => onSelect(lesson)}
                          className="w-full flex items-start gap-2 px-3 text-left transition-colors"
                          style={{
                            background: isActive ? "#1E3355" : "transparent",
                            borderRadius: 6,
                            paddingTop: 8,
                            paddingBottom: 8,
                          }}
                        >
                          <span className="mt-0.5">
                            <PlayIcon active={isActive} />
                          </span>
                          <span className="flex-1 flex flex-col min-w-0">
                            {/* lesson title: 14px */}
                            <span
                              className="leading-snug"
                              style={{
                                fontSize: 14,
                                color: isActive ? "#F2EDE4" : "#0B1522",
                              }}
                            >
                              {lesson.title}
                            </span>
                            {/* duration: 11px */}
                            <span
                              className="text-right tabular-nums"
                              style={{ fontSize: 11, color: "#8899AA" }}
                            >
                              {lesson.duration}
                            </span>
                          </span>
                        </button>
                      </li>
                    );
                  })}
                </ul>
              )}
            </div>
          );
        })}
      </nav>
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

const DESKTOP_BREAKPOINT = 1024;

export default function LessonsPage() {
  const { user, isLoaded } = useUser();
  const router = useRouter();
  const paid = isLoaded && user?.publicMetadata?.paid === true;

  const defaultLesson = sections[0].lessons[0];
  const [activeLesson, setActiveLesson] = useState<Lesson>(defaultLesson);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const check = () => {
      const desktop = window.innerWidth >= DESKTOP_BREAKPOINT;
      setIsDesktop(desktop);
      if (desktop) setSidebarOpen(true);
    };
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const handleSelectLesson = useCallback(
    (lesson: Lesson) => {
      setActiveLesson(lesson);
      if (!isDesktop) setSidebarOpen(false);
    },
    [isDesktop]
  );

  if (isLoaded && !paid) {
    router.replace("/dashboard");
    return null;
  }

  return (
    <div
      className="flex overflow-hidden"
      style={{ height: "100vh", background: "#FAF7F2" }}
    >
      {/* ── Backdrop (mobile/tablet) ─────────────────────────────── */}
      {!isDesktop && sidebarOpen && (
        <div
          onClick={() => setSidebarOpen(false)}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.5)",
            zIndex: 40,
          }}
        />
      )}

      {/* ── Overlay sidebar (mobile/tablet) ─────────────────────── */}
      {!isDesktop && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            height: "100vh",
            zIndex: 45,
            transform: sidebarOpen ? "translateX(0)" : "translateX(-100%)",
            transition: "transform 0.25s ease",
          }}
        >
          <Sidebar
            activeLesson={activeLesson}
            onSelect={handleSelectLesson}
            onClose={() => setSidebarOpen(false)}
          />
        </div>
      )}

      {/* ── Inline sidebar (desktop) ─────────────────────────────── */}
      {isDesktop && sidebarOpen && (
        <Sidebar
          activeLesson={activeLesson}
          onSelect={setActiveLesson}
          onClose={() => setSidebarOpen(false)}
        />
      )}

      {/* ── Main area ────────────────────────────────────────────── */}
      <div
        className="flex-1 overflow-hidden"
        style={{ minWidth: 0, position: "relative", height: "100%" }}
      >
        {isDesktop ? (
          /* ── Desktop: padding + video fills height ── */
          <div className="flex flex-col" style={{ height: "100%" }}>
            {!sidebarOpen && (
              <div className="flex-shrink-0" style={{ padding: "20px 24px 0" }}>
                <button
                  onClick={() => setSidebarOpen(true)}
                  className="flex items-center justify-center rounded transition-opacity hover:opacity-60"
                  style={{ color: "#5A6A7A", padding: "2px" }}
                  aria-label="Open sidebar"
                >
                  <MenuIcon />
                </button>
              </div>
            )}
            <div
              className="flex-1 flex items-start overflow-hidden"
              style={{ padding: "20px 24px" }}
            >
              <div
                className="w-full overflow-hidden"
                style={{
                  aspectRatio: "16 / 9",
                  borderRadius: 12,
                  background: "#0B1522",
                  boxShadow: "0 4px 24px rgba(11,21,34,0.2)",
                }}
              >
                <iframe
                  key={activeLesson.id}
                  src={`https://player.vimeo.com/video/${activeLesson.vimeoId}?badge=0&autopause=0&player_id=0`}
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                  title={activeLesson.title}
                  style={{ display: "block" }}
                />
              </div>
            </div>
          </div>
        ) : (
          /* ── Mobile/tablet: video centered, hamburger top-left ── */
          <div
            className="flex items-center justify-center"
            style={{ height: "100%" }}
          >
            {/* Hamburger — absolute top-left */}
            <button
              onClick={() => setSidebarOpen(true)}
              className="flex items-center justify-center rounded transition-opacity hover:opacity-60"
              style={{
                position: "absolute",
                top: 16,
                left: 16,
                zIndex: 10,
                color: "#5A6A7A",
                padding: "4px",
              }}
              aria-label="Open sidebar"
            >
              <MenuIcon />
            </button>

            {/* Video — full width, aspect-ratio 16:9 */}
            <div
              className="w-full overflow-hidden"
              style={{
                aspectRatio: "16 / 9",
                background: "#0B1522",
              }}
            >
              <iframe
                key={activeLesson.id}
                src={`https://player.vimeo.com/video/${activeLesson.vimeoId}?badge=0&autopause=0&player_id=0`}
                width="100%"
                height="100%"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                title={activeLesson.title}
                style={{ display: "block" }}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
