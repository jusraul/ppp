"use client";

export default function ContactForm() {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-8 shadow-sm">
      <h2 className="text-2xl font-bold text-slate-900 mb-2">
        Send a Message
      </h2>
      <p className="text-sm text-muted mb-6">
        We typically respond within 1–2 business days.
      </p>

      <form
        className="space-y-6"
        onSubmit={(e) => {
          e.preventDefault();
          const form = e.currentTarget;
          const name = (form.querySelector('#contact-name') as HTMLInputElement).value;
          const email = (form.querySelector('#contact-email') as HTMLInputElement).value;
          const subjectVal = (form.querySelector('#contact-subject') as HTMLInputElement).value || 'Contact Inquiry';
          const message = (form.querySelector('#contact-message') as HTMLTextAreaElement).value;
          const subject = encodeURIComponent(subjectVal);
          const body = encodeURIComponent(`From: ${name}\nEmail: ${email}\n\n${message}`);
          window.location.href = `mailto:lowerwithlacoocheeriverkeeper@gmail.com?subject=${subject}&body=${body}`;
        }}
      >
        <div className="grid gap-6 sm:grid-cols-2">
          <div>
            <label
              htmlFor="contact-name"
              className="block text-sm font-medium text-slate-700 mb-1"
            >
              Your Name
            </label>
            <input
              id="contact-name"
              type="text"
              required
              className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-accent focus:ring-1 focus:ring-accent"
              placeholder="Jane Doe"
            />
          </div>
          <div>
            <label
              htmlFor="contact-email"
              className="block text-sm font-medium text-slate-700 mb-1"
            >
              Email Address
            </label>
            <input
              id="contact-email"
              type="email"
              required
              className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-accent focus:ring-1 focus:ring-accent"
              placeholder="jane@example.com"
            />
          </div>
        </div>
        <div>
          <label
            htmlFor="contact-subject"
            className="block text-sm font-medium text-slate-700 mb-1"
          >
            Subject
          </label>
          <input
            id="contact-subject"
            type="text"
            className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-accent focus:ring-1 focus:ring-accent"
            placeholder="Volunteer inquiry, partnership, general question..."
          />
        </div>
        <div>
          <label
            htmlFor="contact-message"
            className="block text-sm font-medium text-slate-700 mb-1"
          >
            Message
          </label>
          <textarea
            id="contact-message"
            rows={5}
            required
            className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-accent focus:ring-1 focus:ring-accent"
            placeholder="Tell us how we can help or how you'd like to get involved."
          />
        </div>
        <button
          type="submit"
          className="w-full rounded-lg bg-cta px-6 py-3 text-sm font-semibold text-white hover:bg-emerald-700 transition-colors shadow-sm sm:w-auto"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}
