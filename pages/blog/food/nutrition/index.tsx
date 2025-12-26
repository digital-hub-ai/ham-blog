import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function NutritionIndex() {
  // Nutrition articles
  const nutritionArticles = [
    { 
      id: 'macro-tracking', 
      title: 'Understanding Macronutrient Tracking', 
      excerpt: 'A comprehensive guide to tracking proteins, carbs, and fats for optimal health.',
      date: 'Dec 22, 2025',
      author: 'Nutritionist Sarah Balance',
      readTime: '18 min read'
    },
    { 
      id: 'superfoods', 
      title: 'Debunking Superfood Myths and Facts', 
      excerpt: 'Separating scientific evidence from marketing claims about superfoods.',
      date: 'Dec 21, 2025',
      author: 'Dietitian Dr. James Truth',
      readTime: '15 min read'
    },
    { 
      id: 'plant-proteins', 
      title: 'Complete Plant Protein Combinations', 
      excerpt: 'How to get all essential amino acids from plant-based sources.',
      date: 'Dec 20, 2025',
      author: 'Plant Expert Maya Green',
      readTime: '16 min read'
    },
    { 
      id: 'gut-health', 
      title: 'The Microbiome Diet: Nourishing Your Gut', 
      excerpt: 'Foods and eating patterns that support digestive health and immunity.',
      date: 'Dec 19, 2025',
      author: 'Gut Specialist Dr. Emma Flora',
      readTime: '20 min read'
    },
    { 
      id: 'antioxidants', 
      title: 'Antioxidant Power: Fighting Oxidative Stress', 
      excerpt: 'Understanding how antioxidants protect your body and which foods are richest in them.',
      date: 'Dec 18, 2025',
      author: 'Health Researcher Dr. Alex Defense',
      readTime: '14 min read'
    },
    { 
      id: 'hydration', 
      title: 'Beyond Water: Optimal Hydration Strategies', 
      excerpt: 'How to maintain proper hydration through food, beverages, and timing.',
      date: 'Dec 17, 2025',
      author: 'Hydration Expert Dr. Chris Fluid',
      readTime: '12 min read'
    }
  ];

  return (
    <>
      <Head>
        <title>Nutrition | Culinary Chronicles</title>
        <meta name="description" content="Evidence-based nutrition information and healthy eating strategies." />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-green-900 to-black text-white">
        <div className="container mx-auto px-4 py-12 max-w-6xl">
          <Link href="/blog/food" className="inline-flex items-center text-green-400 hover:text-green-300 mb-8">
            <span className="mr-2">←</span>
            Back to Culinary Chronicles
          </Link>

          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-400 to-teal-500 bg-clip-text text-transparent mb-4">
              Nutrition
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl">
              Evidence-based nutrition information and healthy eating strategies. Explore how food fuels your body, mind, and overall well-being with expert insights and practical advice.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {nutritionArticles.map((article) => (
              <article 
                key={article.id}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-lg rounded-2xl overflow-hidden border border-green-700/50 hover:border-green-500/70 transition-all duration-500 transform hover:-translate-y-2"
              >
                <div className="h-48 bg-gradient-to-r from-green-600/20 to-teal-600/20 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-24 h-24 rounded-full bg-gradient-to-r from-green-500 to-teal-500 flex items-center justify-center text-3xl">
                      🥗
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-green-300 transition-colors">
                    <Link href={`/blog/food/nutrition/${article.id}`} className="hover:text-green-300 transition-colors">
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
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-600 to-teal-600 text-white rounded-lg font-semibold hover:from-green-700 hover:to-teal-700 transition-all duration-300"
            >
              ← Back to Culinary Chronicles
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}