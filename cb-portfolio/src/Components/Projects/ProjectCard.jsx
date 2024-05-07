import { Link } from "react-router-dom";
import projectStyle from '../../CSS/Projects page sytles/projects.module.css'

function ProjectCard(props) {
    const {project_id, project_name, description} = props.project;
   
  return (
    <div className={`${projectStyle.card} bg-secondary-bg rounded-xl hover:scale-105 duration-200`}>
      <div className={`h-[13rem]rounded-t-xl`}>
        <img
          src="Images\Screenshots\Weather Application\weather-app-2.webp"
          alt=""
          className="w-full h-full object-cover  rounded-t-xl"
        />
      </div>

      <div className="py-4 px-5">
        <div>
          <h3 className="text-xl text-main">{project_name}</h3>
          <p className="text-sm mt-3 text-secondary-text text-justify">
            {description}
          </p>
        </div>

        <div className="mt-5">
          <Link
            to="#"
            className=" text-sm underline underline-offset-4 hover:text-main hover:drop-shadow-glow "
          >
            View Project
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
