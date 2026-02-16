
import ProjectsCard from '../components/ProjectsCard'
import projects from "../data/projects.js"
import { motion } from "framer-motion";


const Projects = ({ theme }) => {
  return (
    <section id='projects' className='min-h-screen max-w-7xl mx-auto
 relative z-10 lg:mx-20  mt-20 lg:mt-30 lg:mb-20 landscape-projects'>
<div className='flex flex-col dark:bg-[#1F2937] bg-[#E5E7EB] px-5 md:px-10'>
<motion.h1 
initial={{ opacity: 0, y: -40 }}
 whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, ease: "easeOut" }}
   viewport={{ once: true }}
 className='md:text-4xl text-3xl mx-4 font-black md:text-center md:mb-20 mb-10'>Projects</motion.h1>

{/* projects list  */}
<motion.div
initial="hidden"
 whileInView="visible" 
 viewport={{ once: true, amount: 0.2 }}
  transition={{ staggerChildren: 0.35 }}
 className='flex flex-col gap-20'>
  {projects.map((project) => (
    <ProjectsCard key={project.title} project={project}  />
  ))}   

</motion.div>
</div>
    </section>
    )   
}

export default Projects