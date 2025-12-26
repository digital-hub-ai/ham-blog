import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function HealthIndex() {
  // Health & fitness guides data
  const healthGuides = [
    {
      id: 'fitness-fundamentals-beginners',
      title: 'Fitness Fundamentals: A Complete Guide for Beginners',
      excerpt: 'Start your fitness journey with essential exercises, routines, and mindset strategies.',
      date: 'Dec 22, 2025',
      author: 'Fitness Coach Alex Strong',
      readTime: '24 min read',
      tags: ['Fitness', 'Beginners', 'Health']
    },
    {
      id: 'nutrition-science-basics',
      title: 'Nutrition Science: Understanding the Building Blocks of Health',
      excerpt: 'Learn the scientific principles behind healthy eating and optimal nutrition.',
      date: 'Dec 21, 2025',
      author: 'Nutritionist Dr. Maya Fuel',
      readTime: '22 min read',
      tags: ['Nutrition', 'Science', 'Health']
    },
    {
      id: 'mental-health-matters',
      title: 'Mental Health Matters: Building Emotional Resilience',
      excerpt: 'Develop strategies for maintaining mental wellness and emotional balance.',
      date: 'Dec 20, 2025',
      author: 'Psychologist Dr. Jordan Mind',
      readTime: '20 min read',
      tags: ['Mental Health', 'Wellness', 'Resilience']
    },
    {
      id: 'sleep-optimization-guide',
      title: 'Sleep Optimization: The Science of Restorative Rest',
      excerpt: 'Master the art and science of getting quality sleep for better health and performance.',
      date: 'Dec 19, 2025',
      author: 'Sleep Expert Taylor Rest',
      readTime: '18 min read',
      tags: ['Sleep', 'Optimization', 'Health']
    },
    {
      id: 'home-workout-routines',
      title: 'Home Workout Routines: Effective Exercise Without Equipment',
      excerpt: 'Achieve your fitness goals with bodyweight exercises and creative home workout strategies.',
      date: 'Dec 18, 2025',
      author: 'Personal Trainer Casey Move',
      readTime: '26 min read',
      tags: ['Workout', 'Home', 'Exercise']
    },
    {
      id: 'mindfulness-meditation-guide',
      title: 'Mindfulness Meditation: A Beginner\'s Path to Inner Peace',
      excerpt: 'Learn meditation techniques that will reduce stress and improve mental clarity.',
      date: 'Dec 17, 2025',
      author: 'Meditation Teacher Sam Zen',
      readTime: '28 min read',
      tags: ['Mindfulness', 'Meditation', 'Wellness']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-green-900 to-black text-white">
      <Head>
        <title>Health & Fitness - Knowledge Compendium</title>
        <meta name="description" content="Improve your health and fitness with comprehensive guides and expert insights." />
      </Head>

      <div className="container mx-auto px-4 py-12 max-w-6xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-400 to-teal-500 bg-clip-text text-transparent mb-4">
            Health & Fitness
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Improve your health and fitness with comprehensive guides and expert insights.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {healthGuides.map((guide) => (
            <article 
              key={guide.id}
              className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-lg rounded-2xl overflow-hidden border border-green-700/50 hover:border-green-500/70 transition-all duration-500 transform hover:-translate-y-2"
            >
              <div className="h-48 bg-gradient-to-r from-green-600/20 to-teal-600/20 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-r from-green-500 to-teal-500 flex items-center justify-center text-3xl">
                    💪
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
                  <Link href={`/blog/guides/health/${guide.id}`} className="hover:text-green-300 transition-colors">
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