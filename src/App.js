import React from "react";

import NavBar from "./components/Navbar";
import Hero from "./components/Hero";
import Category from "./components/Category";
import Products from "./components/Products";
import Latest from "./components/Latest";
import Offer from "./components/Offer"
import Testimonial from "./components/Testimonial"
import Brands from "./components/Brands";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Hero />
      <Category />
      <Products />
      <Latest />
      <Offer />
      <Testimonial />
      <Brands />
      <Footer />
    </div>
  );
}

export default App;
