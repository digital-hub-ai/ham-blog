import React from &apos;react&apos;;
import Head from &apos;next/head&apos;;
import Link from &apos;next/link&apos;;

export default function AmazonExpedition() {
  return (
    <>
      <Head>
        <title>Into the Green Heart: Amazon Rainforest Expedition | Chrono-Wanderer&apos;s Atlas</title>
        <meta name="description&quot; content="An immersive journey into the lungs of the Earth with indigenous communities and wildlife.&quot; />
      </Head>

      <div className="min-h-screen bg-white text-black&quot;>
        <div className="container mx-auto px-4 py-12 max-w-4xl&quot;>
          <Link href="/blog/travel&quot; className="inline-flex items-center text-emerald-400 hover:text-emerald-300 mb-8&quot;>
            <span className="mr-2&quot;>←</span>
            Back to Chrono-Wanderer&apos;s Atlas
          </Link>

          <article className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-lg rounded-2xl border border-emerald-700/50 p-8&quot;>
            <div className="mb-6&quot;>
              <div className="flex flex-wrap gap-2 mb-4&quot;>
                <span className="px-3 py-1 bg-emerald-900/30 text-emerald-300 text-sm rounded-full border border-emerald-700/50&quot;>
                  South America
                </span>
                <span className="px-3 py-1 bg-emerald-900/30 text-emerald-300 text-sm rounded-full border border-emerald-700/50&quot;>
                  Ecotourism
                </span>
                <span className="px-3 py-1 bg-emerald-900/30 text-emerald-300 text-sm rounded-full border border-emerald-700/50&quot;>
                  Wildlife
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-emerald-400 to-green-500 bg-clip-text text-transparent mb-4&quot;>
                Into the Green Heart: Amazon Rainforest Expedition
              </h1>
              <div className="flex items-center justify-between&quot;>
                <span className="text-gray-400&quot;>By Dr. Sofia Verde</span>
                <div className="text-right&quot;>
                  <span className="text-gray-400 block&quot;>Dec 17, 2025</span>
                  <span className="text-gray-400&quot;>16 min read</span>
                </div>
              </div>
            </div>

            <div className="prose prose-invert max-w-none&quot;>
              <p className="text-xl text-gray-300 mb-8&quot;>
                An immersive journey into the lungs of the Earth with indigenous communities and wildlife.
              </p>

              <div className="bg-gray-800 rounded-xl p-6 mb-8&quot;>
                <h2 className="text-2xl font-bold mb-4 text-emerald-400&quot;>Cultural Immersion Highlights</h2>
                <ul className="space-y-2&quot;>
                  <li className="flex items-start&quot;>
                    <span className="text-emerald-400 mr-2&quot;>✓</span>
                    <span>Traditional plant medicine ceremonies</span>
                  </li>
                  <li className="flex items-start&quot;>
                    <span className="text-emerald-400 mr-2&quot;>✓</span>
                    <span>Indigenous storytelling around campfires</span>
                  </li>
                  <li className="flex items-start&quot;>
                    <span className="text-emerald-400 mr-2&quot;>✓</span>
                    <span>Handcrafted canoe building workshops</span>
                  </li>
                  <li className="flex items-start&quot;>
                    <span className="text-emerald-400 mr-2&quot;>✓</span>
                    <span>Jungle survival skill training</span>
                  </li>
                </ul>
              </div>

              <h2 className="text-3xl font-bold mb-6 text-emerald-400&quot;>Living with the Guardians</h2>
              <p className="mb-6&quot;>
                Our expedition partners with the Yawanawá people, who have been stewards of this land for millennia. 
                Experience their sustainable way of life through daily activities like fishing with traditional nets, 
                harvesting fruits from cultivated forest gardens, and learning about medicinal plants that have been 
                used for generations to treat various ailments.
              </p>

              <h2 className="text-3xl font-bold mb-6 text-emerald-400&quot;>Biodiversity Hotspot</h2>
              <p className="mb-6&quot;>
                The Amazon rainforest contains approximately 10% of the world&apos;s known biodiversity. During our guided 
                walks, you&apos;ll encounter species like the elusive jaguar, colorful macaws, playful river dolphins, and 
                countless varieties of insects, reptiles, and amphibians. Our expert naturalist guides help identify 
                species and explain their ecological roles in this complex ecosystem.
              </p>

              <h2 className="text-3xl font-bold mb-6 text-emerald-400&quot;>Sustainable Tourism Practices</h2>
              <p className="mb-6&quot;>
                We follow strict eco-tourism principles to minimize our environmental impact. All accommodations are 
                built using sustainable materials and renewable energy sources. Meals consist of locally sourced foods, 
                and all waste is carefully managed to leave no trace. A portion of expedition fees directly supports 
                conservation efforts and community development projects.
              </p>

              <div className="bg-emerald-900/20 border border-emerald-700/50 rounded-xl p-6 my-8&quot;>
                <h3 className="text-xl font-bold mb-4 text-emerald-400&quot;>Community Impact</h3>
                <p>
                  Your visit directly contributes to preserving indigenous culture and protecting the rainforest. 
                  Funds support educational programs for local children and help establish protected reserves.
                </p>
              </div>

              <h2 className="text-3xl font-bold mb-6 text-emerald-400&quot;>Night in the Canopy</h2>
              <p className="mb-6&quot;>
                Spend a night in elevated platforms suspended among the treetops for an unforgettable perspective 
                of the nocturnal rainforest. Listen to the symphony of nighttime sounds while safely observing 
                creatures like kinkajous, night monkeys, and tarantulas in their natural habitat. The canopy 
                experience offers a unique vantage point for stargazing through gaps in the forest ceiling.
              </p>
            </div>
          </article>

          <div className="mt-12 flex justify-between&quot;>
            <Link href="/blog/travel/cultures&quot; className="px-6 py-3 bg-emerald-700 hover:bg-emerald-600 rounded-lg transition-colors&quot;>
              ← Back to Cultures
            </Link>
            <Link href="/blog/travel&quot; className="px-6 py-3 bg-gradient-to-r from-emerald-600 to-green-600 text-white rounded-lg font-semibold hover:from-emerald-700 hover:to-green-700 transition-all duration-300&quot;>
              Explore More Journeys
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}