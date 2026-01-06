// components/dimension-navigator.tsx
'use client';

import { ComparisonDimension } from '../lib/comparison-context';

interface DimensionNavigatorProps {
  activeDimension: ComparisonDimension;
  onDimensionChange: (dimension: ComparisonDimension) => void;
}

const dimensions = [
  {
    id: &apos;specs_matrix&apos; as ComparisonDimension,
    name: &apos;Specs Matrix&apos;,
    description: &apos;Traditional feature comparison&apos;,
    icon: &apos;📊&apos;,
    color: &apos;from-blue-500 to-blue-600&apos;
  },
  {
    id: &apos;performance_radar&apos; as ComparisonDimension,
    name: &apos;Performance Radar&apos;,
    description: &apos;Visual capability analysis&apos;,
    icon: &apos;🎯&apos;,
    color: &apos;from-purple-500 to-purple-600&apos;
  },
  {
    id: &apos;cost_timeline&apos; as ComparisonDimension,
    name: &apos;Cost Timeline&apos;,
    description: &apos;Pricing projection visualizer&apos;,
    icon: &apos;💰&apos;,
    color: &apos;from-green-500 to-green-600&apos;
  },
  {
    id: &apos;stack_synergy&apos; as ComparisonDimension,
    name: &apos;Stack Synergy&apos;,
    description: &apos;Compatibility scoring&apos;,
    icon: &apos;🔗&apos;,
    color: &apos;from-orange-500 to-orange-600&apos;
  },
  {
    id: &apos;sentiment_sphere&apos; as ComparisonDimension,
    name: &apos;Sentiment Sphere&apos;,
    description: &apos;User review analysis&apos;,
    icon: &apos;💭&apos;,
    color: &apos;from-pink-500 to-pink-600&apos;
  },
  {
    id: &apos;ai_analyst&apos; as ComparisonDimension,
    name: &apos;AI Analyst&apos;,
    description: &apos;Summary and recommendation&apos;,
    icon: &apos;🤖&apos;,
    color: &apos;from-indigo-500 to-indigo-600&apos;
  }
];

export default function DimensionNavigator({ activeDimension, onDimensionChange }: DimensionNavigatorProps) {
  return (
    <div className="p-6 space-y-4&quot;>
      <div>
        <h2 className="text-xl font-bold mb-2&quot;>Comparison Dimensions</h2>
        <p className="text-sm text-gray-400&quot;>Switch between different analysis modes</p>
      </div>

      <div className="space-y-2&quot;>
        {dimensions.map((dimension) => (
          <button
            key={dimension.id}
            onClick={() => onDimensionChange(dimension.id)}
            className={`w-full p-4 rounded-xl border transition-all duration-300 text-left ${
              activeDimension === dimension.id
                ? `bg-gradient-to-r ${dimension.color} border-transparent shadow-lg transform scale-105`
                : &apos;bg-white/10 border-white/20 hover:bg-white/20
            }`}
          >
            <div className="flex items-center gap-3&quot;>
              <div className={`text-2xl ${activeDimension === dimension.id ? 'animate-pulse' : ''}`}>
                {dimension.icon}
              </div>
              <div className="flex-1&quot;>
                <h3 className={`font-semibold ${activeDimension === dimension.id ? &apos;text-white&apos; : &apos;text-gray-200&apos;}`}>
                  {dimension.name}
                </h3>
                <p className={`text-sm ${activeDimension === dimension.id ? &apos;text-white/80&apos; : &apos;text-gray-400}`}>
                  {dimension.description}
                </p>
              </div>
              {activeDimension === dimension.id && (
                <div className="w-2 h-2 bg-white rounded-full animate-pulse&quot;></div>
              )}
            </div>
          </button>
        ))}
      </div>

      {/* Quick Stats */}
      <div className="mt-8 p-4 bg-white/10 rounded-xl border border-white/20&quot;>
        <h3 className="font-semibold mb-3&quot;>Quick Stats</h3>
        <div className="space-y-2 text-sm&quot;>
          <div className="flex justify-between&quot;>
            <span className="text-gray-400&quot;>Active Tools:</span>
            <span className="text-white&quot;>2-6 selected</span>
          </div>
          <div className="flex justify-between&quot;>
            <span className="text-gray-400&quot;>Analysis Depth:</span>
            <span className="text-white&quot;>Advanced</span>
          </div>
          <div className="flex justify-between&quot;>
            <span className="text-gray-400&quot;>AI Insights:</span>
            <span className="text-white&quot;>Real-time</span>
          </div>
        </div>
      </div>
    </div>
  );
}
