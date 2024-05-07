import ProjectCard from "./ProjectCard"
import { useLoaderData } from "react-router-dom"
function Projects() {
  const projectData = useLoaderData()
  return (
    <>
        {/* Breadcrubm start */}
        <section className="breadcrumb_section px-8 pt-10 md:px-20 lg:px-40">
           <div>
            <p>Home/Projects</p>
           </div>
        </section>
        {/* Breadcrubm end */}

        <section className="projects_section px-8 pt-10 md:px-20 lg:px-40">
          <div className="container grid grid-cols-3 gap-x-5 gap-y-16">
            {
              projectData.map((project) => {
                return (
                  <ProjectCard key={project.id} project = {project}/>
                )
              })
            }
            
          </div>
        </section>
    </>
  )
}

export default Projects