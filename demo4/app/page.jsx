import Link from "next/link";

export default function Home() {
    return (
        <div className="space-y-8">
            <section className="text-center py-12">
                <h1 className="text-5xl font-bold text-gray-800 mb-4">
                    Welcome to NextLearner
                </h1>
                <p className="text-xl text-gray-600 mb-8">
                    Learn Next.js with practical examples
                </p>
                <Link
                    href="/posts"
                    className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
                >
                    Explore Posts
                </Link>
            </section>

            <section className="grid md:grid-cols-3 gap-6 mt-12">
                <div className="bg-white p-6 rounded-lg shadow-md shadow-amber-500">
                    <h2 className="text-2xl font-semibold mb-3">📁 Routing</h2>
                    <p className="text-gray-600">
                        Learn file-based routing with App Router. Dynamic routes like
                        /posts/[id] are simple!
                    </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-2xl font-semibold mb-3">🔐 Authentication</h2>
                    <p className="text-gray-600">
                        Login/Register system with Context API and protected routes.
                    </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-2xl font-semibold mb-3">📊 Dynamic Data</h2>
                    <p className="text-gray-600">
                        Fetch and display data from external APIs. See the posts page!
                    </p>
                </div>
            </section>
        </div>
    );
}