import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function NeoTokyo2025() {
  return (
    <>
      <Head>
        <title>Neo-Tokyo 2025: A Cyberpunk Odyssey | Chrono-Wanderer's Atlas</title>
        <meta name="description" content="Experience the fusion of ancient traditions and futuristic technology in the world's most dynamic city." />
      </Head>

      <div className="min-h-screen bg-white text-black">
        <div className="container mx-auto px-4 py-12 max-w-4xl">
          <Link href="/blog/travel" className="inline-flex items-center text-emerald-600 hover:text-emerald-800 mb-8">
            <span className="mr-2">←</span>
            Back to Chrono-Wanderer's Atlas
          </Link>

          <article className="bg-white border border-gray-200 rounded-2xl p-8 shadow-md">
            <div className="mb-6">
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-emerald-100 text-emerald-800 text-sm rounded-full">
                  Asia
                </span>
                <span className="px-3 py-1 bg-emerald-100 text-emerald-800 text-sm rounded-full">
                  Technology
                </span>
                <span className="px-3 py-1 bg-emerald-100 text-emerald-800 text-sm rounded-full">
                  Culture
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">
                Neo-Tokyo 2025: A Cyberpunk Odyssey
              </h1>
              <div className="flex items-center justify-between">
                <span className="text-gray-600">By Captain Maya Nakamura</span>
                <div className="text-right">
                  <span className="text-gray-600 block">Dec 21, 2025</span>
                  <span className="text-gray-600">14 min read</span>
                </div>
              </div>
            </div>

            <div className="prose prose-invert max-w-none">
              <p className="text-xl text-gray-700 mb-8">
                Experience the fusion of ancient traditions and futuristic technology in the world's most dynamic city.
              </p>

              <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-6 mb-8">
                <h2 className="text-2xl font-bold mb-4 text-emerald-800">Essential Highlights</h2>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-emerald-400 mr-2">✓</span>
                    <span>Shibuya Crossing at peak neon hour</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-400 mr-2">✓</span>
                    <span>Traditional tea ceremony in Akihabara</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-400 mr-2">✓</span>
                    <span>Floating sushi bar experience</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-400 mr-2">✓</span>
                    <span>Robot restaurant show in Shinjuku</span>
                  </li>
                </ul>
              </div>

              <h2 className="text-3xl font-bold mb-6 text-black">The Digital Meets the Traditional</h2>
              <p className="mb-6">
                Tokyo in 2025 represents the perfect synthesis of cutting-edge technology and deep-rooted cultural traditions. 
                As you walk through the streets of Shibuya, the towering holographic advertisements blend seamlessly with 
                traditional izakaya lanterns hanging from centuries-old wooden buildings.
              </p>

              <h2 className="text-3xl font-bold mb-6 text-black">Navigating the Neon Maze</h2>
              <p className="mb-6">
                The city's transportation system has evolved into an intricate network of maglev trains, autonomous shuttles, 
                and teleportation hubs. Download the Tokyo 2025 Navigator app to seamlessly move through the urban landscape 
                while discovering hidden gems that only locals know about.
              </p>

              <h2 className="text-3xl font-bold mb-6 text-emerald-400">Culinary Adventures</h2>
              <p className="mb-6">
                From molecular gastronomy experiences in Ginza to street food vendors serving bio-engineered delicacies, 
                Tokyo's culinary scene pushes the boundaries of taste and innovation. Don't miss the opportunity to dine 
                at restaurants that grow their ingredients in vertical farms located within the building itself.
              </p>

              <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-6 my-8">
                <h3 className="text-xl font-bold mb-4 text-emerald-800">Traveler's Tip</h3>
                <p>
                  Purchase a Tokyo 2025 Transit Pass that includes access to all transportation modes plus discounts 
                  at participating cyber-cafés and augmented reality museums.
                </p>
              </div>

              <h2 className="text-3xl font-bold mb-6 text-emerald-400">Beyond the City Limits</h2>
              <p className="mb-6">
                Take a day trip to the floating islands in Tokyo Bay, where you can experience zero-gravity sports 
                and underwater hotels. The islands are connected by a network of transparent tubes that offer stunning 
                views of marine life and the city skyline.
              </p>
            </div>
          </article>

          <div className="mt-12 flex justify-between">
            <Link href="/blog/travel/destinations" className="px-6 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors">
              ← Back to Destinations
            </Link>
            <Link href="/blog/travel" className="px-6 py-3 bg-emerald-600 text-white rounded-lg font-semibold hover:bg-emerald-700 transition-all duration-300">
              Explore More Journeys
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}