import React, { useState } from 'react';
import category1 from '@/assets/images/category1.jpg';
import category2 from '@/assets/images/category2.jpg';
import category3 from '@/assets/images/category3.jpg';
import category4 from '@/assets/images/category4.jpg';
import category5 from '@/assets/images/category5.jpg';
import category6 from '@/assets/images/category6.jpg';
import category7 from '@/assets/images/category7.jpg';
import category8 from '@/assets/images/category8.jpg';
import category9 from '@/assets/images/category9.jpg';
import category10 from '@/assets/images/category10.jpg';
import category11 from '@/assets/images/category11.jpg';
import category12 from '@/assets/images/category12.jpg';
import category13 from '@/assets/images/category13.jpg';
import category14 from '@/assets/images/category14.jpg';
import motion1 from '@/assets/videos/motion1.mp4';
import motion1Thumb from '@/assets/images/cup-cake.jpg'

const galleryItems = [
  { id: 1, type: 'image', src: category1, alt: 'Bento cake with pink frosting', height: 'tall' },
  { id: 3, type: 'image', src: category2, alt: 'Birthday cake with candles', height: 'medium' },
  { id: 2, type: 'image', src: category3, alt: 'Bento cakes set', height: 'short' },
  { id: 4, type: 'image', src: category4, alt: 'Custom message cake', height: 'medium' },


  { id: 5, type: 'image', src: category5, alt: 'Purple heart cake', height: 'tall' },
  { id: 6, type: 'image', src: category6, alt: 'Pink and white split cake', height: 'tall' },
  { id: 7, type: 'image', src: category7, alt: 'Minnie Mouse cake', height: 'tall' },
  { id: 8, type: 'image', src: category8, alt: 'Frozen themed cake', height: 'tall' },


  { id: 9, type: 'image', src: category9, alt: 'Proposal cakes', height: 'short' },
  { id: 10, type: 'image', src: category10, alt: 'Pink frosted cake', height: 'medium' },
  { id: 11, type: 'image', src: category1, alt: 'Gold and black cake', height: 'tall' },
  { id: 12, type: 'video', src: motion1, alt: 'Rainbow cake decoration', thumbnail: motion1Thumb, height: 'medium' },

 { id: 13, type: 'image', src: category12, alt: 'Princess castle cake', height: 'medium' },
  { id: 14, type: 'video', src: 'https://youtu.be/71MMlZ2BfwE', alt: 'Christmas tree cake', thumbnail: 'https://picsum.photos/400/500?random=6', height: 'tall' },
{ id: 15, type: 'image', src: category13, alt: 'HBD heart cake', height: 'medium' },
  { id: 16, type: 'video', src: 'https://picsum.photos/400/520?random=14', alt: 'Welcome baby Eliana', thumbnail: 'https://picsum.photos/400/520?random=14', height: 'tall' },

 
  { id: 17, type: 'video', src: 'https://picsum.photos/400/380?random=17', alt: 'Thank you motion', thumbnail: 'https://picsum.photos/400/380?random=17', height: 'short' },
  { id: 18, type: 'image', src: category14, alt: 'Blue message cake', height: 'tall' },
  { id: 19, type: 'image', src: category11, alt: 'Christmas wreath cake', height: 'medium' },
   { id: 20, type: 'video', src: 'https://picsum.photos/400/450?random=10', alt: 'Happy birthday motion cake', thumbnail: 'https://picsum.photos/400/450?random=10', height: 'medium' },
  
];

// const GalleryItem = ({ item, onClick }) => {
//   return (
//     <div
//       onClick={() => onClick(item)}
//       className="relative group cursor-pointer overflow-hidden rounded-2xl bg-gray-100"
//       style={{
//         gridRowEnd: `span ${Math.floor(Math.random() * 2) + 20}`
//       }}
//     >
//       <img
//         src={item.type === 'video' ? item.thumbnail : item.src}
//         alt={item.alt}
//         className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
//       />

//       {/* Overlay on hover */}
//       <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />

//       {/* Motion badge for videos */}
//       {item.type === 'video' && (
//         <div className="absolute top-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
//           Motion
//         </div>
//       )}
//     </div>
//   );
// };
const GalleryItem = ({ item}) => {
  return (
    <div
      className="relative group cursor-pointer overflow-hidden rounded-2xl bg-gray-100"
      style={{
        gridRowEnd: `span ${Math.floor(Math.random() * 2) + 20}`
      }}
    >
      {item.type === 'video' ? (
        <video
          src={item.src}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      ) : (
        <img
          src={item.src}
          alt={item.alt}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      )}

      {/* Purple gradient overlay from bottom on hover */}
      <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-purple-700/0 group-hover:from-purple-700/60 to-transparent transition-all duration-300" />

      {/* Motion badge for videos */}
      {item.type === 'video' && (
        <div className="absolute top-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
          Motion
        </div>
      )}
    </div>
  );
};
const Lightbox = ({ item, onClose, onNext, onPrev }) => {
  if (!item) return null;

  return (
    <div
      className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-6 right-6 text-white hover:text-gray-300 transition-colors"
      >
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      <button
        onClick={(e) => { e.stopPropagation(); onPrev(); }}
        className="absolute left-6 text-white hover:text-gray-300 transition-colors"
      >
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={(e) => { e.stopPropagation(); onNext(); }}
        className="absolute right-6 text-white hover:text-gray-300 transition-colors"
      >
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      <div className="max-w-5xl max-h-[90vh]" onClick={(e) => e.stopPropagation()}>
        {item.type === 'video' ? (
          <div className="relative">
            <video
              src={item.src}
              controls
              autoPlay
              className="max-w-full max-h-[90vh] rounded-lg"
            >
              Your browser does not support the video tag.
            </video>
          </div>
        ) : (
          <img
            src={item.src}
            alt={item.alt}
            className="max-w-full max-h-[90vh] rounded-lg"
          />
        )}
      </div>
    </div>
  );
};

export default function GalleryPage() {
  const [selectedItem, setSelectedItem] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (item) => {
    const index = galleryItems.findIndex(i => i.id === item.id);
    setCurrentIndex(index);
    setSelectedItem(item);
  };

  const closeLightbox = () => {
    setSelectedItem(null);
  };

  const nextItem = () => {
    const nextIndex = (currentIndex + 1) % galleryItems.length;
    setCurrentIndex(nextIndex);
    setSelectedItem(galleryItems[nextIndex]);
  };

  const prevItem = () => {
    const prevIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length;
    setCurrentIndex(prevIndex);
    setSelectedItem(galleryItems[prevIndex]);
  };

  return (
    <div className="min-h-screen bg-white pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-purple-700 font-bold uppercase tracking-widest text-sm mb-4">Portfolio</p>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            The 2025 Collection
          </h1>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            A curated showcase of our finest creations from the past year. From bespoke wedding tiers to whimsical birthday treats.
          </p>
        </div>

        {/* Masonry Grid */}
        <div
          className="grid gap-4"
          style={{
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gridAutoRows: '10px'
          }}
        >
          {galleryItems.map((item) => (
            <GalleryItem
              key={item.id}
              item={item}
              onClick={openLightbox}
            />
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <Lightbox
        item={selectedItem}
        onClose={closeLightbox}
        onNext={nextItem}
        onPrev={prevItem}
      />
    </div>
  );
}