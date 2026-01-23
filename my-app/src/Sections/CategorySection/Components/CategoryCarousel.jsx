import { CategoryCard } from "@/Sections/CategorySection/Components/CategoryCard";
import category1 from '@/assets/images/category1.jpg';
import category2 from '@/assets/images/category2.jpg';
import category3 from '@/assets/images/category3.jpg';
import category4 from '@/assets/images/category4.jpg';
import donut2 from '@/assets/images/donut2.jpeg';
import category7 from '@/assets/images/category7.jpg';
import cakebana13 from '@/assets/images/cakebana13.jpg';
import cupcake17 from '@/assets/images/cupcake17.jpg';
import slice3 from '@/assets/images/slice3.jpeg';
import rolls from '@/assets/images/rolls.jpeg';

export const CategoryCarousel = () => {
  return (
    <div className="relative box-border caret-transparent w-full overflow-hidden">
      <div className="box-border caret-transparent gap-x-12 flex gap-y-12 w-max px-4 animate-[scroll_40s_linear_infinite]">
        <CategoryCard
          category="bento"
          title="Bento Cakes"
          imageUrl={category1}
        />
        <CategoryCard
          category="wedding"
          title="Wedding"
          imageUrl={category2}
        />
        <CategoryCard
          category="cupcakes"
          title="Cupcakes"
          imageUrl={cupcake17}
        />
        <CategoryCard
          category="custom"
          title="Custom"
          imageUrl={category3}
        />
        <CategoryCard
          category="donuts"
          title="Donuts"
          imageUrl={donut2}
        />
        <CategoryCard
          category="kiddies"
          title="Kiddies"
          imageUrl={category7}
        />
        <CategoryCard
          category="spring-rolls"
          title="Spring Rolls"
          imageUrl={rolls }
        />
        <CategoryCard
          category="loaf"
          title="Banana Cakes"
          imageUrl={cakebana13}
        />
        <CategoryCard
          category="slices"
          title="Slices"
          imageUrl={slice3}
        />
        {/* Duplicate for infinite scroll effect */}
        <CategoryCard
          category="bento"
          title="Bento Cakes"
          imageUrl={category4}
        />
        <CategoryCard
          category="birthday"
          title="birthday"
          imageUrl={category1}
        />
        <CategoryCard
          category="cupcakes"
          title="Cupcakes"
          imageUrl={cupcake17}
        />
      </div>
      <div className="absolute bg-[linear-gradient(to_right_in_oklab,rgb(255,255,255)_0%,rgba(0,0,0,0)_100%)] box-border caret-transparent h-full pointer-events-none w-24 z-10 left-0 top-0"></div>
      <div className="absolute bg-[linear-gradient(to_left_in_oklab,rgb(255,255,255)_0%,rgba(0,0,0,0)_100%)] box-border caret-transparent h-full pointer-events-none w-24 z-10 right-0 top-0"></div>
    </div>
  );
};