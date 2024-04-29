import { Link } from "react-router-dom";
import heroSecStyle from "../../CSS/Home page Styles/heroSection.module.css";
import { FaLinkedinIn, FaGithub, FaInstagram, FaWhatsapp } from "react-icons/fa";

function Home() {
  return (
    // hero section start
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
    // hero section end
  );
}

export default Home;
