import homeStyle from '../../CSS/HomepageStyle/Home.module.css'
import { IoAddOutline  } from "react-icons/io5";
import { Rate, message } from 'antd';
import { Link } from 'react-router-dom';
import { CiHeart } from "react-icons/ci";
import { useDispatch, useSelector} from 'react-redux'
import { addItem,upQuantity, countTotal } from '../../Redux/cartSlice';


function ProductCard({id, productName, price, imgUrl, avgRating, discount}) {
  // const totalAmount = useSelector((state) => state.cart.total)
  const items = useSelector((state) => state.cart.items)
  // console.log(items);
  // console.log(totalAmount);
  const [messageApi, contextHolder] = message.useMessage();
  const dispatch = useDispatch()


  const AddToCart = (id, productName, price, imgUrl) => {
    if((items.find((item) => item.Id === id) === undefined)){
      if(dispatch(addItem({Id: id, pName: productName, Price: price, img: imgUrl, quantity: 1})) ){
        dispatch(countTotal())
        success()
      }
    }else{
      dispatch(upQuantity(id))
      dispatch(countTotal())
    }
    
    
  }

  const success = () => {
    messageApi.open({
      type: 'success',
      content: 'Product Added to Cart!',
    });
  };

 

  return (
    <>
      {contextHolder}
      <div className={`${homeStyle.card} py-10 rounded-lg relative bg-secondary`}>
        {
            discount != null &&
                <div className='badge absolute top-3 left-3 bg-main text-white px-3 py-1 text-xs rounded-xl'>
                  {discount}% Off
                </div>
        }

        <div className={`${homeStyle.like_button} absolute top-3 right-3 px-3 py-1 text-2xl w-fit h-fit text-[#757575]`}>
            <CiHeart />
        </div>
       
        <div className="img_container w-full aspect-video">
            <Link to={`/product/${id}`}>
              <img src={imgUrl} alt={productName} className='w-full h-full object-contain'/>
            </Link>
        </div>

        <div className="mt-4 px-5">
            <h3 className='text-lg md:text-xl font-semibold'>{productName}</h3>
            <Rate disabled allowHalf defaultValue={avgRating} className='text-lg mt-2'/>
        </div>

        <div className='mt-6 px-5 font-semibold text-2xl md:text-3xl'>
            <h3>${price}</h3>
        </div>

        <button className='absolute bottom-10 right-5 border p-2 rounded-full text-3xl text-main hover:bg-main hover:text-white duration-200' onClick={() => AddToCart(id, productName, price, imgUrl)}>
           <IoAddOutline />
        </button>
    </div>
    </>
    
  )
}

export default ProductCard