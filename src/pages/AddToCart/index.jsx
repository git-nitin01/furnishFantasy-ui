import React, { useContext, useEffect } from "react";
import { FaTimes, FaPlus, FaMinus } from "react-icons/fa";
import $ from "jquery"; // Import jQuery
import { CartContext } from "../../Context/cartContext";

const AddToCart = () => {
  const {
    state: { quantity, products, total } = {},
    dispatch,
    setOpen,
  } = useContext(CartContext);

  useEffect(() => {
    if (open) {
      $(".shopping-cart-dialog").fadeIn(); // Fade in the dialog when it opens
    } else {
      $(".shopping-cart-dialog").fadeOut(); // Fade out the dialog when it closes
    }
  }, [open]);

  const handleIncreaseQuantity = (productId) => {
    dispatch({
      type: "ADD_PRODUCT",
      payload: {
        productId,
        quantity: 1,
      },
    });
  };

  const handleDecreaseQuantity = (productId) => {
    dispatch({
      type: "REMOVE_PRODUCTS",
      payload: {
        productId,
      },
    });
  };

  return (
    <div className="fixed inset-0 overflow-hidden z-50">
      <div className="fixed inset-0 overflow-hidden bg-gray-500 bg-opacity-75">
        <div className="flex h-full">
          <div className="flex-grow"></div>
          <div
            className="flex-none w-96 bg-white overflow-y-auto p-4 shopping-cart-dialog"
            style={{
              display: "none",
              height: "calc(100vh - 3rem)",
              marginTop: "3.5rem",
            }}
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-medium text-gray-900">
                Shopping cart
              </h2>
              <button
                type="button"
                className="text-gray-400 hover:text-gray-500"
                onClick={() => setOpen(false)}
              >
                <FaTimes className="h-6 w-6" aria-hidden="true" />{" "}
                {/* Use FaTimes icon */}
              </button>
            </div>
            <div className="px-4 py-2">
              {quantity === 0 ? (
                <div className=" flex text-sm text-gray-500">
                  <p>
                    <p className="text-gray-500">Your cart is empty.</p>

                    <button
                      type="button"
                      className="font-medium text-indigo-600 hover:text-indigo-500 transition duration-300"
                      onClick={() => setOpen(false)}
                    >
                      Continue Shopping
                      <span aria-hidden="true"> &rarr;</span>
                    </button>
                  </p>
                </div>
              ) : (
                <ul role="list" className="divide-y divide-gray-200">
                  {products.map((product) => (
                    <li key={product.id} className="py-2">
                      <div className="flex items-center space-x-4">
                        <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                          <img
                            src={product.img}
                            alt={product.imageAlt}
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                        <div className="flex flex-1 flex-col">
                          <div className="flex justify-between text-base font-medium text-gray-900">
                            <h3>
                              <a href={product.href}>{product.name}</a>
                            </h3>
                            <p className="ml-4">
                              ${product.price * product.quantity}
                            </p>
                          </div>
                          <p className="mt-1 text-sm text-gray-500">
                            {product.color}
                          </p>
                          <div className="flex flex-1 items-end justify-between text-sm">
                            <div className="flex items-center">
                              <button
                                type="button"
                                className="text-gray-500 hover:text-gray-600"
                                onClick={() =>
                                  handleDecreaseQuantity(product.id)
                                }
                              >
                                <FaMinus />
                              </button>
                              <p className="mx-2">{product.quantity}</p>
                              <button
                                type="button"
                                className="text-gray-500 hover:text-gray-600"
                                onClick={() =>
                                  handleIncreaseQuantity(product.id)
                                }
                              >
                                <FaPlus />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>
            {quantity > 0 && (
              <div className="border-t border-gray-200 px-4 py-4">
                <div className="flex justify-between text-base font-medium text-gray-900">
                  <p>Subtotal</p>
                  <p>${total}</p> {/* Placeholder for subtotal */}
                </div>
                <p className="mt-0.5 text-sm text-gray-500">
                  Shipping and taxes calculated at checkout.
                </p>
                <div className="mt-6 justify-center flex">
                  <a href="/checkout">
                    <button
                      type="submit"
                      className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700 transition duration-300"
                    >
                      Checkout
                    </button>
                  </a>
                </div>
                <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                  <p>
                    or{" "}
                    <button
                      type="button"
                      className="font-medium text-indigo-600 hover:text-indigo-500 transition duration-300"
                      onClick={() => setOpen(false)}
                    >
                      Continue Shopping
                      <span aria-hidden="true"> &rarr;</span>
                    </button>
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddToCart;
