import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Lower Withlacoochee River Keeper | Estuary Stewardship",
    template: "%s | Lower Withlacoochee River Keeper",
  },
  description:
    "Our nonprofit exists to protect and restore the Lower Withlacoochee River and surrounding estuarine systems through measurable field-based action. We organize community cleanups, support habitat restoration and shoreline resilience efforts, build environmental awareness through public education and monitoring, and create inclusive stewardship opportunities for the public, including veterans and people with disabilities.",
  openGraph: {
    title: "Lower Withlacoochee River Keeper | Estuary Stewardship",
    description:
      "Protecting and restoring the Lower Withlacoochee River through measurable field-based action on Florida's Nature Coast.",
    type: "website",
    locale: "en_US",
    siteName: "Lower Withlacoochee River Keeper",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-lg focus:bg-primary focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to main content
        </a>
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
