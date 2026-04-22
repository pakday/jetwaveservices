"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const serviceLinks = [
  { label: "Phone", href: "/phone" },
  { label: "VoIP", href: "/voip" },
  { label: "Internet", href: "/internet" },
];

const navLinks = [
  { label: "About", href: "/about-us" },
  { label: "Industries", href: "/industries" },
  { label: "Support", href: "/support" },
  { label: "Contact", href: "/contact-us" },
  { label: "Resources", href: "/resources" },
  { label: "Partners", href: "/partners" },
];

const loginLinks = [
  { label: "PBX Login", href: "https://portal.jetwaveservices.com/portal/" },
  {
    label: "Customer Portal Login",
    href: "http://support.jetwaveservices.com/",
  },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <header className="w-full bg-white shadow-sm sticky top-0 z-50">
      {/* Top bar */}
      <div className="bg-primary hidden md:block">
        <div className="inner-section flex items-center justify-end py-2 gap-6">
          <a
            href="tel:800-700-7778"
            className="text-white text-sm font-semibold tracking-wide flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24 11.47 11.47 0 003.58.57 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1 11.47 11.47 0 00.57 3.58 1 1 0 01-.25 1.01l-2.2 2.2z" />
            </svg>
            800-700-7778
          </a>

          {/* Login dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setLoginOpen(true)}
            onMouseLeave={() => setLoginOpen(false)}
          >
            <button
              onClick={() => setLoginOpen((v) => !v)}
              className="text-white text-sm font-semibold tracking-wide flex items-center gap-1 hover:opacity-80 transition-opacity"
            >
              Login
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`w-4 h-4 transition-transform ${loginOpen ? "rotate-180" : ""}`}
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M7 10l5 5 5-5H7z" />
              </svg>
            </button>
            {loginOpen && (
              <div
                className="absolute right-0 top-full bg-white shadow-lg rounded-lg overflow-hidden min-w-50 border border-border"
                onMouseEnter={() => setLoginOpen(true)}
                onMouseLeave={() => setLoginOpen(false)}
              >
                {loginLinks.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-4 py-3 text-sm font-medium text-primary hover:bg-light-gray transition-colors"
                  >
                    {l.label}
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Main nav */}
      <nav className="inner-section flex items-center justify-between py-4 gap-6">
        {/* SVG Logo */}
        <Link href="/" className="shrink-0">
          <Image
            src="/logos/jetwave-logo.svg"
            alt="Jetwave Services"
            width={160}
            height={32}
            className="h-8 w-auto object-contain"
            priority
          />
        </Link>

        {/* Desktop nav links */}
        <ul className="hidden lg:flex items-center gap-1">
          {/* Services dropdown */}
          <li
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button
              onClick={() => setServicesOpen((v) => !v)}
              className="px-4 py-2 text-sm font-semibold rounded-md transition-colors text-ink hover:text-accent flex items-center gap-1"
            >
              Services
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`w-4 h-4 transition-transform ${servicesOpen ? "rotate-180" : ""}`}
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M7 10l5 5 5-5H7z" />
              </svg>
            </button>
            {servicesOpen && (
              <div
                className="absolute left-0 top-full bg-white shadow-lg rounded-xl overflow-hidden min-w-44 border border-border"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                {serviceLinks.map((s) => (
                  <Link
                    key={s.href}
                    href={s.href}
                    className="block px-4 py-3 text-sm font-semibold text-ink hover:bg-accent-light hover:text-accent transition-colors"
                    onClick={() => setServicesOpen(false)}
                  >
                    {s.label}
                  </Link>
                ))}
              </div>
            )}
          </li>

          {navLinks.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="px-4 py-2 text-sm font-semibold rounded-md transition-colors text-ink hover:text-accent"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA buttons */}
        <div className="hidden lg:flex items-center gap-3">
          <Link href="/get-a-quote" className="btn btn-primary btn-sm">
            Get a Quote
          </Link>
          <Link href="/try-us-free" className="btn btn-accent btn-sm">
            Try Us Free
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen((v) => !v)}
          className="lg:hidden p-2 rounded-md text-primary"
          aria-label="Toggle menu"
        >
          {mobileOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-border bg-off-white">
          <div className="inner-section py-4 flex flex-col gap-1">
            {/* Services (mobile) */}
            <div>
              <button
                className="w-full text-left py-3 px-4 text-sm font-semibold rounded-md text-ink hover:bg-white transition-colors flex items-center justify-between"
                onClick={() => setServicesOpen((v) => !v)}
              >
                Services
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`w-4 h-4 transition-transform ${servicesOpen ? "rotate-180" : ""}`}
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M7 10l5 5 5-5H7z" />
                </svg>
              </button>
              {servicesOpen && (
                <div className="pl-4 flex flex-col gap-1 mt-1">
                  {serviceLinks.map((s) => (
                    <Link
                      key={s.href}
                      href={s.href}
                      className="py-2 px-4 text-sm font-medium text-accent hover:bg-white rounded-md transition-colors"
                      onClick={() => {
                        setMobileOpen(false);
                        setServicesOpen(false);
                      }}
                    >
                      {s.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="py-3 px-4 text-sm font-semibold rounded-md text-ink hover:bg-white transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {l.label}
              </Link>
            ))}

            <div className="border-t border-border mt-2 pt-4 flex flex-col gap-2">
              <a
                href="tel:800-700-7778"
                className="py-2 px-4 text-sm font-semibold text-accent"
              >
                800-700-7778
              </a>
              {loginLinks.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2 px-4 text-sm font-medium text-ink-muted"
                >
                  {l.label}
                </a>
              ))}
              <div className="flex gap-3 px-4 pt-2">
                <Link
                  href="/get-a-quote"
                  className="btn btn-primary btn-sm flex-1 text-center"
                >
                  Get a Quote
                </Link>
                <Link
                  href="/try-us-free"
                  className="btn btn-accent btn-sm flex-1 text-center"
                >
                  Try Us Free
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
