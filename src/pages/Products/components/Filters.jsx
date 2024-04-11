// Filters.js
import React from 'react';
import { useEffect } from 'react';

const Filters = ({ categories, onCategoryChange, onPriceChange, onSortChange, defaultCat }) => {

    useEffect(() => {
        if (defaultCat) {
            onCategoryChange(defaultCat);
        }
    }, []);

    const handleCategoryChange = (category) => {
        onCategoryChange(category);
    };

    const handlePriceChange = (price) => {
        onPriceChange(price);
    };

    const handleSortChange = (sort) => {
        onSortChange(sort);
    };

    return (
        <div className="w-full lg:w-1/4 lg:mr-8 mb-8 lg:mb-0">
            {console.log("here in the filters")}
            {console.log(categories)}
            <div className="bg-white p-4 rounded-lg shadow-lg">
                <h3 className="text-lg font-bold mb-4">Product Filters</h3>
                <div className="mb-4">
                    <label htmlFor="category" className="block font-medium text-gray-700 mb-2">Category</label>
                    <select
                        id="category"
                        className="block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:border-indigo-500"
                        onChange={(e) => handleCategoryChange(e.target.value)}
                    >
                        <option value="">All Categories</option>
                        {categories.map((category, index) => {
                            if (defaultCat === category) {
                                return <option key={index} value={category} selected>{category}</option>
                            } else {
                                return <option key={index} value={category}>{category}</option>
                            }
                        })}
                    </select>
                </div>
                <div className="mb-4">
                    <label htmlFor="price" className="block font-medium text-gray-700 mb-2">Price Range</label>
                    <select
                        id="price"
                        className="block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:border-indigo-500"
                        onChange={(e) => handlePriceChange(e.target.value)}
                    >
                        <option value="">All Prices</option>
                        <option value="0-25">$0 - $25</option>
                        <option value="25-50">$25 - $50</option>
                        <option value="50-100">$50 - $100</option>
                        <option value="100+">$100+</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="sort" className="block font-medium text-gray-700 mb-2">Sort By</label>
                    <select
                        id="sort"
                        className="block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:border-indigo-500"
                        onChange={(e) => handleSortChange(e.target.value)}
                    >
                        <option value="">Default</option>
                        <option value="price-asc">Price: Low to High</option>
                        <option value="price-desc">Price: High to Low</option>
                        <option value="name-asc">Name: A to Z</option>
                        <option value="name-desc">Name: Z to A</option>
                    </select>
                </div>
            </div>
        </div>
    );
};

export default Filters;
