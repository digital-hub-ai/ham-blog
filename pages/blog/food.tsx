import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import RealityBridges from '../../components/RealityBridges';

export default function FoodReality() {
  // Sub-realities within the food dimension
  const subRealities = [
    { id: 'recipes', name: 'Recipes', icon: '🍳' },
    { id: 'cooking-tech', name: 'Cooking Technology', icon: '👨‍🍳' },
    { id: 'nutrition', name: 'Nutrition', icon: '🥗' },
    { id: 'restaurants', name: 'Restaurant Reviews', icon: '🍷' },
    { id: 'cuisines', name: 'World Cuisines', icon: '🌏' },
    { id: 'food-science', name: 'Food Science', icon: '🔬' }
  ];

  // Featured culinary experiences
  const featuredExperiences = [
    {
      id: 'molecular-gastronomy',
      title: 'Molecular Gastronomy at Home: Spherification and Foams',
      excerpt: 'Transform your kitchen into a culinary lab with avant-garde techniques that delight the senses.',
      date: 'Dec 21, 2025',
      author: 'Chef Isabella Fusion',
      readTime: '18 min read',
      tags: ['Techniques', 'Molecular Gastronomy', 'Innovation']
    },
    {
      id: 'sustainable-cooking',
      title: 'Sustainable Cooking: Zero Waste Kitchen Practices',
      excerpt: 'Minimize food waste while maximizing flavor with creative techniques and mindful ingredient usage.',
      date: 'Dec 19, 2025',
      author: 'Eco Chef Green',
      readTime: '14 min read',
      tags: ['Sustainability', 'Zero Waste', 'Eco-friendly']
    },
    {
      id: 'ai-recipe-generator',
      title: 'AI-Powered Recipe Creation: The Future of Culinary Innovation',
      excerpt: 'How artificial intelligence is revolutionizing recipe development and personalized meal planning.',
      date: 'Dec 17, 2025',
      author: 'Tech Gourmet Neo',
      readTime: '16 min read',
      tags: ['Technology', 'AI', 'Innovation']
    }
  ];

  // Recent culinary adventures
  const recentAdventures = [
    { id: '1', title: 'Street Food Tour: Bangkok Night Markets', date: 'Dec 20, 2025' },
    { id: '2', title: 'Plant-Based Protein Sources Explained', date: 'Dec 19, 2025' },
    { id: '3', title: 'Sourdough Starter Maintenance Guide', date: 'Dec 18, 2025' },
    { id: '4', title: 'Wine Pairing Science: Matching Flavors Perfectly', date: 'Dec 17, 2025' },
    { id: '5', title: 'Fermentation Fundamentals: Kimchi to Kombucha', date: 'Dec 16, 2025' }
  ];

  return (
    <>
      <Head>
        <title>Culinary Chronicles - Food & Beverage Universe</title>
        <meta name="description" content="Savor recipes, cooking techniques, and gastronomic adventures from around the world." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Reality Bridges Navigation */}
      <RealityBridges currentReality="food" />

      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-yellow-900 to-black text-white overflow-hidden">
        {/* Culinary background effects */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-yellow-500/10 animate-pulse"></div>
          <div className="absolute bottom-1/3 right-1/4 w-48 h-48 rounded-full bg-orange-500/10 animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-yellow-500/10 animate-pulse" style={{animationDelay: '2s'}}></div>
        </div>

        <div className="container mx-auto px-4 py-24 max-w-6xl relative z-10">
          {/* Reality Header */}
          <div className="text-center mb-16 pt-4">
            <div className="mb-6">
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent mb-4">Culinary Chronicles</h1>
              <div className="w-32 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 mx-auto rounded-full mb-6"></div>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">The Food & Beverage Universe - Savor recipes, cooking techniques, and gastronomic adventures from around the world.</p>
            </div>
            
            {/* Reality Navigation */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {subRealities.map((sub) => (
                <Link 
                  key={sub.id}
                  href={`/blog/food/${sub.id}`}
                  className="px-4 py-2 bg-yellow-900/30 rounded-full text-yellow-300 border border-yellow-700/50 hover:bg-yellow-800/50 hover:border-yellow-600/50 transition-all duration-300 flex items-center"
                >
                  <span className="mr-2">{sub.icon}</span>
                  {sub.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Culinary Experiences Grid */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 flex items-center">
              <span className="mr-3">🍽️</span>
              Gastronomic Adventures
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {featuredExperiences.map((experience) => (
                <article 
                  key={experience.id}
                  className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-lg rounded-2xl overflow-hidden border border-yellow-700/50 hover:border-yellow-500/70 transition-all duration-500 transform hover:-translate-y-2"
                >
                  <div className="h-48 bg-gradient-to-r from-yellow-600/20 to-orange-600/20 relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-24 h-24 rounded-full bg-gradient-to-r from-yellow-500 to-orange-500 flex items-center justify-center text-3xl">
                        🍳
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {experience.tags.map((tag, index) => (
                        <span key={index} className="px-2 py-1 bg-yellow-900/30 text-yellow-300 text-xs rounded-full border border-yellow-700/50">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h3 className="text-xl font-bold mb-3 group-hover:text-yellow-300 transition-colors">
                      <Link href={`/blog/food/${experience.id}`} className="hover:text-yellow-300 transition-colors">
                        {experience.title}
                      </Link>
                    </h3>
                    <p className="text-gray-400 mb-4">
                      {experience.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-500 text-sm">By {experience.author}</span>
                      <div className="text-right">
                        <span className="text-gray-500 text-sm block">{experience.date}</span>
                        <span className="text-gray-500 text-sm">{experience.readTime}</span>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Food-Specific Features */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {/* Recipe Generator */}
            <div className="lg:col-span-2 bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-lg rounded-2xl border border-yellow-700/50 p-6">
              <h3 className="text-2xl font-bold mb-4 flex items-center">
                <span className="mr-3">🤖</span>
                AI Recipe Generator
              </h3>
              <div className="bg-gray-900 rounded-xl p-4">
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-gray-400 mb-2">Main Ingredient</label>
                    <input 
                      type="text" 
                      placeholder="Chicken, Beef, Tofu..." 
                      className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-400 mb-2">Cuisine Style</label>
                    <select className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white">
                      <option>Any Cuisine</option>
                      <option>Italian</option>
                      <option>Asian</option>
                      <option>Mexican</option>
                      <option>Mediterranean</option>
                    </select>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-4 mb-4">
                  <div>
                    <label className="block text-gray-400 mb-2">Prep Time</label>
                    <select className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white">
                      <option>Any Time</option>
                      <option>&lt; 30 min</option>
                      <option>30-60 min</option>
                      <option>1-2 hours</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-gray-400 mb-2">Difficulty</label>
                    <select className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white">
                      <option>Any Level</option>
                      <option>Easy</option>
                      <option>Medium</option>
                      <option>Hard</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-gray-400 mb-2">Dietary</label>
                    <select className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white">
                      <option>No Restrictions</option>
                      <option>Vegetarian</option>
                      <option>Vegan</option>
                      <option>Gluten-Free</option>
                    </select>
                  </div>
                </div>
                <button className="w-full py-3 bg-gradient-to-r from-yellow-600 to-orange-600 hover:from-yellow-700 hover:to-orange-700 rounded-lg transition-colors">
                  Generate Recipe
                </button>
              </div>
            </div>

            {/* Culinary Stats */}
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-lg rounded-2xl border border-yellow-700/50 p-6">
              <h3 className="text-2xl font-bold mb-4 flex items-center">
                <span className="mr-3">📊</span>
                Flavor Metrics
              </h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-300">Recipe Diversity</span>
                    <span className="text-yellow-400">94%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-yellow-500 h-2 rounded-full" style={{width: '94%'}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-300">Nutritional Balance</span>
                    <span className="text-yellow-400">87%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-orange-500 h-2 rounded-full" style={{width: '87%'}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-300">Culinary Innovation</span>
                    <span className="text-yellow-400">91%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-amber-500 h-2 rounded-full" style={{width: '91%'}}></div>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 pt-4 border-t border-gray-700">
                <div className="flex justify-between">
                  <span className="text-gray-400">Food Articles</span>
                  <span className="text-yellow-400 font-bold">489</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Culinary Experts</span>
                  <span className="text-yellow-400 font-bold">22.7k</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Recipe Database</span>
                  <span className="text-yellow-400 font-bold">8,342</span>
                </div>
              </div>
            </div>
          </div>

          {/* Recent Adventures */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 flex items-center">
              <span className="mr-3">🍜</span>
              Recent Tastings
            </h2>
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-lg rounded-2xl border border-yellow-700/50 overflow-hidden">
              <div className="divide-y divide-gray-700/50">
                {recentAdventures.map((adventure) => (
                  <div key={adventure.id} className="p-6 hover:bg-gray-800/30 transition-colors">
                    <div className="flex justify-between">
                      <h3 className="text-lg font-medium">
                        <Link href={`/blog/food/adventure-${adventure.id}`} className="hover:text-yellow-300 transition-colors">
                          {adventure.title}
                        </Link>
                      </h3>
                      <span className="text-gray-500 text-sm">{adventure.date}</span>
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
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-yellow-600 to-orange-600 text-white rounded-lg font-semibold hover:from-yellow-700 hover:to-orange-700 transition-all duration-300 transform hover:scale-105"
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