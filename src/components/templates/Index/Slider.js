import 'swiper/css'
import 'swiper/css/navigation'
import styles from "@/styles/Slider.module.css"

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, } from 'swiper/modules';
import { Navigation } from 'swiper/modules';

export default function Slider() {
  return (
    <Swiper
      className={`${styles.swiper}`}
      modules={[Navigation, Autoplay]}
      loop={true}
      navigation={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
    >
      <SwiperSlide className={`${styles.swiper_slide} `}
      >
        <img className="w-100" src="/images/carousel-1.jpg" alt="Image" />
        <div className={`${styles.slider_caption} d-flex flex-column align-items-center justify-content-center`}>
          <h2 className="text-primary font-weight-medium m-0">We Have Been Serving</h2>
          <h1 className="display-1 text-white m-0">COFFEE</h1>
          <h2 className="text-white m-0">* SINCE 1950 *</h2>
        </div>
      </SwiperSlide>
      <SwiperSlide className={`${styles.swiper_slide}`}
      >
        <div className={`${styles.slider_caption}`}>

        </div>
        <img className="w-100" src="/images/carousel-2.jpg" alt="Image" />
        <div className={`${styles.slider_caption} d-flex flex-column align-items-center justify-content-center`}>
          <h2 className="text-primary font-weight-medium m-0">We Have Been Serving</h2>
          <h1 className="display-1 text-white m-0">COFFEE</h1>
          <h2 className="text-white m-0">* SINCE 1950 *</h2>
        </div>
      </SwiperSlide>


    </Swiper>
  )
}
