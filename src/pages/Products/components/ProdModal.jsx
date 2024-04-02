import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import $ from "jquery";
import { CartContext } from "../../../Context/cartContext";
import { FaMinus, FaPlus } from "react-icons/fa";

const ProdModal = ({ name, category, price, modal, description, img, id }) => {
  const [isModal, setIsModal] = useState(modal);
  const [quantity, setQuantity] = useState(1);
  const modalRoot = document.createElement("div");
  modalRoot.className = "z-[2] mt-14 top-0 w-screen h-screen fixed";
console.log("modal", modal, isModal)
  useEffect(() => {
    setIsModal(modal);
    return () => {
      setIsModal(false);
    };
  }, [modal]);

  const increaseQuantity = (e) => {
    e.stopPropagation();
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = (e) => {
    e.stopPropagation();
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const showModal = () => {
    document.body.appendChild(modalRoot);
    document.body.style.overflow = "hidden";
  };

  useEffect(() => {
    console.log("here")
    isModal && showModal();
    // clean-up
    return () => {
      modalRoot.remove();
      document.body.style.overflow = "auto";
    };
  }, [isModal]);

  const clickHandler = () => {
    setIsModal(!isModal);
  };

  $(() => {
    const $detailContainer = $(".detail-container");
    const detailContainerStyle = "pt-5 text-2xl text-black mt-10 mb-10";
    $detailContainer.addClass(detailContainerStyle);

    const $detailHeading = $(".detail-heading");
    const detailHeadingStyle = "text-6xl text-black";
    $detailHeading.addClass(detailHeadingStyle);

    const $cat = $(".cat");
    const catStyle = "text-base text-slate-600";
    $cat.addClass(catStyle);

    const $atcBtn = $(".atc-btn");
    const atcBtnStyle =
      "w-fit h-10 bg-black bg-opacity-[0.7] p-2 rounded-sm text-white hover:bg-opacity-[1] hover:transition duration-500 ease-in-out";
    $atcBtn.addClass(atcBtnStyle);

    const $qtyInp = $("#qty-inp");
    const qtyInpStyle =
      "min-w-40 w-fit h-10 text-center border-2 border-gray-300 rounded-sm";
    $qtyInp.addClass(qtyInpStyle);

    const $desc = $(".desc");
    const descStyle = "text-lg text-black";
    $desc.addClass(descStyle);

    const $detail = $(".detail");
    const detailStyle = "mt-5";
    $detail.addClass(detailStyle);

    const $pageRoot = $("#page-root");
    // applying loading zooming effect
    $pageRoot.css({
      animation: "zoomInAnimation 0.3s ease-in-out",
      "animation-fill-mode": "forwards",
    });
  });

  const hoverTransition = "transition duration-300 ease-in-out";
  return ReactDOM.createPortal(
    <CartContext.Consumer>
      {({ dispatch }) => (
        <>
          <div id="page-root">
            <div className="bg-white flex flex-row w-screen h-screen shadow-3xl">
              <div className="flex justify-center max-w-[50%]">
                <img
                  src="src/assets/image.png"
                  alt="product"
                  className="object-fill"
                />
              </div>
              <div className="flex flex-col max-w-[50%] p-5">
                <button
                  onClick={clickHandler}
                  className={`absolute top-3 right-5 rounded-sm px-3 py-1.5 bg-white text-black border-0 hover:bg-black hover:bg-opacity-80 hover:text-white focus:outline-none ${hoverTransition}`}
                >
                  &#10006;
                </button>
                <div className="detail-container">
                  <h2 className="detail-heading">{name}</h2>
                  <p className="detail">{`Price: $${price}`}</p>
                  <p className="detail cat">{category}</p>
                  <p className="desc">{description}</p>
                </div>
                <div className="flex gap-4 text-black">
                  <button
                    onClick={(e) => decreaseQuantity(e)}
                    className="bg-white border-2 border-gray-300 rounded-sm p-1.5 hover:bg-gray-100 transition duration-300 ease-in-out"
                  >
                    <FaMinus />
                  </button>
                  <div className="text-lg items-center flex content-center">
                    {quantity}
                  </div>
                  <button
                    onClick={(e) => increaseQuantity(e)}
                    className="bg-white border-2 border-gray-300 rounded-sm p-1.5 hover:bg-gray-100 transition duration-300 ease-in-out"
                  >
                    <FaPlus />
                  </button>
                  <button
                    className="bg-gray-700 text-white px-4 py-2 rounded-md hover:bg-gray-800 transition duration-300"
                    onClick={() =>
                      dispatch({
                        type: "ADD_PRODUCTS",
                        payload: {
                          id,
                          name,
                          category,
                          price,
                          quantity,
                          img,
                        },
                      })
                    }
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </CartContext.Consumer>,
    modalRoot
  );
};

export default ProdModal;
