import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function GardeningIndex() {
  // Gardening projects
  const gardeningProjects = [
    { 
      id: 'urban-garden', 
      title: 'Urban Garden Oasis: Maximizing Small Spaces for Maximum Yield', 
      excerpt: 'Transform your apartment balcony into a productive garden with vertical growing techniques.',
      date: 'Dec 21, 2025',
      author: 'Green Thumb Mia',
      readTime: '16 min read'
    },
    { 
      id: 'companion-planting', 
      title: 'Companion Planting: Creating Synergistic Garden Ecosystems', 
      excerpt: 'Learn which plants grow better together and how to maximize your garden productivity naturally.',
      date: 'Dec 20, 2025',
      author: 'Botanist Sam Grow',
      readTime: '18 min read'
    },
    { 
      id: 'hydroponics-system', 
      title: 'Hydroponics System: Soil-Free Growing for Year-Round Harvest', 
      excerpt: 'Build your own hydroponic system for efficient, space-saving gardening indoors.',
      date: 'Dec 19, 2025',
      author: 'Hydro Expert Taylor Flow',
      readTime: '17 min read'
    },
    { 
      id: 'seed-saving', 
      title: 'Seed Saving: Preserving Heritage Varieties and Reducing Costs', 
      excerpt: 'Master the art of saving seeds from your garden to ensure future harvests.',
      date: 'Dec 18, 2025',
      author: 'Seed Keeper Casey Harvest',
      readTime: '15 min read'
    },
    { 
      id: 'permaculture-principles', 
      title: 'Permaculture Principles: Creating Sustainable Garden Systems', 
      excerpt: 'Apply permaculture design to create self-sustaining garden ecosystems.',
      date: 'Dec 17, 2025',
      author: 'Eco Designer Riley Earth',
      readTime: '19 min read'
    },
    { 
      id: 'indoor-herb-garden', 
      title: 'Indoor Herb Garden: Fresh Flavors Year-Round', 
      excerpt: 'Create a thriving indoor herb garden for fresh culinary ingredients anytime.',
      date: 'Dec 16, 2025',
      author: 'Herb Specialist Morgan Leaf',
      readTime: '14 min read'
    }
  ];

  return (
    <>
      <Head>
        <title>Gardening | Hobby Dimension</title>
        <meta name="description" content="Explore gardening projects and techniques for growing your own food and flowers." />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-green-900 to-black text-white">
        <div className="container mx-auto px-4 py-12 max-w-6xl">
          <Link href="/blog/hobby" className="inline-flex items-center text-green-400 hover:text-green-300 mb-8">
            <span className="mr-2">←</span>
            Back to Hobby Dimension
          </Link>

          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent mb-4">
              Gardening
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl">
              Explore gardening projects and techniques for growing your own food and flowers. From urban container gardens to permaculture principles, discover sustainable growing practices.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {gardeningProjects.map((project) => (
              <article 
                key={project.id}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-lg rounded-2xl overflow-hidden border border-green-700/50 hover:border-green-500/70 transition-all duration-500 transform hover:-translate-y-2"
              >
                <div className="h-48 bg-gradient-to-r from-green-600/20 to-emerald-600/20 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-24 h-24 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center text-3xl">
                      🌱
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-green-300 transition-colors">
                    <Link href={`/blog/hobby/gardening/${project.id}`} className="hover:text-green-300 transition-colors">
                      {project.title}
                    </Link>
                  </h3>
                  <p className="text-gray-400 mb-4">
                    {project.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-500 text-sm">By {project.author}</span>
                    <div className="text-right">
                      <span className="text-gray-500 text-sm block">{project.date}</span>
                      <span className="text-gray-500 text-sm">{project.readTime}</span>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link 
              href="/blog/hobby"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-lg font-semibold hover:from-green-700 hover:to-emerald-700 transition-all duration-300"
            >
              ← Back to Hobby Dimension
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}