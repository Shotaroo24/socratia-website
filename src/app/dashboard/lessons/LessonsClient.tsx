"use client";

import { useState, useEffect, useRef, memo } from "react";
import Link from "next/link";
import type { Lesson } from "@/data/lessons";

type Section = { id: string; title: string; lessons: Lesson[] };

// ─── Icons ────────────────────────────────────────────────────────────────────

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

// ─── Bunny Iframe (fullscreen + vendor-prefixed attrs) ────────────────────────

const BunnyIframe = memo(function BunnyIframe(
  props: React.IframeHTMLAttributes<HTMLIFrameElement>
) {
  const ref = useRef<HTMLIFrameElement>(null);
  useEffect(() => {
    if (!ref.current) return;
    ref.current.setAttribute("webkitallowfullscreen", "true");
    ref.current.setAttribute("mozallowfullscreen", "true");
  }, []);
  return <iframe ref={ref} {...props} allowFullScreen />;
});

// ─── Mobile Lesson List ───────────────────────────────────────────────────────

function MobileLessonList({
  sections,
  activeLesson,
  onSelect,
}: {
  sections: Section[];
  activeLesson: Lesson;
  onSelect: (lesson: Lesson) => void;
}) {
  const [openSection, setOpenSection] = useState<string>(() => {
    return (
      sections.find((s) => s.lessons.some((l) => l.id === activeLesson.id))
        ?.id ?? sections[0].id
    );
  });

  useEffect(() => {
    const sec = sections.find((s) =>
      s.lessons.some((l) => l.id === activeLesson.id)
    );
    if (sec) setOpenSection(sec.id);
  }, [activeLesson.id, sections]);

  return (
    <div>
      {sections.map((section) => {
        const isOpen = openSection === section.id;
        return (
          <div key={section.id} style={{ borderBottom: "0.5px solid #E8E2D6" }}>
            <button
              onClick={() =>
                setOpenSection((prev) =>
                  prev === section.id ? "" : section.id
                )
              }
              style={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "12px 16px",
                background: "#FFFFFF",
                border: "none",
                borderTop: "0.5px solid #E8E2D6",
                cursor: "pointer",
                textAlign: "left",
              }}
            >
              <span
                style={{
                  color: "#C9A84C",
                  fontSize: 13,
                  fontWeight: 500,
                  letterSpacing: "0.05em",
                  textTransform: "uppercase",
                }}
              >
                {section.title}
              </span>
              <ChevronDownIcon open={isOpen} />
            </button>
            {isOpen && (
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {section.lessons.map((lesson) => {
                  const isActive = lesson.id === activeLesson.id;
                  return (
                    <li key={lesson.id}>
                      <button
                        onClick={() => onSelect(lesson)}
                        style={{
                          width: "100%",
                          display: "flex",
                          alignItems: "flex-start",
                          gap: 8,
                          padding: "10px 16px",
                          background: isActive ? "#1E3355" : "transparent",
                          border: "none",
                          cursor: "pointer",
                          textAlign: "left",
                        }}
                      >
                        <span style={{ marginTop: 3, flexShrink: 0 }}>
                          <PlayIcon active={isActive} />
                        </span>
                        <span
                          style={{
                            flex: 1,
                            display: "flex",
                            flexDirection: "column",
                            minWidth: 0,
                          }}
                        >
                          <span
                            style={{
                              fontSize: 14,
                              color: isActive ? "#F2EDE4" : "#0B1522",
                              lineHeight: 1.4,
                            }}
                          >
                            {lesson.title}
                          </span>
                          <span
                            style={{
                              fontSize: 11,
                              color: "#8899AA",
                              textAlign: "right",
                              marginTop: 2,
                            }}
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
    </div>
  );
}

// ─── Sidebar (desktop) ────────────────────────────────────────────────────────

function Sidebar({
  sections,
  activeLesson,
  onSelect,
  onClose,
}: {
  sections: Section[];
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
      {/* Sticky header */}
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

      {/* Scrollable section list */}
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
                            <span
                              className="leading-snug"
                              style={{
                                fontSize: 14,
                                color: isActive ? "#F2EDE4" : "#0B1522",
                              }}
                            >
                              {lesson.title}
                            </span>
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

// ─── Client Component ─────────────────────────────────────────────────────────

export default function LessonsClient({
  sections,
  bunnyLibraryId,
}: {
  sections: Section[];
  bunnyLibraryId: string;
}) {
  const defaultLesson = sections[0].lessons[0];
  const [activeLesson, setActiveLesson] = useState<Lesson>(defaultLesson);
  // Open by default — on mobile the sidebar is hidden via CSS (md:block), so this
  // only affects the desktop layout. No resize listener needed.
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    // CSS-only responsive layout: no JS breakpoint detection, no resize listeners.
    // This prevents orientation-change events from triggering state updates that
    // would remount the iframe and exit the native fullscreen player on iOS.
    <div className="flex md:h-screen" style={{ background: "#FAF7F2" }}>

      {/* ── Sidebar (desktop only, toggleable) ─────────────────── */}
      {/* hidden on mobile via CSS; sidebarOpen controls desktop visibility */}
      <div className={sidebarOpen ? "hidden md:block flex-shrink-0" : "hidden"}>
        <Sidebar
          sections={sections}
          activeLesson={activeLesson}
          onSelect={setActiveLesson}
          onClose={() => setSidebarOpen(false)}
        />
      </div>

      {/* ── Main area ───────────────────────────────────────────── */}
      <div className="flex-1 flex flex-col min-w-0 md:overflow-hidden">

        {/* Mobile: sticky Back to Dashboard bar */}
        <div
          className="md:hidden"
          style={{
            position: "sticky",
            top: 0,
            zIndex: 10,
            padding: "10px 16px",
            background: "#FFFFFF",
            borderBottom: "0.5px solid #E8E2D6",
          }}
        >
          <Link
            href="/dashboard"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              color: "#5A6A7A",
              fontSize: 14,
              textDecoration: "none",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#0B1522")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#5A6A7A")}
          >
            <ArrowLeftIcon />
            Back to Dashboard
          </Link>
        </div>

        {/* Desktop: hamburger button when sidebar is closed.
            Wrapped in always-present md:block div to keep the video area
            at a stable position in the children array (avoids reconciliation
            issues that could remount the iframe). */}
        <div className="hidden md:block flex-shrink-0">
          {!sidebarOpen && (
            <div style={{ padding: "20px 24px 0" }}>
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
        </div>

        {/* ── Video player ──────────────────────────────────────── */}
        {/* Desktop: flex-1 with padding; Mobile: full-width, no padding */}
        <div className="md:flex-1 md:flex md:items-start md:overflow-hidden md:px-6 md:py-5">
          <div
            className="w-full md:rounded-xl md:overflow-hidden"
            style={{
              position: "relative",
              aspectRatio: "16 / 9",
              background: "#0B1522",
              boxShadow: "0 4px 24px rgba(11,21,34,0.2)",
            }}
          >
            {/* Single iframe instance — never conditionally rendered.
                key changes only when the lesson changes (not on resize/orientation). */}
            <BunnyIframe
              key={activeLesson.id}
              src={`https://iframe.mediadelivery.net/embed/${bunnyLibraryId}/${activeLesson.videoId}?autoplay=false&loop=false&muted=false&preload=true`}
              allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture"
              loading="lazy"
              title={activeLesson.title}
              style={{ border: "0", width: "100%", height: "100%", display: "block" }}
            />
          </div>
        </div>

        {/* Mobile only: current lesson info */}
        <div
          className="md:hidden"
          style={{
            padding: "12px 16px",
            background: "#FFFFFF",
            borderBottom: "0.5px solid #E8E2D6",
          }}
        >
          <p
            style={{
              fontSize: 15,
              fontWeight: 600,
              color: "#0B1522",
              margin: 0,
              lineHeight: 1.4,
            }}
          >
            {activeLesson.title}
          </p>
          <p style={{ fontSize: 12, color: "#8899AA", margin: "4px 0 0" }}>
            {activeLesson.duration}
          </p>
        </div>

        {/* Mobile only: lesson list */}
        <div className="md:hidden">
          <MobileLessonList
            sections={sections}
            activeLesson={activeLesson}
            onSelect={(lesson) => {
              setActiveLesson(lesson);
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          />
        </div>
      </div>
    </div>
  );
}
