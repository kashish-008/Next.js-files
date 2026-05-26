"use client";

import { createContext, useContext, useState } from "react";

// 1. Create the noticeboard
const ThemeContext = createContext();

// 2. Create the Provider — this wraps the app and holds the state
export function ThemeProvider({ children }) {
  const [isDark, setIsDark] = useState(false);

  return (
    <ThemeContext.Provider
      value={{
        isDark,
        enableDark: () => setIsDark(true),
        enableLight: () => setIsDark(false),
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

// 3. Create a custom hook — so any component can read the context easily
export function useTheme() {
  return useContext(ThemeContext);
}