"use client";
import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

// Helper to read user from localStorage (only runs once)
const getInitialUser = () => {
  if (typeof window === "undefined") return null;
  const stored = localStorage.getItem("user");
  return stored ? JSON.parse(stored) : null;
};

export function AuthProvider({ children }) {
  const [user, setUser] = useState(getInitialUser);
  const loading = false; // loading state unused; keep as constant for API compatibility

  const login = (email) => {
    const newUser = { email, name: email.split("@")[0] };
    localStorage.setItem("user", JSON.stringify(newUser));
    setUser(newUser);
    return true;
  };

  const register = (name, email) => {
    const newUser = { email, name };
    localStorage.setItem("user", JSON.stringify(newUser));
    setUser(newUser);
    return true;
  };

  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}