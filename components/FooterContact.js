import Svg from "./Svg";
import Link from "next/link";
import { motion } from "framer-motion";

export default function FooterContact() {
  return (
    <motion.div whileTap={{ scale: 0.93 }}>
      <Link
        className="inline-flex flex-row items-center gap-2 px-5 py-2 rounded-xl font-semibold text-sm whitespace-nowrap
            relative overflow-hidden
            bg-white/10 dark:bg-white/5 backdrop-blur-md
            border border-sky-400/50 dark:border-pink-400/30
            shadow-[0_0_12px_rgba(56,189,248,0.15)]
            hover:shadow-[0_0_20px_rgba(236,72,153,0.35)] active:shadow-[0_0_20px_rgba(236,72,153,0.35)]
            transition-all duration-300
            group"
        href="/contact"
      >
        {/* filled gradient overlay on hover/tap */}
        <span className="absolute inset-0 bg-linear-to-r from-sky-400 to-pink-500 opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-opacity duration-300" />

        {/* icon — gradient tint at rest, white on hover */}
        <Svg
          svgId="email"
          className="relative w-4 h-4 shrink-0 text-sky-500 dark:text-pink-300 group-hover:text-white group-active:text-white transition-colors duration-300"
        />

        {/* text — gradient at rest, white on hover */}
        <span className="relative bg-linear-to-r from-sky-400 to-pink-500 bg-clip-text text-transparent group-hover:text-white group-active:text-white transition-colors duration-300">
          Contact Me
        </span>
      </Link>
    </motion.div>
  );
}
