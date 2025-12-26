import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function MindfulnessIndex() {
  // Mindfulness articles
  const mindfulnessArticles = [
    { 
      id: 'mindful-living', 
      title: 'Mindful Living in the Digital Age: Finding Balance Amid Constant Connectivity', 
      excerpt: 'Practical strategies for maintaining mental clarity and emotional well-being in our hyperconnected world.',
      date: 'Dec 21, 2025',
      author: 'Mindfulness Coach Aria Peace',
      readTime: '12 min read'
    },
    { 
      id: 'meditation-beginners', 
      title: 'Meditation Techniques for Beginners: A Complete Guide', 
      excerpt: 'Learn essential meditation techniques for beginners. Start your mindfulness journey with simple, effective practices for stress relief and mental clarity.',
      date: 'Dec 20, 2025',
      author: 'Mindfulness Coach Aria Peace',
      readTime: '14 min read'
    },
    { 
      id: 'stress-reduction', 
      title: 'Stress Reduction Through Mindfulness: Evidence-Based Techniques', 
      excerpt: 'Discover scientifically-backed mindfulness techniques for stress reduction. Learn practical strategies to manage stress and enhance well-being.',
      date: 'Dec 19, 2025',
      author: 'Mindfulness Coach Aria Peace',
      readTime: '15 min read'
    },
    { 
      id: 'mindful-breathing', 
      title: 'Mindful Breathing Practices: Transform Your Daily Life', 
      excerpt: 'Master mindful breathing techniques to reduce stress, enhance focus, and cultivate inner peace. Simple practices for everyday well-being.',
      date: 'Dec 18, 2025',
      author: 'Mindfulness Coach Aria Peace',
      readTime: '13 min read'
    },
    { 
      id: 'gratitude-mindfulness', 
      title: 'Gratitude and Mindfulness: Cultivating Appreciation for Everyday Life', 
      excerpt: 'Learn how combining gratitude practices with mindfulness enhances well-being, relationships, and life satisfaction. Practical techniques for daily appreciation.',
      date: 'Dec 17, 2025',
      author: 'Mindfulness Coach Aria Peace',
      readTime: '14 min read'
    },
    { 
      id: 'mindful-eating', 
      title: 'Mindful Eating Practices: Transform Your Relationship with Food', 
      excerpt: 'Discover how mindful eating enhances digestion, satisfaction, and overall well-being. Learn practical techniques to develop a healthier relationship with food.',
      date: 'Dec 16, 2025',
      author: 'Mindfulness Coach Aria Peace',
      readTime: '16 min read'
    },
    { 
      id: 'sleep-mindfulness', 
      title: 'Sleep and Mindfulness Connection: Restorative Nights for Better Days', 
      excerpt: 'Discover how mindfulness practices improve sleep quality and create a foundation for better mental and physical health. Learn techniques for peaceful nights.',
      date: 'Dec 15, 2025',
      author: 'Mindfulness Coach Aria Peace',
      readTime: '15 min read'
    },
    { 
      id: 'emotional-regulation', 
      title: 'Mindfulness for Emotional Regulation: Navigate Feelings with Wisdom', 
      excerpt: 'Learn evidence-based mindfulness techniques for emotional regulation. Develop skills to navigate difficult emotions with greater ease and wisdom.',
      date: 'Dec 14, 2025',
      author: 'Mindfulness Coach Aria Peace',
      readTime: '16 min read'
    },
    { 
      id: 'nature-mindfulness', 
      title: 'Nature-Based Mindfulness Practices: Reconnect with the Natural World', 
      excerpt: 'Discover powerful nature-based mindfulness practices that enhance well-being and deepen your connection with the natural world. Simple techniques for outdoor awareness.',
      date: 'Dec 13, 2025',
      author: 'Mindfulness Coach Aria Peace',
      readTime: '15 min read'
    },
    { 
      id: 'productivity-mindfulness', 
      title: 'Mindfulness for Productivity: Work Smarter, Not Harder', 
      excerpt: 'Learn how mindfulness enhances productivity, focus, and work satisfaction. Discover practical techniques to integrate mindfulness into your daily workflow.',
      date: 'Dec 12, 2025',
      author: 'Mindfulness Coach Aria Peace',
      readTime: '14 min read'
    },
    { 
      id: 'compassion-meditation', 
      title: 'Compassion Meditation Practices: Cultivate Loving-Kindness', 
      excerpt: 'Master compassion meditation techniques that enhance empathy, reduce stress, and improve relationships. Learn practices for developing loving-kindness toward yourself and others.',
      date: 'Dec 11, 2025',
      author: 'Mindfulness Coach Aria Peace',
      readTime: '16 min read'
    }
  ];

  return (
    <>
      <Head>
        <title>Mindfulness | Lifestyle Dimension</title>
        <meta name="description" content="Cultivate presence, awareness, and mental well-being through mindful practices." />
      </Head>

      <div className="min-h-screen bg-white text-black">
        <div className="container mx-auto px-4 py-12 max-w-6xl">
          <Link href="/blog/lifestyle" className="inline-flex items-center text-violet-600 hover:text-violet-800 mb-8">
            <span className="mr-2">←</span>
            Back to Lifestyle
          </Link>

          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">
              Mindfulness
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl">
              Cultivate presence, awareness, and mental well-being through mindful practices.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mindfulnessArticles.map((article) => (
              <article 
                key={article.id}
                className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300"
              >
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-black hover:text-violet-700 transition-colors">
                    <Link href={`/blog/lifestyle/mindfulness/${article.id}`}>
                      {article.title}
                    </Link>
                  </h3>
                  <p className="text-gray-700 mb-4">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-500 text-sm">{article.date}</span>
                    <Link 
                      href={`/blog/lifestyle/mindfulness/${article.id}`}
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