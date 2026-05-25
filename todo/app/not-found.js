import Link from "next/link";

export default function NotFound() {
	return (
		<main className="flex min-h-[60vh] flex-col items-center justify-center p-8">
			<h1 className="mb-2 text-4xl font-bold text-amber-600">404 — Page not found</h1>
			<p className="mb-6 text-center text-sm text-slate-600">
				Oops — we couldn't find the page you're looking for.
			</p>
			<Link
				href="/"
				className="rounded-xl bg-amber-500 px-4 py-2 text-sm font-medium text-white transition hover:bg-amber-600"
			>
				Go back home
			</Link>
		</main>
	);
}
