import { useState } from "react";
import Characters from "./components/Characters";
import Cards from "./components/Cards";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import BackToTopButton from "./components/BackToTopButton";
import About from "./components/About";
import Footer from "./components/Footer";
import History from "./components/History";
import Download from "./components/Download";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Characters />
      <History />
      <Cards />
      <Download />
      <Footer />
      <BackToTopButton />
    </>
  );
}

export default App;
