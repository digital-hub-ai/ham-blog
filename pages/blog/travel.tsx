import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import RealityBridges from '../../components/RealityBridges';

export default function TravelReality() {
  // Sub-realities within the travel dimension
  const subRealities = [
    { id: 'destinations', name: 'Destinations', icon: '🌍' },
    { id: 'adventures', name: 'Adventures', icon: '🧭' },
    { id: 'cultures', name: 'Cultures', icon: '🎎' },
    { id: 'travel-tech', name: 'Travel Tech', icon: '📱' },
    { id: 'sustainable', name: 'Sustainable Travel', icon: '🌱' },
    { id: 'luxury', name: 'Luxury Experiences', icon: '💎' }
  ];

  // Featured journeys
  const featuredJourneys = [
    {
      id: 'neo-tokyo-2025',
      title: 'Neo-Tokyo 2025: A Cyberpunk Odyssey',
      excerpt: 'Experience the fusion of ancient traditions and futuristic technology in the world\'s most dynamic city.',
      date: 'Dec 21, 2025',
      author: 'Captain Maya Nakamura',
      readTime: '14 min read',
      tags: ['Asia', 'Technology', 'Culture'],
      destination: 'Japan'
    },
    {
      id: 'chasing-aurora',
      title: 'Chasing Aurora: Iceland\'s Celestial Dance',
      excerpt: 'Witness the magical northern lights in Iceland\'s untouched wilderness with our expert guide.',
      date: 'Dec 19, 2025',
      author: 'Explorer Erik Frost',
      readTime: '11 min read',
      tags: ['Europe', 'Nature', 'Adventure'],
      destination: 'Iceland'
    },
    {
      id: 'amazon-expedition',
      title: 'Into the Green Heart: Amazon Rainforest Expedition',
      excerpt: 'An immersive journey into the lungs of the Earth with indigenous communities and wildlife.',
      date: 'Dec 17, 2025',
      author: 'Dr. Sofia Verde',
      readTime: '16 min read',
      tags: ['South America', 'Ecotourism', 'Wildlife'],
      destination: 'Amazon'
    }
  ];

  // Culture compass entries
  const cultureCompass = [
    { 
      country: 'Japan', 
      icon: '🇯🇵',
      tips: [
        'Bowing etiquette & temple visits',
        'Shoes off in homes and temples',
        'Quiet on public transportation'
      ]
    },
    { 
      country: 'Morocco', 
      icon: '🇲🇦',
      tips: [
        'Haggling tips & mint tea rituals',
        'Respect for Ramadan practices',
        'Dress modestly in cities'
      ]
    },
    { 
      country: 'Iceland', 
      icon: '🇮🇸',
      tips: [
        'Hot spring etiquette & elf beliefs',
        'Tipping is not customary',
        'Embrace the "no worries" attitude'
      ]
    }
  ];

  // Recent expeditions
  const recentExpeditions = [
    { id: 'morocco-hidden-gems', title: 'Hidden Gems of Morocco', date: 'Dec 20, 2025' },
    { id: 'new-zealand-road-trip', title: 'New Zealand Road Trip Essentials', date: 'Dec 19, 2025' },
    { id: 'venice-floating-city', title: 'Venice: Navigating the Floating City', date: 'Dec 18, 2025' },
    { id: 'kenya-safari-adventures', title: 'Safari Adventures in Kenya', date: 'Dec 17, 2025' },
    { id: 'thailand-culinary-journey', title: 'Culinary Journey Through Thailand', date: 'Dec 16, 2025' }
  ];

  return (
    <>
      <Head>
        <title>Chrono-Wanderer's Atlas - Travel Dimension</title>
        <meta name="description" content="Journey through时空continuums to explore cultures, destinations, and adventures beyond imagination." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Reality Bridges Navigation */}
      <RealityBridges currentReality="travel" />

      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-emerald-900 to-black text-white overflow-hidden">
        {/* Floating particles background */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          {[...Array(80)].map((_, i) => (
            <div 
              key={i}
              className="absolute text-emerald-500/20"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                fontSize: `${Math.random() * 20 + 10}px`,
                animationDuration: `${Math.random() * 10 + 5}s`,
                animationDelay: `${Math.random() * 2}s`
              }}
            >
              {['🌍', '✈️', '🧭', '📍', '🗺️', '🏕️', '🚞', '🚢'][Math.floor(Math.random() * 8)]}
            </div>
          ))}
        </div>

        <div className="container mx-auto px-4 py-24 max-w-6xl relative z-10">
          {/* Reality Header */}
          <div className="text-center mb-16 pt-4">
            <div className="mb-6">
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-emerald-400 to-green-500 bg-clip-text text-transparent mb-4">Chrono-Wanderer's Atlas</h1>
              <div className="w-32 h-1 bg-gradient-to-r from-emerald-400 to-green-500 mx-auto rounded-full mb-6"></div>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">The Travel Dimension - Journey through时空continuums to explore cultures, destinations, and adventures beyond imagination.</p>
            </div>
            
            {/* Reality Navigation */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {subRealities.map((sub) => (
                <Link 
                  key={sub.id}
                  href={`/blog/travel/${sub.id}`}
                  className="px-4 py-2 bg-emerald-900/30 rounded-full text-emerald-300 border border-emerald-700/50 hover:bg-emerald-800/50 hover:border-emerald-600/50 transition-all duration-300 flex items-center"
                >
                  <span className="mr-2">{sub.icon}</span>
                  {sub.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Interactive Trip Planner */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 flex items-center">
              <span className="mr-3">🧳</span>
              Interactive Trip Planner
            </h2>
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-lg rounded-2xl border border-emerald-700/50 p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
                <div>
                  <label className="block text-gray-300 mb-2">Destination</label>
                  <select className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-white">
                    <option>Select Destination</option>
                    <option>Japan</option>
                    <option>Iceland</option>
                    <option>Brazil</option>
                    <option>Morocco</option>
                    <option>New Zealand</option>
                  </select>
                </div>
                <div>
                  <label className="block text-gray-300 mb-2">Travel Dates</label>
                  <input 
                    type="text" 
                    placeholder="Dec 25 - Jan 5"
                    className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-white"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 mb-2">Budget</label>
                  <div className="relative">
                    <span className="absolute left-3 top-2 text-gray-400">$</span>
                    <input 
                      type="text" 
                      placeholder="5000"
                      className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-white pl-8"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-gray-300 mb-2">Travelers</label>
                  <select className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-white">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4+</option>
                  </select>
                </div>
                <div>
                  <label className="block text-gray-300 mb-2">Interests</label>
                  <select className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-white">
                    <option>All</option>
                    <option>Adventure</option>
                    <option>Culture</option>
                    <option>Nature</option>
                    <option>Luxury</option>
                  </select>
                </div>
              </div>
              <div className="mt-6 text-center">
                <button className="px-6 py-3 bg-gradient-to-r from-emerald-600 to-green-600 text-white rounded-lg font-semibold hover:from-emerald-700 hover:to-green-700 transition-all duration-300">
                  Generate Itinerary
                </button>
              </div>
            </div>
          </div>

          {/* Featured Journeys */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 flex items-center">
              <span className="mr-3">🗺️</span>
              Featured Journeys
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {featuredJourneys.map((journey) => (
                <article 
                  key={journey.id}
                  className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-lg rounded-2xl overflow-hidden border border-emerald-700/50 hover:border-emerald-500/70 transition-all duration-500 transform hover:-translate-y-2"
                >
                  <div className="p-6">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {journey.tags.map((tag, index) => (
                        <span key={index} className="px-2 py-1 bg-emerald-900/30 text-emerald-300 text-xs rounded-full border border-emerald-700/50">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h3 className="text-xl font-bold mb-3 group-hover:text-emerald-300 transition-colors">
                      <Link href={`/blog/travel/destinations/${journey.id}`} className="hover:text-emerald-300 transition-colors">
                        {journey.title}
                      </Link>
                    </h3>
                    <p className="text-gray-400 mb-4">
                      {journey.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-500 text-sm">By {journey.author}</span>
                      <div className="text-right">
                        <span className="text-gray-500 text-sm block">{journey.date}</span>
                        <span className="text-gray-500 text-sm">{journey.readTime}</span>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Culture Compass */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold mb-8 flex items-center">
                <span className="mr-3">🌏</span>
                Culture Compass
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {cultureCompass.map((culture, index) => (
                  <div 
                    key={index}
                    className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-lg rounded-2xl border border-emerald-700/50 p-6 hover:border-emerald-500/70 transition-all duration-300"
                  >
                    <div className="text-4xl mb-4">{culture.icon}</div>
                    <h3 className="text-xl font-bold mb-4 text-emerald-300">{culture.country}</h3>
                    <ul className="space-y-2">
                      {culture.tips.map((tip, tipIndex) => (
                        <li key={tipIndex} className="flex items-start">
                          <span className="text-emerald-400 mr-2">•</span>
                          <span className="text-gray-300">{tip}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Travel Stats */}
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-lg rounded-2xl border border-emerald-700/50 p-6">
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <span className="mr-3">📍</span>
                Travel Metrics
              </h3>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-300">Destinations Covered</span>
                    <span className="text-emerald-400 font-bold">892</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-emerald-500 h-2 rounded-full" style={{width: '89%'}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-300">Cultural Guides</span>
                    <span className="text-emerald-400 font-bold">156</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-green-500 h-2 rounded-full" style={{width: '65%'}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-300">Local Experts</span>
                    <span className="text-emerald-400 font-bold">42</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-teal-500 h-2 rounded-full" style={{width: '42%'}}></div>
                  </div>
                </div>
                
                <div className="pt-4 mt-4 border-t border-gray-700">
                  <h4 className="text-lg font-bold mb-4">Popular Routes</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Tokyo-Osaka</span>
                      <span className="text-emerald-400">42 trips</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Reykjavik-Höfn</span>
                      <span className="text-emerald-400">38 trips</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Marrakech-Essaouira</span>
                      <span className="text-emerald-400">35 trips</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Recent Expeditions */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 flex items-center">
              <span className="mr-3">📍</span>
              Recent Expeditions
            </h2>
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-lg rounded-2xl border border-emerald-700/50 overflow-hidden">
              <div className="divide-y divide-gray-700/50">
                {recentExpeditions.map((expedition) => (
                  <div key={expedition.id} className="p-6 hover:bg-gray-800/30 transition-colors">
                    <div className="flex justify-between">
                      <h3 className="text-lg font-medium">
                        <Link href={`/blog/travel/adventures/${expedition.id}`} className="hover:text-emerald-300 transition-colors">
                          {expedition.title}
                        </Link>
                      </h3>
                      <span className="text-gray-500 text-sm">{expedition.date}</span>
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
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-emerald-600 to-green-600 text-white rounded-lg font-semibold hover:from-emerald-700 hover:to-green-700 transition-all duration-300 transform hover:scale-105"
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