// import homeStyle from '../../CSS/HomepageStyle/Home.module.css'
import ServiceCard from './ServiceCard'
import ProductCard from './ProductCard';
import Slider from './Slider.jsx';
import { serviceData, discoutProducts } from '../../assets/data/products.jsx'

function Home() {

  console.log(discoutProducts);
  return (
    <>
      {/* hero section start  */}
      <section className='hero_section px-28 py-28 bg-primary'>
         <Slider />
      </section>
      {/* hero section end  */}

      {/* Service section start  */}
      <section className="service_section px-28 py-10">
        <div className="container grid grid-cols-4 gap-2">
        {
          serviceData.map((service, index) => <ServiceCard key={index} title={service.title} subtitle = {service.subtitle} icon={service.icon} bg = {service.bg}/>
          )
        }
        </div>
         
      </section>
      {/* Service section end  */}

      {/* Discount section start  */}
      <section className="discount_section px-64 pt-24 pb-14 bg-primary ">
        <div className='text-center text-5xl font-semibold'>
              <h2>Big Discount</h2>
        </div>

        <div className="container mt-14 grid lg:grid-cols-3 gap-5">
           {
            discoutProducts.map((product) => <ProductCard key={product.id} productName = {product.productName} price = {product.price} imgUrl = {product.imgUrl} avgRating = {product.avgRating} discount = {product.discount ?? null}/>
            )
           }
           
        </div>
      </section>
      {/* Discount section end  */}
    </>
  )
}

export default Home