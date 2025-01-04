import React from 'react';
import { MapPin, Calendar, Bot } from 'lucide-react';
import { Button } from '../ui/Button';
import { TravelerAnimation } from '../animations/TravelerAnimation';
import { FloatingElements } from '../animations/FloatingElements';

export const HeroSection = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-blue-50 to-white py-16 sm:py-24">
      <FloatingElements />
      <div className="relative">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl animate-fade-in">
            <span className="block">Travel Smarter with</span>
            <span className="block text-blue-600 animate-gradient-text">AI-Powered Assistance</span>
          </h1>
          <p className="mx-auto mt-3 max-w-md text-base text-gray-500 sm:text-lg md:mt-5 md:max-w-3xl md:text-xl animate-fade-in-up">
            Plan perfect trips, earn rewards, and create unforgettable memories with our intelligent travel companion.
          </p>
          <div className="mx-auto mt-5 max-w-md sm:flex sm:justify-center md:mt-8 animate-fade-in-up delay-300">
            <Button 
              size="lg" 
              className="w-full sm:w-auto hover:scale-105 transition-transform"
            >
              Start Planning
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="mt-3 w-full sm:mt-0 sm:ml-3 sm:w-auto hover:scale-105 transition-transform"
            >
              Watch Demo
            </Button>
          </div>
        </div>
      </div>
      <TravelerAnimation />
    </div>
  );
};