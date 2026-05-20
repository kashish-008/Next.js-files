// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";

export const metadata: Metadata = {
  title: "My Next.js Blog",
  description: "A simple blog built with Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-50">
        {/* Navbar */}
        <nav className="bg-white shadow-md sticky top-0 z-50">
          <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold text-blue-600">
              📝 MyBlog
            </Link>
            <div className="flex gap-6">
              <Link 
                href="/" 
                className="text-gray-600 hover:text-blue-600 transition font-medium"
              >
                Home
              </Link>
              <Link 
                href="/about" 
                className="text-gray-600 hover:text-blue-600 transition font-medium"
              >
                About
              </Link>
              <Link 
                href="/contact" 
                className="text-gray-600 hover:text-blue-600 transition font-medium"
              >
                Contact
              </Link>
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <div className="max-w-6xl mx-auto">
          {children}
        </div>

        {/* Footer */}
        <footer className="bg-white border-t mt-12">
          <div className="max-w-6xl mx-auto px-4 py-6 text-center text-gray-600">
            <p>© 2026 MyBlog. Built with ❤️ using Next.js</p>
          </div>
        </footer>
      </body>
    </html>
  );
}