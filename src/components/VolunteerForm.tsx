"use client";

export default function VolunteerForm() {
  return (
    <form
      className="space-y-6 rounded-xl border border-slate-200 bg-white p-8 shadow-sm"
      onSubmit={(e) => {
        e.preventDefault();
        const form = e.currentTarget;
        const firstName = (form.querySelector('#vol-first') as HTMLInputElement).value;
        const lastName = (form.querySelector('#vol-last') as HTMLInputElement).value;
        const email = (form.querySelector('#vol-email') as HTMLInputElement).value;
        const interest = (form.querySelector('#vol-interest') as HTMLSelectElement).value;
        const message = (form.querySelector('#vol-message') as HTMLTextAreaElement).value;
        const subject = encodeURIComponent(`Volunteer Sign Up - ${firstName} ${lastName}`);
        const body = encodeURIComponent(`Name: ${firstName} ${lastName}\nEmail: ${email}\nInterested in: ${interest}\n\n${message}`);
        window.location.href = `mailto:lowerwithlacoocheeriverkeeper@gmail.com?subject=${subject}&body=${body}`;
      }}
    >
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label
            htmlFor="vol-first"
            className="block text-sm font-medium text-slate-700 mb-1"
          >
            First Name
          </label>
          <input
            id="vol-first"
            type="text"
            required
            className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-accent focus:ring-1 focus:ring-accent"
            placeholder="Jane"
          />
        </div>
        <div>
          <label
            htmlFor="vol-last"
            className="block text-sm font-medium text-slate-700 mb-1"
          >
            Last Name
          </label>
          <input
            id="vol-last"
            type="text"
            required
            className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-accent focus:ring-1 focus:ring-accent"
            placeholder="Doe"
          />
        </div>
      </div>
      <div>
        <label
          htmlFor="vol-email"
          className="block text-sm font-medium text-slate-700 mb-1"
        >
          Email
        </label>
        <input
          id="vol-email"
          type="email"
          required
          className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-accent focus:ring-1 focus:ring-accent"
          placeholder="jane@example.com"
        />
      </div>
      <div>
        <label
          htmlFor="vol-interest"
          className="block text-sm font-medium text-slate-700 mb-1"
        >
          I&apos;m interested in
        </label>
        <select
          id="vol-interest"
          className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm text-slate-900 focus:border-accent focus:ring-1 focus:ring-accent"
        >
          <option>Shoreline Cleanups</option>
          <option>Habitat Restoration</option>
          <option>Water Quality Monitoring</option>
          <option>Education & Events</option>
          <option>Adaptive / Inclusive Programs</option>
          <option>Corporate / Group Events</option>
          <option>General Volunteering</option>
        </select>
      </div>
      <div>
        <label
          htmlFor="vol-message"
          className="block text-sm font-medium text-slate-700 mb-1"
        >
          Anything else?
        </label>
        <textarea
          id="vol-message"
          rows={3}
          className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-accent focus:ring-1 focus:ring-accent"
          placeholder="Tell us about yourself, your availability, or any accommodations we should know about."
        />
      </div>
      <button
        type="submit"
        className="w-full rounded-lg bg-cta px-6 py-3 text-sm font-semibold text-white hover:bg-emerald-700 transition-colors shadow-sm"
      >
        Sign Up
      </button>
    </form>
  );
}
