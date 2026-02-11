import Tech from "@/components/Tech";
import SkillBtn from "@/components/SkillBtn";
import { skills, learning, design, tools } from "@/data/skills";
export default function About({ theme }) {
  

  return (
    <>
      <section id="about" className="min-h-screen relative z-10 mx-20 ">
        <div className="flex flex-col justify-center items-center mb-20">
          {/* pic & about row  */}
<div className="flex flex-row  justify-center items-center lg:gap-48 dark:bg-[#1F2937] bg-[#E5E7EB] lg:mt-20 lg:mb-20">
          {/* pic */}
          <img
            src="/images/about/about3.png"
            alt="Dela profile"
            className="h-96 w-96 rounded-full object-cover shadow-lg lg:mt-20 "
          />
          {/* text column */}
          <div className="flex flex-col justify-center items-center">
            <div className="flex flex-row justify-between items-end w-full">
              {/* title */}
              <h1 className=" text-4xl font-black text-center mb-10 ">
                About Me
              </h1>
              {/* CTA */}
              <div className="flex justify-center items-center m-10 ">
                <a
                  href="/DelaramFarzadResume (2).pdf"
                  download
                  className="
      relative inline-flex items-center justify-center
      px-8 py-3 overflow-hidden font-medium tracking-wide
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
              </div>
            </div>
{/* paragraphs */}
            <div className="flex flex-col gap-2 text-xl">
              <p>
                I’m Dela, a Front‑End Developer with a strong focus on creating
                clean, responsive, and user‑friendly interfaces. I work with{" "}
                <Tech tech="HTML" />, <Tech tech="CSS" />,
                <Tech tech="JavaScript" /> ,<Tech tech="Tailwind CSS" /> ,
                <Tech tech="React.js" /> , and I’m currently advancing my skills
                in
                <Tech tech="Next.js" /> and exploring <Tech tech="TypeScript" />
                .
              </p>
              <p>
                I’ve built several projects, including a personal website in
                Next.js, a React admin dashboard, a task manager app, a
                real‑time weather app using APIs, and multiple smaller web
                applications.
              </p>
              <p>
                With a background in architecture and <Tech tech="UI/UX" />{" "}
                design, I bring a strong visual perspective and a deep
                appreciation for structure, clarity, and user experience. I
                enjoy combining design and development to create digital
                experiences that feel intuitive and visually engaging.
              </p>
              <p>
                I’m currently looking for opportunities to gain real‑world
                experience, collaborate with a team, and continue growing my
                React and Next.js skills
              </p>
            </div>
    

          </div>
        </div>
         {/* Skills Section */}
<div className="grid grid-cols-1 sm:grid-cols-2 lg:gap-x-40 max-w-7xl mx-auto ">
              {/* core front end  */}
<div className="mt-12 w-full">
  <h2 className="text-2xl font-bold mb-6 text-center lg:text-left">
    Core Frontend Skills
  </h2>
  <div className="flex flex-row flex-wrap gap-4">
{skills.map((skill,index)=><SkillBtn key={index} skill={skill}/>)}
  </div>
</div>
{/* learning  */}
<div className="mt-12 w-full">
  <h2 className="text-2xl font-bold mb-6 text-center lg:text-left">
    Learning
  </h2>
  <div className="flex flex-row flex-wrap gap-4">
{learning.map((skill,index)=><SkillBtn key={index} skill={skill} variant="learning"  />)}
  </div>
</div>
{/* design  */}
<div className="mt-12 w-full">
  <h2 className="text-2xl font-bold mb-6 text-center lg:text-left">
    Design
  </h2>
  <div className="flex flex-row flex-wrap gap-4">
{design.map((skill,index)=><SkillBtn key={index} skill={skill} variant="design"/>)}
  </div>
</div>
{/* tools  */}
<div className="mt-12 w-full">
  <h2 className="text-2xl font-bold mb-6 text-center lg:text-left">
    Tools
  </h2>
  <div className="flex flex-row flex-wrap gap-4">
{tools.map((skill,index)=><SkillBtn key={index} skill={skill} variant="tools" className="bg-pink-600!"/>)}
  </div>
</div>
</div>


        </div>
        
       



      </section>
    </>
  );
}
