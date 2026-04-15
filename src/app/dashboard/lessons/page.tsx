import { sections, BUNNY_LIBRARY_ID } from "@/data/lessons";
import LessonsClient from "./LessonsClient";

export default function LessonsPage() {
  return <LessonsClient sections={sections} bunnyLibraryId={BUNNY_LIBRARY_ID} />;
}
