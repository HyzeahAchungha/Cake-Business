import { Link } from 'react-router-dom';
export const DesktopMenu = () => {
  return (
    <div className="text-[lab(35.6337_-1.58697_-10.8425)] text-sm font-medium items-center box-border caret-transparent gap-x-6 hidden md:flex">


      <Link to="/shop" className="box-border caret-transparent hover:text-[lab(24.9401_45.2703_-51.2728)] transition-colors">Shop</Link>

      <Link to="/ourstories" className="box-border caret-transparent hover:text-[lab(24.9401_45.2703_-51.2728)] transition-colors"> Our Story</Link>
      <Link to="/gallery" className="box-border caret-transparent hover:text-[lab(24.9401_45.2703_-51.2728)] transition-colors">Gallery</Link>


    </div>
  );
};