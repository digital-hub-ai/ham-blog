import React from &apos;react&apos;;
import Head from &apos;next/head&apos;;
import Link from &apos;next/link&apos;;

export default function WorldCuisinesIndex() {
  // World cuisine articles
  const cuisineArticles = [
    { 
      id: &apos;ethiopian&apos;, 
      title: &apos;The Coffee Ceremony: Ethiopia\&apos;s Cultural Heart&apos;, 
      excerpt: &apos;Exploring the ancient traditions of Ethiopia\&apos;s coffee culture and its role in community.&apos;,
      date: &apos;Dec 22, 2025&apos;,
      author: &apos;Cultural Explorer Alem Debena&apos;,
      readTime: &apos;16 min read&apos;
    },
    { 
      id: &apos;peruvian&apos;, 
      title: &apos;Ceviche Evolution: From Ancient Tradition to Modern Innovation&apos;, 
      excerpt: &apos;How Peru\&apos;s national dish has evolved while maintaining its authentic preparation.&apos;,
      date: &apos;Dec 21, 2025&apos;,
      author: &apos;Ceviche Specialist Carlos Lima&apos;,
      readTime: &apos;14 min read&apos;
    },
    { 
      id: &apos;korean&apos;, 
      title: &apos;Fermentation Mastery: Korea\&apos;s Kimchi Culture&apos;, 
      excerpt: &apos;Understanding the science and tradition behind Korea\&apos;s most iconic fermented food.&apos;,
      date: &apos;Dec 20, 2025&apos;,
      author: &apos;Fermentation Expert Ji-Hyun Park&apos;,
      readTime: &apos;18 min read&apos;
    },
    { 
      id: &apos;moroccan&apos;, 
      title: &apos;Tagine Traditions: Slow-Cooked Stories of Morocco&apos;, 
      excerpt: &apos;The art and technique of cooking in Morocco\&apos;s iconic clay pot.&apos;,
      date: &apos;Dec 19, 2025&apos;,
      author: &apos;Moroccan Chef Youssef Tagine&apos;,
      readTime: &apos;15 min read&apos;
    },
    { 
      id: &apos;vietnamese&apos;, 
      title: &apos;Pho Philosophy: Vietnam\&apos;s Noodle Soup Culture&apos;, 
      excerpt: &apos;The cultural significance and regional variations of Vietnam\&apos;s most beloved dish.&apos;,
      date: &apos;Dec 18, 2025&apos;,
      author: &apos;Pho Master Linh Broth&apos;,
      readTime: &apos;17 min read&apos;
    },
    { 
      id: &apos;georgian&apos;, 
      title: &apos;Supra: Georgia\&apos;s Sacred Tradition of Hospitality&apos;, 
      excerpt: &apos;Exploring the ancient Georgian feast tradition and its cultural importance.&apos;,
      date: &apos;Dec 17, 2025&apos;,
      author: &apos;Georgian Host Giorgi Tamada&apos;,
      readTime: &apos;20 min read&apos;
    }
  ];

  return (
    <>
      <Head>
        <title>World Cuisines | Culinary Chronicles</title>
        <meta name="description&quot; content="Explore diverse culinary traditions from around the globe.&quot; />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-amber-900 to-black text-white&quot;>
        <div className="container mx-auto px-4 py-12 max-w-6xl&quot;>
          <Link href="/blog/food&quot; className="inline-flex items-center text-amber-400 hover:text-amber-300 mb-8&quot;>
            <span className="mr-2&quot;>←</span>
            Back to Culinary Chronicles
          </Link>

          <div className="mb-12&quot;>
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent mb-4&quot;>
              World Cuisines
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl&quot;>
              Explore diverse culinary traditions from around the globe. From street food to ceremonial dishes, discover the stories, techniques, and cultural significance behind the world&apos;s most fascinating cuisines.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8&quot;>
            {cuisineArticles.map((article) => (
              <article 
                key={article.id}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-lg rounded-2xl overflow-hidden border border-amber-700/50 hover:border-amber-500/70 transition-all duration-500 transform hover:-translate-y-2&quot;
              >
                <div className="h-48 bg-gradient-to-r from-amber-600/20 to-orange-600/20 relative&quot;>
                  <div className="absolute inset-0 flex items-center justify-center&quot;>
                    <div className="w-24 h-24 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 flex items-center justify-center text-3xl&quot;>
                      🌏
                    </div>
                  </div>
                </div>
                <div className="p-6&quot;>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-amber-300 transition-colors&quot;>
                    <Link href={`/blog/food/cuisines/${article.id}`} className="hover:text-amber-300 transition-colors&quot;>
                      {article.title}
                    </Link>
                  </h3>
                  <p className="text-gray-400 mb-4&quot;>
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between&quot;>
                    <span className="text-gray-500 text-sm&quot;>By {article.author}</span>
                    <div className="text-right&quot;>
                      <span className="text-gray-500 text-sm block&quot;>{article.date}</span>
                      <span className="text-gray-500 text-sm&quot;>{article.readTime}</span>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-12 text-center&quot;>
            <Link 
              href="/blog/food&quot;
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-amber-600 to-orange-600 text-white rounded-lg font-semibold hover:from-amber-700 hover:to-orange-700 transition-all duration-300&quot;
            >
              ← Back to Culinary Chronicles
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}