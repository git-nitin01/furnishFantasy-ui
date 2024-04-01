import React from 'react'
import { useState } from 'react'
import $ from 'jquery'

const Filters = ({ categories, onCategoryChange, onPriceChange, onSortChange }) => {
    const [selectedCategory, setSelectedCategory] = useState('');
    const [selectedPrice, setSelectedPrice] = useState('');
    const [selectedSort, setSelectedSort] = useState('');
  
    const handleCategoryChange = (category) => {
      setSelectedCategory(category);
      onCategoryChange(category);
    };
  
    const handlePriceChange = (price) => {
      setSelectedPrice(price);
      onPriceChange(price);
    };
  
    const handleSortChange = (sort) => {
      setSelectedSort(sort);
      onSortChange(sort);
    };

    $(() => {
        const $card = $('.card');
        const card_style = "fixed bg-white w-[18%] border-r-2 pl-7 pr-3 pt-6 pb-8 mb-4";
        $card.addClass(card_style);

        const $title = $('.card-title');
        const title_style = "text-2xl font-bold text-black mb-5";
        $title.addClass(title_style);

        const $filter = $('.filter');
        const filter_style = "mb-5 w-[50%]";
        $filter.addClass(filter_style);

        const $select = $('.form-select');
        const select_style = "w-36 p-2 border-2 border-gray-300 rounded-md";
        $select.addClass(select_style);
    })
  
    return (
      <div className="card">
        <div className="card-body">
          <h3 className="card-title">Product Filters</h3>
          <div id="category-filter" className='filter'>
            <h6>Category</h6>
            <select
              className="form-select"
              value={selectedCategory}
              onChange={(e) => handleCategoryChange(e.target.value)}
            >
              <option value="">All Categories</option>
              {categories.map((category, index) => (
                <option key={index} value={category}>{category}</option>
              ))}
            </select>
          </div>
          <div id="price-filter" className='filter'>
            <h6>Price Range</h6>
            <select
              className="form-select"
              value={selectedPrice}
              onChange={(e) => handlePriceChange(e.target.value)}
            >
              <option value="">All Prices</option>
              <option value="0-25">$0 - $25</option>
              <option value="25-50">$25 - $50</option>
              <option value="50-100">$50 - $100</option>
              <option value="100+">$100+</option>
            </select>
          </div>
          <div id="sort-filter" className='filter'>
            <h6>Sort By</h6>
            <select
              className="form-select"
              value={selectedSort}
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

export default Filters