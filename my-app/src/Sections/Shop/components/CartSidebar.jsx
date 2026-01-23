import React from 'react';
import { ShoppingCart, X,  Trash2 } from 'lucide-react';
const CartSidebar = ({ isOpen, onClose, cartItems, onRemove, onCheckout }) => {
  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <>
      {isOpen && <div className="fixed inset-0 bg-black/40 z-40" onClick={onClose} />}
      <div className={`fixed top-0 right-0 h-full w-96 bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out flex flex-col ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="p-6 border-b flex items-center justify-between">
          <div className="flex items-center gap-3">
            <ShoppingCart className="w-6 h-6 text-purple-700" />
            <h2 className="text-2xl font-bold text-gray-900">Your Selection</h2>
          </div>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600 p-1">
            <X className="w-6 h-6" />
          </button>
        </div>
        
        <div className="flex-1 overflow-y-auto p-6">
          {cartItems.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingCart className="w-24 h-24 text-gray-300 mb-4" />
              <p className="text-gray-500 text-lg mb-2">Your bag is empty.</p>
              <button onClick={onClose} className="text-purple-700 font-semibold hover:underline">Browse Menu</button>
            </div>
          ) : (
            <div className="space-y-4">
              {cartItems.map((item) => (
                <div key={item.cartId} className="flex gap-4 p-4 bg-gray-50 rounded-xl">
                  <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded-lg" />
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900">{item.name}</h3>
                    <p className="text-sm text-gray-500">Qty: {item.quantity} • {item.selectedType || 'Standard'}</p>
                    <p className="text-purple-700 font-bold mt-1">CFA {item.price * item.quantity}</p>
                  </div>
                  <button onClick={() => onRemove(item.cartId)} className="text-gray-400 hover:text-red-500 transition-colors">
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {cartItems.length > 0 && (
          <div className="p-6 border-t space-y-4">
            <div className="flex justify-between items-center text-lg">
              <span className="font-semibold text-gray-700">Subtotal</span>
              <span className="font-bold text-gray-900 text-2xl">CFA {subtotal}</span>
            </div>
            <button onClick={onCheckout} className="w-full bg-purple-700 hover:bg-purple-800 text-white py-4 rounded-xl font-bold transition-all shadow-lg">
              Proceed to Checkout
            </button>
          </div>
        )}
      </div>
    </>
  );
};
export default CartSidebar