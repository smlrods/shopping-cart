import { Link } from "react-router-dom";
import ShopProduct from "./ShopProduct";


function Shop({products}) {
  return (
    <div className="Shop">
      <h1>Shop</h1>
      {products.map((product) => {
        return (
            <Link to={`${product.id}`} key={product.id}>
              <ShopProduct product={product} />
            </Link>
        );
      })}
    </div>
  );
}

export default Shop;
