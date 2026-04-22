import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Jetwave Services — Reliable Phone & Internet for Business",
  description:
    "The most reliable phone + internet provider for businesses that can't afford downtime. 24/7 US live support, 99.99% uptime, 30-50% savings.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable}`}>
      <body className="min-h-screen flex flex-col">{children}</body>
    </html>
  );
}
