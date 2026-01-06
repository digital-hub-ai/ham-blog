import React from &apos;react&apos;;
import Head from &apos;next/head&apos;;
import Link from &apos;next/link&apos;;
import RealityBridges from &apos;../../components/RealityBridges&apos;;

export default function LifestyleReality() {
  // Sub-realities within the lifestyle dimension
  const subRealities = [
    { id: &apos;wellness&apos;, name: &apos;Wellness&apos;, icon: &apos;🧘&apos; },
    { id: &apos;food&apos;, name: &apos;Food & Nutrition&apos;, icon: &apos;🥗&apos; },
    { id: &apos;fitness&apos;, name: &apos;Fitness&apos;, icon: &apos;💪&apos; },
    { id: &apos;mindfulness&apos;, name: &apos;Mindfulness&apos;, icon: &apos;🧠&apos; },
    { id: &apos;relationships&apos;, name: &apos;Relationships&apos;, icon: &apos;❤️&apos; },
    { id: &apos;personal-growth&apos;, name: &apos;Personal Growth&apos;, icon: &apos;🌱&apos; }
  ];

  // Featured lifestyle articles
  const featuredArticles = [
    {
      id: &apos;mindful-living&apos;,
      title: &apos;Mindful Living in the Digital Age: Finding Balance Amid Constant Connectivity&apos;,
      excerpt: &apos;Practical strategies for maintaining mental clarity and emotional well-being in our hyperconnected world.&apos;,
      date: &apos;Dec 21, 2025&apos;,
      author: &apos;Mindfulness Coach Aria Peace&apos;,
      readTime: &apos;12 min read&apos;,
      tags: [&apos;Mindfulness&apos;, &apos;Digital Wellness&apos;, &apos;Balance&apos;]
    },
    {
      id: &apos;nutritional-genomics&apos;,
      title: &apos;Nutritional Genomics: Eating Based on Your DNA Blueprint&apos;,
      excerpt: &apos;How personalized nutrition based on genetic profiling is revolutionizing dietary approaches for optimal health.&apos;,
      date: &apos;Dec 19, 2025&apos;,
      author: &apos;Nutritionist Dr. Leo Genome&apos;,
      readTime: &apos;14 min read&apos;,
      tags: [&apos;Nutrition&apos;, &apos;Genetics&apos;, &apos;Health&apos;]
    },
    {
      id: &apos;conscious-consumerism&apos;,
      title: &apos;Conscious Consumerism: Making Ethical Choices in a Global Marketplace&apos;,
      excerpt: &apos;Navigating modern consumption with awareness of environmental and social impact for a more sustainable lifestyle.&apos;,
      date: &apos;Dec 17, 2025&apos;,
      author: &apos;Ethics Advocate Maya Green&apos;,
      readTime: &apos;11 min read&apos;,
      tags: [&apos;Sustainability&apos;, &apos;Ethics&apos;, &apos;Lifestyle&apos;]
    }
  ];

  // Recent lifestyle posts
  const recentPosts = [
    { id: &apos;1&apos;, title: &apos;Morning Rituals for Peak Performance&apos;, date: &apos;Dec 20, 2025&apos; },
    { id: &apos;2&apos;, title: &apos;Minimalism: Living with Less, Experiencing More&apos;, date: &apos;Dec 19, 2025&apos; },
    { id: &apos;3&apos;, title: &apos;The Science of Happiness: Evidence-Based Practices&apos;, date: &apos;Dec 18, 2025&apos; },
    { id: &apos;4&apos;, title: &apos;Digital Detox: Reclaiming Your Attention&apos;, date: &apos;Dec 17, 2025&apos; },
    { id: &apos;5&apos;, title: &apos;Sleep Optimization in the Modern World&apos;, date: &apos;Dec 16, 2025&apos; }
  ];

  return (
    <>
      <Head>
        <title>Existence Explorer - Lifestyle Dimension</title>
        <meta name="description&quot; content="Enhance your daily journey through wellness, culture, and mindful living.&quot; />
        <meta name="viewport&quot; content="width=device-width, initial-scale=1&quot; />
        <link rel="icon&quot; href="/favicon.ico&quot; />
      </Head>

      {/* Reality Bridges Navigation */}
      <RealityBridges currentReality="lifestyle&quot; />

      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-indigo-900 to-black text-white overflow-hidden&quot;>
        {/* Organic pattern background */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none&quot;>
          <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-indigo-500/5 animate-pulse&quot;></div>
          <div className="absolute bottom-1/3 right-1/4 w-48 h-48 rounded-full bg-purple-500/5 animate-pulse&quot; style={{animationDelay: &apos;1s}}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-indigo-500/5 animate-pulse&quot; style={{animationDelay: '2s'}}></div>
        </div>

        <div className="container mx-auto px-4 py-24 max-w-6xl relative z-10&quot;>
          {/* Reality Header */}
          <div className="text-center mb-16 pt-4&quot;>
            <div className="mb-6&quot;>
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent mb-4&quot;>Existence Explorer</h1>
              <div className="w-32 h-1 bg-gradient-to-r from-indigo-400 to-purple-500 mx-auto rounded-full mb-6&quot;></div>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto&quot;>The Lifestyle Dimension - Enhance your daily journey through wellness, culture, and mindful living.</p>
            </div>
            
            {/* Reality Navigation */}
            <div className="flex flex-wrap justify-center gap-4 mb-12&quot;>
              {subRealities.map((sub) => (
                <Link 
                  key={sub.id}
                  href={`/blog/lifestyle/${sub.id}`}
                  className="px-4 py-2 bg-indigo-900/30 rounded-full text-indigo-300 border border-indigo-700/50 hover:bg-indigo-800/50 hover:border-indigo-600/50 transition-all duration-300 flex items-center&quot;
                >
                  <span className="mr-2&quot;>{sub.icon}</span>
                  {sub.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Lifestyle Articles Grid */}
          <div className="mb-16&quot;>
            <h2 className="text-3xl font-bold mb-8 flex items-center&quot;>
              <span className="mr-3&quot;>🌟</span>
              Mindful Living
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8&quot;>
              {featuredArticles.map((article) => (
                <article 
                  key={article.id}
                  className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-lg rounded-2xl overflow-hidden border border-indigo-700/50 hover:border-indigo-500/70 transition-all duration-500 transform hover:-translate-y-2&quot;
                >
                  <div className="h-48 bg-gradient-to-r from-indigo-600/20 to-purple-600/20 relative&quot;>
                    <div className="absolute inset-0 flex items-center justify-center&quot;>
                      <div className="w-24 h-24 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center text-3xl&quot;>
                        🧘
                      </div>
                    </div>
                  </div>
                  <div className="p-6&quot;>
                    <div className="flex flex-wrap gap-2 mb-4&quot;>
                      {article.tags.map((tag, index) => (
                        <span key={index} className="px-2 py-1 bg-indigo-900/30 text-indigo-300 text-xs rounded-full border border-indigo-700/50&quot;>
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h3 className="text-xl font-bold mb-3 group-hover:text-indigo-300 transition-colors&quot;>
                      <Link href={`/blog/lifestyle/${article.id}`} className="hover:text-indigo-300 transition-colors&quot;>
                        {article.title}
                      </Link>
                    </h3>
                    <p className="text-gray-400 mb-4&quot;>
                      {article.excerpt}
                    </p>
                    <div className="flex items-center justify-between&quot;>
                      <span className="text-gray-500 text-sm&quot;>By {article.author}</span>
                      <div className="text-right&quot;>
                        <span className="text-gray-500 text-sm block&quot;>{article.date}</span>
                        <span className="text-gray-500 text-sm&quot;>{article.readTime}</span>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Lifestyle-Specific Features */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16&quot;>
            {/* Wellness Tracker */}
            <div className="lg:col-span-2 bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-lg rounded-2xl border border-indigo-700/50 p-6&quot;>
              <h3 className="text-2xl font-bold mb-4 flex items-center&quot;>
                <span className="mr-3&quot;>📊</span>
                Daily Wellness Tracker
              </h3>
              <div className="bg-gray-900 rounded-xl p-4&quot;>
                <div className="grid grid-cols-4 gap-4 mb-6 text-center&quot;>
                  <div className="bg-indigo-900/20 rounded-lg p-3 border border-indigo-700/30&quot;>
                    <div className="text-2xl mb-1&quot;>😴</div>
                    <div className="text-indigo-400 text-sm&quot;>Sleep</div>
                    <div className="text-white font-bold&quot;>7.5h</div>
                  </div>
                  <div className="bg-indigo-900/20 rounded-lg p-3 border border-indigo-700/30&quot;>
                    <div className="text-2xl mb-1&quot;>💧</div>
                    <div className="text-indigo-400 text-sm&quot;>Hydration</div>
                    <div className="text-white font-bold&quot;>8 glasses</div>
                  </div>
                  <div className="bg-indigo-900/20 rounded-lg p-3 border border-indigo-700/30&quot;>
                    <div className="text-2xl mb-1&quot;>🚶</div>
                    <div className="text-indigo-400 text-sm&quot;>Movement</div>
                    <div className="text-white font-bold&quot;>10,240 steps</div>
                  </div>
                  <div className="bg-indigo-900/20 rounded-lg p-3 border border-indigo-700/30&quot;>
                    <div className="text-2xl mb-1&quot;>🧘</div>
                    <div className="text-indigo-400 text-sm&quot;>Mindfulness</div>
                    <div className="text-white font-bold&quot;>15 min</div>
                  </div>
                </div>
                
                <div className="h-32 bg-gradient-to-r from-indigo-900/30 to-purple-900/30 rounded-lg mb-4 flex items-center justify-center&quot;>
                  <div className="text-center w-full&quot;>
                    <div className="text-indigo-400 mb-2&quot;>Weekly Wellness Progress</div>
                    <div className="relative h-8 mx-4&quot;>
                      <div className="absolute inset-0 bg-gray-800 rounded-full&quot;></div>
                      <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full w-3/4&quot;></div>
                      <div className="absolute inset-0 flex items-center justify-center text-white text-sm font-bold&quot;>
                        75% Complete
                      </div>
                    </div>
                  </div>
                </div>
                
                <button className="w-full py-3 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 rounded-lg transition-colors&quot;>
                  Log Today&apos;s Activities
                </button>
              </div>
            </div>

            {/* Lifestyle Stats */}
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-lg rounded-2xl border border-indigo-700/50 p-6&quot;>
              <h3 className="text-2xl font-bold mb-4 flex items-center&quot;>
                <span className="mr-3&quot;>🌱</span>
                Growth Metrics
              </h3>
              <div className="space-y-4&quot;>
                <div>
                  <div className="flex justify-between mb-1&quot;>
                    <span className="text-gray-300&quot;>Wellness Score</span>
                    <span className="text-indigo-400&quot;>87%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2&quot;>
                    <div className="bg-indigo-500 h-2 rounded-full&quot; style={{width: &apos;87%}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1&quot;>
                    <span className="text-gray-300&quot;>Mindfulness</span>
                    <span className="text-indigo-400&quot;>92%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2&quot;>
                    <div className="bg-purple-500 h-2 rounded-full&quot; style={{width: &apos;92%}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1&quot;>
                    <span className="text-gray-300&quot;>Life Satisfaction</span>
                    <span className="text-indigo-400&quot;>84%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2&quot;>
                    <div className="bg-blue-500 h-2 rounded-full&quot; style={{width: &apos;84%}}></div>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 pt-4 border-t border-gray-700&quot;>
                <div className="flex justify-between&quot;>
                  <span className="text-gray-400&quot;>Lifestyle Articles</span>
                  <span className="text-indigo-400 font-bold&quot;>432</span>
                </div>
                <div className="flex justify-between&quot;>
                  <span className="text-gray-400&quot;>Community Members</span>
                  <span className="text-indigo-400 font-bold&quot;>28.3k</span>
                </div>
                <div className="flex justify-between&quot;>
                  <span className="text-gray-400&quot;>Wellness Coaches</span>
                  <span className="text-indigo-400 font-bold&quot;>156</span>
                </div>
              </div>
            </div>
          </div>

          {/* Recent Posts */}
          <div className="mb-16&quot;>
            <h2 className="text-3xl font-bold mb-8 flex items-center&quot;>
              <span className="mr-3&quot;>📜</span>
              Recent Reflections
            </h2>
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-lg rounded-2xl border border-indigo-700/50 overflow-hidden&quot;>
              <div className="divide-y divide-gray-700/50&quot;>
                {recentPosts.map((post) => (
                  <div key={post.id} className="p-6 hover:bg-gray-800/30 transition-colors&quot;>
                    <div className="flex justify-between&quot;>
                      <h3 className="text-lg font-medium&quot;>
                        <Link href={`/blog/lifestyle/post-${post.id}`} className="hover:text-indigo-300 transition-colors&quot;>
                          {post.title}
                        </Link>
                      </h3>
                      <span className="text-gray-500 text-sm&quot;>{post.date}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Return to Library */}
          <div className="text-center&quot;>
            <Link 
              href="/blog&quot;
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105&quot;
            >
              <span className="mr-2&quot;>🌌</span>
              Return to Library of Realities
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}