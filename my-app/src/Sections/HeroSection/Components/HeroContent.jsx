import { HeroButton } from "@/Sections/HeroSection/components/HeroButton";

export const HeroContent = () => {
  return (
    <div className="relative text-white items-center box-border caret-transparent flex flex-col h-full justify-center text-center z-10 pt-35 px-15">
      <div className=" text-sm font-medium backdrop-blur-md bg-[oklab(0.999994_0.0000455678_0.0000200868_/_0.1)] box-border caret-transparent tracking-[1.4px] px-6 py-2 rounded-full mb-8 border border-[oklab(0.999994_0.0000455678_0.0000200868_/_0.2)]">
        Est. 2025 • The 3Bs Bakery
      </div>
      <h1 className="text-5xl font-bold box-border caret-transparent tracking-[-1.2px] leading-[48px] mb-6 font-serif md:text-8xl md:leading-[96px] md:tracking-[-2.4px]">
        Taste the
        <br />
        <span className="text-transparent bg-clip-text bg-[linear-gradient(to_right,lab(87.4504_19.6_-6.46662)_0%,lab(87.8405_13.4282_-18.7159)_100%)]">
          Extraordinary
        </span>
      </h1>
      <p className="text-[lab(91.6229_-0.159115_-2.26791)] text-lg box-border caret-transparent leading-[29.25px] max-w-xl mb-10 md:text-xl md:leading-[32.5px]">
        Handcrafted pastries, bespoke cakes, and an experience that lingers long
        after the last bite.
      </p>
      <div className="items-center box-border caret-transparent gap-x-4 flex justify-center gap-y-4">
        <HeroButton />
        <a
          href="/about"
          className="text-sm font-medium backdrop-blur-md bg-[oklab(0.999994_0.0000455678_0.0000200868_/_0.1)] box-border caret-transparent px-6 py-3 rounded-full border border-[oklab(0.999994_0.0000455678_0.0000200868_/_0.2)] hover:bg-[oklab(0.999994_0.0000455678_0.0000200868_/_0.2)] transition-all"
        >
          About Us
        </a>
      </div>
    </div>
  );
};