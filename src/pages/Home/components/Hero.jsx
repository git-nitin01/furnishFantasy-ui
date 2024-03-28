import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination } from 'swiper/modules';

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
      <div className="mt-8 font-serif text-4xl font-semibold tracking-wider text-blue-400">YOUR SPACE WITH US</div>
      <Swiper
        effect={'coverflow'}
        centeredSlides ={true}       
        loop={true}
        modules={[EffectCoverflow, Pagination]}
        speed={1000}
        spaceBetween={30}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: -15,
          stretch: 5,
          depth: 100,
          modifier: 10,
          slideShadows: true,
        }}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        
        className="mySwiper2"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <img
              src={slide.image}
              alt={`Slide ${index + 1}`}
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
