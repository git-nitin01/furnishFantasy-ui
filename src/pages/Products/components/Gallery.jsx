// Gallery.js
import React from "react";
import Filters from "./Filters";
import Products from "./Products";
import { useState } from "react";

function Gallery() {
  const products = [
    {
      id: 1,
      name: "Product 1",
      category: "Electronics",
      price: 30,
      img: "src/assets/image.png",
      des: "This is a product description from the backend API response for product 1",
    },
    {
      id: 2,
      name: "Product 2",
      category: "Clothing",
      price: 20,
      img: "src/assets/image.png",
      des: "This is a product description from the backend API response for product 2",
    },
    {
      id: 3,
      name: "Product 3",
      category: "Books",
      price: 40,
      img: "src/assets/image.png",
      des: "This is a product description from the backend API response for product 3",
    },
    {
      id: 4,
      name: "Product 4",
      category: "Electronics",
      price: 50,
      img: "src/assets/image.png",
      des: "This is a product description from the backend API response for product",
    },
    {
      id: 5,
      name: "Product 1",
      category: "Electronics",
      price: 30,
      img: "src/assets/image.png",
      des: "This is a product description from the backend API response for product",
    },
    {
      id: 6,
      name: "Product 2",
      category: "Clothing",
      price: 20,
      img: "src/assets/image.png",
      des: "This is a product description from the backend API response for product",
    },
    {
      id: 7,
      name: "Product 3",
      category: "Books",
      price: 40,
      img: "src/assets/image.png",
      des: "This is a product description from the backend API response for product",
    },
    {
      id: 8,
      name: "Product 1",
      category: "Electronics",
      price: 30,
      img: "src/assets/image.png",
      des: "This is a product description from the backend API response for product",
    },
    {
      id: 9,
      name: "Product 2",
      category: "Clothing",
      price: 20,
      img: "src/assets/image.png",
      des: "This is a product description from the backend API response for product",
    },
    {
      id: 10,
      name: "Product 3",
      category: "Books",
      price: 40,
      img: "src/assets/image.png",
      des: "This is a product description from the backend API response for product",
    },
    {
      id: 11,
      name: "Product 4",
      category: "Electronics",
      price: 50,
      img: "src/assets/image.png",
      des: "This is a product description from the backend API response for product",
    },
    {
      id: 12,
      name: "Product 1",
      category: "Electronics",
      price: 30,
      img: "src/assets/image.png",
      des: "This is a product description from the backend API response for product",
    },
    {
      id: 13,
      name: "Product 2",
      category: "Clothing",
      price: 20,
      img: "src/assets/image.png",
      des: "This is a product description from the backend API response for product",
    },
    {
      id: 14,
      name: "Product 3",
      category: "Books",
      price: 40,
      img: "src/assets/image.png",
      des: "This is a product description from the backend API response for product",
    },
    {
      id: 15,
      name: "Product 1",
      category: "Electronics",
      price: 30,
      img: "src/assets/image.png",
      des: "This is a product description from the backend API response for product",
    },
    {
      id: 16,
      name: "Product 2",
      category: "Clothing",
      price: 20,
      img: "src/assets/image.png",
      des: "This is a product description from the backend API response for product",
    },
    {
      id: 17,
      name: "Product 3",
      category: "Books",
      price: 40,
      img: "src/assets/image.png",
      des: "This is a product description from the backend API response for product",
    },
  ];

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
        <div className="flex flex-col lg:flex-row justify-center items-start">
          <Filters
            categories={categories}
            onCategoryChange={filterProducts}
            onPriceChange={filterProductsByPrice}
            onSortChange={sortProducts}
          />
          <Products products={filteredProducts} />
        </div>
      </div>
    </main>
  );
}

export default React.memo(Gallery);
