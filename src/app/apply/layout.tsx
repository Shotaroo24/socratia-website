import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Apply for a Free Trial',
  description: 'Apply for a free trial lesson at Socratia Academy. Limited spots available.',
  openGraph: {
    title: 'Apply for a Free Trial | Socratia Academy',
    description: 'Apply for a free trial lesson at Socratia Academy. Limited spots available.',
    url: 'https://socratiaacademy.com/apply',
  },
};

export default function ApplyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
