import { NavbarContainer } from "@/Sections/Navbar/components/NavbarContainer";
import CartSidebar from "@/Sections/Shop/components/CartSidebar";
import { useCart } from "@/context/CartContext";
import { useNavigate } from "react-router-dom";
export const Navbar = () => {
  const { cartItems, isCartOpen, setIsCartOpen, removeFromCart } = useCart();
  const navigate = useNavigate();

  const handleCheckout = () => {
    setIsCartOpen(false);
    navigate('/shop'); // Navigate to shop page
  };
  return (
    <>
    <nav className="fixed box-border caret-transparent flex justify-center z-50 pt-6 px-4 top-0 inset-x-0">
      <NavbarContainer />
    </nav>
    <CartSidebar 
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onRemove={removeFromCart}
        onCheckout={handleCheckout}
      />
      </>
  );
};