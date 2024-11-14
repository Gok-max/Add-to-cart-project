import React from 'react';

function CartModel({ closeCart, cartItem, removeFromCart, updateCartItemQuantity }) {
  const totalPrice = cartItem.reduce((acc, item) =>  item.price * item.quantity, 0);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg w-96 shadow-xl max-h-[80vh] overflow-y-auto">
        <h2 className="text-xl font-bold text-custom-blue mb-4">Your Cart</h2>
        {cartItem.length > 0 ? (
          <div className="space-y-4">
            {cartItem.map((item) => (
              <div key={item.id} className="flex items-center border-b pb-4">
                <img src={item.image} alt={item.title} className="w-16 h-16 object-contain mr-4" />
                <div className="flex-1">
                  <div className="text-gray-700 font-semibold">{item.title}</div>
                  <p className="text-sm text-black-400">${item.price.toFixed(2)}</p>
                  <div className="mt-2 flex items-center">
                    <button
                      onClick={() => updateCartItemQuantity(item.id, Math.max(1, item.quantity - 1))}
                      className="px-2 py-2 bg-custom-blue rounded hover:bg-blue-500 focus:outline-none text-white"
                    > - </button>
                    <span className="px-4 text-lg">{item.quantity}</span>
                    <button
                      onClick={() => updateCartItemQuantity(item.id, item.quantity + 1)}
                      className="px-2 py-2 bg-custom-blue rounded hover:bg-blue-500 focus:outline-none text-white"
                    > + </button>
                  </div>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-500 hover:underline ml-4"
                > Remove </button>
              </div>
            ))}
            <div className="border-t mt-4 pt-4">
              <p className="text-lg font-bold text-gray-800">
                Total : ${totalPrice.toFixed(2)}
              </p>
            </div>
          </div>
        ) : (
          <p className="text-gray-600">Your cart is empty</p>
        )}
        <button
          onClick={closeCart}
          className="mt-4 bg-custom-blue text-white w-full py-2 rounded-full hover:bg-blue-600"
        > Close </button>
      </div>
    </div>
  );
}

export default CartModel;
