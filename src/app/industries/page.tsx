import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LeadForm from "@/components/LeadForm";

/* ──────────────────────────────────────────────────────────────
   Industry cards
────────────────────────────────────────────────────────────── */
const industries = [
  {
    label: "Healthcare",
    body: "Streamline communication and improve the patient experience. HIPAA-friendly connectivity with the reliability healthcare demands.",
    img: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=700&q=80",
    imgAlt: "Healthcare communications",
    href: null,
  },
  {
    label: "Manufacturing",
    body: "Keep teams connected across your floor, warehouse, and offices. Get more done, faster — with zero communication bottlenecks.",
    img: "https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?w=700&q=80",
    imgAlt: "Manufacturing facility communications",
    href: null,
  },
  {
    label: "Legal Services",
    body: "Deliver a more responsive client experience. Crystal-clear calls, advanced call management, and confidential-grade connectivity.",
    img: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=700&q=80",
    imgAlt: "Law firm communication systems",
    href: "/law-firm",
  },
  {
    label: "Insurance Firms",
    body: "Improve policyholder support with timely updates, smoother claims communication, and better service experiences at every touchpoint.",
    img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=700&q=80",
    imgAlt: "Insurance firm team on phones",
    href: "/insurance",
  },
  {
    label: "Financial Services",
    body: "Support better client experiences across banking and accounting. Secure, compliant, and always-on connectivity for your firm.",
    img: "https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?w=700&q=80",
    imgAlt: "Financial services communications",
    href: null,
  },
  {
    label: "Education & Public Sector",
    body: "Cut costs with a world-class system that keeps everyone connected — from classrooms to administrative offices to field staff.",
    img: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=700&q=80",
    imgAlt: "Education sector phone systems",
    href: null,
  },
  {
    label: "Technology",
    body: "Be the IT hero. Deliver exceptional customer experiences with a system that grows with your tech stack and never lets you down.",
    img: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?w=700&q=80",
    imgAlt: "Tech company communications",
    href: null,
  },
  {
    label: "Retail",
    body: "Reduce operating costs while improving the shopping experience. Connect stores, warehouses, and HQ on one unified platform.",
    img: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=700&q=80",
    imgAlt: "Retail business phone systems",
    href: null,
  },
];

/* ──────────────────────────────────────────────────────────────
   What you get — feature bullets
────────────────────────────────────────────────────────────── */
const features = [
  "Custom security, back-up and monitoring",
  "Media + carrier diversity as needed",
  "Add-on features for a streamlined, all-in-one solution",
  "Dedicated account manager who knows your business",
  "24/7 US live support — under 3-minute response",
  "No hidden fees, no rate changes after sign-up",
];

export default function IndustriesPage() {
  return (
    <>
      <Header />
      <main>
        {/* ════════════════════════════════════════
            PAGE HERO
        ════════════════════════════════════════ */}
        <section className="relative flex items-center overflow-hidden min-h-80">
          <Image
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1920&q=80"
            alt="Diverse industries served by Jetwave"
            fill
            className="object-cover object-center"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 hero-overlay" />
          <div className="inner-section relative w-full py-20 md:py-28">
            <div className="max-w-3xl flex flex-col gap-5">
              <span className="eyebrow text-accent">Industries We Serve</span>
              <h1 className="heading-xl font-bold text-white leading-tight">
                Get a custom + flexible system{" "}
                <span className="text-accent">
                  specific to your industry needs.
                </span>
              </h1>
              <p className="text-l text-white/80 max-w-2xl leading-relaxed">
                Every industry has unique communication challenges. We
                understand yours — and build a system that fits.
              </p>
              <div className="flex flex-wrap gap-4 pt-2">
                <Link href="#quote" className="btn btn-accent btn-lg">
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
            WHAT MAKES US FLEXIBLE
        ════════════════════════════════════════ */}
        <section className="section-l bg-white">
          <div className="inner-section">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-20 items-center">
              <div className="flex flex-col gap-6">
                <span className="eyebrow">Built for Your Business</span>
                <h2 className="heading-l font-bold text-primary">
                  A system as unique as the business running it.
                </h2>
                <p className="text-l text-ink-muted leading-relaxed">
                  Unlike big carriers who offer one-size-fits-all packages,
                  Jetwave engineers a communication solution specifically for
                  your industry environment. We study how your team works, what
                  matters most, and where you need reliability the most.
                </p>
                <ul className="flex flex-col gap-3">
                  {features.map((f) => (
                    <li key={f} className="flex items-start gap-3">
                      <span className="mt-1 shrink-0 w-5 h-5 rounded-full bg-accent-light text-accent flex items-center justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-3 h-3"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={3}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </span>
                      <span className="text-m text-ink-muted">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative rounded-2xl overflow-hidden shadow-xl h-80 lg:h-96">
                <Image
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80"
                  alt="Jetwave engineer building a custom solution"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════
            INDUSTRIES GRID
        ════════════════════════════════════════ */}
        <section className="section-l bg-light-gray">
          <div className="inner-section">
            <div className="text-center mb-14">
              <span className="eyebrow mb-3 block">All Industries</span>
              <h2 className="heading-l font-bold text-primary">
                We serve businesses across every sector.
              </h2>
              <p className="text-l text-ink-muted mt-4 max-w-2xl mx-auto">
                From healthcare to retail, we build the system your industry
                actually needs.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {industries.map((ind) => {
                const card = (
                  <div className="card flex flex-col overflow-hidden group h-full hover:shadow-lg transition-shadow">
                    <div className="relative h-44 overflow-hidden">
                      <Image
                        src={ind.img}
                        alt={ind.imgAlt}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      />
                      <div className="absolute inset-0 service-img-overlay" />
                      <span className="absolute bottom-3 left-4 text-s font-bold text-white uppercase tracking-wide">
                        {ind.label}
                      </span>
                    </div>
                    <div className="p-5 flex flex-col gap-2 flex-1">
                      <p className="text-m text-ink-muted leading-relaxed">
                        {ind.body}
                      </p>
                    </div>
                  </div>
                );
                return ind.href ? (
                  <Link
                    key={ind.label}
                    href={ind.href}
                    className="flex flex-col h-full"
                  >
                    {card}
                  </Link>
                ) : (
                  <div key={ind.label} className="flex flex-col h-full">
                    {card}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════
            TESTIMONIAL
        ════════════════════════════════════════ */}
        <section className="section-l testimonials-section-bg">
          <div className="inner-section">
            <div className="max-w-3xl mx-auto text-center flex flex-col gap-7 items-center">
              <span className="eyebrow text-accent">From Our Clients</span>
              <blockquote className="heading-s font-normal text-white/90 leading-relaxed">
                &ldquo;Jetwave played and tinkered for hours and got things
                working — without charging us a penny. They had their engineer
                in there solving a problem nobody else was able to tackle. We
                were running a certain technology — and only one method could
                run it. Jetwave found a way.&rdquo;
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
            QUOTE FORM
        ════════════════════════════════════════ */}
        <section id="quote" className="section-l bg-white">
          <div className="inner-section">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-20 items-start">
              <div className="flex flex-col gap-6">
                <span className="eyebrow">Get a Free Quote</span>
                <h2 className="heading-l font-bold text-primary">
                  Get a free quote for a robust, feature-rich and absolutely
                  dependable system — and 24/7 instant US support.
                </h2>
                <p className="text-l text-ink-muted leading-relaxed">
                  Tell us about your business and we&apos;ll engineer a custom
                  solution for your industry. Or give us a call at{" "}
                  <a
                    href="tel:800-700-7778"
                    className="text-accent font-semibold hover:underline"
                  >
                    800-700-7778
                  </a>
                  .
                </p>
                <div className="flex flex-col gap-4 rounded-xl bg-light-gray p-6">
                  <p className="text-s font-bold uppercase tracking-wider text-ink-muted">
                    What you get
                  </p>
                  {[
                    "No hidden fees or surprise rate changes",
                    "24/7 US support — real engineers, real answers",
                    "A system built around how you actually work",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <span className="w-5 h-5 rounded-full bg-accent-light text-accent flex items-center justify-center shrink-0">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-3 h-3"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={3}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </span>
                      <span className="text-m text-ink-muted">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <LeadForm />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
