import { useState, useEffect } from 'react';

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const res = await fetch('https://dummyjson.com/products?limit=12');
        
        const data = await res.json();

        console.log(" API response:", data);


        setProducts(data.products);

        
        console.log("Products array:", data.products);


      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">

      {/*  HEADER  */}
      <header className="bg-gray-800 text-white py-5 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <h1 className="text-2xl md:text-3xl font-bold">
            Product Store
          </h1>
          
          <nav className="flex gap-6 md:gap-10 text-base md:text-lg">
            <a href="#" className="hover:text-indigo-200 transition-colors">Home</a>
            <a href="#" className="hover:text-indigo-200 transition-colors">Categories</a>
            <a href="#" className="hover:text-indigo-200 transition-colors">Card</a>
          </nav>
        </div>
      </header>

      {/* MAIN CONTENT  */}
      <main className="flex-grow py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Products Dummy data
          </h2>
        </div>

        {loading ? (
          <div className="text-center text-xl text-gray-600">
            Loading products...
          </div>
        ) : error ? (
          <div className="text-center text-red-600 text-xl">
            Error: {error}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={product.thumbnail}
                    alt={product.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.src = 'https://via.placeholder.com/300x200?text=Image+Not+Found';
                    }}
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
                    {product.title}
                  </h3>

                  <p className="text-sm text-gray-600 mb-3 line-clamp-3">
                    {product.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <span className="text-xl font-bold text-indigo-600">
                      ${product.price}
                    </span>
                    <span className="text-sm text-gray-500">
                      {product.brand || 'No brand'}
                    </span>
                  </div>

                </div>
              </div>
            ))}
          </div>
        )}
      </main>

      {/* footer */}
      <footer className="bg-gray-800 text-gray-300 py-6 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm">
             {new Date().getFullYear()} Product Store • All rights reserved
          </p>
        </div>
      </footer>

    </div>
  );
}

export default App;
const numbers = [1, 2, 3, 4, 5];

const doubled = numbers.map(num => num * 2);

console.log(doubled);  