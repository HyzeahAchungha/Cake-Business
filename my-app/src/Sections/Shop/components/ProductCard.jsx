import React, { useState } from 'react';
import { Search, ShoppingCart, X, Plus, Minus, ArrowLeft, MapPin, Calendar, Trash2 } from 'lucide-react';

const ProductCard = ({ product, onAddClick }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-72 overflow-hidden">
        <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
        <div className="absolute top-3 left-3 bg-white px-3 py-1 rounded-full text-xs font-bold text-purple-700 uppercase">
          {product.category}
        </div>
        <div className={`absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t transition-all duration-300 ${isHovered ? 'from-purple-700/80 to-transparent' : 'from-black/20 to-transparent'}`}>
          {isHovered && (
            <div className="absolute bottom-4 right-4">
              <button onClick={() => onAddClick(product)} className="bg-white text-purple-700 p-3 rounded-full hover:bg-purple-700 hover:text-white transition-all shadow-lg">
                <Plus className="w-6 h-6" />
              </button>
            </div>
          )}
        </div>
      </div>
      <div className="p-5">
        <h3 className="text-xl font-bold text-gray-800 mb-2">{product.name}</h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{product.description}</p>
        <div className="flex items-center justify-between">
          <div>
            <span className="text-xs text-gray-500 uppercase block">Starting from</span>
            <p className="text-2xl font-bold text-purple-700">Ghc {product.price}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;