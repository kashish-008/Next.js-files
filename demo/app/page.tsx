import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-6xl font-bold ">
        Welcome to <span className="text-blue-600">Next.js!</span>
      </h1>
      <p className="mt-4 text-xl text-gray-600">
        My first Next.js app is running 🚀
      </p>

      {/* New navigation button */}
      <Link
        href="/about"
        className="mt-8 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
      >
        Learn About Me →
      </Link>

      {/* NEW Contact Button */}
        <Link
          href="/contact"
          className="mt-2 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
        >
          Contact Me →
        </Link>
    </main>
  );
}