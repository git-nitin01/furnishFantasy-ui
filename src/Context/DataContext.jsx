import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
    const[products, setProducts] = useState([]);
    const[categories, setCategories] = useState([]);
    const[clearance, setClearance] = useState([]);

    const IP = '10.4.2.233'
    
    useEffect(() => {
        // fetching products
        axios({
            method: 'get',
            url: `http://${IP}:8080/furnishFantasy/product/getProduct`,
          })
            .then(function (response) {
              // handle success
              console.log(response);
              const fetchedProducts = response.data.data.map(product => ({
                id: product.p_id,
                name: product.name,
                discount: product.discount,
                price: product.originalPrice,
                caption: product.caption,
                category: product.categoryId,
                image: `data:image/png;base64,${product.pImg}`,
                description: product.description
              }));
                setProducts(fetchedProducts);
                // random clearance products
                let clearance = [];
                for (let i = 0; i < 8; i++) {
                    const randomIndex = Math.floor(Math.random() * fetchedProducts.length);
                    clearance.push(fetchedProducts[randomIndex]);
                }
                setClearance(clearance);
            }).catch(function (error) {
              // handle error
              console.log(error);
            });
        
        // fetching categories
        axios({
        method: 'get',
        url: `http://${IP}:8080/furnishFantasy/category/getCategory`,
        }).then(function (response) {
        console.log(response);
        const fetchedCategories = response.data.data.map(category => ({
            id: category.catId,
            title: category.catName,
            description: category.catDescription,
            image: `data:image/png;base64,${category.catImg}`
        }));
        setCategories(fetchedCategories);
        }).catch(function (error) {
        console.log(error);
        })
    }, [])

    const [data, setData] = useState({products: [], categories: [], clearance: []});

    useEffect(() => {
        if(products.length > 0 && categories.length > 0 && clearance.length > 0){
            setData({products, categories, clearance});
            console.log("Data fetched", data);
        }
    }, [products, categories, clearance]);

    return (
        <DataContext.Provider value={{data}}>
            {children}
        </DataContext.Provider>
    )
};
