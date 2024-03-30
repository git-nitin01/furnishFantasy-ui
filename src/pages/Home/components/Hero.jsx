import React, { useEffect, useState } from 'react';
import $ from 'jquery'

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
    <div className="w-full overflow-hidden">
      <div className="relative w-full h-screen" style={{ scale: '1.1'}}>
        {slides.map((slide, index) => (
          <div key={index} className={`h-full absolute inset-0 swiper-slide`} style={{ opacity: index === currentIndex ? 1 : 0 }}>
            <div className="absolute inset-0 bg-cover bg-center" style={{backgroundImage: `url(${slide.image})`}} />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center text-center text-white px-8 py-12">
              <h1 className="text-4xl font-bold mb-4">{slide.title}</h1>
              <p className="text-lg">{slide.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  
  );

  };

export default Hero;
