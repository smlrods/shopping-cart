import { useState } from "react";
import { useParams } from "react-router-dom";

function Product({ products, cart, setCart }) {
  const { id } = useParams();
  const [amount, setAmount ] = useState(1);
  const product = products.find(product => product.id === id);

  const addProduct = (product) => {
    let newCart = [...cart];
    const found = newCart.find((element) => element.name === product.name);
    if(found) {
      found.amount = found.amount + amount;
    } else {
      newCart = [...newCart, {...product, amount: amount}];
    }
    setCart(newCart);
  };

  return (
    <div>
      <h1>{`Name: ${product.name}`}</h1>
      <img src={product.image}/>
      <h2>{`price: ${product.price}`}</h2>
      <button onClick={() => {
        if (amount == 1) return;
        setAmount(amount - 1);
      }}>-</button>
      <input type="number" min='1' max='99' value={amount} onChange={(e) => {
        if (e.target.value > 99 || e.target.value < 1) {
          e.target.value = 1;
          return;
        }
        setAmount(+e.target.value)}
      }
    />
      <button onClick={() => {
        if (amount === 99) return;
        setAmount(amount + 1);
      }}>+</button>
      <button onClick={() => addProduct(product)}>Buy</button>
    </div>
  );
} 

export default Product;
