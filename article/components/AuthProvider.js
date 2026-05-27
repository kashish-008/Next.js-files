'use client';

import { AuthProvider as Provider } from '../context/AuthContext';

export default function AuthProvider({ children }) {
  return <Provider>{children}</Provider>;
}