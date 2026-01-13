import { HeroVideo } from "@/Sections/HeroSection/Components/HeroVideo";
import { HeroContent } from "@/Sections/HeroSection/Components/HeroContent";


export const HeroSection = () => {
  return (
    <section className="relative box-border caret-transparent h-175 w-full overflow-hidden">
      <HeroVideo />
      <HeroContent />
    </section>
  );
};