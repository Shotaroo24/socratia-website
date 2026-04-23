import type { Metadata } from "next";
import ApplyForm from "./ApplyForm";

export const metadata: Metadata = {
  title: 'Book a Free Trial',
  description: 'Book a free trial lesson at Socratia Academy. Limited spots available.',
  openGraph: {
    title: 'Book a Free Trial | Socratia Academy',
    description: 'Book a free trial lesson at Socratia Academy. Limited spots available.',
    url: 'https://socratiaacademy.com/apply',
  },
};

export default function ApplyPage() {
  return <ApplyForm />;
}
