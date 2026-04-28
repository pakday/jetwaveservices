import { Fragment } from "react";
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

/* ──────────────────────────────────────────────────────────────
   Pricing plans
────────────────────────────────────────────────────────────── */
const pricingPlans = [
  {
    name: "Essentials",
    price: "Starting at $19.95",
    period: "/ mo per user",
    badge: null,
    description:
      "Core calling and admin tools for small teams getting started with VoIP.",
    highlights: [
      "Unlimited US & Canada Calling",
      "Main Company Number",
      "24×7 Customer Support",
      "Ring Groups & Basic Call Management",
    ],
    cta: "Get a Quote",
    href: "/get-a-quote",
    featured: false,
  },
  {
    name: "Pro",
    price: "Starting at $24.95",
    period: "/ mo per user",
    badge: null,
    description:
      "Mobile apps, video conferencing, and advanced calling capabilities.",
    highlights: [
      "One Direct-Dial Number Per User",
      "Desktop & Mobile Apps (iOS + Android)",
      "Video & Conference Calling",
      "Call Analytics & Leaderboards",
    ],
    cta: "Get a Quote",
    href: "/get-a-quote",
    featured: false,
  },
  {
    name: "Pro Plus",
    price: "Starting at $27.95",
    period: "/ mo per user",
    badge: "Most Popular",
    description:
      "Full-featured platform with CRM integrations, text messaging, and team chat.",
    highlights: [
      "Call Recording & Virtual Fax",
      "Find Me, Follow Me",
      "Text Messaging & Team Chat",
      "CRM Integrations (Salesforce, HubSpot & more)",
    ],
    cta: "Get a Quote",
    href: "/get-a-quote",
    featured: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "pricing",
    badge: null,
    description:
      "Tailored solutions with dedicated support for larger organizations.",
    highlights: [
      "Everything in Pro Plus",
      "Bulk SMS Packages",
      "Dedicated Account Manager",
      "Custom Onboarding & SLAs",
    ],
    cta: "Contact Us",
    href: "/contact-us",
    featured: false,
  },
];

/* ──────────────────────────────────────────────────────────────
   Feature comparison table data
────────────────────────────────────────────────────────────── */
const featureCategories: {
  category: string;
  features: { name: string; plans: boolean[] }[];
}[] = [
  {
    category: "Key Calling Features",
    features: [
      {
        name: "Unlimited Calling in U.S. and Canada",
        plans: [true, true, true, true],
      },
      { name: "Low International Rates", plans: [true, true, true, true] },
      { name: "FREE Number Transfer", plans: [true, true, true, true] },
      { name: "Main Company Number", plans: [true, true, true, true] },
      {
        name: "One Direct-Dial Number Per User",
        plans: [false, true, true, true],
      },
      { name: "Easy Installation", plans: [true, true, true, true] },
    ],
  },
  {
    category: "Administration & Support",
    features: [
      { name: "User Management Portal", plans: [true, true, true, true] },
      {
        name: "Multi-site Admin and Management",
        plans: [true, true, true, true],
      },
      { name: "Bulk User Import", plans: [true, true, true, true] },
      { name: "24×7 Customer Support", plans: [true, true, true, true] },
    ],
  },
  {
    category: "Call Management Features",
    features: [
      { name: "AI Transcriptions *", plans: [true, true, true, true] },
      { name: "Virtual Receptionist *", plans: [true, true, true, true] },
      { name: "Call Park", plans: [true, true, true, true] },
      { name: "Call Park for Desktop App", plans: [true, true, true, true] },
      { name: "Music On Hold", plans: [true, true, true, true] },
      { name: "Transfer Music", plans: [true, true, true, true] },
      { name: "Extension Dialing", plans: [true, true, true, true] },
      { name: "Extension Monitoring", plans: [true, true, true, true] },
      { name: "Call Forwarding", plans: [true, true, true, true] },
      { name: "Virtual Extensions", plans: [true, true, true, true] },
      { name: "Voicemail", plans: [true, true, true, true] },
      { name: "Call Transfer", plans: [true, true, true, true] },
      { name: "Company Directory", plans: [true, true, true, true] },
      { name: "Call Logs", plans: [true, true, true, true] },
      { name: "Conference Bridge", plans: [false, false, true, true] },
      {
        name: "Forward Calls During Device Outages",
        plans: [true, true, true, true],
      },
      { name: "Virtual Fax", plans: [false, false, true, true] },
      { name: "Distinctive Ringtones", plans: [false, true, true, true] },
      { name: "3-Way Calling", plans: [true, true, true, true] },
      { name: "Call Blocking", plans: [true, true, true, true] },
      { name: "Intercom", plans: [true, true, true, true] },
      { name: "Overhead Paging", plans: [true, true, true, true] },
      { name: "Paging Groups", plans: [true, true, true, true] },
      { name: "IP Phone Paging", plans: [true, true, true, true] },
      { name: "Flexible Numbering", plans: [true, true, true, true] },
      { name: "3-Digit Extensions", plans: [true, true, true, true] },
      { name: "Enhanced Call Blocking", plans: [false, true, true, true] },
      { name: "Voicemail Transcription", plans: [false, true, true, true] },
      { name: "Call Recording", plans: [false, false, true, true] },
      { name: "Dynamic Caller ID", plans: [false, true, true, true] },
      { name: "Hot Desking", plans: [false, true, true, true] },
      { name: "Find Me, Follow Me", plans: [false, false, true, true] },
      { name: "Shared Voicemail Boxes", plans: [false, false, true, true] },
      { name: "Call Screening", plans: [false, false, true, true] },
    ],
  },
  {
    category: "Mobility Features",
    features: [
      { name: "Desktop App for Windows", plans: [false, true, true, true] },
      { name: "Desktop App for Mac", plans: [false, true, true, true] },
      {
        name: "Desktop App for Google Chrome",
        plans: [false, true, true, true],
      },
      { name: "Mobile App for iOS", plans: [false, true, true, true] },
      { name: "Mobile App for Android", plans: [false, true, true, true] },
      { name: "Simultaneous Ring", plans: [true, true, true, true] },
      {
        name: "Voicemail-to-Email Audio Files",
        plans: [true, true, true, true],
      },
      { name: "Extension Dialing to App", plans: [false, true, true, true] },
      { name: "Call Transfer from App", plans: [false, true, true, true] },
      { name: "Virtual Fax from App", plans: [false, true, true, true] },
    ],
  },
  {
    category: "Team Collaboration",
    features: [
      { name: "Conference Calling", plans: [false, true, true, true] },
      { name: "Video Conferencing", plans: [false, true, true, true] },
      {
        name: "Microsoft Office 365 Calendar Integration",
        plans: [false, true, true, true],
      },
      { name: "Google Calendar Integration", plans: [false, true, true, true] },
      { name: "Simultaneous Screen Sharing", plans: [false, true, true, true] },
      {
        name: "Video Conferencing Recording",
        plans: [false, false, true, true],
      },
      { name: "Online Whiteboarding", plans: [false, false, true, true] },
      { name: "Team Chat", plans: [false, false, true, true] },
      { name: "Team Presence", plans: [false, false, true, true] },
    ],
  },
  {
    category: "Text Messaging",
    features: [
      { name: "Text Messaging", plans: [false, false, true, true] },
      { name: "Bulk SMS Packages", plans: [false, false, false, true] },
      { name: "Scheduled Messages", plans: [false, false, true, true] },
      { name: "Messaging Templates", plans: [false, false, true, true] },
      { name: "One-to-Many Messaging", plans: [false, false, true, true] },
    ],
  },
  {
    category: "Customer Engagement",
    features: [
      { name: "Ring Groups", plans: [true, true, true, true] },
      { name: "Caller Info Match", plans: [false, true, true, true] },
      { name: "Call Queuing", plans: [false, false, true, true] },
      { name: "Shift-to-Text", plans: [false, false, true, true] },
      { name: "Auto Dialer", plans: [false, false, true, true] },
    ],
  },
  {
    category: "Integrations",
    features: [
      { name: "Salesforce", plans: [false, false, true, true] },
      { name: "Microsoft Dynamics", plans: [false, false, true, true] },
      { name: "Zoho", plans: [false, false, true, true] },
      { name: "Freshdesk", plans: [false, false, true, true] },
      { name: "NexHealth", plans: [false, true, true, true] },
      { name: "Clio", plans: [false, false, true, true] },
      { name: "AgencyZoom", plans: [false, false, true, true] },
      { name: "HubSpot", plans: [false, false, true, true] },
      { name: "Square", plans: [false, false, true, true] },
      { name: "Jobber", plans: [false, false, true, true] },
      { name: "QuickBooks Online", plans: [false, false, true, true] },
    ],
  },
  {
    category: "Analytics",
    features: [
      { name: "Call Analytics", plans: [false, true, true, true] },
      { name: "Call Leaderboards", plans: [false, true, true, true] },
      { name: "Fax Analytics", plans: [false, true, true, true] },
    ],
  },
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
            PRICING PLANS + COMPARISON TABLE
        ════════════════════════════════════════ */}
        <section className="section-xl bg-light-gray">
          <div className="inner-section">
            {/* Header */}
            <div className="text-center mb-14">
              <p className="eyebrow mb-3">Flexible Pricing</p>
              <h2 className="heading-l font-bold text-primary">
                Plans that grow with your business.
              </h2>
              <p className="text-l mt-4 max-w-2xl mx-auto text-ink-muted">
                Every plan includes 24×7 US support and the core calling
                features your team needs. Upgrade or switch anytime — no
                penalties, no hassle.
              </p>
            </div>

            {/* Plan Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {pricingPlans.map((plan) => (
                <div
                  key={plan.name}
                  className={`card-bordered p-7 flex flex-col gap-5 relative${
                    plan.featured
                      ? " overflow-visible border-accent shadow-lg"
                      : ""
                  }`}
                  style={
                    plan.featured
                      ? {
                          boxShadow:
                            "0 0 0 2px var(--color-accent), var(--shadow-lg)",
                        }
                      : undefined
                  }
                >
                  {plan.badge && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                      <span className="bg-accent text-white text-xs font-bold py-1 px-4 rounded-full uppercase tracking-wider whitespace-nowrap">
                        {plan.badge}
                      </span>
                    </div>
                  )}

                  <div>
                    <p
                      className={`font-bold text-xs uppercase tracking-wider mb-2${
                        plan.featured ? " text-accent" : " text-ink-muted"
                      }`}
                    >
                      {plan.name}
                    </p>
                    {plan.price === "Custom" ? (
                      <p className="heading-m font-extrabold text-primary">
                        Custom Pricing
                      </p>
                    ) : (
                      <div>
                        <p className="heading-s font-extrabold text-primary leading-tight">
                          {plan.price}
                        </p>
                        <p className="text-s text-ink-muted mt-0.5">
                          {plan.period}
                        </p>
                      </div>
                    )}
                    <p className="text-s text-ink-muted mt-3 leading-relaxed">
                      {plan.description}
                    </p>
                  </div>

                  <ul className="flex flex-col gap-2.5 flex-1">
                    {plan.highlights.map((h) => (
                      <li
                        key={h}
                        className="flex items-start gap-2 text-s text-ink"
                      >
                        <svg
                          className="w-4 h-4 text-accent shrink-0 mt-0.5"
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
                        {h}
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={plan.href}
                    className={`btn btn-lg w-full text-center${
                      plan.featured ? " btn-accent" : " btn-outline"
                    }`}
                  >
                    {plan.cta}
                  </Link>
                </div>
              ))}
            </div>

            {/* Full comparison table */}
            <div>
              <h3 className="heading-s font-bold text-primary text-center mb-8">
                Compare all features
              </h3>

              <div className="overflow-x-auto rounded-2xl border border-border shadow-sm bg-white">
                <table className="w-full text-left border-collapse min-w-160">
                  <thead>
                    <tr>
                      <th className="bg-light-gray px-5 py-4 text-s font-semibold text-ink w-[42%] border-b border-border">
                        Feature
                      </th>
                      {pricingPlans.map((plan) => (
                        <th
                          key={plan.name}
                          className={`px-4 py-4 text-center text-s font-bold w-[14.5%] border-b border-border${
                            plan.featured
                              ? " bg-accent text-white"
                              : " bg-light-gray text-primary"
                          }`}
                        >
                          {plan.name}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {featureCategories.map((cat) => (
                      <Fragment key={cat.category}>
                        {/* Category row */}
                        <tr key={`cat-${cat.category}`}>
                          <td
                            colSpan={5}
                            className="px-5 py-3 text-xs font-bold uppercase tracking-wider text-primary bg-primary/5 border-t-2 border-border"
                          >
                            {cat.category}
                          </td>
                        </tr>

                        {/* Feature rows */}
                        {cat.features.map((feat, idx) => (
                          <tr
                            key={feat.name}
                            className={
                              idx % 2 === 0 ? "bg-white" : "bg-off-white"
                            }
                          >
                            <td className="px-5 py-3 text-s text-ink border-b border-border">
                              {feat.name}
                            </td>
                            {feat.plans.map((included, pIdx) => (
                              <td
                                key={pIdx}
                                className={`px-4 py-3 text-center border-b border-border${
                                  pricingPlans[pIdx].featured
                                    ? " bg-accent-light/50"
                                    : ""
                                }`}
                              >
                                {included ? (
                                  <svg
                                    className="w-4 h-4 text-accent mx-auto"
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
                                ) : (
                                  <span className="text-border font-medium select-none">
                                    —
                                  </span>
                                )}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </Fragment>
                    ))}
                  </tbody>
                </table>
              </div>

              <p className="text-s text-ink-muted mt-4 text-center italic">
                * AI Transcriptions and Virtual Receptionist require a minimum
                of 10 registrations.
              </p>
            </div>

            {/* Bottom CTA */}
            <div className="mt-12 text-center">
              <p className="text-m text-ink-muted mb-5">
                Not sure which plan fits your team? Our specialists can help.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link href="/get-a-quote" className="btn btn-accent btn-lg">
                  Get a Quote
                </Link>
                <Link href="/contact-us" className="btn btn-outline btn-lg">
                  Talk to Sales
                </Link>
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
