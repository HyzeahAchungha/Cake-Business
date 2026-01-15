
import { FooterContent } from "@/Sections/Footer/components/FooterContent";
import { FooterCopyright } from "@/Sections/Footer/components/FooterCopyright";

export const Footer = () => {
  return (
    <>



      <footer className="relative text-[lab(93.3333_6.97437_-9.83434)] bg-[lab(14.8253_38.9005_-44.5861)] box-border caret-transparent overflow-hidden pt-28 pb-10 ">
        <FooterContent />
        <FooterCopyright />
        <div className="absolute left-0 bottom-0 w-full flex justify-center opacity-5 pointer-events-none overflow-hidden">
          <span className="
          text-white font-black font-ui_serif
    text-2xl sm:text-4xl md:text-9xl
    tracking-tight md:tracking-[-6.4px]
    leading-none
    whitespace-nowrap
          ">
            Yummy Bites Only
          </span>
        </div>
      </footer>
    </>
  );
};