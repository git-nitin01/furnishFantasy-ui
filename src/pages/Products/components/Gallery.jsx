// Gallery.js
import React from 'react';
import Filters from './Filters';
import Products from './Products';

function Gallery() {
    const products = [
        { id: 1, name: 'Product 1', category: 'Electronics', price: 30 },
        { id: 2, name: 'Product 2', category: 'Clothing', price: 20 },
        { id: 3, name: 'Product 3', category: 'Books', price: 40 },
        { id: 4, name: 'Product 4', category: 'Electronics', price: 50 },
        { id: 1, name: 'Product 1', category: 'Electronics', price: 30 },
        { id: 2, name: 'Product 2', category: 'Clothing', price: 20 },
        { id: 3, name: 'Product 3', category: 'Books', price: 40 },
        { id: 1, name: 'Product 1', category: 'Electronics', price: 30 },
        { id: 2, name: 'Product 2', category: 'Clothing', price: 20 },
        { id: 3, name: 'Product 3', category: 'Books', price: 40 },
        { id: 4, name: 'Product 4', category: 'Electronics', price: 50 },
        { id: 1, name: 'Product 1', category: 'Electronics', price: 30 },
        { id: 2, name: 'Product 2', category: 'Clothing', price: 20 },
        { id: 3, name: 'Product 3', category: 'Books', price: 40 },
        { id: 1, name: 'Product 1', category: 'Electronics', price: 30 },
        { id: 2, name: 'Product 2', category: 'Clothing', price: 20 },
        { id: 3, name: 'Product 3', category: 'Books', price: 40 },
    ];

    const filterProducts = (category) => {
        console.log('Category:', category);
    };

    const filterProductsByPrice = (price) => {
        console.log('Price Range:', price);
    };

    const sortProducts = (sort) => {
        console.log('Sort By:', sort);
    };

    const categories = [...new Set(products.map(product => product.category))];

    return (
        <main className='mt-10 px-8 bg-[#EEEEEE]'>
            <div className='py-10 mx-auto'>
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

export default Gallery;
