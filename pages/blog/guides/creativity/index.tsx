import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function CreativityIndex() {
  // Creative skills guides data
  const creativityGuides = [
    {
      id: 'creative-writing-mastery',
      title: 'Creative Writing Mastery: From Idea to Published Work',
      excerpt: 'Develop your writing skills with techniques that will transform your ideas into compelling stories.',
      date: 'Dec 22, 2025',
      author: 'Author Maya Story',
      readTime: '24 min read',
      tags: ['Writing', 'Creativity', 'Storytelling']
    },
    {
      id: 'digital-art-techniques',
      title: 'Digital Art Techniques: Mastering Modern Creative Tools',
      excerpt: 'Learn professional digital art techniques using the latest software and creative approaches.',
      date: 'Dec 21, 2025',
      author: 'Digital Artist Alex Canvas',
      readTime: '22 min read',
      tags: ['Digital Art', 'Techniques', 'Creativity']
    },
    {
      id: 'photography-basics-advanced',
      title: 'Photography: From Basics to Advanced Techniques',
      excerpt: 'Master the technical and artistic aspects of photography to create stunning visual content.',
      date: 'Dec 20, 2025',
      author: 'Photographer Jordan Lens',
      readTime: '26 min read',
      tags: ['Photography', 'Basics', 'Advanced']
    },
    {
      id: 'music-production-fundamentals',
      title: 'Music Production: Essential Skills for Modern Musicians',
      excerpt: 'Learn the fundamentals of music production and develop your unique creative sound.',
      date: 'Dec 19, 2025',
      author: 'Producer Casey Sound',
      readTime: '20 min read',
      tags: ['Music', 'Production', 'Audio']
    },
    {
      id: 'design-thinking-process',
      title: 'Design Thinking: Creative Problem-Solving for Innovation',
      excerpt: 'Apply design thinking principles to solve complex problems with creative solutions.',
      date: 'Dec 18, 2025',
      author: 'Designer Taylor Innovation',
      readTime: '28 min read',
      tags: ['Design', 'Innovation', 'Problem-Solving']
    },
    {
      id: 'crafting-your-creative-identity',
      title: 'Crafting Your Creative Identity: Finding Your Unique Voice',
      excerpt: 'Discover and develop your personal creative style that will set you apart from others.',
      date: 'Dec 17, 2025',
      author: 'Creative Director Sam Vision',
      readTime: '30 min read',
      tags: ['Creativity', 'Identity', 'Style']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-green-900 to-black text-white">
      <Head>
        <title>Creative Skills - Knowledge Compendium</title>
        <meta name="description" content="Develop your creative skills with comprehensive guides and expert insights." />
      </Head>

      <div className="container mx-auto px-4 py-12 max-w-6xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-400 to-teal-500 bg-clip-text text-transparent mb-4">
            Creative Skills
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Develop your creative skills with comprehensive guides and expert insights.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {creativityGuides.map((guide) => (
            <article 
              key={guide.id}
              className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-lg rounded-2xl overflow-hidden border border-green-700/50 hover:border-green-500/70 transition-all duration-500 transform hover:-translate-y-2"
            >
              <div className="h-48 bg-gradient-to-r from-green-600/20 to-teal-600/20 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-r from-green-500 to-teal-500 flex items-center justify-center text-3xl">
                    🎨
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
                  <Link href={`/blog/guides/creativity/${guide.id}`} className="hover:text-green-300 transition-colors">
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