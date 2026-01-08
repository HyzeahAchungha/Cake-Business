import { CategoryCard } from "@/Sections/CategorySection/components/CategoryCard";

export const CategoryCarousel = () => {
  return (
    <div className="relative box-border caret-transparent w-full overflow-hidden">
      <div className="box-border caret-transparent gap-x-12 flex gap-y-12 w-max px-4 animate-[scroll_40s_linear_infinite]">
        <CategoryCard
          category="bento"
          title="Bento Cakes"
          imageUrl="https://www.the3bsbakery.store/_next/image?url=%2Fimages%2Fbento-cake.png&w=3840&q=75"
        />
        <CategoryCard
          category="wedding"
          title="Wedding"
          imageUrl="https://www.the3bsbakery.store/_next/image?url=%2Fimages%2Fwedding.jpg&w=3840&q=75"
        />
        <CategoryCard
          category="cupcakes"
          title="Cupcakes"
          imageUrl="https://www.the3bsbakery.store/_next/image?url=%2Fimages%2Fcup-cake.jpg&w=3840&q=75"
        />
        <CategoryCard
          category="custom"
          title="Custom"
          imageUrl="https://www.the3bsbakery.store/_next/image?url=%2Fimages%2Fcustom.jpg&w=3840&q=75"
        />
        <CategoryCard
          category="donuts"
          title="Donuts"
          imageUrl="https://www.the3bsbakery.store/_next/image?url=%2Fimages%2Fdonut.png&w=3840&q=75"
        />
        <CategoryCard
          category="kiddies"
          title="Kiddies"
          imageUrl="https://www.the3bsbakery.store/_next/image?url=%2Fimages%2Fkiddies.jpg&w=3840&q=75"
        />
        <CategoryCard
          category="spring-rolls"
          title="Spring Rolls"
          imageUrl="https://www.the3bsbakery.store/_next/image?url=%2Fimages%2Fspring-roll.png&w=3840&q=75"
        />
        <CategoryCard
          category="loaf"
          title="Loaf Cakes"
          imageUrl="https://www.the3bsbakery.store/_next/image?url=%2Fimages%2Floaf.jpg&w=3840&q=75"
        />
        <CategoryCard
          category="slices"
          title="Slices"
          imageUrl="https://www.the3bsbakery.store/_next/image?url=%2Fimages%2Fslice.jpg&w=3840&q=75"
        />
        {/* Duplicate for infinite scroll effect */}
        <CategoryCard
          category="bento"
          title="Bento Cakes"
          imageUrl="https://www.the3bsbakery.store/_next/image?url=%2Fimages%2Fbento-cake.png&w=3840&q=75"
        />
        <CategoryCard
          category="wedding"
          title="Wedding"
          imageUrl="https://www.the3bsbakery.store/_next/image?url=%2Fimages%2Fwedding.jpg&w=3840&q=75"
        />
        <CategoryCard
          category="cupcakes"
          title="Cupcakes"
          imageUrl="https://www.the3bsbakery.store/_next/image?url=%2Fimages%2Fcup-cake.jpg&w=3840&q=75"
        />
      </div>
      <div className="absolute bg-[linear-gradient(to_right_in_oklab,rgb(255,255,255)_0%,rgba(0,0,0,0)_100%)] box-border caret-transparent h-full pointer-events-none w-24 z-10 left-0 top-0"></div>
      <div className="absolute bg-[linear-gradient(to_left_in_oklab,rgb(255,255,255)_0%,rgba(0,0,0,0)_100%)] box-border caret-transparent h-full pointer-events-none w-24 z-10 right-0 top-0"></div>
    </div>
  );
};