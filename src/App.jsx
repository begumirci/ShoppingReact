import { useState, createContext } from 'react';
import './App.css';
import Header from './components/Header/Header';
import ProductItem from './components/Products/ProductItem';
import Cart from './components/Cart/Cart';
import ProductList from './components/Products/ProductList';

export const myData = createContext(null);

function App() {
  const [search, setSearch] = useState('');
  const [openModal, setOpenModal] = useState(false);
  const [cart, setCart] = useState([]);
  const [category, setCategory] = useState('Tümü');
  const [productList, setProductList] = useState([
    {
      id: 1,
      img: 'https://picsum.photos/200',
      title: 'Iphone 15',
      category: 'Elektronik',
      price: 100000,
      amount: 1,
      stock: 5,
    },
    {
      id: 2,
      img: 'https://picsum.photos/200',
      title: 'Pantolon',
      category: 'Tekstil',
      price: 500,
      amount: 1,
      stock: 100,
    },
    {
      id: 3,
      img: 'https://picsum.photos/200',
      title: 'T-shirt',
      category: 'Tekstil',
      price: 300,
      amount: 1,
      stock: 50,
    },
    {
      id: 4,
      img: 'https://picsum.photos/200',
      title: 'Gömlek',
      category: 'Tekstil',
      price: 2000,
      amount: 1,
      stock: 20,
    },
    {
      id: 5,
      img: 'https://picsum.photos/200',
      title: 'Monster',
      category: 'Elektronik',
      price: 20000,
      amount: 1,
      stock: 15,
    },
    {
      id: 6,
      img: 'https://picsum.photos/200',
      title: 'Kulaklık',
      category: 'Elektronik',
      price: 3500,
      amount: 1,
      stock: 2,
    },
    {
      id: 7,
      img: 'https://picsum.photos/200',
      title: 'Top',
      category: 'Spor',
      price: 50,
      amount: 1,
      stock: 150,
    },
    {
      id: 8,
      img: 'https://picsum.photos/200',
      title: 'Mouse',
      category: 'Elektronik',
      price: 500,
      amount: 1,
      stock: 10,
    },
    {
      id: 9,
      img: 'https://picsum.photos/200',
      title: 'Forma',
      category: 'Spor',
      price: 1000,
      amount: 1,
      stock: 35,
    },
    {
      id: 10,
      img: 'https://picsum.photos/200',
      title: 'Ayakkabı',
      category: 'Tekstil',
      price: 1000,
      stock: 10,
      amount: 1,
    },
    {
      id: 11,
      img: 'https://picsum.photos/200',
      title: 'HP',
      category: 'Elektronik',
      price: 50000,
      amount: 1,
      stock: 5,
    },
    {
      id: 12,
      img: 'https://picsum.photos/200',
      title: 'Çanta',
      category: 'Tekstil',
      price: 550,
      amount: 1,
      stock: 3,
    },
  ]);
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

  // if (category == 'Tümü') {
  //   filterProductList = productList;
  // } else {
  //   filterProductList = productList.filter(
  //     (product) => product.category === category
  //   );
  //   setProductList(filterProductList);
  // }
  // if (search) {
  //   filterProductList = productList.filter((product) =>
  //     product.title
  //       .toLocaleLowerCase('tr')
  //       .includes(search.toLocaleLowerCase('tr'))
  //   );
  // } else {
  //   filterProductList = productList;
  // }
  // console.log(filterProductList);

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
    ProductList,
    search,
    setSearch,
    filteredProductList,
  };

  return (
    <>
      <div className='container'>
        <myData.Provider value={value}>
          {openModal ? <Cart /> : ''}
          <Header />
          <div id='category-list'>
            <a href='#' onClick={() => handleCategoryClick('Tümü')}>
              Tümü
            </a>
            <a href='#' onClick={() => handleCategoryClick('Elektronik')}>
              Elektronik
            </a>
            <a href='#' onClick={() => handleCategoryClick('Tekstil')}>
              Tekstil
            </a>
            <a href='#' onClick={() => handleCategoryClick('Spor')}>
              Spor
            </a>
          </div>
          <ProductItem />
        </myData.Provider>
      </div>
    </>
  );
}

export default App;
