import { SearchButton } from "@/Sections/Navbar/components/SearchButton";
import { CartButton } from "@/Sections/Navbar/components/CartButton";
import { MobileMenuButton } from "@/Sections/Navbar/components/MobileMenuButton";

export const NavbarActions = () => {
  return (
    <div className="items-center box-border caret-transparent gap-x-4 flex gap-y-4">
      <SearchButton />
      <CartButton />
      <MobileMenuButton />
      
    </div>
  );
};