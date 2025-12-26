import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function OmniverseLibrary() {
  // Reality categories - each is its own dimension
  const realityCategories = [
    {
      id: 'tech',
      name: 'Quantum Codex',
      subtitle: 'The Technology Universe',
      description: 'Dive into the digital cosmos where code flows like stardust and algorithms shape reality.',
      icon: '💻',
      articleCount: 1247,
      color: 'from-cyan-500 to-blue-600',
      portalEffect: 'quantumGate'
    },
    {
      id: 'travel',
      name: 'Chrono-Wanderer\'s Atlas',
      subtitle: 'The Travel Dimension',
      description: 'Journey through时空continuums to explore cultures, destinations, and adventures beyond imagination.',
      icon: '✈️',
      articleCount: 892,
      color: 'from-emerald-500 to-green-600',
      portalEffect: 'temporalRift'
    },
    {
      id: 'design',
      name: 'Aesthetic Forge',
      subtitle: 'The Design Cosmos',
      description: 'Where creativity ignites and pixels become portals to无限possibilities.',
      icon: '🎨',
      articleCount: 634,
      color: 'from-rose-500 to-pink-600',
      portalEffect: 'creativeNexus'
    },
    {
      id: 'business',
      name: 'Corporate Consciousness',
      subtitle: 'The Business Realm',
      description: 'Navigate the economic galaxies where strategy meets innovation and markets evolve.',
      icon: '💼',
      articleCount: 756,
      color: 'from-amber-500 to-yellow-600',
      portalEffect: 'economicVortex'
    },
    {
      id: 'science',
      name: 'Discovery Nexus',
      subtitle: 'The Science Frontier',
      description: 'Uncover the mysteries of宇宙, from quantum physics to cosmic phenomena.',
      icon: '🔬',
      articleCount: 521,
      color: 'from-violet-500 to-purple-600',
      portalEffect: 'discoveryWave'
    },
    {
      id: 'lifestyle',
      name: 'Existence Explorer',
      subtitle: 'The Lifestyle Dimension',
      description: 'Enhance your daily journey through wellness, culture, and mindful living.',
      icon: '🌟',
      articleCount: 432,
      color: 'from-indigo-500 to-blue-700',
      portalEffect: 'lifeFlow'
    },
    {
      id: 'hobby',
      name: 'Passion Projects',
      subtitle: 'The Hobby Dimension',
      description: 'Explore creative pursuits, DIY projects, and personal passions that enrich life.',
      icon: '🎨',
      articleCount: 327,
      color: 'from-orange-500 to-red-500',
      portalEffect: 'passionPortal'
    },
    {
      id: 'food',
      name: 'Culinary Chronicles',
      subtitle: 'The Food & Beverage Universe',
      description: 'Savor recipes, cooking techniques, and gastronomic adventures from around the world.',
      icon: '🍽️',
      articleCount: 489,
      color: 'from-yellow-500 to-orange-500',
      portalEffect: 'flavorVortex'
    },
    {
      id: 'guides',
      name: 'Knowledge Compendium',
      subtitle: 'Guides & Tutorials Realm',
      description: 'Master new skills with comprehensive guides, step-by-step tutorials, and expert insights.',
      icon: '📚',
      articleCount: 612,
      color: 'from-green-500 to-teal-500',
      portalEffect: 'wisdomGateway'
    }
  ];

  // Featured realities that will appear at the top
  const featuredRealities = [
    {
      id: 'future-of-ai',
      title: 'The Future of Artificial Intelligence: What to Expect in 2025',
      excerpt: 'Exploring the latest trends and breakthroughs in AI technology that will shape our world in the coming year.',
      date: 'Dec 20, 2025',
      author: 'Dr. Sarah Quantum',
      readTime: '8 min read',
      category: 'Quantum Codex',
      reality: 'tech'
    },
    {
      id: 'sustainable-travel',
      title: '10 Sustainable Travel Practices That Make a Difference',
      excerpt: 'How conscious travelers can reduce their environmental impact while exploring the multiverse.',
      date: 'Dec 18, 2025',
      author: 'Captain Michael Chen',
      readTime: '6 min read',
      category: 'Chrono-Wanderer\'s Atlas',
      reality: 'travel'
    },
    {
      id: 'quantum-design',
      title: 'The Evolution of Quantum Design: Patterns Beyond Dimensions',
      excerpt: 'Essential tools and methodologies for designing in multidimensional spaces.',
      date: 'Dec 15, 2025',
      author: 'Designer Emma Rodriguez',
      readTime: '10 min read',
      category: 'Aesthetic Forge',
      reality: 'design'
    }
  ];

  return (
    <>
      <Head>
        <title>The Library of Realities - Omniverse Library</title>
        <meta name="description" content="Welcome to the Library of Realities - Each shelf holds a universe of knowledge. Choose your reality." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-indigo-900 to-black text-white overflow-hidden">
        {/* Floating particles background */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          {[...Array(50)].map((_, i) => (
            <div 
              key={i}
              className="absolute rounded-full bg-white animate-pulse"
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

        <div className="container mx-auto px-4 py-12 max-w-6xl relative z-10">
          {/* Grand Atrium - Central Navigation */}
          <div className="text-center mb-16 pt-8">
            <div className="mb-6">
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-4">Library of Realities</h1>
              <div className="w-32 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full mb-6"></div>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">Each shelf holds a universe of knowledge. Choose your reality.</p>
            </div>
          </div>

          {/* Reality Greeter with floating particles */}
          <div className="mb-16 relative">
            <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-lg rounded-3xl border border-gray-700/50 p-8 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-cyan-500/10 via-transparent to-transparent"></div>
              <div className="relative z-10">
                <div className="inline-block mb-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center text-2xl animate-pulse">
                    🌌
                  </div>
                </div>
                <h2 className="text-3xl font-bold mb-4">Welcome, Knowledge Seeker</h2>
                <p className="text-gray-300 max-w-2xl mx-auto mb-6">You stand at the threshold of infinite knowledge dimensions. Each portal leads to a unique reality filled with curated wisdom and insights.</p>
                <div className="flex justify-center space-x-4">
                  <div className="px-4 py-2 bg-cyan-900/30 rounded-full text-cyan-300 border border-cyan-700/50">12,456 Articles</div>
                  <div className="px-4 py-2 bg-purple-900/30 rounded-full text-purple-300 border border-purple-700/50">∞ Realities</div>
                  <div className="px-4 py-2 bg-pink-900/30 rounded-full text-pink-300 border border-pink-700/50">Active Now</div>
                </div>
              </div>
            </div>
          </div>

          {/* Featured Realities Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 flex items-center">
              <span className="mr-3">✨</span>
              Featured Realities
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {featuredRealities.map((reality) => (
                <article 
                  key={reality.id}
                  className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-lg rounded-2xl overflow-hidden border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-500/20"
                >
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="inline-block px-3 py-1 bg-cyan-900/30 text-cyan-300 text-sm rounded-full border border-cyan-700/50">
                        {reality.category}
                      </span>
                      <span className="text-gray-400 text-sm">{reality.date}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-3 line-clamp-2 group-hover:text-cyan-300 transition-colors">
                      <Link href={`/blog/${reality.reality}`} className="hover:text-cyan-300 transition-colors">
                        {reality.title}
                      </Link>
                    </h3>
                    <p className="text-gray-400 mb-4 line-clamp-3">
                      {reality.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-500 text-sm">By {reality.author}</span>
                      <span className="text-gray-500 text-sm">{reality.readTime}</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* The Reality Grid - Each tile is a portal */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 flex items-center">
              <span className="mr-3">🌀</span>
              Reality Portals
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {realityCategories.map((reality) => (
                <Link 
                  key={reality.id}
                  href={`/blog/${reality.id}`}
                  className="group block bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-lg rounded-2xl overflow-hidden border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl"
                >
                  <div className={`h-32 bg-gradient-to-r ${reality.color} relative`}>
                    <div className="absolute inset-0 flex items-center justify-center text-5xl">
                      {reality.icon}
                    </div>
                    {/* Portal effect */}
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-bold group-hover:text-cyan-300 transition-colors">
                        {reality.name}
                      </h3>
                      <span className="inline-block px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded-full">
                        {reality.articleCount} articles
                      </span>
                    </div>
                    <p className="text-cyan-400 text-sm mb-2">{reality.subtitle}</p>
                    <p className="text-gray-400">
                      {reality.description}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Reality Connection Map */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 flex items-center">
              <span className="mr-3">🔗</span>
              Reality Connections
            </h2>
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-lg rounded-2xl border border-gray-700/50 p-8">
              <div className="flex flex-wrap justify-center gap-8">
                {realityCategories.slice(0, 4).map((reality, index) => (
                  <div key={reality.id} className="relative">
                    <div className={`w-24 h-24 rounded-full bg-gradient-to-r ${reality.color} flex items-center justify-center text-2xl shadow-lg`}>
                      {reality.icon}
                    </div>
                    <div className="text-center mt-2">
                      <p className="font-semibold">{reality.name.split(' ')[0]}</p>
                    </div>
                    {/* Connection lines */}
                    {index < 3 && (
                      <div className="absolute top-1/2 left-full w-8 h-0.5 bg-gradient-to-r from-cyan-500 to-purple-500 transform -translate-y-1/2"></div>
                    )}
                  </div>
                ))}
              </div>
              <div className="text-center mt-8 text-gray-400">
                <p>Each reality connects to others through shared knowledge pathways</p>
              </div>
            </div>
          </div>

          {/* Newsletter Section */}
          <div className="bg-gradient-to-r from-cyan-600/20 to-purple-600/20 rounded-2xl p-8 text-center border border-cyan-500/30">
            <h2 className="text-3xl font-bold mb-4">Receive Cosmic Updates</h2>
            <p className="text-cyan-100 mb-6 max-w-2xl mx-auto">
              Subscribe to our newsletter to get the latest discoveries from across the omniverse delivered straight to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-gray-800/50 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-cyan-600 to-purple-600 text-white rounded-lg font-semibold hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}