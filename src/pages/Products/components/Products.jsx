// Products.js
import React, { useState } from "react";
import Prod from "./Prod";
import search from '../../../../public/images/Search.gif'

function Products({ products, categories, setFilterState }) {
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 6; // Change this value as needed

  // Calculate index of the first and last product on the current page
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  if (currentProducts.length === 0) {
    return (
        <div className="h-screen flex">
  <div className="relative">
    <img src={search} alt="Search Icon"  />
    <div  className="absolute top-4 left-0 right-0 flex flex-col items-center">
    <p className="text-gray-600 font-semibold text-lg">Oops! No products found.</p>
    <button
        onClick={() => setFilterState({
          category: "",
          price: "",
          sort: "",
        })}
        className="h-10 w-44 bg-blue-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600 transition duration-300 ease-in-out mt-2"
      >
        Reset Filters
      </button>
    </div>
   
  </div>
</div>


      
    );
  }
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-6">
      {currentProducts.map((product) => (
        <Prod
          key={product.id}
          des={product.description}
          id={product.id}
          name={product.name}
          caption={product.caption}
          category={
            categories.find((category) => category.id === product.category)
              .title
          }
          price={product.price}
          img={product.image}
        />
      ))}
      {/* Second Row */}
      {products.length > productsPerPage && (
        <div className="col-span-full sm:col-span-3 lg:col-span-3 flex justify-center">
          {Array.from(
            { length: Math.ceil(products.length / productsPerPage) },
            (_, index) => (
              <button
                key={index}
                onClick={() => paginate(index + 1)}
                className={`mx-2 px-3 py-1 bg-gray-200 rounded ${
                  currentPage === index + 1 ? "bg-gray-400" : ""
                }`}
              >
                {index + 1}
              </button>
            )
          )}
        </div>
      )}
    </div>
  );
}

export default Products;
