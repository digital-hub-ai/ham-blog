import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function WellnessIndex() {
  // Wellness articles
  const wellnessArticles = [
    { 
      id: 'holistic-wellness-guide', 
      title: 'Holistic Wellness: Integrating Mind, Body, and Spirit for Optimal Health', 
      excerpt: 'A comprehensive guide to achieving balance and vitality through integrated approaches to physical, mental, and spiritual well-being.',
      date: 'Dec 15, 2025',
      author: 'Wellness Expert Sam Harmony',
      readTime: '13 min read'
    },
    { 
      id: 'morning-routine-optimization', 
      title: 'Optimizing Your Morning Routine for Peak Performance', 
      excerpt: 'Science-backed strategies to design a morning routine that boosts energy, focus, and overall well-being throughout the day.',
      date: 'Dec 14, 2025',
      author: 'Wellness Coach Dawn Maxwell',
      readTime: '11 min read'
    },
    { 
      id: 'sleep-optimization', 
      title: 'Sleep Optimization: Mastering Your Body\'s Recovery Cycle', 
      excerpt: 'Evidence-based techniques to improve sleep quality and duration for enhanced cognitive function, mood stability, and physical recovery.',
      date: 'Dec 13, 2025',
      author: 'Sleep Specialist Dr. Luna Rest',
      readTime: '13 min read'
    },
    { 
      id: 'stress-management', 
      title: 'Stress Management Mastery: Building Resilience in a Demanding World', 
      excerpt: 'Practical techniques and mindset shifts to transform stress from a hindrance into a catalyst for growth and performance.',
      date: 'Dec 12, 2025',
      author: 'Resilience Coach Calm Strong',
      readTime: '12 min read'
    },
    { 
      id: 'emotional-intelligence', 
      title: 'Emotional Intelligence: The Foundation of Authentic Relationships', 
      excerpt: 'Developing emotional awareness and regulation skills to enhance personal relationships, professional success, and overall well-being.',
      date: 'Dec 11, 2025',
      author: 'EQ Expert Dr. Heart Wise',
      readTime: '14 min read'
    },
    { 
      id: 'nutritional-wellness', 
      title: 'Nutritional Wellness: Fueling Your Body for Optimal Energy', 
      excerpt: 'Evidence-based approaches to nutrition that support sustained energy, mental clarity, and long-term health without restrictive dieting.',
      date: 'Dec 10, 2025',
      author: 'Nutritionist Dr. Vitality Bloom',
      readTime: '13 min read'
    },
    { 
      id: 'physical-fitness', 
      title: 'Physical Fitness Fundamentals: Building Strength and Endurance', 
      excerpt: 'Science-backed approaches to exercise that improve physical health, mental well-being, and longevity without extreme training regimens.',
      date: 'Dec 9, 2025',
      author: 'Fitness Expert Dr. Motion Strong',
      readTime: '12 min read'
    },
    { 
      id: 'social-wellness', 
      title: 'Social Wellness: Cultivating Meaningful Connections', 
      excerpt: 'Building and maintaining healthy relationships that provide support, belonging, and mutual growth throughout life\'s journey.',
      date: 'Dec 8, 2025',
      author: 'Relationship Expert Dr. Connect Well',
      readTime: '13 min read'
    },
    { 
      id: 'spiritual-wellness', 
      title: 'Spiritual Wellness: Connecting with Purpose and Meaning', 
      excerpt: 'Exploring personal beliefs, values, and practices that provide direction, peace, and connection to something greater than oneself.',
      date: 'Dec 7, 2025',
      author: 'Spiritual Guide Dr. Soul Seek',
      readTime: '12 min read'
    },
    { 
      id: 'environmental-wellness', 
      title: 'Environmental Wellness: Living in Harmony with Nature', 
      excerpt: 'Creating healthy living spaces and sustainable practices that support personal well-being while protecting the planet for future generations.',
      date: 'Dec 6, 2025',
      author: 'Eco Wellness Expert Dr. Green Life',
      readTime: '13 min read'
    },
    { 
      id: 'financial-wellness', 
      title: 'Financial Wellness: Achieving Security and Freedom', 
      excerpt: 'Building financial literacy, security, and freedom through mindful money management and strategic planning for present needs and future goals.',
      date: 'Dec 5, 2025',
      author: 'Financial Wellness Expert Dr. Money Wise',
      readTime: '14 min read'
    }
  ];

  return (
    <>
      <Head>
        <title>Wellness | Lifestyle Dimension</title>
        <meta name="description" content="Holistic approaches to physical, mental, and emotional well-being for a balanced life." />
      </Head>

      <div className="min-h-screen bg-white text-black">
        <div className="container mx-auto px-4 py-12 max-w-6xl">
          <Link href="/blog/lifestyle" className="inline-flex items-center text-violet-600 hover:text-violet-800 mb-8">
            <span className="mr-2">←</span>
            Back to Lifestyle
          </Link>

          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">
              Wellness
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl">
              Holistic approaches to physical, mental, and emotional well-being for a balanced life.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {wellnessArticles.map((article) => (
              <article 
                key={article.id}
                className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300"
              >
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-black hover:text-violet-700 transition-colors">
                    <Link href={`/blog/lifestyle/wellness/${article.id}`}>
                      {article.title}
                    </Link>
                  </h3>
                  <p className="text-gray-700 mb-4">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-500 text-sm">{article.date}</span>
                    <Link 
                      href={`/blog/lifestyle/wellness/${article.id}`}
                      className="text-violet-600 hover:text-violet-800 text-sm"
                    >
                      Read Guide →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link 
              href="/blog/lifestyle"
              className="inline-flex items-center px-6 py-3 bg-violet-600 text-white rounded-lg font-semibold hover:bg-violet-700 transition-all duration-300"
            >
              ← Back to Lifestyle Dimension
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}