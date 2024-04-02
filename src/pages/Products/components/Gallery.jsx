// Gallery.js
import React from "react";
import Filters from "./Filters";
import Products from "./Products";

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

  const filterProducts = (category) => {
    console.log("Category:", category);
  };

  const filterProductsByPrice = (price) => {
    console.log("Price Range:", price);
  };

  const sortProducts = (sort) => {
    console.log("Sort By:", sort);
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
          <Products products={products} />
        </div>
      </div>
    </main>
  );
}

export default React.memo(Gallery);
