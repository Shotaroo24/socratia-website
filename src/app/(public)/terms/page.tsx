import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: 'Terms & Conditions',
  openGraph: { url: 'https://socratiaacademy.com/terms' },
};

export default function TermsPage() {
  return (
    <div className="bg-cream min-h-screen">
      <div className="max-w-3xl mx-auto px-6 pt-14 pb-16 md:pt-16 md:pb-20">
        <h1 className="font-heading text-3xl md:text-4xl text-ink font-bold mb-8 text-center">
          Terms &amp; Conditions
        </h1>
        <p className="text-subtext text-sm mb-12">
          This agreement applies as between you, the user of socratiaacademy.com (this
          &ldquo;Website&rdquo;) and Shotaro (referred to as &ldquo;we,&rdquo;
          &ldquo;us,&rdquo; or &ldquo;our&rdquo;), the owner of this Website. By
          accessing or using this Website, you are deemed to have read, understood, and
          agreed to these Terms &amp; Conditions (&ldquo;Terms&rdquo;).
        </p>

        <div className="flex flex-col gap-10">
          <Section title="1. Age Restrictions">
            <p>
              If you are under 18, a parent or guardian must provide or approve your
              payment information before purchasing our services.
            </p>
          </Section>

          <Section title="2. Intellectual Property">
            <ul className="list-disc pl-5 flex flex-col gap-2">
              <li>
                All materials on this Website, including text, images, video, audio,
                software, and other content (&ldquo;Content&rdquo;), are owned by us or
                our licensors, unless stated otherwise.
              </li>
              <li>
                You may not reproduce, copy, distribute, store, or reuse any materials
                from this Website without express written permission, except where
                permitted by law or for personal, non-commercial use.
              </li>
            </ul>
          </Section>

          <Section title="3. User Conduct and Communication">
            <ul className="list-disc pl-5 flex flex-col gap-2">
              <li>
                You agree not to post or transmit any unlawful, offensive, or otherwise
                inappropriate material through the Website or any related communication
                systems.
              </li>
              <li>
                We reserve the right to monitor and remove any user-submitted Content
                that violates these Terms or applicable laws.
              </li>
              <li>Unauthorized mass communication (spam) is strictly prohibited.</li>
            </ul>
          </Section>

          <Section title="4. Accounts">
            <ul className="list-disc pl-5 flex flex-col gap-2">
              <li>
                If you create an account, you must provide accurate information and keep
                your details up to date.
              </li>
              <li>
                Protect your username and password. If you suspect your account is
                compromised, contact us immediately.
              </li>
              <li>
                We are not responsible for any loss arising from unauthorized use of your
                account details.
              </li>
            </ul>
          </Section>

          <Section title="5. Termination of Accounts">
            <ul className="list-disc pl-5 flex flex-col gap-2">
              <li>You may terminate your account at any time by contacting us.</li>
              <li>
                We may also terminate or suspend your account if you violate these Terms
                or if necessary to protect our interests or those of other users.
              </li>
              <li>
                If an account is terminated, we may cancel any pending orders and
                discontinue services.
              </li>
            </ul>
          </Section>

          <Section title="6. Pricing and Payments">
            <div className="flex flex-col gap-5">
              <Subsection title="Pricing">
                <ul className="list-disc pl-5 flex flex-col gap-2">
                  <li>
                    All prices are listed in U.S. Dollars (USD) and are accurate at the
                    time of posting.
                  </li>
                  <li>
                    We reserve the right to change prices or end special offers without
                    notice.
                  </li>
                </ul>
              </Subsection>

              <Subsection title="Payment Methods">
                <ul className="list-disc pl-5 flex flex-col gap-2">
                  <li>Payment is made in a single installment upon checkout.</li>
                  <li>
                    Supported methods include Visa, Mastercard, American Express.
                  </li>
                  <li>
                    We do not store or have access to your card or payment information;
                    all transactions are processed through Stripe Payment Links and
                    handled securely by Stripe and your issuing bank or financial
                    institution.
                  </li>
                </ul>
              </Subsection>

              <Subsection title="Currency Conversion &amp; Foreign Transaction Fees">
                <p className="mb-3">
                  If you pay by credit or debit card in a currency other than USD, your
                  bank or payment provider may charge a currency conversion fee (often
                  included in the exchange rate) or foreign transaction fees, typically
                  totaling between 2% and 5%. Please check with your card issuer or
                  financial institution for more specific information.
                </p>
                <p className="text-sm italic text-subtext">
                  Note: All currency conversion fees, foreign transaction fees mentioned
                  above are determined by your payment provider (e.g., your bank, or
                  your card issuer) and are not part of the product price. We do not
                  receive or retain any portion of these fees, nor do we have control
                  over them. For more details on how such fees are calculated, please
                  consult your payment provider or financial institution.
                </p>
              </Subsection>

              <Subsection title="Taxes">
                <p>Currently, no tax is applied to our products.</p>
              </Subsection>
            </div>
          </Section>

          <Section title="7. Refund Policy">
            <p>
              We generally do not offer refunds after you have confirmed your purchase.
              Please review service details carefully before purchasing. If you have any
              questions about our service, feel free to contact us at{" "}
              <a
                href="mailto:info@socratiaacademy.com"
                className="underline underline-offset-2" style={{ color: 'var(--color-main-accessible)' }}
              >
                info@socratiaacademy.com
              </a>
              .
            </p>
            <p className="mt-3">
              Refunds are only provided if required by law. If mandated, we will comply
              with legal requirements regarding the timing and method of the refund.
            </p>
          </Section>

          <Section title="8. Privacy">
            <p>
              To understand how we collect, use, and protect your personal information,
              please review our{" "}
              <Link href="/privacy" className="underline underline-offset-2" style={{ color: 'var(--color-main-accessible)' }}>
                Privacy Policy
              </Link>
              . By using this Website, you confirm that you have read, understood, and
              agreed to the Terms outlined in the Privacy Policy.
            </p>
          </Section>

          <Section title="9. Commercial Disclosure">
            <p>
              For information required by Japanese law regarding our commercial
              operations, please refer to our{" "}
              <Link href="/commercial-disclosure" className="underline underline-offset-2" style={{ color: 'var(--color-main-accessible)' }}>
                Commercial Disclosure
              </Link>
              .
            </p>
          </Section>

          <Section title="10. Disclaimers">
            <ul className="list-disc pl-5 flex flex-col gap-2">
              <li>
                A contract is formed only after payment is successfully processed and we
                confirm your enrollment.
              </li>
              <li>
                The Website and all related Content and services are provided as-is.
                While we aim to offer a high-quality experience, we cannot guarantee
                that everything will meet your specific needs or be completely
                error-free.
              </li>
              <li>
                We cannot promise any specific learning outcomes; results may vary based
                on individual circumstances.
              </li>
              <li>
                The Content on this Website, including but not limited to course
                materials, videos, and communications is provided exclusively in
                English. If you are not confident in your English ability, we kindly
                advise against purchasing to ensure a smooth and enjoyable learning
                experience.
              </li>
              <li>
                Rescheduling is flexible within the
                1-month course period. Please note that unused lessons do not carry over
                and will expire at the end of the term. We strongly recommend completing
                all sessions within the month to maximize your learning.
              </li>
            </ul>
          </Section>

          <Section title="11. Changes to the Website or These Terms">
            <p>
              We reserve the right to modify the Website, its Content, or these Terms
              &amp; Conditions at any time. Continued use of the Website after changes
              indicates your acceptance. If changes are required by law, they will apply
              to any pending orders as well.
            </p>
          </Section>

          <Section title="12. Availability of the Website">
            <ul className="list-disc pl-5 flex flex-col gap-2">
              <li>
                We strive to keep the Website accessible but cannot guarantee
                uninterrupted operation.
              </li>
              <li>
                We accept no liability for disruptions or non-availability due to
                external factors such as ISP failures, power outages, server issues,
                maintenance, or force majeure events.
              </li>
            </ul>
          </Section>

          <Section title="13. Limitation of Liability">
            <ul className="list-disc pl-5 flex flex-col gap-2">
              <li>
                To the fullest extent permitted by law, we accept no liability for any
                direct or indirect loss or damage arising from your use of the Website
                or any Content.
              </li>
              <li>
                Nothing in these Terms excludes or limits liability that cannot be
                excluded by law.
              </li>
              <li>
                If a provision in these Terms is found to be unlawful or unenforceable,
                that provision is deemed severed and does not affect the enforceability
                of the remaining Terms.
              </li>
            </ul>
          </Section>

          <Section title="14. No Waiver">
            <p>
              If either party does not exercise a right or remedy, it does not waive
              that right or remedy.
            </p>
          </Section>

          <Section title="15. Previous Terms and Conditions">
            <p>
              In any conflict between these Terms &amp; Conditions and prior versions,
              these Terms &amp; Conditions prevail unless expressly stated otherwise.
            </p>
          </Section>

          <Section title="16. Law and Jurisdiction">
            <p className="mb-3">
              These Terms are governed by the laws of Japan, and disputes shall be
              subject to the exclusive jurisdiction of Japanese courts.
            </p>
            <p>
              However, if mandatory consumer protection laws in your country of
              residence conflict with these Terms, those laws shall apply to the extent
              required. In the event of any disputes, we will strive to find the best
              resolution through mutual agreement.
            </p>
          </Section>
        </div>

        {/* Back link */}
        <div className="mt-16 pt-8 border-t border-border flex gap-6 text-sm text-subtext">
          <Link href="/privacy" className="hover:text-main transition-colors">
            Privacy Policy
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

function Subsection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h3 className="font-heading text-lg font-semibold text-ink mb-2">{title}</h3>
      <div className="text-subtext leading-relaxed text-sm md:text-base">{children}</div>
    </div>
  );
}
