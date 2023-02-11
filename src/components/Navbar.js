import { NavLink } from "react-router-dom";

function Navbar({ cart }) {
  const getTotalAmount = (cart) => {
    if (!cart.length) return 0;
    return cart.reduce((accumulator, product) => accumulator + +product.amount, 0);
  }
  
  return (
    <div>
      <h1>Navbar</h1>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/shop">Shop</NavLink>
      <NavLink to="/cart">{`Cart (${getTotalAmount(cart)})`}</NavLink>
    </div>
  )
}

export default Navbar;
