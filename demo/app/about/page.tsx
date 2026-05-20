import Link from "next/link";

export default function AboutPage() {
    return (
        <main className="min-h-screen p-8">
            <h1 className="text-4xl font-bold text-blue-600">
                About Me
            </h1>

            <p className="mt-4 text-lg text-gray-700">
                Hey! I am learning Next.js and this is my first custom page.
            </p>

            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 bg-gray-100 rounded-lg">
                    <h2 className="text-2xl font-semibold">Skills</h2>
                    <ul className="mt-3 list-disc list-inside text-gray-600">
                        <li>React</li>
                        <li>TypeScript</li>
                        <li>TailwindCss</li>
                    </ul>
                </div>

                <div className="p-6 bg-gray-100 rounded-ld">
                    <h2 className="text-2xl font-semibold">Contact</h2>
                    <p className="mt-3 text-gray-600">
                        Email: hello@gmmail.com <br />
                        Github: github.com/kashish-008
                    </p>
                </div>
            </div>
            <Link
                href="/"
                className="mt-8 inline-block px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition">
                ← Back to Home
            </Link>
        </main>
    );
}