import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LeadForm from "@/components/LeadForm";

/* ──────────────────────────────────────────────────────────────
   Key internet features — 3 cards
────────────────────────────────────────────────────────────── */
const internetFeatures = [
  {
    title: "Speeds Up to 100 Gb",
    body: "Choose fiber or cable internet. Get multiple point-to-point circuits. So speed never holds your team back.",
    img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&q=80",
    imgAlt: "High-speed fiber internet data center",
  },
  {
    title: "Powerful CyberSecurity",
    body: "Keep your business and data safe online with private servers, cloud backup, VPN, and security monitoring.",
    img: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=600&q=80",
    imgAlt: "Cybersecurity and data protection",
  },
  {
    title: "Team + Web Collaboration",
    body: "Supercharge team efficiency. Get work done fast in the cloud and keep everyone on the same page, anywhere.",
    img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&q=80",
    imgAlt: "Remote team collaborating in the cloud",
  },
];

/* ──────────────────────────────────────────────────────────────
   System options — pill tags
────────────────────────────────────────────────────────────── */
const systemOptions = [
  "Fiber Internet Circuits",
  "Cable Internet Circuits",
  "VPN",
  "Point-To-Point Circuits",
  "SD-WAN",
];

/* ──────────────────────────────────────────────────────────────
   All plans include — feature cards
────────────────────────────────────────────────────────────── */
const planIncludes = [
  {
    title: "WiFi Hotspots",
    body: "Access to millions of hotspots in the US and Canada — so your team stays connected on the road.",
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
          d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0"
        />
      </svg>
    ),
  },
  {
    title: "No Data Caps or Overage Fees",
    body: "Stream, upload, download, and run cloud apps without worrying about usage limits or surprise billing.",
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
          d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"
        />
      </svg>
    ),
  },
  {
    title: "Hassle-Free Switchover",
    body: "Quick set-up and flexible, convenient installation times. We handle the transition so you don't have to.",
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
    title: "Static IP Address",
    body: "A permanent IP for running multiple servers, using VPN applications, or enabling web-based video cameras.",
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
          d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
        />
      </svg>
    ),
  },
];

export default function InternetPage() {
  return (
    <>
      <Header />
      <main>
        {/* ════════════════════════════════════════
            HERO
        ════════════════════════════════════════ */}
        <section className="relative flex items-center overflow-hidden min-h-120">
          <Image
            src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=1920&q=80"
            alt="High-speed business internet and network infrastructure"
            fill
            className="object-cover object-center"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 hero-overlay" />
          <div className="inner-section relative w-full py-24 md:py-28">
            <div className="max-w-2xl flex flex-col gap-6">
              <span className="eyebrow text-accent">
                Internet, Data &amp; Cloud Services
              </span>
              <h1 className="heading-xl font-bold text-white leading-tight">
                Blazing-Fast{" "}
                <span className="text-accent">Jetwave Internet</span>
              </h1>
              <p className="text-l text-white/80 leading-relaxed">
                Work remotely or on the cloud quicker than ever with unlimited
                internet speeds. No data caps, no overage fees, and the
                reliability your business demands.
              </p>
              <ul className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-5 text-white/90 text-m font-medium">
                {[
                  "Unlimited data & no overage fees",
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
            VALUE PROP — NO LIMITS STATEMENT
        ════════════════════════════════════════ */}
        <section className="section-l bg-white">
          <div className="inner-section">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left: text */}
              <div className="flex flex-col gap-6">
                <p className="eyebrow">Unlimited Performance</p>
                <h2 className="heading-l font-bold text-primary">
                  Because with Jetwave internet, there are no limits.
                </h2>
                <p className="text-l text-ink-muted leading-relaxed">
                  Process transactions speedily. Run multiple cloud-based apps.
                  Stream, upload and download content. Browse content-rich sites
                  — all without throttling or slowdowns.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { value: "100 Gb", label: "Max available speed" },
                    { value: "99.99%", label: "Uptime guarantee" },
                    { value: "Unlimited", label: "Data — no caps" },
                    { value: "24/7", label: "US live tech support" },
                  ].map((stat) => (
                    <div
                      key={stat.label}
                      className="bg-light-gray rounded-xl p-5 flex flex-col gap-1"
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

              {/* Right: image */}
              <div className="relative">
                <Image
                  src="https://images.unsplash.com/photo-1573164713988-8665fc963095?w=700&q=80"
                  alt="Professional working fast on cloud-connected laptop"
                  width={600}
                  height={460}
                  className="rounded-2xl object-cover w-full shadow-xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════
            KEY FEATURES — 3 IMAGE CARDS
        ════════════════════════════════════════ */}
        <section className="section-l bg-light-gray">
          <div className="inner-section">
            <div className="text-center mb-14">
              <p className="eyebrow mb-3">What You Get</p>
              <h2 className="heading-l font-bold text-primary">
                Everything your business needs. Online, anytime.
              </h2>
              <p className="text-l mt-4 max-w-2xl mx-auto text-ink-muted">
                Speed, security, and seamless collaboration — all built into
                every Jetwave internet plan.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {internetFeatures.map((card) => (
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
            SYSTEM OPTIONS + ALL PLANS INCLUDE
        ════════════════════════════════════════ */}
        <section className="section-l bg-white">
          <div className="inner-section">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 xl:gap-20 items-start">
              {/* Left: system options */}
              <div className="flex flex-col gap-7">
                <div>
                  <p className="eyebrow mb-3">Multiple System Options</p>
                  <h2 className="heading-l font-bold text-primary">
                    Increased reliability &amp; flexibility.
                  </h2>
                  <p className="text-l mt-4 text-ink-muted leading-relaxed">
                    We design and configure your connection topology to maximize
                    redundancy, performance, and security — no matter your
                    industry or size.
                  </p>
                </div>
                <div className="flex flex-wrap gap-3">
                  {systemOptions.map((opt) => (
                    <span
                      key={opt}
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
                      {opt}
                    </span>
                  ))}
                </div>
                <Link
                  href="/get-a-quote"
                  className="btn btn-primary btn-lg self-start"
                >
                  Get a Free Assessment
                </Link>
              </div>

              {/* Right: all plans include cards */}
              <div className="flex flex-col gap-5">
                <div>
                  <p className="eyebrow mb-3">All Internet Plans Include</p>
                  <h2 className="heading-m font-bold text-primary">
                    Built-in essentials at every tier.
                  </h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {planIncludes.map((item) => (
                    <div
                      key={item.title}
                      className="card-bordered p-5 flex flex-col gap-3 hover:shadow-md transition-shadow"
                    >
                      <div className="w-10 h-10 rounded-xl bg-accent-light text-accent flex items-center justify-center">
                        {item.icon}
                      </div>
                      <h3 className="heading-xs font-bold text-primary">
                        {item.title}
                      </h3>
                      <p className="text-s text-ink-muted">{item.body}</p>
                    </div>
                  ))}
                </div>
              </div>
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
                    Work faster and safer
                    <br />
                    with reliable internet.
                  </h2>
                  <p className="text-l text-white/85">
                    Experience Jetwave risk-free for 30 days. If it&apos;s not
                    the best business internet you&apos;ve used, walk away — no
                    questions asked.
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
                    Work faster and safer with reliable internet.
                  </h2>
                  <p className="text-l text-ink-muted mt-5 leading-relaxed">
                    With 24/7 instant US support — so whatever happens, your
                    internet runs glitch-free. Fill out the form and one of our
                    specialists will be in touch within 1 business hour.
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
                      &ldquo;After Superstorm Sandy, everyone else in our
                      industrial complex was out for 3 weeks. Power lines were
                      down, electric cables ripped to shreds — but Jetwave got
                      us up just four hours later. That&apos;s pretty much
                      perfection.&rdquo;
                    </p>
                  </blockquote>
                  <figcaption className="flex items-center gap-3 pt-4 border-t border-border">
                    <div className="w-10 h-10 rounded-full bg-accent-light text-accent flex items-center justify-center font-bold text-sm shrink-0">
                      AJ
                    </div>
                    <div>
                      <p className="font-bold text-sm text-primary">
                        Aaron Junger
                      </p>
                      <p className="text-xs text-ink-muted">
                        CIO, Shiel Medical Lab
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
