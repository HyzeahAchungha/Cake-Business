import { FooterContent } from "@/Sections/Footer/components/FooterContent";
import { FooterCopyright } from "@/Sections/Footer/components/FooterCopyright";

export const Footer = () => {
  return (
    <footer className="relative text-[lab(93.3333_6.97437_-9.83434)] bg-[lab(14.8253_38.9005_-44.5861)] box-border caret-transparent overflow-hidden pt-24 pb-10">
      <FooterContent />
      <FooterCopyright />
      <div className="absolute box-border caret-transparent flex justify-center opacity-5 pointer-events-none w-full overflow-hidden left-0 bottom-0">
        <span className="text-white text-[37.5px] font-black box-border caret-transparent block tracking-[-1.875px] leading-[37.5px] text-nowrap font-ui_serif md:text-9xl md:tracking-[-6.4px] md:leading-[128px]">
          Yummy Bites Only
        </span>
      </div>
    </footer>
  );
};