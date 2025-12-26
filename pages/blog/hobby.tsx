import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import RealityBridges from '../../components/RealityBridges';

export default function HobbyReality() {
  // Sub-realities within the hobby dimension
  const subRealities = [
    { id: 'diy', name: 'DIY Projects', icon: '🔨' },
    { id: 'crafts', name: 'Arts & Crafts', icon: '✂️' },
    { id: 'music', name: 'Music & Audio', icon: '🎵' },
    { id: 'gardening', name: 'Gardening', icon: '🌱' },
    { id: 'photography', name: 'Photography', icon: '📸' },
    { id: 'collecting', name: 'Collecting', icon: '弆' }
  ];

  // Featured hobby projects
  const featuredProjects = [
    {
      id: 'smart-home-diy',
      title: 'Smart Home DIY: Build Your Own Automated Lighting System',
      excerpt: 'Step-by-step guide to creating a custom smart lighting solution using Arduino and IoT sensors.',
      date: 'Dec 21, 2025',
      author: 'Maker Alex Workshop',
      readTime: '16 min read',
      tags: ['DIY', 'Electronics', 'IoT']
    },
    {
      id: 'urban-garden',
      title: 'Urban Garden Oasis: Maximizing Small Spaces for Maximum Yield',
      excerpt: 'Transform your apartment balcony into a productive garden with vertical growing techniques.',
      date: 'Dec 19, 2025',
      author: 'Green Thumb Mia',
      readTime: '13 min read',
      tags: ['Gardening', 'Urban Living', 'Sustainability']
    },
    {
      id: 'vinyl-restoration',
      title: 'Vinyl Record Restoration: Bringing Old Music Back to Life',
      excerpt: 'Professional techniques for cleaning, repairing, and preserving vintage vinyl collections.',
      date: 'Dec 17, 2025',
      author: 'Audiophile Sam Groove',
      readTime: '11 min read',
      tags: ['Music', 'Restoration', 'Collecting']
    }
  ];

  // Recent hobby activities
  const recentActivities = [
    { id: '1', title: 'Beginner\'s Guide to Watercolor Painting', date: 'Dec 20, 2025' },
    { id: '2', title: '3D Printing: From Design to Finished Product', date: 'Dec 19, 2025' },
    { id: '3', title: 'Indoor Herb Garden Setup', date: 'Dec 18, 2025' },
    { id: '4', title: 'Building a Custom Mechanical Keyboard', date: 'Dec 17, 2025' },
    { id: '5', title: 'Macro Photography Tips for Nature Shots', date: 'Dec 16, 2025' }
  ];

  return (
    <>
      <Head>
        <title>Passion Projects - Hobby Dimension</title>
        <meta name="description" content="Explore creative pursuits, DIY projects, and personal passions that enrich life." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Reality Bridges Navigation */}
      <RealityBridges currentReality="hobby" />

      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-orange-900 to-black text-white overflow-hidden">
        {/* Creative workshop background */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-48 h-48 rounded-full bg-orange-500/10 animate-pulse"></div>
          <div className="absolute bottom-1/3 right-1/4 w-32 h-32 rounded-full bg-red-500/10 animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-orange-500/10 animate-pulse" style={{animationDelay: '2s'}}></div>
        </div>

        <div className="container mx-auto px-4 py-24 max-w-6xl relative z-10">
          {/* Reality Header */}
          <div className="text-center mb-16 pt-4">
            <div className="mb-6">
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent mb-4">Passion Projects</h1>
              <div className="w-32 h-1 bg-gradient-to-r from-orange-400 to-red-500 mx-auto rounded-full mb-6"></div>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">The Hobby Dimension - Explore creative pursuits, DIY projects, and personal passions that enrich life.</p>
            </div>
            
            {/* Reality Navigation */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {subRealities.map((sub) => (
                <Link 
                  key={sub.id}
                  href={`/blog/hobby/${sub.id}`}
                  className="px-4 py-2 bg-orange-900/30 rounded-full text-orange-300 border border-orange-700/50 hover:bg-orange-800/50 hover:border-orange-600/50 transition-all duration-300 flex items-center"
                >
                  <span className="mr-2">{sub.icon}</span>
                  {sub.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Hobby Projects Grid */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 flex items-center">
              <span className="mr-3">🔨</span>
              Featured Creations
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {featuredProjects.map((project) => (
                <article 
                  key={project.id}
                  className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-lg rounded-2xl overflow-hidden border border-orange-700/50 hover:border-orange-500/70 transition-all duration-500 transform hover:-translate-y-2"
                >
                  <div className="h-48 bg-gradient-to-r from-orange-600/20 to-red-600/20 relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-24 h-24 rounded-full bg-gradient-to-r from-orange-500 to-red-500 flex items-center justify-center text-3xl">
                        🎨
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, index) => (
                        <span key={index} className="px-2 py-1 bg-orange-900/30 text-orange-300 text-xs rounded-full border border-orange-700/50">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h3 className="text-xl font-bold mb-3 group-hover:text-orange-300 transition-colors">
                      <Link href={`/blog/hobby/${project.id}`} className="hover:text-orange-300 transition-colors">
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
          </div>

          {/* Hobby-Specific Features */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {/* Project Planner */}
            <div className="lg:col-span-2 bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-lg rounded-2xl border border-orange-700/50 p-6">
              <h3 className="text-2xl font-bold mb-4 flex items-center">
                <span className="mr-3">📋</span>
                Project Planner
              </h3>
              <div className="bg-gray-900 rounded-xl p-4">
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-gray-400 mb-2">Project Name</label>
                    <input 
                      type="text" 
                      placeholder="My Awesome Project" 
                      className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-400 mb-2">Category</label>
                    <select className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white">
                      <option>Select Category</option>
                      <option>DIY Electronics</option>
                      <option>Woodworking</option>
                      <option>Gardening</option>
                      <option>Art & Crafts</option>
                    </select>
                  </div>
                </div>
                <div className="mb-4">
                  <label className="block text-gray-400 mb-2">Materials Needed</label>
                  <textarea 
                    placeholder="List all materials required..." 
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white h-24"
                  ></textarea>
                </div>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-gray-400 mb-2">Estimated Time</label>
                    <input 
                      type="text" 
                      placeholder="10 hours" 
                      className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-400 mb-2">Difficulty</label>
                    <select className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white">
                      <option>Beginner</option>
                      <option>Intermediate</option>
                      <option>Advanced</option>
                    </select>
                  </div>
                </div>
                <button className="w-full py-3 bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 rounded-lg transition-colors">
                  Save Project Plan
                </button>
              </div>
            </div>

            {/* Hobby Stats */}
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-lg rounded-2xl border border-orange-700/50 p-6">
              <h3 className="text-2xl font-bold mb-4 flex items-center">
                <span className="mr-3">📊</span>
                Passion Metrics
              </h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-300">Projects Completed</span>
                    <span className="text-orange-400">87%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-orange-500 h-2 rounded-full" style={{width: '87%'}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-300">Skill Development</span>
                    <span className="text-orange-400">92%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-red-500 h-2 rounded-full" style={{width: '92%'}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-300">Creativity Boost</span>
                    <span className="text-orange-400">89%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-yellow-500 h-2 rounded-full" style={{width: '89%'}}></div>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 pt-4 border-t border-gray-700">
                <div className="flex justify-between">
                  <span className="text-gray-400">Hobby Articles</span>
                  <span className="text-orange-400 font-bold">327</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Creative Makers</span>
                  <span className="text-orange-400 font-bold">19.4k</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Project Ideas</span>
                  <span className="text-orange-400 font-bold">456</span>
                </div>
              </div>
            </div>
          </div>

          {/* Recent Activities */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 flex items-center">
              <span className="mr-3">🔥</span>
              Recent Activities
            </h2>
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-lg rounded-2xl border border-orange-700/50 overflow-hidden">
              <div className="divide-y divide-gray-700/50">
                {recentActivities.map((activity) => (
                  <div key={activity.id} className="p-6 hover:bg-gray-800/30 transition-colors">
                    <div className="flex justify-between">
                      <h3 className="text-lg font-medium">
                        <Link href={`/blog/hobby/activity-${activity.id}`} className="hover:text-orange-300 transition-colors">
                          {activity.title}
                        </Link>
                      </h3>
                      <span className="text-gray-500 text-sm">{activity.date}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Return to Library */}
          <div className="text-center">
            <Link 
              href="/blog"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-lg font-semibold hover:from-orange-700 hover:to-red-700 transition-all duration-300 transform hover:scale-105"
            >
              <span className="mr-2">🌌</span>
              Return to Library of Realities
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}