// pages/_app.js
"use client";

import "@/styles/globals.css";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import ParticlesComponent from "@/components/ParticlesComponent";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SvgSprite from "@/components/SvgSprite";

export default function App({ Component, pageProps }) {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme") || "dark";
    setTheme(storedTheme);

    document.documentElement.classList.toggle(
      "dark",
      storedTheme === "dark"
    );

    AOS.init({ duration: 1000, once: false });
  }, []);

  const changeTheme = (newTheme) => {
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  return (
    <>
      <SvgSprite />
      <ParticlesComponent id="particles" theme={theme} className="absolute inset-0 -z-10 pointer-events-none"/>
      <div className="flex flex-col min-h-screen">
        <Navbar theme={theme} onThemeChange={changeTheme} />
        <main>
          <Component {...pageProps} theme={theme} />
        </main>
        <Footer theme={theme} />
      </div>
    </>
  );
}
