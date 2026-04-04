import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Commercial Disclosure | Socratia Academy",
  description:
    "Commercial Disclosure for Socratia Academy, provided in accordance with the Japanese Act on Specified Commercial Transactions.",
};

export default function CommercialDisclosurePage() {
  return (
    <div className="bg-cream min-h-screen">
      <div className="max-w-3xl mx-auto px-6 pt-14 pb-16 md:pt-16 md:pb-20">
        <h1 className="font-heading text-3xl md:text-4xl text-ink font-bold mb-8 text-center">
          Commercial Disclosure
        </h1>
        <p className="text-subtext text-sm mb-12">
          This commercial disclosure is provided in accordance with the Japanese Act on
          Specified Commercial Transactions and applies to services offered by a
          business operating from Japan.
        </p>

        <div className="flex flex-col divide-y divide-border">
          <Row label="1. Seller and Responsible Person">Shotaro Yamane</Row>
          <Row label="2. Address">Available upon request.</Row>
          <Row label="3. Phone Number">Available upon request.</Row>
          <Row label="4. Email Address">
            <a
              href="mailto:info@socratiaacademy.com"
              className="text-main hover:underline"
            >
              info@socratiaacademy.com
            </a>
          </Row>
          <Row label="5. Sales Price">
            The price is as stated on the sales page.{" "}
            <span className="italic">
              Note: Prices may vary depending on the sales period.
            </span>
          </Row>
          <Row label="6. Additional Costs Other than Product Price">
            <p className="mb-3">
              If you pay in a currency other than USD, your bank or payment provider may
              charge a currency conversion fee (often included in the exchange rate) and
              foreign transaction fees, which typically total between 2% and 5% and will
              add to the price. Please check with your card issuer or financial
              institution for more details. For more information, please refer to
              Section 7 of our{" "}
              <Link href="/terms" className="text-main hover:underline">
                Terms &amp; Conditions
              </Link>
              .
            </p>
            <p>No tax is applied to the product.</p>
          </Row>
          <Row label="7. Payment Methods">Credit card or Debit card</Row>
          <Row label="8. Payment Timing">
            If you wish to purchase without taking a trial lesson, please let us know by
            email or WhatsApp. You can proceed with the purchase directly without the
            trial. On the other hand, if you&apos;d like to decide after taking a trial
            lesson, we will send a payment link to prospective participants once the
            trial lesson has been completed.
          </Row>
          <Row label="9. Service Start Time">
            The service will be accessible immediately after payment is completed.
          </Row>
          <Row label="10. Refund Policy">
            For refund details, please refer to the{" "}
            <Link href="/terms" className="text-main hover:underline">
              Terms &amp; Conditions
            </Link>
            .
          </Row>
          <Row label="11. Other Terms of Use">
            Please refer to the{" "}
            <Link href="/privacy" className="text-main hover:underline">
              Privacy Policy
            </Link>{" "}
            and{" "}
            <Link href="/terms" className="text-main hover:underline">
              Terms &amp; Conditions
            </Link>
            .
          </Row>
        </div>

        {/* Back link */}
        <div className="mt-16 pt-8 border-t border-border flex gap-6 text-sm text-subtext">
          <Link href="/terms" className="hover:text-main transition-colors">
            Terms &amp; Conditions
          </Link>
          <Link href="/privacy" className="hover:text-main transition-colors">
            Privacy Policy
          </Link>
        </div>
      </div>
    </div>
  );
}

function Row({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="py-5 flex flex-col md:flex-row md:gap-8">
      <dt className="font-heading text-base font-bold text-ink md:w-64 flex-shrink-0 mb-2 md:mb-0">
        {label}
      </dt>
      <dd className="text-subtext leading-relaxed text-sm md:text-base">{children}</dd>
    </div>
  );
}
