import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book a Free Trial Lesson | Socratia Academy",
  description:
    "Apply for a free 1-hour Japanese trial lesson with Socratia Academy. Limited spots available.",
};

export default function ApplyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
