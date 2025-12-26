import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function AdventuresIndex() {
  // Sample adventures
  const adventures = [
    { id: 'chasing-aurora', title: 'Chasing Aurora: Iceland's Celestial Dance', date: 'Dec 19, 2025', excerpt: 'Witness the magical northern lights in Iceland's untouched wilderness with our expert guide.' },
    { id: 'mountain-summit-challenge', title: 'Conquering Hidden Peaks: Extreme Mountain Climbing Adventures', date: 'Dec 17, 2025', excerpt: 'Tackle challenging mountain climbs with expert guides and breathtaking summit views.' },
    { id: 'underwater-cave-diving', title: 'Underwater Cave Diving: Exploring Submerged Caverns', date: 'Dec 17, 2025', excerpt: 'Explore submerged caverns and encounter unique marine life in crystal-clear waters.' },
    { id: 'desert-navigation', title: 'Desert Survival Challenge', date: 'Dec 16, 2025', excerpt: 'Learn essential survival skills while trekking through vast desert landscapes.' },
    { id: 'jungle-trek', title: 'Jungle Trek Expedition', date: 'Dec 15, 2025', excerpt: 'Navigate dense rainforests and discover hidden waterfalls with local guides.' }
  ];

  return (
    <>
      <Head>
        <title>Adventures | Chrono-Wanderer's Atlas</title>
        <meta name="description" content="Thrilling adventures and outdoor experiences around the globe." />
      </Head>

      <div className="min-h-screen bg-white text-black">
        <div className="container mx-auto px-4 py-12 max-w-6xl">
          <Link href="/blog/travel" className="inline-flex items-center text-emerald-400 hover:text-emerald-300 mb-8">
            <span className="mr-2">←</span>
            Back to Chrono-Wanderer's Atlas
          </Link>

          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-emerald-400 to-green-500 bg-clip-text text-transparent mb-4">
              Adventures
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl">
              Thrilling adventures and outdoor experiences around the globe.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {adventures.map((adventure) => (
              <article 
                key={adventure.id}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-lg rounded-2xl overflow-hidden border border-emerald-700/50 hover:border-emerald-500/70 transition-all duration-500 transform hover:-translate-y-2"
              >
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-emerald-300 transition-colors">
                    <Link href={`/blog/travel/adventures/${adventure.id}`} className="hover:text-emerald-300 transition-colors">
                      {adventure.title}
                    </Link>
                  </h3>
                  <p className="text-gray-400 mb-4">
                    {adventure.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-500 text-sm">{adventure.date}</span>
                    <Link 
                      href={`/blog/travel/adventures/${adventure.id}`}
                      className="text-emerald-400 hover:text-emerald-300 text-sm"
                    >
                      Read Guide →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link 
              href="/blog/travel"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-emerald-600 to-green-600 text-white rounded-lg font-semibold hover:from-emerald-700 hover:to-green-700 transition-all duration-300"
            >
              ← Back to Travel Dimension
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}