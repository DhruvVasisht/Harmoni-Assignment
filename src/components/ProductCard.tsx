import React from 'react';
import { Product } from '../types';
import { Star } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  onProductClick: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onProductClick }) => {
  return (
    <div 
      className="bg-white p-4 rounded-lg shadow-md cursor-pointer transition-transform hover:scale-105"
      onClick={() => onProductClick(product)}
    >
      <div className="aspect-square overflow-hidden mb-4">
        <img 
          src={product.image} 
          alt={product.title}
          className="w-full h-full object-contain"
        />
      </div>
      
      <h3 className="font-semibold text-lg mb-2 truncate">{product.title}</h3>
      
      <div className="flex items-center gap-2 mb-2">
        <div className="flex items-center">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={16}
              className={i < Math.floor(product.rating.rate) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}
            />
          ))}
        </div>
        <span className="text-sm text-gray-600">({product.rating.count})</span>
      </div>
      
      <div className="flex items-center justify-between">
        <span className="text-xl font-bold">${product.price}</span>
        <button className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800">
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;