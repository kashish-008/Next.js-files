"use client";
import Link from "next/link";

export default function Footer() {
	return (
		<footer className="bg-gray-800 text-gray-200 py-8 mt-12">
			<div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
				<div className="text-sm">© {new Date().getFullYear()} Learn Next.js — All rights reserved.</div>

				<nav className="flex gap-4 mt-4 md:mt-0" aria-label="Footer navigation">
					<Link href="/about" className="hover:underline">About</Link>
					<Link href="/contact" className="hover:underline">Contact</Link>
					<Link href="/" className="hover:underline">Privacy</Link>
					<a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:underline">GitHub</a>
				</nav>
			</div>
		</footer>
	);
}

