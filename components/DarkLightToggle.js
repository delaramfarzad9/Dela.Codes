import React, { useState, useEffect } from "react";
import Svg from "./Svg";

export default function DarkLightToggle({ theme, onThemeChange }) {
  const isDark = theme === "dark";

  function toggleTheme() {
    onThemeChange(isDark ? "light" : "dark");
  }

  return (
    <button onClick={toggleTheme}>
      <Svg
        svgId={isDark ? "sun" : "moon"}
        className={`cursor-pointer transition-transform duration-500 md:w-8 md:h-8 
          ${isDark ? "rotate-180 text-yellow-400" : "text-gray-500"}`}
      />
    </button>
  );
}