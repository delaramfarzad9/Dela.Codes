import ProjectsCard from "../components/ProjectsCard";
import projects from "../data/projects.js";
import { motion } from "framer-motion";

const Projects = ({ theme }) => {
  return (
    <section
      id="projects"
      className="min-h-[80vh] max-w-7xl mx-auto relative z-10 lg:mx-20 mt-20 lg:mt-30 lg:mb-20 landscape-projects"
    >
      <div className="flex flex-col dark:bg-[#1F2937] bg-[#E5E7EB] px-5 md:px-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mb-12 md:mb-20 mx-4"
        >
          <h1 className="text-3xl md:text-4xl font-black md:text-center">
            My{" "}
            <span className="bg-linear-to-r from-sky-400 to-pink-500 bg-clip-text text-transparent">
              Projects
            </span>
          </h1>
          <p className="mt-3 text-sm md:text-base opacity-60 md:text-center tracking-wide">
            A selection of things I&apos;ve designed &amp; built
          </p>
        </motion.div>

        {/* Projects list */}
        <div className="flex flex-col gap-12 md:gap-16 mb-20">
          {projects.map((project, index) => (
            <ProjectsCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
