import { motion } from "framer-motion";

export default function Logo({ className }) {
  return (
    <div className={`relative ${className}`}>
      {/* Light mode normal */}
      <motion.img
        src="/images/hero/MyImg.png"
        alt="Logo"
        className="dark:hidden absolute inset-0"
        animate={{ opacity: [1, 0, 0, 1] }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Light mode rotated */}
      <motion.img
        src="/images/hero/MyImgB.png"
        alt="Logo Rotated"
        className="dark:hidden absolute inset-0"
        animate={{ opacity: [0, 0, 1, 0] }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Dark mode normal */}
      <motion.img
        src="/images/hero/MyImgDark.png"
        alt="Logo Dark"
        className="hidden dark:inline-flex absolute inset-0"
        animate={{ opacity: [1, 0, 0, 1] }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Dark mode rotated */}
      <motion.img
        src="/images/hero/MyImgDarkB.png"
        alt="Logo Dark Rotated"
        className="hidden dark:inline-flex absolute inset-0"
        animate={{ opacity: [0, 0, 1, 0] }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
}
