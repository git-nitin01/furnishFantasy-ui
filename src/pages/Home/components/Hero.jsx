import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination } from 'swiper/modules';

const slides = [
  { 
    image: "/images/Picture1.png", 
    title: "Discover the World", 
    description: "Explore exotic destinations and immerse yourself in unique cultures.",
  },
  { 
    image: "/images/Picture2.png", 
    title: "Luxury Retreats", 
    description: "Indulge in unparalleled luxury and relaxation at our premium resorts.",
  },
  { 
    image: "/images/Picture3.png", 
    title: "Adventure Awaits", 
    description: "Embark on thrilling adventures and create unforgettable memories.",
  },
];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % slides.length);
    }, 3500); // Change slide every 5 seconds

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    $(".swiper-slide").css('transition', 'opacity 1s ease-in-out'); // Apply CSS transition
    $(`.swiper-slide:eq(${currentIndex})`).css('opacity', '1'); // Fade in current slide
    $(`.swiper-slide`).not(`.swiper-slide:eq(${currentIndex})`).css('opacity', '0'); // Fade out other slides
  }, [currentIndex]);

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
      </div>
    </div>
  
  );

  };

export default Hero;
