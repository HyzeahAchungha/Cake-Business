import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from "@/Sections/Navbar";
import { Main } from "@/Components/Main";
import { Footer } from "@/Sections/Footer";
import Shop from "@/Sections/Shop/components/ShopPage";
import Gallery from "@/Sections/Gallery/GalleryPage";
import { CartProvider } from "@/context/CartContext";
import OurStorypage from './Sections/Stories/OurStorypage';
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <div className="text-zinc-900 text-base not-italic normal-nums font-normal accent-auto bg-white box-border caret-transparent min-h-screen">
          <Navbar />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/ourstories" element={<OurStorypage />} />
            <Route path="/shop/:category" element={< Shop/>} />

          </Routes>
          <Footer />
          <div className="absolute box-border caret-transparent block"></div>
        </div>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App