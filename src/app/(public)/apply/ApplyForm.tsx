"use client";

import { useState } from "react";
import { HOW_DID_YOU_HEAR_OPTIONS } from "@/lib/constants/applyOptions";

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  age: string;
  occupation: string;
  country: string;
  howDidYouHear: string;
  preferredDateTime: string;
  website: string; // honeypot
};

type FormErrors = Partial<Record<keyof Omit<FormData, "website">, string>>;

const initialFormData: FormData = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  age: "",
  occupation: "",
  country: "",
  howDidYouHear: "",
  preferredDateTime: "",
  website: "",
};

function validate(data: FormData): FormErrors {
  const errors: FormErrors = {};
  if (!data.firstName.trim()) errors.firstName = "First name is required.";
  if (!data.lastName.trim()) errors.lastName = "Last name is required.";
  if (!data.email.trim()) {
    errors.email = "Email is required.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = "Please enter a valid email address.";
  }
  if (!data.phone.trim()) errors.phone = "Phone number is required.";
  if (!data.age.trim()) {
    errors.age = "Age is required.";
  } else if (isNaN(Number(data.age)) || Number(data.age) < 13) {
    errors.age = "You must be at least 13 years old to apply.";
  }
  if (!data.occupation.trim()) errors.occupation = "Occupation is required.";
  if (!data.country.trim()) errors.country = "Country of residence is required.";
  if (!data.howDidYouHear) errors.howDidYouHear = "Please select an option.";
  if (!data.preferredDateTime.trim())
    errors.preferredDateTime = "Please enter your preferred date & time.";
  return errors;
}

export default function ApplyForm() {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    // Honeypot check
    if (formData.website) return;

    const validationErrors = validate(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    try {
      const res = await fetch("/api/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setSubmitted(true);
      } else {
        setErrors({ email: "Something went wrong. Please try again." });
      }
    } catch {
      setErrors({ email: "Something went wrong. Please try again." });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="bg-cream min-h-screen py-16 md:py-24 px-4">
      <div className="max-w-[700px] mx-auto">

        {submitted ? (
          /* ── Thank You ── */
          <div className="min-h-screen flex items-center justify-center -mt-16 md:-mt-24 -mx-4 px-4 py-16">
            <div className="text-center w-full max-w-[500px]">
              {/* Check icon */}
              <div
                className="w-[68px] h-[68px] rounded-full flex items-center justify-center mx-auto mb-7 text-[1.6rem]"
                style={{
                  background: 'rgba(201,168,76,0.1)',
                  border: '2px solid #C9A84C',
                  color: '#C9A84C',
                }}
              >
                ✓
              </div>
              {/* Label */}
              <span
                className="inline-block text-[0.68rem] font-bold tracking-[0.22em] uppercase mb-3"
                style={{ color: '#896520' }}
              >
                Application Received
              </span>
              <h1 className="font-heading font-bold text-ink leading-[1.15] mb-4"
                style={{ fontSize: 'clamp(2rem,4vw,2.8rem)' }}
              >
                You&apos;re all set!
              </h1>
              <div className="w-9 h-px bg-main mx-auto mb-5" />
              <p className="text-subtext text-base leading-[1.75] mb-2">
                We&apos;ll review your application and selected applicants will receive a{" "}
                <strong className="text-ink">WhatsApp invitation within 48 hours</strong>.
              </p>
              <p className="text-text-muted text-sm mb-0">
                Keep an eye on your WhatsApp — that&apos;s how we&apos;ll reach you.
              </p>

              {/* What happens next */}
              <div
                className="mt-7 text-left rounded-xl px-6 py-5"
                style={{ background: '#fff', border: '1px solid #E8E2D6' }}
              >
                <p
                  className="text-[0.68rem] font-bold tracking-[0.18em] uppercase mb-1"
                  style={{ color: '#896520' }}
                >
                  What happens next
                </p>
                {[
                  {
                    n: '1',
                    title: 'We review your application',
                    desc: 'We read every application personally and reach out to selected candidates.',
                  },
                  {
                    n: '2',
                    title: 'You get a WhatsApp message',
                    desc: "We\u2019ll send your trial lesson link and confirm the date and time.",
                  },
                  {
                    n: '3',
                    title: 'Your free lesson on Google Meet',
                    desc: 'Experience the method, ask every question you have, and decide with clarity.',
                  },
                ].map((step, i, arr) => (
                  <div
                    key={step.n}
                    className="flex items-start gap-3 py-2.5"
                    style={{ borderBottom: i < arr.length - 1 ? '1px solid #E8E2D6' : 'none' }}
                  >
                    <div
                      className="w-[26px] h-[26px] rounded-full flex items-center justify-center flex-shrink-0 mt-[1px] text-[0.72rem] font-bold font-heading"
                      style={{ background: '#0B1522', color: '#C9A84C' }}
                    >
                      {step.n}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-ink mb-0.5">{step.title}</p>
                      <p className="text-[0.8rem] text-subtext">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Back to site */}
              <div className="mt-7 flex justify-center">
                <a
                  href="/"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium transition-colors"
                  style={{ background: '#C9A84C', color: '#0B1522' }}
                >
                  ← Back to site
                </a>
              </div>
            </div>
          </div>
        ) : (
          /* ── Form Card ── */
          <div className="bg-white rounded-2xl shadow-md px-6 py-12 md:px-12">

            {/* Header */}
            <div className="text-center mb-10 pb-8 border-b border-border">
              <h1 className="font-heading text-3xl md:text-4xl text-ink font-bold mb-4">
                Book a Free Trial Lesson
              </h1>
              <div className="w-9 h-px bg-main mx-auto mb-4" />
              <p className="text-subtext text-base leading-relaxed max-w-sm mx-auto">
                A free 1-hour Japanese lesson on Google Meet — experience our method and decide with clarity.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-6">

              {/* Honeypot */}
              <div style={{ display: "none" }} aria-hidden="true">
                <input
                  type="text"
                  name="website"
                  value={formData.website}
                  onChange={handleChange}
                  tabIndex={-1}
                  autoComplete="off"
                />
              </div>

              {/* Name — first / last */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Field label="First Name" required error={errors.firstName}>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="Fatima"
                    className={inputClass(!!errors.firstName)}
                  />
                </Field>
                <Field label="Last Name" required error={errors.lastName}>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Al-Rashidi"
                    className={inputClass(!!errors.lastName)}
                  />
                </Field>
              </div>

              {/* Email */}
              <Field label="Email" required error={errors.email}>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="fatima@example.com"
                  className={inputClass(!!errors.email)}
                />
              </Field>

              {/* Phone */}
              <Field label="Phone Number" required error={errors.phone}>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+966 50 000 0000"
                  className={inputClass(!!errors.phone)}
                />
              </Field>

              {/* Age */}
              <Field label="Age" required error={errors.age}>
                <input
                  type="number"
                  name="age"
                  value={formData.age}
                  onChange={handleChange}
                  placeholder="25"
                  min={13}
                  className={inputClass(!!errors.age)}
                />
              </Field>

              {/* Occupation */}
              <Field label="Occupation" required error={errors.occupation}>
                <input
                  type="text"
                  name="occupation"
                  value={formData.occupation}
                  onChange={handleChange}
                  placeholder="e.g., Engineer, Designer..."
                  className={inputClass(!!errors.occupation)}
                />
              </Field>

              {/* Country */}
              <Field label="Country of Residence" required error={errors.country}>
                <input
                  type="text"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  placeholder="Saudi Arabia"
                  className={inputClass(!!errors.country)}
                />
              </Field>

              {/* How did you hear */}
              <Field
                label="How did you hear about us?"
                required
                error={errors.howDidYouHear}
              >
                <div className="grid grid-cols-2 gap-x-6 gap-y-3 mt-1">
                  {HOW_DID_YOU_HEAR_OPTIONS.map((option) => (
                    <label
                      key={option}
                      className="flex items-center gap-2.5 cursor-pointer group"
                    >
                      <input
                        type="radio"
                        name="howDidYouHear"
                        value={option}
                        checked={formData.howDidYouHear === option}
                        onChange={handleChange}
                        className="w-4 h-4 accent-[#0B1522] cursor-pointer"
                      />
                      <span
                        className={`text-sm transition-colors ${
                          formData.howDidYouHear === option
                            ? 'text-ink font-medium'
                            : 'group-hover:text-ink'
                        }`}
                        style={formData.howDidYouHear === option ? {} : { color: '#9CA3AF' }}
                      >
                        {option}
                      </span>
                    </label>
                  ))}
                </div>
              </Field>

              {/* Preferred date & time */}
              <Field
                label="Preferred Date & Time"
                required
                error={errors.preferredDateTime}
              >
                <textarea
                  name="preferredDateTime"
                  value={formData.preferredDateTime}
                  onChange={handleChange}
                  rows={3}
                  placeholder='e.g., July 10, 7:00 PM AST'
                  className={`${inputClass(!!errors.preferredDateTime)} resize-none`}
                />
              </Field>

              {/* Notice */}
              <p
                className="text-sm text-subtext leading-[1.65] border-l-[3px] border-main pl-4 pr-4 py-[13px] rounded-r-lg"
                style={{ background: 'rgba(201,168,76,0.05)' }}
              >
                Due to limited availability, we review each application personally. Selected candidates will receive a WhatsApp invitation within{" "}
                <strong className="text-ink">48 hours</strong>.
              </p>

              {/* Submit */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="mt-2 w-full py-4 rounded-full font-medium text-base tracking-wide transition-all duration-200 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0"
                style={{
                  background: isSubmitting ? "#A07B2E" : "#C9A84C",
                  color: "#0B1522",
                }}
              >
                {isSubmitting ? "Sending…" : "Book Now"}
              </button>

            </form>
          </div>
        )}

      </div>
    </div>
  );
}

/* ── helpers ── */

function inputClass(hasError: boolean) {
  return [
    "w-full px-4 py-3 rounded-lg text-base text-ink bg-white",
    "border transition-colors duration-150 outline-none",
    "focus:shadow-[0_0_0_3px_rgba(201,168,76,0.12)]",
    hasError
      ? "border-red-400 focus:border-red-500"
      : "border-border focus:border-[#C9A84C]",
  ].join(" ");
}

function Field({
  label,
  required,
  error,
  children,
}: {
  label: string;
  required?: boolean;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-base font-bold text-ink">
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
      {children}
      {error && <p className="text-red-500 text-xs">{error}</p>}
    </div>
  );
}
