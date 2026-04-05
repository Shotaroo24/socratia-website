import type { Metadata } from "next";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Service from "@/components/Service";
import FreeTrial from "@/components/FreeTrial";
import FAQ from "@/components/FAQ";

export const metadata: Metadata = {
  title: 'Socratia Academy — Japanese for the Arab World',
  description: 'The premier Japanese speaking program for Arabic speakers. Structured curriculum, live sessions, and expert support — built for Gulf learners.',
  openGraph: {
    title: 'Socratia Academy — Japanese for the Arab World',
    description: 'The premier Japanese speaking program for Arabic speakers.',
    url: 'https://socratiaacademy.com',
  },
};

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Service />
      <FreeTrial />
      <FAQ />
    </>
  );
}
