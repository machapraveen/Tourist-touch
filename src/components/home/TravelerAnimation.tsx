import React from 'react';
import { Luggage } from 'lucide-react';

export const TravelerAnimation = () => {
  return (
    <div className="absolute bottom-0 left-0 w-full overflow-hidden h-24 pointer-events-none">
      <div className="animate-slide-right">
        <div className="flex items-center gap-2 text-blue-600">
          <Luggage className="h-12 w-12" />
          <div className="h-2 w-8 bg-blue-600/20 rounded-full" />
        </div>
      </div>
    </div>
  );
};