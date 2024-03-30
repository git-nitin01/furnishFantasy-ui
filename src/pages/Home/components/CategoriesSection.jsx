import React, { useEffect } from 'react';
import $ from 'jquery';

const categories = [
  { 
    id: 1,
    title: "Category 1",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget turpis eu ipsum vehicula sagittis.",
    image: "https://via.placeholder.com/150",
    link: "#",
  },
  { 
    id: 2,
    title: "Category 2",
    description: "Pellentesque euismod ultricies lorem at aliquet. Donec convallis libero at leo placerat, a commodo tortor sollicitudin.",
    image: "https://via.placeholder.com/150",
    link: "#",
  },
  { 
    id: 3,
    title: "Category 3",
    description: "Nam ut consequat mauris. Curabitur vehicula ante sit amet nisi varius auctor.",
    image: "https://via.placeholder.com/150",
    link: "#",
  },
  { 
    id: 4,
    title: "Category 4",
    description: "Fusce volutpat quam ut orci sagittis, ut commodo lorem consequat. Ut congue dolor sed viverra mattis.",
    image: "https://via.placeholder.com/150",
    link: "#",
  },
];

const CategoriesSection = () => {
  useEffect(() => {
    $('.category-item').each(function(index) {
      $(this).delay(100 * index).fadeIn(500);
    });
  }, []);

  return (
    <main className="text-black p-8">
      <h2 className="text-3xl font-bold mb-6 text-center">Featured Categories</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-center">
        {categories.map(category => (
          <div key={category.id} className="category-item hidden bg-gray-100 rounded-lg shadow-md cursor-pointer hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1" onClick={() => window.location.href = category.link}>
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
