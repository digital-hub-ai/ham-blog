// components/comparison-dimensions/performance-radar.tsx
'use client';

import { useState, useEffect } from 'react';

interface PerformanceRadarProps {
  tools: string[];
  userPreferences: any;
  onReady: () => void;
}

export default function PerformanceRadar({ tools, userPreferences, onReady }: PerformanceRadarProps) {
  const [selectedMetrics, setSelectedMetrics] = useState<string[]>([
    'speed', 'accuracy', 'reliability', 'scalability', 'user_experience'
  ]);

  const metrics = [
    { id: 'speed', name: 'Speed', icon: '⚡' },
    { id: 'accuracy', name: 'Accuracy', icon: '🎯' },
    { id: 'reliability', name: 'Reliability', icon: '🛡️' },
    { id: 'scalability', name: 'Scalability', icon: '📈' },
    { id: 'user_experience', name: 'User Experience', icon: '✨' },
    { id: 'cost_efficiency', name: 'Cost Efficiency', icon: '💰' },
    { id: 'innovation', name: 'Innovation', icon: '🚀' },
    { id: 'support', name: 'Support', icon: '💬' }
  ];

  // Mock performance data
  const getPerformanceData = (toolName: string, metricId: string) => {
    const mockData: Record<string, Record<string, number>> = {
      'ChatGPT': {
        speed: 85,
        accuracy: 90,
        reliability: 88,
        scalability: 92,
        user_experience: 95,
        cost_efficiency: 75,
        innovation: 90,
        support: 85
      },
      'Claude': {
        speed: 80,
        accuracy: 92,
        reliability: 85,
        scalability: 78,
        user_experience: 88,
        cost_efficiency: 70,
        innovation: 85,
        support: 80
      },
      'Gemini': {
        speed: 90,
        accuracy: 88,
        reliability: 90,
        scalability: 95,
        user_experience: 92,
        cost_efficiency: 80,
        innovation: 93,
        support: 88
      }
    };

    return mockData[toolName]?.[metricId] || Math.floor(Math.random() * 30) + 70;
  };

  const toggleMetric = (metricId: string) => {
    setSelectedMetrics(prev => 
      prev.includes(metricId) 
        ? prev.filter(id => id !== metricId)
        : [...prev, metricId]
    );
  };

  useEffect(() => {
    onReady();
  }, [onReady]);

  const renderRadarChart = () => {
    if (tools.length === 0 || selectedMetrics.length === 0) {
      return (
        <div className="flex items-center justify-center h-96&quot;>
          <div className="text-center text-gray-400&quot;>
            <div className="text-4xl mb-2&quot;>📊</div>
            <p>Select tools and metrics to visualize</p>
          </div>
        </div>
      );
    }

    // Simplified radar chart visualization
    const centerX = 200;
    const centerY = 200;
    const radius = 150;

    return (
      <div className="flex justify-center&quot;>
        <svg width="400&quot; height="400&quot; className="border border-white/20 rounded-lg bg-white/5&quot;>
          {/* Grid circles */}
          {[20, 40, 60, 80, 100].map((level) => (
            <circle
              key={level}
              cx={centerX}
              cy={centerY}
              r={(radius * level) / 100}
              fill="none&quot;
              stroke="rgba(255,255,255,0.1)&quot;
              strokeWidth="1&quot;
            />
          ))}

          {/* Axes */}
          {selectedMetrics.map((metricId, index) => {
            const angle = (index * 2 * Math.PI) / selectedMetrics.length;
            const x = centerX + radius * Math.cos(angle - Math.PI / 2);
            const y = centerY + radius * Math.sin(angle - Math.PI / 2);
            
            return (
              <line
                key={metricId}
                x1={centerX}
                y1={centerY}
                x2={x}
                y2={y}
                stroke="rgba(255,255,255,0.2)&quot;
                strokeWidth="1&quot;
              />
            );
          })}

          {/* Data polygons for each tool */}
          {tools.map((toolName, toolIndex) => {
            const colors = ['#3B82F6', '#10B981', '#F59E0B', '#EF4444', '#8B5CF6', '#EC4899'];
            const color = colors[toolIndex % colors.length];
            
            const points = selectedMetrics.map((metricId, index) => {
              const angle = (index * 2 * Math.PI) / selectedMetrics.length;
              const value = getPerformanceData(toolName, metricId);
              const r = (radius * value) / 100;
              const x = centerX + r * Math.cos(angle - Math.PI / 2);
              const y = centerY + r * Math.sin(angle - Math.PI / 2);
              return `${x},${y}`;
            }).join(&apos; &apos;);

            return (
              <polygon
                key={toolName}
                points={points}
                fill={color}
                fillOpacity="0.3&quot;
                stroke={color}
                strokeWidth="2&quot;
              />
            );
          })}

          {/* Labels */}
          {selectedMetrics.map((metricId, index) => {
            const metric = metrics.find(m => m.id === metricId);
            const angle = (index * 2 * Math.PI) / selectedMetrics.length;
            const x = centerX + (radius + 20) * Math.cos(angle - Math.PI / 2);
            const y = centerY + (radius + 20) * Math.sin(angle - Math.PI / 2);
            
            return (
              <text
                key={metricId}
                x={x}
                y={y}
                textAnchor="middle&quot;
                fill="white&quot;
                fontSize="12&quot;
              >
                {metric?.icon} {metric?.name}
              </text>
            );
          })}
        </svg>
      </div>
    );
  };

  return (
    <div className="p-6&quot;>
      {/* Header */}
      <div className="mb-6&quot;>
        <h2 className="text-2xl font-bold mb-2&quot;>Performance Radar</h2>
        <p className="text-gray-400&quot;>Multi-dimensional performance visualization</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6&quot;>
        {/* Metrics Selection */}
        <div className="space-y-4&quot;>
          <h3 className="font-semibold&quot;>Select Metrics</h3>
          <div className="space-y-2&quot;>
            {metrics.map((metric) => (
              <label key={metric.id} className="flex items-center gap-3 cursor-pointer&quot;>
                <input
                  type="checkbox&quot;
                  checked={selectedMetrics.includes(metric.id)}
                  onChange={() => toggleMetric(metric.id)}
                  className="w-4 h-4 rounded&quot;
                />
                <span className="text-lg&quot;>{metric.icon}</span>
                <span>{metric.name}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Radar Chart */}
        <div className="lg:col-span-2&quot;>
          {renderRadarChart()}
        </div>
      </div>

      {/* Performance Scores Table */}
      <div className="mt-8&quot;>
        <h3 className="font-semibold mb-4&quot;>Detailed Scores</h3>
        <div className="overflow-x-auto&quot;>
          <table className="w-full border-collapse&quot;>
            <thead>
              <tr className="bg-white/10&quot;>
                <th className="px-4 py-2 text-left border border-white/10&quot;>Tool</th>
                {selectedMetrics.map((metricId) => {
                  const metric = metrics.find(m => m.id === metricId);
                  return (
                    <th key={metricId} className="px-4 py-2 text-center border border-white/10&quot;>
                      {metric?.icon}
                    </th>
                  );
                })}
              </tr>
            </thead>
            <tbody>
              {tools.map((toolName) => (
                <tr key={toolName} className="hover:bg-white/5&quot;>
                  <td className="px-4 py-2 border border-white/10 font-medium&quot;>{toolName}</td>
                  {selectedMetrics.map((metricId) => {
                    const score = getPerformanceData(toolName, metricId);
                    const color = score >= 85 ? 'text-green-400' : score >= 70 ? &apos;text-yellow-400&apos; : &apos;text-red-400&apos;;
                    return (
                      <td key={metricId} className={`px-4 py-2 text-center border border-white/10 ${color}`}>
                        {score}%
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
