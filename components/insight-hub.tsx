// components/insight-hub.tsx
&apos;use client&apos;;

import { useState, useEffect } from &apos;react&apos;;
import { Insight } from &apos;../lib/comparison-context&apos;;

interface InsightHubProps {
  insights: Insight[];
  tools: string[];
  isWorkspaceReady: boolean;
}

export default function InsightHub({ insights, tools, isWorkspaceReady }: InsightHubProps) {
  const [activeTab, setActiveTab] = useState<'insights' | 'differentiators' | 'trends'>('insights');
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  // Mock data for demonstration
  const mockDifferentiators = [
    {
      title: 'Price Advantage',
      description: 'Tool A is 40% cheaper but lacks API access',
      impact: 'high',
      tools: ['Tool A', 'Tool B']
    },
    {
      title: 'Feature Gap',
      description: 'Tool C offers advanced analytics that others lack',
      impact: 'medium',
      tools: ['Tool C']
    },
    {
      title: 'Integration Strength',
      description: 'Tool B has 2x more native integrations',
      impact: 'medium',
      tools: ['Tool B']
    }
  ];

  const mockTrends = [
    {
      title: 'User Satisfaction',
      description: 'Tool C\'s user satisfaction dropped 15% last quarter',
      trend: 'down',
      change: '-15%'
    },
    {
      title: 'Market Growth',
      description: 'Tool A gained 2000+ new enterprise customers',
      trend: 'up',
      change: '+23%'
    },
    {
      title: 'Feature Updates',
      description: 'Tool B released 5 major features this month',
      trend: 'up',
      change: '+5'
    }
  ];

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'high': return 'text-red-400 bg-red-400/20';
      case 'medium': return 'text-yellow-400 bg-yellow-400/20';
      case 'low': return 'text-green-400 bg-green-400/20';
      default: return 'text-gray-400 bg-gray-400/20';
    }
  };

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case 'up': return '📈';
      case 'down': return '📉';
      default: return '➡️';
    }
  };

  const runAnalysis = async () => {
    setIsAnalyzing(true);
    // Simulate AI analysis
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsAnalyzing(false);
  };

  useEffect(() => {
    if (isWorkspaceReady && tools.length >= 2) {
      runAnalysis();
    }
  }, [isWorkspaceReady, tools]);

  if (tools.length < 2) {
    return (
      <div className="p-6&quot;>
        <div className="text-center py-12&quot;>
          <div className="text-4xl mb-4&quot;>🔍</div>
          <h3 className="text-xl font-semibold mb-2&quot;>Select Tools to Analyze</h3>
          <p className="text-gray-400&quot;>Add at least 2 tools to see intelligent insights</p>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6 space-y-6&quot;>
      {/* Header */}
      <div>
        <h2 className="text-xl font-bold mb-2&quot;>Insight Hub</h2>
        <p className="text-sm text-gray-400&quot;>AI-powered analysis and recommendations</p>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 p-1 bg-white/10 rounded-lg&quot;>
        {([&apos;insights&apos;, &apos;differentiators&apos;, &apos;trends&apos;] as const).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`flex-1 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
              activeTab === tab
                ? &apos;bg-white/20 text-white&apos;
                : &apos;text-gray-400 hover:text-white hover:bg-white/10
            }`}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      {/* Analysis Status */}
      {isAnalyzing && (
        <div className="p-4 bg-blue-500/20 border border-blue-400/30 rounded-lg&quot;>
          <div className="flex items-center gap-3&quot;>
            <div className="animate-spin w-4 h-4 border-2 border-blue-400 border-t-transparent rounded-full&quot;></div>
            <span className="text-blue-300&quot;>AI Analysis in progress...</span>
          </div>
        </div>
      )}

      {/* Content based on active tab */}
      <div className="space-y-4&quot;>
        {activeTab === &apos;insights&apos; && (
          <>
            {insights.length > 0 ? (
              insights.map((insight) => (
                <div
                  key={insight.id}
                  className="p-4 bg-white/10 rounded-lg border border-white/20 hover:bg-white/20 transition-colors&quot;
                >
                  <div className="flex items-start gap-3&quot;>
                    <div className={`px-2 py-1 rounded text-xs font-medium ${getSeverityColor(insight.severity)}`}>
                      {insight.severity}
                    </div>
                    <div className="flex-1&quot;>
                      <h4 className="font-semibold text-white mb-1&quot;>{insight.title}</h4>
                      <p className="text-sm text-gray-300&quot;>{insight.description}</p>
                      <div className="mt-2 flex flex-wrap gap-1&quot;>
                        {insight.tools.map((tool) => (
                          <span key={tool} className="text-xs bg-blue-500/30 px-2 py-1 rounded&quot;>
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-8 text-gray-400&quot;>
                <div className="text-2xl mb-2&quot;>💡</div>
                <p>No insights generated yet</p>
              </div>
            )}
          </>
        )}

        {activeTab === &apos;differentiators&apos; && (
          <>
            {mockDifferentiators.map((diff, index) => (
              <div
                key={index}
                className="p-4 bg-white/10 rounded-lg border border-white/20 hover:bg-white/20 transition-colors&quot;
              >
                <div className="flex items-start gap-3&quot;>
                  <div className={`px-2 py-1 rounded text-xs font-medium ${getSeverityColor(diff.impact)}`}>
                    {diff.impact} impact
                  </div>
                  <div className="flex-1&quot;>
                    <h4 className="font-semibold text-white mb-1&quot;>{diff.title}</h4>
                    <p className="text-sm text-gray-300&quot;>{diff.description}</p>
                    <div className="mt-2 flex flex-wrap gap-1&quot;>
                      {diff.tools.map((tool) => (
                        <span key={tool} className="text-xs bg-purple-500/30 px-2 py-1 rounded&quot;>
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </>
        )}

        {activeTab === &apos;trends&apos; && (
          <>
            {mockTrends.map((trend, index) => (
              <div
                key={index}
                className="p-4 bg-white/10 rounded-lg border border-white/20 hover:bg-white/20 transition-colors&quot;
              >
                <div className="flex items-center justify-between&quot;>
                  <div className="flex items-center gap-3&quot;>
                    <div className="text-2xl&quot;>{getTrendIcon(trend.trend)}</div>
                    <div>
                      <h4 className="font-semibold text-white&quot;>{trend.title}</h4>
                      <p className="text-sm text-gray-300&quot;>{trend.description}</p>
                    </div>
                  </div>
                  <div className={`text-lg font-bold ${
                    trend.trend === &apos;up&apos; ? &apos;text-green-400&apos; : 
                    trend.trend === &apos;down&apos; ? &apos;text-red-400&apos; : &apos;text-gray-400
                  }`}>
                    {trend.change}
                  </div>
                </div>
              </div>
            ))}
          </>
        )}
      </div>

      {/* Quick Actions */}
      <div className="pt-4 border-t border-white/10&quot;>
        <div className="space-y-2&quot;>
          <button
            onClick={runAnalysis}
            disabled={isAnalyzing}
            className="w-full px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 disabled:opacity-50&quot;
          >
            {isAnalyzing ? &apos;Analyzing...&apos; : &apos;Run AI Analysis&apos;}
          </button>
          <button className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg hover:bg-white/20 transition-colors&quot;>
            Export Insights
          </button>
        </div>
      </div>
    </div>
  );
}
