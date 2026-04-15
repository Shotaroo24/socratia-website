"use client";

import Link from "next/link";
import { useUser, UserButton } from "@clerk/nextjs";

const userButtonAppearance = {
  elements: {
    avatarBox: "w-8 h-8",
    userButtonPopoverCard: "border border-[#E8E2D6] shadow-xl",
    userButtonPopoverActionButton: "hover:bg-[#FAF7F2] text-[#0B1522]",
    userButtonPopoverActionButtonText: "text-[#0B1522]",
    userButtonPopoverFooter: "hidden",
  },
};

// Desktop auth section rendered inside the horizontal nav bar.
export function NavAuthDesktop() {
  const { isSignedIn } = useUser();

  if (isSignedIn) {
    return (
      <div className="flex items-center gap-4">
        <Link
          href="/dashboard"
          className="text-sm font-medium transition-colors duration-200"
          style={{ color: "#8899AA" }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "#C9A84C")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "#8899AA")}
        >
          Dashboard
        </Link>
        <UserButton appearance={userButtonAppearance} />
      </div>
    );
  }

  return (
    <Link
      href="/login"
      className="text-sm font-medium transition-colors duration-200"
      style={{ color: "#8899AA" }}
      onMouseEnter={(e) => (e.currentTarget.style.color = "#C9A84C")}
      onMouseLeave={(e) => (e.currentTarget.style.color = "#8899AA")}
    >
      Log in
    </Link>
  );
}

// Mobile auth section rendered inside the slide-down menu.
export function NavAuthMobile({ onClose }: { onClose: () => void }) {
  const { isSignedIn } = useUser();

  if (isSignedIn) {
    return (
      <>
        <Link
          href="/dashboard"
          className="font-medium transition-colors py-1"
          style={{ color: "#8899AA" }}
          onClick={onClose}
        >
          Dashboard
        </Link>
        <div className="py-1">
          <UserButton appearance={userButtonAppearance} />
        </div>
      </>
    );
  }

  return (
    <Link
      href="/login"
      className="font-medium transition-colors py-1"
      style={{ color: "#8899AA" }}
      onClick={onClose}
    >
      Log in
    </Link>
  );
}
