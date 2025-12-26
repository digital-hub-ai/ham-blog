import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function CollectingIndex() {
  // Collecting projects
  const collectingProjects = [
    { 
      id: 'coin-collecting', 
      title: 'Coin Collecting: Building a Numismatic Portfolio', 
      excerpt: 'Learn the fundamentals of coin collecting, from identifying valuable pieces to proper storage techniques.',
      date: 'Dec 21, 2025',
      author: 'Numismatist Alex Treasury',
      readTime: '16 min read'
    },
    { 
      id: 'vintage-comics', 
      title: 'Vintage Comic Collection: Preserving Pop Culture History', 
      excerpt: 'Guide to building and maintaining a valuable comic book collection with preservation tips.',
      date: 'Dec 20, 2025',
      author: 'Collector Taylor Panels',
      readTime: '18 min read'
    },
    { 
      id: 'antique-toys', 
      title: 'Antique Toy Collecting: Preserving Childhood Memories', 
      excerpt: 'Explore the world of vintage toy collecting, from identification to authentication techniques.',
      date: 'Dec 19, 2025',
      author: 'Toy Expert Casey Memory',
      readTime: '17 min read'
    },
    { 
      id: 'stamp-collecting', 
      title: 'Stamp Collecting: The Art of Philately', 
      excerpt: 'Comprehensive guide to stamp collecting, including country specialties and thematic collections.',
      date: 'Dec 18, 2025',
      author: 'Philatelist Riley Post',
      readTime: '15 min read'
    },
    { 
      id: 'vintage-cards', 
      title: 'Vintage Trading Card Collection: From Baseball to Modern Sets', 
      excerpt: 'Build a valuable trading card collection with expert advice on grading and storage.',
      date: 'Dec 17, 2025',
      author: 'Card Specialist Morgan Pack',
      readTime: '19 min read'
    },
    { 
      id: 'collectible-figures', 
      title: 'Collectible Figure Market: Action Figures to Articulated Dolls', 
      excerpt: 'Navigate the collectible figure market with tips on identifying rare pieces and proper care.',
      date: 'Dec 16, 2025',
      author: 'Figure Collector Jordan Box',
      readTime: '14 min read'
    }
  ];

  return (
    <>
      <Head>
        <title>Collecting | Hobby Dimension</title>
        <meta name="description" content="Explore collecting hobbies and projects for building valuable collections." />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-amber-900 to-black text-white">
        <div className="container mx-auto px-4 py-12 max-w-6xl">
          <Link href="/blog/hobby" className="inline-flex items-center text-amber-400 hover:text-amber-300 mb-8">
            <span className="mr-2">←</span>
            Back to Hobby Dimension
          </Link>

          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent mb-4">
              Collecting
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl">
              Explore collecting hobbies and projects for building valuable collections. From vintage treasures to modern rarities, discover the joy of curating meaningful items.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {collectingProjects.map((project) => (
              <article 
                key={project.id}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-lg rounded-2xl overflow-hidden border border-amber-700/50 hover:border-amber-500/70 transition-all duration-500 transform hover:-translate-y-2"
              >
                <div className="h-48 bg-gradient-to-r from-amber-600/20 to-orange-600/20 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-24 h-24 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 flex items-center justify-center text-3xl">
                      🗂️
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-amber-300 transition-colors">
                    <Link href={`/blog/hobby/collecting/${project.id}`} className="hover:text-amber-300 transition-colors">
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
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-amber-600 to-orange-600 text-white rounded-lg font-semibold hover:from-amber-700 hover:to-orange-700 transition-all duration-300"
            >
              ← Back to Hobby Dimension
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}