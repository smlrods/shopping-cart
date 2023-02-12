function ShopProduct({ product }) {
  return (
    <div>
      <h2>{product.name}</h2>
      <img src={product.image}/>
      <p>${product.price}</p>
    </div>
  )
}

export default ShopProduct;
