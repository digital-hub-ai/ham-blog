import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function BusinessIndex() {
  // Business categories
  const categories = [
    { 
      id: 'strategy', 
      name: 'Business Strategy', 
      icon: '🧭', 
      description: 'Navigate competitive landscapes and plan for future success',
      articles: [
        { id: 'ai-disruption-index-2025', title: 'AI Disruption Index 2025: Which Industries Will Transform Next?' }
      ]
    },
    { 
      id: 'marketing', 
      name: 'Digital Marketing', 
      icon: '📢', 
      description: 'Connect with audiences through cutting-edge marketing approaches',
      articles: [
        { id: 'metaverse-commerce-building-economy', title: 'Metaverse Commerce: Building the Economy of Virtual Worlds' }
      ]
    },
    { 
      id: 'finance', 
      name: 'Finance & Investment', 
      icon: '💰', 
      description: 'Manage resources and capitalize on emerging opportunities',
      articles: [
        { id: 'decentralized-finance-future', title: 'Decentralized Finance: The Future of Banking and Investments' }
      ]
    },
    { 
      id: 'leadership', 
      name: 'Leadership', 
      icon: '👑', 
      description: 'Inspire teams and drive organizational excellence',
      articles: [
        { id: 'distributed-leadership-remote-teams', title: 'Distributed Leadership: Managing Remote and Hybrid Teams' }
      ]
    },
    { 
      id: 'innovation', 
      name: 'Innovation', 
      icon: '💡', 
      description: 'Foster creativity and develop breakthrough solutions',
      articles: [
        { id: 'open-innovation-networks', title: 'Open Innovation Networks: Collaborative R&D in the Digital Age' }
      ]
    },
    { 
      id: 'entrepreneurship', 
      name: 'Entrepreneurship', 
      icon: '🚀', 
      description: 'Launch ventures and scale impactful businesses',
      articles: [
        { id: 'startup-scaling-playbook', title: 'Startup Scaling Playbook: From Seed to Series C' }
      ]
    }
  ];

  return (
    <>
      <Head>
        <title>Business Realm | Corporate Consciousness</title>
        <meta name="description" content="Navigate the economic galaxies where strategy meets innovation and markets evolve." />
      </Head>

      <div className="min-h-screen bg-white text-black">
        <div className="container mx-auto px-4 py-12 max-w-6xl">
          <div className="mb-8">
            <Link href="/blog" className="inline-flex items-center text-amber-600 hover:text-amber-800 mb-4">
              <span className="mr-2">←</span>
              Back to Library of Realities
            </Link>
          </div>

          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">Corporate Consciousness</h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Navigate the economic galaxies where strategy meets innovation and markets evolve.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {categories.map((category) => (
              <div key={category.id} className="bg-gray-50 rounded-2xl border border-gray-200 p-6">
                <div className="flex items-center mb-4">
                  <span className="text-2xl mr-3">{category.icon}</span>
                  <h2 className="text-xl font-bold">{category.name}</h2>
                </div>
                <p className="text-gray-600 mb-4">{category.description}</p>
                
                <div className="space-y-3">
                  {category.articles.map((article) => (
                    <div key={article.id} className="border-l-4 border-amber-500 pl-3">
                      <Link 
                        href={`/blog/business/${category.id}/${article.id}`}
                        className="text-amber-700 hover:text-amber-900 font-medium"
                      >
                        {article.title}
                      </Link>
                    </div>
                  ))}
                </div>
                
                <div className="mt-4">
                  <Link 
                    href={`/blog/business/${category.id}`}
                    className="inline-flex items-center text-amber-600 hover:text-amber-800 text-sm font-medium"
                  >
                    View all articles <span className="ml-1">→</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link 
              href="/blog"
              className="inline-flex items-center px-6 py-3 bg-amber-600 text-white rounded-lg font-semibold hover:bg-amber-700 transition-all duration-300"
            >
              ← Return to Library
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}