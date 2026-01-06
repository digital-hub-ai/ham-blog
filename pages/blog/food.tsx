import React from &apos;react&apos;;
import Head from &apos;next/head&apos;;
import Link from &apos;next/link&apos;;
import RealityBridges from &apos;../../components/RealityBridges&apos;;

export default function FoodReality() {
  // Sub-realities within the food dimension
  const subRealities = [
    { id: &apos;recipes&apos;, name: &apos;Recipes&apos;, icon: &apos;🍳&apos; },
    { id: &apos;cooking-tech&apos;, name: &apos;Cooking Technology&apos;, icon: &apos;👨‍🍳&apos; },
    { id: &apos;nutrition&apos;, name: &apos;Nutrition&apos;, icon: &apos;🥗&apos; },
    { id: &apos;restaurants&apos;, name: &apos;Restaurant Reviews&apos;, icon: &apos;🍷&apos; },
    { id: &apos;cuisines&apos;, name: &apos;World Cuisines&apos;, icon: &apos;🌏&apos; },
    { id: &apos;food-science&apos;, name: &apos;Food Science&apos;, icon: &apos;🔬&apos; }
  ];

  // Featured culinary experiences
  const featuredExperiences = [
    {
      id: &apos;molecular-gastronomy&apos;,
      title: &apos;Molecular Gastronomy at Home: Spherification and Foams&apos;,
      excerpt: &apos;Transform your kitchen into a culinary lab with avant-garde techniques that delight the senses.&apos;,
      date: &apos;Dec 21, 2025&apos;,
      author: &apos;Chef Isabella Fusion&apos;,
      readTime: &apos;18 min read&apos;,
      tags: [&apos;Techniques&apos;, &apos;Molecular Gastronomy&apos;, &apos;Innovation&apos;]
    },
    {
      id: &apos;sustainable-cooking&apos;,
      title: &apos;Sustainable Cooking: Zero Waste Kitchen Practices&apos;,
      excerpt: &apos;Minimize food waste while maximizing flavor with creative techniques and mindful ingredient usage.&apos;,
      date: &apos;Dec 19, 2025&apos;,
      author: &apos;Eco Chef Green&apos;,
      readTime: &apos;14 min read&apos;,
      tags: [&apos;Sustainability&apos;, &apos;Zero Waste&apos;, &apos;Eco-friendly&apos;]
    },
    {
      id: &apos;ai-recipe-generator&apos;,
      title: &apos;AI-Powered Recipe Creation: The Future of Culinary Innovation&apos;,
      excerpt: &apos;How artificial intelligence is revolutionizing recipe development and personalized meal planning.&apos;,
      date: &apos;Dec 17, 2025&apos;,
      author: &apos;Tech Gourmet Neo&apos;,
      readTime: &apos;16 min read&apos;,
      tags: [&apos;Technology&apos;, &apos;AI&apos;, &apos;Innovation&apos;]
    }
  ];

  // Recent culinary adventures
  const recentAdventures = [
    { id: &apos;1&apos;, title: &apos;Street Food Tour: Bangkok Night Markets&apos;, date: &apos;Dec 20, 2025&apos; },
    { id: &apos;2&apos;, title: &apos;Plant-Based Protein Sources Explained&apos;, date: &apos;Dec 19, 2025&apos; },
    { id: &apos;3&apos;, title: &apos;Sourdough Starter Maintenance Guide&apos;, date: &apos;Dec 18, 2025&apos; },
    { id: &apos;4&apos;, title: &apos;Wine Pairing Science: Matching Flavors Perfectly&apos;, date: &apos;Dec 17, 2025&apos; },
    { id: &apos;5&apos;, title: &apos;Fermentation Fundamentals: Kimchi to Kombucha&apos;, date: &apos;Dec 16, 2025&apos; }
  ];

  return (
    <>
      <Head>
        <title>Culinary Chronicles - Food & Beverage Universe</title>
        <meta name="description&quot; content="Savor recipes, cooking techniques, and gastronomic adventures from around the world.&quot; />
        <meta name="viewport&quot; content="width=device-width, initial-scale=1&quot; />
        <link rel="icon&quot; href="/favicon.ico&quot; />
      </Head>

      {/* Reality Bridges Navigation */}
      <RealityBridges currentReality="food&quot; />

      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-yellow-900 to-black text-white overflow-hidden&quot;>
        {/* Culinary background effects */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none&quot;>
          <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-yellow-500/10 animate-pulse&quot;></div>
          <div className="absolute bottom-1/3 right-1/4 w-48 h-48 rounded-full bg-orange-500/10 animate-pulse&quot; style={{animationDelay: &apos;1s}}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-yellow-500/10 animate-pulse&quot; style={{animationDelay: '2s'}}></div>
        </div>

        <div className="container mx-auto px-4 py-24 max-w-6xl relative z-10&quot;>
          {/* Reality Header */}
          <div className="text-center mb-16 pt-4&quot;>
            <div className="mb-6&quot;>
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent mb-4&quot;>Culinary Chronicles</h1>
              <div className="w-32 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 mx-auto rounded-full mb-6&quot;></div>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto&quot;>The Food & Beverage Universe - Savor recipes, cooking techniques, and gastronomic adventures from around the world.</p>
            </div>
            
            {/* Reality Navigation */}
            <div className="flex flex-wrap justify-center gap-4 mb-12&quot;>
              {subRealities.map((sub) => (
                <Link 
                  key={sub.id}
                  href={`/blog/food/${sub.id}`}
                  className="px-4 py-2 bg-yellow-900/30 rounded-full text-yellow-300 border border-yellow-700/50 hover:bg-yellow-800/50 hover:border-yellow-600/50 transition-all duration-300 flex items-center&quot;
                >
                  <span className="mr-2&quot;>{sub.icon}</span>
                  {sub.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Culinary Experiences Grid */}
          <div className="mb-16&quot;>
            <h2 className="text-3xl font-bold mb-8 flex items-center&quot;>
              <span className="mr-3&quot;>🍽️</span>
              Gastronomic Adventures
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8&quot;>
              {featuredExperiences.map((experience) => (
                <article 
                  key={experience.id}
                  className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-lg rounded-2xl overflow-hidden border border-yellow-700/50 hover:border-yellow-500/70 transition-all duration-500 transform hover:-translate-y-2&quot;
                >
                  <div className="h-48 bg-gradient-to-r from-yellow-600/20 to-orange-600/20 relative&quot;>
                    <div className="absolute inset-0 flex items-center justify-center&quot;>
                      <div className="w-24 h-24 rounded-full bg-gradient-to-r from-yellow-500 to-orange-500 flex items-center justify-center text-3xl&quot;>
                        🍳
                      </div>
                    </div>
                  </div>
                  <div className="p-6&quot;>
                    <div className="flex flex-wrap gap-2 mb-4&quot;>
                      {experience.tags.map((tag, index) => (
                        <span key={index} className="px-2 py-1 bg-yellow-900/30 text-yellow-300 text-xs rounded-full border border-yellow-700/50&quot;>
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h3 className="text-xl font-bold mb-3 group-hover:text-yellow-300 transition-colors&quot;>
                      <Link href={`/blog/food/${experience.id}`} className="hover:text-yellow-300 transition-colors&quot;>
                        {experience.title}
                      </Link>
                    </h3>
                    <p className="text-gray-400 mb-4&quot;>
                      {experience.excerpt}
                    </p>
                    <div className="flex items-center justify-between&quot;>
                      <span className="text-gray-500 text-sm&quot;>By {experience.author}</span>
                      <div className="text-right&quot;>
                        <span className="text-gray-500 text-sm block&quot;>{experience.date}</span>
                        <span className="text-gray-500 text-sm&quot;>{experience.readTime}</span>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Food-Specific Features */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16&quot;>
            {/* Recipe Generator */}
            <div className="lg:col-span-2 bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-lg rounded-2xl border border-yellow-700/50 p-6&quot;>
              <h3 className="text-2xl font-bold mb-4 flex items-center&quot;>
                <span className="mr-3&quot;>🤖</span>
                AI Recipe Generator
              </h3>
              <div className="bg-gray-900 rounded-xl p-4&quot;>
                <div className="grid grid-cols-2 gap-4 mb-4&quot;>
                  <div>
                    <label className="block text-gray-400 mb-2&quot;>Main Ingredient</label>
                    <input 
                      type="text&quot; 
                      placeholder="Chicken, Beef, Tofu...&quot; 
                      className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white&quot;
                    />
                  </div>
                  <div>
                    <label className="block text-gray-400 mb-2&quot;>Cuisine Style</label>
                    <select className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white&quot;>
                      <option>Any Cuisine</option>
                      <option>Italian</option>
                      <option>Asian</option>
                      <option>Mexican</option>
                      <option>Mediterranean</option>
                    </select>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-4 mb-4&quot;>
                  <div>
                    <label className="block text-gray-400 mb-2&quot;>Prep Time</label>
                    <select className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white&quot;>
                      <option>Any Time</option>
                      <option>&lt; 30 min</option>
                      <option>30-60 min</option>
                      <option>1-2 hours</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-gray-400 mb-2&quot;>Difficulty</label>
                    <select className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white&quot;>
                      <option>Any Level</option>
                      <option>Easy</option>
                      <option>Medium</option>
                      <option>Hard</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-gray-400 mb-2&quot;>Dietary</label>
                    <select className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white&quot;>
                      <option>No Restrictions</option>
                      <option>Vegetarian</option>
                      <option>Vegan</option>
                      <option>Gluten-Free</option>
                    </select>
                  </div>
                </div>
                <button className="w-full py-3 bg-gradient-to-r from-yellow-600 to-orange-600 hover:from-yellow-700 hover:to-orange-700 rounded-lg transition-colors&quot;>
                  Generate Recipe
                </button>
              </div>
            </div>

            {/* Culinary Stats */}
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-lg rounded-2xl border border-yellow-700/50 p-6&quot;>
              <h3 className="text-2xl font-bold mb-4 flex items-center&quot;>
                <span className="mr-3&quot;>📊</span>
                Flavor Metrics
              </h3>
              <div className="space-y-4&quot;>
                <div>
                  <div className="flex justify-between mb-1&quot;>
                    <span className="text-gray-300&quot;>Recipe Diversity</span>
                    <span className="text-yellow-400&quot;>94%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2&quot;>
                    <div className="bg-yellow-500 h-2 rounded-full&quot; style={{width: &apos;94%}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1&quot;>
                    <span className="text-gray-300&quot;>Nutritional Balance</span>
                    <span className="text-yellow-400&quot;>87%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2&quot;>
                    <div className="bg-orange-500 h-2 rounded-full&quot; style={{width: &apos;87%}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1&quot;>
                    <span className="text-gray-300&quot;>Culinary Innovation</span>
                    <span className="text-yellow-400&quot;>91%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2&quot;>
                    <div className="bg-amber-500 h-2 rounded-full&quot; style={{width: &apos;91%}}></div>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 pt-4 border-t border-gray-700&quot;>
                <div className="flex justify-between&quot;>
                  <span className="text-gray-400&quot;>Food Articles</span>
                  <span className="text-yellow-400 font-bold&quot;>489</span>
                </div>
                <div className="flex justify-between&quot;>
                  <span className="text-gray-400&quot;>Culinary Experts</span>
                  <span className="text-yellow-400 font-bold&quot;>22.7k</span>
                </div>
                <div className="flex justify-between&quot;>
                  <span className="text-gray-400&quot;>Recipe Database</span>
                  <span className="text-yellow-400 font-bold&quot;>8,342</span>
                </div>
              </div>
            </div>
          </div>

          {/* Recent Adventures */}
          <div className="mb-16&quot;>
            <h2 className="text-3xl font-bold mb-8 flex items-center&quot;>
              <span className="mr-3&quot;>🍜</span>
              Recent Tastings
            </h2>
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-lg rounded-2xl border border-yellow-700/50 overflow-hidden&quot;>
              <div className="divide-y divide-gray-700/50&quot;>
                {recentAdventures.map((adventure) => (
                  <div key={adventure.id} className="p-6 hover:bg-gray-800/30 transition-colors&quot;>
                    <div className="flex justify-between&quot;>
                      <h3 className="text-lg font-medium&quot;>
                        <Link href={`/blog/food/adventure-${adventure.id}`} className="hover:text-yellow-300 transition-colors&quot;>
                          {adventure.title}
                        </Link>
                      </h3>
                      <span className="text-gray-500 text-sm&quot;>{adventure.date}</span>
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
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-yellow-600 to-orange-600 text-white rounded-lg font-semibold hover:from-yellow-700 hover:to-orange-700 transition-all duration-300 transform hover:scale-105&quot;
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