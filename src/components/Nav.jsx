import { useContext } from 'react';
import CartContext from '../context/cart/CartContext';
import './Nav.css';

export default function Nav() {
  const { cartItem } = useContext(CartContext);
  return (
    <nav>
      <div className="nav__left">Shopping Cart With Context API</div>
      <div className="nav__middle">
        <div className="input__wrapper">
          <input type="text" />
          <i className="fas fa-search" />
        </div>
      </div>
      <div className="nav__right">
        <div className="cart__icon">
          <i className="fa fa-shopping-cart" aria-hidden="true" />
          {cartItem.length > 0 && (
            <div className="item__count">
              <span>{cartItem.length}</span>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
