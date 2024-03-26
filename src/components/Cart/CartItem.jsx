import { myData } from '../../App';
import './Cart.css';

import { useContext } from 'react';

export default function CartItem() {
  const { cart, addBasket, deleteItem, outCart } = useContext(myData);

  return (
    <ul className='cart-items'>
      {cart.map((product) => (
        <li className='cart-item' key={product.id}>
          <img className='cart-img' src={product.img} alt='' />
          <div className='cart-info'>
            <span>{product.title}</span>
            <span>
              {(product.price * product.amount).toLocaleString('en')} ₺
            </span>
            <div className='remove-cart' onClick={() => outCart(product)}>
              Sepetten Çıkart
            </div>
          </div>
          <div className='count-cart'>
            <span className='decrease' onClick={() => deleteItem(product)}>
              -
            </span>
            <span className='amount'>{product.amount}</span>

            <span className='increase' onClick={() => addBasket(product)}>
              +
            </span>
          </div>
        </li>
      ))}
    </ul>
  );
}
