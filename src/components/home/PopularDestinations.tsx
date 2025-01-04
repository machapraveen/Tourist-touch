import React from 'react';
import { ScrollReveal } from '../animations/ScrollReveal';

const destinations = [
  {
    name: 'Taj Mahal, Agra',
    image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=600&q=80',
    description: 'A testament to eternal love and architectural brilliance',
  },
  {
    name: 'Varanasi Ghats',
    image: 'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&w=600&q=80',
    description: 'Spiritual heart of India along the sacred Ganges',
  },
  {
    name: 'Jaipur Palace',
    image: 'https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=600&q=80',
    description: 'Pink City\'s royal heritage and vibrant culture',
  },
];

export const PopularDestinations = () => {
  return (
    <div className="bg-gray-50 py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
            Popular Destinations
          </h2>
        </ScrollReveal>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {destinations.map((destination, index) => (
            <ScrollReveal 
              key={destination.name}
              direction={index % 2 === 0 ? 'left' : 'right'}
            >
              <div className="relative overflow-hidden rounded-lg shadow-lg group cursor-pointer transform transition-all duration-300 hover:scale-105">
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
                  <div className="absolute bottom-0 p-6">
                    <h3 className="text-xl font-semibold text-white group-hover:text-blue-300 transition-colors">
                      {destination.name}
                    </h3>
                    <p className="text-sm text-gray-200 mt-2 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all">
                      {destination.description}
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </div>
  );
};