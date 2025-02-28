import React from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import "./styles/App.css";

const App = () => {
  return (
    <div className="app-container">
      <Header />
      <main className="main-content">
        <HeroSection />
        <Skills />
        <Experience />
        <Projects />
      </main>
      <Footer />
    </div>
  );
};

export default App;