// components/comparison-dimensions/specs-matrix.tsx
'use client';

import { useState, useEffect } from 'react';
import { tools as allTools } from '../../data/tools';

interface SpecsMatrixProps {
  tools: string[];
  userPreferences: any;
  onReady: () => void;
}

export default function SpecsMatrix({ tools, userPreferences, onReady }: SpecsMatrixProps) {
  const [sortBy, setSortBy] = useState<'relevance' | 'name' | 'category'>(&apos;relevance&apos;);
  const [filterCategory, setFilterCategory] = useState<string>(&apos;all&apos;);
  const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set(['core']));

  const selectedTools = tools.map(toolName => 
    allTools.find(tool => tool && tool.name === toolName)
  ).filter((tool): tool is typeof allTools[0] => tool !== undefined);

  // Feature categories for smart grouping
  const featureCategories = {
    core: {
      name: 'Core Features',
      icon: '⚡',
      features: ['api_access', 'real_time_collaboration', 'offline_mode', 'mobile_support']
    },
    integration: {
      name: 'Integrations',
      icon: '🔗',
      features: ['slack_integration', 'github_integration', 'google_workspace', 'microsoft_teams']
    },
    security: {
      name: 'Security & Privacy',
      icon: '🔒',
      features: ['two_factor_auth', 'encryption', 'compliance', 'audit_logs']
    },
    support: {
      name: 'Support & Resources',
      icon: '💬',
      features: ['24_7_support', 'documentation', 'community', 'training']
    },
    pricing: {
      name: 'Pricing & Plans',
      icon: '💰',
      features: ['free_tier', 'trial_period', 'enterprise_plan', 'transparent_pricing']
    }
  };

  // Calculate relevance scores for features
  const calculateRelevance = (feature: string) => {
    // Mock relevance calculation based on user preferences
    const baseScore = Math.random() * 100;
    const preferenceBonus = userPreferences.weighting.power * 10;
    return baseScore + preferenceBonus;
  };

  const toggleSection = (section: string) => {
    const newExpanded = new Set(expandedSections);
    if (newExpanded.has(section)) {
      newExpanded.delete(section);
    } else {
      newExpanded.add(section);
    }
    setExpandedSections(newExpanded);
  };

  useEffect(() => {
    onReady();
  }, [onReady]);

  const getFeatureValue = (tool: any, feature: string) => {
    // Mock feature values - in real implementation, this would come from tool data
    const mockFeatures: Record<string, Record<string, any>> = {
      'api_access': { 'ChatGPT': true, 'Claude': true, 'Gemini': true },
      'real_time_collaboration': { 'ChatGPT': false, 'Claude': true, 'Gemini': true },
      'offline_mode': { 'ChatGPT': true, 'Claude': false, 'Gemini': false },
      'mobile_support': { 'ChatGPT': true, 'Claude': true, 'Gemini': true },
      'slack_integration': { 'ChatGPT': true, 'Claude': true, 'Gemini': false },
      'github_integration': { 'ChatGPT': true, 'Claude': false, 'Gemini': true },
      'two_factor_auth': { 'ChatGPT': true, 'Claude': true, 'Gemini': true },
      'encryption': { 'ChatGPT': true, 'Claude': true, 'Gemini': true },
      '24_7_support': { 'ChatGPT': true, 'Claude': false, 'Gemini': true },
      'free_tier': { 'ChatGPT': true, 'Claude': false, 'Gemini': true },
    };

    return mockFeatures[feature]?.[tool] || Math.random() > 0.5;
  };

  const renderFeatureCell = (tool: any, feature: string) => {
    const value = getFeatureValue(tool, feature);
    const hasFeature = typeof value === &apos;boolean&apos; ? value : value !== null;

    return (
      <td className="px-4 py-3 text-center border border-white/10&quot;>
        {hasFeature ? (
          <div className="flex items-center justify-center&quot;>
            <div className="w-2 h-2 bg-green-400 rounded-full&quot;></div>
            {typeof value === &apos;string&apos; && (
              <span className="ml-2 text-sm text-gray-300&quot;>{value}</span>
            )}
          </div>
        ) : (
          <div className="w-2 h-2 bg-gray-600 rounded-full mx-auto&quot;></div>
        )}
      </td>
    );
  };

  return (
    <div className="p-6&quot;>
      {/* Header */}
      <div className="mb-6&quot;>
        <h2 className="text-2xl font-bold mb-2&quot;>Specs Matrix</h2>
        <p className="text-gray-400&quot;>Comprehensive feature comparison with smart categorization</p>
      </div>

      {/* Controls */}
      <div className="flex gap-4 mb-6&quot;>
        <div className="flex gap-2&quot;>
          <button
            onClick={() => setSortBy(&apos;relevance&apos;)}
            className={`px-3 py-1 rounded text-sm ${
              sortBy === &apos;relevance&apos; 
                ? &apos;bg-blue-500 text-white&apos; 
                : &apos;bg-white/10 text-gray-300 hover:bg-white/20&apos;
            }`}
          >
            Relevance
          </button>
          <button
            onClick={() => setSortBy(&apos;name&apos;)}
            className={`px-3 py-1 rounded text-sm ${
              sortBy === &apos;name&apos; 
                ? &apos;bg-blue-500 text-white&apos; 
                : &apos;bg-white/10 text-gray-300 hover:bg-white/20&apos;
            }`}
          >
            Name
          </button>
          <button
            onClick={() => setSortBy(&apos;category&apos;)}
            className={`px-3 py-1 rounded text-sm ${
              sortBy === &apos;category&apos; 
                ? &apos;bg-blue-500 text-white&apos; 
                : &apos;bg-white/10 text-gray-300 hover:bg-white/20
            }`}
          >
            Category
          </button>
        </div>
      </div>

      {/* Comparison Table */}
      <div className="overflow-x-auto&quot;>
        <table className="w-full border-collapse&quot;>
          <thead>
            <tr className="bg-white/10&quot;>
              <th className="px-4 py-3 text-left border border-white/10&quot;>Feature</th>
              {tools.map((toolName) => (
                <th key={toolName} className="px-4 py-3 text-center border border-white/10&quot;>
                  <div className="font-semibold&quot;>{toolName}</div>
                  <div className="text-xs text-gray-400&quot;>{allTools.find(t => t && t.name === toolName)?.category || &apos;Unknown&apos;}</div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {Object.entries(featureCategories).map(([categoryId, category]) => (
              <tr key={categoryId}>
                <td colSpan={tools.length + 1} className="px-0 py-0&quot;>
                  <div className="bg-white/5&quot;>
                    <button
                      onClick={() => toggleSection(categoryId)}
                      className="w-full px-4 py-3 flex items-center gap-3 hover:bg-white/10 transition-colors&quot;
                    >
                      <span className="text-lg&quot;>{category.icon}</span>
                      <span className="font-semibold&quot;>{category.name}</span>
                      <span className="ml-auto text-sm text-gray-400&quot;>
                        {expandedSections.has(categoryId) ? &apos;▼&apos; : &apos;▶&apos;}
                      </span>
                    </button>
                    
                    {expandedSections.has(categoryId) && (
                      <div className="border-t border-white/10&quot;>
                        {category.features.map((feature) => (
                          <tr key={feature} className="hover:bg-white/5&quot;>
                            <td className="px-4 py-3 border border-white/10&quot;>
                              <div className="flex items-center gap-2&quot;>
                                <span className="text-sm text-gray-300 capitalize&quot;>
                                  {feature.replace(/_/g, &apos; &apos;)}
                                </span>
                                {sortBy === &apos;relevance&apos; && (
                                  <span className="text-xs text-blue-400&quot;>
                                    {Math.round(calculateRelevance(feature))}%
                                  </span>
                                )}
                              </div>
                            </td>
                            {tools.map((toolName) => renderFeatureCell(toolName, feature))}
                          </tr>
                        ))}
                      </div>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Legend */}
      <div className="mt-6 flex items-center gap-6 text-sm text-gray-400&quot;>
        <div className="flex items-center gap-2&quot;>
          <div className="w-2 h-2 bg-green-400 rounded-full&quot;></div>
          <span>Available</span>
        </div>
        <div className="flex items-center gap-2&quot;>
          <div className="w-2 h-2 bg-gray-600 rounded-full&quot;></div>
          <span>Not Available</span>
        </div>
        <div className="flex items-center gap-2&quot;>
          <span className="text-blue-400&quot;>%</span>
          <span>Relevance Score</span>
        </div>
      </div>
    </div>
  );
}
