"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Link from "next/link";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { sections, BUNNY_LIBRARY_ID, type Lesson } from "@/data/lessons";

// ─── Helpers ──────────────────────────────────────────────────────────────────

function getNextLesson(current: Lesson): Lesson | null {
  let found = false;
  for (const section of sections) {
    for (const lesson of section.lessons) {
      if (found) return lesson;
      if (lesson.id === current.id) found = true;
    }
  }
  return null;
}

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

// ─── Next Lesson Overlay ──────────────────────────────────────────────────────

function NextLessonOverlay({
  nextLesson,
  countdown,
  onPlayNow,
  onCancel,
}: {
  nextLesson: Lesson | null;
  countdown: number;
  onPlayNow: () => void;
  onCancel: () => void;
}) {
  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        background: "rgba(30, 51, 85, 0.92)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 20,
        padding: 24,
        borderRadius: "inherit",
      }}
    >
      {nextLesson === null ? (
        <div style={{ textAlign: "center" }}>
          <div
            style={{
              fontSize: 34,
              fontWeight: 700,
              color: "#C9A84C",
              marginBottom: 12,
              fontFamily: "var(--font-cormorant)",
              letterSpacing: "0.04em",
            }}
          >
            Course Complete!
          </div>
          <p style={{ color: "#F2EDE4", fontSize: 15, marginBottom: 28, margin: "0 0 28px" }}>
            You have finished all lessons. Well done!
          </p>
          <button
            onClick={onCancel}
            style={{
              background: "transparent",
              color: "#FFFFFF",
              border: "1px solid rgba(255,255,255,0.55)",
              padding: "10px 28px",
              borderRadius: 8,
              fontSize: 14,
              cursor: "pointer",
            }}
          >
            Close
          </button>
        </div>
      ) : (
        <div style={{ textAlign: "center", maxWidth: 360 }}>
          <p
            style={{
              color: "#8899AA",
              fontSize: 11,
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              marginBottom: 10,
              margin: "0 0 10px",
            }}
          >
            Up Next
          </p>
          <p
            style={{
              color: "#F2EDE4",
              fontSize: 16,
              fontWeight: 600,
              marginBottom: 20,
              lineHeight: 1.4,
              margin: "0 0 20px",
            }}
          >
            {nextLesson.title}
          </p>
          <div
            style={{
              color: "#C9A84C",
              fontSize: 60,
              fontWeight: 700,
              lineHeight: 1,
              marginBottom: 8,
            }}
          >
            {countdown}
          </div>
          <p
            style={{
              color: "#8899AA",
              fontSize: 13,
              marginBottom: 28,
              margin: "0 0 28px",
            }}
          >
            Playing in {countdown}...
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center" }}>
            <button
              onClick={onPlayNow}
              style={{
                background: "#C9A84C",
                color: "#0B1522",
                border: "none",
                padding: "10px 28px",
                borderRadius: 8,
                fontWeight: 600,
                fontSize: 14,
                cursor: "pointer",
              }}
            >
              Play Now
            </button>
            <button
              onClick={onCancel}
              style={{
                background: "transparent",
                color: "#FFFFFF",
                border: "1px solid rgba(255,255,255,0.5)",
                padding: "10px 24px",
                borderRadius: 8,
                fontSize: 14,
                cursor: "pointer",
              }}
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

// ─── Mobile Lesson List ───────────────────────────────────────────────────────

function MobileLessonList({
  activeLesson,
  onSelect,
}: {
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
  }, [activeLesson.id]);

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

      {/* ─── Scrollable section list ────────────────────────────── */}
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

// ─── Page ─────────────────────────────────────────────────────────────────────

const DESKTOP_BREAKPOINT = 768;

export default function LessonsPage() {
  const { user, isLoaded } = useUser();
  const router = useRouter();
  const paid = isLoaded && user?.publicMetadata?.paid === true;

  const defaultLesson = sections[0].lessons[0];
  const [activeLesson, setActiveLesson] = useState<Lesson>(defaultLesson);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  // ── Overlay state ──────────────────────────────────────────
  const [overlayVisible, setOverlayVisible] = useState(false);
  const [overlayNextLesson, setOverlayNextLesson] = useState<Lesson | null>(null);
  const [countdown, setCountdown] = useState(5);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const clearTimer = useCallback(() => {
    if (timerRef.current !== null) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  }, []);

  // ── Resize handler ─────────────────────────────────────────
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

  // ── Bunny postMessage listener ─────────────────────────────
  useEffect(() => {
    const handler = (e: MessageEvent) => {
      if (e.origin !== "https://iframe.mediadelivery.net") return;
      if (e.data?.event === "ended") {
        const next = getNextLesson(activeLesson);
        setOverlayNextLesson(next);
        setCountdown(5);
        setOverlayVisible(true);
      }
    };
    window.addEventListener("message", handler);
    return () => window.removeEventListener("message", handler);
  }, [activeLesson]);

  // ── Countdown timer ────────────────────────────────────────
  useEffect(() => {
    if (!overlayVisible || overlayNextLesson === null) return;
    clearTimer();

    let remaining = 5;
    setCountdown(5);

    timerRef.current = setInterval(() => {
      remaining -= 1;
      if (remaining <= 0) {
        clearTimer();
        setActiveLesson(overlayNextLesson);
        setOverlayVisible(false);
      } else {
        setCountdown(remaining);
      }
    }, 1000);

    return clearTimer;
  }, [overlayVisible, overlayNextLesson, clearTimer]);

  // ── Clear overlay on manual lesson change ──────────────────
  useEffect(() => {
    setOverlayVisible(false);
    clearTimer();
    setCountdown(5);
  }, [activeLesson.id, clearTimer]);

  // ── Handlers ───────────────────────────────────────────────
  const handlePlayNow = useCallback(() => {
    if (overlayNextLesson) {
      clearTimer();
      setOverlayVisible(false);
      setActiveLesson(overlayNextLesson);
    }
  }, [overlayNextLesson, clearTimer]);

  const handleCancelOverlay = useCallback(() => {
    clearTimer();
    setOverlayVisible(false);
  }, [clearTimer]);

  const handleSelectLesson = useCallback((lesson: Lesson) => {
    setActiveLesson(lesson);
  }, []);

  const handleMobileSelectLesson = useCallback((lesson: Lesson) => {
    setActiveLesson(lesson);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  if (isLoaded && !paid) {
    router.replace("/dashboard");
    return null;
  }

  // ── Mobile layout (< 768px) ────────────────────────────────
  if (!isDesktop) {
    return (
      <div style={{ minHeight: "100vh", background: "#FAF7F2" }}>
        {/* Top bar */}
        <div
          style={{
            padding: "10px 16px",
            background: "#FFFFFF",
            borderBottom: "0.5px solid #E8E2D6",
            position: "sticky",
            top: 0,
            zIndex: 10,
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

        {/* Video player */}
        <div
          style={{
            position: "relative",
            width: "100%",
            aspectRatio: "16 / 9",
            background: "#0B1522",
          }}
        >
          <iframe
            key={activeLesson.id}
            src={`https://iframe.mediadelivery.net/embed/${BUNNY_LIBRARY_ID}/${activeLesson.videoId}?autoplay=false&loop=false&muted=false&preload=true`}
            allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture"
            allowFullScreen={true}
            loading="lazy"
            title={activeLesson.title}
            style={{ border: "0", width: "100%", height: "100%", display: "block" }}
          />
          {overlayVisible && (
            <NextLessonOverlay
              nextLesson={overlayNextLesson}
              countdown={countdown}
              onPlayNow={handlePlayNow}
              onCancel={handleCancelOverlay}
            />
          )}
        </div>

        {/* Current lesson info */}
        <div
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

        {/* Lesson list */}
        <MobileLessonList
          activeLesson={activeLesson}
          onSelect={handleMobileSelectLesson}
        />
      </div>
    );
  }

  // ── Desktop layout (>= 768px) ──────────────────────────────
  return (
    <div
      className="flex overflow-hidden"
      style={{ height: "100vh", background: "#FAF7F2" }}
    >
      {/* Inline sidebar */}
      {sidebarOpen && (
        <Sidebar
          activeLesson={activeLesson}
          onSelect={handleSelectLesson}
          onClose={() => setSidebarOpen(false)}
        />
      )}

      {/* Main area */}
      <div
        className="flex-1 overflow-hidden"
        style={{ minWidth: 0, position: "relative", height: "100%" }}
      >
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
                position: "relative",
                aspectRatio: "16 / 9",
                borderRadius: 12,
                background: "#0B1522",
                boxShadow: "0 4px 24px rgba(11,21,34,0.2)",
              }}
            >
              <iframe
                key={activeLesson.id}
                src={`https://iframe.mediadelivery.net/embed/${BUNNY_LIBRARY_ID}/${activeLesson.videoId}?autoplay=false&loop=false&muted=false&preload=true`}
                allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture"
                allowFullScreen={true}
                loading="lazy"
                title={activeLesson.title}
                style={{ border: "0", width: "100%", aspectRatio: "16/9" }}
              />
              {overlayVisible && (
                <NextLessonOverlay
                  nextLesson={overlayNextLesson}
                  countdown={countdown}
                  onPlayNow={handlePlayNow}
                  onCancel={handleCancelOverlay}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
