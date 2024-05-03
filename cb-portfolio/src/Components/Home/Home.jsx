import { Link } from "react-router-dom";
import heroSecStyle from "../../CSS/Home page Styles/heroSection.module.css";
import { FaLinkedinIn, FaGithub, FaInstagram, FaWhatsapp, FaAngleRight  } from "react-icons/fa";
import ProjectCard from "./ProjectCard";

function Home() {
  return (
    <>
    <div className="container">
{/*  hero section start */}
<section
      className={`${heroSecStyle.hero_section} px-8 pt-10 md:px-20 lg:px-40  flex flex-col lg:h-[calc(100vh - 76px)]`}
    >
      <div className="container lg:h-[80%] grid grid-cols-1 lg:grid-cols-2">
        <div className={`${heroSecStyle.image_part} h-full flex justify-center items-center`}>
          <img
            src="Images/cb portfolio3.webp"
            alt="My image"
          />
        </div>
        <div className="intro_part flex flex-col justify-center items-center lg:items-start gap-14">
          {/* <div className="bg-slate-600"> */}
            <div className="flex flex-col gap-3">
              <h3 className="">Hello, <span className="text-main">I&apos;m</span></h3>
              <h2 className="text-5xl font-semibold"><span className="text-main p-0">Chetan</span> Bedakihale</h2>
              <p className="text-sm text-secondary-text w-fit">Frontend Developer</p>
            </div>
          {/* </div> */}
          <div className="flex flex-col gap-2">
            <p className="text-msm text-secondary-text">Let&apos;s bring designs to life with code magic.</p>
            <Link href="mailto:chetan.bedakihale80@gamil.com" className="text-main underline underline-offset-4">Let&apos;s Talk</Link>
          </div>
        </div>
      </div>

      <div className="social_icons_container lg:h-[20%]">
         <div className={`${heroSecStyle.social_links} h-full `}>
            <ul className="flex gap-8 h-full items-center justify-end">
              <li className="bg-secondary-bg p-3">
                <Link to="#" target="_blank" className="hover:text-main"><FaLinkedinIn /></Link>
              </li>
              <li className="bg-secondary-bg p-3">
                <Link to="#" target="_blank" className="hover:text-main"><FaGithub  /></Link>
              </li>
              <li className="bg-secondary-bg p-3">
                <Link to="#" target="_blank" className="hover:text-main"><FaInstagram  /></Link>
              </li>
              <li className="bg-secondary-bg p-3">
                <Link to="#" target="_blank" className="hover:text-main"><FaWhatsapp  /></Link>
              </li>
          
            </ul>
         </div>
      </div>
    </section>
    {/* hero section end */}

    {/* About section start */}
    <section className={`${heroSecStyle.about_section} px-8 py-14 md:px-20 lg:px-40 bg-secondary-bg flex flex-col  gap-16 text-center`}>
        <h3 className="text-4xl text-main  font-bold">About Me</h3>
        <div className="grid grid-cols-2">
        <div className="flex justify-center">
          <img src="Images/About me-cuate.png" alt="about me image" />
        </div>

        <div className="h-full">
       <div className=" text-sm text-justify text-secondary-text h-full flex flex-col justify-center">
         <p>As a web developer, coding has been my playground for years. With a toolbox of HTML, CSS, Bootstrap, JavaScript (React), and PHP, I bring ideas to life through dynamic web experiences. What drives me? The thrill of solving problems with elegant code, transforming concepts into pixels, and connecting with people through the digital realm.
        </p>
         <p  className="mt-3">If you&apos;re looking for a code warrior who&apos;s also a creative enthusiast, <Link to="#" className="text-main underline underline-offset-3">let&apos;s collaborate</Link> and build something awesome together. I&apos;m always eager to join forces on cool projects that merge technical prowess with innovative thinking.
        </p>
       </div>
       </div>
        </div>
    </section> 
    {/* About section end  */}

    {/* Projects section start  */}
    <section className={`project_section px-8 py-14 md:px-20 lg:px-40 flex flex-col gap-16 text-center`}>
       <h3 className="text-4xl text-main  font-bold">My Projects</h3>

       <div className="flex flex-col gap-32">
         <ProjectCard rev={false}/>
       </div>
       
       

       <div className="flex justify-center text-msm text-secondary-text">
         <Link to='#' className="flex items-center underline underline-offset-2 hover:text-main hover:drop-shadow-glow">See More <FaAngleRight /></Link>
       </div>
    </section>
    {/* Projects section end  */}
    </div>
    
    </>
   
  );
}

export default Home;
