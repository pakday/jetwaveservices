import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

/* ──────────────────────────────────────────────────────────────
   Case studies
────────────────────────────────────────────────────────────── */
const caseStudies = [
  {
    industry: "Healthcare",
    type: "Wireless Bridge",
    title: "Medical Patient Care Facility",
    subtitle: "Wireless Bridge Restores Connectivity After Flooding",
    desc: "How a medical facility bypassed an 8-week repair timeline with a rapid wireless bridge solution.",
    img: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=700&q=80",
    href: "https://www.jetwaveservices.com/case-study/medical-facility/",
  },
  {
    industry: "Emergency Services",
    type: "Phone Migration",
    title: "Disaster Help Center",
    subtitle: "Zero-Downtime Phone System Migration",
    desc: "How a critical disaster response center migrated their entire phone system without a single minute of downtime.",
    img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=700&q=80",
    href: "https://www.jetwaveservices.com/case-study/disaster-help-center/",
  },
  {
    industry: "Creative Agency",
    type: "UCaaS",
    title: "Event Management Agency",
    subtitle: "Cloud Unified Communications",
    desc: "How a growing creative agency eliminated 'phone tag' with mobile-first unified communications.",
    img: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=700&q=80",
    href: "https://www.jetwaveservices.com/case-study/event-management-agency/",
  },
  {
    industry: "Financial Services",
    type: "Voice Infrastructure",
    title: "Quicken",
    subtitle: "Scalable Voice Infrastructure",
    desc: "How a leading personal finance platform gained enterprise-grade voice reliability while simplifying operations.",
    img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=700&q=80",
    href: "https://www.jetwaveservices.com/case-study/quicken/",
  },
  {
    industry: "Legal Services",
    type: "Cloud PBX",
    title: "Commercial Law Firm",
    subtitle: "Cloud PBX for Multi-Site Operations",
    desc: "How a 170-person law firm eliminated costly phone outages and empowered mobile work across 12+ offices.",
    img: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=700&q=80",
    href: "https://www.jetwaveservices.com/case-study/commercial-law-firm/",
  },
  {
    industry: "Construction",
    type: "Hosted PBX",
    title: "Clayborn Construction",
    subtitle: "Hosted PBX Cost Reduction",
    desc: "How a 200+ employee contractor cut phone costs by 80% and eliminated call chaos with smart routing.",
    img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=700&q=80",
    href: "https://www.jetwaveservices.com/case-study/clayborn-construction/",
  },
];

/* ──────────────────────────────────────────────────────────────
   Downloadable resources
────────────────────────────────────────────────────────────── */
const downloads = [
  {
    title: "VoIP Vendor Evaluation Scorecard",
    desc: "Comprehensive scorecard to evaluate and compare VoIP vendors for your business.",
    icon: "📋",
    href: "https://www.jetwaveservices.com/resources/voip-evaluation-scorecard/",
  },
  {
    title: "VoIP Reliability & Downtime Playbook",
    desc: "Strategies to maintain uptime and handle outages in business-critical environments.",
    icon: "📘",
    href: "https://www.jetwaveservices.com/resources/reliability-playbook/",
  },
  {
    title: "VoIP Security, Access & Offboarding Checklist",
    desc: "Baseline controls, access management, and offboarding steps for your team.",
    icon: "🔐",
    href: "https://www.jetwaveservices.com/resources/security-checklist/",
  },
  {
    title: "Partner-Ready Intake Reporting Pack",
    desc: "KPI definitions and templates to report intake performance by rep.",
    icon: "📊",
    href: "https://www.jetwaveservices.com/resources/intake-reporting/",
  },
  {
    title: "VoIP Integration Requirements Workbook",
    desc: "Define must-have integrations and create vendor test plans.",
    icon: "🔗",
    href: "https://www.jetwaveservices.com/resources/integration-workbook/",
  },
];

export default function ResourcesPage() {
  return (
    <>
      <Header />
      <main>
        {/* ════════════════════════════════════════
            PAGE HERO
        ════════════════════════════════════════ */}
        <section className="relative flex items-center overflow-hidden min-h-80">
          <Image
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1920&q=80"
            alt="Business resources and tools"
            fill
            className="object-cover object-center"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 hero-overlay" />
          <div className="inner-section relative w-full py-20 md:py-28">
            <div className="max-w-3xl flex flex-col gap-5">
              <span className="eyebrow text-accent">Resources</span>
              <h1 className="heading-xl font-bold text-white leading-tight">
                Tools &amp; case studies to{" "}
                <span className="text-accent">sharpen your decisions.</span>
              </h1>
              <p className="text-l text-white/80 max-w-2xl leading-relaxed">
                Tools, templates, and case studies to help your organization
                make smarter VoIP decisions and optimize your communications
                infrastructure.
              </p>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════
            CASE STUDIES
        ════════════════════════════════════════ */}
        <section className="section-l bg-white">
          <div className="inner-section">
            <div className="text-center mb-14">
              <span className="eyebrow mb-3 block">Case Studies</span>
              <h2 className="heading-l font-bold text-primary">
                How JetWave solves real business problems
              </h2>
              <p className="text-l text-ink-muted mt-4 max-w-2xl mx-auto">
                Discover how JetWave has helped businesses solve their most
                critical communication and connectivity challenges.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {caseStudies.map((cs) => (
                <a
                  key={cs.title}
                  href={cs.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card overflow-hidden flex flex-col group hover:-translate-y-1 transition-transform duration-300"
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={cs.img}
                      alt={cs.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 service-img-overlay" />
                    <div className="absolute top-4 left-4 flex gap-2">
                      <span className="bg-accent text-white text-xs font-bold px-3 py-1 rounded-full">
                        {cs.industry}
                      </span>
                      <span className="bg-white/20 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1 rounded-full">
                        {cs.type}
                      </span>
                    </div>
                  </div>
                  <div className="p-6 flex flex-col gap-3 flex-1">
                    <h3 className="heading-xs font-bold text-primary">
                      {cs.title}
                    </h3>
                    <p className="text-s font-semibold text-accent">
                      {cs.subtitle}
                    </p>
                    <p className="text-s text-ink-muted leading-relaxed flex-1">
                      {cs.desc}
                    </p>
                    <span className="text-s font-bold text-accent group-hover:underline mt-1">
                      Read Case Study →
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════
            DOWNLOADABLE RESOURCES
        ════════════════════════════════════════ */}
        <section className="section-l bg-light-gray">
          <div className="inner-section">
            <div className="text-center mb-14">
              <span className="eyebrow mb-3 block">Free Tools</span>
              <h2 className="heading-l font-bold text-primary">
                Resources built for telecom decision-makers
              </h2>
              <p className="text-l text-ink-muted mt-4 max-w-2xl mx-auto">
                Specialized tools and guides designed for professionals managing
                VoIP systems.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {downloads.map((d) => (
                <a
                  key={d.title}
                  href={d.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card-bordered p-6 flex flex-col gap-4 hover:shadow-md transition-shadow group"
                >
                  <span className="text-3xl">{d.icon}</span>
                  <div className="flex flex-col gap-2 flex-1">
                    <h3 className="heading-xs font-bold text-primary group-hover:text-accent transition-colors">
                      {d.title}
                    </h3>
                    <p className="text-s text-ink-muted leading-relaxed">
                      {d.desc}
                    </p>
                  </div>
                  <span className="text-s font-bold text-accent flex items-center gap-1">
                    Get Resource{" "}
                    <span className="group-hover:translate-x-1 transition-transform">
                      →
                    </span>
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════
            CTA BANNER
        ════════════════════════════════════════ */}
        <section className="cta-banner-bg section-l">
          <div className="inner-section text-center flex flex-col items-center gap-7">
            <h2 className="heading-l font-bold text-white max-w-2xl">
              Ready to put these insights into action?
            </h2>
            <p className="text-l text-white/85 max-w-xl">
              Get a custom solution tailored to your business — or try us free
              for 30 days with zero commitment.
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
