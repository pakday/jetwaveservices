"use client";

import { useState } from "react";
import Link from "next/link";

export default function LeadForm() {
  const [accepted, setAccepted] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!accepted) return;
    // TODO: wire to backend / CRM
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="bg-white rounded-2xl p-10 shadow-lg border border-border flex flex-col items-center justify-center gap-5 min-h-96 text-center">
        <div className="w-16 h-16 rounded-full bg-accent-light text-accent flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-8 h-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h3 className="heading-m font-bold text-primary">
          We&apos;ll be in touch shortly!
        </h3>
        <p className="text-m text-ink-muted max-w-sm">
          One of our specialists will contact you within 1 business hour.
          Meanwhile, feel free to explore our services.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="bg-white rounded-2xl p-8 shadow-lg border border-border flex flex-col gap-5"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="lead-name" className="text-s font-semibold text-ink">
            Name <span className="text-accent">*</span>
          </label>
          <input
            id="lead-name"
            name="name"
            type="text"
            required
            placeholder="Your full name"
            className="form-input"
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label
            htmlFor="lead-company"
            className="text-s font-semibold text-ink"
          >
            Company
          </label>
          <input
            id="lead-company"
            name="company"
            type="text"
            placeholder="Company name"
            className="form-input"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="lead-email" className="text-s font-semibold text-ink">
            Email <span className="text-accent">*</span>
          </label>
          <input
            id="lead-email"
            name="email"
            type="email"
            required
            placeholder="you@company.com"
            className="form-input"
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="lead-phone" className="text-s font-semibold text-ink">
            Phone <span className="text-accent">*</span>
          </label>
          <input
            id="lead-phone"
            name="phone"
            type="tel"
            required
            placeholder="(555) 000-0000"
            className="form-input"
          />
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <label
          htmlFor="lead-employees"
          className="text-s font-semibold text-ink"
        >
          Number of Employees
        </label>
        <select id="lead-employees" name="employees" className="form-input">
          <option value="">Select employee range</option>
          <option value="1-10">1 – 10</option>
          <option value="11-50">11 – 50</option>
          <option value="51-200">51 – 200</option>
          <option value="201-500">201 – 500</option>
          <option value="500+">500+</option>
        </select>
      </div>

      <div className="flex gap-3 items-start pt-1">
        <input
          id="lead-consent"
          type="checkbox"
          checked={accepted}
          onChange={(e) => setAccepted(e.target.checked)}
          className="mt-0.5 w-4 h-4 shrink-0 cursor-pointer accent-accent"
          required
        />
        <label
          htmlFor="lead-consent"
          className="text-xs text-ink-muted leading-relaxed cursor-pointer"
        >
          By submitting, you authorize Jetwave Services to contact you via email
          and SMS. You may unsubscribe at any time by emailing or texting{" "}
          <span className="font-semibold">UNSUBSCRIBE</span>. See our{" "}
          <Link href="/privacypolicy" className="text-accent hover:underline">
            Privacy Policy
          </Link>
          . Message &amp; data rates may apply.
        </label>
      </div>

      <button
        type="submit"
        disabled={!accepted}
        className="btn btn-accent btn-lg w-full disabled:opacity-50 disabled:cursor-not-allowed mt-1"
      >
        Request a Free Consultation
      </button>
    </form>
  );
}
