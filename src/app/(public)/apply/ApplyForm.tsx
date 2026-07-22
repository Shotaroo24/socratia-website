"use client";

import { useState, useEffect } from "react";
import { HOW_DID_YOU_HEAR_OPTIONS, applySchema } from "@/lib/validation/apply";

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

function fieldErrorsFrom(
  fieldErrors: Partial<Record<keyof FormData, string[] | undefined>>
): FormErrors {
  const errors: FormErrors = {};
  for (const key of Object.keys(fieldErrors) as (keyof FormData)[]) {
    if (key === "website") continue;
    const message = fieldErrors[key]?.[0];
    if (message) errors[key as keyof FormErrors] = message;
  }
  return errors;
}

function validate(data: FormData): FormErrors {
  const parsed = applySchema.safeParse(data);
  if (parsed.success) return {};
  return fieldErrorsFrom(parsed.error.flatten().fieldErrors);
}

export default function ApplyForm() {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (submitted) {
      window.scrollTo({ top: 0, behavior: "instant" });
    }
  }, [submitted]);

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
        const body: { error?: string; issues?: Partial<Record<keyof FormData, string[]>> } =
          await res.json().catch(() => ({}));
        if (body.issues) {
          setErrors(fieldErrorsFrom(body.issues));
        } else {
          setErrors({ email: body.error ?? "Something went wrong. Please try again." });
        }
      }
    } catch {
      setErrors({ email: "Something went wrong. Please try again." });
    } finally {
      setIsSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <div className="bg-cream min-h-screen -mt-16 flex items-center justify-center px-4">
        <div className="text-center w-full max-w-[500px] py-16">
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
              <p className="text-subtext text-base md:text-lg leading-[1.75]">
                We&apos;ll review your application and selected applicants will receive a{" "}
                <strong className="text-ink">WhatsApp invitation within 48 hours</strong>.
              </p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-cream min-h-screen py-16 md:py-24 px-4">
      <div className="max-w-[700px] mx-auto">
          {/* ── Form Card ── */}
          <div className="bg-white rounded-2xl shadow-md px-6 py-12 md:px-12">

            {/* Header */}
            <div className="text-center mb-10 pb-8 border-b border-border">
              <h1 className="font-heading text-3xl md:text-4xl text-ink font-bold mb-4">
                Book a Free Trial Lesson
              </h1>
              <div className="w-9 h-px bg-main mx-auto mb-4" />
              <p className="text-subtext text-base md:text-lg leading-relaxed max-w-sm mx-auto">
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
                <Field label="First Name" required error={errors.firstName} htmlFor="apply-firstName">
                  <input
                    id="apply-firstName"
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="Fatima"
                    className={inputClass(!!errors.firstName)}
                  />
                </Field>
                <Field label="Last Name" required error={errors.lastName} htmlFor="apply-lastName">
                  <input
                    id="apply-lastName"
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
              <Field label="Email" required error={errors.email} htmlFor="apply-email">
                <input
                  id="apply-email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="fatima@example.com"
                  className={inputClass(!!errors.email)}
                />
              </Field>

              {/* Phone */}
              <Field label="Phone Number" required error={errors.phone} htmlFor="apply-phone">
                <input
                  id="apply-phone"
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+966 50 000 0000"
                  className={inputClass(!!errors.phone)}
                />
              </Field>

              {/* Age */}
              <Field label="Age" required error={errors.age} htmlFor="apply-age">
                <input
                  id="apply-age"
                  type="number"
                  name="age"
                  value={formData.age}
                  onChange={handleChange}
                  placeholder="35"
                  min={13}
                  className={inputClass(!!errors.age)}
                />
              </Field>

              {/* Occupation */}
              <Field label="Occupation" required error={errors.occupation} htmlFor="apply-occupation">
                <input
                  id="apply-occupation"
                  type="text"
                  name="occupation"
                  value={formData.occupation}
                  onChange={handleChange}
                  placeholder="e.g., Engineer, Designer..."
                  className={inputClass(!!errors.occupation)}
                />
              </Field>

              {/* Country */}
              <Field label="Country of Residence" required error={errors.country} htmlFor="apply-country">
                <input
                  id="apply-country"
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
                        className={`text-sm md:text-base transition-colors ${
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
                htmlFor="apply-preferredDateTime"
              >
                <textarea
                  id="apply-preferredDateTime"
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
                className="text-sm md:text-base text-subtext leading-[1.65] border-l-[3px] border-main pl-4 pr-4 py-[13px] rounded-r-lg"
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
  htmlFor,
  children,
}: {
  label: string;
  required?: boolean;
  error?: string;
  htmlFor?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={htmlFor} className="text-base md:text-lg font-bold text-ink">
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
      {children}
      {error && <p className="text-red-500 text-xs">{error}</p>}
    </div>
  );
}
