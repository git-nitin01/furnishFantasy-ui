import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';

//import './styles.css';

const slides = [
  { image: "/images/Picture1.png" },
  { image: "/images/Picture2.png" },
  { image: "/images/Picture3.png" },
  { image: "/images/Picture4.png" },
  { image: "/images/Picture5.png" },
];

const Hero = () => {
  return (
    <main className="text-[black]">
    {/*</main>*/ }
    <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides ={true}      
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50, //-15 - 60
          stretch: 0, // 5 - 5
          depth: 100, //10 - 10
          modifier: 1, //10 - 1
          slideShadows: false,
          scale: 1,
        }}
        loop={true}
        speed={1000}
        spaceBetween={-150}
        autoplay={{
          delay: 1800,
          disableOnInteraction: false,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className="mySwiper"

      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <img
              src={slide.image}
              alt={`Slide ${index}`}
              className="w-full"
              style={{transform: 'scale(0.8)'}}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </main>
  );
};

export default Hero;
