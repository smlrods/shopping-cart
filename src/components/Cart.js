import CartItem from "./CartItem";

function Cart({ cart, setCart }) {
  const total = cart.reduce(
    (accumulator, currentValue) => accumulator + (+currentValue.price * currentValue.amount) ,
    0
  );

  return (
    <div>
      <h1>Cart</h1>
      {cart.map((product) => {
        return (
          <div key={product.id}>
            <CartItem product={product} cart={cart} setCart={setCart}/>
            <button onClick={() => {
              setCart(
                cart.filter((p) => 
                  p.id !== product.id
                )
              )
            }}>Remove</button>
          </div>
        )
      })}
      <p>{`Total: $ ${total}.0`}</p>
      <button>Checkout</button>
    </div>
  )
}

export default Cart;
