
import projects from "../data/projects.json"; 
import ProjectCard from "./ProjectCard";
import { anticipate, motion, useScroll } from "motion/react"

function Projects() {
  const  scrollYProgress  = useScroll().scrollYProgress
  return (
    <div>
      <motion.div style={{backgroundColor:'red', width:'100%', height:'10px', position:'fixed', top:52, left:0, scaleX:scrollYProgress, originX:0, originY:0}}>
      </motion.div>
      <motion.div  className="min-h-screen w-fill mt-45 pt-12 flex justify-center bg-gradient-to-br from-indigo-300 to-white dark:from-gray-400 dark:to-gray-800">
        <div className=" ">
          <section id="Projects" className="max-w-7xl mx-auto px-6 py-12">
            <h2 className="text-3xl md:text-4xl text-indigo-50 font-bold gap-6 mb-8">Projects</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center">
              {projects.map((p) => (
                <ProjectCard key={p.id} p={p} />
              ))}

            </div>
            <div>for more Please visit on my <a href="https://github.com/Aakashoptimusstark">GitHub</a> </div>
          </section>
        </div> 
       
      </motion.div>
      <br />
      
    </div>
  );
}

export default Projects