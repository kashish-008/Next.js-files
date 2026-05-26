"use client";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { ThemeProvider, useTheme } from "./context/ThemeContext";

// Separate component to read context for body classes
function ThemedBody({ children }) {
  const { isDark } = useTheme();
  return (
    <body
      className={`flex min-h-screen flex-col transition-colors duration-300 ${
        isDark ? "text-slate-100" : "text-slate-800"
      }`}
      style={
        isDark
          ? {
              background:
                "linear-gradient(180deg, rgba(15,23,42,1), rgba(11,17,32,1))",
            }
          : undefined
      }
    >
      <Navbar />
      <main className="flex justify-center grow">{children}</main>
      <Footer />
    </body>
  );
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <ThemeProvider>
        <ThemedBody>{children}</ThemedBody>
      </ThemeProvider>
    </html>
  );
}