import React from &apos;react&apos;;
import Head from &apos;next/head&apos;;
import Link from &apos;next/link&apos;;
import RealityBridges from &apos;../../components/RealityBridges&apos;;

export default function TravelReality() {
  // Sub-realities within the travel dimension
  const subRealities = [
    { id: &apos;destinations&apos;, name: &apos;Destinations&apos;, icon: &apos;🌍&apos; },
    { id: &apos;adventures&apos;, name: &apos;Adventures&apos;, icon: &apos;🧭&apos; },
    { id: &apos;cultures&apos;, name: &apos;Cultures&apos;, icon: &apos;🎎&apos; },
    { id: &apos;travel-tech&apos;, name: &apos;Travel Tech&apos;, icon: &apos;📱&apos; },
    { id: &apos;sustainable&apos;, name: &apos;Sustainable Travel&apos;, icon: &apos;🌱&apos; },
    { id: &apos;luxury&apos;, name: &apos;Luxury Experiences&apos;, icon: &apos;💎&apos; }
  ];

  // Featured journeys
  const featuredJourneys = [
    {
      id: &apos;neo-tokyo-2025&apos;,
      title: &apos;Neo-Tokyo 2025: A Cyberpunk Odyssey&apos;,
      excerpt: &apos;Experience the fusion of ancient traditions and futuristic technology in the world\&apos;s most dynamic city.&apos;,
      date: &apos;Dec 21, 2025&apos;,
      author: &apos;Captain Maya Nakamura&apos;,
      readTime: &apos;14 min read&apos;,
      tags: [&apos;Asia&apos;, &apos;Technology&apos;, &apos;Culture&apos;],
      destination: &apos;Japan&apos;
    },
    {
      id: &apos;chasing-aurora&apos;,
      title: &apos;Chasing Aurora: Iceland\&apos;s Celestial Dance&apos;,
      excerpt: &apos;Witness the magical northern lights in Iceland\&apos;s untouched wilderness with our expert guide.&apos;,
      date: &apos;Dec 19, 2025&apos;,
      author: &apos;Explorer Erik Frost&apos;,
      readTime: &apos;11 min read&apos;,
      tags: [&apos;Europe&apos;, &apos;Nature&apos;, &apos;Adventure&apos;],
      destination: &apos;Iceland&apos;
    },
    {
      id: &apos;amazon-expedition&apos;,
      title: &apos;Into the Green Heart: Amazon Rainforest Expedition&apos;,
      excerpt: &apos;An immersive journey into the lungs of the Earth with indigenous communities and wildlife.&apos;,
      date: &apos;Dec 17, 2025&apos;,
      author: &apos;Dr. Sofia Verde&apos;,
      readTime: &apos;16 min read&apos;,
      tags: [&apos;South America&apos;, &apos;Ecotourism&apos;, &apos;Wildlife&apos;],
      destination: &apos;Amazon&apos;
    }
  ];

  // Culture compass entries
  const cultureCompass = [
    { 
      country: &apos;Japan&apos;, 
      icon: &apos;🇯🇵&apos;,
      tips: [
        &apos;Bowing etiquette & temple visits&apos;,
        &apos;Shoes off in homes and temples&apos;,
        &apos;Quiet on public transportation&apos;
      ]
    },
    { 
      country: &apos;Morocco&apos;, 
      icon: &apos;🇲🇦&apos;,
      tips: [
        &apos;Haggling tips & mint tea rituals&apos;,
        &apos;Respect for Ramadan practices&apos;,
        &apos;Dress modestly in cities&apos;
      ]
    },
    { 
      country: &apos;Iceland&apos;, 
      icon: &apos;🇮🇸&apos;,
      tips: [
        &apos;Hot spring etiquette & elf beliefs&apos;,
        &apos;Tipping is not customary&apos;,
        &apos;Embrace the &quot;no worries&quot; attitude&apos;
      ]
    }
  ];

  // Recent expeditions
  const recentExpeditions = [
    { id: &apos;morocco-hidden-gems&apos;, title: &apos;Hidden Gems of Morocco&apos;, date: &apos;Dec 20, 2025&apos; },
    { id: &apos;new-zealand-road-trip&apos;, title: &apos;New Zealand Road Trip Essentials&apos;, date: &apos;Dec 19, 2025&apos; },
    { id: &apos;venice-floating-city&apos;, title: &apos;Venice: Navigating the Floating City&apos;, date: &apos;Dec 18, 2025&apos; },
    { id: &apos;kenya-safari-adventures&apos;, title: &apos;Safari Adventures in Kenya&apos;, date: &apos;Dec 17, 2025&apos; },
    { id: &apos;thailand-culinary-journey&apos;, title: &apos;Culinary Journey Through Thailand&apos;, date: &apos;Dec 16, 2025&apos; }
  ];

  return (
    <>
      <Head>
        <title>Chrono-Wanderer&apos;s Atlas - Travel Dimension</title>
        <meta name="description&quot; content="Journey through时空continuums to explore cultures, destinations, and adventures beyond imagination.&quot; />
        <meta name="viewport&quot; content="width=device-width, initial-scale=1&quot; />
        <link rel="icon&quot; href="/favicon.ico&quot; />
      </Head>

      {/* Reality Bridges Navigation */}
      <RealityBridges currentReality="travel&quot; />

      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-emerald-900 to-black text-white overflow-hidden&quot;>
        {/* Floating particles background */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none&quot;>
          {[...Array(80)].map((_, i) => (
            <div 
              key={i}
              className="absolute text-emerald-500/20&quot;
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                fontSize: `${Math.random() * 20 + 10}px`,
                animationDuration: `${Math.random() * 10 + 5}s`,
                animationDelay: `${Math.random() * 2}s`
              }}
            >
              {[&apos;🌍&apos;, &apos;✈️&apos;, &apos;🧭&apos;, &apos;📍&apos;, &apos;🗺️&apos;, &apos;🏕️&apos;, &apos;🚞&apos;, &apos;🚢&apos;][Math.floor(Math.random() * 8)]}
            </div>
          ))}
        </div>

        <div className="container mx-auto px-4 py-24 max-w-6xl relative z-10&quot;>
          {/* Reality Header */}
          <div className="text-center mb-16 pt-4&quot;>
            <div className="mb-6&quot;>
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-emerald-400 to-green-500 bg-clip-text text-transparent mb-4&quot;>Chrono-Wanderer&apos;s Atlas</h1>
              <div className="w-32 h-1 bg-gradient-to-r from-emerald-400 to-green-500 mx-auto rounded-full mb-6&quot;></div>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto&quot;>The Travel Dimension - Journey through时空continuums to explore cultures, destinations, and adventures beyond imagination.</p>
            </div>
            
            {/* Reality Navigation */}
            <div className="flex flex-wrap justify-center gap-4 mb-12&quot;>
              {subRealities.map((sub) => (
                <Link 
                  key={sub.id}
                  href={`/blog/travel/${sub.id}`}
                  className="px-4 py-2 bg-emerald-900/30 rounded-full text-emerald-300 border border-emerald-700/50 hover:bg-emerald-800/50 hover:border-emerald-600/50 transition-all duration-300 flex items-center&quot;
                >
                  <span className="mr-2&quot;>{sub.icon}</span>
                  {sub.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Interactive Trip Planner */}
          <div className="mb-16&quot;>
            <h2 className="text-3xl font-bold mb-8 flex items-center&quot;>
              <span className="mr-3&quot;>🧳</span>
              Interactive Trip Planner
            </h2>
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-lg rounded-2xl border border-emerald-700/50 p-6&quot;>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6&quot;>
                <div>
                  <label className="block text-gray-300 mb-2&quot;>Destination</label>
                  <select className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-white&quot;>
                    <option>Select Destination</option>
                    <option>Japan</option>
                    <option>Iceland</option>
                    <option>Brazil</option>
                    <option>Morocco</option>
                    <option>New Zealand</option>
                  </select>
                </div>
                <div>
                  <label className="block text-gray-300 mb-2&quot;>Travel Dates</label>
                  <input 
                    type="text&quot; 
                    placeholder="Dec 25 - Jan 5&quot;
                    className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-white&quot;
                  />
                </div>
                <div>
                  <label className="block text-gray-300 mb-2&quot;>Budget</label>
                  <div className="relative&quot;>
                    <span className="absolute left-3 top-2 text-gray-400&quot;>$</span>
                    <input 
                      type="text&quot; 
                      placeholder="5000&quot;
                      className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-white pl-8&quot;
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-gray-300 mb-2&quot;>Travelers</label>
                  <select className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-white&quot;>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4+</option>
                  </select>
                </div>
                <div>
                  <label className="block text-gray-300 mb-2&quot;>Interests</label>
                  <select className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-white&quot;>
                    <option>All</option>
                    <option>Adventure</option>
                    <option>Culture</option>
                    <option>Nature</option>
                    <option>Luxury</option>
                  </select>
                </div>
              </div>
              <div className="mt-6 text-center&quot;>
                <button className="px-6 py-3 bg-gradient-to-r from-emerald-600 to-green-600 text-white rounded-lg font-semibold hover:from-emerald-700 hover:to-green-700 transition-all duration-300&quot;>
                  Generate Itinerary
                </button>
              </div>
            </div>
          </div>

          {/* Featured Journeys */}
          <div className="mb-16&quot;>
            <h2 className="text-3xl font-bold mb-8 flex items-center&quot;>
              <span className="mr-3&quot;>🗺️</span>
              Featured Journeys
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8&quot;>
              {featuredJourneys.map((journey) => (
                <article 
                  key={journey.id}
                  className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-lg rounded-2xl overflow-hidden border border-emerald-700/50 hover:border-emerald-500/70 transition-all duration-500 transform hover:-translate-y-2&quot;
                >
                  <div className="p-6&quot;>
                    <div className="flex flex-wrap gap-2 mb-4&quot;>
                      {journey.tags.map((tag, index) => (
                        <span key={index} className="px-2 py-1 bg-emerald-900/30 text-emerald-300 text-xs rounded-full border border-emerald-700/50&quot;>
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h3 className="text-xl font-bold mb-3 group-hover:text-emerald-300 transition-colors&quot;>
                      <Link href={`/blog/travel/destinations/${journey.id}`} className="hover:text-emerald-300 transition-colors&quot;>
                        {journey.title}
                      </Link>
                    </h3>
                    <p className="text-gray-400 mb-4&quot;>
                      {journey.excerpt}
                    </p>
                    <div className="flex items-center justify-between&quot;>
                      <span className="text-gray-500 text-sm&quot;>By {journey.author}</span>
                      <div className="text-right&quot;>
                        <span className="text-gray-500 text-sm block&quot;>{journey.date}</span>
                        <span className="text-gray-500 text-sm&quot;>{journey.readTime}</span>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Culture Compass */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16&quot;>
            <div className="lg:col-span-2&quot;>
              <h2 className="text-3xl font-bold mb-8 flex items-center&quot;>
                <span className="mr-3&quot;>🌏</span>
                Culture Compass
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6&quot;>
                {cultureCompass.map((culture, index) => (
                  <div 
                    key={index}
                    className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-lg rounded-2xl border border-emerald-700/50 p-6 hover:border-emerald-500/70 transition-all duration-300&quot;
                  >
                    <div className="text-4xl mb-4&quot;>{culture.icon}</div>
                    <h3 className="text-xl font-bold mb-4 text-emerald-300&quot;>{culture.country}</h3>
                    <ul className="space-y-2&quot;>
                      {culture.tips.map((tip, tipIndex) => (
                        <li key={tipIndex} className="flex items-start&quot;>
                          <span className="text-emerald-400 mr-2&quot;>•</span>
                          <span className="text-gray-300&quot;>{tip}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Travel Stats */}
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-lg rounded-2xl border border-emerald-700/50 p-6&quot;>
              <h3 className="text-2xl font-bold mb-6 flex items-center&quot;>
                <span className="mr-3&quot;>📍</span>
                Travel Metrics
              </h3>
              <div className="space-y-6&quot;>
                <div>
                  <div className="flex justify-between mb-2&quot;>
                    <span className="text-gray-300&quot;>Destinations Covered</span>
                    <span className="text-emerald-400 font-bold&quot;>892</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2&quot;>
                    <div className="bg-emerald-500 h-2 rounded-full&quot; style={{width: &apos;89%}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2&quot;>
                    <span className="text-gray-300&quot;>Cultural Guides</span>
                    <span className="text-emerald-400 font-bold&quot;>156</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2&quot;>
                    <div className="bg-green-500 h-2 rounded-full&quot; style={{width: &apos;65%}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2&quot;>
                    <span className="text-gray-300&quot;>Local Experts</span>
                    <span className="text-emerald-400 font-bold&quot;>42</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2&quot;>
                    <div className="bg-teal-500 h-2 rounded-full&quot; style={{width: &apos;42%}}></div>
                  </div>
                </div>
                
                <div className="pt-4 mt-4 border-t border-gray-700&quot;>
                  <h4 className="text-lg font-bold mb-4&quot;>Popular Routes</h4>
                  <div className="space-y-3&quot;>
                    <div className="flex justify-between&quot;>
                      <span className="text-gray-400&quot;>Tokyo-Osaka</span>
                      <span className="text-emerald-400&quot;>42 trips</span>
                    </div>
                    <div className="flex justify-between&quot;>
                      <span className="text-gray-400&quot;>Reykjavik-Höfn</span>
                      <span className="text-emerald-400&quot;>38 trips</span>
                    </div>
                    <div className="flex justify-between&quot;>
                      <span className="text-gray-400&quot;>Marrakech-Essaouira</span>
                      <span className="text-emerald-400&quot;>35 trips</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Recent Expeditions */}
          <div className="mb-16&quot;>
            <h2 className="text-3xl font-bold mb-8 flex items-center&quot;>
              <span className="mr-3&quot;>📍</span>
              Recent Expeditions
            </h2>
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-lg rounded-2xl border border-emerald-700/50 overflow-hidden&quot;>
              <div className="divide-y divide-gray-700/50&quot;>
                {recentExpeditions.map((expedition) => (
                  <div key={expedition.id} className="p-6 hover:bg-gray-800/30 transition-colors&quot;>
                    <div className="flex justify-between&quot;>
                      <h3 className="text-lg font-medium&quot;>
                        <Link href={`/blog/travel/adventures/${expedition.id}`} className="hover:text-emerald-300 transition-colors&quot;>
                          {expedition.title}
                        </Link>
                      </h3>
                      <span className="text-gray-500 text-sm&quot;>{expedition.date}</span>
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
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-emerald-600 to-green-600 text-white rounded-lg font-semibold hover:from-emerald-700 hover:to-green-700 transition-all duration-300 transform hover:scale-105&quot;
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