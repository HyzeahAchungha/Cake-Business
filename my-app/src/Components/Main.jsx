import { HeroSection } from "@/Sections/HeroSection";
import { VideoSection } from "@/Sections/VideoSection";
import { CategorySection } from "@/Sections/CategorySection";


export const Main = () => {
  return (
    <main className="bg-white box-border caret-transparent relative">
      <HeroSection />
      <VideoSection />
      <CategorySection />
      
    </main>
  );
};