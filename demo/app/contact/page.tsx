import Link from "next/link";

export default function ContactPage() {
    return (
        <main className="min-h-screen p-8">
            <h1 className="text-4xl font-bold text-blue-600">📬 Contact Me</h1>

            <p className="mt-4 text-lg text-gray-700"> Have a question or want to work together? Fill out the form below!</p>

            {/* Contact Form */}
            <form className="mt-8 max-w-md space-y-4">
                <div>
                    <label className="block text-gray-700 font-medium mb-1">
                        Your Name
                    </label>
                    <input type="text"
                        placeholder="John doe"
                        className="w-full px-4 py-2 border border-gray=300 rounded-lg focus:outline-none focus:ring-blue-500"
                    />
                </div>

                <div>
                    <label className="block text-gray-700 font-medium mb-1">Email Address
                    </label>
                    <input type="text"
                        placeholder="example@gmail.com"
                        className="w-full px-4 py-2 border border-gray=300 rounded-lg focus:outline-none focus:ring-blue-500"
                    />
                </div>
                <div>
                    <label className="block text-gray-700 font-medium mb-1">
                        Message
                    </label>
                    <textarea
                        rows={4}
                        placeholder="Your message here..."
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <button
                    type="submit"
                    className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-medium"
                >
                    Send Message ✉️
                </button>
                {/* Back to Home Link */}
                <Link
                    href="/"
                    className="mt-8 inline-block px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition"
                >
                    ← Back to Home
                </Link>
            </form>
        </main>
    );
}