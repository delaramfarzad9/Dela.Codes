import React, { useState, useEffect } from 'react'
import NavLink from './NavLink'
import DarkLightToggle from './DarkLightToggle'
import { useRouter } from "next/router";


export default function Navbar({theme,onThemeChange }) {
  const [scrolled, setScrolled] = useState(false)
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50) // threshold for background
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

 const isActive = (href) => router.pathname === href;
  return (
    <div
      className={`fixed top-0 w-screen h-16 z-50 flex justify-between items-center px-4 sm:px-10 md:px-20 transition-colors duration-300
        ${scrolled ? "bg-gray-100/50 dark:bg-gray-800/50 backdrop-blur-md shadow-md" : "bg-transparent"}
        text-mainTxt dark:text-mainTxt-dark`}
    >
      {/* ---logo & toggle icon--- */}
      <div className="flex flex-row gap-4  items-center justify-center">
        <div className="md:text-xl xt-lg font-architectsDaughter">{`<Delaram Farzad/>`} </div>
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
      <button className="sm:hidden text-2xl">☰</button>
    </div>
  )
}
