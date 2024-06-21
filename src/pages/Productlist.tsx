import React, { useState, useEffect } from 'react';
import SearchBar from '../components/SearchBar';
import Cart from '../components/Cart';
import { fetchShopifyProducts } from '../components/Shopify';
import { Product } from '../components/Types';

const Store: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [cart, setCart] = useState<Product[]>([]);

  useEffect(() => {
    const loadProducts = async () => {
      const fetchedProducts = await fetchShopifyProducts();
      setProducts(fetchedProducts);
    };

    loadProducts();
  }, []);

  const filteredProducts = products.filter(product => 
    product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const addToCart = (product: Product) => {
    setCart([...cart, product]);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">Our Products</h2>
        <SearchBar onSearch={setSearchQuery} />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <div key={product.id} className="bg-white rounded-lg shadow-lg p-6">
                <img src={product.image} alt={product.title} className="w-full h-48 object-cover mb-4 rounded-lg"/>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{product.title}</h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xl font-bold text-gray-800">${parseFloat(product.price).toFixed(2)}</span>
                </div>
                <button
                  onClick={() => addToCart(product)}
                  className="bg-emerald hover:bg-dark-emerald text-white font-bold py-2 px-4 rounded transition duration-300 w-full"
                >
                  Add to Cart
                </button>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-600">No products available.</p>
          )}
        </div>
        <Cart cart={cart} />
      </div>
    </div>
  );
};

export default Store;
