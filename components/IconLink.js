import Svg from "./Svg";
import { motion } from "framer-motion";

export default function IconLink({ svgID, href, className }) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileTap={{ scale: 0.82 }}
    >
      <Svg
        svgId={svgID}
        className={`w-12 h-12 text-black dark:text-white hover:text-sky-500 active:text-sky-500 dark:hover:text-sky-400 dark:active:text-sky-400 transition-colors duration-200 ${className}`}
      />
    </motion.a>
  );
}
