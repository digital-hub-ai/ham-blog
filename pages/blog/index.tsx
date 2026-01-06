import React, { useState } from &apos;react&apos;;
import Head from &apos;next/head&apos;;
import Link from &apos;next/link&apos;;

export default function OmniverseLibrary() {
  // Reality categories - each is its own dimension
  const realityCategories = [
    {
      id: &apos;tech&apos;,
      name: &apos;Quantum Codex&apos;,
      subtitle: &apos;The Technology Universe&apos;,
      description: &apos;Dive into the digital cosmos where code flows like stardust and algorithms shape reality.&apos;,
      icon: &apos;💻&apos;,
      articleCount: 1247,
      color: &apos;from-cyan-500 to-blue-600&apos;,
      portalEffect: &apos;quantumGate&apos;
    },
    {
      id: &apos;travel&apos;,
      name: &apos;Chrono-Wanderer\&apos;s Atlas&apos;,
      subtitle: &apos;The Travel Dimension&apos;,
      description: &apos;Journey through时空continuums to explore cultures, destinations, and adventures beyond imagination.&apos;,
      icon: &apos;✈️&apos;,
      articleCount: 892,
      color: &apos;from-emerald-500 to-green-600&apos;,
      portalEffect: &apos;temporalRift&apos;
    },
    {
      id: &apos;design&apos;,
      name: &apos;Aesthetic Forge&apos;,
      subtitle: &apos;The Design Cosmos&apos;,
      description: &apos;Where creativity ignites and pixels become portals to无限possibilities.&apos;,
      icon: &apos;🎨&apos;,
      articleCount: 634,
      color: &apos;from-rose-500 to-pink-600&apos;,
      portalEffect: &apos;creativeNexus&apos;
    },
    {
      id: &apos;business&apos;,
      name: &apos;Corporate Consciousness&apos;,
      subtitle: &apos;The Business Realm&apos;,
      description: &apos;Navigate the economic galaxies where strategy meets innovation and markets evolve.&apos;,
      icon: &apos;💼&apos;,
      articleCount: 756,
      color: &apos;from-amber-500 to-yellow-600&apos;,
      portalEffect: &apos;economicVortex&apos;
    },
    {
      id: &apos;science&apos;,
      name: &apos;Discovery Nexus&apos;,
      subtitle: &apos;The Science Frontier&apos;,
      description: &apos;Uncover the mysteries of宇宙, from quantum physics to cosmic phenomena.&apos;,
      icon: &apos;🔬&apos;,
      articleCount: 521,
      color: &apos;from-violet-500 to-purple-600&apos;,
      portalEffect: &apos;discoveryWave&apos;
    },
    {
      id: &apos;lifestyle&apos;,
      name: &apos;Existence Explorer&apos;,
      subtitle: &apos;The Lifestyle Dimension&apos;,
      description: &apos;Enhance your daily journey through wellness, culture, and mindful living.&apos;,
      icon: &apos;🌟&apos;,
      articleCount: 432,
      color: &apos;from-indigo-500 to-blue-700&apos;,
      portalEffect: &apos;lifeFlow&apos;
    },
    {
      id: &apos;hobby&apos;,
      name: &apos;Passion Projects&apos;,
      subtitle: &apos;The Hobby Dimension&apos;,
      description: &apos;Explore creative pursuits, DIY projects, and personal passions that enrich life.&apos;,
      icon: &apos;🎨&apos;,
      articleCount: 327,
      color: &apos;from-orange-500 to-red-500&apos;,
      portalEffect: &apos;passionPortal&apos;
    },
    {
      id: &apos;food&apos;,
      name: &apos;Culinary Chronicles&apos;,
      subtitle: &apos;The Food & Beverage Universe&apos;,
      description: &apos;Savor recipes, cooking techniques, and gastronomic adventures from around the world.&apos;,
      icon: &apos;🍽️&apos;,
      articleCount: 489,
      color: &apos;from-yellow-500 to-orange-500&apos;,
      portalEffect: &apos;flavorVortex&apos;
    },
    {
      id: &apos;guides&apos;,
      name: &apos;Knowledge Compendium&apos;,
      subtitle: &apos;Guides & Tutorials Realm&apos;,
      description: &apos;Master new skills with comprehensive guides, step-by-step tutorials, and expert insights.&apos;,
      icon: &apos;📚&apos;,
      articleCount: 612,
      color: &apos;from-green-500 to-teal-500&apos;,
      portalEffect: &apos;wisdomGateway&apos;
    }
  ];

  // Featured realities that will appear at the top
  const featuredRealities = [
    {
      id: &apos;future-of-ai&apos;,
      title: &apos;The Future of Artificial Intelligence: What to Expect in 2025&apos;,
      excerpt: &apos;Exploring the latest trends and breakthroughs in AI technology that will shape our world in the coming year.&apos;,
      date: &apos;Dec 20, 2025&apos;,
      author: &apos;Dr. Sarah Quantum&apos;,
      readTime: &apos;8 min read&apos;,
      category: &apos;Quantum Codex&apos;,
      reality: &apos;tech&apos;
    },
    {
      id: &apos;sustainable-travel&apos;,
      title: &apos;10 Sustainable Travel Practices That Make a Difference&apos;,
      excerpt: &apos;How conscious travelers can reduce their environmental impact while exploring the multiverse.&apos;,
      date: &apos;Dec 18, 2025&apos;,
      author: &apos;Captain Michael Chen&apos;,
      readTime: &apos;6 min read&apos;,
      category: &apos;Chrono-Wanderer\&apos;s Atlas&apos;,
      reality: &apos;travel&apos;
    },
    {
      id: &apos;quantum-design&apos;,
      title: &apos;The Evolution of Quantum Design: Patterns Beyond Dimensions&apos;,
      excerpt: &apos;Essential tools and methodologies for designing in multidimensional spaces.&apos;,
      date: &apos;Dec 15, 2025&apos;,
      author: &apos;Designer Emma Rodriguez&apos;,
      readTime: &apos;10 min read&apos;,
      category: &apos;Aesthetic Forge&apos;,
      reality: &apos;design&apos;
    }
  ];

  return (
    <>
      <Head>
        <title>The Library of Realities - Omniverse Library</title>
        <meta name="description&quot; content="Welcome to the Library of Realities - Each shelf holds a universe of knowledge. Choose your reality.&quot; />
        <meta name="viewport&quot; content="width=device-width, initial-scale=1&quot; />
        <link rel="icon&quot; href="/favicon.ico&quot; />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-indigo-900 to-black text-white overflow-hidden&quot;>
        {/* Floating particles background */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none&quot;>
          {[...Array(50)].map((_, i) => (
            <div 
              key={i}
              className="absolute rounded-full bg-white animate-pulse&quot;
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${Math.random() * 4 + 1}px`,
                height: `${Math.random() * 4 + 1}px`,
                opacity: Math.random() * 0.5 + 0.1,
                animationDuration: `${Math.random() * 5 + 3}s`
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-4 py-12 max-w-6xl relative z-10&quot;>
          {/* Grand Atrium - Central Navigation */}
          <div className="text-center mb-16 pt-8&quot;>
            <div className="mb-6&quot;>
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-4&quot;>Library of Realities</h1>
              <div className="w-32 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full mb-6&quot;></div>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto&quot;>Each shelf holds a universe of knowledge. Choose your reality.</p>
            </div>
          </div>

          {/* Reality Greeter with floating particles */}
          <div className="mb-16 relative&quot;>
            <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-lg rounded-3xl border border-gray-700/50 p-8 text-center relative overflow-hidden&quot;>
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-cyan-500/10 via-transparent to-transparent&quot;></div>
              <div className="relative z-10&quot;>
                <div className="inline-block mb-4&quot;>
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center text-2xl animate-pulse&quot;>
                    🌌
                  </div>
                </div>
                <h2 className="text-3xl font-bold mb-4&quot;>Welcome, Knowledge Seeker</h2>
                <p className="text-gray-300 max-w-2xl mx-auto mb-6&quot;>You stand at the threshold of infinite knowledge dimensions. Each portal leads to a unique reality filled with curated wisdom and insights.</p>
                <div className="flex justify-center space-x-4&quot;>
                  <div className="px-4 py-2 bg-cyan-900/30 rounded-full text-cyan-300 border border-cyan-700/50&quot;>12,456 Articles</div>
                  <div className="px-4 py-2 bg-purple-900/30 rounded-full text-purple-300 border border-purple-700/50&quot;>∞ Realities</div>
                  <div className="px-4 py-2 bg-pink-900/30 rounded-full text-pink-300 border border-pink-700/50&quot;>Active Now</div>
                </div>
              </div>
            </div>
          </div>

          {/* Featured Realities Section */}
          <div className="mb-16&quot;>
            <h2 className="text-3xl font-bold mb-8 flex items-center&quot;>
              <span className="mr-3&quot;>✨</span>
              Featured Realities
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8&quot;>
              {featuredRealities.map((reality) => (
                <article 
                  key={reality.id}
                  className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-lg rounded-2xl overflow-hidden border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-500/20&quot;
                >
                  <div className="p-6&quot;>
                    <div className="flex items-center justify-between mb-3&quot;>
                      <span className="inline-block px-3 py-1 bg-cyan-900/30 text-cyan-300 text-sm rounded-full border border-cyan-700/50&quot;>
                        {reality.category}
                      </span>
                      <span className="text-gray-400 text-sm&quot;>{reality.date}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-3 line-clamp-2 group-hover:text-cyan-300 transition-colors&quot;>
                      <Link href={`/blog/${reality.reality}`} className="hover:text-cyan-300 transition-colors&quot;>
                        {reality.title}
                      </Link>
                    </h3>
                    <p className="text-gray-400 mb-4 line-clamp-3&quot;>
                      {reality.excerpt}
                    </p>
                    <div className="flex items-center justify-between&quot;>
                      <span className="text-gray-500 text-sm&quot;>By {reality.author}</span>
                      <span className="text-gray-500 text-sm&quot;>{reality.readTime}</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* The Reality Grid - Each tile is a portal */}
          <div className="mb-16&quot;>
            <h2 className="text-3xl font-bold mb-8 flex items-center&quot;>
              <span className="mr-3&quot;>🌀</span>
              Reality Portals
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8&quot;>
              {realityCategories.map((reality) => (
                <Link 
                  key={reality.id}
                  href={`/blog/${reality.id}`}
                  className="group block bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-lg rounded-2xl overflow-hidden border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl&quot;
                >
                  <div className={`h-32 bg-gradient-to-r ${reality.color} relative`}>
                    <div className="absolute inset-0 flex items-center justify-center text-5xl&quot;>
                      {reality.icon}
                    </div>
                    {/* Portal effect */}
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500&quot;></div>
                  </div>
                  <div className="p-6&quot;>
                    <div className="flex items-center justify-between mb-2&quot;>
                      <h3 className="text-xl font-bold group-hover:text-cyan-300 transition-colors&quot;>
                        {reality.name}
                      </h3>
                      <span className="inline-block px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded-full&quot;>
                        {reality.articleCount} articles
                      </span>
                    </div>
                    <p className="text-cyan-400 text-sm mb-2&quot;>{reality.subtitle}</p>
                    <p className="text-gray-400&quot;>
                      {reality.description}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Reality Connection Map */}
          <div className="mb-16&quot;>
            <h2 className="text-3xl font-bold mb-8 flex items-center&quot;>
              <span className="mr-3&quot;>🔗</span>
              Reality Connections
            </h2>
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-lg rounded-2xl border border-gray-700/50 p-8&quot;>
              <div className="flex flex-wrap justify-center gap-8&quot;>
                {realityCategories.slice(0, 4).map((reality, index) => (
                  <div key={reality.id} className="relative&quot;>
                    <div className={`w-24 h-24 rounded-full bg-gradient-to-r ${reality.color} flex items-center justify-center text-2xl shadow-lg`}>
                      {reality.icon}
                    </div>
                    <div className="text-center mt-2&quot;>
                      <p className="font-semibold&quot;>{reality.name.split(&apos; &apos;)[0]}</p>
                    </div>
                    {/* Connection lines */}
                    {index < 3 && (
                      <div className="absolute top-1/2 left-full w-8 h-0.5 bg-gradient-to-r from-cyan-500 to-purple-500 transform -translate-y-1/2&quot;></div>
                    )}
                  </div>
                ))}
              </div>
              <div className="text-center mt-8 text-gray-400&quot;>
                <p>Each reality connects to others through shared knowledge pathways</p>
              </div>
            </div>
          </div>

          {/* Newsletter Section */}
          <div className="bg-gradient-to-r from-cyan-600/20 to-purple-600/20 rounded-2xl p-8 text-center border border-cyan-500/30&quot;>
            <h2 className="text-3xl font-bold mb-4&quot;>Receive Cosmic Updates</h2>
            <p className="text-cyan-100 mb-6 max-w-2xl mx-auto&quot;>
              Subscribe to our newsletter to get the latest discoveries from across the omniverse delivered straight to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto&quot;>
              <input
                type="email&quot;
                placeholder="Enter your email&quot;
                className="flex-1 px-4 py-3 rounded-lg bg-gray-800/50 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50&quot;
              />
              <button className="px-6 py-3 bg-gradient-to-r from-cyan-600 to-purple-600 text-white rounded-lg font-semibold hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105&quot;>
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}