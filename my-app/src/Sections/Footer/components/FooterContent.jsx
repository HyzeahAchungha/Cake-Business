import { FooterBrand } from "@/Sections/Footer/components/FooterBrand";
import { FooterColumn } from "@/Sections/Footer/components/FooterColumn";

export const FooterContent = () => {
  return (
    <div className="relative box-border caret-transparent gap-x-12 grid grid-cols-[repeat(1,minmax(0px,1fr))] max-w-none gap-y-12 w-full z-10 mb-24 mx-auto px-4 md:grid-cols-[repeat(4,minmax(0px,1fr))] md:max-w-screen-xl">
      <FooterBrand />
      <FooterColumn
        title="Explore"
        variant="explore"
        links={[
          { text: "Shop", href: "https://www.the3bsbakery.store/shop" },
          { text: "Our Story", href: "https://www.the3bsbakery.store/about" },
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
      <FooterColumn
        title="Sweet Updates"
        variant="newsletter"
        newsletterDescription="Subscribe for new flavors and exclusive discounts."
      />
    </div>
  );
};