import React from 'react';

// TripsDropdownContent component - Refactored for new design and standard img tags
export default function TripsDropdownContent() {
  // Using placeholder images for demonstration. In a real app, you'd use actual image URLs.
  const travelTypes = [
    { name: 'Surf', imageUrl: 'https://placehold.co/64x64/007bff/ffffff?text=Surf' },
    { name: 'Hiking', imageUrl: 'https://placehold.co/64x64/28a745/ffffff?text=Hike' },
    { name: 'Up Country', imageUrl: 'https://placehold.co/64x64/6c757d/ffffff?text=Up' },
    { name: 'Wildlife', imageUrl: 'https://placehold.co/64x64/ffc107/000000?text=Wild' },
    { name: 'Culture', imageUrl: 'https://placehold.co/64x64/fd7e14/ffffff?text=Cult' },
    { name: 'Adventure', imageUrl: 'https://placehold.co/64x64/dc3545/ffffff?text=Adv' },
  ];

  return (
    <div className="bg-white rounded-xl shadow-2xl p-6 flex flex-col md:flex-row gap-8 w-full max-w-4xl border border-gray-200">
      {/* Left Section: Main Info & Seasonal Highlights */}
      <div className="flex flex-col text-sm gap-3 w-full md:w-1/2">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">Explore Sri Lanka</h3>
        <p className="text-gray-600 leading-relaxed">
          Discover the diverse beauty of Sri Lanka, from sun-drenched beaches to misty mountains and vibrant cultural sites.
          Find your perfect escape with our curated trips.
        </p>

        <div className="mt-4">
          <span className="text-blue-600 font-medium block mb-1">South-West Coast: November - March</span>
          <span className="text-black-600 font-medium block mb-1">East Coast: April - October</span>
          <span className="text-black-600 font-medium block mb-1">Central Highlands: Year Round</span>
          <span className="text-black-600 font-medium block mb-1">Special Escapes & Hidden Gems</span>
        </div>
      </div>

      {/* Right Section: Travel Type Categories */}
      <div className="flex flex-col w-full md:w-1/2">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Trip Types</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {travelTypes.map((type, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center text-center text-xs cursor-pointer hover:scale-105 transition-transform duration-200 p-2 rounded-lg bg-gray-50 hover:bg-blue-50"
            >
              <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-gray-200 hover:border-blue-400 transition-colors">
              </div>
              <span className="mt-2 text-sm font-medium text-gray-700">{type.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}