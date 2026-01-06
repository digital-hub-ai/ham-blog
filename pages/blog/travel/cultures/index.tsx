import React from &apos;react&apos;;
import Head from &apos;next/head&apos;;
import Link from &apos;next/link&apos;;

export default function CulturesIndex() {
  // Sample cultural guides
  const culturalGuides = [
    { id: &apos;amazon-expedition&apos;, title: &apos;Into the Green Heart: Amazon Rainforest Expedition&apos;, date: &apos;Dec 17, 2025&apos;, excerpt: &apos;An immersive journey into the lungs of the Earth with indigenous communities and wildlife.&apos; },
    { id: &apos;japanese-traditions&apos;, title: &apos;Japanese Traditions: From Tea Ceremony to Zen&apos;, date: &apos;Dec 16, 2025&apos;, excerpt: &apos;Discover the profound cultural practices that define Japanese society and spirituality.&apos; },
    { id: &apos;moroccan-hospitality&apos;, title: &apos;Moroccan Hospitality and Customs&apos;, date: &apos;Dec 15, 2025&apos;, excerpt: &apos;Experience the warmth of Moroccan culture through traditional meals and social customs.&apos; },
    { id: &apos;indian-festivals&apos;, title: &apos;Indian Festivals: A Celebration of Diversity&apos;, date: &apos;Dec 14, 2025&apos;, excerpt: &apos;Explore the vibrant festivals that showcase India&apos;s rich cultural tapestry.&apos; },
    { id: &apos;native-american-heritage&apos;, title: &apos;Native American Heritage Sites&apos;, date: &apos;Dec 13, 2025&apos;, excerpt: &apos;Visit sacred sites and learn about the enduring traditions of Native American tribes.&apos; }
  ];

  return (
    <>
      <Head>
        <title>Cultures | Chrono-Wanderer&apos;s Atlas</title>
        <meta name="description&quot; content="Immerse yourself in diverse cultures and traditions around the world.&quot; />
      </Head>

      <div className="min-h-screen bg-white text-black&quot;>
        <div className="container mx-auto px-4 py-12 max-w-6xl&quot;>
          <Link href="/blog/travel&quot; className="inline-flex items-center text-emerald-400 hover:text-emerald-300 mb-8&quot;>
            <span className="mr-2&quot;>←</span>
            Back to Chrono-Wanderer&apos;s Atlas
          </Link>

          <div className="mb-12&quot;>
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-emerald-400 to-green-500 bg-clip-text text-transparent mb-4&quot;>
              Cultures
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl&quot;>
              Immerse yourself in diverse cultures and traditions around the world.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8&quot;>
            {culturalGuides.map((guide) => (
              <article 
                key={guide.id}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-lg rounded-2xl overflow-hidden border border-emerald-700/50 hover:border-emerald-500/70 transition-all duration-500 transform hover:-translate-y-2&quot;
              >
                <div className="p-6&quot;>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-emerald-300 transition-colors&quot;>
                    <Link href={`/blog/travel/cultures/${guide.id}`} className="hover:text-emerald-300 transition-colors&quot;>
                      {guide.title}
                    </Link>
                  </h3>
                  <p className="text-gray-400 mb-4&quot;>
                    {guide.excerpt}
                  </p>
                  <div className="flex items-center justify-between&quot;>
                    <span className="text-gray-500 text-sm&quot;>{guide.date}</span>
                    <Link 
                      href={`/blog/travel/cultures/${guide.id}`}
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