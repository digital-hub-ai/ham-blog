import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function CraftsIndex() {
  // Arts & Crafts projects
  const craftProjects = [
    { 
      id: 'watercolor-techniques', 
      title: 'Watercolor Techniques: Master the Flow of Pigment and Water', 
      excerpt: 'Learn essential watercolor techniques to create beautiful, flowing artworks with depth and dimension.',
      date: 'Dec 21, 2025',
      author: 'Artist Jordan Brush',
      readTime: '16 min read'
    },
    { 
      id: 'knitting-projects', 
      title: 'Knitting Projects: From Scarves to Complex Patterns', 
      excerpt: 'Step-by-step guides for knitters of all skill levels, from basic stitches to intricate designs.',
      date: 'Dec 20, 2025',
      author: 'Artisan Sam Stitch',
      readTime: '18 min read'
    },
    { 
      id: 'pottery-beginners', 
      title: 'Pottery for Beginners: Shaping Clay into Functional Art', 
      excerpt: 'Introduction to pottery techniques, tools, and processes for creating beautiful, functional ceramic pieces.',
      date: 'Dec 19, 2025',
      author: 'Ceramist Taylor Clay',
      readTime: '17 min read'
    },
    { 
      id: 'scrapbooking-memories', 
      title: 'Scrapbooking Memories: Preserving Life Through Creative Design', 
      excerpt: 'Techniques for creating meaningful scrapbooks that preserve memories with artistic flair.',
      date: 'Dec 18, 2025',
      author: 'Designer Casey Memory',
      readTime: '15 min read'
    },
    { 
      id: 'macrame-wall-hangings', 
      title: 'Macrame Wall Hangings: Creating Textured Art with Knots', 
      excerpt: 'Learn traditional macrame knots to create beautiful wall hangings and home décor pieces.',
      date: 'Dec 17, 2025',
      author: 'Artisan Riley Knot',
      readTime: '14 min read'
    },
    { 
      id: 'jewelry-making', 
      title: 'Jewelry Making: Crafting Personal Accessories with Style', 
      excerpt: 'Explore various techniques for creating unique jewelry pieces from wire wrapping to beadwork.',
      date: 'Dec 16, 2025',
      author: 'Designer Morgan Shine',
      readTime: '19 min read'
    }
  ];

  return (
    <>
      <Head>
        <title>Arts & Crafts | Hobby Dimension</title>
        <meta name="description" content="Explore creative arts and crafts projects for all skill levels." />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-black text-white">
        <div className="container mx-auto px-4 py-12 max-w-6xl">
          <Link href="/blog/hobby" className="inline-flex items-center text-purple-400 hover:text-purple-300 mb-8">
            <span className="mr-2">←</span>
            Back to Hobby Dimension
          </Link>

          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent mb-4">
              Arts & Crafts
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl">
              Explore creative arts and crafts projects for all skill levels. From traditional techniques to modern innovations, discover new ways to express your artistic side.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {craftProjects.map((project) => (
              <article 
                key={project.id}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-lg rounded-2xl overflow-hidden border border-purple-700/50 hover:border-purple-500/70 transition-all duration-500 transform hover:-translate-y-2"
              >
                <div className="h-48 bg-gradient-to-r from-purple-600/20 to-pink-600/20 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-24 h-24 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-3xl">
                      ✂️
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-purple-300 transition-colors">
                    <Link href={`/blog/hobby/crafts/${project.id}`} className="hover:text-purple-300 transition-colors">
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
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
            >
              ← Back to Hobby Dimension
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}