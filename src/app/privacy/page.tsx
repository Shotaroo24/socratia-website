import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | Socratia Academy",
  description:
    "Privacy Policy for Socratia Academy — how we collect, use, and protect your personal information.",
};

export default function PrivacyPage() {
  return (
    <div className="bg-cream min-h-screen">
      {/* Page Header */}
      <div
        className="py-20 text-center"
        style={{ background: "linear-gradient(160deg, #0B1522 0%, #1E3355 100%)" }}
      >
        <p className="text-main font-medium text-xs uppercase tracking-[0.28em] mb-4">
          Legal
        </p>
        <h1 className="font-heading text-4xl md:text-5xl text-text-light font-bold">
          Privacy Policy
        </h1>
        <div className="w-10 h-px bg-main mx-auto mt-6" aria-hidden="true" />
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-6 py-16 md:py-20">
        <p className="text-subtext text-sm mb-12">
          Shotaro (hereafter referred to as &ldquo;we,&rdquo; &ldquo;us,&rdquo; or
          &ldquo;our&rdquo;), the sole proprietor and operator of socratiaacademy.com
          (the &ldquo;Site&rdquo;), respects your privacy and hereby declares that we
          will comply with the Personal Information Protection Act (PIPA) and all other
          relevant laws and regulations, and handle personal information appropriately.
        </p>

        <div className="flex flex-col gap-10">
          <Section title="1. Definition of Personal Information">
            <p>
              In this Policy, &ldquo;personal information&rdquo; refers to any
              information relating to an identified or identifiable individual.
            </p>
          </Section>

          <Section title="2. Purpose of Collecting and Using Personal Information">
            <p className="mb-3">
              We collect and use personal information for the following purposes:
            </p>
            <ul className="list-disc pl-5 flex flex-col gap-2">
              <li>
                To provide, operate, and support the Site and related services
              </li>
              <li>
                To respond to inquiries, questions, or requests from users
              </li>
              <li>
                To analyze user activity for service improvement and marketing purposes
                (e.g., website analytics)
              </li>
              <li>
                To enhance and refine our services based on user feedback and Site usage
              </li>
            </ul>
          </Section>

          <Section title="3. Management of Personal Information">
            <ul className="list-disc pl-5 flex flex-col gap-2">
              <li>
                We take necessary and appropriate measures to prevent unauthorized
                access, loss, leakage, alteration, or damage of personal information,
                including maintaining security systems.
              </li>
              <li>
                We keep personal information accurate and up to date. When personal
                information is no longer required for the above purposes, it is securely
                disposed of or deleted.
              </li>
            </ul>
          </Section>

          <Section title="4. Disclosure of Personal Information to Third Parties">
            <p className="mb-3">
              We will not disclose or provide personal information to third parties
              without prior consent from the user, unless permitted by law or under the
              following circumstances:
            </p>
            <ul className="list-disc pl-5 flex flex-col gap-2">
              <li>
                When outsourcing certain operations, such as payment processing or email
                marketing services, to external service providers
              </li>
              <li>
                When required by law or a legally binding request from a court or other
                government authority
              </li>
              <li>
                In the event of business transfers, mergers, or acquisitions, where
                personal information may be transferred as part of the process, we will
                notify users in advance, where applicable.
              </li>
              <li>Other cases as permitted by relevant laws and regulations</li>
            </ul>
          </Section>

          <Section title="5. Use of Cookies">
            <ul className="list-disc pl-5 flex flex-col gap-2">
              <li>
                We use cookies to analyze how users interact with the Site and to
                provide an improved user experience.
              </li>
              <li>
                We may use third-party services to understand user behavior and conduct
                marketing analyses. You can disable cookies in your browser settings;
                however, some parts of the Site may not function properly if cookies are
                disabled.
              </li>
            </ul>
          </Section>

          <Section title="6. Access, Correction, and Deletion of Personal Information">
            <ul className="list-disc pl-5 flex flex-col gap-2">
              <li>
                You have the right to request access to, correction of, or deletion of
                your personal information. For such requests, please contact us at{" "}
                <a
                  href="mailto:info@socratiaacademy.com"
                  className="text-main hover:underline"
                >
                  info@socratiaacademy.com
                </a>
                .
              </li>
              <li>
                We will take appropriate steps to verify the identity of the requester
                and respond in accordance with applicable laws.
              </li>
            </ul>
          </Section>

          <Section title="7. Changes to the Privacy Policy">
            <ul className="list-disc pl-5 flex flex-col gap-2">
              <li>
                We review this Policy as necessary and may update it to reflect changes
                in our practices or applicable laws.
              </li>
              <li>
                Any changes will be posted on this Site, and continued use of the Site
                after such changes indicates acceptance of the updated Policy.
              </li>
            </ul>
          </Section>

          <Section title="8. Contact Information">
            <p>
              For questions, requests, or concerns regarding this Privacy Policy, please
              contact:
            </p>
            <p className="mt-3">
              Email:{" "}
              <a
                href="mailto:info@socratiaacademy.com"
                className="text-main hover:underline"
              >
                info@socratiaacademy.com
              </a>
            </p>
          </Section>
        </div>

        {/* Back link */}
        <div className="mt-16 pt-8 border-t border-border flex gap-6 text-sm text-subtext">
          <Link href="/terms" className="hover:text-main transition-colors">
            Terms &amp; Conditions
          </Link>
          <Link
            href="/commercial-disclosure"
            className="hover:text-main transition-colors"
          >
            Commercial Disclosure
          </Link>
        </div>
      </div>
    </div>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h2 className="font-heading text-2xl font-bold text-ink mb-4">{title}</h2>
      <div className="text-subtext leading-relaxed text-sm md:text-base">{children}</div>
    </div>
  );
}
