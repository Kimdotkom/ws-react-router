import React from 'react'
import ProductCard from './ProductCard'

const ProductList = ({products}) => {
  return (
    <div style={{display: 'flex', justifyContent: 'space-around'}}>
        {
            products.map((product) => (
                <ProductCard product={product} key={product.id} />
            ))
        }
    </div>
  )
}

export default ProductList