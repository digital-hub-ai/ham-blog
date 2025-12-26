import React from 'react';
import Link from 'next/link';

interface RealityBridgeProps {
  currentReality: string;
}

export default function RealityBridges({ currentReality }: RealityBridgeProps) {
  // All realities in the omniverse
  const allRealities = [
    { id: 'tech', name: 'Quantum Codex', color: 'cyan' },
    { id: 'travel', name: 'Chrono-Wanderer\'s Atlas', color: 'emerald' },
    { id: 'design', name: 'Aesthetic Forge', color: 'rose' },
    { id: 'business', name: 'Corporate Consciousness', color: 'amber' },
    { id: 'science', name: 'Discovery Nexus', color: 'violet' },
    { id: 'lifestyle', name: 'Existence Explorer', color: 'indigo' },
    { id: 'hobby', name: 'Passion Projects', color: 'orange' },
    { id: 'food', name: 'Culinary Chronicles', color: 'yellow' },
    { id: 'guides', name: 'Knowledge Compendium', color: 'green' }
  ];

  // Filter out the current reality
  const otherRealities = allRealities.filter(reality => reality.id !== currentReality);

  return (
    <div className="fixed top-4 left-0 right-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Current Reality Display */}
          <div className="flex items-center bg-gray-900/80 backdrop-blur-lg rounded-full px-4 py-2 border border-gray-700/50">
            <div className={`w-3 h-3 rounded-full bg-${allRealities.find(r => r.id === currentReality)?.color || 'cyan'}-500 mr-2`}></div>
            <span className="text-white font-medium">
              {allRealities.find(r => r.id === currentReality)?.name || 'Unknown Reality'}
            </span>
          </div>

          {/* Quick Switch to Other Realities */}
          <div className="flex space-x-2">
            {otherRealities.slice(0, 3).map((reality) => (
              <Link 
                key={reality.id}
                href={`/blog/${reality.id}`}
                className={`px-3 py-1 bg-${reality.color}-900/30 text-${reality.color}-300 rounded-full text-sm border border-${reality.color}-700/50 hover:bg-${reality.color}-800/50 transition-all duration-300`}
              >
                {reality.name.split(' ')[0]}
              </Link>
            ))}
          </div>

          {/* Return to Library Button */}
          <Link 
            href="/blog"
            className="flex items-center bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full px-4 py-2 text-white hover:from-purple-700 hover:to-indigo-700 transition-all duration-300"
          >
            <span className="mr-2">🌌</span>
            Library
          </Link>
        </div>
      </div>
    </div>
  );
}