import React, { useContext, useState } from "react";
import { CartContext } from "../../../Context/cartContext";
import ProdModal from './ProdModal' 

const Prod = ({ id, name, category, price, img, des }) => {
  const [prodModal, setProdModal] = useState(false);
  const { dispatch, state } = useContext(CartContext);

  const handleProdModal = () => {
    setProdModal(!prodModal);
  };

  const handleAddToCart = () => {
    dispatch({
      type: "ADD_PRODUCTS",
      payload: {
        id,
        name,
        category,
        price,
        img,
        quantity: 1,
      },
    });
  };

  return (
    <div className="w-full sm:w-64 bg-white rounded-lg shadow-md">
      <div onClick={handleProdModal} className="cursor-pointer text-center mb-2">
        <img src={img} alt="product" className="mx-auto" />
      </div>
      <div onClick={handleProdModal} className="text-center mb-2">
        <h2 className="text-lg font-bold">{name}</h2>
        <p className="text-sm text-gray-600">{category}</p>
        <p className="text-lg font-bold">${price}</p>
      </div>
      <div className="text-center mb-2">
        <button
          onClick={handleAddToCart}
          className="bg-gray-700 text-white px-4 py-2 rounded-md hover:bg-gray-800 transition duration-300"
        >
          Add to Cart
        </button>
      </div>
      {prodModal && (
        <ProdModal
          name={name}
          category={category}
          price={price}
          modal={prodModal}
          description={des}
          id={id}
          img={img}
        />
      )}
    </div>
  );
};

export default React.memo(Prod);
