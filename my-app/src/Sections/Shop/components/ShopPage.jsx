import React, { useState, useMemo } from 'react';
import { Search } from 'lucide-react';
import  CheckoutPage  from "@/Sections/Shop/components/CheckoutPage";
import  ProductCard  from "@/Sections/Shop/components/ProductCard";
import  ProductModal  from "@/Sections/Shop/components/ProductModal";
import CartSidebar  from "@/Sections/Shop/components/CartSidebar";
import { useCart } from "@/context/CartContext"; 
import category1 from '@/assets/images/category1.jpg';
import category2 from '@/assets/images/category2.jpg';
import category3 from '@/assets/images/category3.jpg';
import category4 from '@/assets/images/category4.jpg';
import category5 from '@/assets/images/category5.jpg';
import category6 from '@/assets/images/category6.jpg';
import category7 from '@/assets/images/category7.jpg';
import category8 from '@/assets/images/category8.jpg';
import category9 from '@/assets/images/category9.jpg';
import category10 from '@/assets/images/category10.jpg';
import category11 from '@/assets/images/category11.jpg';
import category12 from '@/assets/images/category12.jpg';
import category13 from '@/assets/images/category13.jpg';
import category14 from '@/assets/images/category14.jpg';
import cakebana13 from '@/assets/images/cakebana13.jpg';
import cupcake17 from '@/assets/images/cupcake17.jpg';
import cupcake15 from '@/assets/images/cupcake15.jpg';
import cupcake16 from '@/assets/images/cupcake16.jpg'; 
import roll from '@/assets/images/roll.jpeg';
import roll1 from '@/assets/images/roll1.jpeg';
import roll2 from '@/assets/images/roll2.jpeg';
import roll3 from '@/assets/images/roll3.jpeg';
import roll5 from '@/assets/images/roll5.jpeg';
import roll6 from '@/assets/images/roll6.jpeg';
import rolls from '@/assets/images/roll.jpeg';
import slice1 from '@/assets/images/slice1.jpeg';
import slice3 from '@/assets/images/slice3.jpeg';
import slice4 from '@/assets/images/slice4.jpeg';
import slice5 from '@/assets/images/slice5.jpeg';
import donut from '@/assets/images/donut.jpeg';
import donut1 from '@/assets/images/donut1.jpeg';
import donut2 from '@/assets/images/donut2.jpeg';
 

const products = [
  {
    id: 1,
    name: "Bento 2 Cakes",
    category: "Bento",
    description: "Minimalist aesthetic cakes, perfect for intimate gifting.",
    price: 15000,
     image: category13,
    types: ["Vanilla", "Chocolate", "Red Velvet", "Strawberry"],
    toppings: ["Birthday toppers", "Chocolate drip", "Paper fan", "Faux balls", "Chocolate", "Sprinkles/sugar balls", "Flowers", "Prints", "Candle", "Fondant toppers", "Gold dust painting", "Balloons"]
  },
  {
    id: 2,
    name: "Gourmet Cupcakes (Box of 6)",
    category: "Cupcakes",
    description: "Bite-sized luxury in Vanilla, Chocolate, Red Velvet, or Strawberry.",
    price: 10000,
    image: cupcake16,
    types: ["Vanilla", "Chocolate", "Red Velvet", "Strawberry"],
    toppings: []
  },
  {
    id: 3,
    name: "Savory Spring Rolls (5 pcs)",
    category: "Spring rolls",
    description: "Crispy or frozen, packed with savory filling.",
    price: 7000,
   image: roll,
    types: [],
    toppings: []
  },
  {
    id: 4,
    name: "Premium Loaf Cakes",
    category: "Loaf cakes",
    description: "Moist, dense, and perfect for tea time.",
    price: 10000,
   image: cakebana13,
    types: ["Vanilla", "Chocolate", "Lemon"],
    toppings: []
  },
  {
    id: 5,
    name: "Cake Slices",
    category: "Cake slice",
    description: "Grab a slice of heaven on the go.",
    price: 8000,
    image: slice1,
    types: ["Vanilla", "Chocolate", "Red Velvet"],
    toppings: []
  },
  {
    id: 6,
    name: "Ring Donuts (15pcs per pack)",
    category: "Ring donut",
    description: "Soft, fluffy donuts. Choose your favorite finish.",
    price: 6000,
    image: donut,
    types: ["Glazed", "Chocolate", "Strawberry"],
    toppings: []
  },
  {
    id: 7,
    name: "Customised cakes",
    category: "Customised cakes",
    description: "You dream it, we bake it. Fully personalized designs.",
    price: 20000,
    isCustom: true,
  image: category10,
    types: [],
    toppings: []
  },
  {
    id: 8,
    name: "Kiddies Themed Cakes",
    category: "Kiddies cake",
    description: "Fun, colorful characters and designs for the little ones.",
    price: 20000,
    isCustom: true,
   image: category14,
    types: [],
    toppings: []
  },
   {
    id: 9,
    name: "Birthday",
    category: "Kiddies cake",
    description: "Fun, colorful characters and designs for the little ones.",
    price: 15000,
    isCustom: true,
   image: category12,
    types: [],
    toppings: []
  },
  {
    id: 10,
    name: "Bento Cakes",
    category: "Bento",
    description: "You dream it, we bake it. Fully personalized designs.",
    price: 15000,
    isCustom: true,
  image: category3,
    types: [],
    toppings: []
  },
  {
    id: 11,
    name: "Bento Cakes",
    category: "Bento",
    description: "You dream it, we bake it. Fully personalized designs.",
    price: 15000,
    isCustom: true,
  image: category4,
    types: [],
    toppings: []
  },
  {
    id: 12,
    name: "Anniversary cakes",
    category: "Anniversary cakes",
    description: "You dream it, we bake it. Fully personalized designs.",
    price: 15000,
    isCustom: true,
  image: category6,
    types: [],
    toppings: []
  },
  {
    id: 13,
    name: "Anniversary cakes",
    category: "Anniversary cakes",
    description: "You dream it, we bake it. Fully personalized designs.",
    price: 15000,
    isCustom: true,
  image: category5,
    types: [],
    toppings: []
  },

   {
    id: 14,
    name: "Budget Cake",
    category: "Budget Cake",
    description: "You dream it, we bake it. Fully personalized designs.",
    price: 15000,
    isCustom: true,
  image: category7,
    types: [],
    toppings: []
  },
   {
    id: 15,
    name: "Budget Cake",
    category: "Budget Cake",
    description: "You dream it, we bake it. Fully personalized designs.",
    price: 15000,
    isCustom: true,
  image: category8,
    types: [],
    toppings: []
  },
   {
    id: 16,
    name: "Regular fondant cakes",
    category: "Regular fondant cakes",
    description: "You dream it, we bake it. Fully personalized designs.",
    price: 15000,
    isCustom: true,
  image: category11,
    types: [],
    toppings: []
  },
   {
    id: 17,
    name: "Regular fondant cakes",
    category: "Regular fondant cakes",
    description: "You dream it, we bake it. Fully personalized designs.",
    price: 20000,
    isCustom: true,
  image: category12,
    types: [],
    toppings: []
  },
  {
    id: 18,
    name: "chocolate ",
    category: "Cupcakes",
    description: "You dream it, we bake it. Fully personalized designs.",
    price: 20000,
    isCustom: true,
  image: cupcake15,
    types: [],
    toppings: []
  },

   {
    id: 19,
    name: "chocolate ",
    category: "Cupcakes",
    description: "You dream it, we bake it. Fully personalized designs.",
    price: 20000,
    isCustom: true,
  image: cupcake17,
    types: [],
    toppings: []
  },
  {
    id: 20,
    name: "Custom Cakes",
    category: "Customised cakes",
    description: "You dream it, we bake it. Fully personalized designs.",
    price: 15000,
    isCustom: true,
  image: category9,
    types: [],
    toppings: []
  },
  {
    id: 21,
    name: "Birthday",
    category: "Kiddies cake",
    description: "Fun, colorful characters and designs for the little ones.",
    price: 20000,
    isCustom: true,
   image: category1,
    types: [],
    toppings: []
  },
  {
    id: 22,
    name: "Graduation",
    category: "Anniversary cakes",
    description: "You dream it, we bake it. Fully personalized designs.",
    price: 20000,
    isCustom: true,
  image: category2,
    types: [],
    toppings: []
  },
   {
    id: 23,
    name: "Cake Slices",
    category: "Cake slice",
    description: "Grab a slice of heaven on the go.",
    price: 12500,
    image: slice3,
    types: ["Vanilla", "Chocolate", "Red Velvet"],
    toppings: []
  },
   {
    id: 24,
    name: "Cake Slices",
    category: "Cake slice",
    description: "Grab a slice of heaven on the go.",
    price: 12500,
    image: slice4,
    types: ["Vanilla", "Chocolate", "Red Velvet"],
    toppings: []
  },
   {
    id: 25,
    name: "Cake Slices",
    category: "Cake slice",
    description: "Grab a slice of heaven on the go.",
    price: 12500,
    image: slice5,
    types: ["Vanilla", "Chocolate", "Red Velvet"],
    toppings: []
  },

  {
    id: 26,
    name: "Savory Spring Rolls (5 pcs)",
    category: "Spring rolls",
    description: "Crispy or frozen, packed with savory filling.",
    price: 20000,
   image: rolls,
    types: [],
    toppings: []
  },
  {
    id: 27,
    name: "Savory Spring Rolls (5 pcs)",
    category: "Spring rolls",
    description: "Crispy or frozen, packed with savory filling.",
    price: 20000,
   image: roll1,
    types: [],
    toppings: []
  },
  {
    id: 28,
    name: "Savory Spring Rolls (5 pcs)",
    category: "Spring rolls",
    description: "Crispy or frozen, packed with savory filling.",
    price: 20000,
   image: roll2,
    types: [],
    toppings: []
  },
  {
    id: 29,
    name: "Savory Spring Rolls (5 pcs)",
    category: "Spring rolls",
    description: "Crispy or frozen, packed with savory filling.",
    price: 20000,
   image: roll3,
    types: [],
    toppings: []
  },
  {
    id: 30,
    name: "Savory Spring Rolls (5 pcs)",
    category: "Spring rolls",
    description: "Crispy or frozen, packed with savory filling.",
    price: 20000,
   image: roll5,
    types: [],
    toppings: []
  },
  {
    id: 31,
    name: "Savory Spring Rolls (5 pcs)",
    category: "Spring rolls",
    description: "Crispy or frozen, packed with savory filling.",
    price: 20000,
   image: roll6,
    types: [],
    toppings: []
  },
  {
    id: 32,
    name: "Ring Donuts (15pcs per pack)",
    category: "Ring donut",
    description: "Soft, fluffy donuts. Choose your favorite finish.",
    price: 6000,
    image: donut1,
    types: ["Glazed", "Chocolate", "Strawberry"],
    toppings: []
  },
  {
    id: 33,
    name: "Ring Donuts (15pcs per pack)",
    category: "Ring donut",
    description: "Soft, fluffy donuts. Choose your favorite finish.",
    price: 6000,
    image: donut2,
    types: ["Glazed", "Chocolate", "Strawberry"],
    toppings: []
  },
];

const categories = [
  "All",
  "Bento",
  "Cupcakes",
  "Spring rolls",
  "Loaf cakes",
  "Cake slice",
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

        <div className="flex flex-col md:flex-row gap-8">
          <aside className="hidden md:block w-72 shrink-0">
            <div className="bg-white rounded-2xl shadow-sm p-6 sticky top-24">
              <div className="mb-6">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input type="text" placeholder="Search for cakes, pastries..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="w-full pl-12 pr-4 py-3 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500" />
                </div>
              </div>
              <div className="space-y-2 ">
                {categories.map(category => (
                  <button key={category} onClick={() => setSelectedCategory(category)} className={`w-full text-left px-5 py-3 rounded-xl transition-all font-medium ${selectedCategory === category ? 'bg-purple-700 text-white shadow-lg' : 'text-gray-700 hover:bg-purple-50'}`}>
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </aside>

          <main className="flex-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6  ">
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