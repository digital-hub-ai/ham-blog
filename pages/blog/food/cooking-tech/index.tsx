import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function CookingTechIndex() {
  // Cooking technology articles
  const techArticles = [
    { 
      id: 'sous-vide', 
      title: 'Sous Vide Mastery: Precision Cooking at Home', 
      excerpt: 'Learn how to achieve restaurant-quality results with sous vide cooking techniques.',
      date: 'Dec 22, 2025',
      author: 'Chef Thomas Precision',
      readTime: '16 min read'
    },
    { 
      id: 'induction', 
      title: 'Induction Cooking: The Science of Magnetic Heat', 
      excerpt: 'Understanding the benefits and techniques of induction cooking technology.',
      date: 'Dec 21, 2025',
      author: 'Tech Chef Alex Heat',
      readTime: '14 min read'
    },
    { 
      id: 'pressure-cooking', 
      title: 'Modern Pressure Cooking: Speed Meets Flavor', 
      excerpt: 'Exploring how modern pressure cookers enhance flavor while reducing cooking time.',
      date: 'Dec 20, 2025',
      author: 'Chef Rapid Flavor',
      readTime: '12 min read'
    },
    { 
      id: 'smart-ovens', 
      title: 'Smart Ovens: Connected Cooking for the Modern Kitchen', 
      excerpt: 'How artificial intelligence is revolutionizing traditional oven functions.',
      date: 'Dec 19, 2025',
      author: 'Tech Gourmet Neo',
      readTime: '18 min read'
    },
    { 
      id: 'fermentation-tech', 
      title: 'Fermentation Technology: Ancient Techniques, Modern Tools', 
      excerpt: 'Using modern equipment to enhance traditional fermentation processes.',
      date: 'Dec 18, 2025',
      author: 'Fermentation Expert Maya Culture',
      readTime: '20 min read'
    },
    { 
      id: 'dehydrators', 
      title: 'Food Dehydrators: Preserving Flavor and Nutrition', 
      excerpt: 'Advanced techniques for using dehydrators to create healthy snacks and ingredients.',
      date: 'Dec 17, 2025',
      author: 'Preservation Specialist Kim Dry',
      readTime: '15 min read'
    }
  ];

  return (
    <>
      <Head>
        <title>Cooking Technology | Culinary Chronicles</title>
        <meta name="description" content="Exploring the intersection of technology and culinary arts." />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-orange-900 to-black text-white">
        <div className="container mx-auto px-4 py-12 max-w-6xl">
          <Link href="/blog/food" className="inline-flex items-center text-orange-400 hover:text-orange-300 mb-8">
            <span className="mr-2">←</span>
            Back to Culinary Chronicles
          </Link>

          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent mb-4">
              Cooking Technology
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl">
              Exploring the intersection of technology and culinary arts. From precision cooking equipment to smart appliances, discover how innovation enhances traditional cooking methods.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {techArticles.map((article) => (
              <article 
                key={article.id}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-lg rounded-2xl overflow-hidden border border-orange-700/50 hover:border-orange-500/70 transition-all duration-500 transform hover:-translate-y-2"
              >
                <div className="h-48 bg-gradient-to-r from-orange-600/20 to-red-600/20 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-24 h-24 rounded-full bg-gradient-to-r from-orange-500 to-red-500 flex items-center justify-center text-3xl">
                      👨‍🍳
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-orange-300 transition-colors">
                    <Link href={`/blog/food/cooking-tech/${article.id}`} className="hover:text-orange-300 transition-colors">
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
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-lg font-semibold hover:from-orange-700 hover:to-red-700 transition-all duration-300"
            >
              ← Back to Culinary Chronicles
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}