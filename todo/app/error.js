"use client";

export default function GlobalError({ error, reset }) {
  return (
    <div className="p-8 text-center">
      <h2 className="text-xl font-bold text-amber-600">Something went wrong</h2>
      <p className="mt-2 text-sm text-slate-600">Please try again or return home.</p>
      <div className="mt-4 flex justify-center gap-3">
        <button
          onClick={reset}
          className="rounded-md bg-amber-500 px-4 py-2 text-sm font-medium text-white"
        >
          Try again
        </button>
      </div>
    </div>
  );
}