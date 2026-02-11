


const ProjectsCard = ({project}) => {
  return (
    <div className='flex flex-row justify-center items-center  gap-10 mb-10'>

    <img src={project.img} alt={project.title} className=' h-56'/>

{/* title/description/techs */}
<div className='flex flex-col gap-5 m-5'>
<div className='flex flex-row justify-between'>
    <h2 className='font-bold text-2xl'>{project.title}</h2>
{/* demo & code  */}
<div className='flex flex-row gap-5'>
    <a href={project.demo} target="_blank" rel="noopener noreferrer" className='px-3 py-1 bg-sky-400 rounded-md hover:bg-sky-500'>Demo</a>
     <a href={project.github} target="_blank" rel="noopener noreferrer" className='px-5 py-2 bg-orange-400 rounded-md hover:bg-orange-500'>Code</a>
</div>
</div>
<p className='max-w-lg text-lg'>{project.description}</p>
{/* Tech stack tags */}
        <div className="flex flex-wrap gap-2">
          {project.tech.map((t, i) => (
            <span key={i} className="bg-pink-600 px-3 py-1 text-sm rounded-md">
              {t}
            </span>
          ))}
        </div>

</div>

</div>
    
  )
}

export default ProjectsCard