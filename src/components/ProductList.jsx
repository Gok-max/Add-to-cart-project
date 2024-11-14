import React, { useEffect, useState } from 'react';

function ProductList({ cartItem, setCartItem }) {
  const [isProduct, setIsProduct] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => setIsProduct(data));
  }, []);

 const addToCart = (product) => {
  const existingItem = cartItem.find((item) => item.id === product.id);
  if (existingItem) {
    alert(`Product already in cart.If you want to increase the quantity of this product go to the cart`);
  } else {
    setCartItem([...cartItem, { ...product, quantity: 1 }]);
  }
};


  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-4">
      {isProduct.map((product) => (
        <div key={product.id} className="flex flex-col border border-gray-300 rounded-lg shadow-lg bg-white p-4">
          <img src={product.image} alt={product.title} className="h-40 mx-auto mb-4" />
          <h2 className="text-lg font-semibold text-gray-700">{product.title}</h2>
          <p className="text-lg text-black-500 font-bold">${product.price}</p>
          <div className="flex-grow"></div>
          <button
            onClick={() => addToCart(product)}
            className="bg-custom-blue text-white w-full py-2 mt-2 rounded-full hover:bg-blue-600"
          > Add to Cart </button>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
