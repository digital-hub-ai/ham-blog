import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function MusicIndex() {
  // Music & Audio projects
  const musicProjects = [
    { 
      id: 'vinyl-restoration', 
      title: 'Vinyl Record Restoration: Bringing Old Music Back to Life', 
      excerpt: 'Professional techniques for cleaning, repairing, and preserving vintage vinyl collections.',
      date: 'Dec 21, 2025',
      author: 'Audiophile Sam Groove',
      readTime: '16 min read'
    },
    { 
      id: 'home-studio-setup', 
      title: 'Home Studio Setup: Creating Your Personal Music Creation Space', 
      excerpt: 'Complete guide to setting up a professional-quality home recording studio on a budget.',
      date: 'Dec 20, 2025',
      author: 'Producer Alex Sound',
      readTime: '18 min read'
    },
    { 
      id: 'synthesizer-programming', 
      title: 'Synthesizer Programming: Crafting Unique Sounds from Scratch', 
      excerpt: 'Learn the fundamentals of sound synthesis and create your own distinctive electronic music textures.',
      date: 'Dec 19, 2025',
      author: 'Sound Designer Taylor Wave',
      readTime: '17 min read'
    },
    { 
      id: 'guitar-building', 
      title: 'Guitar Building: Craft Your Own Custom Instrument', 
      excerpt: 'Step-by-step guide to building a custom electric or acoustic guitar from scratch.',
      date: 'Dec 18, 2025',
      author: 'Luthier Casey String',
      readTime: '20 min read'
    },
    { 
      id: 'audio-repair', 
      title: 'Audio Equipment Repair: Fixing Vintage and Modern Gear', 
      excerpt: 'Essential techniques for diagnosing and repairing common issues in audio equipment.',
      date: 'Dec 17, 2025',
      author: 'Technician Riley Amplify',
      readTime: '19 min read'
    },
    { 
      id: 'dj-mixing', 
      title: 'DJ Mixing: From Beginner to Club-Ready Performer', 
      excerpt: 'Master the art of beatmatching, mixing, and reading a crowd for memorable performances.',
      date: 'Dec 16, 2025',
      author: 'DJ Morgan Beat',
      readTime: '15 min read'
    }
  ];

  return (
    <>
      <Head>
        <title>Music & Audio | Hobby Dimension</title>
        <meta name="description" content="Explore music production, audio engineering, and instrument crafting projects." />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-black text-white">
        <div className="container mx-auto px-4 py-12 max-w-6xl">
          <Link href="/blog/hobby" className="inline-flex items-center text-blue-400 hover:text-blue-300 mb-8">
            <span className="mr-2">←</span>
            Back to Hobby Dimension
          </Link>

          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent mb-4">
              Music & Audio
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl">
              Explore music production, audio engineering, and instrument crafting projects. From vinyl restoration to home studio setup, discover the art of sound creation and preservation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {musicProjects.map((project) => (
              <article 
                key={project.id}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-lg rounded-2xl overflow-hidden border border-blue-700/50 hover:border-blue-500/70 transition-all duration-500 transform hover:-translate-y-2"
              >
                <div className="h-48 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-24 h-24 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center text-3xl">
                      🎵
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-blue-300 transition-colors">
                    <Link href={`/blog/hobby/music/${project.id}`} className="hover:text-blue-300 transition-colors">
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
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300"
            >
              ← Back to Hobby Dimension
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}