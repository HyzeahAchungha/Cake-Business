import { HeroVideo } from "./Components/HeroVideo";
import { HeroContent } from "./Components/HeroContent";

export const HeroSection = () => {
  return (
    <section className="relative box-border caret-transparent h-[700px] w-full overflow-hidden">
      <HeroVideo />
      <HeroContent />
    </section>
  );
};