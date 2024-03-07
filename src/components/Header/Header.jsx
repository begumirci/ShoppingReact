import { useContext } from 'react';
import './Header.css';
import basket from './icons8-bag-32.png';
import { myData } from '../../App';

export default function Header() {
  const { search, setSearch, cart, Modal } = useContext(myData);
  const count = cart.reduce((total, product) => total + product.amount, 0);

  return (
    <>
      <div className='header-container'>
        <div className='headers'>
          <h1>Trend Store</h1>
          <div className='basket-search'>
            <input
              className='search-input'
              type='text'
              placeholder='Search'
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
              }}
            />
            <div className='basket'>
              <div className='basket-count'>
                <img
                  onClick={Modal}
                  className='basket-img'
                  src={basket}
                  alt=''
                />
                {cart.length > 0 ? <span className='count'>{count}</span> : ''}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
