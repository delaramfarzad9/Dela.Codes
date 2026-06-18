import React, { useState, useEffect } from "react";
import NavLink from "./NavLink";
import DarkLightToggle from "./DarkLightToggle";
import { useRouter } from "next/router";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function Navbar({ theme, onThemeChange }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
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
      className={`navbar-compact fixed top-0 w-full h-12 sm:h-14 md:h-16 z-50 flex justify-between items-center px-4 sm:px-6 md:px-20 transition-colors duration-300
        ${scrolled ? "bg-gray-100/50 dark:bg-gray-800/50 backdrop-blur-md shadow-md" : "bg-transparent"}
        text-mainTxt dark:text-mainTxt-dark`}
    >
      {/* Logo / Name — links to Home */}
      <div className="flex flex-row gap-4 items-center">
        <Link
          href="/"
          className="text-base sm:text-lg md:text-xl font-architectsDaughter hover:text-sky-400 active:text-sky-400 dark:hover:text-sky-400 dark:active:text-sky-400 transition-colors duration-300"
        >
          {`<Delaram Farzad/>`}
        </Link>
        <DarkLightToggle theme={theme} onThemeChange={onThemeChange} />
      </div>

      {/* Desktop Menu */}
      <nav className="hidden sm:flex space-x-6 items-center md:text-xl text-lg">
        <NavLink href="/" active={isActive("/")}>
          Home
        </NavLink>
        <NavLink href="/about" active={isActive("/about")}>
          About
        </NavLink>
        <NavLink href="/projects" active={isActive("/projects")}>
          Projects
        </NavLink>
        <NavLink href="/contact" active={isActive("/contact")}>
          Contact
        </NavLink>
      </nav>

      {/* Mobile Hamburger — animated 3-bar morphing to X */}
      <motion.button
        onClick={() => setMenuOpen(!menuOpen)}
        whileTap={{ scale: 0.85 }}
        className="sm:hidden flex flex-col justify-center items-center w-9 h-9 gap-1.5 rounded-lg hover:bg-gray-200/40 active:bg-gray-200/40 dark:hover:bg-gray-600/40 dark:active:bg-gray-600/40 transition-colors duration-200"
        aria-label="Toggle menu"
      >
        <span
          className={`block h-0.5 w-5 bg-current rounded-full transition-all duration-300 origin-center ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
        />
        <span
          className={`block h-0.5 w-5 bg-current rounded-full transition-all duration-300 ${menuOpen ? "opacity-0 scale-x-0" : ""}`}
        />
        <span
          className={`block h-0.5 w-5 bg-current rounded-full transition-all duration-300 origin-center ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
        />
      </motion.button>

      {/* Click-outside backdrop */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-30"
          onClick={() => setMenuOpen(false)}
        />
      )}

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="sm:hidden absolute top-12 sm:top-14 left-0 w-full bg-gray-100/95 dark:bg-gray-800/95 backdrop-blur-md shadow-lg py-8 flex flex-col items-center gap-7 text-xl z-40"
          >
            <NavLink
              href="/"
              active={isActive("/")}
              onClick={() => setMenuOpen(false)}
            >
              Home
            </NavLink>
            <NavLink
              href="/about"
              active={isActive("/about")}
              onClick={() => setMenuOpen(false)}
            >
              About
            </NavLink>
            <NavLink
              href="/projects"
              active={isActive("/projects")}
              onClick={() => setMenuOpen(false)}
            >
              Projects
            </NavLink>
            <NavLink
              href="/contact"
              active={isActive("/contact")}
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </NavLink>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
