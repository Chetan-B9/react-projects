import { useParams } from 'react-router-dom'
import { products } from '../../assets/data/products'
import { Rate } from 'antd';
import ProductStyle from '../../CSS/Productpag Style/Product.module.css'
import { useState } from 'react';
import ProductCard from '../Home/ProductCard';
import { useDispatch, useSelector} from 'react-redux'
import { message } from 'antd';
import { addItem, upQuantity, countTotal } from '../../Redux/cartSlice';

function Product() {
  const { id } = useParams()
  const [active, setActive] = useState('desc')
  const [qValue, setqValue] = useState(1)
  const dispatch = useDispatch()
  const [messageApi, contextHolder] = message.useMessage();
  const items = useSelector((state) => state.cart.items)

  const AddToCart = (pId, productName, price, imgUrl) => {
    if((items.find((item) => item.Id === pId) === undefined)){
      if(dispatch(addItem({Id: pId, pName: productName, Price: price, img: imgUrl, quantity: qValue})) ){
        dispatch(countTotal())
        success()
      }
    }else{
      dispatch(upQuantity(pId))
      dispatch(countTotal())
    }     
  }

  const success = () => {
    messageApi.open({
      type: 'success',
      content: 'Product Added to Cart!',
    });
  };

  const handleToogle = (toogle) => {
    setActive(toogle)
  }

  return (
    <>
        {contextHolder}
        {
            products.map((product) => {
                if(product.id === id){
                    return (
                       <main key={id} className="product text-main-text">
                            <div className={`${ProductStyle.product_title} h-52 bg-center`}>
                                {/* product title  */}
                                <div className='bg-[#0000009d] h-full flex justify-center items-center'>
                                  <h1 className='text-secondary text-3xl font-semibold'>{product.productName}</h1>
                                </div>
                            </div>

                            {/* product details  */}
                            <div className='px-5 md:px-14 lg:px-28 py-16'>
                                   <div className='flex flex-col md:flex-row'>
                                       {/* product image part  */}
                                       <div className='w-full md:w-[50%]'>
                                         <div className=' flex justify-center items-start'>
                                           <img src={product.imgUrl} alt={`${product.productName} image`} className='w-[85%] object-contain' />
                                         </div>
                                       </div>

                                       {/* product info part */}
                                       <div className='w-full md:w-[50%]'>
                                           {/* top part  */}
                                           <div className='flex flex-col gap-4'>
                                              <h2 className='text-3xl font-semibold'>{product.productName}</h2>
                                              <div className='flex items-end text-sm gap-10'>
                                                 <Rate disabled allowHalf defaultValue={product.avgRating} className='text-sm mt-2'/>
                                                 <p>{product.avgRating} Ratings</p>
                                              </div>
                                              <div className='flex items-center gap-10 mt-1'>
                                                <h3 className='text-2xl font-semibold'>${product.price}</h3>
                                                <p>category: {product.category}</p>
                                              </div>
                                              <div className='text-sm mt-1'>
                                                <p>{product.shortDesc}</p>
                                              </div>
                                           </div>

                                           {/* bottom part  */}
                                           <div className='flex flex-col gap-5 mt-10'>
                                              <input type="number" value={qValue}  min={1} className='w-[5rem] border border-black rounded-md px-3 py-1' onChange={(e) => setqValue(e.target.value)}/>
                                              <button className='bg-main text-secondary text-lg w-fit px-3 py-2 rounded-md' onClick={() => AddToCart(product.id, product.productName, product.price, product.imgUrl)}>
                                                Add To Cart
                                              </button>
                                           </div>
                                       </div>

                                       
                                   </div>
                                </div>
                                
                                {/* description and review part  */}
                                <div className='px-5 md:px-14 lg:px-28 py-16'>
                                   <div className='flex gap-3 font-semibold'>
                                      <button onClick={() => handleToogle('desc')} className={`${active === 'desc' ? 'text-main-text' : 'text-[#757575]'} `}>Description</button>
                                      <button onClick={() => handleToogle('review')} className={`${active === 'review' ? 'text-main-text' : 'text-[#757575]'}`}>Review <span>({product.reviews.length})</span></button>
                                   </div>
                                   {
                                    active === 'desc' &&
                                    <div className='mt-5 text-justify'>
                                        <p>{product.description}</p>
                                    </div>
                                   }

                                   {
                                    active === 'review' && 
                                    <div className='mt-5'>
                                        <ul>
                                            {
                                                product.reviews.map((review, index) => {
                                                    return <li key={index} className='mt-5 border-0 border-b-2 py-3'>
                                                    <div className='flex flex-col text-sm gap-2'>
                                                      <Rate disabled allowHalf defaultValue={review.rating} className='text-sm mt-2'/>
                                                    <p>{review.text}</p>
                                              </div>
                                                    </li>
                                                })
                                            }
                                        </ul>
                                    </div>
                                   }
                                </div>

                                {/* you might also like part  */}
                                <div className='px-5 md:px-14 lg:px-28 py-16'>
                                   <div>
                                      <h2 className='text-3xl font-semibold '>You might also like</h2>
                                   </div>

                                   <div className="container grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
                                      {
                                        products.map((prd, index) => ( prd.category === product.category && prd.id !== id) &&
                                            <ProductCard key={index} id={prd.id} productName = {prd.productName} price = {prd.price} imgUrl = {prd.imgUrl} avgRating = {prd.avgRating} discount = {prd.discount ?? null}/>
                                        )
                                      }
                                   </div>
                                </div>
                       </main>
                    )
                }
            })
        }
    </>
  )
}

export default Product