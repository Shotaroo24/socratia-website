import type { Metadata } from "next";
import { sections, BUNNY_LIBRARY_ID } from "@/data/lessons";
import LessonsClient from "./LessonsClient";

export const metadata: Metadata = {
  title: "Video Lessons",
  description: "Watch video lessons for your Japanese course",
  robots: { index: false, follow: false },
};

export default function LessonsPage() {
  return (
    <main>
      <LessonsClient sections={sections} bunnyLibraryId={BUNNY_LIBRARY_ID} />
    </main>
  );
}
