import React from "react";

import "./AppDesktop.css";
import "./AppMobile.css";
import "./AppTablet.css";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Portfolio from "./components/portfolio/Portfolio";
import Skills from "./components/skills/Skills";

function App() {
  return (
      <div className="App">
        <Header />
        <div id="home-transition">
          <Home />
          <div id="transition-1" className='transition'></div>
        </div>
        <About />
        <div id="transition-2" className='transition'></div>
        <Skills />
        <div id="transition-3" className='transition'></div>
        <Portfolio />
        <div id="transition-4" className='transition'></div>
        <Contact />
        <Footer />
      </div>
  );
}

export default App;
