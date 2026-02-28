import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import MenuSection from './components/MenuSection';
import HighlightsSection from './components/HighlightsSection';
import AboutSection from './components/AboutSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      <Navbar />
      <HeroSection />
      <MenuSection />
      <HighlightsSection />
      <AboutSection />
      <Footer />
    </div>
  );
}

export default App;
