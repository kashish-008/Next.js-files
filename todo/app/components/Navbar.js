"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="border-b border-amber-100 bg-white/90 text-slate-800 shadow-sm backdrop-blur">
      <div className="mx-auto flex max-w-4xl items-center justify-between px-4 py-4">
        <Link href="/" className="text-lg font-bold tracking-tight text-amber-700 sm:text-xl">Todo App</Link>
        <div className="flex items-center gap-4 text-sm font-medium text-slate-600">
          <Link href="/" className="transition hover:text-amber-700">Home</Link>
          <Link href="/about" className="transition hover:text-amber-700">About</Link>
          <Link href="/contact" className="transition hover:text-amber-700">Contact</Link>
        </div>
      </div>
    </nav>
  );
}