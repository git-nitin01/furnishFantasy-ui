// Prod.js
import React from 'react';

function Prod({ name, category, price }) {
    return (
        <div className="w-full sm:w-64 bg-white rounded-lg shadow-md">
            <div className="text-center mb-2">
                <img src="src/assets/image.png" alt="product" className="mx-auto" />
            </div>
            <div className="text-center mb-2">
                <h2 className="text-lg font-bold">{name}</h2>
                <p className="text-sm text-gray-600">{category}</p>
                <p className="text-lg font-bold">${price}</p>
            </div>
            <div className="text-center mb-2">
                <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300">Add to Cart</button>
            </div>
        </div>
    );
}

export default Prod;
