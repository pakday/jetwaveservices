import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

/* ──────────────────────────────────────────────────────────────
   Partner benefits
────────────────────────────────────────────────────────────── */
const benefits = [
  {
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
          d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    title: "Attractive Commission Packages",
    desc: "Earn competitive recurring revenue on every customer you bring in — with a transparent, tier-based commission structure.",
  },
  {
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
          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
        />
      </svg>
    ),
    title: "High-Value Upsell Opportunities",
    desc: "Unlock equipment and system upgrade sales with margins that go beyond the base service commission.",
  },
  {
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
          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
        />
      </svg>
    ),
    title: "Private Label Invoicing",
    desc: "Offer a fully white-labeled experience — your brand on the invoice, support, and equipment. Your clients never have to know.",
  },
  {
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
          d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
        />
      </svg>
    ),
    title: "Full Installation & Support",
    desc: "We handle all technical support and installation. Your team focuses on new business — not troubleshooting.",
  },
  {
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
    title: "4× Faster Installations",
    desc: "With a 1-week average porting time and pre-planned setups, you bill faster and avoid cash flow gaps from carrier delays.",
  },
  {
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
          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
        />
      </svg>
    ),
    title: "6-Point Onboarding Process",
    desc: "We audit old systems, handle cancellations, and order new equipment — every switch is snag-free for you and your clients.",
  },
];

/* ──────────────────────────────────────────────────────────────
   How it works steps
────────────────────────────────────────────────────────────── */
const steps = [
  {
    num: "01",
    title: "Apply to Partner",
    desc: "Fill out the form below. We review every application and reach out within one business day.",
  },
  {
    num: "02",
    title: "Get Onboarded",
    desc: "We walk you through our systems, pricing, and commission structure — no surprises.",
  },
  {
    num: "03",
    title: "Bring in Clients",
    desc: "You make the introduction. We handle installation, support, billing, and everything in between.",
  },
  {
    num: "04",
    title: "Earn Recurring Revenue",
    desc: "Collect your commission month after month on every active client you've referred.",
  },
];

export default function PartnersPage() {
  return (
    <>
      <Header />
      <main>
        {/* ════════════════════════════════════════
            PAGE HERO
        ════════════════════════════════════════ */}
        <section className="relative flex items-center overflow-hidden min-h-96">
          <Image
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1920&q=80"
            alt="Business partnership"
            fill
            className="object-cover object-center"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 hero-overlay" />
          <div className="inner-section relative w-full py-24 md:py-32">
            <div className="max-w-3xl flex flex-col gap-5">
              <span className="eyebrow text-accent">Partner Program</span>
              <h1 className="heading-xl font-bold text-white leading-tight">
                Double your business.{" "}
                <span className="text-accent">Slash your workload.</span>
              </h1>
              <p className="text-l text-white/80 max-w-2xl leading-relaxed">
                We take care of installations, customer service, and tech
                support. You focus on what you do best — closing deals and
                growing your bottom line.
              </p>
              <div className="flex flex-wrap gap-4 pt-2">
                <a href="#partner" className="btn btn-accent btn-lg">
                  Become a Partner
                </a>
                <Link href="/about-us" className="btn btn-outline-white btn-lg">
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════
            WE / YOU SPLIT
        ════════════════════════════════════════ */}
        <section className="section-l bg-white">
          <div className="inner-section">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* We */}
              <div className="bg-primary rounded-2xl p-8 md:p-10 flex flex-col gap-5">
                <span className="eyebrow text-accent">We</span>
                <h2 className="heading-m font-bold text-white">
                  Handle everything behind the scenes
                </h2>
                <ul className="flex flex-col gap-3">
                  {[
                    "Installation & equipment setup",
                    "Customer service & 24/7 technical support",
                    "Carrier provisioning & porting",
                    "Billing & invoicing (private label available)",
                    "6-point onboarding — zero surprises",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-white/85 text-m"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5 text-accent mt-0.5 shrink-0"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              {/* You */}
              <div className="bg-light-gray rounded-2xl p-8 md:p-10 flex flex-col gap-5">
                <span className="eyebrow">You</span>
                <h2 className="heading-m font-bold text-primary">
                  Focus on growth &amp; new revenue
                </h2>
                <ul className="flex flex-col gap-3">
                  {[
                    "Bring in more sales, boost your bottom line",
                    "Earn attractive recurring commissions",
                    "Upsell high-value equipment & systems",
                    "Keep clients longer with superior service",
                    "White-label under your own brand",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-ink-muted text-m"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5 text-primary mt-0.5 shrink-0"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════
            BENEFITS GRID
        ════════════════════════════════════════ */}
        <section className="section-l bg-light-gray">
          <div className="inner-section">
            <div className="text-center mb-14">
              <span className="eyebrow mb-3 block">Partner Benefits</span>
              <h2 className="heading-l font-bold text-primary">
                Everything you need to scale fast
              </h2>
              <p className="text-l text-ink-muted mt-4 max-w-2xl mx-auto">
                JetWave partners get infrastructure, support, and revenue tools
                that most carriers reserve for their own teams.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((b) => (
                <div
                  key={b.title}
                  className="card-bordered p-7 flex flex-col gap-4 hover:shadow-md transition-shadow"
                >
                  <div className="w-12 h-12 rounded-xl bg-accent-light text-accent flex items-center justify-center">
                    {b.icon}
                  </div>
                  <h3 className="heading-xs font-bold text-primary">
                    {b.title}
                  </h3>
                  <p className="text-s text-ink-muted">{b.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════
            HOW IT WORKS
        ════════════════════════════════════════ */}
        <section className="section-l bg-white">
          <div className="inner-section">
            <div className="text-center mb-14">
              <span className="eyebrow mb-3 block">How It Works</span>
              <h2 className="heading-l font-bold text-primary">
                From application to recurring revenue in days
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {steps.map((s) => (
                <div key={s.num} className="flex flex-col gap-4">
                  <span className="heading-l font-bold text-accent/20 leading-none">
                    {s.num}
                  </span>
                  <h3 className="heading-xs font-bold text-primary">
                    {s.title}
                  </h3>
                  <p className="text-s text-ink-muted">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════
            TESTIMONIAL
        ════════════════════════════════════════ */}
        <section className="section-l testimonials-section-bg">
          <div className="inner-section">
            <div className="max-w-3xl mx-auto text-center flex flex-col gap-7 items-center">
              <span className="eyebrow text-accent">Partner Testimonial</span>
              <blockquote className="heading-s font-normal text-white/90 leading-relaxed">
                &ldquo;With Jetwave, it&apos;s a real partnership. They&apos;re
                actively working with me to help me make more money. I bring the
                client — they do everything else.&rdquo;
              </blockquote>
              <div className="flex flex-col items-center gap-2">
                <div className="w-14 h-14 rounded-full overflow-hidden ring-2 ring-accent/40 bg-accent-light flex items-center justify-center">
                  <span className="text-xl font-bold text-accent">SW</span>
                </div>
                <cite className="not-italic text-center">
                  <span className="block text-m font-bold text-white">
                    Sol Weiss
                  </span>
                  <span className="block text-s text-white/60">
                    CEO, Advantech Solutions
                  </span>
                </cite>
              </div>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════
            ONBOARDING DETAIL
        ════════════════════════════════════════ */}
        <section className="section-l bg-white">
          <div className="inner-section">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-20 items-center">
              <div className="relative rounded-2xl overflow-hidden shadow-xl h-80 lg:h-96">
                <Image
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80"
                  alt="Seamless customer onboarding process"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="flex flex-col gap-6">
                <span className="eyebrow">Stress-Free Onboarding</span>
                <h2 className="heading-l font-bold text-primary">
                  Offload onboarding — and prevent glitches
                </h2>
                <p className="text-l text-ink-muted leading-relaxed">
                  Our 6-point onboarding process catches integration problems
                  before they happen. We audit their old systems and equipment,
                  handle all the technical details, cancel old providers, and
                  order required circuits and equipment.
                </p>
                <ul className="flex flex-col gap-3">
                  {[
                    "Audit old systems + equipment",
                    "Cancel old providers on the client's behalf",
                    "Order and configure all required circuits & equipment",
                    "1-week average porting time — 4× faster than standard",
                    "Full switch with zero downtime, zero drama",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-ink-muted text-m"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5 text-accent mt-0.5 shrink-0"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════
            BECOME A PARTNER FORM
        ════════════════════════════════════════ */}
        <section id="partner" className="section-l bg-light-gray">
          <div className="inner-section">
            <div className="max-w-2xl mx-auto">
              <div className="text-center mb-10">
                <span className="eyebrow mb-3 block">Apply Now</span>
                <h2 className="heading-l font-bold text-primary">
                  Become a JetWave partner
                </h2>
                <p className="text-l text-ink-muted mt-4">
                  Fill out the form and we&apos;ll reach out within one business
                  day to walk you through the program.
                </p>
              </div>

              <div className="card-bordered p-8">
                <form className="flex flex-col gap-5" action="#" method="POST">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label
                        htmlFor="p-first-name"
                        className="text-s font-semibold text-ink"
                      >
                        First Name <span className="text-accent">*</span>
                      </label>
                      <input
                        id="p-first-name"
                        name="first_name"
                        type="text"
                        required
                        placeholder="John"
                        className="w-full border border-border rounded-lg px-4 py-3 text-m text-ink placeholder-ink-muted/50 focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent transition"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label
                        htmlFor="p-last-name"
                        className="text-s font-semibold text-ink"
                      >
                        Last Name <span className="text-accent">*</span>
                      </label>
                      <input
                        id="p-last-name"
                        name="last_name"
                        type="text"
                        required
                        placeholder="Smith"
                        className="w-full border border-border rounded-lg px-4 py-3 text-m text-ink placeholder-ink-muted/50 focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent transition"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="p-company"
                      className="text-s font-semibold text-ink"
                    >
                      Company Name <span className="text-accent">*</span>
                    </label>
                    <input
                      id="p-company"
                      name="company"
                      type="text"
                      required
                      placeholder="Your Company"
                      className="w-full border border-border rounded-lg px-4 py-3 text-m text-ink placeholder-ink-muted/50 focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent transition"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label
                        htmlFor="p-email"
                        className="text-s font-semibold text-ink"
                      >
                        Email <span className="text-accent">*</span>
                      </label>
                      <input
                        id="p-email"
                        name="email"
                        type="email"
                        required
                        placeholder="john@example.com"
                        className="w-full border border-border rounded-lg px-4 py-3 text-m text-ink placeholder-ink-muted/50 focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent transition"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label
                        htmlFor="p-phone"
                        className="text-s font-semibold text-ink"
                      >
                        Phone
                      </label>
                      <input
                        id="p-phone"
                        name="phone"
                        type="tel"
                        placeholder="(555) 000-0000"
                        className="w-full border border-border rounded-lg px-4 py-3 text-m text-ink placeholder-ink-muted/50 focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent transition"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="p-message"
                      className="text-s font-semibold text-ink"
                    >
                      Tell us about your business
                    </label>
                    <textarea
                      id="p-message"
                      name="message"
                      rows={4}
                      placeholder="How many clients do you work with? What industry are they in?"
                      className="w-full border border-border rounded-lg px-4 py-3 text-m text-ink placeholder-ink-muted/50 focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent transition resize-none"
                    />
                  </div>

                  <div className="flex items-start gap-3 bg-light-gray rounded-lg p-4">
                    <input
                      id="p-optin"
                      name="optin"
                      type="checkbox"
                      required
                      className="mt-1 w-4 h-4 accent-accent shrink-0"
                    />
                    <label htmlFor="p-optin" className="text-s text-ink-muted">
                      <span className="font-semibold text-ink">
                        I Accept <span className="text-accent">*</span>
                      </span>{" "}
                      — By submitting, you authorize JetWave Services to contact
                      you via email and SMS. You may unsubscribe at any time.
                      See our{" "}
                      <a
                        href="https://www.jetwaveservices.com/privacypolicy/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-accent hover:underline"
                      >
                        Privacy Policy
                      </a>
                      .
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="btn btn-accent btn-lg w-full"
                  >
                    Apply to Partner Program
                  </button>
                </form>
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
              Have questions before applying?
            </h2>
            <p className="text-l text-white/85 max-w-xl">
              Talk to our partner team directly — we&apos;ll walk you through
              commissions, onboarding, and what to expect from day one.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact-us" className="btn btn-primary btn-lg">
                Contact Us
              </Link>
              <a
                href="tel:800-700-7778"
                className="btn btn-outline-white btn-lg"
              >
                Call 800-700-7778
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
