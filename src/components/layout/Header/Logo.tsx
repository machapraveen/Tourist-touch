import React from 'react';
import { Link } from 'react-router-dom';
import { Compass } from 'lucide-react';

export const Logo: React.FC = () => {
  return (
    <Link 
      to="/" 
      className="flex items-center space-x-2 group"
    >
      <Compass className="h-8 w-8 text-blue-600 transition-transform duration-300 group-hover:rotate-45" />
      <span className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
        Tourist Touch
      </span>
    </Link>
  );
};