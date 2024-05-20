// import homeStyle from '../../CSS/HomepageStyle/Home.module.css'
import ServiceCard from './ServiceCard'
import ProductCard from './ProductCard';
import Slider from './Slider.jsx';
import { serviceData, discoutProducts, products } from '../../assets/data/products.jsx'

function Home() {

  console.log(products);
  return (
    <>
      {/* hero section start  */}
      <section className='hero_section px-5 md:px-14 lg:px-28 py-12 md:py-24 lg:py-28 bg-primary'>
         <Slider />
      </section>
      {/* hero section end  */}

      {/* Service section start  */}
      <section className="service_section px-14 py-10">
        <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
        {
          serviceData.map((service, index) => <ServiceCard key={index} title={service.title} subtitle = {service.subtitle} icon={service.icon} bg = {service.bg}/>
          )
        }
        </div>
         
      </section>
      {/* Service section end  */}

      {/* Discount section start  */}
      <section className="discount_section px-14 md:px-36 lg:px-64 pt-24 pb-14 bg-primary ">
        <div className='text-center text-5xl font-semibold'>
              <h2>Big Discount</h2>
        </div>

        <div className="container mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
           {
            discoutProducts.map((product) => <ProductCard key={product.id} productName = {product.productName} price = {product.price} imgUrl = {product.imgUrl} avgRating = {product.avgRating} discount = {product.discount ?? null}/>
            )
           }
        </div>
      </section>
      {/* Discount section end  */}

      {/* New Arrivals section start  */}
      <section className="new_arrivals_section px-14 md:px-36 lg:px-64 pt-24 pb-14">
      <div className='text-center text-5xl font-semibold'>
              <h2>New Arrivals</h2>
        </div>

        <div className="container mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
           {
            products.map((product) => {
               return (product.category === 'mobile' || product.category === 'wireless') && 
              <ProductCard key={product.id} productName = {product.productName} price = {product.price} imgUrl = {product.imgUrl} avgRating = {product.avgRating} discount = {product.discount ?? null}/>
            }
            )
           }
        </div>
      </section>
      {/* New Arrivals section end  */}

      {/* Best sells section start  */}
      <section className="new_arrivals_section px-14 md:px-36 lg:px-64 pt-24 pb-14 bg-primary">
      <div className='text-center text-5xl font-semibold'>
              <h2>Best Sales</h2>
        </div>

        <div className="container mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
           {
            products.map((product) => {
               return (product.category === 'sofa' || product.category === 'chairs') && 
              <ProductCard key={product.id} productName = {product.productName} price = {product.price} imgUrl = {product.imgUrl} avgRating = {product.avgRating} discount = {product.discount ?? null}/>
            }
            )
           }
        </div>
      </section>
      {/* Best sells section end  */}
    </>
  )
}

export default Home