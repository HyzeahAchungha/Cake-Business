// export const Footer = () => {
//   return (
//     <>
//       {/* Add spacer before footer to push it down */}
//       <div className="relative bg-white pt-32 pb-20 md:pt-40 md:pb-32">
//         {/* This creates the white space where drips will be visible */}
//       </div>

//       {/* Footer */}
//       <footer className="relative bg-purple-900 text-white pt-16 pb-8">
//         <div className="max-w-screen-xl mx-auto px-4">
//           <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
//             {/* The 3Bs Bakery */}
//             <div>
//               <h3 className="text-2xl font-bold mb-4">The 3Bs Bakery</h3>
//               <p className="text-purple-200">
//                 Handcrafted pastries and bespoke cakes that linger long after the last bite.
//               </p>
//             </div>

//             {/* Explore */}
//             <div>
//               <h3 className="text-xl font-bold mb-4">Explore</h3>
//               <ul className="space-y-2">
//                 <li><a href="#" className="text-purple-200 hover:text-white">Shop</a></li>
//                 <li><a href="#" className="text-purple-200 hover:text-white">Our Story</a></li>
//               </ul>
//             </div>

//             {/* Contact */}
//             <div>
//               <h3 className="text-xl font-bold mb-4">Contact</h3>
//               <ul className="space-y-3 text-purple-200">
//                 <li className="flex items-start gap-2">
//                   <span>📍</span>
//                   <span>Toma-Michel Camp (Betterbest Street)</span>
//                 </li>
//                 <li className="flex items-center gap-2">
//                   <span>📞</span>
//                   <span>+233 55 725 5359</span>
//                 </li>
//                 <li className="flex items-center gap-2">
//                   <span>✉️</span>
//                   <span>the.3bsbakery606@gmail.com</span>
//                 </li>
//               </ul>
//             </div>

//             {/* Sweet Updates */}
//             <div>
//               <h3 className="text-xl font-bold mb-4">Sweet Updates</h3>
//               <p className="text-purple-200 mb-4">Subscribe for new flavors and exclusive discounts.</p>
//               <div className="flex gap-2">
//                 <input 
//                   type="email" 
//                   placeholder="Your email"
//                   className="flex-1 px-4 py-2 rounded bg-purple-800 text-white placeholder-purple-300 border border-purple-700"
//                 />
//                 <button className="px-6 py-2 bg-pink-500 hover:bg-pink-600 rounded font-semibold">
//                   Go
//                 </button>
//               </div>
//             </div>
//           </div>

//           {/* Copyright */}
//           <div className="border-t border-purple-800 pt-8 text-center text-purple-300">
//             <p>© 2026 The 3Bs Bakery. All rights reserved.</p>
//           </div>
//         </div>
//       </footer>
//     </>
//   );
// };
import { FooterContent } from "@/Sections/Footer/components/FooterContent";
import { FooterCopyright } from "@/Sections/Footer/components/FooterCopyright";

export const Footer = () => {
  return (
    <>
    


      <footer className="relative text-[lab(93.3333_6.97437_-9.83434)] bg-[lab(14.8253_38.9005_-44.5861)] box-border caret-transparent overflow-hidden pt-28 pb-10 ">
        <FooterContent />
        <FooterCopyright />
        <div className="absolute box-border caret-transparent flex justify-center opacity-5 pointer-events-none w-full overflow-hidden left-0 bottom-0">
          <span className="text-white text-[37.5px] font-black box-border caret-transparent block tracking-[-1.875px] leading-[37.5px] text-nowrap font-ui_serif md:text-9xl md:tracking-[-6.4px] md:leading-[128px]">
            Yummy Bites Only
          </span>
        </div>
      </footer>
    </>
  );
};