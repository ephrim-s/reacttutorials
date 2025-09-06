import React from 'react';

const Product = ({props}) => {
  return (
    <div>
   {props.map(({id, name, price}) => (
    <div key={id} style={{border: '2px solid purple', padding: '20px', margin: '30px'}}>
        <h1>Product Name: {name}</h1>
        <p><strong>Product Price: ${price}</strong></p>
    </div>
   ))}
    </div>
  )
}

export default Product;
