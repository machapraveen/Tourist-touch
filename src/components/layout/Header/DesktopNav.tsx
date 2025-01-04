import React from 'react';
import { NavLink } from './NavLink';
import { Button } from '../../ui/Button';

export const DesktopNav: React.FC = () => {
  return (
    <nav className="hidden md:flex items-center space-x-8">
      <NavLink to="/explore">Explore</NavLink>
      <NavLink to="/itineraries">Itineraries</NavLink>
      <NavLink to="/community">Community</NavLink>
      <Button 
        variant="primary"
        className="transform transition-all duration-300 hover:scale-105 hover:shadow-lg"
      >
        Get Started
      </Button>
    </nav>
  );
};