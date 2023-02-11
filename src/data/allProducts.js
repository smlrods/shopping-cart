import shirtImg from '../assets/images/shirt.jpg';
function Product(name, price, image=null) {
  return {
    name,
    id: `${name}-${price}`,
    price: price,
    image: shirtImg,
  }
}
const allProducts = [
  Product('Shirt 1', 11),
  Product('Shirt 2', 22),
  Product('Shirt 3', 33),
  Product('Shirt 4', 11),
  Product('Shirt 5', 22),
  Product('Shirt 6', 33),
  Product('Shirt 7', 11),
  Product('Shirt 8', 22),
  Product('Shirt 9', 33),
  Product('Shirt 10', 33),
]
  
export default allProducts;
