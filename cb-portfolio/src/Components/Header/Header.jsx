import { NavLink } from "react-router-dom"

// import headerStyle from '../../CSS/Home page Styles/header.module.css'
function Header() {
  return (
    //  header portion of the home page
    <section className="px-8 md:px-20 lg:px-40  flex">
        <div className="flex gap-2 items-center w-1/3 ">
            <img src="./cb logo.png" alt="logo" width={20}/>
            <h2 className="font-dm-sans text-lg tracking-widest font-extrabold">Portfolio</h2>
        </div>
        <div className="hidden lg:flex flex-1 text-msm ">
            <ul className="lg:flex items-center gap-12 h-full font-semibold">
                <li className="hover:text-main">
                    <NavLink to="/home" className={(isActive) => isActive ? "text-main" : "text-primary-text"}>Home</NavLink>
                </li>
                <li className="hover:text-main">
                   <NavLink to="/">About</NavLink>
                </li>
                <li className="hover:text-main">
                   <NavLink to="/">Projects</NavLink>
                </li>
                <li className="hover:text-main">
                   <NavLink to="/">Resume</NavLink>
                </li>
            </ul>
        </div>
    </section>
  )
}

export default Header