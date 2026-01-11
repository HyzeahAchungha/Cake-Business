import React, { useState } from 'react';
import { Search, ShoppingCart, X, Plus, Minus, ArrowLeft, MapPin, Calendar, Trash2 } from 'lucide-react';
const ProductModal = ({ product, onClose, onAddToCart }) => {
  const [selectedType, setSelectedType] = useState(product.types[0] || '');
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    onAddToCart({
      ...product,
      selectedType,
      quantity,
      cartId: Date.now()
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-5xl w-full max-h-[95vh] overflow-hidden flex shadow-2xl">
        <div className="w-2/5 relative">
          <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
        </div>
        <div className="w-3/5 flex flex-col">
          <div className="p-6 border-b flex justify-between items-start flex-shrink-0">
            <div>
              <span className="text-purple-700 text-sm font-bold uppercase tracking-wide">{product.category}</span>
              <h2 className="text-3xl font-bold text-gray-900 mt-1">{product.name}</h2>
              <p className="text-gray-600 mt-2">{product.description}</p>
            </div>
            <button onClick={onClose} className="text-gray-400 hover:text-gray-600 transition-colors p-1">
              <X className="w-6 h-6" />
            </button>
          </div>
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            {product.types.length > 0 && (
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Select Type</h3>
                <div className="flex gap-2 flex-wrap">
                  {product.types.map(type => (
                    <button key={type} onClick={() => setSelectedType(type)} className={`px-5 py-2.5 rounded-full border-2 transition-all font-medium ${selectedType === type ? 'border-purple-700 bg-purple-700 text-white shadow-md' : 'border-gray-300 text-gray-700 hover:border-purple-300'}`}>
                      {type}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
          <div className="p-6 border-t space-y-4 flex-shrink-0 bg-gray-50">
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Quantity</h3>
              <div className="flex items-center gap-4">
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="p-3 rounded-full border-2 border-gray-300 hover:border-purple-700 hover:bg-purple-50 transition-all">
                  <Minus className="w-5 h-5 text-gray-700" />
                </button>
                <span className="text-2xl font-bold text-gray-900 w-16 text-center">{quantity}</span>
                <button onClick={() => setQuantity(quantity + 1)} className="p-3 rounded-full border-2 border-gray-300 hover:border-purple-700 hover:bg-purple-50 transition-all">
                  <Plus className="w-5 h-5 text-gray-700" />
                </button>
              </div>
            </div>
            <div className="flex items-center gap-2 text-green-600 font-medium">
              <span className="text-xl">✓</span>
              <span>Available Now</span>
            </div>
            <div className="flex items-center justify-between pt-4">
              <div>
                <span className="text-sm text-gray-500 uppercase block">Total Price</span>
                <p className="text-4xl font-bold text-gray-900">Ghc {product.price * quantity}</p>
              </div>
              <button onClick={handleAddToCart} className="bg-purple-700 hover:bg-purple-800 text-white px-8 py-4 rounded-xl font-semibold flex items-center gap-2 transition-all shadow-lg hover:shadow-xl">
                <ShoppingCart className="w-5 h-5" />
                Add to Order
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
 export default ProductModal;