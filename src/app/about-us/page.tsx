import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

/* ──────────────────────────────────────────────────────────────
   Pain-point story items
────────────────────────────────────────────────────────────── */
const painPoints = [
  {
    headline:
      "When a storm knocked out a utility pole, your phones were out for hours.",
    img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=700&q=80",
    imgAlt: "Storm causing communication outage",
  },
  {
    headline:
      "When you had a not-basic question, you wasted hours trying to reach a technician who could actually help.",
    img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=700&q=80",
    imgAlt: "Frustrated business owner on hold",
  },
  {
    headline: "When you wanted something custom, there was nobody to talk to.",
    img: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=700&q=80",
    imgAlt: "Business team needing custom solutions",
  },
];

/* ──────────────────────────────────────────────────────────────
   Core values / differentiators
────────────────────────────────────────────────────────────── */
const values = [
  {
    title: "Service-First",
    body: "Every engineer, every rep, every interaction — designed around fixing your problem fast, not shuffling you to another department.",
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
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
        />
      </svg>
    ),
  },
  {
    title: "Instant US Support — 24/7",
    body: "Call us any time. A certified US engineer picks up in under 3 minutes and resolves your issue on the spot — no runaround, no scripts.",
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
    title: "Custom, Flexible Options",
    body: "No two businesses are alike. We engineer solutions specific to your environment, workflow, and budget — then scale with you.",
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
    title: "Big-Carrier Infrastructure",
    body: "Backed by 37 carriers, 20+ data centers, and 3 switch platforms — but with the agility and care of a boutique provider.",
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
          d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
        />
      </svg>
    ),
  },
];

/* ──────────────────────────────────────────────────────────────
   Stats
────────────────────────────────────────────────────────────── */
const stats = [
  { value: "20+", label: "Years in Business" },
  { value: "37", label: "Carrier Partners" },
  { value: "99.99%", label: "Network Uptime" },
  { value: "<3 min", label: "Support Response Time" },
];

export default function AboutUsPage() {
  return (
    <>
      <Header />
      <main>
        {/* ════════════════════════════════════════
            PAGE HERO
        ════════════════════════════════════════ */}
        <section className="relative flex items-center overflow-hidden min-h-80">
          <Image
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80"
            alt="Modern business office"
            fill
            className="object-cover object-center"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 hero-overlay" />
          <div className="inner-section relative w-full py-20 md:py-28">
            <div className="max-w-3xl flex flex-col gap-5">
              <span className="eyebrow text-accent">About Jetwave</span>
              <h1 className="heading-xl font-bold text-white leading-tight">
                Rapid fixes. Instant responses.{" "}
                <span className="text-accent">Custom options.</span>
              </h1>
              <p className="text-l text-white/80 max-w-2xl leading-relaxed">
                We&apos;re a service-first phone + internet provider —
                determined to take the frustration out of communication
                glitches.
              </p>
              <div className="flex flex-wrap gap-4 pt-2">
                <Link href="/get-a-quote" className="btn btn-accent btn-lg">
                  Get a Quote
                </Link>
                <Link
                  href="/try-us-free"
                  className="btn btn-outline-white btn-lg"
                >
                  Try Us Free — 30 Days
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════
            STATS BANNER
        ════════════════════════════════════════ */}
        <section className="bg-primary">
          <div className="inner-section py-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="flex flex-col items-center justify-center text-center gap-1.5 py-2"
                >
                  <span className="heading-l font-bold text-accent leading-none">
                    {s.value}
                  </span>
                  <span className="text-s font-medium text-white/70 uppercase tracking-wider">
                    {s.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════
            THE ORIGIN STORY
        ════════════════════════════════════════ */}
        <section className="section-l bg-white">
          <div className="inner-section">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-20 items-center">
              <div className="flex flex-col gap-6">
                <span className="eyebrow">Our Story</span>
                <h2 className="heading-l font-bold text-primary">
                  When we started out, businesses like yours were dealing with
                  big carriers — who didn&apos;t really care.
                </h2>
                <p className="text-l text-ink-muted leading-relaxed">
                  We saw businesses struggling to keep their communications
                  running smoothly. When things broke, they lost business,
                  wasted employee time, and felt frustrated and helpless.
                </p>
                <p className="text-l text-ink-muted leading-relaxed">
                  So we built something different. Jetwave gives you the{" "}
                  <strong className="text-primary">
                    stability &amp; backing
                  </strong>{" "}
                  of a big company, with the{" "}
                  <strong className="text-primary">
                    agility &amp; boutique service
                  </strong>{" "}
                  of a small one.
                </p>
              </div>
              <div className="relative rounded-2xl overflow-hidden shadow-xl h-80 lg:h-96">
                <Image
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80"
                  alt="Jetwave team helping a business client"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════
            PAIN POINTS — THE PROBLEM WE SOLVE
        ════════════════════════════════════════ */}
        <section className="section-l bg-light-gray">
          <div className="inner-section">
            <div className="text-center mb-14">
              <span className="eyebrow mb-3 block">The Problem</span>
              <h2 className="heading-l font-bold text-primary">
                Sound familiar?
              </h2>
              <p className="text-l text-ink-muted mt-4 max-w-2xl mx-auto">
                These are the frustrations that led us to build Jetwave — and
                why hundreds of businesses switched.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {painPoints.map((pt) => (
                <div
                  key={pt.headline}
                  className="card overflow-hidden flex flex-col group"
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={pt.img}
                      alt={pt.imgAlt}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 service-img-overlay" />
                  </div>
                  <div className="p-6 flex flex-col gap-3 flex-1">
                    <p className="text-m font-semibold text-primary leading-snug">
                      {pt.headline}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-14 text-center">
              <p className="heading-m font-bold text-primary mb-3">
                Not with Jetwave.
              </p>
              <p className="text-l text-ink-muted max-w-xl mx-auto">
                We give you the stability of a big company with the personal
                touch of a team that actually cares about your business.
              </p>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════
            CORE VALUES / DIFFERENTIATORS
        ════════════════════════════════════════ */}
        <section className="section-l bg-white">
          <div className="inner-section">
            <div className="text-center mb-14">
              <span className="eyebrow mb-3 block">
                What Makes Us Different
              </span>
              <h2 className="heading-l font-bold text-primary">
                Built on a simple promise: we pick up, we fix it, fast.
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((v) => (
                <div
                  key={v.title}
                  className="card-bordered p-6 flex flex-col gap-3 hover:shadow-md transition-shadow"
                >
                  <div className="w-11 h-11 rounded-xl bg-accent-light text-accent flex items-center justify-center">
                    {v.icon}
                  </div>
                  <h3 className="heading-xs font-bold text-primary">
                    {v.title}
                  </h3>
                  <p className="text-s text-ink-muted">{v.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════
            TESTIMONIAL — Full Width
        ════════════════════════════════════════ */}
        <section className="section-l testimonials-section-bg">
          <div className="inner-section">
            <div className="max-w-3xl mx-auto text-center flex flex-col gap-7 items-center">
              <span className="eyebrow text-accent">Client Story</span>
              <blockquote className="heading-s font-normal text-white/90 leading-relaxed">
                &ldquo;Jetwave played and tinkered for hours and got things
                working — without charging us a penny for all that time. They
                had their engineer in there solving a problem nobody else was
                able to tackle. That&apos;s the difference you feel every single
                day.&rdquo;
              </blockquote>
              <div className="flex flex-col items-center gap-2">
                <div className="w-14 h-14 rounded-full overflow-hidden ring-2 ring-accent/40">
                  <Image
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&q=80&fit=crop"
                    alt="Aaron Junger"
                    width={56}
                    height={56}
                    className="object-cover w-full h-full"
                  />
                </div>
                <cite className="not-italic text-center">
                  <span className="block text-m font-bold text-white">
                    Aaron Junger
                  </span>
                  <span className="block text-s text-white/60">
                    CIO, Shiel Medical Lab
                  </span>
                </cite>
              </div>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════
            CTA BANNER
        ════════════════════════════════════════ */}
        <section className="cta-banner-bg section-l">
          <div className="inner-section text-center flex flex-col items-center gap-7">
            <h2 className="heading-l font-bold text-white max-w-2xl">
              Ready to experience service that actually works?
            </h2>
            <p className="text-l text-white/85 max-w-xl">
              Get a free, no-obligation quote — or try our VoIP system for 30
              days at zero cost and zero commitment.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/get-a-quote" className="btn btn-primary btn-lg">
                Get a Free Quote
              </Link>
              <Link
                href="/try-us-free"
                className="btn btn-outline-white btn-lg"
              >
                Try Us Free — 30 Days
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
