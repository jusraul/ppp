"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Waves, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/programs", label: "Programs" },
  { href: "/locations", label: "Locations" },
  { href: "/get-involved", label: "Get Involved" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white lg:bg-white/95 lg:backdrop-blur-md shadow-sm"
          : "bg-white lg:bg-white/80 lg:backdrop-blur-sm"
      )}
    >
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 text-primary font-bold text-lg sm:text-xl"
          onClick={() => setMobileOpen(false)}
        >
          <Waves className="h-7 w-7 text-accent" aria-hidden="true" />
          <span className="hidden sm:inline leading-tight">
            Lower Withlacoochee
            <br />
            <span className="text-sm font-semibold text-muted">
              River Keeper
            </span>
          </span>
          <span className="sm:hidden leading-tight text-base">LWRK</span>
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="px-3 py-2 text-sm font-medium text-slate-700 hover:text-primary rounded-md transition-colors hover:bg-emerald-50"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href="mailto:lowerwithlacoocheeriverkeeper@gmail.com?subject=Volunteer%20Inquiry"
            className="rounded-lg border border-primary px-4 py-2 text-sm font-semibold text-primary hover:bg-emerald-50 transition-colors"
          >
            Volunteer Today
          </a>
          <a
            href="https://www.paypal.com/donate/?hosted_button_id=AMAVN94VGL682"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-accent px-4 py-2 text-sm font-semibold text-white hover:bg-teal-700 transition-colors"
          >
            Donate Now
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="lg:hidden p-2 text-slate-700 hover:text-primary"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </nav>

      {/* Mobile Drawer */}
      <div
        id="mobile-menu"
        className={cn(
          "fixed inset-0 top-[60px] z-40 bg-white transition-transform duration-300 lg:hidden",
          mobileOpen ? "translate-x-0" : "translate-x-full"
        )}
        aria-hidden={!mobileOpen}
      >
        <div className="flex flex-col p-6 gap-2">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="px-4 py-3 text-lg font-medium text-slate-700 hover:text-primary hover:bg-emerald-50 rounded-lg transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <hr className="my-4 border-slate-200" />
          <a
            href="mailto:lowerwithlacoocheeriverkeeper@gmail.com?subject=Volunteer%20Inquiry"
            className="rounded-lg bg-emerald-600 px-4 py-3 text-center font-semibold text-white hover:bg-emerald-700 transition-colors"
            onClick={() => setMobileOpen(false)}
          >
            Volunteer Today
          </a>
          <a
            href="https://www.paypal.com/donate/?hosted_button_id=AMAVN94VGL682"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-teal-600 px-4 py-3 text-center font-semibold text-white hover:bg-teal-700 transition-colors"
            onClick={() => setMobileOpen(false)}
          >
            Donate Now
          </a>
        </div>
      </div>
    </header>
  );
}
