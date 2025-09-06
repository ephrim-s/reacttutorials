
const Cart = () => {
    const items = ["Frank", "🛒", "Wireless Earbuds", "Smart Home Hub", "Fitness Tracker", "4K Action Camera"];
  return (
    <div>
      <h1>Shopping Cart 🛒</h1>
      {items.length > 0 && <h2>You have {items.length} items in your Cart</h2>}
      <ul>
        <h4>Products</h4>
        {items.map((item) => (
          <li key={Math.random()}>{item}</li>
        ))}
      </ul>      
    </div>
  )
}

export default Cart;
