import React from 'react'
import { Button, Card } from 'react-bootstrap'

const ProductCard = ({product}) => {
  return (
    <div>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>{product.brand}</Card.Title>
        <Card.Text>{product.model}</Card.Text>
        <Button variant="primary" onClick={()=> alert(`The prrice is : ${product.price}`)}>Go somewhere</Button>
      </Card.Body>
    </Card>
    </div>
  )
}

export default ProductCard