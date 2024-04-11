import React, { useEffect, useState } from 'react';
import $ from 'jquery';
import Gallery from '../../Products/components/Gallery';

const CategoriesSection = ({categories}) => {

  useEffect(() => {
    $('.category-item').each(function(index) {
      $(this).delay(100 * index).fadeIn(500);
    });
  }, []);

  return (
    <main className="text-black">
      <h2 className="text-3xl font-bold mb-6 text-center">Categories</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 justify-center">
        {categories.map(category => (
          <div  key={category.id} className="category-item hidden bg-gray-100 rounded-lg shadow-md cursor-pointer hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1" onClick={() => window.location.href = `/gallery/${category.id}`}> 
            <img src={category.image} alt={category.title} className="w-full h-40 object-cover rounded-t-lg" />
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">{category.title}</h3>
              <p className="text-sm">{category.description}</p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default CategoriesSection;
