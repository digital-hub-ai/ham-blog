import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import RealityBridges from '../../components/RealityBridges';

export default function LifestyleReality() {
  // Sub-realities within the lifestyle dimension
  const subRealities = [
    { id: 'wellness', name: 'Wellness', icon: '🧘' },
    { id: 'food', name: 'Food & Nutrition', icon: '🥗' },
    { id: 'fitness', name: 'Fitness', icon: '💪' },
    { id: 'mindfulness', name: 'Mindfulness', icon: '🧠' },
    { id: 'relationships', name: 'Relationships', icon: '❤️' },
    { id: 'personal-growth', name: 'Personal Growth', icon: '🌱' }
  ];

  // Featured lifestyle articles
  const featuredArticles = [
    {
      id: 'mindful-living',
      title: 'Mindful Living in the Digital Age: Finding Balance Amid Constant Connectivity',
      excerpt: 'Practical strategies for maintaining mental clarity and emotional well-being in our hyperconnected world.',
      date: 'Dec 21, 2025',
      author: 'Mindfulness Coach Aria Peace',
      readTime: '12 min read',
      tags: ['Mindfulness', 'Digital Wellness', 'Balance']
    },
    {
      id: 'nutritional-genomics',
      title: 'Nutritional Genomics: Eating Based on Your DNA Blueprint',
      excerpt: 'How personalized nutrition based on genetic profiling is revolutionizing dietary approaches for optimal health.',
      date: 'Dec 19, 2025',
      author: 'Nutritionist Dr. Leo Genome',
      readTime: '14 min read',
      tags: ['Nutrition', 'Genetics', 'Health']
    },
    {
      id: 'conscious-consumerism',
      title: 'Conscious Consumerism: Making Ethical Choices in a Global Marketplace',
      excerpt: 'Navigating modern consumption with awareness of environmental and social impact for a more sustainable lifestyle.',
      date: 'Dec 17, 2025',
      author: 'Ethics Advocate Maya Green',
      readTime: '11 min read',
      tags: ['Sustainability', 'Ethics', 'Lifestyle']
    }
  ];

  // Recent lifestyle posts
  const recentPosts = [
    { id: '1', title: 'Morning Rituals for Peak Performance', date: 'Dec 20, 2025' },
    { id: '2', title: 'Minimalism: Living with Less, Experiencing More', date: 'Dec 19, 2025' },
    { id: '3', title: 'The Science of Happiness: Evidence-Based Practices', date: 'Dec 18, 2025' },
    { id: '4', title: 'Digital Detox: Reclaiming Your Attention', date: 'Dec 17, 2025' },
    { id: '5', title: 'Sleep Optimization in the Modern World', date: 'Dec 16, 2025' }
  ];

  return (
    <>
      <Head>
        <title>Existence Explorer - Lifestyle Dimension</title>
        <meta name="description" content="Enhance your daily journey through wellness, culture, and mindful living." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Reality Bridges Navigation */}
      <RealityBridges currentReality="lifestyle" />

      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-indigo-900 to-black text-white overflow-hidden">
        {/* Organic pattern background */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-indigo-500/5 animate-pulse"></div>
          <div className="absolute bottom-1/3 right-1/4 w-48 h-48 rounded-full bg-purple-500/5 animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-indigo-500/5 animate-pulse" style={{animationDelay: '2s'}}></div>
        </div>

        <div className="container mx-auto px-4 py-24 max-w-6xl relative z-10">
          {/* Reality Header */}
          <div className="text-center mb-16 pt-4">
            <div className="mb-6">
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent mb-4">Existence Explorer</h1>
              <div className="w-32 h-1 bg-gradient-to-r from-indigo-400 to-purple-500 mx-auto rounded-full mb-6"></div>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">The Lifestyle Dimension - Enhance your daily journey through wellness, culture, and mindful living.</p>
            </div>
            
            {/* Reality Navigation */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {subRealities.map((sub) => (
                <Link 
                  key={sub.id}
                  href={`/blog/lifestyle/${sub.id}`}
                  className="px-4 py-2 bg-indigo-900/30 rounded-full text-indigo-300 border border-indigo-700/50 hover:bg-indigo-800/50 hover:border-indigo-600/50 transition-all duration-300 flex items-center"
                >
                  <span className="mr-2">{sub.icon}</span>
                  {sub.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Lifestyle Articles Grid */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 flex items-center">
              <span className="mr-3">🌟</span>
              Mindful Living
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {featuredArticles.map((article) => (
                <article 
                  key={article.id}
                  className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-lg rounded-2xl overflow-hidden border border-indigo-700/50 hover:border-indigo-500/70 transition-all duration-500 transform hover:-translate-y-2"
                >
                  <div className="h-48 bg-gradient-to-r from-indigo-600/20 to-purple-600/20 relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-24 h-24 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center text-3xl">
                        🧘
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {article.tags.map((tag, index) => (
                        <span key={index} className="px-2 py-1 bg-indigo-900/30 text-indigo-300 text-xs rounded-full border border-indigo-700/50">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h3 className="text-xl font-bold mb-3 group-hover:text-indigo-300 transition-colors">
                      <Link href={`/blog/lifestyle/${article.id}`} className="hover:text-indigo-300 transition-colors">
                        {article.title}
                      </Link>
                    </h3>
                    <p className="text-gray-400 mb-4">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-500 text-sm">By {article.author}</span>
                      <div className="text-right">
                        <span className="text-gray-500 text-sm block">{article.date}</span>
                        <span className="text-gray-500 text-sm">{article.readTime}</span>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Lifestyle-Specific Features */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {/* Wellness Tracker */}
            <div className="lg:col-span-2 bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-lg rounded-2xl border border-indigo-700/50 p-6">
              <h3 className="text-2xl font-bold mb-4 flex items-center">
                <span className="mr-3">📊</span>
                Daily Wellness Tracker
              </h3>
              <div className="bg-gray-900 rounded-xl p-4">
                <div className="grid grid-cols-4 gap-4 mb-6 text-center">
                  <div className="bg-indigo-900/20 rounded-lg p-3 border border-indigo-700/30">
                    <div className="text-2xl mb-1">😴</div>
                    <div className="text-indigo-400 text-sm">Sleep</div>
                    <div className="text-white font-bold">7.5h</div>
                  </div>
                  <div className="bg-indigo-900/20 rounded-lg p-3 border border-indigo-700/30">
                    <div className="text-2xl mb-1">💧</div>
                    <div className="text-indigo-400 text-sm">Hydration</div>
                    <div className="text-white font-bold">8 glasses</div>
                  </div>
                  <div className="bg-indigo-900/20 rounded-lg p-3 border border-indigo-700/30">
                    <div className="text-2xl mb-1">🚶</div>
                    <div className="text-indigo-400 text-sm">Movement</div>
                    <div className="text-white font-bold">10,240 steps</div>
                  </div>
                  <div className="bg-indigo-900/20 rounded-lg p-3 border border-indigo-700/30">
                    <div className="text-2xl mb-1">🧘</div>
                    <div className="text-indigo-400 text-sm">Mindfulness</div>
                    <div className="text-white font-bold">15 min</div>
                  </div>
                </div>
                
                <div className="h-32 bg-gradient-to-r from-indigo-900/30 to-purple-900/30 rounded-lg mb-4 flex items-center justify-center">
                  <div className="text-center w-full">
                    <div className="text-indigo-400 mb-2">Weekly Wellness Progress</div>
                    <div className="relative h-8 mx-4">
                      <div className="absolute inset-0 bg-gray-800 rounded-full"></div>
                      <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full w-3/4"></div>
                      <div className="absolute inset-0 flex items-center justify-center text-white text-sm font-bold">
                        75% Complete
                      </div>
                    </div>
                  </div>
                </div>
                
                <button className="w-full py-3 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 rounded-lg transition-colors">
                  Log Today's Activities
                </button>
              </div>
            </div>

            {/* Lifestyle Stats */}
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-lg rounded-2xl border border-indigo-700/50 p-6">
              <h3 className="text-2xl font-bold mb-4 flex items-center">
                <span className="mr-3">🌱</span>
                Growth Metrics
              </h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-300">Wellness Score</span>
                    <span className="text-indigo-400">87%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-indigo-500 h-2 rounded-full" style={{width: '87%'}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-300">Mindfulness</span>
                    <span className="text-indigo-400">92%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-purple-500 h-2 rounded-full" style={{width: '92%'}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-300">Life Satisfaction</span>
                    <span className="text-indigo-400">84%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-blue-500 h-2 rounded-full" style={{width: '84%'}}></div>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 pt-4 border-t border-gray-700">
                <div className="flex justify-between">
                  <span className="text-gray-400">Lifestyle Articles</span>
                  <span className="text-indigo-400 font-bold">432</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Community Members</span>
                  <span className="text-indigo-400 font-bold">28.3k</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Wellness Coaches</span>
                  <span className="text-indigo-400 font-bold">156</span>
                </div>
              </div>
            </div>
          </div>

          {/* Recent Posts */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 flex items-center">
              <span className="mr-3">📜</span>
              Recent Reflections
            </h2>
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-lg rounded-2xl border border-indigo-700/50 overflow-hidden">
              <div className="divide-y divide-gray-700/50">
                {recentPosts.map((post) => (
                  <div key={post.id} className="p-6 hover:bg-gray-800/30 transition-colors">
                    <div className="flex justify-between">
                      <h3 className="text-lg font-medium">
                        <Link href={`/blog/lifestyle/post-${post.id}`} className="hover:text-indigo-300 transition-colors">
                          {post.title}
                        </Link>
                      </h3>
                      <span className="text-gray-500 text-sm">{post.date}</span>
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
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
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