import $ from "jquery";
import React, { useState } from "react";
import ProdModal from "../../Products/components/ProdModal";

const Card = React.memo(({ item, index, category }) => {
  const [cardModal, setCardModal] = useState(false);

  const handleCardModal = () => {
    setCardModal(!cardModal);
  };

  const calculateDiscountedPrice = (price, discount) => {
    return price - price * (discount / 100);
  };

  return (
    <>
      <div key={index}  className="relative w-52 sm:w-72 overflow-hidden">
        <a
          onClick={handleCardModal}
          className="cursor-pointer block relative rounded-xl h-48 overflow-hidden"
        >
          <img
            src={item.image}
            alt={`Photo ${index + 1}`}
            className="photo object-cover w-full h-full"
          />
          {/* Displaying prices */}
          <div className="absolute bottom-2 left-2 bg-black bg-opacity-75 text-white px-2 py-1 text-xs font-bold rounded">
            <span className="line-through text-gray-100 mr-2">
              ${item.price}
            </span>{" "}
            {/* Old price */}$
            {calculateDiscountedPrice(item.price, item.discount)}{" "}
            {/* Discounted price */}
          </div>
          {/* Limited Offer label */}
          <p className="absolute top-0 left-0 bg-yellow-500 text-white px-2 py-1 text-xs font-bold">
            Limited Offer 50% off
          </p>
        </a>
      </div>
      
        {cardModal && (
          <ProdModal
            name={item.name}
            category={category}
            price={calculateDiscountedPrice(item.price, item.discount)}
            modal={cardModal}
            description={item.description}
            id={item.id}
            img={item.image}
          />
        )}
    </>
  );
});


const FeaturedSection = ({clearance, categories}) => {

  // Apply styles using jQuery
  $(document).ready(function () {
    $(".photo").hover(
      function () {
        $(this).css({
          transition: "all 0.4s ease",
          "box-shadow":
            "0 4px 8px rgba(0, 0, 0, 0.2), 0 8px 16px rgba(0, 0, 0, 0.2)",
          transform: "scale(1.1)",
        });
      },
      function () {
        $(this).css({
          transition: "all 0.4s ease",
          "box-shadow": "none",
          transform: "scale(1)",
        });
      }
    );
  });

  return (
    <main className="text-black">
       <h2 className="text-3xl font-bold mb-6 text-center">Clearance Sale</h2>
     
      <div className="flex flex-wrap justify-center gap-8">
        {clearance.map((item, index) => <Card item={item} index={index} category={
          categories.find((category) => category.id === item.category).title
        }/>)}
      </div>
    </main>
  );
};

export default FeaturedSection;
