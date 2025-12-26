import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function FoodScienceIndex() {
  // Food science articles
  const scienceArticles = [
    { 
      id: 'maillard', 
      title: 'The Maillard Reaction: Creating Flavor Through Chemistry', 
      excerpt: 'Understanding how browning reactions create complex flavors in cooking.',
      date: 'Dec 22, 2025',
      author: 'Food Scientist Dr. Amy Reaction',
      readTime: '18 min read'
    },
    { 
      id: 'emulsions', 
      title: 'Perfect Emulsions: The Science of Stable Mixtures', 
      excerpt: 'How oil and water can be combined through scientific principles.',
      date: 'Dec 21, 2025',
      author: 'Chemistry Chef Dr. Oliver Stable',
      readTime: '16 min read'
    },
    { 
      id: 'fermentation', 
      title: 'Fermentation Fundamentals: Microbes as Culinary Tools', 
      excerpt: 'Exploring how beneficial bacteria and yeasts transform food.',
      date: 'Dec 20, 2025',
      author: 'Microbiologist Chef Dr. Maya Culture',
      readTime: '20 min read'
    },
    { 
      id: 'texture', 
      title: 'Texture Engineering: From Liquid to Gel', 
      excerpt: 'How hydrocolloids and other ingredients modify food texture.',
      date: 'Dec 19, 2025',
      author: 'Texture Expert Dr. Sarah Mouthfeel',
      readTime: '14 min read'
    },
    { 
      id: 'preservation', 
      title: 'Ancient Preservation, Modern Science', 
      excerpt: 'The scientific principles behind traditional food preservation methods.',
      date: 'Dec 18, 2025',
      author: 'Preservation Scientist Dr. James Longevity',
      readTime: '17 min read'
    },
    { 
      id: 'flavor', 
      title: 'Flavor Chemistry: How Taste and Aroma Interact', 
      excerpt: 'The science behind how our senses perceive flavor in food.',
      date: 'Dec 17, 2025',
      author: 'Flavor Scientist Dr. Zoe Perception',
      readTime: '15 min read'
    }
  ];

  return (
    <>
      <Head>
        <title>Food Science | Culinary Chronicles</title>
        <meta name="description" content="Exploring the scientific principles behind cooking and food." />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-cyan-900 to-black text-white">
        <div className="container mx-auto px-4 py-12 max-w-6xl">
          <Link href="/blog/food" className="inline-flex items-center text-cyan-400 hover:text-cyan-300 mb-8">
            <span className="mr-2">←</span>
            Back to Culinary Chronicles
          </Link>

          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-4">
              Food Science
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl">
              Exploring the scientific principles behind cooking and food. From chemical reactions to physical transformations, understand the fascinating science that makes cooking possible and delicious.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {scienceArticles.map((article) => (
              <article 
                key={article.id}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-lg rounded-2xl overflow-hidden border border-cyan-700/50 hover:border-cyan-500/70 transition-all duration-500 transform hover:-translate-y-2"
              >
                <div className="h-48 bg-gradient-to-r from-cyan-600/20 to-blue-600/20 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-24 h-24 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center text-3xl">
                      🔬
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-cyan-300 transition-colors">
                    <Link href={`/blog/food/food-science/${article.id}`} className="hover:text-cyan-300 transition-colors">
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
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-lg font-semibold hover:from-cyan-700 hover:to-blue-700 transition-all duration-300"
            >
              ← Back to Culinary Chronicles
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}