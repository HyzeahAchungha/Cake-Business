import {  ArrowLeft, MapPin, Calendar } from 'lucide-react';
import React, { useState } from 'react';

const CheckoutPage = ({ cartItems, onBack }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    deliveryMethod: 'Pickup',
    date: '',
    address: ''
  });

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const deliveryFee = formData.deliveryMethod === 'Delivery' ? 20 : 0;
  const total = subtotal + deliveryFee;

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Order placed successfully! Payment instructions will be sent to your email.');
  };

  return (
    <div className="min-h-screen bg-gray-50">
     

      <div className="max-w-7xl mx-auto px-6 py-10">
        <button onClick={onBack} className="flex items-center gap-2 text-gray-600 hover:text-purple-700 mb-8 font-medium">
          <ArrowLeft className="w-5 h-5" />Back to Shop
        </button>

        <h1 className="text-4xl font-bold text-gray-900 mb-10">Secure Checkout</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 bg-purple-100 text-purple-700 rounded-full flex items-center justify-center font-bold">1</div>
                  <h2 className="text-2xl font-bold text-gray-900">Contact Details</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                    <input type="text" required value={formData.fullName} onChange={(e) => setFormData({...formData, fullName: e.target.value})} placeholder="e.g. Jane Doe" className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                    <input type="tel" required value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} placeholder="e.g. 055 777 5555" className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500" />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                    <input type="email" required value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} placeholder="To send your receipt" className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500" />
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 bg-purple-100 text-purple-700 rounded-full flex items-center justify-center font-bold">2</div>
                  <h2 className="text-2xl font-bold text-gray-900">Delivery Method</h2>
                </div>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <button type="button" onClick={() => setFormData({...formData, deliveryMethod: 'Pickup'})} className={`p-4 rounded-xl border-2 font-medium transition-all ${formData.deliveryMethod === 'Pickup' ? 'border-purple-700 bg-purple-50 text-purple-700' : 'border-gray-300 text-gray-700'}`}>
                    🏪 Pickup
                  </button>
                  <button type="button" onClick={() => setFormData({...formData, deliveryMethod: 'Delivery'})} className={`p-4 rounded-xl border-2 font-medium transition-all ${formData.deliveryMethod === 'Delivery' ? 'border-purple-700 bg-purple-50 text-purple-700' : 'border-gray-300 text-gray-700'}`}>
                    🚚 Delivery
                  </button>
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                    <Calendar className="w-4 h-4" />Date Needed (Minimum 48h Notice)
                  </label>
                  <input type="date" required value={formData.date} onChange={(e) => setFormData({...formData, date: e.target.value})} className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500" />
                </div>
                {formData.deliveryMethod === 'Pickup' && (
                  <div className="bg-purple-50 p-4 rounded-xl flex gap-3">
                    <MapPin className="w-5 h-5 text-purple-700 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-purple-900">Pickup Location:</p>
                      <p className="text-purple-700">Tema-Michel Camp (Betterbest Street)</p>
                      <p className="text-purple-700 text-sm">Call 055 725 5359 upon arrival.</p>
                    </div>
                  </div>
                )}
                {formData.deliveryMethod === 'Delivery' && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Delivery Address</label>
                    <textarea required value={formData.address} onChange={(e) => setFormData({...formData, address: e.target.value})} placeholder="Enter your full delivery address" className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500" rows={3} />
                  </div>
                )}
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-purple-100 text-purple-700 rounded-full flex items-center justify-center font-bold">3</div>
                  <h2 className="text-2xl font-bold text-gray-900">Payment</h2>
                </div>
                <div className="bg-gray-50 p-4 rounded-xl flex gap-3">
                  <span className="text-2xl">💳</span>
                  <p className="text-gray-600">Payment instructions (MoMo/Bank) will be sent to your email after you place the order.</p>
                </div>
              </div>

              <button type="submit" className="w-full bg-purple-700 hover:bg-purple-800 text-white py-5 rounded-xl font-bold text-lg transition-all shadow-lg">
                Place Order
              </button>
            </form>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl p-6 shadow-sm sticky top-24">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Order Summary</h2>
              <div className="space-y-4 mb-6">
                {cartItems.map((item) => (
                  <div key={item.cartId} className="flex gap-3">
                    <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded-lg" />
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 text-sm">{item.name}</h3>
                      <p className="text-xs text-gray-500">Qty: {item.quantity} • {item.selectedType || 'Standard'}</p>
                      <p className="text-purple-700 font-bold text-sm">Ghc {item.price * item.quantity}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="border-t pt-4 space-y-2">
                <div className="flex justify-between text-gray-700">
                  <span>Subtotal</span>
                  <span>Ghc {subtotal}</span>
                </div>
                <div className="flex justify-between text-gray-700">
                  <span>Delivery</span>
                  <span>{deliveryFee === 0 ? 'Free' : `Ghc ${deliveryFee}`}</span>
                </div>
                <div className="flex justify-between text-2xl font-bold text-purple-700 pt-2 border-t">
                  <span>Total</span>
                  <span>Ghc {total}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CheckoutPage;