'use client';

import { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

// Helper to get users from localStorage
const getStoredUsers = () => {
  if (typeof window === 'undefined') return [];
  const users = localStorage.getItem('app_users');
  return users ? JSON.parse(users) : [];
};

// Helper to save users
const saveUsers = (users) => {
  localStorage.setItem('app_users', JSON.stringify(users));
};

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Check for existing session on load
  useEffect(() => {
    const storedUser = localStorage.getItem('current_user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  // Register new user
  const register = async (name, email, password) => {
    const users = getStoredUsers();
    
    // Check if email already exists
    if (users.find(u => u.email === email)) {
      throw new Error('Email already registered');
    }

    const newUser = {
      id: Date.now().toString(),
      name,
      email,
      password // In real app, hash this!
    };
    
    users.push(newUser);
    saveUsers(users);
    return { success: true };
  };

  // Login user
  const login = async (email, password) => {
    const users = getStoredUsers();
    const foundUser = users.find(u => u.email === email && u.password === password);
    
    if (!foundUser) {
      throw new Error('Invalid email or password');
    }

    const { password: _, ...userWithoutPassword } = foundUser;
    setUser(userWithoutPassword);
    localStorage.setItem('current_user', JSON.stringify(userWithoutPassword));
    return userWithoutPassword;
  };

  // Logout user
  const logout = () => {
    setUser(null);
    localStorage.removeItem('current_user');
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, logout, register }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
}