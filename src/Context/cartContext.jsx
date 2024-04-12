import React, { createContext, useReducer, useState, useEffect } from "react";
import { act } from "react-dom/test-utils";

const initialState = {
  products: [],
  quantity: 0,
  total: 0,
};

export const CartContext = createContext(initialState);

const cartReducer = (state, action) => {
  switch (action.type) {
    case "LOAD_CART_STATE":
      return action.payload;
    case "ADD_PRODUCTS":
      const existingProductIndex = state.products.findIndex(
        (item) => item.id === action.payload.id
      );

      if (existingProductIndex === -1) {
        return {
          ...state,
          products: [...state.products, action.payload],
          quantity: state.quantity + action.payload.quantity,
          total: state.total + action.payload.price * action.payload.quantity,
        };
      } else {
        return {
          ...state,
          quantity: action.payload.quantity + state.quantity,
          products: state.products.map((item) => {
            if (item.id === action.payload.id) {
              item.quantity += action.payload.quantity;
            }
            return item;
          }),
          total: state.total + action.payload.price,
        };
      }
    case "ADD_PRODUCT":
      const { productId } = action.payload;
      const existingProduct = state.products.find(
        (item) => item.id === productId
      );

      if (existingProduct) {
        const updatedProducts = state.products.map((item) => {
          if (item.id === productId) {
            return {
              ...item,
              quantity: item.quantity + 1,
            };
          }
          return item;
        });

        return {
          ...state,
          products: updatedProducts,
          quantity: state.quantity + 1,
          total: state.total + existingProduct.price,
        };
      }
      return state;
    case "REMOVE_PRODUCTS":
      const { productId: id } = action.payload;
      const product = state.products.find(
        (item) => item.id === id
      );

      if (product) {
        const updatedProducts = state.products.map((item) => {
          if (item.id === id) {
            return {
              ...item,
              quantity: item.quantity - 1,
            };
          }
          return item;
        });

        const updatedTotal = state.total - product.price;

        return {
          ...state,
          products: updatedProducts.filter((item) => item.quantity > 0),
          quantity: state.quantity - 1,
          total: updatedTotal >= 0 ? updatedTotal : 0,
        };
      }
      return state;
    case "CLEAR_CART":
      return initialState;
    default:
      return state;
  }
};

export const CartProvider = ({ children }) => {
  const [open, setOpen] = useState(false);
  const [state, dispatch] = useReducer(cartReducer, initialState);

  useEffect(() => {
    const savedCartState = localStorage.getItem("cartState");
    if (savedCartState) {
      dispatch({ type: "LOAD_CART_STATE", payload: JSON.parse(savedCartState) });
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cartState", JSON.stringify(state));
  }, [state]);

  return (
    <CartContext.Provider value={{ state, dispatch, open, setOpen }}>
      {children}
    </CartContext.Provider>
  );
};
