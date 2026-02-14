import Tech from "@/components/Tech";
import { skills, learning, design, tools } from "@/data/skills";
import SkillSection from "@/components/SkillSection";
import { motion } from "framer-motion";
import { useEffect,useState } from "react";
import React from "react";


export default function About({ theme }) {
  const [isLargeScreen, setIsLargeScreen] = useState(
  typeof window !== "undefined" ? window.innerWidth >= 1024 : false
);

React.useEffect(() => {
  const checkSize = () => setIsLargeScreen(window.innerWidth >= 1024);
  checkSize();
  window.addEventListener("resize", checkSize);
  return () => window.removeEventListener("resize", checkSize);
}, []);

const fadeLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 1.0, ease: "easeOut" }  // slower + smoother
  }
};

const fadeRight = {
  hidden: { opacity: 0, x: 60 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 1.0, ease: "easeOut" }  // slower + smoother
  }
};





  return (
    <>
      <section id="about" className="min-h-screen relative z-10 md:mx-20 mx-6  my-20 lg:my-0 ">
        <div className="flex flex-col justify-center items-center mb-20">
          {/* pic & paragraphs  */}
<div className=" flex flex-col lg:flex-row 
  justify-center 
  items-center lg:items-center xl:items-center
  gap-10 lg:gap-20 xl:gap-48
  dark:bg-[#1F2937] bg-[#E5E7EB]
  lg:mt-20 lg:mb-20">
          {/* pic */}
          <img
            src="/images/about/about3.png"
            alt="Dela profile"
            className="xl:h-96 xl:w-96 h-80 w-80 rounded-full object-cover shadow-lg lg:mt-20 "
          />
          {/* text column */}
          <div className="flex flex-col justify-center items-center">
            <div className="flex flex-row justify-between items-end w-full">
              {/* title */}
             
             <motion.h1
 initial={{ opacity: 0, x: isLargeScreen ? 0 : -50,  y: isLargeScreen ? -50 : 0,  }}
  whileInView={{ opacity: 1, x: 0, y: 0 }} 
  transition={{ duration: 0.8, ease: "easeOut" }}
   viewport={{ once: true }}
  className="text-3xl xl:text-4xl font-black text-center mb-10"
>
  About Me
</motion.h1>

             
              {/* CTA */}
              <motion.div
               initial={{ opacity: 0, x: 80 }}
                whileInView={{ opacity: 1, x: 0 }} 
                transition={{ duration: 0.8, ease: "easeOut" }}
                 viewport={{ once: true }}
               className="flex justify-center items-center m-10 ">
                <a
                  href="/DelaramFarzadResume (2).pdf"
                  download
                  className="
      relative inline-flex items-center justify-center
      px-8 py-3 lg:px-6 xl:px-8 overflow-hidden font-medium tracking-wide
      text-white bg-sky-400 hover:bg-sky-500
      rounded-lg shadow-lg transition duration-300 ease-out
      hover:shadow-xl group
    "
                >
                  <span
                    className="
        absolute inset-0 w-full h-full bg-linear-to-r
        from-pink-600 to-orange-400
        transform translate-x-full group-hover:translate-x-0
        transition-transform duration-500 ease-out
      "
                  ></span>
                  <span className="relative">Download CV</span>
                </a>
              </motion.div>
            </div>
                               {/* paragraphs */}
            <motion.div className="flex flex-col gap-2 w-full md:text-xl"
            initial="hidden"
             whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
               variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.2, 

             }, }, }}>
              <motion.p
              variants={{ hidden: { opacity: 0, y: 20 }, 
              visible: { opacity: 1, y: 0 }, }} 
              transition={{ duration: 0.5, ease: "easeOut" }}
              >
                I’m Dela, a Front‑End Developer with a strong focus on creating
                clean, responsive, and user‑friendly interfaces. I work with{" "}
                <Tech tech="HTML" />, <Tech tech="CSS" />,
                <Tech tech="JavaScript" /> ,<Tech tech="Tailwind CSS" /> ,
                <Tech tech="React.js" /> , and I’m currently advancing my skills
                in
                <Tech tech="Next.js" /> and exploring <Tech tech="TypeScript" />
                .
              </motion.p>
              <motion.p variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 }, }} transition={{ duration: 0.5, ease: "easeOut" }}>
                I’ve built several projects, including a personal website in
                Next.js, a React admin dashboard, a task manager app, a
                real‑time weather app using APIs, and multiple smaller web
                applications.
              </motion.p>
              <motion.p variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 }, }} transition={{ duration: 0.5, ease: "easeOut" }}>
                With a background in architecture and <Tech tech="UI/UX" /> design, I bring a strong visual perspective and a love for creating intuitive digital experiences. I’m looking for opportunities to grow, collaborate, and gain real‑world experience.
              </motion.p>
              <motion.p variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 }, }} transition={{ duration: 0.5, ease: "easeOut" }}>
                I speak <Tech tech="English" />, <Tech tech="German" />, and <Tech tech="Persian" />.
              </motion.p>
            </motion.div>
    

          </div>
        </div>
         {/* Skills Section */}
<motion.div 
initial="hidden" 
whileInView="visible"
 viewport={{ once: true, amount: 0.2 }}
  transition={{ staggerChildren: 0.45 }}
className="grid grid-cols-1 gap-x-20 md:grid-cols-2 lg:gap-x-40 max-w-7xl mx-auto ">
              {/* core front end  */}
              <motion.div
              variants={fadeLeft} 
               
                  transition={{ duration: 0.7, ease: "easeOut" }}
              >
<SkillSection title="Core Frontend Skills" items={skills} variant="default"/>
              </motion.div>
  
{/* learning  */}
  <motion.div variants={fadeRight} 
              >
    <SkillSection title="Learning" items={learning} variant="learning"  />
  </motion.div>
{/* design  */}
 <motion.div variants={fadeLeft} 
              >
  <SkillSection title="Design" items={design} variant="design"  />
 </motion.div>
{/* tools  */}
  <motion.div variants={fadeRight} 
              ><SkillSection title="Tools" items={tools} variant="tools"  /></motion.div>
</motion.div>


        </div>
        
       



      </section>
    </>
  );
}
