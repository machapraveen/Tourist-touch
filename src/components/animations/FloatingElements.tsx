import React from 'react';
import { Plane, Cloud, MapPin, Camera, Sun } from 'lucide-react';

export const FloatingElements = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Floating planes */}
      <div className="animate-float-diagonal-1 absolute top-20 left-10">
        <Plane className="h-8 w-8 text-blue-400 transform -rotate-45" />
      </div>
      <div className="animate-float-diagonal-2 absolute top-40 right-20">
        <Plane className="h-6 w-6 text-blue-300 transform rotate-45" />
      </div>
      
      {/* Floating clouds */}
      <div className="animate-float-slow absolute top-12 left-1/4">
        <Cloud className="h-10 w-10 text-gray-200" />
      </div>
      <div className="animate-float-slower absolute top-24 right-1/3">
        <Cloud className="h-8 w-8 text-gray-300" />
      </div>
      
      {/* Floating icons */}
      <div className="animate-bounce-slow absolute bottom-32 left-16">
        <MapPin className="h-6 w-6 text-red-400" />
      </div>
      <div className="animate-bounce-slower absolute top-40 right-16">
        <Camera className="h-6 w-6 text-green-400" />
      </div>
      <div className="animate-spin-slow absolute top-20 right-1/4">
        <Sun className="h-8 w-8 text-yellow-400" />
      </div>
    </div>
  );
};