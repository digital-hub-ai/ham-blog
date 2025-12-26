import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function RelationshipsIndex() {
  // Relationships articles
  const relationshipsArticles = [
    {
      id: 'effective-communication',
      title: 'Effective Communication in Relationships',
      excerpt: 'Master the art of meaningful dialogue to build stronger connections with your loved ones.',
      date: 'Dec 19, 2025'
    },
    {
      id: 'building-trust',
      title: 'Building Trust and Intimacy',
      excerpt: 'Learn proven strategies to develop deeper trust and emotional closeness in your relationships.',
      date: 'Dec 18, 2025'
    },
    {
      id: 'conflict-resolution',
      title: 'Conflict Resolution Skills',
      excerpt: 'Transform disagreements into opportunities for growth and deeper understanding.',
      date: 'Dec 17, 2025'
    },
    {
      id: 'emotional-intelligence',
      title: 'Emotional Intelligence in Relationships',
      excerpt: 'Develop emotional intelligence to enhance relationship satisfaction and intimacy.',
      date: 'Dec 17, 2025'
    },
    {
      id: 'long-distance',
      title: 'Maintaining Long-Distance Relationships',
      excerpt: 'Proven strategies for keeping love alive across miles and time zones.',
      date: 'Dec 16, 2025'
    },
    {
      id: 'friendship-dynamics',
      title: 'Friendship Dynamics and Maintenance',
      excerpt: 'Nurture lifelong bonds through understanding and intentional connection.',
      date: 'Dec 15, 2025'
    },
    {
      id: 'family-challenges',
      title: 'Family Relationship Challenges',
      excerpt: 'Navigate complex family dynamics with communication and healthy boundaries.',
      date: 'Dec 14, 2025'
    },
    {
      id: 'workplace-boundaries',
      title: 'Workplace Relationship Boundaries',
      excerpt: 'Maintain professional connections while protecting your career and wellbeing.',
      date: 'Dec 13, 2025'
    },
    {
      id: 'self-love',
      title: 'Self-Love and Healthy Relationships',
      excerpt: 'Discover how self-compassion forms the foundation for all healthy connections.',
      date: 'Dec 12, 2025'
    },
    {
      id: 'navigating-transitions',
      title: 'Navigating Relationship Transitions',
      excerpt: 'Adapt to life changes and build stronger bonds through transformation.',
      date: 'Dec 11, 2025'
    }
  ];

  return (
    <>
      <Head>
        <title>Relationships | Lifestyle Dimension</title>
        <meta name="description" content="Build stronger connections through communication, empathy, and emotional intelligence." />
      </Head>

      <div className="min-h-screen bg-white text-black">
        <div className="container mx-auto px-4 py-12 max-w-6xl">
          <Link href="/blog/lifestyle" className="inline-flex items-center text-violet-600 hover:text-violet-800 mb-8">
            <span className="mr-2">←</span>
            Back to Lifestyle
          </Link>

          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">
              Relationships
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl">
              Build stronger connections through communication, empathy, and emotional intelligence.
            </p>
          </div>

          {relationshipsArticles.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relationshipsArticles.map((article) => (
                <article 
                  key={article.id}
                  className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300"
                >
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3 text-black hover:text-violet-700 transition-colors">
                      <Link href={`/blog/lifestyle/relationships/${article.id}`}>
                        {article.title}
                      </Link>
                    </h3>
                    <p className="text-gray-700 mb-4">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-500 text-sm">{article.date}</span>
                      <Link 
                        href={`/blog/lifestyle/relationships/${article.id}`}
                        className="text-violet-600 hover:text-violet-800 text-sm"
                      >
                        Read Guide →
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="text-5xl mb-4">❤️</div>
              <h3 className="text-2xl font-bold mb-2">Coming Soon</h3>
              <p className="text-gray-600 max-w-md mx-auto">
                We're working on bringing you the latest insights in building meaningful relationships.
              </p>
            </div>
          )}

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