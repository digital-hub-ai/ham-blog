import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function DiyIndex() {
  // DIY projects
  const diyProjects = [
    { 
      id: 'smart-home-diy', 
      title: 'Smart Home DIY: Build Your Own Automated Lighting System', 
      excerpt: 'Step-by-step guide to creating a custom smart lighting solution using Arduino and IoT sensors.',
      date: 'Dec 21, 2025',
      author: 'Maker Alex Workshop',
      readTime: '16 min read'
    },
    { 
      id: 'custom-furniture', 
      title: 'Custom Furniture Building: Craft Your Own Unique Pieces', 
      excerpt: 'Learn the fundamentals of furniture design and construction to create custom pieces that reflect your personal style.',
      date: 'Dec 20, 2025',
      author: 'Craftsman Taylor Wood',
      readTime: '18 min read'
    },
    { 
      id: 'electronics-prototyping', 
      title: 'Electronics Prototyping: From Breadboard to Circuit Board', 
      excerpt: 'Master the process of designing and building electronic circuits from initial concept to final product.',
      date: 'Dec 19, 2025',
      author: 'Innovator Jordan Circuit',
      readTime: '20 min read'
    },
    { 
      id: '3d-printing-projects', 
      title: '3D Printing Projects: Transform Ideas into Physical Objects', 
      excerpt: 'Explore creative applications of 3D printing technology for functional and artistic projects.',
      date: 'Dec 18, 2025',
      author: 'Designer Casey Print',
      readTime: '17 min read'
    },
    { 
      id: 'soldering-workshop', 
      title: 'Soldering Workshop: Master the Art of Electrical Connections', 
      excerpt: 'Comprehensive guide to soldering techniques for electronics enthusiasts and DIY professionals.',
      date: 'Dec 17, 2025',
      author: 'Technician Riley Solder',
      readTime: '15 min read'
    },
    { 
      id: 'arduino-automation', 
      title: 'Arduino Automation: Control Your World with Microcontrollers', 
      excerpt: 'Learn to build automated systems for home, garden, and workshop using Arduino platforms.',
      date: 'Dec 16, 2025',
      author: 'Engineer Morgan Code',
      readTime: '19 min read'
    }
  ];

  return (
    <>
      <Head>
        <title>DIY Projects | Hobby Dimension</title>
        <meta name="description" content="Explore creative DIY projects and tutorials for makers and tinkerers." />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-orange-900 to-black text-white">
        <div className="container mx-auto px-4 py-12 max-w-6xl">
          <Link href="/blog/hobby" className="inline-flex items-center text-orange-400 hover:text-orange-300 mb-8">
            <span className="mr-2">←</span>
            Back to Hobby Dimension
          </Link>

          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent mb-4">
              DIY Projects
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl">
              Explore creative DIY projects and tutorials for makers and tinkerers. From electronics to woodworking, discover projects that challenge your skills and creativity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {diyProjects.map((project) => (
              <article 
                key={project.id}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-lg rounded-2xl overflow-hidden border border-orange-700/50 hover:border-orange-500/70 transition-all duration-500 transform hover:-translate-y-2"
              >
                <div className="h-48 bg-gradient-to-r from-orange-600/20 to-red-600/20 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-24 h-24 rounded-full bg-gradient-to-r from-orange-500 to-red-500 flex items-center justify-center text-3xl">
                      🔨
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-orange-300 transition-colors">
                    <Link href={`/blog/hobby/diy/${project.id}`} className="hover:text-orange-300 transition-colors">
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
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-lg font-semibold hover:from-orange-700 hover:to-red-700 transition-all duration-300"
            >
              ← Back to Hobby Dimension
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}