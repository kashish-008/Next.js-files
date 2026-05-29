"use client";

import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { useAppContext } from "@/context/AppContext";

const PUBLIC_PATHS = new Set(["/", "/login", "/signup"]);

export default function AuthGate({ children }) {
  const { user, isReady } = useAppContext();
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    if (!isReady) return;
    if (user) return;
    if (PUBLIC_PATHS.has(pathname)) return;

    toast.error("Please login or sign up to continue", { duration: 1000 });
    router.replace("/login");
  }, [isReady, user, pathname, router]);

  if (!isReady) return null;

  return children;
}
