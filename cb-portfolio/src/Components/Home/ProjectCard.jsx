import heroSecStyle from "../../CSS/Home page Styles/heroSection.module.css";
import { Link } from "react-router-dom";

function ProjectCard({rev}) {
    // console.log(props.length > 0 ? true : false)
    let reverse = rev;


    // let isReverse = ;
    // console.log(typeof reverse)

  return (
    <>
        <div className="grid grid-cols-2">
         <div className={` h-full flex justify-center ${reverse ? 'order-2' : 'order-1'} `}>
           <div className={`${heroSecStyle.project_img} flex justify-cente project_img rounded-xl`}>
             <img src="Images/timg.png" alt="about me image" className="w-full h-full object-cover rounded-xl"/>
           </div>
         </div>

         <div className={`flex flex-col items-center justify-center gap-4 px-10 text-sm ${reverse ? 'order-1' : 'order-2'}`}>
            <h2 className="text-main text-3xl">Porject Name</h2>
            <p className="text-sm text-secondary-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio, qui?</p>
            <Link to="#" className="hover:text-main hover:drop-shadow-glow underline underline-offset-4 my-4">View Project</Link>
         </div>
       </div>
    </>
  )
}

export default ProjectCard