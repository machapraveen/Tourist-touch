import React from 'react';
import { Menu, X } from 'lucide-react';
import { NavLink } from './NavLink';
import { Button } from '../../ui/Button';

interface MobileMenuProps {
  isOpen: boolean;
  onToggle: () => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onToggle }) => {
  return (
    <div className="md:hidden">
      <button onClick={onToggle} className="p-2">
        {isOpen ? (
          <X className="h-6 w-6 text-gray-600" />
        ) : (
          <Menu className="h-6 w-6 text-gray-600" />
        )}
      </button>

      {isOpen && (
        <div className="absolute top-16 left-0 right-0 bg-white shadow-lg py-4 px-6 space-y-4 animate-fade-in">
          <NavLink to="/explore">Explore</NavLink>
          <NavLink to="/itineraries">Itineraries</NavLink>
          <NavLink to="/community">Community</NavLink>
          <Button variant="primary" className="w-full">
            Get Started
          </Button>
        </div>
      )}
    </div>
  );
};