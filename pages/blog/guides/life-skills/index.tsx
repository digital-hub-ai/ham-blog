import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function LifeSkillsIndex() {
  // Life skills guides data
  const lifeSkillsGuides = [
    {
      id: 'mastering-personal-finance-2025',
      title: 'Mastering Personal Finance: A Complete Guide to Financial Freedom',
      excerpt: 'Learn essential financial skills to build wealth, manage debt, and secure your financial future.',
      date: 'Dec 22, 2025',
      author: 'Financial Advisor Alex Wealth',
      readTime: '25 min read',
      tags: ['Finance', 'Money', 'Wealth']
    },
    {
      id: 'time-management-mastery',
      title: 'Time Management Mastery: Productivity Techniques That Actually Work',
      excerpt: 'Discover proven time management strategies that will transform your daily productivity and efficiency.',
      date: 'Dec 21, 2025',
      author: 'Productivity Expert Maya Focus',
      readTime: '22 min read',
      tags: ['Productivity', 'Time', 'Efficiency']
    },
    {
      id: 'effective-communication-skills',
      title: 'Effective Communication: Building Stronger Relationships Through Better Dialogue',
      excerpt: 'Master the art of communication to improve personal and professional relationships.',
      date: 'Dec 20, 2025',
      author: 'Communication Coach Sam Connect',
      readTime: '20 min read',
      tags: ['Communication', 'Relationships', 'Skills']
    },
    {
      id: 'stress-management-techniques',
      title: 'Stress Management: Proven Techniques for Mental Well-being',
      excerpt: 'Learn practical strategies to manage stress and maintain mental health in challenging times.',
      date: 'Dec 19, 2025',
      author: 'Wellness Expert Dr. Jordan Balance',
      readTime: '18 min read',
      tags: ['Wellness', 'Stress', 'Mental Health']
    },
    {
      id: 'home-organization-systems',
      title: 'Home Organization: Creating Systems for a Clutter-Free Life',
      excerpt: 'Build sustainable home organization systems that will keep your space tidy and functional.',
      date: 'Dec 18, 2025',
      author: 'Organization Specialist Taylor Order',
      readTime: '24 min read',
      tags: ['Organization', 'Home', 'Systems']
    },
    {
      id: 'cooking-essentials-beginners',
      title: 'Cooking Essentials: A Beginner\'s Guide to Kitchen Mastery',
      excerpt: 'Master fundamental cooking techniques and build confidence in the kitchen with this comprehensive guide.',
      date: 'Dec 17, 2025',
      author: 'Chef Expert Casey Kitchen',
      readTime: '26 min read',
      tags: ['Cooking', 'Kitchen', 'Basics']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-green-900 to-black text-white">
      <Head>
        <title>Life Skills - Knowledge Compendium</title>
        <meta name="description" content="Master essential life skills with comprehensive guides and expert insights." />
      </Head>

      <div className="container mx-auto px-4 py-12 max-w-6xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-400 to-teal-500 bg-clip-text text-transparent mb-4">
            Life Skills
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Master essential life skills with comprehensive guides and expert insights.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {lifeSkillsGuides.map((guide) => (
            <article 
              key={guide.id}
              className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-lg rounded-2xl overflow-hidden border border-green-700/50 hover:border-green-500/70 transition-all duration-500 transform hover:-translate-y-2"
            >
              <div className="h-48 bg-gradient-to-r from-green-600/20 to-teal-600/20 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-r from-green-500 to-teal-500 flex items-center justify-center text-3xl">
                    🛠️
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
                  <Link href={`/blog/guides/life-skills/${guide.id}`} className="hover:text-green-300 transition-colors">
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

        <div className="mt-12 text-center">
          <Link 
            href="/blog/guides"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-600 to-teal-600 text-white rounded-lg font-semibold hover:from-green-700 hover:to-teal-700 transition-all duration-300"
          >
            ← Back to Knowledge Compendium
          </Link>
        </div>
      </div>
    </div>
  );
}