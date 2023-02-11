import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from "./components/Cart";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Shop from "./components/Shop";
import Product from "./components/Product";

function RouteSwitch({ products, cart, setCart }) {
  return (
    <BrowserRouter>
      <Navbar cart={cart}/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop products={products}/>} />
        <Route path="/shop/:id" element={<Product products={products} cart={cart} setCart={setCart}/>} />
        <Route path="/cart" element={<Cart cart={cart} setCart={setCart}/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default RouteSwitch;
