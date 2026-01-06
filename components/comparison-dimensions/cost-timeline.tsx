// components/comparison-dimensions/cost-timeline.tsx
'use client';

import { useState, useEffect } from 'react';

interface CostTimelineProps {
  tools: string[];
  userPreferences: any;
  onReady: () => void;
}

export default function CostTimeline({ tools, userPreferences, onReady }: CostTimelineProps) {
  const [timeframe, setTimeframe] = useState(3); // years
  const [teamSize, setTeamSize] = useState(10);

  useEffect(() => {
    onReady();
  }, [onReady]);

  // Mock pricing data
  const getPricingData = (toolName: string) => {
    const pricing: Record<string, { base: number; perUser: number; enterprise: number }> = {
      'ChatGPT': { base: 20, perUser: 5, enterprise: 25 },
      'Claude': { base: 25, perUser: 8, enterprise: 30 },
      'Gemini': { base: 15, perUser: 4, enterprise: 20 }
    };

    return pricing[toolName] || { base: 20, perUser: 5, enterprise: 25 };
  };

  const calculateTotalCost = (toolName: string, years: number, users: number) => {
    const pricing = getPricingData(toolName);
    const monthlyCost = pricing.base + (pricing.perUser * users);
    return monthlyCost * 12 * years;
  };

  const calculateROI = (toolName: string, investment: number) => {
    // Mock ROI calculation
    const efficiencyGains = Math.random() * 0.3 + 0.1; // 10-40% efficiency
    return investment * efficiencyGains;
  };

  return (
    <div className="p-6&quot;>
      {/* Header */}
      <div className="mb-6&quot;>
        <h2 className="text-2xl font-bold mb-2&quot;>Cost Timeline</h2>
        <p className="text-gray-400&quot;>Pricing projection and ROI analysis</p>
      </div>

      {/* Controls */}
      <div className="grid grid-cols-2 gap-6 mb-6&quot;>
        <div>
          <label className="block text-sm font-medium mb-2&quot;>Timeframe (years)</label>
          <input
            type="range&quot;
            min="1&quot;
            max="5&quot;
            value={timeframe}
            onChange={(e) => setTimeframe(Number(e.target.value))}
            className="w-full&quot;
          />
          <div className="text-center mt-2&quot;>{timeframe} years</div>
        </div>
        <div>
          <label className="block text-sm font-medium mb-2&quot;>Team Size</label>
          <input
            type="range&quot;
            min="1&quot;
            max="50&quot;
            value={teamSize}
            onChange={(e) => setTeamSize(Number(e.target.value))}
            className="w-full&quot;
          />
          <div className="text-center mt-2&quot;>{teamSize} users</div>
        </div>
      </div>

      {/* Cost Comparison */}
      <div className="space-y-4&quot;>
        {tools.map((toolName) => {
          const pricing = getPricingData(toolName);
          const totalCost = calculateTotalCost(toolName, timeframe, teamSize);
          const roi = calculateROI(toolName, totalCost);

          return (
            <div key={toolName} className="bg-white/10 rounded-lg p-4 border border-white/20&quot;>
              <h3 className="font-semibold mb-3&quot;>{toolName}</h3>
              
              <div className="grid grid-cols-3 gap-4 text-sm&quot;>
                <div>
                  <div className="text-gray-400&quot;>Monthly Cost</div>
                  <div className="text-lg font-bold&quot;>${pricing.base + (pricing.perUser * teamSize)}</div>
                </div>
                <div>
                  <div className="text-gray-400&quot;>Total ({timeframe} years)</div>
                  <div className="text-lg font-bold&quot;>${totalCost.toLocaleString()}</div>
                </div>
                <div>
                  <div className="text-gray-400&quot;>Estimated ROI</div>
                  <div className="text-lg font-bold text-green-400&quot;>${roi.toLocaleString()}</div>
                </div>
              </div>

              {/* Cost Breakdown */}
              <div className="mt-4 space-y-2&quot;>
                <div className="flex justify-between text-sm&quot;>
                  <span className="text-gray-400&quot;>Base Price:</span>
                  <span>${pricing.base}/mo</span>
                </div>
                <div className="flex justify-between text-sm&quot;>
                  <span className="text-gray-400&quot;>Per User:</span>
                  <span>${pricing.perUser} × {teamSize} = ${pricing.perUser * teamSize}/mo</span>
                </div>
                <div className="flex justify-between text-sm font-semibold pt-2 border-t border-white/20&quot;>
                  <span>Total Monthly:</span>
                  <span>${pricing.base + (pricing.perUser * teamSize)}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Comparison Chart */}
      <div className="mt-8&quot;>
        <h3 className="font-semibold mb-4&quot;>Cost Comparison Chart</h3>
        <div className="bg-white/5 rounded-lg p-4 border border-white/20&quot;>
          <div className="space-y-3&quot;>
            {tools.map((toolName) => {
              const totalCost = calculateTotalCost(toolName, timeframe, teamSize);
              const maxCost = Math.max(...tools.map(t => calculateTotalCost(t, timeframe, teamSize)));
              const percentage = (totalCost / maxCost) * 100;

              return (
                <div key={toolName}>
                  <div className="flex justify-between text-sm mb-1&quot;>
                    <span>{toolName}</span>
                    <span>${totalCost.toLocaleString()}</span>
                  </div>
                  <div className="w-full bg-white/20 rounded-full h-2&quot;>
                    <div
                      className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-500&quot;
                      style={{ width: `${percentage}%` }}
                    ></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
