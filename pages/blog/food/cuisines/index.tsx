import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function WorldCuisinesIndex() {
  // World cuisine articles
  const cuisineArticles = [
    { 
      id: 'ethiopian', 
      title: 'The Coffee Ceremony: Ethiopia\'s Cultural Heart', 
      excerpt: 'Exploring the ancient traditions of Ethiopia\'s coffee culture and its role in community.',
      date: 'Dec 22, 2025',
      author: 'Cultural Explorer Alem Debena',
      readTime: '16 min read'
    },
    { 
      id: 'peruvian', 
      title: 'Ceviche Evolution: From Ancient Tradition to Modern Innovation', 
      excerpt: 'How Peru\'s national dish has evolved while maintaining its authentic preparation.',
      date: 'Dec 21, 2025',
      author: 'Ceviche Specialist Carlos Lima',
      readTime: '14 min read'
    },
    { 
      id: 'korean', 
      title: 'Fermentation Mastery: Korea\'s Kimchi Culture', 
      excerpt: 'Understanding the science and tradition behind Korea\'s most iconic fermented food.',
      date: 'Dec 20, 2025',
      author: 'Fermentation Expert Ji-Hyun Park',
      readTime: '18 min read'
    },
    { 
      id: 'moroccan', 
      title: 'Tagine Traditions: Slow-Cooked Stories of Morocco', 
      excerpt: 'The art and technique of cooking in Morocco\'s iconic clay pot.',
      date: 'Dec 19, 2025',
      author: 'Moroccan Chef Youssef Tagine',
      readTime: '15 min read'
    },
    { 
      id: 'vietnamese', 
      title: 'Pho Philosophy: Vietnam\'s Noodle Soup Culture', 
      excerpt: 'The cultural significance and regional variations of Vietnam\'s most beloved dish.',
      date: 'Dec 18, 2025',
      author: 'Pho Master Linh Broth',
      readTime: '17 min read'
    },
    { 
      id: 'georgian', 
      title: 'Supra: Georgia\'s Sacred Tradition of Hospitality', 
      excerpt: 'Exploring the ancient Georgian feast tradition and its cultural importance.',
      date: 'Dec 17, 2025',
      author: 'Georgian Host Giorgi Tamada',
      readTime: '20 min read'
    }
  ];

  return (
    <>
      <Head>
        <title>World Cuisines | Culinary Chronicles</title>
        <meta name="description" content="Explore diverse culinary traditions from around the globe." />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-amber-900 to-black text-white">
        <div className="container mx-auto px-4 py-12 max-w-6xl">
          <Link href="/blog/food" className="inline-flex items-center text-amber-400 hover:text-amber-300 mb-8">
            <span className="mr-2">←</span>
            Back to Culinary Chronicles
          </Link>

          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent mb-4">
              World Cuisines
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl">
              Explore diverse culinary traditions from around the globe. From street food to ceremonial dishes, discover the stories, techniques, and cultural significance behind the world's most fascinating cuisines.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cuisineArticles.map((article) => (
              <article 
                key={article.id}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-lg rounded-2xl overflow-hidden border border-amber-700/50 hover:border-amber-500/70 transition-all duration-500 transform hover:-translate-y-2"
              >
                <div className="h-48 bg-gradient-to-r from-amber-600/20 to-orange-600/20 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-24 h-24 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 flex items-center justify-center text-3xl">
                      🌏
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-amber-300 transition-colors">
                    <Link href={`/blog/food/cuisines/${article.id}`} className="hover:text-amber-300 transition-colors">
                      {article.title}
                    </Link>
                  </h3>
                  <p className="text-gray-400 mb-4">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-500 text-sm">By {article.author}</span>
                    <div className="text-right">
                      <span className="text-gray-500 text-sm block">{article.date}</span>
                      <span className="text-gray-500 text-sm">{article.readTime}</span>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link 
              href="/blog/food"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-amber-600 to-orange-600 text-white rounded-lg font-semibold hover:from-amber-700 hover:to-orange-700 transition-all duration-300"
            >
              ← Back to Culinary Chronicles
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}