// components/Sanctuary/FocusCrystal.tsx
&apos;use client&apos;;

import { useState, useEffect } from &apos;react&apos;;
import { useFavorites } from &apos;../../hooks/useFavorites&apos;;
import { tools } from &apos;../../data/tools&apos;;
import { Tool } from &apos;../../types/tool&apos;;

interface SanctuaryStats {
  totalTools: number;
  categories: number;
  newUpdates: number;
  healthScore: number;
  monthlyCost: number;
  lastActivity: string;
}

export default function FocusCrystal() {
  const { favorites } = useFavorites();
  const [stats, setStats] = useState<SanctuaryStats | null>(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const [activeTab, setActiveTab] = useState<'overview' | 'health' | 'insights'>('overview');

  // Calculate sanctuary statistics
  useEffect(() => {
    if (!favorites.length) return;

    const favoriteTools: Tool[] = [];
    favorites.forEach(favId => {
      const tool = tools.find(t => t && t.id === favId);
      if (tool) {
        favoriteTools.push(tool);
      }
    });
    const categories = new Set(favoriteTools.map(tool => tool.category)).size;
    
    // Simulate new updates (in real app, this would come from API)
    const newUpdates = Math.floor(Math.random() * 8);
    
    // Calculate health score based on various factors
    const healthScore = Math.min(100, Math.floor(
      (favoriteTools.length * 5) + // Base score for having tools
      (categories * 10) + // Bonus for diversity
      (100 - favoriteTools.filter(t => t.pricing === 'Free').length * 2) // Bonus for paid tools
    ));

    // Calculate monthly cost (simulated)
    const monthlyCost = favoriteTools.reduce((total, tool) => {
      if (tool.pricing === &apos;Free&apos;) return total;
      if (tool.pricing === &apos;Freemium&apos;) return total + 10;
      return total + 29; // Average paid tool cost
    }, 0);

    setStats({
      totalTools: favoriteTools.length,
      categories,
      newUpdates,
      healthScore,
      monthlyCost,
      lastActivity: &apos;2 hours ago&apos;
    });
  }, [favorites]);

  if (!stats) return null;

  return (
    <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50&quot;>
      {/* Crystal Core */}
      <div 
        className={`
          relative transition-all duration-700 ease-out
          ${isExpanded ? &apos;scale-150&apos; : &apos;scale-100}
        `}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {/* Outer Crystal Glow */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 rounded-full blur-xl opacity-60 animate-pulse&quot; />
        
        {/* Crystal Body */}
        <div className="relative w-32 h-32 bg-gradient-to-br from-blue-500/20 to-purple-600/30 backdrop-blur-md rounded-2xl border border-white/20 shadow-2xl flex items-center justify-center cursor-pointer hover:scale-105 transition-transform&quot;>
          
          {/* Stats Display */}
          <div className="text-center text-white&quot;>
            <div className="text-2xl font-bold&quot;>{stats.totalTools}</div>
            <div className="text-xs opacity-80&quot;>Tools</div>
          </div>
        </div>

        {/* Floating Stats Orbs */}
        {!isExpanded && (
          <>
            <div className="absolute -top-8 -right-8 w-12 h-12 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center text-white text-xs font-bold shadow-lg animate-bounce&quot;>
              {stats.categories}
            </div>
            <div className="absolute -bottom-6 -right-10 w-10 h-10 bg-gradient-to-r from-orange-400 to-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold shadow-lg animate-pulse&quot;>
              {stats.newUpdates}
            </div>
            <div className="absolute -top-6 -left-8 w-8 h-8 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full flex items-center justify-center text-white text-xs font-bold shadow-lg&quot;>
              {stats.healthScore}%
            </div>
          </>
        )}
      </div>

      {/* Expanded Panel */}
      {isExpanded && (
        <div className="absolute top-20 left-1/2 transform -translate-x-1/2 w-96 bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 shadow-2xl p-6&quot;>
          
          {/* Tab Navigation */}
          <div className="flex gap-2 mb-6&quot;>
            {([&apos;overview&apos;, &apos;health&apos;, &apos;insights&apos;] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`
                  px-4 py-2 rounded-lg text-sm font-medium transition-all
                  ${activeTab === tab 
                    ? &apos;bg-white/20 text-white&apos; 
                    : &apos;text-white/60 hover:text-white hover:bg-white/10
                  }
                `}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="text-white&quot;>
            {activeTab === &apos;overview&apos; && (
              <div className="space-y-4&quot;>
                <div className="grid grid-cols-2 gap-4&quot;>
                  <div className="bg-white/10 rounded-lg p-3&quot;>
                    <div className="text-2xl font-bold&quot;>{stats.totalTools}</div>
                    <div className="text-sm opacity-70&quot;>Total Tools</div>
                  </div>
                  <div className="bg-white/10 rounded-lg p-3&quot;>
                    <div className="text-2xl font-bold&quot;>{stats.categories}</div>
                    <div className="text-sm opacity-70&quot;>Categories</div>
                  </div>
                  <div className="bg-white/10 rounded-lg p-3&quot;>
                    <div className="text-2xl font-bold&quot;>${stats.monthlyCost}</div>
                    <div className="text-sm opacity-70&quot;>Monthly Cost</div>
                  </div>
                  <div className="bg-white/10 rounded-lg p-3&quot;>
                    <div className="text-2xl font-bold&quot;>{stats.healthScore}%</div>
                    <div className="text-sm opacity-70&quot;>Health Score</div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg p-3&quot;>
                  <div className="flex items-center justify-between&quot;>
                    <span className="text-sm&quot;>Last Activity</span>
                    <span className="text-xs opacity-70&quot;>{stats.lastActivity}</span>
                  </div>
                </div>
              </div>
            )}

            {activeTab === &apos;health&apos; && (
              <div className="space-y-4&quot;>
                <div className="bg-white/10 rounded-lg p-4&quot;>
                  <div className="flex items-center justify-between mb-2&quot;>
                    <span className="font-medium&quot;>Collection Health</span>
                    <span className="text-sm&quot;>{stats.healthScore}%</span>
                  </div>
                  <div className="w-full bg-white/20 rounded-full h-2&quot;>
                    <div 
                      className="bg-gradient-to-r from-green-400 to-emerald-500 h-2 rounded-full transition-all duration-500&quot;
                      style={{ width: `${stats.healthScore}%` }}
                    />
                  </div>
                </div>

                <div className="space-y-2&quot;>
                  <div className="flex items-center gap-2&quot;>
                    <div className="w-2 h-2 bg-green-400 rounded-full&quot; />
                    <span className="text-sm&quot;>Your stack is well-balanced</span>
                  </div>
                  <div className="flex items-center gap-2&quot;>
                    <div className="w-2 h-2 bg-yellow-400 rounded-full&quot; />
                    <span className="text-sm&quot;>Consider adding analytics tools</span>
                  </div>
                  <div className="flex items-center gap-2&quot;>
                    <div className="w-2 h-2 bg-blue-400 rounded-full&quot; />
                    <span className="text-sm&quot;>Great category diversity</span>
                  </div>
                </div>
              </div>
            )}

            {activeTab === &apos;insights&apos; && (
              <div className="space-y-4&quot;>
                <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg p-4&quot;>
                  <div className="font-medium mb-2&quot;>AI Insights</div>
                  <div className="text-sm opacity-80 space-y-2&quot;>
                    <p>• Your design stack is 80% complete</p>
                    <p>• You could save $47/month with alternatives</p>
                    <p>• 3 tools released major updates this week</p>
                  </div>
                </div>

                <div className="bg-white/10 rounded-lg p-4&quot;>
                  <div className="font-medium mb-2&quot;>Recommendations</div>
                  <div className="text-sm opacity-80 space-y-1&quot;>
                    <p>• Add a project management tool</p>
                    <p>• Consider automation software</p>
                    <p>• Explore AI writing assistants</p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Quick Actions */}
          <div className="mt-6 flex gap-2&quot;>
            <button className="flex-1 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all text-sm font-medium&quot;>
              Compare Selected
            </button>
            <button className="flex-1 px-4 py-2 bg-white/20 text-white rounded-lg hover:bg-white/30 transition-all text-sm font-medium&quot;>
              Share Collection
            </button>
            <button className="flex-1 px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-lg hover:from-green-600 hover:to-emerald-700 transition-all text-sm font-medium&quot;>
              AI Organize
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
