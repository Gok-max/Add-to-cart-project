import React from 'react'
import ecommerceImage from '../assets/e-commerce-png-ecommerce-510.png';

function Navbar({openCart, cartCount}) {
  return (
    <nav className='p-4 bg-gray-100 text-white flex justify-between items-center '>
    <img src={ecommerceImage} className='h-16'/>

      <h1 className='text-2xl font-bold text-custom-blue'>Great Indian Store</h1>
      <button onClick={openCart} className='bg-custom-blue text-white px-4 py-2 rounded-lg hover:bg-blue-600'> 
      Cart : {cartCount} </button>
    </nav>
  )
}

export default Navbar