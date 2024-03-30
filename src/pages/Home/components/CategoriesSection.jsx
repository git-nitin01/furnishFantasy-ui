import React, { useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'; // Import icons from Font Awesome

const slides = [
  [
    { image: "/images/category1.png" },
    { image: "/images/category2.jpg" },
    { image: "/images/category3.jpg" }
  ],
  [
    { image: "/images/category1.png" },
    { image: "/images/category2.jpg" },
    { image: "/images/category3.jpg" }
  ],
  [
    { image: "/images/category1.png" },
    { image: "/images/category2.jpg" },
    { image: "/images/category3.jpg" }
  ]
];

const CategoriesSection = () => {
  useEffect(() => {
    const sliders = document.querySelectorAll('.category-slider');

    sliders.forEach((slider, index) => {
      let currentIndex = 0;
      const slidesCount = slides[index].length;

      // Initialize first slide
      updateSlide(slider, 0);

      // Handle next slide button
      slider.querySelector('.next-slide').addEventListener('click', function() {
        currentIndex = (currentIndex + 1) % slidesCount;
        updateSlide(slider, currentIndex);
      });

      // Handle previous slide button
      slider.querySelector('.prev-slide').addEventListener('click', function() {
        currentIndex = (currentIndex - 1 + slidesCount) % slidesCount;
        updateSlide(slider, currentIndex);
      });

      // Update slide content with fade transition
      function updateSlide(slider, index) {
        const slide = slides[index];
        const categoryImage = slider.querySelector('.category-image');

        categoryImage.style.opacity = 0;
        setTimeout(() => {
          categoryImage.src = slide.image;
          categoryImage.style.opacity = 1;
        }, 300);
      }
    });
  }, []);

  return (
    <main className="text-[black] pb-8 mt-[2em]">
      <div className="mb-8 text-xl font-bold text-center">CATEGORY SECTION</div>
      {slides.map((slideSet, index) => (
        <div key={index} className="w-full h-64 relative mb-8 category-slider">
          <img
            className="category-image w-full h-full object-cover grayscale rounded"
            src={slideSet[0].image} // Fix image source
            alt={`Slide 1`}
          />
          <button className="prev-slide absolute top-1/2 left-0 transform -translate-y-1/2">
            <FaChevronLeft size={24} />
          </button>
          <button className="next-slide absolute top-1/2 right-0 transform -translate-y-1/2">
            <FaChevronRight size={24} />
          </button>
        </div>
      ))}
    </main>
  );
};

export default CategoriesSection;