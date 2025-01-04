import React from 'react';
import { Link } from 'react-router-dom';
import { Compass, User, Menu } from 'lucide-react';
import { Button } from '../ui/Button';

export const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Compass className="h-8 w-8 text-blue-600" />
              <span className="text-xl font-bold text-gray-900">Tourist Touch</span>
            </Link>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/explore" className="text-gray-700 hover:text-blue-600">
              Explore
            </Link>
            <Link to="/itineraries" className="text-gray-700 hover:text-blue-600">
              Itineraries
            </Link>
            <Link to="/community" className="text-gray-700 hover:text-blue-600">
              Community
            </Link>
            <Button variant="primary">
              Get Started
            </Button>
          </nav>

          <div className="flex items-center space-x-4 md:hidden">
            <User className="h-6 w-6 text-gray-600" />
            <Menu className="h-6 w-6 text-gray-600" />
          </div>
        </div>
      </div>
    </header>
  );
};