"use client";
import Link from "next/link";
import { useTheme } from "../context/ThemeContext";

export default function AboutPage() {
  const { isDark } = useTheme();
  const bodyTextClass = isDark ? "text-slate-400" : "text-slate-600";

  return (
    <main className="flex min-h-[60vh] flex-col items-center justify-center p-8">
      <div
        className={`mx-auto w-full max-w-2xl rounded-2xl p-6 text-center shadow-sm ring-1 transition-colors duration-300 ${
          isDark
            ? "bg-slate-800/80 ring-slate-700"
            : "bg-white/80 ring-slate-200"
        }`}
      >
        <h1 className="mb-2 text-3xl font-bold text-amber-500">About Me</h1>

        <p className={`mb-4 text-sm ${bodyTextClass}`}>
          Hi — I'm learning Next.js and building small projects to practice.
          I enjoy making simple, useful apps and improving UI as I learn.
        </p>

        <p className={`mb-4 text-sm ${bodyTextClass}`}>
          This todo app is a learning project where I practice React state,
          components, and basic styling with Tailwind.
        </p>

        <div className="mt-4 flex justify-center gap-3">
          <Link
            href="/"
            className="rounded-xl bg-amber-500 px-4 py-2 text-sm font-medium text-white transition hover:bg-amber-600"
          >
            Home
          </Link>
          <a
            href="mailto:hello@example.com"
            className={`rounded-xl px-4 py-2 text-sm font-medium transition ${
              isDark
                ? "bg-slate-700 text-slate-300 hover:bg-slate-600"
                : "bg-slate-100 text-slate-700 hover:bg-slate-200"
            }`}
          >
            Contact
          </a>
        </div>
      </div>
    </main>
  );
}