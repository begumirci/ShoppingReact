import { useState, createContext } from 'react';
import './App.css';
import Header from './components/Header/Header';
import ProductItem from './components/Products/ProductItem';
import Cart from './components/Cart/Cart';

import { useEffect } from 'react';
import EditProduct from './components/Products/EditProduct';
import Category from './components/Category';
import Loading from './components/Loading';

export const myData = createContext(null);

function App() {
  // Local Storage'dan ürün listesini ve sepeti al
  const storedProductList = JSON.parse(localStorage.getItem('productList'));
  const storedCart = JSON.parse(localStorage.getItem('cart'));
  const [isOrder, setIsOrder] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isOpenEdit, setIsOpenEdit] = useState(false);
  const [search, setSearch] = useState('');
  const [openModal, setOpenModal] = useState(false);
  const [cart, setCart] = useState(storedCart || []);
  const [category, setCategory] = useState('Tümü');
  const [productList, setProductList] = useState(
    storedProductList || [
      {
        id: 1,
        img: 'https://picsum.photos/200',
        title: 'Iphone 15',
        category: 'Elektronik',
        price: Number(100000),
        amount: 1,
        stock: 5,
      },
      {
        id: 2,
        img: 'https://picsum.photos/200',
        title: 'Pantolon',
        category: 'Tekstil',
        price: Number(500),
        amount: 1,
        stock: 100,
      },
      {
        id: 3,
        img: 'https://picsum.photos/200',
        title: 'T-shirt',
        category: 'Tekstil',
        price: Number(300),
        amount: 1,
        stock: 50,
      },
      {
        id: 4,
        img: 'https://picsum.photos/200',
        title: 'Gömlek',
        category: 'Tekstil',
        price: Number(2000),
        amount: 1,
        stock: 20,
      },
      {
        id: 5,
        img: 'https://picsum.photos/200',
        title: 'Monster',
        category: 'Elektronik',
        price: Number(20000),
        amount: 1,
        stock: 15,
      },
      {
        id: 6,
        img: 'https://picsum.photos/200',
        title: 'Kulaklık',
        category: 'Elektronik',
        price: Number(3500),
        amount: 1,
        stock: 2,
      },
      {
        id: 7,
        img: 'https://picsum.photos/200',
        title: 'Top',
        category: 'Spor',
        price: Number(50),
        amount: 1,
        stock: 150,
      },
      {
        id: 8,
        img: 'https://picsum.photos/200',
        title: 'Mouse',
        category: 'Elektronik',
        price: Number(500),
        amount: 1,
        stock: 10,
      },
      {
        id: 9,
        img: 'https://picsum.photos/200',
        title: 'Forma',
        category: 'Spor',
        price: Number(1000),
        amount: 1,
        stock: 35,
      },
      {
        id: 10,
        img: 'https://picsum.photos/200',
        title: 'Ayakkabı',
        category: 'Tekstil',
        price: Number(1000),
        stock: 10,
        amount: 1,
      },
      {
        id: 11,
        img: 'https://picsum.photos/200',
        title: 'HP',
        category: 'Elektronik',
        price: Number(50000),
        amount: 1,
        stock: 5,
      },
      {
        id: 12,
        img: 'https://picsum.photos/200',
        title: 'Çanta',
        category: 'Tekstil',
        price: Number(550),
        amount: 1,
        stock: 3,
      },
    ]
  );
  //Sipariş Verme
  function takeOrder() {
    if (!isOrder) {
      setIsLoading(true);
      setTimeout(() => {
        alert('Siparişiniz Başarıyla Oluşturulmuştur');
        setCart([]);
        setIsOrder(false);
        setIsLoading(false);
      }, 2000);
    }
  }
  //Edit Sayfasının Açılmasını Sağlar
  function handleEdit() {
    if (isOpenEdit == false) {
      setIsOpenEdit(true);
    }

    if (isOpenEdit == true) {
      setIsOpenEdit(false);
    }
  }
  // Her sepet güncellemesinde ve ürün listesi değiştiğinde local storage'a verileri kaydet
  useEffect(() => {
    localStorage.setItem('productList', JSON.stringify(productList));
  }, [productList]);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);
  //Kategori
  const handleCategoryClick = (selectedCategory) => {
    setCategory(selectedCategory);
    console.log(selectedCategory);
  };
  function filterProducts() {
    let filteredList = productList;

    if (category !== 'Tümü') {
      filteredList = productList.filter(
        (product) => product.category === category
      );
    }

    if (search) {
      filteredList = filteredList.filter((product) =>
        product.title
          .toLocaleLowerCase('tr')
          .includes(search.toLocaleLowerCase('tr'))
      );
    }

    return filteredList;
  }
  const filteredProductList = filterProducts();

  function addBasket(product) {
    if (cart.find((x) => x.id === product.id)) {
      const haveIndex = cart.findIndex((x) => x.id === product.id);
      cart[haveIndex].amount += 1;
      setCart([...cart]);
    } else {
      setCart([...cart, product]);
    }
  }

  const Modal = () => {
    if (openModal === false) {
      return setOpenModal(true);
    }
  };

  const closeModal = () => {
    if (openModal == true) {
      return setOpenModal(false);
    }
  };

  const deleteItem = (product) => {
    if (cart.find((x) => x.id === product.id)) {
      const haveIndex = cart.findIndex((x) => x.id === product.id);
      if (cart[haveIndex].amount !== 1) {
        cart[haveIndex].amount -= 1;
        setCart([...cart]);
      } else {
        cart.splice(haveIndex, 1);
        setCart([...cart]);
      }
    }
  };

  const deleteCart = () => {
    setCart([]);
  };

  const outCart = (product) => {
    const haveIndex = cart.findIndex((x) => x.id === product.id);
    cart.splice(haveIndex, 1);
    setCart([...cart]);
  };

  const value = {
    cart,
    setCart,
    addBasket,
    Modal,
    closeModal,
    deleteItem,
    deleteCart,
    outCart,
    productList,
    setProductList,
    search,
    setSearch,
    filteredProductList,

    handleEdit,
    handleCategoryClick,
    category,
    isOpenEdit,
    isOrder,
    takeOrder,
  };

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div className='container'>
          <myData.Provider value={value}>
            <Header />
            {isOpenEdit ? (
              <EditProduct />
            ) : (
              <>
                {openModal ? <Cart /> : ''}

                <Category />
                <ProductItem />
              </>
            )}
          </myData.Provider>
        </div>
      )}
    </>
  );
}

export default App;
