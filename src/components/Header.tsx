import React from 'react';
import { ShoppingCart, Search } from 'lucide-react';
import { useSelector } from 'react-redux';
import { RootState } from '../store';

interface HeaderProps {
  onSearch: (query: string) => void;
}

const Header: React.FC<HeaderProps> = ({ onSearch }) => {
  const cartCount = useSelector((state: RootState) => state.cart.count);

  return (
    <header className="bg-yellow-400 py-4 px-6 fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <h1 className="text-2xl font-bold">My Store</h1>
        
        <div className="flex items-center gap-6">
          <div className="relative">
            <input
              type="text"
              placeholder="Search categories..."
              className="py-2 px-4 pr-10 rounded-full w-64 focus:outline-none"
              onChange={(e) => onSearch(e.target.value)}
            />
            <Search className="absolute right-3 top-2.5 text-gray-400" size={20} />
          </div>
          
          <div className="relative">
            <ShoppingCart size={24} />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                {cartCount}
              </span>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;