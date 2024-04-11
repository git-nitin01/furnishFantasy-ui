import React from 'react'
import Gallery from './components/Gallery'
import { useParams } from 'react-router-dom'

function ProductPage({products, categories}) {
  // Get the category from the URL
  let { category } = useParams();

  return (
    <>
        <Gallery categories={categories} products={products} defaultCat={category}/>
    </>
  )
}

export default ProductPage