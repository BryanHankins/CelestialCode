import React from 'react';
import { Product } from './Types';

interface CartProps {
  cart: Product[];
}

const Cart: React.FC<CartProps> = ({ cart }) => {
  const totalPrice = cart.reduce((total, product) => total + parseFloat(product.price), 0);

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Cart</h2>
      {cart.length === 0 ? (
        <p className="text-gray-600">Your cart is empty.</p>
      ) : (
        <div>
          <ul>
            {cart.map((product) => (
              <li key={product.id} className="mb-4 flex justify-between items-center">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">{product.title}</h3>
                  <p className="text-gray-600">${parseFloat(product.price).toFixed(2)}</p>
                </div>
              </li>
            ))}
          </ul>
          <div className="mt-4">
            <h3 className="text-lg font-semibold text-gray-800">Total: ${totalPrice.toFixed(2)}</h3>
            <button className="bg-emerald hover:bg-dark-emerald text-white font-bold py-2 px-4 rounded transition duration-300 mt-4">
              Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
