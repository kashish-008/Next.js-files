import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[50vh] flex items-center justify-center px-4">
      <div className="max-w-2xl w-full">
        <div className="bg-white rounded-lg shadow-md p-8 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-gray-400">
            404 error
          </p>
          <h1 className="mt-4 text-3xl md:text-4xl font-bold text-gray-800">
            This page wandered off
          </h1>
          <p className="mt-4 text-gray-600">
            The link you followed is missing or the page moved. Try heading back
            to the home page or explore the latest articles.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/"
              className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-6 py-3 text-white shadow-sm hover:bg-blue-700 transition"
            >
              Back to Home
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center rounded-lg border border-blue-200 px-6 py-3 text-blue-700 hover:border-blue-300 hover:text-blue-800 transition"
            >
              View Services
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
