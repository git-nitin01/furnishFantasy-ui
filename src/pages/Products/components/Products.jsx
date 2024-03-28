import React from 'react'
import Prod from './Prod'
import $ from 'jquery'

function Products({}) {
    const products = [
        { id: 1, name: 'Product 1', category: 'Electronics', price: 30, description: 'This is a product description from the backend API response for product 1'},
        { id: 2, name: 'Product 2', category: 'Clothing', price: 20, description: 'This is a product description from the backend API response for product 2'},
        { id: 3, name: 'Product 3', category: 'Books', price: 40, description: 'This is a product description from the backend API response for product 3'},
        { id: 4, name: 'Product 4', category: 'Electronics', price: 50, description: 'This is a product description from the backend API response for product 4'},
      ];



    $(() => {
        const $prod_container = $('#prod_container');
        const prod_container_style = "pl-[22%] flex flex-row flex-wrap overflow-hidden p-5";
        $prod_container.addClass(prod_container_style);
    })

    return (
        <div id="prod_container">
            {products.map((product, index) => (
                <Prod key={index} name={product.name} category={product.category} price={product.price} desc={product.description} />
            ))}
        </div>
    )
}

export default Products