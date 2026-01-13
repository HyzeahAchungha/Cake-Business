import { NavbarLogo } from "@/Sections/Navbar/components/NavbarLogo";
import { DesktopMenu } from "@/Sections/Navbar/components/DesktopMenu";
import { NavbarActions } from "@/Sections/Navbar/components/NavbarActions";

export const NavbarContainer = () => {
  return (
    <div className="relative items-center backdrop-blur-md bg-[oklab(0.999994_0.0000455677_0.0000200868/0.7)] shadow-[rgba(0,0,0,0.1)_0px_1px_2px] box-border caret-transparent flex justify-between px-6 py-4 rounded-full w-full max-w-7xl">
      <NavbarLogo />
      <DesktopMenu />
      <NavbarActions />
    </div>
  );
};