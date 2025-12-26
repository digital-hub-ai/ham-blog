import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function BusinessReality() {
  // Sub-realities within the business dimension
  const subRealities = [
    { id: 'strategy', name: 'Business Strategy', icon: '🧭', description: 'Navigate competitive landscapes and plan for future success' },
    { id: 'marketing', name: 'Digital Marketing', icon: '📢', description: 'Connect with audiences through cutting-edge marketing approaches' },
    { id: 'finance', name: 'Finance & Investment', icon: '💰', description: 'Manage resources and capitalize on emerging opportunities' },
    { id: 'leadership', name: 'Leadership', icon: '👑', description: 'Inspire teams and drive organizational excellence' },
    { id: 'innovation', name: 'Innovation', icon: '💡', description: 'Foster creativity and develop breakthrough solutions' },
    { id: 'entrepreneurship', name: 'Entrepreneurship', icon: '🚀', description: 'Launch ventures and scale impactful businesses' }
  ];
  // Featured business insights
  const featuredInsights = [
    {
      id: 'strategy/mastering-competitive-landscape-2025',
      title: 'Business Strategy Insights: Mastering 2025\'s Competitive Landscape',
      excerpt: 'Comprehensive guide to modern business strategy in 2025, covering adaptive planning, digital transformation, and sustainable competitive advantage.',
      date: 'Dec 21, 2025',
      author: 'Strategic Insights Team',
      readTime: '18 min read',
      tags: ['Strategy', 'Business', 'Planning', 'Innovation', 'Competitive Advantage']
    },
    {
      id: 'finance/navigating-economic-landscape-2025',
      title: 'Financial Insights for Modern Businesses: Navigating 2025\'s Economic Landscape',
      excerpt: 'Complete guide to financial management in 2025, covering investment strategies, risk management, and emerging financial technologies.',
      date: 'Dec 21, 2025',
      author: 'Financial Strategy Team',
      readTime: '20 min read',
      tags: ['Finance', 'Investment', 'Risk Management', 'Financial Planning', 'Fintech']
    },
    {
      id: 'marketing/customer-engagement-strategies-2025',
      title: 'Digital Marketing Trends 2025: Strategies for Customer Engagement',
      excerpt: 'Complete guide to 2025\'s digital marketing landscape, covering AI-powered personalization, interactive content, and emerging channel strategies.',
      date: 'Dec 21, 2025',
      author: 'Marketing Innovation Team',
      readTime: '22 min read',
      tags: ['Marketing', 'Digital', 'Personalization', 'AI', 'Customer Engagement']
    }
  ];

  // Recent business analyses - using actual blog posts
  const recentAnalyses = [
    { id: 'strategy/blockchain-enterprise-transformation', title: 'Blockchain in Supply Chain Management', date: 'Dec 20, 2025' },
    { id: 'leadership/distributed-leadership-remote-teams', title: 'Remote Work Productivity Metrics', date: 'Dec 19, 2025' },
    { id: 'innovation/sustainable-innovation-circular-economy', title: 'Sustainable Business Models 2025', date: 'Dec 18, 2025' },
    { id: 'finance/cryptocurrency-adoption-trends', title: 'Cryptocurrency Adoption Trends', date: 'Dec 17, 2025' },
    { id: 'marketing/neuroscience-consumer-behavior', title: 'Neuroscience in Consumer Behavior', date: 'Dec 16, 2025' }
  ];

  return (
    <>
      <Head>
        <title>Corporate Consciousness - Business Realm</title>
        <meta name="description" content="Navigate the economic galaxies where strategy meets innovation and markets evolve." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-amber-900 to-black text-white overflow-hidden">
        {/* Economic vortex background */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full border border-amber-500/10 animate-spin" style={{animationDuration: '30s'}}></div>
          <div className="absolute bottom-1/3 right-1/4 w-64 h-64 rounded-full border border-yellow-500/10 animate-spin" style={{animationDuration: '45s', animationDirection: 'reverse'}}></div>
        </div>

        <div className="container mx-auto px-4 py-12 max-w-6xl relative z-10">
          {/* Reality Header */}
          <div className="text-center mb-16 pt-8">
            <div className="mb-6">
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-amber-400 to-yellow-500 bg-clip-text text-transparent mb-4">Corporate Consciousness</h1>
              <div className="w-32 h-1 bg-gradient-to-r from-amber-400 to-yellow-500 mx-auto rounded-full mb-6"></div>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">The Business Realm - Navigate the economic galaxies where strategy meets innovation and markets evolve.</p>
            </div>
            
            {/* Reality Navigation */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
              {subRealities.map((sub) => (
                <Link 
                  key={sub.id}
                  href={`/blog/business/${sub.id}`}
                  className="p-4 bg-amber-900/30 rounded-2xl text-amber-300 border border-amber-700/50 hover:bg-amber-800/50 hover:border-amber-600/50 transition-all duration-300 flex items-start"
                >
                  <span className="text-2xl mr-3">{sub.icon}</span>
                  <div>
                    <h3 className="font-bold text-lg">{sub.name}</h3>
                    <p className="text-amber-200/80 text-sm mt-1">{sub.description}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Business Insights Grid */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 flex items-center">
              <span className="mr-3">📈</span>
              Strategic Insights
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {featuredInsights.map((insight) => (
                <article 
                  key={insight.id}
                  className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-lg rounded-2xl overflow-hidden border border-amber-700/50 hover:border-amber-500/70 transition-all duration-500 transform hover:-translate-y-2"
                >
                  <div className="h-48 bg-gradient-to-r from-amber-600/20 to-yellow-600/20 relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-24 h-24 rounded-full bg-gradient-to-r from-amber-500 to-yellow-500 flex items-center justify-center text-3xl">
                        💼
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {insight.tags.map((tag, index) => (
                        <span key={index} className="px-2 py-1 bg-amber-900/30 text-amber-300 text-xs rounded-full border border-amber-700/50">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h3 className="text-xl font-bold mb-3 group-hover:text-amber-300 transition-colors">
                      <Link href={`/blog/business/${insight.id}`} className="hover:text-amber-300 transition-colors">
                        {insight.title}
                      </Link>
                    </h3>
                    <p className="text-gray-400 mb-4">
                      {insight.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-500 text-sm">By {insight.author}</span>
                      <div className="text-right">
                        <span className="text-gray-500 text-sm block">{insight.date}</span>
                        <span className="text-gray-500 text-sm">{insight.readTime}</span>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Business-Specific Features */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {/* Market Dashboard */}
            <div className="lg:col-span-2 bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-lg rounded-2xl border border-amber-700/50 p-6">
              <h3 className="text-2xl font-bold mb-4 flex items-center">
                <span className="mr-3">📊</span>
                Market Pulse Dashboard
              </h3>
              <div className="bg-gray-900 rounded-xl p-4">
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="bg-amber-900/20 rounded-lg p-4 border border-amber-700/30">
                    <div className="text-amber-400 text-sm">Market Cap</div>
                    <div className="text-2xl font-bold">$2.4T</div>
                    <div className="text-green-400 text-sm">↑ 3.2%</div>
                  </div>
                  <div className="bg-amber-900/20 rounded-lg p-4 border border-amber-700/30">
                    <div className="text-amber-400 text-sm">Volume</div>
                    <div className="text-2xl font-bold">$124B</div>
                    <div className="text-red-400 text-sm">↓ 1.1%</div>
                  </div>
                  <div className="bg-amber-900/20 rounded-lg p-4 border border-amber-700/30">
                    <div className="text-amber-400 text-sm">Sentiment</div>
                    <div className="text-2xl font-bold">78%</div>
                    <div className="text-green-400 text-sm">Positive</div>
                  </div>
                </div>
                
                <div className="h-40 bg-gradient-to-r from-amber-900/30 to-yellow-900/30 rounded-lg mb-4 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-amber-400 mb-2">Market Trends Visualization</div>
                    <div className="flex items-end justify-center space-x-1">
                      {[40, 60, 80, 100, 70, 90, 60, 80, 100, 90].map((height, index) => (
                        <div 
                          key={index}
                          className="w-4 bg-gradient-to-t from-amber-500 to-yellow-500 rounded-t"
                          style={{height: `${height}%`}}
                        ></div>
                      ))}
                    </div>
                  </div>
                </div>
                
                <button className="w-full py-3 bg-gradient-to-r from-amber-600 to-yellow-600 hover:from-amber-700 hover:to-yellow-700 rounded-lg transition-colors">
                  Analyze Market Data
                </button>
              </div>
            </div>

            {/* Business Stats */}
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-lg rounded-2xl border border-amber-700/50 p-6">
              <h3 className="text-2xl font-bold mb-4 flex items-center">
                <span className="mr-3">💼</span>
                Corporate Metrics
              </h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-300">Innovation Index</span>
                    <span className="text-amber-400">89%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-amber-500 h-2 rounded-full" style={{width: '89%'}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-300">Market Adaptation</span>
                    <span className="text-amber-400">92%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-yellow-500 h-2 rounded-full" style={{width: '92%'}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-300">Growth Potential</span>
                    <span className="text-amber-400">85%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-orange-500 h-2 rounded-full" style={{width: '85%'}}></div>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 pt-4 border-t border-gray-700">
                <div className="flex justify-between">
                  <span className="text-gray-400">Business Reports</span>
                  <span className="text-amber-400 font-bold">756</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Industry Leaders</span>
                  <span className="text-amber-400 font-bold">32.4k</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Strategic Partners</span>
                  <span className="text-amber-400 font-bold">187</span>
                </div>
              </div>
            </div>
          </div>

          {/* Recent Analyses */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 flex items-center">
              <span className="mr-3">🔍</span>
              Recent Analyses
            </h2>
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-lg rounded-2xl border border-amber-700/50 overflow-hidden">
              <div className="divide-y divide-gray-700/50">
                {recentAnalyses.map((analysis) => (
                  <div key={analysis.id} className="p-6 hover:bg-gray-800/30 transition-colors">
                    <div className="flex justify-between">
                      <h3 className="text-lg font-medium">
                        <Link href={`/blog/business/${analysis.id}`} className="hover:text-amber-300 transition-colors">
                          {analysis.title}
                        </Link>
                      </h3>
                      <span className="text-gray-500 text-sm">{analysis.date}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Return to Library */}
          <div className="text-center">
            <Link 
              href="/blog"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-amber-600 to-yellow-600 text-white rounded-lg font-semibold hover:from-amber-700 hover:to-yellow-700 transition-all duration-300 transform hover:scale-105"
            >
              <span className="mr-2">🌌</span>
              Return to Library of Realities
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}