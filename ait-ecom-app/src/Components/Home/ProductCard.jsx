import homeStyle from '../../CSS/HomepageStyle/Home.module.css'
import { IoAddOutline  } from "react-icons/io5";
import { Rate } from 'antd';
import { Link } from 'react-router-dom';


function ProductCard({productName, price, imgUrl, avgRating, discount}) {
  return (
    <div className={`${homeStyle.card} bg-primary py-10 rounded-lg relative`}>
        {
            discount != null &&
                <div className='badge absolute top-3 left-3 bg-main text-white px-3 py-1 text-xs rounded-xl'>
                  {discount}% Off
                </div>
            
        }
       
        <div className="img_container w-full aspect-video">
            <Link>
            <img src={imgUrl} alt={productName} className='w-full h-full object-contain'/>

            </Link>
        </div>

        <div className="mt-4 px-5">
            <h3 className='text-xl font-semibold'>{productName}</h3>
            <Rate disabled allowHalf defaultValue={avgRating} className='text-lg mt-2'/>
        </div>

        <div className='mt-6 px-5 font-semibold text-3xl'>
            <h3>${price}</h3>
        </div>

        <button className='absolute bottom-10 right-5 border p-2 rounded-full text-3xl text-main hover:bg-main hover:text-white duration-200'>
           <IoAddOutline />
        </button>
    </div>
  )
}

export default ProductCard