// components/ThemeSwitcher.tsx
"use client"; // For Next.js 13+ with server components

import { useEffect, useState } from "react";

const ThemeSwitcher = () => {
  const [theme, setTheme] = useState<string>("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
    document.documentElement.setAttribute("data-theme", savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme); // Persist the theme in localStorage
  };

  return (
    <button onClick={toggleTheme} className="btn btn-primary btn-sm">
      Switch to {theme === "light" ? "dark" : "light"} theme
    </button>
  );
};

export default ThemeSwitcher;
