import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LeadForm from "@/components/LeadForm";

/* ──────────────────────────────────────────────────────────────
   Partner / trust logo data
────────────────────────────────────────────────────────────── */
const partners = [
  { src: "/brand icons/b-h@3x.png", alt: "B&H Photo Video" },
  { src: "/brand icons/qtms@3x.png", alt: "QTMS by AAA Communications" },
  {
    src: "/brand icons/statewide-central@3x.png",
    alt: "Statewide Central Station",
  },
  { src: "/brand icons/comcast@3x.png", alt: "Comcast" },
  { src: "/brand icons/rccs@3x.jpg", alt: "RCCS" },
  { src: "/brand icons/adorama@3x.png", alt: "Adorama" },
];

/* ──────────────────────────────────────────────────────────────
   Testimonials
────────────────────────────────────────────────────────────── */
const testimonials = [
  {
    quote:
      "I've tried many providers, and I thought good service was difficult or impossible to get. With Jetwave, they've got my back. No more runaround, no more having to go through 4 technicians to get to somebody who actually can help.",
    name: "Suzanne Smolier",
    role: "CEO, Telautomation Services",
    photo:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&q=80&fit=crop",
  },
  {
    quote:
      "After Superstorm Sandy, everyone else in our industrial complex was out for 3 weeks. Power lines were down, electric cables ripped to shreds — but Jetwave got us up just four hours later. That's pretty much perfection.",
    name: "Aaron Junger",
    role: "CIO, Shiel Medical Lab",
    photo:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&q=80&fit=crop",
  },
  {
    quote:
      "I used to waste 3–4 hours on things that Jetwave resolves in 15 minutes. All it takes is a couple of rings to get a competent engineer on the phone, and my problem's fixed.",
    name: "Kendall Reber",
    role: "CEO, Garland Communications",
    photo:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&q=80&fit=crop",
  },
];

/* ──────────────────────────────────────────────────────────────
   Industries
────────────────────────────────────────────────────────────── */
const industries = [
  {
    label: "Healthcare",
    body: "Streamline communication and improve the patient experience.",
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
    label: "Manufacturing",
    body: "Keep teams connected and get more done, faster.",
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
    label: "Legal Services",
    body: "Deliver a more responsive client experience with faster, clearer communication.",
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
          d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
        />
      </svg>
    ),
  },
  {
    label: "Insurance Firms",
    body: "Improve policyholder support with timely updates and smoother claims communication.",
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
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
      </svg>
    ),
  },
  {
    label: "Financial Services",
    body: "Support better client experiences across banking and accounting services.",
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
    label: "Education & Public Sector",
    body: "Reliable, cost-effective communications for schools, universities, and government offices.",
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
          d="M12 14l9-5-9-5-9 5 9 5z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
        />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 14V8" />
      </svg>
    ),
  },
];

/* ──────────────────────────────────────────────────────────────
   Why-Jetwave feature cards
────────────────────────────────────────────────────────────── */
const features = [
  {
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
          d="M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0-6C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"
        />
      </svg>
    ),
    title: "30–50% Savings",
    body: "Slash costs with a cost-effective system custom-created for your business needs.",
  },
  {
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
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
    ),
    title: "1-Step Set-Up",
    body: "Switch providers with minimal involvement. We deal with your old provider and get you up and running in under 2 weeks.",
  },
  {
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
    title: "Robust, All-in-One System",
    body: "Integrate a full set of advanced features. Automate communications, increase team efficiency, and scale as you grow.",
  },
  {
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
    title: "Zero Downtime",
    body: "Your system is backed by 37 carriers, 20 data centers worldwide, 3 switch platforms, and 24/7 monitoring.",
  },
  {
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
          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
        />
      </svg>
    ),
    title: "One Personal Rep",
    body: "Never get trapped in an automated system. Deal with the same manager each time — who knows you and your system.",
  },
  {
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
          d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
        />
      </svg>
    ),
    title: "Powerful App",
    body: "Easy-to-use desktop & mobile app. Communicate from anywhere, change settings in one click, message or video-call your team.",
  },
];

/* ──────────────────────────────────────────────────────────────
   Service cards
────────────────────────────────────────────────────────────── */
const services = [
  {
    title: "Phone",
    description: "Traditional landline phone systems",
    body: "Reliable, feature-rich business phone systems with crystal-clear call quality, advanced call management, and seamless integration with your existing workflows.",
    href: "/phone",
    img: "https://images.unsplash.com/photo-1586772002130-b0f3daa6288b?w=600&q=80",
    imgAlt: "Business phone system",
  },
  {
    title: "VoIP",
    description: "VoIP, SIP and internet-based phone systems",
    body: "Modern VoIP solutions that slash your phone bill while adding powerful features — automated menus, call forwarding, video calling, and a full team communications app.",
    href: "/voip",
    img: "https://images.unsplash.com/photo-1614624532983-4ce03382d63d?w=600&q=80",
    imgAlt: "VoIP communication system",
  },
  {
    title: "Internet",
    description: "Internet, data and cloud services",
    body: "Business-grade internet and cloud services with failover backup, 99.99% uptime, and scalable bandwidth that grows with your business.",
    href: "/internet",
    img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&q=80",
    imgAlt: "Business internet and data center",
  },
];

/* ──────────────────────────────────────────────────────────────
   Hero stat highlights
────────────────────────────────────────────────────────────── */
const heroStats = [
  { value: "100%", label: "Reliability" },
  { value: "99.99%", label: "Uptime" },
  { value: "<3 min", label: "US Support Response" },
];

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        {/* ════════════════════════════════════════
            HERO SECTION
        ════════════════════════════════════════ */}
        <section className="relative flex items-center overflow-hidden">
          {/* Background image */}
          <Image
            src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1920&q=80"
            alt="Modern business environment"
            fill
            className="object-cover object-center"
            sizes="100vw"
            priority
          />
          {/* Deep navy overlay — strong left, fades to accent right */}
          <div className="absolute inset-0 hero-overlay" />
          <div className="inner-section relative w-full py-24 md:py-32">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-12 xl:gap-20 items-center">
              {/* ── Left: copy + CTAs ── */}
              <div className="flex flex-col gap-7">
                <span className="eyebrow text-accent">
                  Trusted by 1–500 Employee Businesses
                </span>
                <h1 className="heading-xl font-bold text-white leading-tight">
                  When big brand providers are down,{" "}
                  <span className="text-accent">
                    Jetwave carries you through.
                  </span>
                </h1>
                <p className="text-l text-white/80 max-w-xl leading-relaxed">
                  The most reliable phone + internet provider for businesses
                  that can&apos;t afford downtime. Better rates, 24/7 US live
                  support, and minute-by-minute system monitoring.
                </p>
                <div className="flex flex-wrap gap-4">
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

              {/* ── Right: Stats Grid ── */}
              <div className="hidden lg:flex flex-col gap-3 items-stretch">
                <div className="grid grid-cols-2 gap-3">
                  {heroStats.map(
                    (s, idx) =>
                      idx < 2 && (
                        <div
                          key={s.label}
                          className="rounded-xl p-5 bg-primary-dark/80 stat-glass border border-white/10 flex flex-col items-center justify-center gap-2 min-h-32"
                        >
                          <span className="heading-m font-bold text-accent leading-none">
                            {s.value}
                          </span>
                          <span className="text-xs font-semibold uppercase tracking-wider text-white/60">
                            {s.label}
                          </span>
                        </div>
                      ),
                  )}
                </div>
                <div className="rounded-xl p-5 bg-primary-dark/80 stat-glass border border-white/10 flex flex-col items-center justify-center gap-2 min-h-32">
                  <span className="heading-m font-bold text-accent leading-none">
                    {heroStats[2].value}
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-wider text-white/60">
                    {heroStats[2].label}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════
            PARTNER MARQUEE
        ════════════════════════════════════════ */}
        <section className="py-10 border-y border-border bg-off-white overflow-hidden">
          <div className="inner-section mb-5">
            <p className="text-center text-xs font-bold uppercase tracking-widest text-ink-muted">
              Trusted by leading businesses
            </p>
          </div>
          <div className="relative overflow-hidden">
            <div className="marquee-track">
              {[...partners, ...partners].map((p, i) => (
                <div
                  key={`${p.alt}-${i}`}
                  className="shrink-0 flex items-center justify-center px-6"
                  style={{ height: 56 }}
                >
                  <Image
                    src={p.src}
                    alt={p.alt}
                    width={120}
                    height={48}
                    className="h-10 w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════
            HIGH-LEVEL BENEFITS (3-UP)
        ════════════════════════════════════════ */}
        <section className="section-l bg-white">
          <div className="inner-section">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
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
                        d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
                      />
                    </svg>
                  ),
                  title: "24/7 US Live Support",
                  body: "Speak to a certified US technician in 3 minutes or less and get problems resolved instantly.",
                },
                {
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
                        d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  ),
                  title: "Feature-Rich Systems",
                  body: "Set up automated menus, call forwarding, view call data, message + video-call team members, make calls via the app and more.",
                },
                {
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
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                  ),
                  title: "99.99% Uptime",
                  body: "Stay connected with backup systems and temporary solutions — even during local power outages or natural disasters.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="card-bordered p-8 flex flex-col gap-4 hover:shadow-md transition-shadow"
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
            SERVICES SECTION
        ════════════════════════════════════════ */}
        <section className="section-l bg-light-gray">
          <div className="inner-section">
            <div className="text-center mb-14">
              <p className="eyebrow mb-3">What We Offer</p>
              <h2 className="heading-l font-bold text-primary">
                Simple enough for anyone. Powerful enough for pros.
              </h2>
              <p className="text-l mt-4 max-w-2xl mx-auto text-ink-muted">
                Save on a customized system built for your business.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {services.map((s) => (
                <div
                  key={s.title}
                  className="card group flex flex-col overflow-hidden"
                >
                  <div className="relative overflow-hidden h-52">
                    <Image
                      src={s.img}
                      alt={s.imgAlt}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 service-img-overlay" />
                    <span className="absolute bottom-4 left-5 heading-s font-bold text-white">
                      {s.title}
                    </span>
                  </div>
                  <div className="flex flex-col gap-4 p-6 flex-1">
                    <p className="text-s font-semibold uppercase tracking-wide text-accent">
                      {s.description}
                    </p>
                    <p className="text-m flex-1 text-ink-muted">{s.body}</p>
                    <Link
                      href={s.href}
                      className="btn btn-outline btn-sm self-start mt-auto"
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════
            INDUSTRIES
        ════════════════════════════════════════ */}
        <section className="section-l bg-white">
          <div className="inner-section">
            <div className="text-center mb-12">
              <p className="eyebrow mb-3">Industries We Serve</p>
              <h2 className="heading-l font-bold text-primary">
                A custom system built for your industry.
              </h2>
              <p className="text-l mt-4 max-w-2xl mx-auto text-ink-muted">
                We build systems specific to your industry needs — from
                healthcare to finance, manufacturing to education.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {industries.map((ind) => (
                <div
                  key={ind.label}
                  className="card-bordered p-7 flex flex-col gap-4 hover:shadow-md transition-shadow"
                >
                  <div className="w-12 h-12 rounded-xl bg-accent-light text-accent flex items-center justify-center shrink-0">
                    {ind.icon}
                  </div>
                  <h3 className="heading-s font-bold text-primary">
                    {ind.label}
                  </h3>
                  <p className="text-m text-ink-muted">{ind.body}</p>
                  <Link
                    href="/industries"
                    className="text-s font-semibold text-accent hover:underline mt-auto"
                  >
                    Learn more →
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════
            WHY JETWAVE — 6-FEATURE GRID
        ════════════════════════════════════════ */}
        <section className="section-l bg-light-gray">
          <div className="inner-section">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Left: image */}
              <div className="relative">
                <Image
                  src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=700&q=80"
                  alt="Business team using Jetwave system"
                  width={600}
                  height={480}
                  className="rounded-2xl object-cover w-full h-120 shadow-xl"
                />
                {/* Floating stat card */}
                <div className="absolute -top-6 -right-6 bg-white rounded-2xl px-6 py-5 shadow-xl border border-border">
                  <p className="text-xs font-bold uppercase tracking-wider mb-1 text-ink-muted">
                    Network Coverage
                  </p>
                  <p className="heading-m font-extrabold text-primary">
                    37 Carriers
                  </p>
                  <p className="text-xs mt-1 text-ink-muted">
                    20 data centers worldwide
                  </p>
                </div>
              </div>

              {/* Right: feature list */}
              <div className="flex flex-col gap-6">
                <p className="eyebrow">Why Choose Jetwave</p>
                <h2 className="heading-l font-bold text-primary">
                  Everything your business needs. Nothing you don&apos;t.
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-2">
                  {features.map((f) => (
                    <div key={f.title} className="flex gap-4">
                      <div className="shrink-0 w-12 h-12 rounded-xl bg-accent-light text-accent flex items-center justify-center mt-0.5">
                        {f.icon}
                      </div>
                      <div>
                        <h3 className="font-bold text-base mb-1 text-primary">
                          {f.title}
                        </h3>
                        <p className="text-s text-ink-muted">{f.body}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex flex-wrap gap-4 mt-4">
                  <Link href="/get-a-quote" className="btn btn-primary btn-lg">
                    Get a Quote
                  </Link>
                  <Link href="/about-us" className="btn btn-outline btn-lg">
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════
            TESTIMONIALS
        ════════════════════════════════════════ */}
        <section className="section-l overflow-hidden testimonials-section-bg">
          <div className="inner-section">
            <div className="text-center mb-14">
              <p className="eyebrow mb-3 text-accent">What Our Clients Say</p>
              <h2 className="heading-l font-bold text-white">
                Don&apos;t take our word for it.
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
              {testimonials.map((t) => (
                <div
                  key={t.name}
                  className="testimonial-card rounded-2xl p-8 flex flex-col gap-5"
                >
                  {/* Quote mark */}
                  <svg
                    className="w-8 h-8 opacity-50 text-accent"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                  <p className="text-m leading-relaxed flex-1 text-white/85">
                    {t.quote}
                  </p>
                  <div className="flex items-center gap-3 pt-2 border-t border-white/15">
                    <Image
                      src={t.photo}
                      alt={t.name}
                      width={40}
                      height={40}
                      className="w-10 h-10 rounded-full object-cover shrink-0"
                    />
                    <div>
                      <p className="font-bold text-sm text-white">{t.name}</p>
                      <p className="text-xs text-white/60">{t.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════
            FREE TRIAL CTA BANNER
        ════════════════════════════════════════ */}
        <section className="section-l bg-off-white">
          <div className="inner-section">
            <div className="rounded-3xl overflow-hidden relative cta-banner-bg">
              {/* Background circles */}
              <div className="absolute -right-20 -top-20 w-80 h-80 rounded-full opacity-20 bg-white" />
              <div className="absolute -left-10 -bottom-24 w-64 h-64 rounded-full opacity-10 bg-white" />

              <div className="relative p-12 md:p-16 flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="flex flex-col gap-3 text-center md:text-left">
                  <p className="text-sm font-bold uppercase tracking-widest text-white/75">
                    30-Day Free Trial
                  </p>
                  <h2 className="heading-l font-extrabold text-white">
                    Test-drive your new system.
                    <br />
                    No credit card required.
                  </h2>
                  <p className="text-l text-white/85">
                    Experience Jetwave risk-free for 30 days. If it&apos;s not
                    the best business communications system you&apos;ve used,
                    walk away — no questions asked.
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
            LEAD GENERATION FORM
        ════════════════════════════════════════ */}
        <section className="section-xl bg-light-gray">
          <div className="inner-section">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 xl:gap-20 items-start">
              {/* Left: copy + testimonial */}
              <div className="flex flex-col gap-8">
                <div>
                  <p className="eyebrow mb-3">Get in Touch</p>
                  <h2 className="heading-l font-bold text-primary leading-tight">
                    Don&apos;t risk losing business or wasting team time.
                  </h2>
                  <p className="text-l text-ink-muted mt-5 leading-relaxed">
                    Get a robust, feature-rich and absolutely dependable system
                    — and 24/7 instant US support. So whatever happens, your
                    phone and internet run glitch-free.
                  </p>
                </div>

                {/* Sol Weiss testimonial */}
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
                      I lost a lot of customers with other carriers because of
                      lost or dropped calls — and painful, slow issue
                      resolution. With Jetwave, everything works. When I ring
                      the phone, they answer — and they give me the answer I
                      need first time round. My customers love that their rates
                      don&apos;t change; they actually pay what was quoted with
                      no hidden fees.
                    </p>
                  </blockquote>
                  <figcaption className="flex items-center gap-3 pt-4 border-t border-border">
                    <div className="w-10 h-10 rounded-full bg-accent-light text-accent flex items-center justify-center font-bold text-sm shrink-0">
                      SW
                    </div>
                    <div>
                      <p className="font-bold text-sm text-primary">
                        Sol Weiss
                      </p>
                      <p className="text-xs text-ink-muted">
                        CEO, Advantech Solutions
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
