"use client";
import Link from "next/link";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
    const { user, logout } = useAuth();

    return (
        <nav className="bg-blue-600 text-white shadow-lg">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center py-4">
                    <Link href="/" className="text-2xl font-bold">
                        NextLearner
                    </Link>
                    <div className="space-x-4">
                        <Link href="/" className="hover:text-blue-200 transition">
                            Home
                        </Link>
                        <Link href="/posts" className="hover:text-blue-200 transition">
                            Posts
                        </Link>
                        <Link href="/about" className="hover:text-blue-200 transition">
                            About
                        </Link>
                        {user ? (
                            <>
                                <Link href="/dashboard" className="hover:text-blue-200 transition">
                                    Dashboard
                                </Link>
                                <button onClick={logout} className="hover:text-blue-200 transition">
                                    Logout ({user.name})
                                </button>
                            </>
                        ) : (
                            <>
                                <Link href="/login" className="hover:text-blue-200 transition">
                                    Login
                                </Link>
                                <Link href="/register" className="hover:text-blue-200 transition">
                                    Register
                                </Link>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
}