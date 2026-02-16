
import Image from "next/image"
import { motion } from "framer-motion";
import { useState,useEffect } from "react";


const ProjectsCard = ({project}) => {
  const [isLargeScreen, setIsLargeScreen] = useState(
  typeof window !== "undefined" ? window.innerWidth >= 1024 : false
);

useEffect(() => {
  const checkSize = () => setIsLargeScreen(window.innerWidth >= 1024);
  checkSize();
  window.addEventListener("resize", checkSize);
  return () => window.removeEventListener("resize", checkSize);
}, []);

 const fadeLeft = {
  hidden: { opacity: 0, x: isLargeScreen ? -50 : -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const fadeRight = {
  hidden: { opacity: 0, x: isLargeScreen ? 50 : 20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

  return (
    <motion.div
    initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.01 }} transition={{ duration: 0.6, ease: "easeOut" }}
     className='flex lg:flex-row flex-col-reverse justify-center items-center  gap-10 lg:gap-20 mb-10 px-4 md:px-6'>
<motion.div
variants={fadeLeft}
>
<Image src={project.img} alt={project.title} width={496} height={224} className=" object-cover  " />
</motion.div>
   

{/* title/description/techs */}
<motion.div
variants={fadeRight}
  className='flex flex-col gap-5 '>
  {/* title/demo/code  */}
<div className='flex md:flex-row flex-col space-y-4  justify-between md:items-center '>
    <h2 className='font-bold text-lg md:text-2xl'>{project.title}</h2>
{/* demo & code  */}
<div className='flex flex-row gap-2 md:gap-3 lg:gap-5'>
    <a href={project.demo} target="_blank" rel="noopener noreferrer" className='px-2 md:px-3 py-1 bg-sky-400 rounded-md hover:bg-sky-500 font-semibold'>Demo</a>
     <a href={project.github} target="_blank" rel="noopener noreferrer" className='px-3 md:px-5 py-1 bg-orange-400  rounded-md hover:bg-orange-500'>Code</a>
</div>
</div>
<p className='max-w-lg  md:text-lg'>{project.description}</p>
{/* Tech stack tags */}
        <div className="flex flex-wrap gap-2">
          {project.tech.map((t, i) => (
            <span key={i} className="bg-pink-600 px-3 py-1 text-sm rounded-md">
              {t}
            </span>
          ))}
        </div>

</motion.div>

</motion.div>
    
  )
}

export default ProjectsCard