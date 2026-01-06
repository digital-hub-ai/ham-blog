import React from &apos;react&apos;;
import Head from &apos;next/head&apos;;
import Link from &apos;next/link&apos;;

export default function AdventuresIndex() {
  // Sample adventures
  const adventures = [
    { id: &apos;chasing-aurora&apos;, title: &apos;Chasing Aurora: Iceland&apos;s Celestial Dance&apos;, date: &apos;Dec 19, 2025&apos;, excerpt: &apos;Witness the magical northern lights in Iceland&apos;s untouched wilderness with our expert guide.&apos; },
    { id: &apos;mountain-summit-challenge&apos;, title: &apos;Conquering Hidden Peaks: Extreme Mountain Climbing Adventures&apos;, date: &apos;Dec 17, 2025&apos;, excerpt: &apos;Tackle challenging mountain climbs with expert guides and breathtaking summit views.&apos; },
    { id: &apos;underwater-cave-diving&apos;, title: &apos;Underwater Cave Diving: Exploring Submerged Caverns&apos;, date: &apos;Dec 17, 2025&apos;, excerpt: &apos;Explore submerged caverns and encounter unique marine life in crystal-clear waters.&apos; },
    { id: &apos;desert-navigation&apos;, title: &apos;Desert Survival Challenge&apos;, date: &apos;Dec 16, 2025&apos;, excerpt: &apos;Learn essential survival skills while trekking through vast desert landscapes.&apos; },
    { id: &apos;jungle-trek&apos;, title: &apos;Jungle Trek Expedition&apos;, date: &apos;Dec 15, 2025&apos;, excerpt: &apos;Navigate dense rainforests and discover hidden waterfalls with local guides.&apos; }
  ];

  return (
    <>
      <Head>
        <title>Adventures | Chrono-Wanderer&apos;s Atlas</title>
        <meta name="description&quot; content="Thrilling adventures and outdoor experiences around the globe.&quot; />
      </Head>

      <div className="min-h-screen bg-white text-black&quot;>
        <div className="container mx-auto px-4 py-12 max-w-6xl&quot;>
          <Link href="/blog/travel&quot; className="inline-flex items-center text-emerald-400 hover:text-emerald-300 mb-8&quot;>
            <span className="mr-2&quot;>←</span>
            Back to Chrono-Wanderer&apos;s Atlas
          </Link>

          <div className="mb-12&quot;>
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-emerald-400 to-green-500 bg-clip-text text-transparent mb-4&quot;>
              Adventures
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl&quot;>
              Thrilling adventures and outdoor experiences around the globe.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8&quot;>
            {adventures.map((adventure) => (
              <article 
                key={adventure.id}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-lg rounded-2xl overflow-hidden border border-emerald-700/50 hover:border-emerald-500/70 transition-all duration-500 transform hover:-translate-y-2&quot;
              >
                <div className="p-6&quot;>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-emerald-300 transition-colors&quot;>
                    <Link href={`/blog/travel/adventures/${adventure.id}`} className="hover:text-emerald-300 transition-colors&quot;>
                      {adventure.title}
                    </Link>
                  </h3>
                  <p className="text-gray-400 mb-4&quot;>
                    {adventure.excerpt}
                  </p>
                  <div className="flex items-center justify-between&quot;>
                    <span className="text-gray-500 text-sm&quot;>{adventure.date}</span>
                    <Link 
                      href={`/blog/travel/adventures/${adventure.id}`}
                      className="text-emerald-400 hover:text-emerald-300 text-sm&quot;
                    >
                      Read Guide →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-12 text-center&quot;>
            <Link 
              href="/blog/travel&quot;
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-emerald-600 to-green-600 text-white rounded-lg font-semibold hover:from-emerald-700 hover:to-green-700 transition-all duration-300&quot;
            >
              ← Back to Travel Dimension
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}