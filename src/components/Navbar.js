import { NavLink } from "react-router-dom";
import '../assets/styles/Navbar.css';

function Navbar({ cart }) {
  const getTotalAmount = (cart) => {
    if (!cart.length) return 0;
    return cart.reduce((accumulator, product) => accumulator + +product.amount, 0);
  }
  
  return (
    <div id='navbar'>
      <h1>Navbar</h1>
      <div>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/shop">Shop</NavLink>
        <NavLink to="/cart">{`Cart (${getTotalAmount(cart)})`}</NavLink>
      </div>
    </div>
  )
}

export default Navbar;
