// components/ToolNexus/PricingIntelligence.tsx
import { useState, useEffect, useMemo } from 'react';
import { 
  PricingEngine, 
  PricingScenario, 
  HiddenCost, 
  ROICalculator,
  CompetitivePricing,
  UserPersona
} from '../../types/tool-nexus';

interface PricingIntelligenceProps {
  engine: PricingEngine;
  userPersona: UserPersona;
  onScenarioChange?: (scenario: PricingScenario) => void;
}

const PricingIntelligence: React.FC<PricingIntelligenceProps> = ({
  engine,
  userPersona,
  onScenarioChange
}) => {
  const [activeScenario, setActiveScenario] = useState<PricingScenario | null>(null);
  const [selectedTimeframe, setSelectedTimeframe] = useState<'monthly' | 'annual'>(&apos;annual&apos;);
  const [showHiddenCosts, setShowHiddenCosts] = useState(false);
  const [roiView, setRoiView] = useState<'summary' | 'detailed'>('summary');

  // Determine best scenario based on user persona
  useEffect(() => {
    const recommendedScenario = engine.scenarios.find(scenario => {
      if (userPersona.company_size === 'enterprise' && scenario.name.includes('Enterprise')) return true;
      if (userPersona.company_size === 'solo' && scenario.name.includes('Solo')) return true;
      if (userPersona.company_size === 'small' && scenario.name.includes('Startup')) return true;
      if (userPersona.primary_persona === 'freelancer' && scenario.name.includes('Freelancer')) return true;
      return false;
    }) || engine.scenarios[0];

    setActiveScenario(recommendedScenario);
  }, [engine.scenarios, userPersona]);

  const calculateTotalCost = (scenario: PricingScenario) => {
    const baseCost = selectedTimeframe === 'annual' ? scenario.annual_cost : scenario.monthly_cost;
    const setupCost = scenario.setup_fees;
    const trainingCost = scenario.training_costs;
    const hiddenCosts = showHiddenCosts ? 
      engine.hidden_costs.reduce((sum, cost) => sum + cost.estimated_cost, 0) : 0;
    
    return {
      baseCost,
      setupCost,
      trainingCost,
      hiddenCosts,
      total: baseCost + setupCost + trainingCost + hiddenCosts
    };
  };

  const calculateROI = (scenario: PricingScenario) => {
    const totalCost = calculateTotalCost(scenario).total;
    const totalROIValue = engine.roi_calculators.reduce((sum, calc) => sum + calc.estimated_value, 0);
    const monthlyROI = totalROIValue / 12;
    
    return {
      totalROIValue,
      monthlyROI,
      paybackPeriod: totalCost > 0 ? totalCost / monthlyROI : 0,
      roiPercentage: totalCost > 0 ? ((totalROIValue - totalCost) / totalCost) * 100 : 0
    };
  };

  const ScenarioSelector: React.FC = () => (
    <div className="mb-8&quot;>
      <h3 className="text-xl font-semibold text-white mb-4&quot;>Pricing Scenario</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4&quot;>
        {engine.scenarios.map((scenario) => {
          const costs = calculateTotalCost(scenario);
          const isActive = activeScenario?.id === scenario.id;
          const isRecommended = (
            (userPersona.company_size === &apos;enterprise&apos; && scenario.name.includes(&apos;Enterprise&apos;)) ||
            (userPersona.company_size === &apos;solo&apos; && scenario.name.includes(&apos;Solo&apos;)) ||
            (userPersona.company_size === &apos;small&apos; && scenario.name.includes(&apos;Startup&apos;)) ||
            (userPersona.primary_persona === &apos;freelancer&apos; && scenario.name.includes(&apos;Freelancer&apos;))
          );

          return (
            <button
              key={scenario.id}
              onClick={() => {
                setActiveScenario(scenario);
                onScenarioChange?.(scenario);
              }}
              className={`p-4 rounded-lg border transition-all duration-200 text-left ${
                isActive 
                  ? &apos;bg-white/20 border-white/40 text-white&apos; 
                  : &apos;bg-white/5 border-white/10 text-white/70 hover:bg-white/10 hover:text-white
              }`}
            >
              <div className="flex items-center justify-between mb-2&quot;>
                <h4 className="font-semibold&quot;>{scenario.name}</h4>
                {isRecommended && (
                  <span className="px-2 py-1 bg-green-500/20 text-green-300 text-xs rounded-full border border-green-500/30&quot;>
                    Recommended
                  </span>
                )}
              </div>
              <p className="text-sm text-white/60 mb-3&quot;>{scenario.description}</p>
              <div className="space-y-1 text-sm&quot;>
                <div className="flex justify-between&quot;>
                  <span>Team Size:</span>
                  <span>{scenario.team_size} people</span>
                </div>
                <div className="flex justify-between&quot;>
                  <span>Usage:</span>
                  <span className="capitalize&quot;>{scenario.usage_level}</span>
                </div>
                <div className="flex justify-between font-semibold&quot;>
                  <span>Cost:</span>
                  <span>${selectedTimeframe === &apos;annual&apos; ? scenario.annual_cost : scenario.monthly_cost}/{selectedTimeframe === &apos;annual&apos; ? &apos;yr&apos; : &apos;mo&apos;}</span>
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );

  const CostBreakdown: React.FC = () => {
    if (!activeScenario) return null;

    const costs = calculateTotalCost(activeScenario);

    return (
      <div className="mb-8&quot;>
        <h3 className="text-xl font-semibold text-white mb-4&quot;>Cost Breakdown</h3>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6&quot;>
          {/* Main Cost Breakdown */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20&quot;>
            <h4 className="font-medium text-white mb-4&quot;>Base Costs</h4>
            <div className="space-y-3&quot;>
              <div className="flex justify-between&quot;>
                  <span className="text-white/70&quot;>Subscription ({selectedTimeframe})</span>
                  <span className="font-medium text-white&quot;>
                    ${selectedTimeframe === &apos;annual&apos; ? activeScenario.annual_cost : activeScenario.monthly_cost}
                  </span>
                </div>
              <div className="flex justify-between items-center&quot;>
                <span className="text-white/70&quot;>Setup Fees</span>
                <span className="font-medium text-white&quot;>${costs.setupCost}</span>
              </div>
              <div className="flex justify-between items-center&quot;>
                <span className="text-white/70&quot;>Training Costs</span>
                <span className="font-medium text-white&quot;>${costs.trainingCost}</span>
              </div>
              
              <div className="border-t border-white/20 pt-3&quot;>
                <div className="flex justify-between items-center&quot;>
                  <span className="font-medium text-white&quot;>Subtotal</span>
                  <span className="font-semibold text-white&quot;>
                    ${costs.baseCost + costs.setupCost + costs.trainingCost}
                  </span>
                </div>
              </div>
            </div>

            {/* Timeframe Toggle */}
            <div className="mt-6 flex gap-2&quot;>
              <button
                onClick={() => setSelectedTimeframe(&apos;monthly&apos;)}
                className={`flex-1 py-2 px-4 rounded-lg transition-all ${
                  selectedTimeframe === &apos;monthly&apos;
                    ? &apos;bg-white/20 text-white&apos;
                    : &apos;bg-white/5 text-white/60 hover:bg-white/10&apos;
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setSelectedTimeframe(&apos;annual&apos;)}
                className={`flex-1 py-2 px-4 rounded-lg transition-all ${
                  selectedTimeframe === &apos;annual&apos;
                    ? &apos;bg-white/20 text-white&apos;
                    : &apos;bg-white/5 text-white/60 hover:bg-white/10
                }`}
              >
                Annual (Save 20%)
              </button>
            </div>
          </div>

          {/* Hidden Costs */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20&quot;>
            <div className="flex items-center justify-between mb-4&quot;>
              <h4 className="font-medium text-white&quot;>Hidden Costs</h4>
              <button
                onClick={() => setShowHiddenCosts(!showHiddenCosts)}
                className="text-sm text-white/60 hover:text-white&quot;
              >
                {showHiddenCosts ? &apos;Hide&apos; : &apos;Show&apos;} Details
              </button>
            </div>
            
            {showHiddenCosts ? (
              <div className="space-y-3&quot;>
                {engine.hidden_costs.map((cost, index) => (
                  <div key={index} className="flex justify-between items-center&quot;>
                    <div>
                      <div className="text-white/70&quot;>{cost.description}</div>
                      <div className="text-xs text-white/50 capitalize&quot;>
                        {cost.frequency} • {cost.type}
                      </div>
                    </div>
                    <span className="font-medium text-white&quot;>
                      ${cost.estimated_cost}
                      {cost.frequency === &apos;monthly&apos; && &apos;/mo&apos;}
                      {cost.frequency === &apos;annual&apos; && &apos;/yr&apos;}
                    </span>
                  </div>
                ))}
                <div className="border-t border-white/20 pt-3&quot;>
                  <div className="flex justify-between items-center&quot;>
                    <span className="font-medium text-white&quot;>Hidden Costs Total</span>
                    <span className="font-semibold text-white&quot;>${costs.hiddenCosts}</span>
                  </div>
                </div>
              </div>
            ) : (
              <div className="text-center py-8&quot;>
                <div className="text-3xl mb-2&quot;>💰</div>
                <div className="text-white/60&quot;>Click to reveal hidden costs</div>
                <div className="text-sm text-white/50&quot;>Setup, training, migration, and more</div>
              </div>
            )}
          </div>
        </div>

        {/* Total Cost Summary */}
        <div className="mt-6 bg-gradient-to-r from-blue-500/20 to-purple-600/20 rounded-lg p-6 border border-white/20&quot;>
          <div className="flex justify-between items-center&quot;>
            <div>
              <h4 className="text-lg font-semibold text-white&quot;>Total Investment</h4>
              <p className="text-sm text-white/70&quot;>
                {selectedTimeframe === &apos;annual&apos; ? &apos;First year&apos; : &apos;First month&apos;} total cost including hidden expenses
              </p>
            </div>
            <div className="text-right&quot;>
              <div className="text-3xl font-bold text-white&quot;>${costs.total}</div>
              <div className="text-sm text-white/70&quot;>
                ${Math.round(costs.total / (selectedTimeframe === &apos;annual&apos; ? 12 : 1))} per month
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const ROIAnalysis: React.FC = () => {
    if (!activeScenario) return null;

    const roi = calculateROI(activeScenario);

    return (
      <div className="mb-8&quot;>
        <h3 className="text-xl font-semibold text-white mb-4&quot;>ROI Analysis</h3>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6&quot;>
          {/* ROI Summary */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20&quot;>
            <h4 className="font-medium text-white mb-4&quot;>Return on Investment</h4>
            
            <div className="space-y-4&quot;>
              <div className="text-center py-4&quot;>
                <div className={`text-4xl font-bold mb-2 ${
                  roi.roiPercentage >= 100 ? &apos;text-green-400&apos; : 
                  roi.roiPercentage >= 50 ? &apos;text-blue-400&apos; : 
                  roi.roiPercentage >= 0 ? &apos;text-yellow-400&apos; : &apos;text-red-400
                }`}>
                  {roi.roiPercentage >= 0 ? &apos;+&apos; : &apos;&apos;}{roi.roiPercentage.toFixed(1)}%
                </div>
                <div className="text-white/70 text-sm&quot;>Annual ROI</div>
              </div>
              
              <div className="space-y-2&quot;>
                <div className="flex justify-between&quot;>
                  <span className="text-white/70&quot;>Monthly Value</span>
                  <span className="font-medium text-white&quot;>${roi.monthlyROI.toFixed(0)}</span>
                </div>
                <div className="flex justify-between&quot;>
                  <span className="text-white/70&quot;>Payback Period</span>
                  <span className="font-medium text-white&quot;>
                    {roi.paybackPeriod <= 1 ? &apos;< 1 month&apos; : 
                     roi.paybackPeriod <= 12 ? `${roi.paybackPeriod.toFixed(1)} months` :
                     `${(roi.paybackPeriod / 12).toFixed(1)} years`}
                  </span>
                </div>
                <div className="flex justify-between&quot;>
                  <span className="text-white/70&quot;>Total 3-Year Value</span>
                  <span className="font-medium text-white&quot;>${(roi.totalROIValue * 3).toFixed(0)}</span>
                </div>
              </div>
            </div>
          </div>

          {/* ROI Breakdown */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20&quot;>
            <div className="flex items-center justify-between mb-4&quot;>
              <h4 className="font-medium text-white&quot;>Value Sources</h4>
              <button
                onClick={() => setRoiView(roiView === &apos;summary&apos; ? &apos;detailed&apos; : &apos;summary)}
                className="text-sm text-white/60 hover:text-white&quot;
              >
                {roiView === &apos;summary&apos; ? &apos;Detailed&apos; : &apos;Summary&apos;}
              </button>
            </div>
            
            <div className="space-y-3&quot;>
              {engine.roi_calculators.map((calc, index) => (
                <div key={index} className="flex justify-between items-center&quot;>
                  <div className="flex-1&quot;>
                    <div className="text-white/70 capitalize&quot;>{calc.metric.replace(&apos;_&apos;, &apos; &apos;)}</div>
                    {roiView === &apos;detailed&apos; && (
                      <div className="text-xs text-white/50&quot;>
                        {calc.calculation_method} • {Math.round(calc.confidence_level * 100)}% confidence
                      </div>
                    )}
                  </div>
                  <div className="text-right&quot;>
                    <div className="font-medium text-white&quot;>${calc.estimated_value}/yr</div>
                    {roiView === &apos;detailed&apos; && (
                      <div className="text-xs text-white/50&quot;>
                        ROI in {calc.time_to_roi} months
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  };

  const CompetitiveAnalysis: React.FC = () => (
    <div className="mb-8&quot;>
      <h3 className="text-xl font-semibold text-white mb-4&quot;>Competitive Analysis</h3>
      
      <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20&quot;>
        <div className="space-y-4&quot;>
          {engine.competitive_analysis.map((competitor, index) => (
            <div key={index} className="border-b border-white/10 pb-4 last:border-0&quot;>
              <div className="flex items-center justify-between mb-2&quot;>
                <h4 className="font-medium text-white&quot;>{competitor.competitor_name}</h4>
                <div className="flex items-center gap-2&quot;>
                  <span className={`px-2 py-1 rounded-full text-xs ${
                    competitor.price_difference > 0 
                      ? &apos;bg-green-500/20 text-green-300 border border-green-500/30&apos;
                      : &apos;bg-red-500/20 text-red-300 border border-red-500/30
                  }`}>
                    {competitor.price_difference > 0 ? &apos;+&apos; : &apos;&apos;}{competitor.price_difference}%
                  </span>
                  <span className="text-sm text-white/60&quot;>vs this tool</span>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4&quot;>
                <div>
                  <div className="text-sm text-white/70 mb-1&quot;>Value Score</div>
                  <div className="flex items-center gap-2&quot;>
                    <div className="flex-1 bg-white/10 rounded-full h-2&quot;>
                      <div 
                        className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full&quot;
                        style={{ width: `${competitor.value_score * 10}%` }}
                      />
                    </div>
                    <span className="text-sm text-white&quot;>{competitor.value_score}/10</span>
                  </div>
                </div>
                
                <div>
                  <div className="text-sm text-white/70 mb-2&quot;>Feature Comparison</div>
                  <div className="flex flex-wrap gap-1&quot;>
                    {Object.entries(competitor.feature_comparison).map(([feature, status]) => (
                      <span
                        key={feature}
                        className={`px-2 py-1 rounded text-xs ${
                          status === &apos;better&apos; 
                            ? &apos;bg-green-500/20 text-green-300&apos;
                            : status === &apos;equal&apos;
                            ? &apos;bg-yellow-500/20 text-yellow-300&apos;
                            : &apos;bg-red-500/20 text-red-300&apos;
                        }`}
                      >
                        {feature}: {status === &apos;better&apos; ? &apos;↑&apos; : status === &apos;equal&apos; ? &apos;= : &apos;↓&apos;}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const PriceHistory: React.FC = () => (
    <div className="mb-8&quot;>
      <h3 className="text-xl font-semibold text-white mb-4&quot;>Price History</h3>
      
      <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20&quot;>
        <div className="space-y-3&quot;>
          {engine.price_history.map((point, index) => (
            <div key={index} className="flex justify-between items-center&quot;>
              <div>
                <div className="text-white&quot;>{new Date(point.date).toLocaleDateString()}</div>
                {point.change_reason && (
                  <div className="text-sm text-white/50&quot;>{point.change_reason}</div>
                )}
              </div>
              <div className="text-right&quot;>
                <div className="font-medium text-white&quot;>${point.price}</div>
                <div className="text-sm text-white/60 capitalize&quot;>{point.plan_type}</div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-6 p-4 bg-blue-500/10 rounded-lg border border-blue-500/20&quot;>
          <div className="text-sm text-blue-300&quot;>
            <strong>Price Trend:</strong> Based on historical data, prices have increased by an average of 8% annually. 
            Current pricing represents good value compared to market trends.
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="max-w-6xl mx-auto&quot;>
      <div className="mb-8&quot;>
        <h2 className="text-3xl font-bold text-white mb-2&quot;>Pricing Intelligence Engine</h2>
        <p className="text-white/70&quot;>
          Multi-dimensional cost analysis with ROI calculations and competitive insights
        </p>
      </div>

      <ScenarioSelector />
      
      {activeScenario && (
        <>
          <CostBreakdown />
          <ROIAnalysis />
          <CompetitiveAnalysis />
          <PriceHistory />
        </>
      )}
    </div>
  );
};

export default PricingIntelligence;
