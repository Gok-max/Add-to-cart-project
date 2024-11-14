import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import ProductList from './components/ProductList'
import CartModel from './components/CartModel'

function App() {
  const [cartItem, setCartItem] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
 
  const openCart = () => {
    setIsCartOpen(true);
  };

  const closeCart = () => {
    setIsCartOpen(false);
  };

  const removeFromCart = (productId) => {
    setCartItem(cartItem.filter((item) => item.id !== productId));
  };

  const updateCartItemQuantity = (id, newQuantity) => {
  setCartItem((prevCart) =>
    prevCart.map((item) =>
      item.id === id ? { ...item, quantity: newQuantity } : item
    )
  );
};

  return (
    <div className='bg-gray-200 min-h-screen'>
      <Navbar openCart={openCart} cartCount={cartItem.length}/>
      <ProductList cartItem={cartItem} setCartItem={setCartItem}/>
      {
        isCartOpen && (
          <CartModel cartItem={cartItem} closeCart={closeCart} removeFromCart={removeFromCart} updateCartItemQuantity = {updateCartItemQuantity}/>
        )
      }
    </div>
  )
}

export default App
