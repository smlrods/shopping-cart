import { Link } from "react-router-dom";
import ShopProduct from "./ShopProduct";
import '../assets/styles/Shop.css';

function Shop({products}) {
  return (
    <div className="Shop">
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
