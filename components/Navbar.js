import React, { useState, useEffect } from 'react'
import NavLink from './NavLink'
import DarkLightToggle from './DarkLightToggle'
import { useRouter } from "next/router";
import { motion } from "framer-motion";


export default function Navbar({theme,onThemeChange }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50) // threshold for background
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, []);

useEffect(() => {
  const close = () => setMenuOpen(false);
  router.events.on("routeChangeStart", close);
  return () => router.events.off("routeChangeStart", close);
}, []);



 const isActive = (href) => router.pathname === href;
  return (
    <motion.div
    key={router.pathname}
    initial={{ opacity: 0, y: -20 }} 
    animate={{ opacity: 1, y: 0 }}
     transition={{ duration: 0.6, ease: "easeOut" }}
      className={`navbar-compact fixed top-0 w-screen h-12 sm:h-14 md:h-16 z-50 flex justify-between items-center  px-4 sm:px-6 md:px-20 transition-colors duration-300
        ${scrolled ? "bg-gray-100/50 dark:bg-gray-800/50 backdrop-blur-md shadow-md" : "bg-transparent"}
        text-mainTxt dark:text-mainTxt-dark`}
    >
      {/* ---logo & toggle icon--- */}
      <div className="flex flex-row gap-4  items-center justify-center">
        <div className="text-base sm:text-lg md:text-xl font-architectsDaughter">{`<Delaram Farzad/>`} </div>
        <DarkLightToggle theme={theme} onThemeChange={onThemeChange} />

      </div>

      {/* Desktop Menu */}
      <nav
        data-aos="zoom-in"
        data-aos-duration="800"
        className="hidden sm:flex space-x-4 items-center justify-between md:text-xl text-lg"
      >
        <NavLink href="/" active={isActive("/")}>Home</NavLink>
        <NavLink href="/about" active={isActive("/about")}>About</NavLink>
        <NavLink href="/projects" active={isActive("/projects")}>Projects</NavLink>
        <NavLink href="/contact" active={isActive("/contact")}>Contact</NavLink>
      </nav>

      {/* Mobile Menu Button */}
      <button onClick={() => setMenuOpen(!menuOpen)} className="sm:hidden text-2xl">{menuOpen ? "✕" : "☰"}</button>
 {menuOpen && (
  <motion.div
    initial={{ opacity: 0, y: -10 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -10 }}
    transition={{ duration: 0.25, ease: "easeOut" }}
    className="sm:hidden absolute top-16 left-0 w-full bg-gray-100 dark:bg-gray-800 shadow-lg py-6 flex flex-col items-center gap-6 text-xl z-40"
  >
    <NavLink href="/" active={isActive("/")} onClick={() => setMenuOpen(false)}>Home</NavLink>
    <NavLink href="/about" active={isActive("/about")} onClick={() => setMenuOpen(false)}>About</NavLink>
    <NavLink href="/projects" active={isActive("/projects")} onClick={() => setMenuOpen(false)}>Projects</NavLink>
    <NavLink href="/contact" active={isActive("/contact")} onClick={() => setMenuOpen(false)}>Contact</NavLink>
  </motion.div>
)}


    </motion.div>
  )
}
