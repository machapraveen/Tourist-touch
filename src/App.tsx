import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Header } from './components/layout/Header';
import { HeroSection } from './components/home/HeroSection';
import { FeatureGrid } from './components/home/FeatureGrid';
import { PopularDestinations } from './components/home/PopularDestinations';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Header />
        <HeroSection />
        <FeatureGrid />
        <PopularDestinations />
      </div>
    </Router>
  );
}

export default App;