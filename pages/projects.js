
import ProjectsCard from '../components/ProjectsCard'
import projects from "../data/projects.js"
import { motion } from "framer-motion";


const Projects = ({ theme }) => {
  return (
    <section id='projects' className='min-h-screen max-w-screen relative z-10 lg:mx-20 mx-5 mt-20 lg:mt-30 lg:mb-20'>
<div className='flex flex-col dark:bg-[#1F2937] bg-[#E5E7EB]'>
<motion.h1 
initial={{ opacity: 0, y: -40 }}
 whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, ease: "easeOut" }}
   viewport={{ once: true }}
 className='text-4xl font-black text-center mb-20'>Projects</motion.h1>

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