import { Swiper, SwiperSlide } from "swiper/react"; // Import Swiper React components
import { Autoplay } from "swiper/modules"; // import Swiper core and required modules
import "swiper/css"; // Import Swiper styles
import Slides from "./Slides";
import { sliderData } from "../../assets/data/products.jsx";

function Slider() {
  return (
    <Swiper
      // install Swiper modules
      modules={[Autoplay]}
      speed={800}
      slidesPerView={1}
      autoplay={true}
      loop={true}
      scrollbar={{ draggable: true }}
    >
      {
        //accessing slider data from dataset and creating slides for that
        sliderData.map((slide) => {
          return (
            <SwiperSlide key={slide.id}>
              {/* rendering Slides component */}
              <Slides
                title={slide.title}
                desc={slide.desc}
                cover={slide.cover}
              />
            </SwiperSlide>
          );
        })
      }
    </Swiper>
  );
}

export default Slider;
