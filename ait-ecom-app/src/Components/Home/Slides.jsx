import { Link } from 'react-router-dom'
import homeStyle from '../../CSS/HomepageStyle/Home.module.css'
// import heroImage from '../../assets/Images/hero-img.png'

function Slides({title, desc, cover}) {
  return (
    <div className='container flex flex-col md:flex-row'>
    <div className="left_side w-full md:w-[50%] text-center md:text-left flex flex-col gap-5 justify-center items-center md:items-start order-2 md:order-1 px-0 md:px-10">
      <h1 className='text-4xl md:text-5xl leading-[3.5rem] font-semibold'>{title}</h1>
      <p>{desc}</p>
      <Link className='bg-[#f2f2f2] w-fit hover:underline'>Visit Collections</Link>
    </div>

    <div className={`${homeStyle.right_side} w-full md:w-[50%] flex justify-center items-center order-1 md:order-2`}>
      {/* <div className='bg-slate-600 h-full'> */}
        <img src={cover} alt="Hero Image" />
      {/* </div> */}
      
    </div>
 </div>
  )
}

export default Slides