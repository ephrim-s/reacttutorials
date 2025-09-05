import React from 'react';

const ProductInfo = () => {

    const product = {
        name: 'Laptop',
        price: 1200,
        availablity: "In Stock",
    };

  return (
    <div>
      <h1>Name: {product.name}</h1>
      <h3>Price: ${product.price}</h3>
      <h3>availablity: {product.availablity}</h3>
    </div>
  )
}

export default ProductInfo;
