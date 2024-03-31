import React from 'react'
import Filters from './Filters'
import Products from './Products'
import $ from 'jquery'

function Gallery() {

    $(() => {
        const $header = $('#top-heading');
        const header_style = "block mb-[10px] text-4xl text-center font-bold text-black";
        $header.addClass(header_style);

        const $gallery = $('#gallery-container');
        const gallery_style = "p-[10px] flex relative text-black w-screen";
        $gallery.addClass(gallery_style);


    })
     // Dummy product list
  const products = [
    { id: 1, name: 'Product 1', category: 'Electronics', price: 30 },
    { id: 2, name: 'Product 2', category: 'Clothing', price: 20 },
    { id: 3, name: 'Product 3', category: 'Books', price: 40 },
    { id: 4, name: 'Product 4', category: 'Electronics', price: 50 },
  ];

  // Function to filter products based on selected filters
  const filterProducts = (category) => {
    // You can perform actions like fetching products based on selected filters here
    console.log('Category:', category);
  };

  const filterProductsByPrice = (price) => {
    // You can perform actions like fetching products based on selected filters here
    console.log('Price Range:', price);
  };

  const sortProducts = (sort) => {
    // You can perform actions like fetching products based on selected filters here
    console.log('Sort By:', sort);
  };

  // Extract categories from products
  const categories = [...new Set(products.map(product => product.category))];

  return (
    <div className='z-1 absolute mt-[50px]'>
        <h1 id="top-heading">Product Gallery</h1>
        <div id="gallery-container">
            
            <Filters
            categories={categories} 
            onCategoryChange={filterProducts} 
            onPriceChange={filterProductsByPrice} 
            onSortChange={sortProducts} 
            />
            <Products/>
        </div>
    </div>
  );
}

export default Gallery