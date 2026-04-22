import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LeadForm from "@/components/LeadForm";

/* ──────────────────────────────────────────────────────────────
   Why-quote trust items
────────────────────────────────────────────────────────────── */
const trustItems = [
  {
    title: "No Hidden Fees",
    body: "You pay exactly what we quote — no surprise charges, no rate hikes after year one.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.8}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
  {
    title: "Custom-Built System",
    body: "We engineer a solution specific to your business size, industry, and technical needs.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.8}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    ),
  },
  {
    title: "Fast Setup — Under 2 Weeks",
    body: "We handle the transition from your old provider. You&apos;re up and running with minimal disruption.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.8}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
    ),
  },
  {
    title: "24/7 US Live Support",
    body: "After sign-up, an engineer answers every call in under 3 minutes — day or night, weekday or weekend.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.8}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
        />
      </svg>
    ),
  },
];

/* ──────────────────────────────────────────────────────────────
   Testimonials
────────────────────────────────────────────────────────────── */
const testimonials = [
  {
    quote:
      "I used to waste 3–4 hours on things that Jetwave resolves in 15 minutes. All it takes is a couple of rings to get a competent engineer on the phone.",
    name: "Kendall Reber",
    role: "CEO, Garland Communications",
    photo:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&q=80&fit=crop",
  },
  {
    quote:
      "After Superstorm Sandy, everyone else in our complex was out for 3 weeks — but Jetwave got us up just four hours later. That's pretty much perfection.",
    name: "Aaron Junger",
    role: "CIO, Shiel Medical Lab",
    photo:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&q=80&fit=crop",
  },
];

export default function GetAQuotePage() {
  return (
    <>
      <Header />
      <main>
        {/* ════════════════════════════════════════
            PAGE HERO (minimal — let form be front-and-center)
        ════════════════════════════════════════ */}
        <section className="relative flex items-center overflow-hidden min-h-64">
          <Image
            src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1920&q=80"
            alt="Modern business office"
            fill
            className="object-cover object-center"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 hero-overlay" />
          <div className="inner-section relative w-full py-16 md:py-24">
            <div className="max-w-2xl flex flex-col gap-4">
              <span className="eyebrow text-accent">Free Quote</span>
              <h1 className="heading-xl font-bold text-white leading-tight">
                Get a Free Quote
              </h1>
              <p className="text-l text-white/80 leading-relaxed">
                Get a robust, feature-rich and absolutely dependable system —
                and 24/7 instant US support.
              </p>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════
            MAIN FORM + WHY JETWAVE SPLIT
        ════════════════════════════════════════ */}
        <section className="section-l bg-white">
          <div className="inner-section">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-20 items-start">
              {/* ── Left: trust + context ── */}
              <div className="flex flex-col gap-8">
                <div className="flex flex-col gap-4">
                  <h2 className="heading-l font-bold text-primary">
                    Get a free quote for a robust, feature-rich and absolutely
                    dependable system.
                  </h2>
                  <p className="text-l text-ink-muted leading-relaxed">
                    Tell us about yourself and your business needs. One of our
                    specialists will contact you within 1 business hour with a
                    custom quote tailored to your setup. Or give us a call at{" "}
                    <a
                      href="tel:800-700-7778"
                      className="text-accent font-semibold hover:underline"
                    >
                      800-700-7778
                    </a>
                    .
                  </p>
                </div>

                {/* Trust items */}
                <div className="flex flex-col gap-5">
                  {trustItems.map((item) => (
                    <div key={item.title} className="flex items-start gap-4">
                      <div className="shrink-0 w-11 h-11 rounded-lg bg-accent-light text-accent flex items-center justify-center mt-0.5">
                        {item.icon}
                      </div>
                      <div>
                        <p className="text-m font-bold text-primary">
                          {item.title}
                        </p>
                        <p
                          className="text-m text-ink-muted mt-0.5"
                          dangerouslySetInnerHTML={{ __html: item.body }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                {/* Mini testimonials */}
                <div className="flex flex-col gap-4 mt-2">
                  {testimonials.map((t) => (
                    <div
                      key={t.name}
                      className="testimonial-card rounded-xl p-5 flex flex-col gap-3"
                      style={{
                        background: "rgba(9,46,113,0.06)",
                        border: "1px solid rgba(9,46,113,0.1)",
                      }}
                    >
                      <p className="text-m text-ink-muted italic leading-relaxed">
                        &ldquo;{t.quote}&rdquo;
                      </p>
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-full overflow-hidden shrink-0">
                          <Image
                            src={t.photo}
                            alt={t.name}
                            width={36}
                            height={36}
                            className="object-cover w-full h-full"
                          />
                        </div>
                        <div>
                          <p className="text-s font-bold text-primary">
                            {t.name}
                          </p>
                          <p className="text-xs text-ink-muted">{t.role}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* ── Right: form ── */}
              <div className="lg:sticky lg:top-8">
                <LeadForm />
              </div>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════
            CTA — 30-DAY TRIAL UPSELL
        ════════════════════════════════════════ */}
        <section className="cta-banner-bg section-m">
          <div className="inner-section flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex flex-col gap-3 max-w-xl">
              <h2 className="heading-m font-bold text-white">
                Not ready to commit? Try us for free — 30 days. Zero cost.
              </h2>
              <p className="text-m text-white/80">
                Experience Jetwave&apos;s VoIP platform risk-free before signing
                anything.
              </p>
            </div>
            <a
              href="/try-us-free"
              className="btn btn-outline-white btn-lg shrink-0"
            >
              Try Us Free
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
