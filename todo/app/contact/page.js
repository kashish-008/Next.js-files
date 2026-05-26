"use client";
import { useTheme } from "../context/ThemeContext";

export default function ContactPage() {
  const { isDark } = useTheme();

  const inputClass = `w-full rounded-xl border px-4 py-2 outline-none transition-colors duration-300 placeholder:text-slate-400 focus:border-amber-400 focus:ring-2 focus:ring-amber-200 ${
    isDark
      ? "border-slate-600 bg-slate-700 text-slate-100"
      : "border-slate-300 bg-slate-50 text-slate-800"
  }`;

  const labelClass = `block text-sm font-medium mb-2 ${
    isDark ? "text-slate-300" : "text-slate-700"
  }`;

  return (
    <div className="px-4 py-8">
      <h1
        className={`mb-6 text-4xl font-bold ${
          isDark ? "text-slate-100" : "text-slate-900"
        }`}
      >
        Contact Me
      </h1>

      <div
        className={`max-w-2xl rounded-xl p-8 shadow-md transition-colors duration-300 ${
          isDark ? "bg-slate-800" : "bg-white"
        }`}
      >
        <p
          className={`mb-6 text-sm ${
            isDark ? "text-slate-400" : "text-slate-600"
          }`}
        >
          Have a question or want to collaborate? Fill the form below!
        </p>

        <form className="space-y-4">
          <div>
            <label className={labelClass}>Your Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className={inputClass}
            />
          </div>

          <div>
            <label className={labelClass}>Email Address</label>
            <input
              type="email"
              placeholder="you@example.com"
              className={inputClass}
            />
          </div>

          <div>
            <label className={labelClass}>Message</label>
            <textarea
              rows={5}
              placeholder="Your message..."
              className={inputClass}
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-xl bg-amber-500 px-4 py-2 font-medium text-white transition hover:bg-amber-600"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}