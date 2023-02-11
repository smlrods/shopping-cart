function ShopProduct({ product }) {
  return (
    <div>
      <h2>{product.name}</h2>
      <img src={product.image}/>
    </div>
  )
}

export default ShopProduct;
