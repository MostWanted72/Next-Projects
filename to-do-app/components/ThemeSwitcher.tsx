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
    <div className="form-control gap-4">
      <label className="label cursor-pointer gap-4">
        <span className="label-text">
          {" "}
          Switch to {theme === "light" ? "dark" : "light"} theme
        </span>
        <input
          type="checkbox"
          className="toggle"
          onClick={toggleTheme}
          defaultChecked={theme === "light"}
        />
      </label>
    </div>
  );
};

export default ThemeSwitcher;
