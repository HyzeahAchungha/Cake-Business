
import { useState } from 'react';
import { ShoppingCart, ArrowLeft, MapPin, Calendar, Shield, CheckCircle } from 'lucide-react';

const CheckoutPage = ({ cartItems = [], onBack }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    deliveryMethod: 'Pickup',
    date: '',
    address: ''
  });
  const [isProcessing, setIsProcessing] = useState(false);
  const [orderComplete, setOrderComplete] = useState(false);

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const deliveryFee = formData.deliveryMethod === 'Delivery' ? 2000 : 0;
  const total = subtotal + deliveryFee;

  const validateForm = () => {
    const errors = [];
    
    if (!formData.fullName.trim()) errors.push('Full name is required');
    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.push('Valid email is required');
    }
    if (!formData.phone.trim() || formData.phone.length < 9) {
      errors.push('Valid phone number is required');
    }
    if (!formData.date) errors.push('Delivery/pickup date is required');
    
    const selectedDate = new Date(formData.date);
    const minDate = new Date();
    minDate.setHours(minDate.getHours() + 48);
    if (selectedDate < minDate) {
      errors.push('Date must be at least 48 hours from now');
    }
    
    if (formData.deliveryMethod === 'Delivery' && !formData.address.trim()) {
      errors.push('Delivery address is required');
    }

    if (errors.length > 0) {
      alert('Please fix the following errors:\n\n' + errors.join('\n'));
      return false;
    }
    
    return true;
  };

  const sendOrderToBackend = async () => {
    try {
      const backendUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:5000';
      
      const response = await fetch(`${backendUrl}/api/orders`, {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          customer: {
            name: formData.fullName,
            email: formData.email,
            phone: formData.phone,
            deliveryMethod: formData.deliveryMethod,
            date: formData.date,
            address: formData.address || 'Pickup at store',
          },
          items: cartItems.map(item => ({
            name: item.name,
            quantity: item.quantity,
            price: item.price,
            selectedType: item.selectedType || 'Standard',
          })),
          total: total,
          deliveryFee: deliveryFee,
        })
      });

      const result = await response.json();
      
      if (response.ok && result.success) {
        setOrderComplete(true);
        setIsProcessing(false);
        
        // Clear cart if you have a clear function
        if (window.clearCart) {
          window.clearCart();
        }
      } else {
        throw new Error(result.error || 'Failed to save order');
      }
    } catch (error) {
      console.error('Error saving order:', error);
      alert('There was an issue submitting your order. Please contact us at +237 678471601');
      setIsProcessing(false);
    }
  };

  const handleSubmit = () => {
    if (!validateForm()) return;
    if (cartItems.length === 0) {
      alert('Your cart is empty');
      return;
    }

    setIsProcessing(true);
    sendOrderToBackend();
  };

  // Success page view
  if (orderComplete) {
    return (
      <div className="min-h-screen bg-gray-50">
        

        <div className="max-w-3xl mx-auto px-6 py-20 text-center">
          <div className="bg-white rounded-3xl shadow-lg p-12">
            <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-16 h-16 text-green-600" />
            </div>
            
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Order Received!</h1>
            
            <p className="text-lg text-gray-600 mb-2">
              Thank you, <span className="font-semibold text-purple-700">{formData.fullName}</span>.
            </p>
            
            <p className="text-gray-600 mb-8">
              We have received your order request. Check your email 
              <span className="font-semibold text-purple-700"> ({formData.email}) </span>
              for the invoice and payment instructions.
            </p>

            <div className="bg-purple-50 rounded-2xl p-6 mb-8 border border-purple-200">
              <h3 className="font-bold text-purple-900 mb-4 text-lg">Payment Instructions Sent!</h3>
              <p className="text-gray-700 mb-4">Check your email for payment details including our Mobile Money number.</p>
              <div className="bg-white rounded-xl p-4 border-2 border-purple-300">
                <p className="text-sm text-gray-600 mb-2">Quick Reference:</p>
                <p className="text-2xl font-bold text-purple-700">XAF {total.toFixed(0)}</p>
                <p className="text-sm text-gray-500 mt-2">See email for complete payment details</p>
              </div>
            </div>

            <div className="bg-yellow-50 rounded-2xl p-6 mb-8 border border-yellow-200">
              <h3 className="font-bold text-yellow-900 mb-4 text-lg">⚠️ Important</h3>
              <div className="space-y-3 text-left">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-yellow-600 text-white rounded-full flex items-center justify-center shrink-0 text-sm font-bold">1</div>
                  <p className="text-gray-700">Check your email for payment instructions</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-yellow-600 text-white rounded-full flex items-center justify-center shrink-0 text-sm font-bold">2</div>
                  <p className="text-gray-700">Send payment using the mobile money details provided</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-yellow-600 text-white rounded-full flex items-center justify-center shrink-0 text-sm font-bold">3</div>
                  <p className="text-gray-700">Use your name <strong>({formData.fullName})</strong> as the reference</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-yellow-600 text-white rounded-full flex items-center justify-center shrink-0 text-sm font-bold">4</div>
                  <p className="text-gray-700">We'll begin preparing your order once payment is confirmed</p>
                </div>
              </div>
            </div>

            <button
              onClick={() => window.location.href = '/'}
              className="bg-purple-700 hover:bg-purple-800 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-lg"
            >
              Back to Home
            </button>

            <p className="text-sm text-gray-500 mt-6">
              Questions? Contact us at <strong>+237 678471601</strong>
            </p>
          </div>
        </div>
      </div>
    );
  }

  // Checkout form view
  return (
    <div className="min-h-screen bg-gray-50">
      

      <div className="max-w-7xl mx-auto px-6 py-10">
        <button onClick={onBack} className="flex items-center gap-2 text-gray-600 hover:text-purple-700 mb-8 font-medium transition-colors">
          <ArrowLeft className="w-5 h-5" />Back to Shop
        </button>

        <h1 className="text-4xl font-bold text-gray-900 mb-10">Checkout</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            {/* Contact Details */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 bg-purple-100 text-purple-700 rounded-full flex items-center justify-center font-bold">1</div>
                <h2 className="text-2xl font-bold text-gray-900">Contact Details</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                  <input 
                    type="text" 
                    value={formData.fullName} 
                    onChange={(e) => setFormData({...formData, fullName: e.target.value})} 
                    placeholder="e.g. Jean Dupont" 
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all" 
                    disabled={isProcessing}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                  <input 
                    type="tel" 
                    value={formData.phone} 
                    onChange={(e) => setFormData({...formData, phone: e.target.value})} 
                    placeholder="e.g. 677123456" 
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all" 
                    disabled={isProcessing}
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                  <input 
                    type="email" 
                    value={formData.email} 
                    onChange={(e) => setFormData({...formData, email: e.target.value})} 
                    placeholder="your@email.com" 
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all" 
                    disabled={isProcessing}
                  />
                  <p className="text-xs text-gray-500 mt-1">Payment instructions will be sent here</p>
                </div>
              </div>
            </div>

            {/* Delivery Method */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 bg-purple-100 text-purple-700 rounded-full flex items-center justify-center font-bold">2</div>
                <h2 className="text-2xl font-bold text-gray-900">Delivery Method</h2>
              </div>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <button 
                  type="button" 
                  onClick={() => setFormData({...formData, deliveryMethod: 'Pickup'})} 
                  className={`p-4 rounded-xl border-2 font-medium transition-all ${formData.deliveryMethod === 'Pickup' ? 'border-purple-700 bg-purple-50 text-purple-700' : 'border-gray-300 text-gray-700 hover:border-purple-300'}`}
                  disabled={isProcessing}
                >
                  🏪 Pickup (Free)
                </button>
                <button 
                  type="button" 
                  onClick={() => setFormData({...formData, deliveryMethod: 'Delivery'})} 
                  className={`p-4 rounded-xl border-2 font-medium transition-all ${formData.deliveryMethod === 'Delivery' ? 'border-purple-700 bg-purple-50 text-purple-700' : 'border-gray-300 text-gray-700 hover:border-purple-300'}`}
                  disabled={isProcessing}
                >
                  🚚 Delivery (XAF 2,000)
                </button>
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2  items-center gap-2">
                  <Calendar className="w-4 h-4" />Date Needed (Minimum 48h Notice) *
                </label>
                <input 
                  type="date" 
                  value={formData.date} 
                  onChange={(e) => setFormData({...formData, date: e.target.value})} 
                  min={new Date(Date.now() + 48 * 60 * 60 * 1000).toISOString().split('T')[0]}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all" 
                  disabled={isProcessing}
                />
              </div>
              {formData.deliveryMethod === 'Pickup' && (
                <div className="bg-purple-50 p-4 rounded-xl flex gap-3 border border-purple-200">
                  <MapPin className="w-5 h-5 text-purple-700 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-purple-900">Pickup Location:</p>
                    <p className="text-purple-700">Your Street, Douala, Cameroon</p>
                    <p className="text-purple-700 text-sm">Call +237 678471601 upon arrival</p>
                  </div>
                </div>
              )}
              {formData.deliveryMethod === 'Delivery' && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Delivery Address *</label>
                  <textarea 
                    value={formData.address} 
                    onChange={(e) => setFormData({...formData, address: e.target.value})} 
                    placeholder="Enter your full delivery address with landmarks" 
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all" 
                    rows={3}
                    disabled={isProcessing}
                  />
                </div>
              )}
            </div>

            {/* Payment Info */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-purple-100 text-purple-700 rounded-full flex items-center justify-center font-bold">3</div>
                <h2 className="text-2xl font-bold text-gray-900">Payment</h2>
              </div>
              <div className="space-y-3">
                <div className="bg-blue-50 p-4 rounded-xl border border-blue-200">
                  <p className="font-semibold text-blue-900 mb-2">📱 Pay via Mobile Money</p>
                  <p className="text-blue-700 text-sm mb-3">Payment instructions will be sent to your email after placing order</p>
                  <div className="flex flex-wrap gap-2 text-sm">
                    <span className="bg-white px-3 py-1 rounded-full border border-blue-300 text-blue-700">🟠 Orange Money</span>
                    <span className="bg-white px-3 py-1 rounded-full border border-blue-300 text-blue-700">🟡 MTN Mobile Money</span>
                  </div>
                </div>
                
                <div className="bg-yellow-50 p-4 rounded-xl border border-yellow-200">
                  <p className="font-semibold text-yellow-900 mb-1">⚠️ Note: Payment validates your order</p>
                  <p className="text-yellow-700 text-sm">Once payment is confirmed, we will begin crafting your delicious treats!</p>
                </div>
              </div>
            </div>

            <button 
              onClick={handleSubmit}
              disabled={isProcessing || cartItems.length === 0}
              className="w-full bg-purple-700 hover:bg-purple-800 text-white py-5 rounded-xl font-bold text-lg transition-all shadow-lg disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isProcessing ? (
                <>
                  <span className="animate-spin">⏳</span> Submitting Order...
                </>
              ) : (
                <>
                  Place Order - XAF {total.toFixed(0)}
                </>
              )}
            </button>

            <p className="text-center text-xs text-gray-500">
              Payment instructions will be sent to your email
            </p>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl p-6 shadow-sm sticky top-24 border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Order Summary</h2>
              {cartItems.length === 0 ? (
                <p className="text-gray-500 text-center py-8">Your cart is empty</p>
              ) : (
                <>
                  <div className="space-y-4 mb-6 max-h-64 overflow-y-auto">
                    {cartItems.map((item, index) => (
                      <div key={item.cartId || index} className="flex gap-3">
                        <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded-lg" />
                        <div className="flex-1">
                          <h3 className="font-semibold text-gray-900 text-sm">{item.name}</h3>
                          <p className="text-xs text-gray-500">Qty: {item.quantity} • {item.selectedType || 'Standard'}</p>
                          <p className="text-purple-700 font-bold text-sm">XAF {(item.price * item.quantity).toFixed(0)}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="border-t pt-4 space-y-2">
                    <div className="flex justify-between text-gray-700">
                      <span>Subtotal</span>
                      <span>XAF {subtotal.toFixed(0)}</span>
                    </div>
                    <div className="flex justify-between text-gray-700">
                      <span>Delivery</span>
                      <span>{deliveryFee === 0 ? 'Free' : `XAF ${deliveryFee.toFixed(0)}`}</span>
                    </div>
                    <div className="flex justify-between text-2xl font-bold text-purple-700 pt-2 border-t">
                      <span>Total</span>
                      <span>XAF {total.toFixed(0)}</span>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;