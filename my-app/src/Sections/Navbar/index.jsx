import { NavbarContainer } from "@/Sections/Navbar/components/NavbarContainer";

export const Navbar = () => {
  return (
    <nav className="fixed box-border caret-transparent flex justify-center z-50 pt-6 px-4 top-0 inset-x-0">
      <NavbarContainer />
    </nav>
  );
};