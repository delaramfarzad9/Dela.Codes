import "@/styles/globals.css";
import Navbar from "../components/Navbar";
import SvgSprite from "../components/SvgSprite";
import Footer from "@/components/Footer";
import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function App({ Component, pageProps }) {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    // Load theme safely on client
    const stored = localStorage.getItem("theme") || "dark";
    setTheme(stored);

    // Init AOS
    AOS.init({ duration: 1000, once: false });
  }, []);

  return (
    <>
      <SvgSprite />
      <div className="flex flex-col min-h-screen">
        <Navbar onThemeChange={setTheme} />
        <main className="flex-grow container mx-auto p-6">
          <Component {...pageProps} theme={theme} />
        </main>
        <Footer />
      </div>
    </>
  );
}
