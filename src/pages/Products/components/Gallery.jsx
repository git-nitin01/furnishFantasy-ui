// Gallery.js
import React, { useEffect } from "react";
import Filters from "./Filters";
import Products from "./Products";
import { useState } from "react";


function Gallery({ products, categories, defaultCat}) {
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [filterState, setFilterState] = useState({
    category: "",
    price: "",
    sort: "",
  });


  useEffect(() => {
    if (defaultCat) {
      setFilterState({ ...filterState, category: defaultCat });
    }
    applyFilters();
  },[]);

  useEffect(() => {
    {console.log("Filter State changed from gallery");}
    applyFilters();
  }, [filterState]);


  // Filter products based on filterState
  const applyFilters = () => {
    let filteredProductsByCat = products.filter((product) => {
      if (filterState.category === "") {
        return true;
      } else {
        return product.category === filterState.category;
      }
    })

    let filteredProductsByPrice = filteredProductsByCat.filter((product) => {
      if (filterState.price === "") {
        return true;
      } else if (filterState.price === "0-25") {
        return product.price >= 0 && product.price <= 25;
      } else if (filterState.price === "25-50") {
        return product.price >= 25 && product.price <= 50;
      } else if (filterState.price === "50-100") {
        return product.price >= 50 && product.price <= 100;
      } else if (filterState.price === "100+") {
        return product.price > 100;
      }
    });

    let sortedProducts = filteredProductsByPrice.sort((a, b) => {
      if (filterState.sort === "") {
        return 0;
      } else if (filterState.sort === "price-asc") {
        return a.price - b.price;
      } else if (filterState.sort === "price-desc") {
        return b.price - a.price;
      } else if (filterState.sort === "name-asc") {
        return a.name.localeCompare(b.name);
      } else if (filterState.sort === "name-desc") {
        return b.name.localeCompare(a.name);
      }
    });

    setFilteredProducts(sortedProducts);

  }
  
  const catList = categories.map((category) => category.id);
  const catNames = categories.map((category) => category.title);

  return (
    <main className="mt-10 px-8 bg-[#EEEEEE]">
    <div className="py-10 mx-auto">
      <h1 className="text-4xl font-bold text-center mb-8">Product Gallery</h1>
      <div className="flex flex-col lg:flex-row justify-center items-start">
            <Filters
              categories={catList}
              categoryNames={catNames}
              filterState={filterState}
              setFilterState={setFilterState}
            />
            <Products products={filteredProducts} categories={categories} setFilterState={setFilterState}/>
      </div>
    </div>
  </main>
  );
}

export default React.memo(Gallery);
