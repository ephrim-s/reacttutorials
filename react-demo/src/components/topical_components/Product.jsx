import React from 'react';

const Product = ({props}) => {
  return (
    <div>
   {props.map((product) => (
    <div key={product.id} style={{border: '2px solid purple', padding: '20px', margin: '30px'}}>
        <h1>Product Name: {product.name}</h1>
        <p><strong>Product Price: {product.price}</strong></p>
    </div>
   ))}
    </div>
  )
}

export default Product;
