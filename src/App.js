import { useState } from 'react';
import allProducts from './data/allProducts';
import RouteSwitch from './RouteSwitch';
import './assets/styles/App.css';
function App() {
  const [cart, setCart] = useState([]);
  return (
    <div className='App'>
      <RouteSwitch products={allProducts} cart={cart} setCart={setCart}/>
    </div>
  )
}

export default App;
