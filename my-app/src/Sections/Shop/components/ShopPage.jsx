import React, { useState, useMemo } from 'react';
import { Search, ShoppingCart } from 'lucide-react';
import  CheckoutPage  from "@/Sections/Shop/components/CheckoutPage";
import  ProductCard  from "@/Sections/Shop/components/ProductCard";
import  ProductModal  from "@/Sections/Shop/components/ProductModal";
import CartSidebar  from "@/Sections/Shop/components/CartSidebar";
import { useCart } from "@/context/CartContext"; 

const products = [
  {
    id: 1,
    name: "Bento 2 Cakes",
    category: "Bento",
    description: "Minimalist aesthetic cakes, perfect for intimate gifting.",
    price: 150,
     image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=300&fit=crop",
    types: ["Vanilla", "Chocolate", "Red Velvet", "Strawberry"],
    toppings: ["Birthday toppers", "Chocolate drip", "Paper fan", "Faux balls", "Chocolate", "Sprinkles/sugar balls", "Flowers", "Prints", "Candle", "Fondant toppers", "Gold dust painting", "Balloons"]
  },
  {
    id: 2,
    name: "Gourmet Cupcakes (Box of 6)",
    category: "Cupcakes",
    description: "Bite-sized luxury in Vanilla, Chocolate, Red Velvet, or Strawberry.",
    price: 100,
    image: "https://images.unsplash.com/photo-1599785209707-a456fc1337bb?w=400&h=300&fit=crop",
    types: ["Vanilla", "Chocolate", "Red Velvet", "Strawberry"],
    toppings: []
  },
  {
    id: 3,
    name: "Savory Spring Rolls (5 pcs)",
    category: "Spring rolls",
    description: "Crispy or frozen, packed with savory filling.",
    price: 25,
   image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=400&h=300&fit=crop",
    types: [],
    toppings: []
  },
  {
    id: 4,
    name: "Premium Loaf Cakes",
    category: "Loaf cakes",
    description: "Moist, dense, and perfect for tea time.",
    price: 45,
   image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=400&h=300&fit=crop",
    types: ["Vanilla", "Chocolate", "Lemon"],
    toppings: []
  },
  {
    id: 5,
    name: "Cake Slices",
    category: "Cake slice",
    description: "Grab a slice of heaven on the go.",
    price: 50,
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=400&h=300&fit=crop",
    types: ["Vanilla", "Chocolate", "Red Velvet"],
    toppings: []
  },
  {
    id: 6,
    name: "Ring Donuts (15pcs per pack)",
    category: "Ring donut",
    description: "Soft, fluffy donuts. Choose your favorite finish.",
    price: 30,
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=400&h=300&fit=crop",
    types: ["Glazed", "Chocolate", "Strawberry"],
    toppings: []
  },
  {
    id: 7,
    name: "Custom Cakes",
    category: "Customised cakes",
    description: "You dream it, we bake it. Fully personalized designs.",
    price: 0,
    isCustom: true,
  image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=400&h=300&fit=crop",
    types: [],
    toppings: []
  },
  {
    id: 8,
    name: "Kiddies Themed Cakes",
    category: "Kiddies cake",
    description: "Fun, colorful characters and designs for the little ones.",
    price: 0,
    isCustom: true,
   image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=400&h=300&fit=crop",
    types: [],
    toppings: []
  }
];

const categories = [
  "All",
  "Bento",
  "Cupcakes",
  "Spring rolls",
  "Loaf cakes",
  "Cake slice",
  "Basic Cake",
  "Ring donut",
  "Customised cakes",
  "Kiddies cake",
  "Anniversary cakes",
  "Wedding cakes",
  "Regular fondant cakes",
  "Combo Cake",
  "Budget Cake"
];

export default function ShopPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const { cartItems, isCartOpen, setIsCartOpen, addToCart, removeFromCart } = useCart();

  const [showCheckout, setShowCheckout] = useState(false);

  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      const matchesCategory = selectedCategory === "All" || product.category === selectedCategory;
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  

  const handleCheckout = () => {
    setIsCartOpen(false);
    setShowCheckout(true);
  };

  if (showCheckout) {
    return <CheckoutPage cartItems={cartItems} onBack={() => setShowCheckout(false)} />;
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-15">

      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="mb-8">
          <h2 className="text-5xl font-bold text-gray-900 mb-3">Our Collection</h2>
          <p className="text-gray-600 text-lg">{filteredProducts.length} delicacies found</p>
        </div>

        <div className="flex gap-8">
          <aside className="w-72 shrink-0">
            <div className="bg-white rounded-2xl shadow-sm p-6 sticky top-24">
              <div className="mb-6">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input type="text" placeholder="Search for cakes, pastries..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="w-full pl-12 pr-4 py-3 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500" />
                </div>
              </div>
              <div className="space-y-2">
                {categories.map(category => (
                  <button key={category} onClick={() => setSelectedCategory(category)} className={`w-full text-left px-5 py-3 rounded-xl transition-all font-medium ${selectedCategory === category ? 'bg-purple-700 text-white shadow-lg' : 'text-gray-700 hover:bg-purple-50'}`}>
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </aside>

          <main className="flex-1">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map(product => (
                <ProductCard key={product.id} product={product} onAddClick={setSelectedProduct} />
              ))}
            </div>
          </main>
        </div>
      </div>

      {selectedProduct && <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} onAddToCart={addToCart} />}
      
      <CartSidebar isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} cartItems={cartItems} onRemove={removeFromCart} onCheckout={handleCheckout} />
    </div>
  );
}