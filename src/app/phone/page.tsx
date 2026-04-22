import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LeadForm from "@/components/LeadForm";

/* ──────────────────────────────────────────────────────────────
   Phone system types
────────────────────────────────────────────────────────────── */
const systemTypes = [
  "SIP Trunking",
  "Traditional + Digital PRIs",
  "Multi-line Audio + Video Conferencing",
  "IP PBXs",
  "Call Center",
];

/* ──────────────────────────────────────────────────────────────
   Why Voice — 3 selling cards
────────────────────────────────────────────────────────────── */
const whyVoice = [
  {
    title: "Bigger Businesses Save",
    body: "More cost-effective options for businesses with 15+ phones. Bundle lines, reduce per-seat costs, and simplify billing.",
    img: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&q=80",
    imgAlt: "Business office phones",
  },
  {
    title: "Internet-Free System",
    body: "Works even when service in your location is down. Traditional PSTN lines keep you connected no matter what.",
    img: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=600&q=80",
    imgAlt: "Reliable phone connection",
  },
  {
    title: "Crisp Clarity",
    body: "No dropped calls or unclear conversations. HD voice quality and reliable connections your customers will notice.",
    img: "https://images.unsplash.com/photo-1516387938699-a93567ec168e?w=600&q=80",
    imgAlt: "Crystal clear phone call",
  },
];

/* ──────────────────────────────────────────────────────────────
   Full feature list
────────────────────────────────────────────────────────────── */
const features = [
  "Free Number Porting",
  "Caller ID",
  "Unlimited Conferencing",
  "Advanced Voice Analytics",
  "Call Recording",
  "Custom Greetings",
  "Call Queue",
  "Call Routing",
  "Online Fax",
  "Call-blocking Blacklist",
  "Speed Dial",
  "Online User Portal",
  "Local, National & International Plans",
  "24/7 US Support",
];

/* ──────────────────────────────────────────────────────────────
   System includes — icon cards
────────────────────────────────────────────────────────────── */
const systemIncludes = [
  {
    title: "Online User Portal",
    body: "Easily update voicemail recordings, phone menus, hold music and other settings. In one click.",
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
          d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
  },
  {
    title: "Local, National & International Plans",
    body: "Save with a plan customized to your calling needs — whether local, coast-to-coast, or global.",
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
          d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
  {
    title: "Advanced Voice Analytics",
    body: "Gain real-time insights into call volume, duration, and performance to optimize your team's operations.",
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
  },
  {
    title: "Call Recording & Queue",
    body: "Record calls for training and compliance. Manage inbound call queues to reduce hold times.",
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
          d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
        />
      </svg>
    ),
  },
];

export default function PhonePage() {
  return (
    <>
      <Header />
      <main>
        {/* ════════════════════════════════════════
            HERO
        ════════════════════════════════════════ */}
        <section className="relative flex items-center overflow-hidden min-h-120">
          <Image
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80"
            alt="Business phone system in modern office"
            fill
            className="object-cover object-center"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 hero-overlay" />
          <div className="inner-section relative w-full py-24 md:py-28">
            <div className="max-w-2xl flex flex-col gap-6">
              <span className="eyebrow text-accent">
                Traditional Phone Service
              </span>
              <h1 className="heading-xl font-bold text-white leading-tight">
                Jetwave Traditional{" "}
                <span className="text-accent">Phone Service</span>
              </h1>
              <p className="text-l text-white/80 leading-relaxed">
                Keep your team and customers connected with reliable service and
                crisp clarity. Backed by 24/7 US support and a system built
                specifically for your business.
              </p>
              <ul className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-5 text-white/90 text-m font-medium">
                {[
                  "Robust calling features",
                  "24/7 US support",
                  "Quick, convenient installation",
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
                  Try Us Free
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════
            WHY VOICE — 3 CARDS
        ════════════════════════════════════════ */}
        <section className="section-l bg-white">
          <div className="inner-section">
            <div className="text-center mb-14">
              <p className="eyebrow mb-3">Why Voice?</p>
              <h2 className="heading-l font-bold text-primary">
                A phone system that actually works — every time.
              </h2>
              <p className="text-l mt-4 max-w-2xl mx-auto text-ink-muted">
                Save on a free cost analysis to determine the most
                cost-effective system or bundle for your business.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {whyVoice.map((card) => (
                <div
                  key={card.title}
                  className="card group flex flex-col overflow-hidden"
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={card.img}
                      alt={card.imgAlt}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 service-img-overlay" />
                    <span className="absolute bottom-4 left-5 heading-s font-bold text-white">
                      {card.title}
                    </span>
                  </div>
                  <div className="p-6 flex-1">
                    <p className="text-m text-ink-muted">{card.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════
            SYSTEM TYPES — PILL TAGS + IMAGE
        ════════════════════════════════════════ */}
        <section className="section-l bg-light-gray">
          <div className="inner-section">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left: copy + pills */}
              <div className="flex flex-col gap-7">
                <div>
                  <p className="eyebrow mb-3">System Options</p>
                  <h2 className="heading-l font-bold text-primary">
                    The right phone solution for every business.
                  </h2>
                  <p className="text-l mt-4 text-ink-muted leading-relaxed">
                    From small offices to enterprise call centers, we configure
                    the perfect setup — using the system type that best fits
                    your size and workflow.
                  </p>
                </div>
                <div className="flex flex-wrap gap-3">
                  {systemTypes.map((type) => (
                    <span
                      key={type}
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-accent-light text-accent text-s font-semibold"
                    >
                      <svg
                        className="w-3.5 h-3.5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {type}
                    </span>
                  ))}
                </div>
                <div>
                  <Link href="/get-a-quote" className="btn btn-primary btn-lg">
                    Get a Free Cost Analysis
                  </Link>
                </div>
              </div>

              {/* Right: image */}
              <div className="relative">
                <Image
                  src="https://images.unsplash.com/photo-1568992687947-868a62a9f521?w=700&q=80"
                  alt="Business phone system options"
                  width={600}
                  height={460}
                  className="rounded-2xl object-cover w-full shadow-xl"
                />
                {/* Stat card */}
                <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl px-6 py-5 shadow-xl border border-border">
                  <p className="text-xs font-bold uppercase tracking-wider mb-1 text-ink-muted">
                    For businesses with
                  </p>
                  <p className="heading-m font-extrabold text-primary">
                    15+ Phones
                  </p>
                  <p className="text-xs mt-1 text-ink-muted">
                    Save more on every line
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════
            ALL SYSTEMS INCLUDE — ICON GRID
        ════════════════════════════════════════ */}
        <section className="section-l bg-white">
          <div className="inner-section">
            <div className="text-center mb-14">
              <p className="eyebrow mb-3">What&apos;s Included</p>
              <h2 className="heading-l font-bold text-primary">
                All Jetwave Voice systems include
              </h2>
              <p className="text-l mt-4 max-w-2xl mx-auto text-ink-muted">
                Every plan comes packed with features that keep your
                communications running smoothly — at no extra charge.
              </p>
            </div>

            {/* Icon cards — 4 up */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {systemIncludes.map((item) => (
                <div
                  key={item.title}
                  className="card-bordered p-6 flex flex-col gap-4 hover:shadow-md transition-shadow"
                >
                  <div className="w-12 h-12 rounded-xl bg-accent-light text-accent flex items-center justify-center">
                    {item.icon}
                  </div>
                  <h3 className="heading-xs font-bold text-primary">
                    {item.title}
                  </h3>
                  <p className="text-s text-ink-muted">{item.body}</p>
                </div>
              ))}
            </div>

            {/* Full feature pill list */}
            <div className="bg-light-gray rounded-2xl p-8">
              <p className="text-s font-bold uppercase tracking-wider text-ink-muted mb-5">
                Plus all these features:
              </p>
              <div className="flex flex-wrap gap-3">
                {features.map((f) => (
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
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════
            TESTIMONIAL
        ════════════════════════════════════════ */}
        <section className="section-l overflow-hidden testimonials-section-bg">
          <div className="inner-section">
            <div className="max-w-3xl mx-auto text-center flex flex-col items-center gap-6">
              <svg
                className="w-10 h-10 text-accent opacity-60"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <blockquote>
                <p className="heading-s font-normal text-white/90 leading-relaxed">
                  &ldquo;I lost a lot of customers with other carriers because
                  of lost or dropped calls — and painful, slow, issue
                  resolution. With Jetwave, everything works. And when I ring
                  the phone, they answer — and they actually give me the help I
                  need first time round. I also love that their rates don&apos;t
                  change. I pay exactly what they quoted with no hidden
                  fees.&rdquo;
                </p>
              </blockquote>
              <div className="flex items-center gap-4 pt-4 border-t border-white/15 w-full justify-center">
                <div className="w-12 h-12 rounded-full bg-accent-light text-accent flex items-center justify-center font-bold text-sm shrink-0">
                  SW
                </div>
                <div className="text-left">
                  <p className="font-bold text-white">Sol Weiss</p>
                  <p className="text-s text-white/60">
                    CEO, Advantech Solutions
                  </p>
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
                    Save on a reliable, feature-rich voice system.
                  </h2>
                  <p className="text-l text-ink-muted mt-5 leading-relaxed">
                    With 24/7 instant US support — so whatever happens, your
                    phone lines run glitch-free. Fill out the form and one of
                    our specialists will be in touch within 1 business hour.
                  </p>
                </div>

                {/* Key stats */}
                <div className="grid grid-cols-2 gap-4">
                  {[
                    {
                      value: "30–50%",
                      label: "Average savings vs. big carriers",
                    },
                    { value: "<2 wks", label: "Setup time from sign-up" },
                    { value: "24/7", label: "US live tech support" },
                    { value: "37", label: "Carrier redundancy" },
                  ].map((stat) => (
                    <div
                      key={stat.label}
                      className="bg-white rounded-xl p-5 border border-border flex flex-col gap-1"
                    >
                      <span className="heading-m font-extrabold text-accent leading-none">
                        {stat.value}
                      </span>
                      <span className="text-s text-ink-muted">
                        {stat.label}
                      </span>
                    </div>
                  ))}
                </div>
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
