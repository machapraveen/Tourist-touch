import React from 'react';
import { Luggage, MapPin } from 'lucide-react';

export const TravelerAnimation = () => {
  return (
    <div className="absolute bottom-0 left-0 w-full overflow-hidden h-24 pointer-events-none">
      <div className="animate-slide-right">
        <div className="flex items-center gap-2">
          <div className="relative">
            <Luggage className="h-12 w-12 text-blue-600" />
            <MapPin className="h-6 w-6 text-red-500 absolute -top-4 -right-2 animate-bounce" />
          </div>
          <div className="flex space-x-1">
            <div className="h-2 w-2 bg-blue-600/20 rounded-full animate-bounce delay-100" />
            <div className="h-2 w-2 bg-blue-600/20 rounded-full animate-bounce delay-200" />
            <div className="h-2 w-2 bg-blue-600/20 rounded-full animate-bounce delay-300" />
          </div>
        </div>
      </div>
    </div>
  );
};