import type { Metadata } from "next";
import { Mail, Phone, MapPin } from "lucide-react";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with the Lower Withlacoochee River Keeper. Reach us for volunteer inquiries, partnership opportunities, or general questions about our estuary stewardship programs.",
};

export default function ContactPage() {
  return (
    <div className="pt-20">
      {/* Hero Banner */}
      <section className="bg-gradient-to-br from-emerald-800 to-teal-900 py-20 text-white">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <h1 className="text-4xl font-bold sm:text-5xl">Contact Us</h1>
          <p className="mt-4 text-lg text-white/80">
            Questions, partnerships, or just want to say hello — we&apos;d love
            to hear from you
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-5">
            {/* Contact Info */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-slate-900 mb-2">
                Get In Touch
              </h2>
              <div className="h-1 w-12 rounded-full bg-accent mb-6" aria-hidden="true" />
              <p className="text-base leading-relaxed text-muted mb-8">
                Whether you&apos;re interested in volunteering, have a
                partnership idea, or want to learn more about our programs —
                reach out. We respond to every inquiry.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="shrink-0 rounded-lg bg-emerald-50 p-3">
                    <Mail
                      className="h-5 w-5 text-primary"
                      aria-hidden="true"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 text-sm">
                      Email
                    </h3>
                    <a
                      href="mailto:lowerwithlacoocheeriverkeeper@gmail.com"
                      className="text-sm text-accent hover:text-primary transition-colors"
                    >
                      lowerwithlacoocheeriverkeeper@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="shrink-0 rounded-lg bg-emerald-50 p-3">
                    <Phone
                      className="h-5 w-5 text-primary"
                      aria-hidden="true"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 text-sm">
                      Phone
                    </h3>
                    <span className="text-sm text-muted">(352) 464-4244</span>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="shrink-0 rounded-lg bg-emerald-50 p-3">
                    <MapPin
                      className="h-5 w-5 text-primary"
                      aria-hidden="true"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 text-sm">
                      Location
                    </h3>
                    <p className="text-sm text-muted">
                      One Tide Over Island
                      <br />
                      Yankeetown, Florida 34439
                    </p>
                  </div>
                </div>
              </div>

              {/* Google Map */}
              <div className="mt-8 overflow-hidden rounded-xl border border-slate-200">
                <iframe
                  title="Map of Yankeetown, Florida"
                  src="https://www.google.com/maps?q=Yankeetown%2C%20Florida%2034439&output=embed"
                  className="h-64 w-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
