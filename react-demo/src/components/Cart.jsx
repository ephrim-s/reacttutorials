
const Cart = () => {
    const items = ["Wireless Earbuds", "Smart Home Hub", "Fitness Tracker", "4K Action Camera"];
  return (
    <>
      <h1>Shopping Cart</h1>
      {items.lenght > 0 && <h2>You have {items.length} in your Cart</h2>}
      <ul>
        <h4>Products</h4>
        {items.map((item) => (
          <li key={Math.random()}>{item}</li>
        ))}
      </ul>      
    </>
  )
}

export default Cart;
