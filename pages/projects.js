
import ProjectsCard from '../components/ProjectsCard'
import projects from "../data/projects.js"

const Projects = ({ theme }) => {
  return (
    <section id='projects' className='min-h-screen relative z-10 mx-20 lg:mt-30 lg:mb-20'>
<div className='flex flex-col dark:bg-[#1F2937] bg-[#E5E7EB]'>
<h1 data-aos="fade-down" data-aos-duration="1500" className='text-4xl font-black text-center mb-20'>Projects</h1>

{/* projects list  */}
<div className='flex flex-col gap-20'>
  {projects.map((project, index) => (
    <ProjectsCard key={index} project={project}  />
  ))}   

</div>
</div>
    </section>
    )   
}

export default Projects