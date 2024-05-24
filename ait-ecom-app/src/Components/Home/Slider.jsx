// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// import Swiper core and required modules
import { Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';

import Slides from './Slides';
import { sliderData } from '../../assets/data/products.jsx'


function Slider() {
  return (
    <Swiper
    // install Swiper modules
    modules={[Autoplay]}
    speed={800}
    slidesPerView={1}
    autoplay = {true}
    loop = {true}
    scrollbar={{ draggable: true }}
  >
    {
      sliderData.map((slide) => {
        return (
          <SwiperSlide key={slide.id}><Slides title= {slide.title} desc = {slide.desc} cover = {slide.cover}/></SwiperSlide>
        )
      })
    }
  </Swiper>
  )
}

export default Slider