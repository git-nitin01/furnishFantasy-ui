// Filters.js
import React from 'react';
import { useEffect } from 'react';

const Filters = ({ categories, categoryNames, filterState, setFilterState }) => {

    useEffect(() => {
        // filter products
        console.log("Filter State changed");
        console.log(filterState);
      }, [filterState]);
    
    return (
        <div className="w-full lg:w-1/4 lg:mr-8 mb-8 lg:mb-0">
            {console.log("here in the filters")}
            {console.log(categories)}
            {console.log(categoryNames)}

            <div className="bg-white p-4 rounded-lg shadow-lg">
                <h3 className="text-lg font-bold mb-4">Product Filters</h3>
                <div className="mb-4">
                    <label htmlFor="category" className="block font-medium text-gray-700 mb-2">Category</label>
                    <select
                        id="category"
                        className="block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:border-indigo-500"
                        onChange={(e) => setFilterState({ ...filterState, category: e.target.value })}
                    >
                        <option value="">All Categories</option>
                        {categories.map((category, index) => {
                            if (filterState.category === category) {
                                return <option key={index} value={category} selected>{categoryNames[index]}</option>
                            } else {
                                return <option key={index} value={category}>{categoryNames[index]}</option>
                            }
                        })}
                    </select>
                </div>
                <div className="mb-4">
                    <label htmlFor="price" className="block font-medium text-gray-700 mb-2">Price Range</label>
                    <select
                        id="price"
                        className="block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:border-indigo-500"
                        onChange={(e) => setFilterState({ ...filterState, price: e.target.value })}
                    >
                        {
                            filterState.price === "" ? <option value="" selected>All Prices</option> : <option value="">All Prices</option>
                        }
                        {
                            filterState.price === "0-25" ? <option value="0-25" selected>$0 - $25</option> : <option value="0-25">$0 - $25</option>
                        }
                        {
                            filterState.price === "25-50" ? <option value="25-50" selected>$25 - $50</option> : <option value="25-50">$25 - $50</option>
                        }
                        {
                            filterState.price === "50-100" ? <option value="50-100" selected>$50 - $100</option> : <option value="50-100">$50 - $100</option>
                        }
                        {
                            filterState.price === "100+" ? <option value="100+" selected>$100+</option> : <option value="100+">$100+</option>
                        }
                    </select>
                </div>
                <div>
                    <label htmlFor="sort" className="block font-medium text-gray-700 mb-2">Sort By</label>
                    <select
                        id="sort"
                        className="block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:border-indigo-500"
                        onChange={(e) => setFilterState({ ...filterState, sort: e.target.value })}
                    >
                        {
                            filterState.sort === "" ? <option value="" selected>Default</option> : <option value="">Default</option>
                        }
                        {
                            filterState.sort === "price-asc" ? <option value="price-asc" selected>Price - Low to High</option> : <option value="price-asc">Price - Low to High</option>
                        }
                        {
                            filterState.sort === "price-desc" ? <option value="price-desc" selected>Price - High to Low</option> : <option value="price-desc">Price - High to Low</option>
                        }
                        {
                            filterState.sort === "name-asc" ? <option value="name-asc" selected>Name - A to Z</option> : <option value="name-asc">Name - A to Z</option>
                        }
                        {
                            filterState.sort === "name-desc" ? <option value="name-desc" selected>Name - Z to A</option> : <option value="name-desc">Name - Z to A</option>
                        }
                    </select>
                </div>
            </div>
        </div>
    );
};

export default Filters;
