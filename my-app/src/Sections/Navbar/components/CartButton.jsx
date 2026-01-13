import shoppingbag from "@/assets/shopping-bag.svg";
import { useCart } from "@/context/CartContext";
export const CartButton = () => {
  const { cartItems, setIsCartOpen } = useCart();
  return (
    <div className="relative box-border caret-transparent">
      <button onClick={() => setIsCartOpen(true)} className="text-[lab(35.6337_-1.58697_-10.8425)] bg-transparent caret-transparent text-center p-2 rounded-[30px]">
        <img
          src={shoppingbag}
          alt="Icon"
          className="box-border caret-transparent h-5 w-5"
        />

        {cartItems.length > 0 && (
          <span className="absolute -top-1 -right-1 bg-purple-700 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
            {cartItems.length}
          </span>
        )}
      </button>
    </div>
  );
};




