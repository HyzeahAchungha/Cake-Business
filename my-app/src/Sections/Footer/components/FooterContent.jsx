import { FooterBrand } from "@/Sections/Footer/components/FooterBrand";
import { FooterColumn } from "@/Sections/Footer/components/FooterColumn";

export const FooterContent = () => {
  return (
    <div className="relative box-border caret-transparent gap-x-12 grid grid-cols-1 max-w-none gap-y-12 w-full z-10 mb-24 mx-auto px-4 md:grid-cols-4 md:max-w-7xl">
      <FooterBrand />
      <FooterColumn
        title="Explore"
        variant="explore"
        links={[
          { text: "Shop", href: "https://www.the3bsbakery.store/shop" },
          { text: "Our Story", href: "https://www.the3bsbakery.store/about" },
           { text: "Gallery", href: "https://www.the3bsbakery.store/about" },
        ]}
      />
      <FooterColumn
        title="Contact"
        variant="contact"
        contactInfo={{
          address: "Toma-Michel Camp\n(Betterbest Street)",
          phone: "+233 55 725 5359",
          email: "the.3bsbakery606\n@gmail.com",
        }}
      />
      {/* Sweet Updates */}
            <div>
              <h3 className="text-xl font-bold mb-4">Sweet Updates</h3>
              <p className="text-purple-200 mb-4">Subscribe for new flavors and exclusive discounts.</p>
              <div className="flex gap-2">
                <input 
                  type="email" 
                  placeholder="Your email"
                  className="flex-1 px-4 py-2 rounded bg-purple-800 text-white placeholder-purple-300 border border-purple-700"
                />
                <button className="px-6 py-2 bg-pink-500 hover:bg-pink-600 rounded font-semibold">
                  Go
                </button>
              </div>
            </div>
    </div>
  );
};


