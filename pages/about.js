import Tech from "@/components/Tech";
import { skills, learning, design, tools } from "@/data/skills";
import SkillSection from "@/components/SkillSection";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import React from "react";
import Image from "next/image";

export default function About({ theme }) {
  const [isLargeScreen, setIsLargeScreen] = useState(
    typeof window !== "undefined" ? window.innerWidth >= 1024 : false,
  );

  React.useEffect(() => {
    const checkSize = () => setIsLargeScreen(window.innerWidth >= 1024);
    checkSize();
    window.addEventListener("resize", checkSize);
    return () => window.removeEventListener("resize", checkSize);
  }, []);

  const fadeLeft = {
    hidden: { opacity: 0, x: isLargeScreen ? -60 : -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 1.0, ease: "easeOut" },
    },
  };

  const fadeRight = {
    hidden: { opacity: 0, x: isLargeScreen ? 60 : 20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 1.0, ease: "easeOut" },
    },
  };

  return (
    <>
      <section
        id="about"
        className="min-h-screen max-w-7xl mx-auto
 relative z-10 md:mx-20  mt-20 mb-20 lg:mt-0 "
      >
        <div className="flex flex-col justify-center items-center ">
          {/* pic & paragraphs  */}
          <div
            className=" flex flex-col lg:flex-row 
  justify-center 
  items-center 
  gap-10 lg:gap-20 xl:gap-48
  dark:bg-[#1F2937] bg-[#E5E7EB]
  lg:mt-20 lg:mb-20 overflow-hidden px-6 md:px-10
"
          >
            {/* pic */}
            <motion.div
              variants={fadeLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="shrink-0 p-0.75 rounded-full bg-linear-to-br from-sky-400 to-pink-500 shadow-2xl"
            >
              <Image
                src="/images/about/about3.png"
                alt="Dela profile"
                width={400}
                height={400}
                priority
                className="rounded-full object-cover h-72 w-72 md:h-80 md:w-80 lg:h-80 lg:w-80 xl:h-96 xl:w-96"
              />
            </motion.div>

            {/* text column */}
            <div className="flex flex-col justify-center items-start max-w-xl">
              {/* title */}
              <motion.h1
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                viewport={{ once: true }}
                className="text-3xl md:text-4xl xl:text-5xl font-black mb-8 text-left"
              >
                About{" "}
                <span className="bg-linear-to-r from-sky-400 to-pink-500 bg-clip-text text-transparent">
                  Me
                </span>
              </motion.h1>
              {/* paragraphs */}
              <motion.div
                className="flex flex-col gap-5 w-full md:text-lg leading-relaxed"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={{
                  hidden: {},
                  visible: { transition: { staggerChildren: 0.2 } },
                }}
              >
                <motion.p
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                >
                  I’m Dela, a Front‑End Developer with a strong focus on
                  creating clean, responsive, and user‑friendly interfaces. I
                  work with <Tech tech="HTML" />, <Tech tech="CSS" />,
                  <Tech tech="JavaScript" /> ,<Tech tech="Tailwind CSS" /> ,
                  <Tech tech="React.js" /> , and I’m currently advancing my
                  skills in
                  <Tech tech="Next.js" /> and exploring{" "}
                  <Tech tech="TypeScript" />.
                </motion.p>
                <motion.p
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                >
                  I’ve built several projects, including a personal website in
                  Next.js, a React admin dashboard, a task manager app, a
                  real‑time weather app using APIs, and multiple smaller web
                  applications.
                </motion.p>
                <motion.p
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                >
                  With a background in architecture and <Tech tech="UI/UX" />{" "}
                  design, I bring a strong visual perspective and a love for
                  creating intuitive digital experiences. I’m looking for
                  opportunities to grow, collaborate, and gain real‑world
                  experience.
                </motion.p>
                <motion.p
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                >
                  I speak <Tech tech="English" />, <Tech tech="German" />, and{" "}
                  <Tech tech="Persian" />.
                </motion.p>
              </motion.div>

              {/* Download CV */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: "easeOut", delay: 0.4 }}
                viewport={{ once: true }}
                className="mt-8"
              >
                <a
                  href="/DelaramFarzadResume (2).pdf"
                  download
                  className="relative inline-flex items-center justify-center gap-2 py-3 px-7 overflow-hidden font-semibold tracking-wide text-white bg-sky-400 rounded-xl shadow-lg transition-all duration-300 ease-out hover:shadow-xl hover:scale-105 active:scale-95 group"
                >
                  <span className="absolute inset-0 w-full h-full bg-linear-to-r from-pink-600 to-orange-400 transform translate-x-full group-hover:translate-x-0 group-active:translate-x-0 transition-transform duration-500 ease-out" />
                  <svg
                    className="relative w-4 h-4 shrink-0"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5 5-5M12 15V3"
                    />
                  </svg>
                  <span className="relative">Download CV</span>
                </a>
              </motion.div>
            </div>
          </div>
          {/* Skills Section */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-black text-center mt-16 mb-2"
          >
            My{" "}
            <span className="bg-linear-to-r from-sky-400 to-pink-500 bg-clip-text text-transparent">
              Skills
            </span>
          </motion.h2>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ staggerChildren: 0.45 }}
            className="grid grid-cols-1 gap-x-20 md:grid-cols-2 lg:gap-x-40 max-w-7xl mx-auto overflow-hidden px-6"
          >
            {/* core front end  */}
            <motion.div
              variants={fadeLeft}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <SkillSection
                title="Core Frontend Skills"
                items={skills}
                variant="default"
              />
            </motion.div>

            {/* learning  */}
            <motion.div variants={fadeRight}>
              <SkillSection
                title="Learning"
                items={learning}
                variant="learning"
              />
            </motion.div>
            {/* design  */}
            <motion.div variants={fadeLeft}>
              <SkillSection title="Design" items={design} variant="design" />
            </motion.div>
            {/* tools  */}
            <motion.div variants={fadeRight}>
              <SkillSection title="Tools" items={tools} variant="tools" />
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
