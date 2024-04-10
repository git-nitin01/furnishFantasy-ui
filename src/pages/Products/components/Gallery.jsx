// Gallery.js
import React from "react";
import Filters from "./Filters";
import Products from "./Products";
import { useState, useEffect } from "react";
import Spinner from "./Spinner";

function Gallery({ products }) {
  
  const [filteredProducts, setFilteredProducts] = useState(products);

  const filterProducts = (category) => {
    // Filter products by category
    if (category === "") {
      setFilteredProducts(products);
    } else {
      const filteredProducts = products.filter((product) => product.category === category);
      setFilteredProducts(filteredProducts);
    }
  };

  const filterProductsByPrice = (price) => {
    // Filter products by price
    const filteredProducts = products.filter((product) => {
      if (price === "0-25") {
        return product.price >= 0 && product.price <= 25;
      } else if (price === "25-50") {
        return product.price >= 25 && product.price <= 50;
      } else if (price === "50-100") {
        return product.price >= 50 && product.price <= 100;
      } else if (price === "100+"){
        return product.price > 100;
      } else {
        return product;
      }
    });
    setFilteredProducts(filteredProducts);
  };

  const sortProducts = (sort) => {
    // Sort products by price
    const sortedProducts = [...filteredProducts].sort((a, b) => {
      if (sort === "price-asc") {
        // Sort by price ascending
        return a.price - b.price;
      } else if (sort === "price-desc") {
        // Sort by price descending
        return b.price - a.price; 
      } else if (sort === "name-asc") {
        // Sort by name ascending
        return a.name.localeCompare(b.name);
      } else if (sort === "name-desc") {
        // Sort by name descending
        return b.name.localeCompare(a.name);
      } else {
        // return default
        return a.id - b.id;
      }
    });
    setFilteredProducts(sortedProducts);
  };

  const categories = [...new Set(products.map((product) => product.category))];
  console.log("here in the gallery");
  return (
    <main className="mt-10 px-8 bg-[#EEEEEE]">
    <div className="py-10 mx-auto">
      <h1 className="text-4xl font-bold text-center mb-8">Product Gallery</h1>
      {
        (filteredProducts.length === 0) ? <Spinner /> : (
          <div className="flex flex-col lg:flex-row justify-center items-start">
            <Filters
              categories={categories}
              onCategoryChange={filterProducts}
              onPriceChange={filterProductsByPrice}
              onSortChange={sortProducts}
            />
            <Products products={filteredProducts} />
        </div>
        )
      }
    </div>
  </main>
  );
}

export default React.memo(Gallery);
