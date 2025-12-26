import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function ChasingAurora() {
  return (
    <>
      <Head>
        <title>Chasing Aurora: Iceland's Celestial Dance | Chrono-Wanderer's Atlas</title>
        <meta name="description" content="Witness the magical northern lights in Iceland's untouched wilderness with our expert guide." />
      </Head>

      <div className="min-h-screen bg-white text-black">
        <div className="container mx-auto px-4 py-12 max-w-4xl">
          <Link href="/blog/travel" className="inline-flex items-center text-emerald-400 hover:text-emerald-300 mb-8">
            <span className="mr-2">←</span>
            Back to Chrono-Wanderer's Atlas
          </Link>

          <article className="bg-white border border-gray-200 rounded-2xl p-8 shadow-md">
            <div className="mb-6">
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-emerald-900/30 text-emerald-300 text-sm rounded-full border border-emerald-700/50">
                  Europe
                </span>
                <span className="px-3 py-1 bg-emerald-900/30 text-emerald-300 text-sm rounded-full border border-emerald-700/50">
                  Nature
                </span>
                <span className="px-3 py-1 bg-emerald-900/30 text-emerald-300 text-sm rounded-full border border-emerald-700/50">
                  Adventure
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-emerald-400 to-green-500 bg-clip-text text-transparent mb-4">
                Chasing Aurora: Iceland's Celestial Dance
              </h1>
              <div className="flex items-center justify-between">
                <span className="text-gray-400">By Explorer Erik Frost</span>
                <div className="text-right">
                  <span className="text-gray-400 block">Dec 19, 2025</span>
                  <span className="text-gray-400">11 min read</span>
                </div>
              </div>
            </div>

            <div className="prose prose-invert max-w-none">
              <p className="text-xl text-gray-300 mb-8">
                Witness the magical northern lights in Iceland's untouched wilderness with our expert guide.
              </p>

              <div className="bg-gray-800 rounded-xl p-6 mb-8">
                <h2 className="text-2xl font-bold mb-4 text-emerald-400">Best Viewing Times</h2>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-emerald-400 mr-2">✓</span>
                    <span>September to April for optimal darkness</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-400 mr-2">✓</span>
                    <span>Peak activity between 9 PM - 3 AM</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-400 mr-2">✓</span>
                    <span>Clear skies away from city light pollution</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-400 mr-2">✓</span>
                    <span>Solar activity forecast monitoring</span>
                  </li>
                </ul>
              </div>

              <h2 className="text-3xl font-bold mb-6 text-emerald-400">Preparing for the Hunt</h2>
              <p className="mb-6">
                Aurora hunting requires careful planning and the right equipment. Dress in layers with moisture-wicking base 
                layers, insulating mid-layers, and windproof outer shells. Essential gear includes a sturdy tripod for 
                photography, extra camera batteries (they drain quickly in cold), and a headlamp with red-filter capability 
                to preserve night vision.
              </p>

              <h2 className="text-3xl font-bold mb-6 text-emerald-400">Top Viewing Locations</h2>
              <p className="mb-6">
                Iceland offers numerous prime locations for aurora viewing. Thingvellir National Park provides dark skies 
                and dramatic landscapes. The Snaefellsnes Peninsula offers coastal views with the chance to photograph 
                the lights dancing over black sand beaches. For a unique perspective, consider a boat tour from Reykjavik 
                harbor to view the aurora from the water.
              </p>

              <h2 className="text-3xl font-bold mb-6 text-emerald-400">Photography Tips</h2>
              <p className="mb-6">
                Capturing the aurora requires a DSLR or mirrorless camera with manual settings. Use a wide-angle lens 
                (14-24mm) to capture the vast sky, set your aperture to f/1.4-f/2.8, ISO between 1600-6400, and shutter 
                speeds of 5-20 seconds. Focus manually using live view at infinity, and take test shots to adjust exposure.
              </p>

              <div className="bg-emerald-900/20 border border-emerald-700/50 rounded-xl p-6 my-8">
                <h3 className="text-xl font-bold mb-4 text-emerald-400">Pro Tip</h3>
                <p>
                  Book accommodations with aurora wake-up calls. Many Icelandic hotels offer complimentary alerts when 
                  aurora activity reaches optimal levels, ensuring you don't miss the show.
                </p>
              </div>

              <h2 className="text-3xl font-bold mb-6 text-emerald-400">Beyond the Lights</h2>
              <p className="mb-6">
                Extend your aurora adventure by exploring Iceland's geothermal wonders. Soak in the Blue Lagoon while 
                watching for lights overhead, or venture to remote hot springs accessible only by super jeep for a truly 
                unforgettable experience combining two of Iceland's most iconic attractions.
              </p>
            </div>
          </article>

          <div className="mt-12 flex justify-between">
            <Link href="/blog/travel/adventures" className="px-6 py-3 bg-emerald-700 hover:bg-emerald-600 rounded-lg transition-colors">
              ← Back to Adventures
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