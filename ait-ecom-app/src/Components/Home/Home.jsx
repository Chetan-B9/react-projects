import { Link } from 'react-router-dom'
import homeStyle from '../../CSS/HomepageStyle/Home.module.css'
import heroImage from '../../assets/Images/hero-img.png'
function Home() {
  return (
    <>
      <section className='hero_section px-28 py-36'>
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
    </>
  )
}

export default Home