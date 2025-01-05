import React from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Header />
      <div>
        <HeroSection />
        <Skills />
        <Experience />
        <Projects />
      </div>
      <Footer />
    </>
  );
};

export default App;
