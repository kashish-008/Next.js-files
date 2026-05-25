import Link from "next/link";

export default function AboutPage() {
	return (
		<main className="flex min-h-[60vh] flex-col items-center justify-center p-8">
			<div className="mx-auto w-full max-w-2xl rounded-2xl bg-white/80 p-6 text-center shadow-sm ring-1 ring-slate-200">
				<h1 className="mb-2 text-3xl font-bold text-amber-600">About Me</h1>
				<p className="mb-4 text-sm text-slate-600">
					Hi — I'm learning Next.js and building small projects to practice.
					I enjoy making simple, useful apps and improving UI as I learn.
				</p>
				<p className="mb-4 text-sm text-slate-600">
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
						className="rounded-xl bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-200"
					>
						Contact
					</a>
				</div>
			</div>
		</main>
	);
}
