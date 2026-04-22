import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const contactInfo = [
  {
    label: "Phone",
    value: "800-700-7778",
    href: "tel:800-700-7778",
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
  {
    label: "Email",
    value: "info@jetwaveservices.com",
    href: "mailto:info@jetwaveservices.com",
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
          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
  },
  {
    label: "USA Headquarters",
    value: "1325 Franklin Avenue, Suite 255\nGarden City, NY 11530",
    href: "https://maps.google.com/?q=1325+Franklin+Avenue+Garden+City+NY",
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
          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    ),
  },
  {
    label: "Canada Office",
    value: "6700 Ave Du Parc\nMontreal QC H2S 3K6",
    href: "https://maps.google.com/?q=6700+Ave+Du+Parc+Montreal+QC",
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
          d="M3 21l1.9-5.7a8.5 8.5 0 113.8 3.8L3 21zM17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
        />
      </svg>
    ),
  },
];

export default function ContactUsPage() {
  return (
    <>
      <Header />
      <main>
        {/* ════════════════════════════════════════
            PAGE HERO
        ════════════════════════════════════════ */}
        <section className="relative flex items-center overflow-hidden min-h-80">
          <Image
            src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1920&q=80"
            alt="Contact our team"
            fill
            className="object-cover object-center"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 hero-overlay" />
          <div className="inner-section relative w-full py-20 md:py-28">
            <div className="max-w-3xl flex flex-col gap-5">
              <span className="eyebrow text-accent">Get In Touch</span>
              <h1 className="heading-xl font-bold text-white leading-tight">
                Talk to a real engineer.{" "}
                <span className="text-accent">Right now.</span>
              </h1>
              <p className="text-l text-white/80 max-w-2xl leading-relaxed">
                Tell us about your business and we&apos;ll match you with the
                right solution — or just call us at{" "}
                <a
                  href="tel:800-700-7778"
                  className="text-accent font-semibold hover:underline"
                >
                  800-700-7778
                </a>
                .
              </p>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════
            CONTACT CARDS
        ════════════════════════════════════════ */}
        <section className="section-l bg-light-gray">
          <div className="inner-section">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {contactInfo.map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  target={c.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    c.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="card-bordered p-6 flex flex-col gap-4 hover:shadow-md transition-shadow group"
                >
                  <div className="w-12 h-12 rounded-xl bg-accent-light text-accent flex items-center justify-center group-hover:bg-accent group-hover:text-white transition-colors">
                    {c.icon}
                  </div>
                  <div className="flex flex-col gap-1">
                    <p className="text-s font-bold text-ink-muted uppercase tracking-wider">
                      {c.label}
                    </p>
                    <p className="text-m font-semibold text-primary whitespace-pre-line leading-snug">
                      {c.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════
            CONTACT FORM + SIDE INFO
        ════════════════════════════════════════ */}
        <section className="section-l bg-white">
          <div className="inner-section">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 xl:gap-16 items-start">
              {/* Left info panel */}
              <div className="lg:col-span-2 flex flex-col gap-8">
                <div className="flex flex-col gap-4">
                  <span className="eyebrow">Contact Us Now</span>
                  <h2 className="heading-l font-bold text-primary">
                    We respond within minutes — not days.
                  </h2>
                  <p className="text-l text-ink-muted leading-relaxed">
                    Our certified US engineers are available 24/7. Whether you
                    need a quote, technical help, or just a quick question
                    answered — we pick up.
                  </p>
                </div>

                <div className="flex flex-col gap-5">
                  {[
                    {
                      icon: "⚡",
                      title: "Same-Day Response",
                      body: "Reach a live engineer in under 3 minutes, any time of day.",
                    },
                    {
                      icon: "🇺🇸",
                      title: "US-Based Support",
                      body: "Every support call is answered by a certified domestic engineer.",
                    },
                    {
                      icon: "🔧",
                      title: "Custom Solutions",
                      body: "No script-reading. We dig into your actual setup and solve it.",
                    },
                  ].map((item) => (
                    <div key={item.title} className="flex gap-4 items-start">
                      <span className="text-xl mt-0.5">{item.icon}</span>
                      <div>
                        <p className="text-m font-bold text-primary">
                          {item.title}
                        </p>
                        <p className="text-s text-ink-muted">{item.body}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="bg-light-gray rounded-2xl p-6">
                  <p className="text-s font-bold text-ink-muted uppercase tracking-wider mb-2">
                    Or call us directly
                  </p>
                  <a
                    href="tel:800-700-7778"
                    className="heading-m font-bold text-primary hover:text-accent transition-colors"
                  >
                    800-700-7778
                  </a>
                </div>
              </div>

              {/* Right: Form */}
              <div className="lg:col-span-3 card-bordered p-8">
                <h3 className="heading-s font-bold text-primary mb-6">
                  Send us a message
                </h3>
                <form className="flex flex-col gap-5" action="#" method="POST">
                  {/* Name + Company */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label
                        htmlFor="first-name"
                        className="text-s font-semibold text-ink"
                      >
                        First Name <span className="text-accent">*</span>
                      </label>
                      <input
                        id="first-name"
                        name="first_name"
                        type="text"
                        required
                        placeholder="John"
                        className="w-full border border-border rounded-lg px-4 py-3 text-m text-ink placeholder-ink-muted/50 focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent transition"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label
                        htmlFor="last-name"
                        className="text-s font-semibold text-ink"
                      >
                        Last Name
                      </label>
                      <input
                        id="last-name"
                        name="last_name"
                        type="text"
                        placeholder="Smith"
                        className="w-full border border-border rounded-lg px-4 py-3 text-m text-ink placeholder-ink-muted/50 focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent transition"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="company"
                      className="text-s font-semibold text-ink"
                    >
                      Company
                    </label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      placeholder="Acme Corp"
                      className="w-full border border-border rounded-lg px-4 py-3 text-m text-ink placeholder-ink-muted/50 focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent transition"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label
                        htmlFor="email"
                        className="text-s font-semibold text-ink"
                      >
                        Email <span className="text-accent">*</span>
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        placeholder="john@example.com"
                        className="w-full border border-border rounded-lg px-4 py-3 text-m text-ink placeholder-ink-muted/50 focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent transition"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label
                        htmlFor="phone"
                        className="text-s font-semibold text-ink"
                      >
                        Phone
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="(555) 000-0000"
                        className="w-full border border-border rounded-lg px-4 py-3 text-m text-ink placeholder-ink-muted/50 focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent transition"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="message"
                      className="text-s font-semibold text-ink"
                    >
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      placeholder="Tell us about your business and what you need..."
                      className="w-full border border-border rounded-lg px-4 py-3 text-m text-ink placeholder-ink-muted/50 focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent transition resize-none"
                    />
                  </div>

                  {/* OPT-IN */}
                  <div className="flex items-start gap-3 bg-light-gray rounded-lg p-4">
                    <input
                      id="optin"
                      name="optin"
                      type="checkbox"
                      required
                      className="mt-1 w-4 h-4 accent-accent shrink-0"
                    />
                    <label htmlFor="optin" className="text-s text-ink-muted">
                      <span className="font-semibold text-ink">
                        I Accept <span className="text-accent">*</span>
                      </span>{" "}
                      — By submitting your contact information, you authorize
                      JetWave Services to contact you via email and SMS. You may
                      unsubscribe at any time. By submitting you also agree to
                      our{" "}
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
                    Send Message
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
              Prefer to start with a quote?
            </h2>
            <p className="text-l text-white/85 max-w-xl">
              Get a free, no-obligation quote tailored to your business — or try
              our VoIP system free for 30 days.
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
