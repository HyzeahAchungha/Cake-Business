import { FooterBrand } from "@/Sections/Footer/components/FooterBrand";
import { FooterColumn } from "@/Sections/Footer/components/FooterColumn";

export const FooterContent = () => {
  return (
    <div className="relative z-10
  grid grid-cols-1
  gap-y-12
  gap-x-12
  px-4
  max-w-7xl
  mx-auto
  md:grid-cols-4
  text-center md:text-left
">
      <FooterBrand />
      <FooterColumn
        title="Explore"
        variant="explore"
        links={[
          { text: "Shop", href: "https://cake-business-1.onrender.com/shop" },
          { text: "Our Story", href: "https://cake-business-1.onrender.com/ourstories" },
           { text: "Gallery", href: "https://cake-business-1.onrender.com/gallery" },
        ]}
      />
      <div className="flex justify-center md:justify-start">
        <FooterColumn
          title="Contact"
          variant="contact"
          contactInfo={{
            address: "Buea cameroon)",
            phone: "+237 678471601",
            email: "hyzeala28\n@gmail.com",
          }}
        />
      </div>

      {/* Sweet Updates */}
            <div>
              <h3 className="text-xl font-bold mb-4">Sweet Updates</h3>
              <p className="text-purple-200 mb-4">Subscribe for new flavors and exclusive discounts.</p>
              <div className="flex flex-col sm:flex-row gap-2">
                <input 
                  type="email" 
                  placeholder="Your email"
                  className="flex-1 min-w-0 px-4 py-2 rounded bg-purple-800 text-white placeholder-purple-300 border border-purple-700"
                />
                <button className="px-4 py-2 sm:px-6 sm:py-2 bg-pink-500 hover:bg-pink-600 rounded font-semibold text-sm">
                  Go
                </button>
              </div>
            </div>
    </div>
  );
};


