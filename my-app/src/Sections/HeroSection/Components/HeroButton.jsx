import shoppingbag from "../../../../src/assets/shopping-bag.svg";
import { Link } from 'react-router-dom';
export const HeroButton = () => {
  return (
   
      <Link to="/shop" className="relative text-[lab(24.9401_45.2703_-51.2728)] text-sm font-bold bg-white box-border caret-transparent block leading-5 overflow-hidden px-6 py-3 rounded-[3.35544e+07px]"><span className="relative items-center box-border caret-transparent gap-x-2 flex gap-y-2 z-10">
        <img
          src={shoppingbag}
          alt="Icon"
          className="box-border caret-transparent h-4 w-4"
        />
        Shop
      </span></Link>
      
   
  );
};