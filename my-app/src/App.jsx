import React from 'react'
import { Navbar } from "@/Sections/Navbar";
import { Main } from "@/Components/Main";
import { Footer } from "@/Sections/Footer";

import './App.css'


function App() {


  return (
    <div className="text-zinc-900 text-base not-italic normal-nums font-normal accent-auto bg-white box-border caret-transparent min-h-screen">
      <Navbar />
      <Main />
      <Footer />
      <div className="absolute box-border caret-transparent block"></div>
    </div>
  );
}

export default App
