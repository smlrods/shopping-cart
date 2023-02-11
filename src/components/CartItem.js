import { useEffect, useState } from 'react';

function CartItem({ product, cart, setCart }) {
  const [amount, setAmount] = useState(product.amount);

  const handleChange = (e) => {
    if (e.target.value > 99 || e.target.value <= 0)
      e.target.value = product.amount;
    setAmount(+e.target.value);
  }

  useEffect(() => {
    const newCart = cart.map((p) => {
      if (p === product) {
        return {...p, amount: amount}
      }
      return p;
    });
    setCart(newCart);
  }, [amount]);

  return ( 
    < >
      <h2>{product.name}</h2>
      <img src={product.image}/>
      <p>$ {product.price}</p>
      <button onClick={() => {
        if (amount === 1) return;
        setAmount(amount - 1);
      }}>-</button>
      <input type='number' min='1' max='99' value={amount} onChange={(e) => handleChange(e)} />
      <button onClick={() => {
        if (amount === 99) return;
        setAmount(amount + 1);
      }}>+</button>
    </ >
  );
}

export default CartItem;
