import Image from "next/image";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Svg from "./Svg";

const ProjectsCard = ({ project, index }) => {
  const [isLargeScreen, setIsLargeScreen] = useState(
    typeof window !== "undefined" ? window.innerWidth >= 1024 : false,
  );

  useEffect(() => {
    const checkSize = () => setIsLargeScreen(window.innerWidth >= 1024);
    checkSize();
    window.addEventListener("resize", checkSize);
    return () => window.removeEventListener("resize", checkSize);
  }, []);

  const isEven = index % 2 === 0;

  const fadeImg = {
    hidden: { opacity: 0, x: isLargeScreen ? (isEven ? -50 : 50) : -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const fadeText = {
    hidden: { opacity: 0, x: isLargeScreen ? (isEven ? 50 : -50) : 20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut", delay: 0.1 },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.05 }}
      className={`flex ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"} flex-col gap-8 lg:gap-14
        bg-white/30 dark:bg-white/5 backdrop-blur-sm
        border border-white/50 dark:border-white/10
        rounded-2xl p-6 md:p-10 shadow-lg`}
    >
      {/* Image */}
      <motion.div variants={fadeImg} className="lg:w-1/2 w-full shrink-0">
        <div className="relative overflow-hidden rounded-2xl shadow-xl group">
          <Image
            src={project.img}
            alt={project.title}
            width={600}
            height={338}
            className="w-full aspect-video object-fit  transition-transform duration-500 group-hover:scale-[1.04]"
          />
          {/* Hover color wash overlay */}
          <div className="absolute inset-0 bg-linear-to-br from-sky-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
        </div>
      </motion.div>

      {/* Content */}
      <motion.div
        variants={fadeText}
        className="flex flex-col gap-4 justify-center lg:w-1/2"
      >
        {/* Project number stamp */}
        <span className="text-xs font-black tracking-[0.2em] uppercase text-sky-400 font-spartan">
          Project {String(index + 1).padStart(2, "0")}
        </span>

        {/* Title */}
        <h2 className="font-black text-xl md:text-2xl lg:text-3xl leading-tight">
          {project.title}
        </h2>

        {/* Description */}
        <p className="text-sm md:text-base lg:text-lg leading-relaxed opacity-75">
          {project.description}
        </p>

        {/* Tech stack pills */}
        <div className="flex flex-wrap gap-2">
          {project.tech.map((t, i) => (
            <span
              key={i}
              className="bg-pink-600/90 text-gray-100 px-3 py-1 text-xs font-bold rounded-lg shadow-sm hover:scale-105 active:scale-95 transition-transform duration-200 cursor-default select-none"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex flex-row flex-wrap gap-3 mt-1">
          {/* Live Demo */}
          <motion.a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            whileTap={{ scale: 0.93 }}
            className="relative inline-flex items-center gap-2 px-6 py-2.5 rounded-xl font-semibold overflow-hidden text-white bg-sky-500 shadow-md hover:scale-105 active:scale-95 transition-all duration-300 group"
          >
            <span className="absolute inset-0 bg-linear-to-r from-pink-600 to-orange-400 translate-x-full group-hover:translate-x-0 group-active:translate-x-0 transition-transform duration-500 ease-out" />
            <Svg className="w-4 h-4 shrink-0" svgId="external-link" />
            <span className="relative">Live Demo</span>
          </motion.a>

          {/* Source Code */}
          <motion.a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            whileTap={{ scale: 0.93 }}
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl font-semibold border-2 border-current
              text-mainTxt dark:text-mainTxt-dark
              hover:text-sky-500 hover:border-sky-500 active:text-sky-500 active:border-sky-500
              dark:hover:text-sky-400 dark:hover:border-sky-400 dark:active:text-sky-400 dark:active:border-sky-400
              transition-all duration-200 hover:scale-105 active:scale-95"
          >
            <Svg className="w-4 h-4 shrink-0" svgId="github"></Svg>
            <span>Source Code</span>
          </motion.a>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectsCard;
