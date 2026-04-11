import Stripe from "stripe";
import { loadStripe, Stripe as StripeJS } from "@stripe/stripe-js";

// Server-side Stripe instance
export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string);

// Client-side Stripe singleton
let stripePromise: Promise<StripeJS | null>;

export function getStripe(): Promise<StripeJS | null> {
  if (!stripePromise) {
    stripePromise = loadStripe(
      process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string
    );
  }
  return stripePromise;
}
