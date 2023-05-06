import React from 'react'
import ProductList from '../Components/ProductList'
import { products } from '../Data/Data'

const Products = () => {
    
  return (
    <div>
        <ProductList products={products} />
    </div>
  )
}

export default Products