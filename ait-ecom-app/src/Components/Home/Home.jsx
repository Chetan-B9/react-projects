import { Link } from 'react-router-dom'
import homeStyle from '../../CSS/HomepageStyle/Home.module.css'
import heroImage from '../../assets/Images/hero-img.png'
import ServiceCard from './ServiceCard'

import { FaCar, FaCreditCard, FaShieldAlt, FaHeadphones   } from "react-icons/fa";
function Home() {
  return (
    <>
      {/* hero section start  */}
      <section className='hero_section px-28 py-32 bg-pimary'>
        <div className='container flex'>
           <div className="left_side w-[50%] flex flex-col gap-5 justify-center">
             <h1 className='text-5xl leading-[3.5rem] font-semibold'>50% Off For Your First Shopping</h1>
             <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis impedit omnis aliquid? Beatae, numquam optio.</p>
             <Link className='bg-[#f2f2f2] w-fit hover:underline'>Visit Collections</Link>
           </div>

           <div className={`${homeStyle.right_side} w-[50%] flex justify-center items-center`}>
             <img src={heroImage} alt="Hero Image" />
           </div>
        </div>
      </section>
      {/* hero section end  */}

      {/* features section start  */}
      <section className="service_section px-28 py-10">
        <div className="container grid grid-cols-4 gap-2">
          <ServiceCard title = "Free Shipping" description = "Lorem ipsum dolor sit amet" icon = {<FaCar />} cardColor = "bg-[#fdefe6]"/>
          <ServiceCard title = "Safe Payment" description = "Lorem ipsum dolor sit amet" icon = {<FaCreditCard  />} cardColor = "bg-[#ceebe9]"/>
          <ServiceCard title = "Secure Payment" description = "Lorem ipsum dolor sit amet" icon = {<FaShieldAlt />} cardColor = "bg-[#e2f2b2]"/>
          <ServiceCard title = "Back Guarentee" description = "Lorem ipsum dolor sit amet" icon = {<FaHeadphones  />} cardColor = "bg-[#d6e5fb]"/>
        </div>
         
      </section>
      {/* features section end  */}
    </>
  )
}

export default Home