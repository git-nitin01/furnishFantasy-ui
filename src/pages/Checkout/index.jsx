import React, { useReducer, useContext } from "react";
import { CartContext } from "../../Context/cartContext";

const initialFormState = {
  contact: {
    email: "",
  },
  shipping: {
    firstName: "",
    lastName: "",
    company: "",
    address: "",
    apartment: "",
    city: "",
    country: "United States",
    stateProvince: "",
    postalCode: "",
    phone: "",
    deliveryMethod: "Standard",
  },
  billing: {
    sameAsShipping: true,
  },
};

const formReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_FIELD":
      return {
        ...state,
        [action.section]: {
          ...state[action.section],
          [action.field]: action.value,
        },
      };
    case "TOGGLE_SAME_AS_SHIPPING":
      return {
        ...state,
        billing: {
          ...state.billing,
          sameAsShipping: !state.billing.sameAsShipping,
        },
      };
    default:
      return state;
  }
};

const CheckoutPage = () => {
  const { state: { products, total } = {}, dispatch } = useContext(CartContext);
  const [formData, dispatchForm] = useReducer(formReducer, initialFormState);
  const { contact, shipping, billing } = formData;

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Handle form submission
  };

  const handleChange = (section, field, value) => {
    dispatchForm({ type: "UPDATE_FIELD", section, field, value });
  };

  const toggleSameAsShipping = () => {
    dispatchForm({ type: "TOGGLE_SAME_AS_SHIPPING" });
  };

  return (
    <div className="container bg-gray-200 mx-auto mt-14">
      <div className="flex justify-center">
        <div className="max-w-4xl w-full bg-white p-8 my-8 shadow-lg rounded-lg flex">
          <div className="w-1/2 pr-8">
            <h1 className="text-3xl font-semibold mb-6">Checkout</h1>
            <form onSubmit={(e) => handleSubmit(e)}>
              <div className="mb-6">
                <h2 className="text-lg font-semibold mb-2">
                  Contact Information
                </h2>
                <input
                  type="email"
                  className="border border-gray-300 rounded-md bg-white w-full py-2 px-3"
                  placeholder="Email Address"
                  value={contact.email}
                  onChange={(e) =>
                    handleChange("contact", "email", e.target.value)
                  }
                />
              </div>
              <div className="mb-6">
                <h2 className="text-lg font-semibold mb-2">
                  Shipping Information
                </h2>
                <div className="mb-6">
                  <div className="grid grid-cols-2 gap-4">
                    <input
                      type="text"
                      className="border border-gray-300 rounded-md bg-white w-full py-2 px-3"
                      placeholder="First Name"
                      value={shipping.firstName}
                      onChange={(e) =>
                        handleChange("shipping", "firstName", e.target.value)
                      }
                    />
                    <input
                      type="text"
                      className="border border-gray-300 rounded-md bg-white w-full py-2 px-3"
                      placeholder="Last Name"
                      value={shipping.lastName}
                      onChange={(e) =>
                        handleChange("shipping", "lastName", e.target.value)
                      }
                    />
                    <input
                      type="text"
                      className="border border-gray-300 rounded-md bg-white w-full py-2 px-3"
                      placeholder="Company"
                      value={shipping.company}
                      onChange={(e) =>
                        handleChange("shipping", "company", e.target.value)
                      }
                    />
                    <input
                      type="text"
                      className="border border-gray-300 bg-white rounded-md w-full py-2 px-3"
                      placeholder="Address"
                      value={shipping.address}
                      onChange={(e) =>
                        handleChange("shipping", "address", e.target.value)
                      }
                    />
                    <input
                      type="text"
                      className="border border-gray-300 bg-white rounded-md w-full py-2 px-3"
                      placeholder="Apartment, suite, etc."
                      value={shipping.apartment}
                      onChange={(e) =>
                        handleChange("shipping", "apartment", e.target.value)
                      }
                    />
                    <input
                      type="text"
                      className="border border-gray-300 bg-white rounded-md w-full py-2 px-3"
                      placeholder="City"
                      value={shipping.city}
                      onChange={(e) =>
                        handleChange("shipping", "city", e.target.value)
                      }
                    />
                    <select
                      className="border border-gray-300 bg-white rounded-md w-full py-2 px-3"
                      value={shipping.country}
                      onChange={(e) =>
                        handleChange("shipping", "country", e.target.value)
                      }
                    >
                      <option value="United States">Canada</option>
                      <option value="United States">United States</option>
                      <option value="United States">India</option>
                    </select>
                    <input
                      type="text"
                      className="border border-gray-300 bg-white rounded-md w-full py-2 px-3"
                      placeholder="State / Province"
                      value={shipping.stateProvince}
                      onChange={(e) =>
                        handleChange(
                          "shipping",
                          "stateProvince",
                          e.target.value
                        )
                      }
                    />
                    <input
                      type="text"
                      className="border border-gray-300 bg-white rounded-md w-full py-2 px-3"
                      placeholder="Postal Code"
                      value={shipping.postalCode}
                      onChange={(e) =>
                        handleChange("shipping", "postalCode", e.target.value)
                      }
                    />
                    <input
                      type="text"
                      className="border border-gray-300 bg-white rounded-md w-full py-2 px-3"
                      placeholder="Phone"
                      value={shipping.phone}
                      onChange={(e) =>
                        handleChange("shipping", "phone", e.target.value)
                      }
                    />
                    <div className="col-span-2">
                      <label className="block mb-2">Delivery Method</label>
                      <select
                        className="border border-gray-300 bg-white rounded-md w-full py-2 px-3"
                        value={shipping.deliveryMethod}
                        onChange={(e) =>
                          handleChange(
                            "shipping",
                            "deliveryMethod",
                            e.target.value
                          )
                        }
                      >
                        <option value="Standard">
                          Standard (4–10 business days) - $5.00
                        </option>
                        <option value="Express">
                          Express (2–5 business days) - $16.00
                        </option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mb-6">
                <h2 className="text-lg font-semibold mb-2">
                  Billing Information
                </h2>
                <div className="flex items-center mb-2">
                  <input
                    type="checkbox"
                    id="sameAsShipping"
                    checked={billing.sameAsShipping}
                    onChange={toggleSameAsShipping}
                    className="mr-2"
                  />
                  <label htmlFor="sameAsShipping">
                    Same as shipping information
                  </label>
                </div>
              </div>
              <button
                type="submit"
                className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700 transition duration-300"
              >
                Place Order
              </button>
            </form>
          </div>
          <div className="w-1/2 pl-8">
            <div className="bg-gray-100 p-4 rounded-lg">
              <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
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
                              <p className="text-base">{product.name}</p>
                              <p className="text-sm">Quantity: {product.quantity}</p>
                            </h3>
                            <p className="ml-4">${product.price * product.quantity}</p>
                          </div>
                          <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                          <div className="flex flex-1 items-end justify-between text-sm">
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
              </ul>
              <div className="border-t border-gray-300 mt-4 pt-2">
                <span className="font-semibold">Total:</span>
                <span> ${total}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
