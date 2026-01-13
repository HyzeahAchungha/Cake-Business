import CategoryCarousel  from "../CategorySection/Components/CategoryCarousel";

export const CategorySection = () => {
  return (
    <section className="relative bg-white box-border caret-transparent z-30 pt-8 pb-8 md:pt-10 ">
      <div className="box-border caret-transparent max-w-none w-full mb-10 mx-auto px-4 md:max-w-screen-xl">
        <h2 className="text-[lab(24.9401_45.2703_-51.2728)] text-2xl font-bold box-border caret-transparent leading-9 text-center font-ui_serif md:text-5xl">
          Explore by Category
        </h2>
      </div>
      <div className="relative z-30 mb-2 md:mb-4">
        <CategoryCarousel />
      </div>
      
    
    </section>
  );
};