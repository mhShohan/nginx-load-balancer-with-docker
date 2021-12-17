import './ProductCard.css';
import { useContext } from 'react';
import formatCurrency from 'format-currency';
import Rating from './Rating';
import CartContext from '../context/cart/CartContext';

export default function ProductCard({
  _id,
  image,
  name,
  price,
  rating,
  numReviews
}) {
  let options = { format: '%s%v', symbol: '€' };
  const { addToCart } = useContext(CartContext);
  return (
    <div className="productCard__wrapper">
      <div>
        <img className="productCard__img" src={image} alt={name} />
        <h4>{name}</h4>
        <div className="ProductCard__price">
          <h5>{formatCurrency(`${price}`, options)}</h5>
        </div>
        <div className="ProductCard__Rateing">
          <Rating value={rating} text={`${numReviews} Reviews`} />
        </div>
        <button
          className="ProductCard__button"
          onClick={() =>
            addToCart({ _id, image, name, price, rating, numReviews })
          }>
          Add to cart
        </button>
      </div>
    </div>
  );
}
