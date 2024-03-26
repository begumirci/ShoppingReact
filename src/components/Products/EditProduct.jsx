import { useContext } from 'react';
import { useState } from 'react';
import { myData } from '../../App';

export default function EditProduct() {
  const { productList, setProductList } = useContext(myData);
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [cost, setCost] = useState('');
  const [stock, setStock] = useState('');
  const [img, setImg] = useState('');

  function addProduct() {
    const newProduct = {
      id: ProductId(),
      img: img,
      title: title,
      category: category,
      price: Number(cost),
      stock: stock,
    };

    const alreadyHave = productList.find((product) => product.title == title);
    console.log(alreadyHave);
    if (alreadyHave == undefined) {
      if (title !== '' && cost !== '' && category !== '') {
        setProductList([...productList, newProduct]);
        alert('Ürün başarıyla eklendi');
      } else {
        alert('Lütfen bilgileri doğru giriniz');
      }
    } else {
      alert('Bu ürün zaten mevcut!');
    }

    setTitle('');
    setCategory('');
    setCost('');
    setStock('');
    setImg('');
  }

  let lastProductId = 12;
  if (localStorage.lastProductId) {
    lastProductId = Number(localStorage.lastProductId);
  }

  function ProductId() {
    lastProductId++;
    localStorage.lastProductId = lastProductId;
    return lastProductId;
  }

  function handleChange(e) {
    setCategory(e.target.value);
  }

  return (
    <div>
      <h1 className='urunler-header'>Ürün Ekle</h1>
      <div className='inputs'>
        <input
          type='text'
          placeholder='Ürün adını girin'
          required
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <input
          type='number'
          placeholder='Ürün fiyatını girin'
          required
          value={cost}
          onChange={(e) => {
            setCost(e.target.value);
          }}
        />
        <input
          type='number'
          placeholder='Stok girin'
          required
          value={stock}
          onChange={(e) => {
            setStock(e.target.value);
          }}
        />
        <input
          type='text'
          placeholder='Resim adresi girin'
          required
          value={img}
          onChange={(e) => {
            setImg(e.target.value);
          }}
        />
        <div className='category-option'>
          <select
            className='category-kismi'
            value={category}
            onChange={handleChange}
          >
            <option value='Tümü'>Tümü</option>
            <option value='Elektrik'>Elektrik</option>
            <option value='Tekstil'>Tekstil</option>
            <option value='Spor'>Spor</option>
          </select>
        </div>
        <button className='add-basket' onClick={addProduct}>
          Ürün Ekleyin
        </button>
      </div>
    </div>
  );
}
