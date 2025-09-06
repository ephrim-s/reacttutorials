
const ProductInfo = () => {

    const products = [
      {id: 1, name: "Phone", price: 699, availablity: 'In Stock'},
      {id: 2, name: "Laptop", price: 999, availablity: 'In Stock'},
      {id: 3, name: "Tablet", price: 499, availablity: 'In Stock'},
      {id: 4, name: "Smartwatch", price: 199, availablity: 'Out of Stock'},
      {id: 5, name: "Headphones", price: 149, availablity: 'In Stock'},  
  ];

  return (
    <div>
      {products.map(({id, name, price, availablity}) => (
        <div key={id} style={{marginBottom: '20px', padding: '10px', border: '3px solid #8a4242ff'}}>
            <h3>{name}</h3>
            <p><strong>Price:</strong> ${price}</p>
            <p><strong>Availability:</strong> {availablity}</p>
        </div>
      )) };
      
    </div>
  )
}

export default ProductInfo;
