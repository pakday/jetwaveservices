import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LeadForm from "@/components/LeadForm";

/* ──────────────────────────────────────────────────────────────
   What's included in the free trial
────────────────────────────────────────────────────────────── */
const included = [
  {
    title: "Full VoIP Platform",
    body: "Access the complete Jetwave VoIP system — no watered-down demo version. Experience exactly what paying clients get.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-7 h-7"
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
  {
    title: "All Advanced Features",
    body: "Automated menus, call forwarding, call recording, voicemail-to-email, team messaging, video calling, and mobile app access.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-7 h-7"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.8}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
        />
      </svg>
    ),
  },
  {
    title: "24/7 US Live Support",
    body: "Your trial includes the same 24/7 US support as paying clients — a certified engineer always a phone call away.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-7 h-7"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.8}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
        />
      </svg>
    ),
  },
  {
    title: "No Credit Card Required",
    body: "Sign up in seconds. No credit card, no billing, no obligation. Cancel anytime within the 30 days — no questions asked.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-7 h-7"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.8}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
        />
      </svg>
    ),
  },
];

/* ──────────────────────────────────────────────────────────────
   How it works — 3-step process
────────────────────────────────────────────────────────────── */
const steps = [
  {
    step: "01",
    title: "Fill Out the Form",
    body: "Tell us about your business. No technical knowledge needed — we handle the setup from top to bottom.",
  },
  {
    step: "02",
    title: "We Configure Your System",
    body: "A Jetwave engineer sets up your trial VoIP system, ports your numbers if needed, and gets your team ready in under 2 weeks.",
  },
  {
    step: "03",
    title: "Experience the Difference",
    body: "Run your business on Jetwave for 30 days. See how much better communication feels when someone actually has your back.",
  },
];

/* ──────────────────────────────────────────────────────────────
   VoIP features included in trial
────────────────────────────────────────────────────────────── */
const voipFeatures = [
  "Unlimited calling (US & Canada)",
  "Auto attendant / IVR menus",
  "Call forwarding & call routing",
  "Voicemail to email transcription",
  "HD call recording",
  "Team messaging & group chat",
  "Video conferencing",
  "Mobile & desktop app",
  "Call analytics & reporting",
  "Conference bridges",
];

export default function TryUsFree() {
  return (
    <>
      <Header />
      <main>
        {/* ════════════════════════════════════════
            PAGE HERO
        ════════════════════════════════════════ */}
        <section className="relative flex items-center overflow-hidden min-h-80">
          <Image
            src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1920&q=80"
            alt="Business team collaborating using VoIP"
            fill
            className="object-cover object-center"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 hero-overlay" />
          <div className="inner-section relative w-full py-20 md:py-28">
            <div className="max-w-3xl flex flex-col gap-5">
              <span className="eyebrow text-accent">30-Day Free Trial</span>
              <h1 className="heading-xl font-bold text-white leading-tight">
                Try us free —{" "}
                <span className="text-accent">
                  30 days, zero cost, zero obligation.
                </span>
              </h1>
              <p className="text-l text-white/80 max-w-2xl leading-relaxed">
                Get a robust, feature-rich and absolutely dependable VoIP system
                for 30 days. No credit card required. No hidden commitment.
                Experience what great communication feels like.
              </p>
              <div className="flex flex-wrap gap-4 pt-2">
                <a href="#trial-form" className="btn btn-accent btn-lg">
                  Start My Free Trial
                </a>
                <Link
                  href="/get-a-quote"
                  className="btn btn-outline-white btn-lg"
                >
                  Get a Quote Instead
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════
            WHAT'S INCLUDED — 4 CARDS
        ════════════════════════════════════════ */}
        <section className="section-l bg-white">
          <div className="inner-section">
            <div className="text-center mb-14">
              <span className="eyebrow mb-3 block">What You Get</span>
              <h2 className="heading-l font-bold text-primary">
                Everything. No strings attached.
              </h2>
              <p className="text-l text-ink-muted mt-4 max-w-2xl mx-auto">
                Your trial gives you the full Jetwave VoIP experience — the same
                system that thousands of US businesses rely on every day.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {included.map((item) => (
                <div
                  key={item.title}
                  className="card-bordered p-7 flex flex-col gap-4 hover:shadow-md transition-shadow"
                >
                  <div className="w-14 h-14 rounded-xl bg-accent-light text-accent flex items-center justify-center">
                    {item.icon}
                  </div>
                  <h3 className="heading-s font-bold text-primary">
                    {item.title}
                  </h3>
                  <p className="text-m text-ink-muted">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════
            HOW IT WORKS — 3 STEPS
        ════════════════════════════════════════ */}
        <section className="section-l bg-light-gray">
          <div className="inner-section">
            <div className="text-center mb-14">
              <span className="eyebrow mb-3 block">How It Works</span>
              <h2 className="heading-l font-bold text-primary">
                Up and running in under 2 weeks.
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
              {/* Connector line — desktop only */}
              <div className="hidden md:block absolute top-10 left-1/4 right-1/4 h-0.5 bg-border" />
              {steps.map((s, idx) => (
                <div
                  key={s.step}
                  className="flex flex-col items-center text-center gap-4 relative"
                >
                  <div
                    className={`w-16 h-16 rounded-full flex items-center justify-center text-white font-bold heading-s z-10 ${idx === 1 ? "bg-accent" : "bg-primary"}`}
                  >
                    {s.step}
                  </div>
                  <h3 className="heading-s font-bold text-primary">
                    {s.title}
                  </h3>
                  <p className="text-m text-ink-muted">{s.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════
            FORM + FEATURES LIST
        ════════════════════════════════════════ */}
        <section id="trial-form" className="section-l bg-white">
          <div className="inner-section">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-20 items-start">
              {/* ── Left: context + features ── */}
              <div className="flex flex-col gap-8">
                <div className="flex flex-col gap-4">
                  <span className="eyebrow">Start Your Trial</span>
                  <h2 className="heading-l font-bold text-primary">
                    Try Jetwave VoIP free for 30 days.
                  </h2>
                  <p className="text-l text-ink-muted leading-relaxed">
                    Tell us about yourself, or give us a call at{" "}
                    <a
                      href="tel:800-700-7778"
                      className="text-accent font-semibold hover:underline"
                    >
                      800-700-7778
                    </a>{" "}
                    to get this special offer. We&apos;ll get you set up and
                    running in days.
                  </p>
                </div>

                {/* Features grid */}
                <div className="flex flex-col gap-3">
                  <p className="text-s font-bold uppercase tracking-wider text-ink-muted">
                    Included in your trial
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {voipFeatures.map((f) => (
                      <div key={f} className="flex items-center gap-2.5">
                        <span className="shrink-0 w-5 h-5 rounded-full bg-accent-light text-accent flex items-center justify-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-3 h-3"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={3}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </span>
                        <span className="text-m text-ink-muted">{f}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Quote block */}
                <div className="rounded-xl p-6 bg-primary flex flex-col gap-3">
                  <p className="text-m italic text-white/85 leading-relaxed">
                    &ldquo;I&apos;ve tried many providers, and I thought good
                    service was difficult or impossible to get. With Jetwave,
                    they&apos;ve got my back. No more runaround, no more having
                    to go through 4 technicians to get to somebody who actually
                    can help.&rdquo;
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full overflow-hidden shrink-0">
                      <Image
                        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&q=80&fit=crop"
                        alt="Suzanne Smolier"
                        width={40}
                        height={40}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <div>
                      <p className="text-s font-bold text-white">
                        Suzanne Smolier
                      </p>
                      <p className="text-xs text-white/60">
                        CEO, Telautomation Services
                      </p>
                    </div>
                  </div>
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
            CTA BANNER
        ════════════════════════════════════════ */}
        <section className="cta-banner-bg section-m">
          <div className="inner-section flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex flex-col gap-3 max-w-xl">
              <h2 className="heading-m font-bold text-white">
                Already know what you want? Get a custom quote.
              </h2>
              <p className="text-m text-white/80">
                Tell us your setup and we&apos;ll price out a system built
                exactly for your business.
              </p>
            </div>
            <Link
              href="/get-a-quote"
              className="btn btn-outline-white btn-lg shrink-0"
            >
              Get a Free Quote
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
