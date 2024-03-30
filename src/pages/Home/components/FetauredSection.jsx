import $ from 'jquery';

const FeaturedSection = () => {
  const dashboardUrl = "/dashboard"; // Replace this with the actual URL of your dashboard

  // Function to calculate the discounted price
  const calculateDiscountedPrice = (price) => {
    return price * 0.5; // 50% discount
  };

  // Apply styles using jQuery
  $(document).ready(function() {
    $('.photo').hover(
      function() {
        $(this).css({
          'filter': 'grayscale(0)',
          'transition': 'all 0.3s ease',
          'box-shadow': '0 4px 8px rgba(0, 0, 0, 0.2), 0 8px 16px rgba(0, 0, 0, 0.2)',
          'transform': 'scale(1.1)'
        });
      },
      function() {
        $(this).css({
          'filter': 'grayscale(100%)',
          'transition': 'all 0.3s ease',
          'box-shadow': 'none',
          'transform': 'scale(1)'
        });
      }
    );
  });

  return (
    <main className="text-black">
      <h2 className="text-2xl font-bold text-center">Featured Photos</h2>
      <div className="flex flex-wrap justify-between">
        {/* Each item */}
        {[
          { imageUrl: "images/images1.jpg", title: "Full Furnish Furniture", price:1999 },
          { imageUrl: "images/images2.jpg", title: "Sofa Set", price: 999 },
          { imageUrl: "images/images3.jpg", title: "Table Chair", price: 499 },
          { imageUrl: "images/images4.jpg", title: "Cupboard", price: 199 },
          { imageUrl: "images/image5.jpg", title: "Another Furniture", price: 299 },
          { imageUrl: "images/images1.jpg", title: "Full Furnish Furniture", price: 1999 },
          { imageUrl: "images/images2.jpg", title: "Sofa Set", price: 999 },
          { imageUrl: "images/images3.jpg", title: "Table Chair", price: 499 },
          { imageUrl: "images/images4.jpg", title: "Cupboard", price: 199 },
          { imageUrl: "images/image5.jpg", title: "Another Furniture", price: 299 },
        ].map((item, index) => (
          <div key={index} className="relative w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-1 overflow-hidden">
            <a href={dashboardUrl} className="block relative rounded-xl h-48 overflow-hidden">
              <img src={item.imageUrl} alt={`Photo ${index + 1}`} className="photo object-cover w-full h-full" />
              {/* Displaying prices */}
              <div className="absolute bottom-2 left-2 bg-black bg-opacity-75 text-white px-2 py-1 text-xs font-bold rounded">
                <span className="line-through text-gray-100 mr-2">${item.price}</span> {/* Old price */}
                ${calculateDiscountedPrice(item.price)} {/* Discounted price */}
              </div>
              {/* Limited Offer label */}
              <p className="absolute top-0 left-0 bg-yellow-500 text-white px-2 py-1 text-xs font-bold">Limited Offer 50% off</p>
            </a>
          </div>
        ))}
      </div>
    </main>
  );
};

export default FeaturedSection;
