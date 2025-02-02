import React from 'react';
import { X, Star, Minus, Plus } from 'lucide-react';
import { useDispatch } from 'react-redux';
import { Product } from '../types';
import { addToCart } from '../store/cartSlice';

interface ProductModalProps {
  product: Product;
  onClose: () => void;
}

const ProductModal: React.FC<ProductModalProps> = ({ product, onClose }) => {
  const [quantity, setQuantity] = React.useState(1);
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product));
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg w-full max-w-4xl max-h-[90vh] overflow-y-auto relative">
        {/* Close button - always visible */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-500 hover:text-gray-700 z-10"
        >
          <X size={24} />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4 sm:p-6">
          {/* Image container */}
          <div className="aspect-square w-full max-w-md mx-auto">
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-full object-contain"
            />
          </div>

          {/* Product details */}
          <div className="flex flex-col">
            <h2 className="text-xl sm:text-2xl font-bold mb-4 pr-8">{product.title}</h2>
            
            <div className="flex items-center gap-2 mb-4">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className={i < Math.floor(product.rating.rate) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}
                  />
                ))}
              </div>
              <span className="text-sm text-gray-600">({product.rating.count} reviews)</span>
            </div>

            <div className="text-gray-600 mb-6 text-sm sm:text-base">
              {product.description}
            </div>
            
            <div className="text-2xl sm:text-3xl font-bold mb-6">
              ${product.price}
            </div>

        
            <div className="flex items-center gap-4 mb-6">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="p-2 border rounded-md hover:bg-gray-50"
              >
                <Minus size={20} />
              </button>
              <span className="text-xl w-12 text-center">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="p-2 border rounded-md hover:bg-gray-50"
              >
                <Plus size={20} />
              </button>
            </div>

            <button
              onClick={handleAddToCart}
              className="w-full bg-black text-white py-3 rounded-md hover:bg-gray-800 transition-colors mt-auto"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;