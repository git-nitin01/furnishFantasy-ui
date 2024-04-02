// Products.js
import React, { useState } from 'react';
import Prod from './Prod';

function Products({ products }) {
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 6; // Change this value as needed

    // Calculate index of the first and last product on the current page
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

    // Change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);
console.log('currentProducts', currentProducts)
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-6">
            {currentProducts.map((product, index) => (
                <Prod key={product.id} des={product.des} id={product.id} name={product.name} category={product.category} price={product.price} img={product.img} />
            ))}
            {/* Second Row */}
            {products.length > productsPerPage && (
                <div className="col-span-full sm:col-span-3 lg:col-span-3 flex justify-center">
                    {Array.from({ length: Math.ceil(products.length / productsPerPage) }, (_, index) => (
                        <button key={index} onClick={() => paginate(index + 1)} className={`mx-2 px-3 py-1 bg-gray-200 rounded ${currentPage === index + 1 ? 'bg-gray-400' : ''}`}>
                            {index + 1}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}

export default Products;
