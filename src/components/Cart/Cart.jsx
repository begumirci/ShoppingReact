import { useContext } from 'react';
import './Cart.css';
import CartItem from './CartItem';
import { myData } from '../../App';

export default function Cart() {
  const { closeModal, deleteCart, cart, takeOrder } = useContext(myData);

  const totalPrice = cart.reduce(
    (total, product) => total + product.price * product.amount,
    0
  );

  return (
    <div className='modal'>
      <div className='modal-body'>
        {cart.length > 0 ? (
          <div>
            <div className='cart-header'>
              <h4>Sepetim</h4>
              <span onClick={closeModal}>X</span>
            </div>
            <CartItem />
            <div className='buttons'>
              <div>
                <span>Toplam Fiyat:</span> {totalPrice.toLocaleString('en')} ₺
              </div>
              <button className='add-basket' onClick={takeOrder}>
                Sipariş Ver
              </button>
              <button className='add-basket' onClick={deleteCart}>
                Temizle
              </button>
            </div>
          </div>
        ) : (
          <div className='empty-cart'>
            <h4>Sepetiniz Boş</h4>
            <span onClick={closeModal}>X</span>
          </div>
        )}
      </div>
    </div>
  );
}
