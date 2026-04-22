import Image from "next/image";
import Link from "next/link";

const services = [
  { label: "Phone", href: "/phone" },
  { label: "VoIP", href: "/voip" },
  { label: "Internet", href: "/internet" },
  { label: "Get a Quote", href: "/get-a-quote" },
  { label: "Try Us Free", href: "/try-us-free" },
];

const company = [
  { label: "About Us", href: "/about-us" },
  { label: "Industries", href: "/industries" },
  { label: "Partners", href: "/partners" },
  { label: "Resources", href: "/resources" },
  { label: "Support", href: "/support" },
  { label: "Contact Us", href: "/contact-us" },
];

const loginLinks = [
  { label: "PBX Login", href: "https://portal.jetwaveservices.com/portal/" },
  {
    label: "Customer Portal Login",
    href: "http://support.jetwaveservices.com/",
  },
];

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      {/* Main footer content */}
      <div className="inner-section py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand column */}
          <div className="lg:col-span-1 flex flex-col gap-5">
            <Link href="/">
              <Image
                src="/logos/jetwave-logo.svg"
                alt="Jetwave Services"
                width={150}
                height={32}
                className="h-8 w-auto object-contain brightness-0 invert"
              />
            </Link>
            <p className="text-sm leading-relaxed text-white/75">
              The most reliable phone + internet provider for businesses that
              can&apos;t afford downtime. Serving businesses with 1–500
              employees.
            </p>
            {/* Office addresses */}
            <div className="flex flex-col gap-3 text-xs text-white/60 leading-relaxed">
              <address className="not-italic">
                <strong className="text-white/80 block mb-0.5">New York</strong>
                1325 Franklin Avenue, Suite 255
                <br />
                Garden City, NY 11530 USA
              </address>
              <address className="not-italic">
                <strong className="text-white/80 block mb-0.5">Canada</strong>
                6700 Park Ave
                <br />
                Montreal, QC H2V 4H9
              </address>
            </div>
            <a
              href="tel:800-700-7778"
              className="text-lg font-bold tracking-wide flex items-center gap-2 text-accent hover:opacity-80 transition-opacity"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24 11.47 11.47 0 003.58.57 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1 11.47 11.47 0 00.57 3.58 1 1 0 01-.25 1.01l-2.2 2.2z" />
              </svg>
              800-700-7778
            </a>
          </div>

          {/* Services */}
          <div>
            <h3 className="footer-heading">Services</h3>
            <ul className="flex flex-col gap-3">
              {services.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="footer-link text-sm font-medium"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="footer-heading">Company</h3>
            <ul className="flex flex-col gap-3">
              {company.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="footer-link text-sm font-medium"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Account / CTA */}
          <div>
            <h3 className="footer-heading">Account</h3>
            <ul className="flex flex-col gap-3 mb-6">
              {loginLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-link text-sm font-medium"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="flex flex-col gap-3">
              <Link
                href="/get-a-quote"
                className="btn btn-accent btn-sm text-center w-full"
              >
                Get a Quote
              </Link>
              <Link
                href="/try-us-free"
                className="btn btn-outline-white btn-sm text-center w-full"
              >
                Try Us Free
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="inner-section flex flex-col sm:flex-row items-center justify-between gap-3 py-5">
          <p className="text-xs text-white/50">
            &copy; {new Date().getFullYear()} Jetwave Services. All rights
            reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link href="/privacy-policy" className="footer-link-dim text-xs">
              Privacy Policy
            </Link>
            <Link href="/terms" className="footer-link-dim text-xs">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
