const products = [
    { id: 1, name: 'Product 1', price: '$10' },
    { id: 2, name: 'Product 2', price: '$20' },
  ];
  
  const Store: React.FC = () => {
    return (
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">E-commerce Store</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {products.map((product) => (
            <div key={product.id} className="border p-4">
              <h2 className="text-xl font-semibold">{product.name}</h2>
              <p>{product.price}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };
  