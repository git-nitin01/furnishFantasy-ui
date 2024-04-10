import React from 'react'
import Gallery from './components/Gallery'

function ProductPage({products}) {
  return (
    <>
        <Gallery products={products}/>
    </>
  )
}

export default ProductPage