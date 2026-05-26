"use client";
import Link from "next/link";
import { useTheme } from "../context/ThemeContext";

export default function Navbar() {
  const { isDark, enableDark } = useTheme();
  const navLinkClass = "transition hover:text-amber-500";

  return (
    <nav
      className={`border-b shadow-sm backdrop-blur transition-colors duration-300 ${
        isDark
          ? "border-slate-700 bg-slate-900/90 text-slate-100"
          : "border-amber-100 bg-white/90 text-slate-800"
      }`}
    >
      <div className="mx-auto flex max-w-4xl items-center justify-between px-4 py-4">
        <Link
          href="/"
          className={`text-lg font-bold tracking-tight sm:text-xl ${
            isDark ? "text-amber-400" : "text-amber-700"
          }`}
        >
          Todo App
        </Link>

        <div className="flex items-center gap-4 text-sm font-medium">
          <div className={`flex items-center gap-4 ${isDark ? "text-slate-300" : "text-slate-600"}`}>
            <Link href="/" className={navLinkClass}>Home</Link>
            <Link href="/about" className={navLinkClass}>About</Link>
            <Link href="/contact" className={navLinkClass}>Contact</Link>
          </div>

          <button
            onClick={enableDark}
            disabled={isDark}
            className={`rounded-lg px-3 py-1.5 text-xs font-semibold transition-colors duration-200 ${
              isDark
                ? "cursor-not-allowed bg-slate-700 text-slate-400"
                : "bg-slate-800 text-white hover:bg-slate-700"
            }`}
          >
            Dark
          </button>
        </div>
      </div>
    </nav>
  );
}