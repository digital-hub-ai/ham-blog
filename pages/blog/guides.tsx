import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import RealityBridges from '../../components/RealityBridges';

export default function GuidesReality() {
  // Sub-realities within the guides dimension
  const subRealities = [
    { id: 'tech-guides', name: 'Technology Guides', icon: '💻' },
    { id: 'life-skills', name: 'Life Skills', icon: '🛠️' },
    { id: 'career', name: 'Career Development', icon: '📈' },
    { id: 'health', name: 'Health & Fitness', icon: '💪' },
    { id: 'finance', name: 'Personal Finance', icon: '💰' },
    { id: 'creativity', name: 'Creative Skills', icon: '🎨' }
  ];

  // Featured comprehensive guides
  const featuredGuides = [
    {
      id: 'ai-mastery',
      title: 'Mastering AI Tools: A Comprehensive Guide to 2025\'s Essential Technologies',
      excerpt: 'Navigate the complex landscape of artificial intelligence with this step-by-step guide to the most powerful AI tools and platforms.',
      date: 'Dec 21, 2025',
      author: 'AI Educator Dr. Nova Tech',
      readTime: '22 min read',
      tags: ['AI', 'Technology', 'Tutorial']
    },
    {
      id: 'digital-detox',
      title: 'Digital Wellness Mastery: Creating Healthy Boundaries in a Connected World',
      excerpt: 'Reclaim your attention and mental clarity with proven strategies for managing digital overwhelm and cultivating mindfulness.',
      date: 'Dec 19, 2025',
      author: 'Wellness Expert Maya Balance',
      readTime: '18 min read',
      tags: ['Wellness', 'Digital Health', 'Mindfulness']
    },
    {
      id: 'financial-freedom',
      title: 'Path to Financial Freedom: Building Wealth Through Strategic Investment',
      excerpt: 'A comprehensive roadmap to achieving financial independence through diversified investment strategies and smart money management.',
      date: 'Dec 17, 2025',
      author: 'Financial Advisor Alex Wealth',
      readTime: '25 min read',
      tags: ['Finance', 'Investment', 'Wealth Building']
    }
  ];

  // Recent tutorials
  const recentTutorials = [
    { id: '1', title: 'Beginner\'s Guide to Cryptocurrency Trading', date: 'Dec 20, 2025' },
    { id: '2', title: 'Home Workout Routine for Busy Professionals', date: 'Dec 19, 2025' },
    { id: '3', title: 'Learning a New Language in 30 Days', date: 'Dec 18, 2025' },
    { id: '4', title: 'Setting Up a Home Office for Maximum Productivity', date: 'Dec 17, 2025' },
    { id: '5', title: 'Basic Car Maintenance Every Driver Should Know', date: 'Dec 16, 2025' }
  ];

  return (
    <>
      <Head>
        <title>Knowledge Compendium - Guides & Tutorials Realm</title>
        <meta name="description" content="Master new skills with comprehensive guides, step-by-step tutorials, and expert insights." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Reality Bridges Navigation */}
      <RealityBridges currentReality="guides" />

      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-green-900 to-black text-white overflow-hidden">
        {/* Educational background effects */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 rounded-full bg-green-500/10 animate-pulse"></div>
          <div className="absolute bottom-1/3 right-1/4 w-56 h-56 rounded-full bg-teal-500/10 animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-green-500/10 animate-pulse" style={{animationDelay: '2s'}}></div>
        </div>

        <div className="container mx-auto px-4 py-24 max-w-6xl relative z-10">
          {/* Reality Header */}
          <div className="text-center mb-16 pt-4">
            <div className="mb-6">
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-green-400 to-teal-500 bg-clip-text text-transparent mb-4">Knowledge Compendium</h1>
              <div className="w-32 h-1 bg-gradient-to-r from-green-400 to-teal-500 mx-auto rounded-full mb-6"></div>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">Guides & Tutorials Realm - Master new skills with comprehensive guides, step-by-step tutorials, and expert insights.</p>
            </div>
            
            {/* Reality Navigation */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {subRealities.map((sub) => (
                <Link 
                  key={sub.id}
                  href={`/blog/guides/${sub.id}`}
                  className="px-4 py-2 bg-green-900/30 rounded-full text-green-300 border border-green-700/50 hover:bg-green-800/50 hover:border-green-600/50 transition-all duration-300 flex items-center"
                >
                  <span className="mr-2">{sub.icon}</span>
                  {sub.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Comprehensive Guides Grid */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 flex items-center">
              <span className="mr-3">📚</span>
              Masterclass Guides
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {featuredGuides.map((guide) => (
                <article 
                  key={guide.id}
                  className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-lg rounded-2xl overflow-hidden border border-green-700/50 hover:border-green-500/70 transition-all duration-500 transform hover:-translate-y-2"
                >
                  <div className="h-48 bg-gradient-to-r from-green-600/20 to-teal-600/20 relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-24 h-24 rounded-full bg-gradient-to-r from-green-500 to-teal-500 flex items-center justify-center text-3xl">
                        📘
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {guide.tags.map((tag, index) => (
                        <span key={index} className="px-2 py-1 bg-green-900/30 text-green-300 text-xs rounded-full border border-green-700/50">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h3 className="text-xl font-bold mb-3 group-hover:text-green-300 transition-colors">
                      <Link href={`/blog/guides/${guide.id}`} className="hover:text-green-300 transition-colors">
                        {guide.title}
                      </Link>
                    </h3>
                    <p className="text-gray-400 mb-4">
                      {guide.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-500 text-sm">By {guide.author}</span>
                      <div className="text-right">
                        <span className="text-gray-500 text-sm block">{guide.date}</span>
                        <span className="text-gray-500 text-sm">{guide.readTime}</span>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Tutorial-Specific Features */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {/* Skill Tracker */}
            <div className="lg:col-span-2 bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-lg rounded-2xl border border-green-700/50 p-6">
              <h3 className="text-2xl font-bold mb-4 flex items-center">
                <span className="mr-3">🎯</span>
                Personal Learning Path
              </h3>
              <div className="bg-gray-900 rounded-xl p-4">
                <div className="mb-6">
                  <div className="flex justify-between mb-2">
                    <span className="text-green-400">Current Learning Goal</span>
                    <span className="text-gray-400">3/5 completed</span>
                  </div>
                  <div className="w-full bg-gray-800 rounded-full h-3">
                    <div className="bg-gradient-to-r from-green-500 to-teal-500 h-3 rounded-full" style={{width: '60%'}}></div>
                  </div>
                </div>
                
                <div className="space-y-4 mb-6">
                  <div className="flex items-center p-3 bg-green-900/20 rounded-lg border border-green-700/30">
                    <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center mr-3">
                      <span className="text-xs">✓</span>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium">Introduction to AI Concepts</h4>
                      <p className="text-sm text-gray-400">Completed Dec 15, 2025</p>
                    </div>
                  </div>
                  <div className="flex items-center p-3 bg-green-900/20 rounded-lg border border-green-700/30">
                    <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center mr-3">
                      <span className="text-xs">✓</span>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium">Machine Learning Basics</h4>
                      <p className="text-sm text-gray-400">Completed Dec 18, 2025</p>
                    </div>
                  </div>
                  <div className="flex items-center p-3 bg-green-900/20 rounded-lg border border-green-700/30">
                    <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center mr-3">
                      <span className="text-xs">✓</span>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium">Neural Networks Fundamentals</h4>
                      <p className="text-sm text-gray-400">Completed Dec 20, 2025</p>
                    </div>
                  </div>
                  <div className="flex items-center p-3 bg-gray-800 rounded-lg border border-gray-700">
                    <div className="w-6 h-6 rounded-full bg-gray-600 flex items-center justify-center mr-3">
                      <span className="text-xs">4</span>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium">Deep Learning Applications</h4>
                      <p className="text-sm text-gray-400">In Progress</p>
                    </div>
                  </div>
                  <div className="flex items-center p-3 bg-gray-800 rounded-lg border border-gray-700">
                    <div className="w-6 h-6 rounded-full bg-gray-600 flex items-center justify-center mr-3">
                      <span className="text-xs">5</span>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium">AI Project Implementation</h4>
                      <p className="text-sm text-gray-400">Not Started</p>
                    </div>
                  </div>
                </div>
                
                <button className="w-full py-3 bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-700 hover:to-teal-700 rounded-lg transition-colors">
                  Continue Learning
                </button>
              </div>
            </div>

            {/* Learning Stats */}
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-lg rounded-2xl border border-green-700/50 p-6">
              <h3 className="text-2xl font-bold mb-4 flex items-center">
                <span className="mr-3">📊</span>
                Knowledge Metrics
              </h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-300">Learning Completion</span>
                    <span className="text-green-400">78%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-green-500 h-2 rounded-full" style={{width: '78%'}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-300">Skill Acquisition</span>
                    <span className="text-green-400">85%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-teal-500 h-2 rounded-full" style={{width: '85%'}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-300">Knowledge Retention</span>
                    <span className="text-green-400">92%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-emerald-500 h-2 rounded-full" style={{width: '92%'}}></div>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 pt-4 border-t border-gray-700">
                <div className="flex justify-between">
                  <span className="text-gray-400">Tutorial Articles</span>
                  <span className="text-green-400 font-bold">612</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Learning Paths</span>
                  <span className="text-green-400 font-bold">87</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Expert Instructors</span>
                  <span className="text-green-400 font-bold">34</span>
                </div>
              </div>
            </div>
          </div>

          {/* Recent Tutorials */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 flex items-center">
              <span className="mr-3">📜</span>
              Recent Tutorials
            </h2>
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-lg rounded-2xl border border-green-700/50 overflow-hidden">
              <div className="divide-y divide-gray-700/50">
                {recentTutorials.map((tutorial) => (
                  <div key={tutorial.id} className="p-6 hover:bg-gray-800/30 transition-colors">
                    <div className="flex justify-between">
                      <h3 className="text-lg font-medium">
                        <Link href={`/blog/guides/tutorial-${tutorial.id}`} className="hover:text-green-300 transition-colors">
                          {tutorial.title}
                        </Link>
                      </h3>
                      <span className="text-gray-500 text-sm">{tutorial.date}</span>
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
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-600 to-teal-600 text-white rounded-lg font-semibold hover:from-green-700 hover:to-teal-700 transition-all duration-300 transform hover:scale-105"
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