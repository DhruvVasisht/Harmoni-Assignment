import  { useState, useEffect } from 'react';
import { Provider } from 'react-redux';
import axios from 'axios';
import { store } from './store';
import { Product } from './types';
import Header from './components/Header';
import ProductCard from './components/ProductCard';
import ProductModal from './components/ProductModal';

function App() {
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchInitialData = async () => {
      try {
        const [productsRes, categoriesRes] = await Promise.all([
          axios.get('https://fakestoreapi.com/products'),
          axios.get('https://fakestoreapi.com/products/categories')
        ]);
        setProducts(productsRes.data);
        setCategories(categoriesRes.data);
      } catch (err) {
        setError('Failed to fetch data. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchInitialData();
  }, []);

  const handleSearch = async (query: string) => {
    if (!query) {
      try {
        const response = await axios.get('https://fakestoreapi.com/products');
        setProducts(response.data);
      } catch {
        setError('Failed to fetch products. Please try again later.');
      }
      return;
    }

    const lowerCaseQuery = query.toLowerCase();

    const matchingCategory = categories.find(category => 
      category.toLowerCase().includes(lowerCaseQuery)
    );

    if (matchingCategory) {
      try {
        const response = await axios.get(
          `https://fakestoreapi.com/products/category/${matchingCategory}`
        );
        setProducts(response.data);
        return;
      } catch {
        setError('Failed to fetch products. Please try again later.');
      }
    }

    try {
      const response = await axios.get('https://fakestoreapi.com/products');
      const filteredProducts = response.data.filter((product: Product) => 
        product.title.toLowerCase().includes(lowerCaseQuery)
      );

      setProducts(filteredProducts);
    } catch {
      setError('Failed to fetch products. Please try again later.');
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-4 border-yellow-400 border-t-transparent"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-red-500 text-center">
          <h2 className="text-2xl font-bold mb-2">Error</h2>
          <p>{error}</p>
        </div>
      </div>
    );
  }

  return (
    <Provider store={store}>
      <div className="min-h-screen bg-gray-100">
        <Header onSearch={handleSearch} />
        
        <main className="max-w-7xl mx-auto px-4 pt-24 pb-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onProductClick={setSelectedProduct}
              />
            ))}
          </div>
        </main>

        {selectedProduct && (
          <ProductModal
            product={selectedProduct}
            onClose={() => setSelectedProduct(null)}
          />
        )}
      </div>
    </Provider>
  );
}

export default App;
