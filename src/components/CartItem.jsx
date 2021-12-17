import { useContext } from 'react';
import CartContext from '../context/cart/CartContext';
import './CartItem.css';

export default function CartItem({ item }) {
  const { removeItem } = useContext(CartContext);
  return <div></div>;
}
