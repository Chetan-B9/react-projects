import { Link } from 'react-router-dom'
import homeStyle from '../../CSS/HomepageStyle/Home.module.css'
// import heroImage from '../../assets/Images/hero-img.png'

function Slides({title, desc, cover}) {
  return (
    <div className='container flex'>
    <div className="left_side w-[50%] flex flex-col gap-5 justify-center">
      <h1 className='text-5xl leading-[3.5rem] font-semibold'>{title}</h1>
      <p>{desc}</p>
      <Link className='bg-[#f2f2f2] w-fit hover:underline'>Visit Collections</Link>
    </div>

    <div className={`${homeStyle.right_side} w-[50%] flex justify-center items-center`}>
      {/* <div className='bg-slate-600 h-full'> */}
        <img src={cover} alt="Hero Image" />
      {/* </div> */}
      
    </div>
 </div>
  )
}

export default Slides