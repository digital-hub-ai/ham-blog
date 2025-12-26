import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function AmazonExpedition() {
  return (
    <>
      <Head>
        <title>Into the Green Heart: Amazon Rainforest Expedition | Chrono-Wanderer's Atlas</title>
        <meta name="description" content="An immersive journey into the lungs of the Earth with indigenous communities and wildlife." />
      </Head>

      <div className="min-h-screen bg-white text-black">
        <div className="container mx-auto px-4 py-12 max-w-4xl">
          <Link href="/blog/travel" className="inline-flex items-center text-emerald-400 hover:text-emerald-300 mb-8">
            <span className="mr-2">←</span>
            Back to Chrono-Wanderer's Atlas
          </Link>

          <article className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-lg rounded-2xl border border-emerald-700/50 p-8">
            <div className="mb-6">
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-emerald-900/30 text-emerald-300 text-sm rounded-full border border-emerald-700/50">
                  South America
                </span>
                <span className="px-3 py-1 bg-emerald-900/30 text-emerald-300 text-sm rounded-full border border-emerald-700/50">
                  Ecotourism
                </span>
                <span className="px-3 py-1 bg-emerald-900/30 text-emerald-300 text-sm rounded-full border border-emerald-700/50">
                  Wildlife
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-emerald-400 to-green-500 bg-clip-text text-transparent mb-4">
                Into the Green Heart: Amazon Rainforest Expedition
              </h1>
              <div className="flex items-center justify-between">
                <span className="text-gray-400">By Dr. Sofia Verde</span>
                <div className="text-right">
                  <span className="text-gray-400 block">Dec 17, 2025</span>
                  <span className="text-gray-400">16 min read</span>
                </div>
              </div>
            </div>

            <div className="prose prose-invert max-w-none">
              <p className="text-xl text-gray-300 mb-8">
                An immersive journey into the lungs of the Earth with indigenous communities and wildlife.
              </p>

              <div className="bg-gray-800 rounded-xl p-6 mb-8">
                <h2 className="text-2xl font-bold mb-4 text-emerald-400">Cultural Immersion Highlights</h2>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-emerald-400 mr-2">✓</span>
                    <span>Traditional plant medicine ceremonies</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-400 mr-2">✓</span>
                    <span>Indigenous storytelling around campfires</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-400 mr-2">✓</span>
                    <span>Handcrafted canoe building workshops</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-400 mr-2">✓</span>
                    <span>Jungle survival skill training</span>
                  </li>
                </ul>
              </div>

              <h2 className="text-3xl font-bold mb-6 text-emerald-400">Living with the Guardians</h2>
              <p className="mb-6">
                Our expedition partners with the Yawanawá people, who have been stewards of this land for millennia. 
                Experience their sustainable way of life through daily activities like fishing with traditional nets, 
                harvesting fruits from cultivated forest gardens, and learning about medicinal plants that have been 
                used for generations to treat various ailments.
              </p>

              <h2 className="text-3xl font-bold mb-6 text-emerald-400">Biodiversity Hotspot</h2>
              <p className="mb-6">
                The Amazon rainforest contains approximately 10% of the world's known biodiversity. During our guided 
                walks, you'll encounter species like the elusive jaguar, colorful macaws, playful river dolphins, and 
                countless varieties of insects, reptiles, and amphibians. Our expert naturalist guides help identify 
                species and explain their ecological roles in this complex ecosystem.
              </p>

              <h2 className="text-3xl font-bold mb-6 text-emerald-400">Sustainable Tourism Practices</h2>
              <p className="mb-6">
                We follow strict eco-tourism principles to minimize our environmental impact. All accommodations are 
                built using sustainable materials and renewable energy sources. Meals consist of locally sourced foods, 
                and all waste is carefully managed to leave no trace. A portion of expedition fees directly supports 
                conservation efforts and community development projects.
              </p>

              <div className="bg-emerald-900/20 border border-emerald-700/50 rounded-xl p-6 my-8">
                <h3 className="text-xl font-bold mb-4 text-emerald-400">Community Impact</h3>
                <p>
                  Your visit directly contributes to preserving indigenous culture and protecting the rainforest. 
                  Funds support educational programs for local children and help establish protected reserves.
                </p>
              </div>

              <h2 className="text-3xl font-bold mb-6 text-emerald-400">Night in the Canopy</h2>
              <p className="mb-6">
                Spend a night in elevated platforms suspended among the treetops for an unforgettable perspective 
                of the nocturnal rainforest. Listen to the symphony of nighttime sounds while safely observing 
                creatures like kinkajous, night monkeys, and tarantulas in their natural habitat. The canopy 
                experience offers a unique vantage point for stargazing through gaps in the forest ceiling.
              </p>
            </div>
          </article>

          <div className="mt-12 flex justify-between">
            <Link href="/blog/travel/cultures" className="px-6 py-3 bg-emerald-700 hover:bg-emerald-600 rounded-lg transition-colors">
              ← Back to Cultures
            </Link>
            <Link href="/blog/travel" className="px-6 py-3 bg-gradient-to-r from-emerald-600 to-green-600 text-white rounded-lg font-semibold hover:from-emerald-700 hover:to-green-700 transition-all duration-300">
              Explore More Journeys
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}