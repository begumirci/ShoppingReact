import { useContext } from 'react';
import './Product.css';

import { myData } from '../../App';

export default function ProductItem() {
  const { filteredProductList, addBasket, Modal } = useContext(myData);

  function handleClick(product) {
    addBasket(product);
    Modal();
  }
  console.log(filteredProductList);
  return (
    <div className='products '>
      {filteredProductList.map((product) => (
        <div className='product' key={product.id}>
          <img className='product-img' src={product.img} alt='' />
          <div className='product-item'>
            <h4>Ürün Adı: {product.title}</h4>
            <h4>Kategori: {product.category}</h4>
            <h4>Fiyat: {product.price.toLocaleString('en')} ₺</h4>
            <button className='add-basket' onClick={() => handleClick(product)}>
              Sepete Ekle
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
