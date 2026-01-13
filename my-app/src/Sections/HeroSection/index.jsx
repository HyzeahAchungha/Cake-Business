import { HeroVideo } from "@/Sections/HeroSection/components/HeroVideo";
import { HeroContent } from "@/Sections/HeroSection/components/HeroContent";


export const HeroSection = () => {
  return (
    <section className="relative box-border caret-transparent h-175 w-full overflow-hidden">
      <HeroVideo />
      <HeroContent />
    </section>
  );
};