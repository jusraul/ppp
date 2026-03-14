import Link from "next/link";
import { Waves, Mail, Phone, MapPin, Facebook, Instagram } from "lucide-react";

const quickLinks = [
  { href: "/about", label: "About Us" },
  { href: "/programs", label: "Our Programs" },
  { href: "/locations", label: "Locations" },
  { href: "/get-involved", label: "Get Involved" },
  { href: "/contact", label: "Contact" },
];

const programLinks = [
  { href: "/programs#debris", label: "Marine Debris Removal" },
  { href: "/programs#water-quality", label: "Water Quality Monitoring" },
  { href: "/programs#habitat", label: "Habitat Restoration" },
  { href: "/programs#education", label: "Environmental Education" },
  { href: "/programs#inclusive", label: "Inclusive Participation" },
];

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-slate-800 to-slate-900 text-slate-300">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand & Mission */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 text-white mb-4">
              <Waves className="h-7 w-7 text-accent-light" aria-hidden="true" />
              <span className="font-bold text-lg leading-tight">
                Lower Withlacoochee
                <br />
                <span className="text-sm font-semibold text-slate-400">
                  River Keeper
                </span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-slate-400">
              Protecting, restoring, and stewarding the Lower Withlacoochee
              River and surrounding estuarine systems through hands-on
              environmental action, habitat restoration, and inclusive community
              participation.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 font-semibold text-white">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 hover:text-accent-light transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="mb-4 font-semibold text-white">Programs</h3>
            <ul className="space-y-2">
              {programLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 hover:text-accent-light transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 font-semibold text-white">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm">
                <Mail className="h-4 w-4 mt-0.5 text-accent-light shrink-0" aria-hidden="true" />
                <a
                  href="mailto:lowerwithlacoocheeriverkeeper@gmail.com"
                  className="text-slate-400 hover:text-accent-light transition-colors break-all"
                >
                  lowerwithlacoocheeriverkeeper@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm">
                <Phone className="h-4 w-4 mt-0.5 text-accent-light shrink-0" aria-hidden="true" />
                <span className="text-slate-400">(352) 464-4244</span>
              </li>
              <li className="flex items-start gap-2 text-sm">
                <MapPin className="h-4 w-4 mt-0.5 text-accent-light shrink-0" aria-hidden="true" />
                <span className="text-slate-400">
                  One Tide Over Island
                  <br />
                  Yankeetown, Florida 34439
                </span>
              </li>
            </ul>
            <div className="mt-6 flex gap-4">
              <a
                href="#"
                className="rounded-full bg-slate-700 p-2 text-slate-400 hover:bg-accent hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="rounded-full bg-slate-700 p-2 text-slate-400 hover:bg-accent hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 border-t border-slate-700 pt-8 text-center">
          <p className="text-sm text-slate-500">
            &copy; 2026 Lower Withlacoochee River Keeper &bull; Protecting
            Florida&apos;s Nature Coast
          </p>
          <p className="mt-1 text-xs text-slate-600">
            A 501(c)(3) nonprofit organization
          </p>
        </div>
      </div>
    </footer>
  );
}
