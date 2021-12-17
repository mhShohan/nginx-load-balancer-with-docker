import { StrictMode } from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import CartState from './context/cart/CartState';

const rootElement = document.getElementById('root');
ReactDOM.render(
  <StrictMode>
    <CartState>
      <App />
    </CartState>
  </StrictMode>,
  rootElement
);
