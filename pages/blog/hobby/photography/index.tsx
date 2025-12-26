import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function PhotographyIndex() {
  // Photography projects
  const photographyProjects = [
    { 
      id: 'macro-nature', 
      title: 'Macro Photography Tips for Nature Shots', 
      excerpt: 'Discover techniques for capturing the intricate details of nature in stunning close-up images.',
      date: 'Dec 21, 2025',
      author: 'Photographer Jordan Lens',
      readTime: '16 min read'
    },
    { 
      id: 'portrait-lighting', 
      title: 'Portrait Lighting: Creating Mood and Emotion', 
      excerpt: 'Master the art of lighting for portrait photography to create compelling and evocative images.',
      date: 'Dec 20, 2025',
      author: 'Artist Taylor Frame',
      readTime: '18 min read'
    },
    { 
      id: 'film-photography', 
      title: 'Film Photography: Rediscovering the Art of Analog Capture', 
      excerpt: 'Explore the unique aesthetics and techniques of film photography in the digital age.',
      date: 'Dec 19, 2025',
      author: 'Analog Specialist Casey Film',
      readTime: '17 min read'
    },
    { 
      id: 'drone-photography', 
      title: 'Drone Photography: Capturing Aerial Perspectives', 
      excerpt: 'Learn safe and effective techniques for capturing stunning aerial photographs and videos.',
      date: 'Dec 18, 2025',
      author: 'Aerial Expert Riley Sky',
      readTime: '15 min read'
    },
    { 
      id: 'astrophotography', 
      title: 'Astrophotography: Capturing the Night Sky', 
      excerpt: 'Techniques for photographing stars, planets, and celestial phenomena with stunning clarity.',
      date: 'Dec 17, 2025',
      author: 'Sky Watcher Morgan Star',
      readTime: '19 min read'
    },
    { 
      id: 'street-photography', 
      title: 'Street Photography: Capturing Urban Life', 
      excerpt: 'Tips and techniques for documenting candid moments in urban environments.',
      date: 'Dec 16, 2025',
      author: 'Documentary Shooter Alex Street',
      readTime: '14 min read'
    }
  ];

  return (
    <>
      <Head>
        <title>Photography | Hobby Dimension</title>
        <meta name="description" content="Explore photography techniques and projects for capturing the world around you." />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-violet-900 to-black text-white">
        <div className="container mx-auto px-4 py-12 max-w-6xl">
          <Link href="/blog/hobby" className="inline-flex items-center text-violet-400 hover:text-violet-300 mb-8">
            <span className="mr-2">←</span>
            Back to Hobby Dimension
          </Link>

          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-violet-400 to-purple-500 bg-clip-text text-transparent mb-4">
              Photography
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl">
              Explore photography techniques and projects for capturing the world around you. From macro details to sweeping landscapes, discover how to create compelling images with any camera.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {photographyProjects.map((project) => (
              <article 
                key={project.id}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-lg rounded-2xl overflow-hidden border border-violet-700/50 hover:border-violet-500/70 transition-all duration-500 transform hover:-translate-y-2"
              >
                <div className="h-48 bg-gradient-to-r from-violet-600/20 to-purple-600/20 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-24 h-24 rounded-full bg-gradient-to-r from-violet-500 to-purple-500 flex items-center justify-center text-3xl">
                      📸
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-violet-300 transition-colors">
                    <Link href={`/blog/hobby/photography/${project.id}`} className="hover:text-violet-300 transition-colors">
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
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-violet-600 to-purple-600 text-white rounded-lg font-semibold hover:from-violet-700 hover:to-purple-700 transition-all duration-300"
            >
              ← Back to Hobby Dimension
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}