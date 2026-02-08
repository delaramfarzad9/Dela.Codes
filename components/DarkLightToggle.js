import React, { useState, useEffect } from "react";
import Svg from "./Svg";

export default function DarkLightToggle({ onThemeChange }) {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");

    if (!storedTheme) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDark(true);
      onThemeChange?.("dark");
      return;
    }

    if (storedTheme === "dark") {
      document.documentElement.classList.add("dark");
      setIsDark(true);
      onThemeChange?.("dark");
    } else {
      document.documentElement.classList.remove("dark");
      setIsDark(false);
      onThemeChange?.("light");
    }
  }, []);

  function toggleTheme() {
    const newTheme = isDark ? "light" : "dark";
    document.documentElement.classList.toggle("dark", newTheme === "dark");
    localStorage.setItem("theme", newTheme);
    setIsDark(!isDark);
    onThemeChange?.(newTheme);
  }

  return (
    <button onClick={toggleTheme}>
     
    <Svg
  svgId={isDark ? "sun" : "moon"}
  className={`cursor-pointer transition-transform duration-500 md:w-8 md:h-8 ${isDark ? "rotate-180 text-yellow-400 " : " text-gray-500 rotate-0 "}`}/>
    </button>
  );
}
