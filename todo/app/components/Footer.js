"use client";
import { useTheme } from "../context/ThemeContext";

export default function Footer() {
  const { isDark, enableLight } = useTheme();

  return (
    <footer
      className={`mt-8 border-t transition-colors duration-300 ${
        isDark
          ? "border-slate-700 bg-slate-900 text-slate-400"
          : "border-slate-200 bg-white text-slate-500"
      }`}
    >
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-3 px-4 py-4 text-center text-sm sm:flex-row sm:justify-between">
        <p>&copy; {new Date().getFullYear()} Simple Todo App. Built with Next.js & Tailwind.</p>
        <button
          onClick={enableLight}
          disabled={!isDark}
          className={`rounded-lg px-3 py-1.5 text-xs font-semibold transition-colors duration-200 ${
            !isDark
              ? "cursor-not-allowed bg-slate-100 text-slate-400"
              : "bg-slate-100 text-slate-800 hover:bg-white"
          }`}
        >
          Default Theme
        </button>
      </div>
    </footer>
  );
}