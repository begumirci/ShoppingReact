import { useState, createContext } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import ProductItem from './components/Products/ProductItem'
import Cart from './components/Cart/Cart'


export const myData = createContext(null);


function App() {

  const [openModal, setOpenModal] = useState(false);
  const [cart, setCart] = useState([]);

  function addBasket(product) {

    if (cart.find(x => x.id === product.id)) {
      const haveIndex = cart.findIndex(x => x.id === product.id);
      cart[haveIndex].amount +=1;
      setCart([...cart]);
    }else{
      setCart([...cart, product]);
    }
  }

  const Modal = () =>{
    if(openModal === false){
      return setOpenModal(true);
  }}

  const closeModal = () =>{
    if(openModal == true){
      return setOpenModal(false);
    }
  }

  const deleteItem = (product) =>{

    if(cart.find(x => x.id === product.id)){
      const haveIndex = cart.findIndex(x => x.id === product.id);
      if(cart[haveIndex].amount !== 1){
        cart[haveIndex].amount -= 1;
        setCart([...cart]);
      }else{
        cart.splice(haveIndex,1);
        setCart([...cart]);
      }
      
    }
  }
  
  const deleteCart = () =>{
    setCart([]);
  }
  
  const outCart = (product) =>{
    const haveIndex = cart.findIndex(x => x.id === product.id);
    cart.splice(haveIndex,1);
    setCart([...cart]);
    
  }
  
  const value = {
    cart, setCart, addBasket, Modal, closeModal, deleteItem, deleteCart,outCart
  }

  

  return (
    <>
    <div>
    <myData.Provider value={value}>
      {openModal ? <Cart/> : ''}
      <Header />
      <Hero />
      <ProductItem />
    </myData.Provider>
    </div>
    </>
  )
}

export default App
