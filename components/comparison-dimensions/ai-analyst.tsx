// components/comparison-dimensions/ai-analyst.tsx
'use client';

import { useState, useEffect } from 'react';

interface AIAnalystProps {
  tools: string[];
  userPreferences: any;
  onReady: () => void;
}

export default function AIAnalyst({ tools, userPreferences, onReady }: AIAnalystProps) {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysis, setAnalysis] = useState<any>(null);

  useEffect(() => {
    if (tools.length >= 2) {
      runAnalysis();
    }
    onReady();
  }, [tools, onReady]);

  const runAnalysis = async () => {
    setIsAnalyzing(true);
    
    // Simulate AI analysis
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    const mockAnalysis = {
      executiveSummary: &quot;Based on your team size of 10 and 3-year timeframe, ChatGPT offers the best balance of features and cost-effectiveness. Claude provides superior accuracy for complex tasks, while Gemini excels in scalability and integration capabilities.&quot;,
      keyFindings: [
        {
          title: &quot;Cost Efficiency&quot;,
          description: &quot;Gemini offers the lowest total cost of ownership at $18,000 over 3 years, 20% less than competitors.&quot;,
          impact: &quot;high&quot;,
          tools: [&quot;Gemini&quot;]
        },
        {
          title: &quot;Feature Completeness&quot;,
          description: &quot;ChatGPT provides the most comprehensive feature set with 95% coverage of essential business needs.&quot;,
          impact: &quot;medium&quot;,
          tools: [&quot;ChatGPT&quot;]
        },
        {
          title: &quot;Integration Ecosystem&quot;,
          description: &quot;All three tools offer strong API capabilities, but ChatGPT has the most mature third-party integration ecosystem.&quot;,
          impact: &quot;medium&quot;,
          tools: [&quot;ChatGPT&quot;, &quot;Claude&quot;, &quot;Gemini&quot;]
        }
      ],
      recommendations: [
        {
          tool: &quot;ChatGPT&quot;,
          reason: &quot;Best overall value for general business use cases&quot;,
          confidence: 85,
          useCase: &quot;General business operations, customer support, content creation&quot;
        },
        {
          tool: &quot;Claude&quot;,
          reason: &quot;Superior for complex analytical tasks and detailed work&quot;,
          confidence: 78,
          useCase: &quot;Research, analysis, complex problem-solving&quot;
        },
        {
          tool: &quot;Gemini&quot;,
          reason: &quot;Most scalable for large teams and enterprise needs&quot;,
          confidence: 82,
          useCase: &quot;Enterprise deployments, large-scale automation&quot;
        }
      ],
      riskFactors: [
        {
          factor: &quot;Vendor Lock-in&quot;,
          level: &quot;medium&quot;,
          description: &quot;All tools have proprietary APIs that may complicate future migration&quot;
        },
        {
          factor: &quot;Price Volatility&quot;,
          level: &quot;low&quot;,
          description: &quot;Pricing has been relatively stable across all platforms&quot;
        },
        {
          factor: &quot;Feature Parity&quot;,
          level: &quot;high&quot;,
          description: &quot;Core features are similar, making differentiation difficult&quot;
        }
      ],
      implementationPlan: [
        {
          phase: &quot;Pilot (Month 1-2)&quot;,
          actions: [&quot;Deploy ChatGPT for 5 users&quot;, &quot;Test key integrations&quot;, &quot;Gather feedback&quot;],
          estimatedCost: &quot;$500&quot;
        },
        {
          phase: &quot;Scale (Month 3-6)&quot;,
          actions: [&quot;Expand to full team&quot;, &quot;Implement custom workflows&quot;, &quot;Train staff&quot;],
          estimatedCost: &quot;$2,500&quot;
        },
        {
          phase: &quot;Optimize (Month 7-12)&quot;,
          actions: [&quot;Fine-tune usage patterns&quot;, &quot;Optimize costs&quot;, &quot;Evaluate additional tools&quot;],
          estimatedCost: &quot;$3,000&quot;
        }
      ]
    };

    setAnalysis(mockAnalysis);
    setIsAnalyzing(false);
  };

  const getImpactColor = (impact: string) => {
    switch (impact) {
      case 'high': return 'text-red-400 bg-red-400/20';
      case 'medium': return 'text-yellow-400 bg-yellow-400/20';
      case 'low': return 'text-green-400 bg-green-400/20';
      default: return 'text-gray-400 bg-gray-400/20';
    }
  };

  const getRiskColor = (level: string) => {
    switch (level) {
      case &apos;high&apos;: return &apos;border-red-400&apos;;
      case &apos;medium&apos;: return &apos;border-yellow-400&apos;;
      case &apos;low&apos;: return &apos;border-green-400&apos;;
      default: return &apos;border-gray-400&apos;;
    }
  };

  if (isAnalyzing) {
    return (
      <div className="p-6&quot;>
        <div className="flex items-center justify-center h-96&quot;>
          <div className="text-center&quot;>
            <div className="animate-spin w-12 h-12 border-4 border-blue-400 border-t-transparent rounded-full mx-auto mb-4&quot;></div>
            <h3 className="text-xl font-semibold mb-2&quot;>AI Analysis in Progress</h3>
            <p className="text-gray-400&quot;>Analyzing tools and generating insights...</p>
          </div>
        </div>
      </div>
    );
  }

  if (!analysis) {
    return (
      <div className="p-6&quot;>
        <div className="flex items-center justify-center h-96&quot;>
          <div className="text-center text-gray-400&quot;>
            <div className="text-4xl mb-2&quot;>🤖</div>
            <p>Select at least 2 tools to begin AI analysis</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6 space-y-8&quot;>
      {/* Header */}
      <div className="mb-6&quot;>
        <h2 className="text-2xl font-bold mb-2&quot;>AI Analyst</h2>
        <p className="text-gray-400&quot;>Executive summary and intelligent recommendations</p>
      </div>

      {/* Executive Summary */}
      <div className="bg-gradient-to-r from-blue-500/20 to-purple-600/20 rounded-lg p-6 border border-blue-400/30&quot;>
        <h3 className="text-xl font-semibold mb-3&quot;>📋 Executive Summary</h3>
        <p className="text-gray-200 leading-relaxed&quot;>{analysis.executiveSummary}</p>
      </div>

      {/* Key Findings */}
      <div>
        <h3 className="text-xl font-semibold mb-4&quot;>🔍 Key Findings</h3>
        <div className="space-y-3&quot;>
          {analysis.keyFindings.map((finding: any, index: number) => (
            <div key={index} className="bg-white/10 rounded-lg p-4 border border-white/20&quot;>
              <div className="flex items-start gap-3&quot;>
                <div className={`px-2 py-1 rounded text-xs font-medium ${getImpactColor(finding.impact)}`}>
                  {finding.impact} impact
                </div>
                <div className="flex-1&quot;>
                  <h4 className="font-semibold text-white mb-1&quot;>{finding.title}</h4>
                  <p className="text-gray-300 text-sm&quot;>{finding.description}</p>
                  <div className="mt-2 flex flex-wrap gap-1&quot;>
                    {finding.tools.map((tool: string) => (
                      <span key={tool} className="text-xs bg-blue-500/30 px-2 py-1 rounded&quot;>
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recommendations */}
      <div>
        <h3 className="text-xl font-semibold mb-4&quot;>🎯 Recommendations</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4&quot;>
          {analysis.recommendations.map((rec: any, index: number) => (
            <div key={index} className="bg-white/10 rounded-lg p-4 border border-white/20&quot;>
              <div className="flex items-center justify-between mb-2&quot;>
                <h4 className="font-semibold text-white&quot;>{rec.tool}</h4>
                <div className="text-sm text-green-400&quot;>{rec.confidence}% match</div>
              </div>
              <p className="text-gray-300 text-sm mb-2&quot;>{rec.reason}</p>
              <div className="text-xs text-gray-400&quot;>
                <strong>Best for:</strong> {rec.useCase}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Risk Factors */}
      <div>
        <h3 className="text-xl font-semibold mb-4&quot;>⚠️ Risk Factors</h3>
        <div className="space-y-3&quot;>
          {analysis.riskFactors.map((risk: any, index: number) => (
            <div key={index} className={`bg-white/10 rounded-lg p-4 border-l-4 ${getRiskColor(risk.level)}`}>
              <div className="flex items-center justify-between mb-2&quot;>
                <h4 className="font-semibold text-white&quot;>{risk.factor}</h4>
                <div className={`text-sm px-2 py-1 rounded ${
                  risk.level === &apos;high&apos; ? &apos;bg-red-400/20 text-red-400&apos; :
                  risk.level === &apos;medium&apos; ? &apos;bg-yellow-400/20 text-yellow-400&apos; :
                  &apos;bg-green-400/20 text-green-400
                }`}>
                  {risk.level} risk
                </div>
              </div>
              <p className="text-gray-300 text-sm&quot;>{risk.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Implementation Plan */}
      <div>
        <h3 className="text-xl font-semibold mb-4&quot;>📅 Implementation Plan</h3>
        <div className="space-y-4&quot;>
          {analysis.implementationPlan.map((phase: any, index: number) => (
            <div key={index} className="bg-white/10 rounded-lg p-4 border border-white/20&quot;>
              <div className="flex items-center justify-between mb-3&quot;>
                <h4 className="font-semibold text-white&quot;>{phase.phase}</h4>
                <div className="text-sm text-green-400&quot;>{phase.estimatedCost}</div>
              </div>
              <ul className="space-y-1 text-sm text-gray-300&quot;>
                {phase.actions.map((action: string, actionIndex: number) => (
                  <li key={actionIndex} className="flex items-center gap-2&quot;>
                    <span className="w-1.5 h-1.5 bg-blue-400 rounded-full&quot;></span>
                    {action}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-4&quot;>
        <button
          onClick={runAnalysis}
          className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300&quot;
        >
          Re-run Analysis
        </button>
        <button className="px-6 py-3 bg-white/10 border border-white/20 rounded-lg hover:bg-white/20 transition-colors&quot;>
          Export Report
        </button>
        <button className="px-6 py-3 bg-white/10 border border-white/20 rounded-lg hover:bg-white/20 transition-colors&quot;>
          Share Insights
        </button>
      </div>
    </div>
  );
}
