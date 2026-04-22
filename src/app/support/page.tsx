import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

/* ──────────────────────────────────────────────────────────────
   Support channels
────────────────────────────────────────────────────────────── */
const supportChannels = [
  {
    title: "Call Us",
    value: "800-700-7778",
    description: "Speak to a certified US engineer in under 3 minutes.",
    href: "tel:800-700-7778",
    hrefLabel: "Call Now",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-8 h-8"
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
    title: "Email Support",
    value: "support@jetwaveservices.com",
    description: "Send us a message and we'll respond within 1 business hour.",
    href: "mailto:support@jetwaveservices.com",
    hrefLabel: "Send Email",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-8 h-8"
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
    title: "Web Portal",
    value: "support.jetwaveservices.com",
    description:
      "Access our helpdesk to track tickets, view status updates, and manage your account.",
    href: "https://support.jetwaveservices.com",
    hrefLabel: "Open Portal",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-8 h-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.8}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
        />
      </svg>
    ),
  },
  {
    title: "Remote Session",
    value: "Let us in remotely",
    description:
      "Allow a Jetwave technician to connect to your device for hands-on troubleshooting.",
    href: "https://my.anydesk.com/download/sEF5cmJz/JW_Support_Client.exe",
    hrefLabel: "Start Remote Session",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-8 h-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.8}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
  },
];

/* ──────────────────────────────────────────────────────────────
   Support differentiators
────────────────────────────────────────────────────────────── */
const differentiators = [
  {
    title: "Under 3-Minute Response",
    body: "When you call, a certified engineer picks up — not an automated system. We resolve most issues on the first call.",
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
          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
  {
    title: "US-Based Engineers Only",
    body: "Every support call is handled by a certified US technician who knows your system and your business.",
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
    title: "One Dedicated Account Rep",
    body: "You&apos;ll always deal with the same rep who knows your account. No re-explaining, no starting over.",
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
          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
        />
      </svg>
    ),
  },
  {
    title: "No Issue Too Complex",
    body: "We don&apos;t stop until the problem is solved — no matter how unusual or technically demanding. No extra charge.",
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
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
      </svg>
    ),
  },
];

/* ──────────────────────────────────────────────────────────────
   FAQ items
────────────────────────────────────────────────────────────── */
const faqs = [
  {
    q: "How quickly can I reach support?",
    a: "Typically under 3 minutes. Call 800-700-7778 any time — 24 hours a day, 7 days a week. A certified US technician will pick up and begin solving your issue immediately.",
  },
  {
    q: "Do you offer remote support sessions?",
    a: "Yes. Download our remote session client and a Jetwave technician will securely connect to your device to troubleshoot and resolve issues hands-on.",
  },
  {
    q: "What if my issue is very complex or unusual?",
    a: "We don't give up. Our engineers stay on the problem — even for hours — until it's resolved. We've solved issues that competitors said were impossible, at no extra charge.",
  },
  {
    q: "Will I always deal with the same support rep?",
    a: "Yes. You&apos;ll have a dedicated account manager who already knows your system and business. No explaining your setup from scratch every time.",
  },
  {
    q: "How do I open a support ticket?",
    a: "Visit support.jetwaveservices.com to open a ticket, check status updates, or access your account. You can also email support@jetwaveservices.com or call 800-700-7778.",
  },
];

export default function SupportPage() {
  return (
    <>
      <Header />
      <main>
        {/* ════════════════════════════════════════
            PAGE HERO
        ════════════════════════════════════════ */}
        <section className="relative flex items-center overflow-hidden min-h-80">
          <Image
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1920&q=80"
            alt="Jetwave support team ready to help"
            fill
            className="object-cover object-center"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 hero-overlay" />
          <div className="inner-section relative w-full py-20 md:py-28">
            <div className="max-w-3xl flex flex-col gap-5">
              <span className="eyebrow text-accent">Support</span>
              <h1 className="heading-xl font-bold text-white leading-tight">
                Every ring answered.{" "}
                <span className="text-accent">Every problem solved.</span>
              </h1>
              <p className="text-l text-white/80 max-w-2xl leading-relaxed">
                Call us any time. A certified US engineer picks up in under 3
                minutes and resolves your issue on the first call — no
                runaround, no scripts, no waiting.
              </p>
              <div className="flex flex-wrap gap-4 pt-2">
                <a href="tel:800-700-7778" className="btn btn-accent btn-lg">
                  Call Now: 800-700-7778
                </a>
                <a
                  href="https://support.jetwaveservices.com"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-outline-white btn-lg"
                >
                  Open a Ticket
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════
            CONTACT CHANNELS — 4-UP CARDS
        ════════════════════════════════════════ */}
        <section className="section-l bg-white">
          <div className="inner-section">
            <div className="text-center mb-14">
              <span className="eyebrow mb-3 block">How to Reach Us</span>
              <h2 className="heading-l font-bold text-primary">
                Four ways to get help — whichever works best for you.
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {supportChannels.map((ch) => (
                <div
                  key={ch.title}
                  className="card-bordered p-7 flex flex-col gap-4 hover:shadow-md transition-shadow"
                >
                  <div className="w-14 h-14 rounded-xl bg-accent-light text-accent flex items-center justify-center">
                    {ch.icon}
                  </div>
                  <div className="flex flex-col gap-1">
                    <h3 className="heading-s font-bold text-primary">
                      {ch.title}
                    </h3>
                    <p className="text-s font-semibold text-accent break-all">
                      {ch.value}
                    </p>
                  </div>
                  <p className="text-m text-ink-muted flex-1">
                    {ch.description}
                  </p>
                  <a
                    href={ch.href}
                    target={ch.href.startsWith("http") ? "_blank" : undefined}
                    rel={ch.href.startsWith("http") ? "noreferrer" : undefined}
                    className="btn btn-outline btn-sm self-start mt-auto"
                  >
                    {ch.hrefLabel}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════
            WHAT MAKES OUR SUPPORT DIFFERENT
        ════════════════════════════════════════ */}
        <section className="section-l bg-light-gray">
          <div className="inner-section">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-20 items-center">
              <div className="relative rounded-2xl overflow-hidden shadow-xl h-80 lg:h-96">
                <Image
                  src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&q=80"
                  alt="Jetwave technician solving a client issue"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="flex flex-col gap-6">
                <span className="eyebrow">Our Support Promise</span>
                <h2 className="heading-l font-bold text-primary">
                  Not the support you&apos;re used to.
                </h2>
                <p className="text-l text-ink-muted leading-relaxed">
                  Other providers trap you in automated menus, pass you to
                  department after department, and still don&apos;t solve your
                  problem. Jetwave is different — we stay on the line until
                  it&apos;s fixed.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {differentiators.map((d) => (
                    <div key={d.title} className="flex items-start gap-3">
                      <div className="mt-1 shrink-0 w-10 h-10 rounded-lg bg-accent-light text-accent flex items-center justify-center">
                        {d.icon}
                      </div>
                      <div>
                        <p className="text-m font-bold text-primary leading-snug">
                          {d.title}
                        </p>
                        <p
                          className="text-s text-ink-muted mt-1"
                          dangerouslySetInnerHTML={{ __html: d.body }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════
            TESTIMONIAL
        ════════════════════════════════════════ */}
        <section className="section-l testimonials-section-bg">
          <div className="inner-section">
            <div className="max-w-3xl mx-auto text-center flex flex-col gap-7 items-center">
              <span className="eyebrow text-accent">What Clients Say</span>
              <blockquote className="heading-s font-normal text-white/90 leading-relaxed">
                &ldquo;With Jetwave, everything works. And when I ring the
                phone, they answer — and actually give me the help I need first
                time round. I also love that their rates don&apos;t change, and
                I actually pay what they quoted with no hidden fees.&rdquo;
              </blockquote>
              <div className="flex flex-col items-center gap-2">
                <div className="w-14 h-14 rounded-full overflow-hidden ring-2 ring-accent/40">
                  <Image
                    src="https://images.unsplash.com/photo-1560250097-0dc05ae1a8b8?w=80&h=80&q=80&fit=crop"
                    alt="Sol Weiss"
                    width={56}
                    height={56}
                    className="object-cover w-full h-full"
                  />
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
            FAQ
        ════════════════════════════════════════ */}
        <section className="section-l bg-white">
          <div className="inner-section">
            <div className="text-center mb-14">
              <span className="eyebrow mb-3 block">FAQ</span>
              <h2 className="heading-l font-bold text-primary">
                Common support questions.
              </h2>
            </div>
            <div className="max-w-3xl mx-auto flex flex-col gap-5">
              {faqs.map((faq, i) => (
                <div key={i} className="card-bordered p-6 flex flex-col gap-3">
                  <p className="text-m font-bold text-primary">{faq.q}</p>
                  <p
                    className="text-m text-ink-muted"
                    dangerouslySetInnerHTML={{ __html: faq.a }}
                  />
                </div>
              ))}
            </div>

            {/* Inline action area */}
            <div className="mt-14 text-center flex flex-col items-center gap-4">
              <p className="text-l text-ink-muted">
                Still have a question? We&apos;re here 24/7.
              </p>
              <a href="tel:800-700-7778" className="btn btn-accent btn-lg">
                Call 800-700-7778
              </a>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════
            CTA BANNER
        ════════════════════════════════════════ */}
        <section className="cta-banner-bg section-l">
          <div className="inner-section text-center flex flex-col items-center gap-7">
            <h2 className="heading-l font-bold text-white max-w-2xl">
              Not a Jetwave customer yet?
            </h2>
            <p className="text-l text-white/85 max-w-xl">
              Switch to a provider that actually picks up. Try us free for 30
              days or get a custom quote in minutes.
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
