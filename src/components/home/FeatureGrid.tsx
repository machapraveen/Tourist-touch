import React from 'react';
import { Bot, Calendar, MapPin, Camera, Coins, Users } from 'lucide-react';

const features = [
  {
    name: 'AI Travel Assistant',
    description: 'Get personalized recommendations and real-time assistance from our intelligent companion.',
    icon: Bot,
  },
  {
    name: 'Smart Itinerary Planning',
    description: 'Create and collaborate on detailed travel plans with our intuitive planner.',
    icon: Calendar,
  },
  {
    name: 'Destination Snapshots',
    description: 'Capture and share your travel memories while earning rewards.',
    icon: Camera,
  },
  {
    name: 'Token Rewards',
    description: 'Earn tokens for activities and redeem them for exclusive experiences.',
    icon: Coins,
  },
  {
    name: 'Local Insights',
    description: 'Access curated local recommendations and hidden gems.',
    icon: MapPin,
  },
  {
    name: 'Group Travel',
    description: 'Plan and coordinate trips with friends and family in real-time.',
    icon: Users,
  },
];

export const FeatureGrid = () => {
  return (
    <div className="bg-white py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">
            Everything you need for the perfect trip
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            Powerful features to make your travel experience seamless and memorable
          </p>
        </div>
        <div className="mt-10">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="pt-6">
                <div className="flow-root rounded-lg bg-gray-50 px-6 pb-8">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center rounded-md bg-blue-600 p-3 shadow-lg">
                        <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium tracking-tight text-gray-900">
                      {feature.name}
                    </h3>
                    <p className="mt-5 text-base text-gray-500">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};