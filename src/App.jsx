import { useState } from "react";
import Navigtaion from "./components/Navigtaion";
import Hero from "./components/Hero";
import Util from "./components/Util";
import About from "./components/About";
import Reviews from "./components/Reviews";
import Footer from "./components/Footer";
function App() {
  return (
    <main className="bg-custom-text-light">
      <Navigtaion />
      <Hero />
      <Util />
      <About />
      <Reviews />
      <Footer />
    </main>
  );
}

export default App;
