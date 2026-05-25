import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata = {
  title: "Todo App",
  description: "Learn Next.js basics with todo app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col bg-slate-50 text-slate-800">
        <Navbar />
        <main className="flex justify-center grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}