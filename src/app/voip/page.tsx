import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LeadForm from "@/components/LeadForm";

/* ──────────────────────────────────────────────────────────────
   Why Jetwave VoIP — 4 value cards
────────────────────────────────────────────────────────────── */
const whyVoip = [
  {
    title: "No Installation Costs",
    body: "Set-up is free. Use your own phones and devices. No expensive hardware to purchase before you start.",
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
          d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
  {
    title: "Easy to Scale",
    body: "Add lines or upgrade your system as needed — in just one phone call. Grow at your own pace with no hassle.",
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
          d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
        />
      </svg>
    ),
  },
  {
    title: "No Contract Needed",
    body: "Cancel anytime with month-to-month options. Or save up to 15% on an annual contract. Your choice.",
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
    title: "Transparent Per-Line Billing",
    body: "Easily understand and break down your phone costs. No surprises. No hidden fees. You pay what you're quoted.",
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
          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
        />
      </svg>
    ),
  },
];

/* ──────────────────────────────────────────────────────────────
   Feature showcase — 6 key capabilities
────────────────────────────────────────────────────────────── */
const featuresShowcase = [
  {
    title: "Auto-Attendant",
    body: "Eliminate the receptionist with easy-to-create automated phone menus. So customers get to the right department with no bother.",
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
          d="M8 9l4-4 4 4m0 6l-4 4-4-4"
        />
      </svg>
    ),
  },
  {
    title: "Custom Scheduling",
    body: "Create schedules for business hours, after-hours, and holidays. Your system automatically adapts based on date and time.",
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
          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
        />
      </svg>
    ),
  },
  {
    title: "FindMe + FollowMe",
    body: "Calls ring or forward to up to 5 devices so you never miss a call. Schedule forwards at specific times or after several rings.",
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
    title: "Meeting Manager",
    body: "Host webinars and HD video conferences. Offer remote support to your team and customers. In just one click.",
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
          d="M15 10l4.553-2.069A1 1 0 0121 8.82v6.361a1 1 0 01-1.447.894L15 14M3 8a2 2 0 012-2h8a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z"
        />
      </svg>
    ),
  },
  {
    title: "Any Device. Any Media.",
    body: "Use the desktop and mobile app to call, text, chat, or video call. Make and receive calls from any device — all from your business line.",
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
          d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
        />
      </svg>
    ),
  },
  {
    title: "Fax + Voicemail to Email",
    body: "Send and receive faxes from your inbox or portal. Get voicemails transcribed — along with a recording — by text or email.",
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
];

/* ──────────────────────────────────────────────────────────────
   Full feature list
────────────────────────────────────────────────────────────── */
const allFeatures = [
  "Free Number Porting",
  "Caller ID",
  "Hold Music",
  "Unlimited Conferencing",
  "Advanced Call Analytics",
  "Call Recording",
  "Custom Greetings",
  "Advanced Call Queue",
  "Call Routing",
  "Speed Dial",
  "Call-blocking Blacklist",
  "Call Screening",
  "Voicemail Transcription",
  "Missed Call Email Notifications",
  "Multi-user General Voicemail",
  "Online Fax",
  "Auto-Attendant",
  "FindMe + FollowMe",
  "Meeting Manager",
  "Mobile App",
];

export default function VoipPage() {
  return (
    <>
      <Header />
      <main>
        {/* ════════════════════════════════════════
            HERO
        ════════════════════════════════════════ */}
        <section className="relative flex items-center overflow-hidden min-h-120">
          <Image
            src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1920&q=80"
            alt="Team using VoIP and collaboration tools"
            fill
            className="object-cover object-center"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 hero-overlay" />
          <div className="inner-section relative w-full py-24 md:py-28">
            <div className="max-w-2xl flex flex-col gap-6">
              <span className="eyebrow text-accent">
                VoIP &amp; Internet-Based Phone Systems
              </span>
              <h1 className="heading-xl font-bold text-white leading-tight">
                Jetwave <span className="text-accent">VoIP Phone System</span>
              </h1>
              <p className="text-l text-white/80 leading-relaxed">
                Communicate better than ever with integrated team messaging,
                video conferencing, call forwarding, and more — all from one
                powerful, easy-to-use platform.
              </p>
              <ul className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-5 text-white/90 text-m font-medium">
                {[
                  "30+ features & powerful app",
                  "Unlimited 24/7 US support",
                  "Quick, convenient set-up",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <svg
                      className="w-5 h-5 text-accent shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
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
            WHY JETWAVE VOIP — 4 CARDS
        ════════════════════════════════════════ */}
        <section className="section-l bg-white">
          <div className="inner-section">
            <div className="text-center mb-14">
              <p className="eyebrow mb-3">Why Jetwave VoIP?</p>
              <h2 className="heading-l font-bold text-primary">
                Modern communications. Zero complexity.
              </h2>
              <p className="text-l mt-4 max-w-2xl mx-auto text-ink-muted">
                Switch to VoIP with no interruptions, no hardware headaches, and
                a system that just works — from day one.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {whyVoip.map((card) => (
                <div
                  key={card.title}
                  className="card-bordered p-7 flex flex-col gap-4 hover:shadow-md transition-shadow"
                >
                  <div className="w-12 h-12 rounded-xl bg-accent-light text-accent flex items-center justify-center">
                    {card.icon}
                  </div>
                  <h3 className="heading-s font-bold text-primary">
                    {card.title}
                  </h3>
                  <p className="text-m text-ink-muted">{card.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════
            FEATURES SHOWCASE — IMAGE SPLIT
        ════════════════════════════════════════ */}
        <section className="section-l bg-light-gray">
          <div className="inner-section">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-16 items-center">
              {/* Left: image */}
              <div className="relative">
                <Image
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=700&q=80"
                  alt="Team on VoIP video conference call"
                  width={600}
                  height={480}
                  className="rounded-2xl object-cover w-full shadow-xl"
                />
                {/* Floating tag */}
                <div className="absolute -top-5 -right-5 bg-white rounded-2xl px-6 py-4 shadow-xl border border-border">
                  <p className="text-xs font-bold uppercase tracking-wider mb-0.5 text-ink-muted">
                    Features included
                  </p>
                  <p className="heading-s font-extrabold text-primary">
                    30+ Features
                  </p>
                </div>
              </div>

              {/* Right: 6 feature cards */}
              <div className="flex flex-col gap-5">
                <div>
                  <p className="eyebrow mb-2">What You Get</p>
                  <h2 className="heading-l font-bold text-primary">
                    Automate anything. Answer from anywhere.
                  </h2>
                  <p className="text-l mt-3 text-ink-muted leading-relaxed">
                    See data and analytics in real-time, and call or answer from
                    any device, on any network.
                  </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
                  {featuresShowcase.map((feat) => (
                    <div key={feat.title} className="flex gap-3">
                      <div className="shrink-0 w-10 h-10 rounded-xl bg-accent-light text-accent flex items-center justify-center mt-0.5">
                        {feat.icon}
                      </div>
                      <div>
                        <h3 className="font-bold text-sm text-primary mb-0.5">
                          {feat.title}
                        </h3>
                        <p className="text-s text-ink-muted">{feat.body}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════
            FULL FEATURE LIST
        ════════════════════════════════════════ */}
        <section className="section-l bg-white">
          <div className="inner-section">
            <div className="text-center mb-10">
              <p className="eyebrow mb-3">Everything Included</p>
              <h2 className="heading-l font-bold text-primary">
                The full feature set — at no extra cost.
              </h2>
              <p className="text-l mt-4 max-w-2xl mx-auto text-ink-muted">
                Every Jetwave VoIP plan includes the full suite of
                communications tools your business needs out of the box.
              </p>
            </div>

            <div className="bg-light-gray rounded-2xl p-8">
              <div className="flex flex-wrap gap-3">
                {allFeatures.map((f) => (
                  <span
                    key={f}
                    className="flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-border text-s font-medium text-ink shadow-2xs"
                  >
                    <svg
                      className="w-3.5 h-3.5 text-accent shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {f}
                  </span>
                ))}
              </div>
              <p className="text-s text-ink-muted mt-5 italic">And more…</p>
            </div>

            {/* Devices callout */}
            <div className="mt-10 rounded-2xl border border-border p-8 flex flex-col md:flex-row items-center justify-between gap-6 bg-white">
              <div>
                <h3 className="heading-s font-bold text-primary mb-2">
                  Need supported devices or equipment?
                </h3>
                <p className="text-m text-ink-muted">
                  We stock and supply compatible phones, headsets, and hardware.
                  Ask us what works best for your setup.
                </p>
              </div>
              <Link
                href="/get-a-quote"
                className="btn btn-primary btn-lg shrink-0"
              >
                Request Equipment Info
              </Link>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════
            CTA BANNER
        ════════════════════════════════════════ */}
        <section className="section-l bg-off-white">
          <div className="inner-section">
            <div className="rounded-3xl overflow-hidden relative cta-banner-bg">
              <div className="absolute -right-20 -top-20 w-80 h-80 rounded-full opacity-20 bg-white" />
              <div className="absolute -left-10 -bottom-24 w-64 h-64 rounded-full opacity-10 bg-white" />
              <div className="relative p-12 md:p-16 flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="flex flex-col gap-3 text-center md:text-left">
                  <p className="text-sm font-bold uppercase tracking-widest text-white/75">
                    30-Day Free Trial
                  </p>
                  <h2 className="heading-l font-extrabold text-white">
                    Try your VoIP system free.
                    <br />
                    No credit card required.
                  </h2>
                  <p className="text-l text-white/85">
                    Experience a robust, feature-rich and absolutely dependable
                    VoIP system risk-free. Walk away if it&apos;s not for you.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row md:flex-col gap-4 shrink-0">
                  <Link
                    href="/try-us-free"
                    className="btn btn-lg font-extrabold whitespace-nowrap bg-white text-accent border-white"
                  >
                    Get Service Free Now
                  </Link>
                  <Link
                    href="/get-a-quote"
                    className="btn btn-outline-white btn-lg whitespace-nowrap"
                  >
                    Get a Quote
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════
            LEAD FORM SECTION
        ════════════════════════════════════════ */}
        <section id="quote" className="section-xl bg-light-gray">
          <div className="inner-section">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 xl:gap-20 items-start">
              {/* Left: copy */}
              <div className="flex flex-col gap-8">
                <div>
                  <p className="eyebrow mb-3">Get a Quote</p>
                  <h2 className="heading-l font-bold text-primary leading-tight">
                    Get a robust, dependable VoIP system.
                  </h2>
                  <p className="text-l text-ink-muted mt-5 leading-relaxed">
                    With 24/7 instant US support — so whatever happens, your
                    phone and internet run glitch-free. Fill out the form and
                    one of our specialists will be in touch within 1 business
                    hour.
                  </p>
                </div>

                {/* Testimonial */}
                <figure className="bg-white rounded-2xl p-7 border border-border shadow-sm flex flex-col gap-4">
                  <svg
                    className="w-7 h-7 text-accent opacity-60"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                  <blockquote>
                    <p className="text-m leading-relaxed text-ink-muted">
                      &ldquo;I used to waste 3–4 hours on things that Jetwave
                      resolves in 15 minutes. All it takes is a couple of rings
                      to get a competent engineer on the phone, and my
                      problem&apos;s fixed.&rdquo;
                    </p>
                  </blockquote>
                  <figcaption className="flex items-center gap-3 pt-4 border-t border-border">
                    <div className="w-10 h-10 rounded-full bg-accent-light text-accent flex items-center justify-center font-bold text-sm shrink-0">
                      KR
                    </div>
                    <div>
                      <p className="font-bold text-sm text-primary">
                        Kendall Reber
                      </p>
                      <p className="text-xs text-ink-muted">
                        CEO, Garland Communications
                      </p>
                    </div>
                  </figcaption>
                </figure>
              </div>

              {/* Right: form */}
              <LeadForm />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
