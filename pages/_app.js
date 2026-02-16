

import "@/styles/globals.css";
import { useEffect, useState } from "react";

import ParticlesComponent from "@/components/ParticlesComponent";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SvgSprite from "@/components/SvgSprite";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import Loader from "@/components/Loader";


export default function App({ Component, pageProps }) {
  const [theme, setTheme] = useState("dark");
  const [loading, setLoading] = useState(true);
  const router = useRouter();
useEffect(() => {
   const timer = setTimeout(() =>
     { setLoading(false); }, 1200); 
 return () => clearTimeout(timer); }, []);



  // Theme handling
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme") || "dark";
    setTheme(storedTheme);
    document.documentElement.classList.toggle("dark", storedTheme === "dark");
  }, []);

  const changeTheme = (newTheme) => {
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  return (
    <>
     {loading && <Loader />}
      <SvgSprite />
      <ParticlesComponent
        id="particles"
        theme={theme}
        className="absolute inset-0 -z-10 pointer-events-none"
      />
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
