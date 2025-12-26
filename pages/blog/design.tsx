import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function DesignReality() {
  // Sub-realities within the design dimension
  const subRealities = [
    { id: 'ui-ux', name: 'UI/UX Design', icon: '🖥️', description: 'Interactive experiences that delight users' },
    { id: 'branding', name: 'Branding', icon: '🎯', description: 'Visual identities that tell compelling stories' },
    { id: 'graphic', name: 'Graphic Design', icon: '🎨', description: 'Visual communications that captivate audiences' },
    { id: '3d-motion', name: '3D & Motion', icon: '🎬', description: 'Dynamic visuals that bring ideas to life' },
    { id: 'product', name: 'Product Design', icon: '📦', description: 'Functional aesthetics that solve real problems' },
    { id: 'design-systems', name: 'Design Systems', icon: '🔧', description: 'Scalable foundations for consistent experiences' }
  ];

  // Featured design projects
  const featuredProjects = [
    {
      id: 'quantum-interface-design',
      title: 'Quantum Interface Design: Redefining Digital Interaction',
      excerpt: 'Exploring how quantum computing principles can inspire revolutionary user interface paradigms and visual languages.',
      date: 'Dec 21, 2025',
      author: 'Designer Luna Pixel',
      readTime: '13 min read',
      tags: ['UI/UX', 'Future Design', 'Innovation'],
      category: 'ui-ux'
    },
    {
      id: 'neural-branding-creating-identities-that-think',
      title: 'Neural Branding: Creating Identities That Think',
      excerpt: 'How AI-driven design is transforming brand identity creation and emotional connection through data-informed visual strategies.',
      date: 'Dec 19, 2025',
      author: 'Creative Director Max Artiste',
      readTime: '11 min read',
      tags: ['Branding', 'AI', 'Psychology'],
      category: 'branding'
    },
    {
      id: 'generative-art-algorithms',
      title: 'Generative Art Algorithms: Code as Creative Partner',
      excerpt: 'Harnessing algorithmic processes to create unique visual compositions that evolve and adapt in real-time.',
      date: 'Dec 18, 2025',
      author: 'Algorithmic Artist Pixel Weaver',
      readTime: '14 min read',
      tags: ['Graphic Design', 'AI Art', 'Computational Creativity'],
      category: 'graphic'
    },
    {
      id: 'holographic-ui',
      title: 'Holographic User Interfaces: Designing in 3D Space',
      excerpt: 'The challenges and opportunities of creating interfaces for augmented and mixed reality environments.',
      date: 'Dec 17, 2025',
      author: 'Spatial Designer Zoe Depth',
      readTime: '15 min read',
      tags: ['3D Design', 'AR/VR', 'Future Tech'],
      category: '3d-motion'
    }
  ];  // Recent design works
  const recentWorks = [
    { id: '1', title: 'Minimalism in 2025: Less is Luxe', date: 'Dec 21, 2025', category: 'graphic' },
    { id: '2', title: 'Color Psychology in Branding', date: 'Dec 20, 2025', category: 'branding' },
    { id: '3', title: 'Typography Trends for Digital Media', date: 'Dec 19, 2025', category: 'graphic' },
    { id: '4', title: 'Sustainable Design Principles', date: 'Dec 18, 2025', category: 'product' },
    { id: '5', title: 'Accessibility in UI Design', date: 'Dec 17, 2025', category: 'ui-ux' }
  ];

  // Design tools and resources
  const designTools = [
    { name: 'Penpot 2025', description: 'Open-source design and prototyping platform with AI assistance', rating: 4.8 },
    { name: 'Figma Quantum', description: 'Next-gen collaborative design tool with real-time co-creation', rating: 4.9 },
    { name: 'Blender Neo', description: 'Advanced 3D modeling and animation suite with neural rendering', rating: 4.7 },
    { name: 'Adobe Creative Suite AI', description: 'Industry-standard tools enhanced with artificial intelligence', rating: 4.6 }
  ];

  return (
    <>
      <Head>
        <title>Aesthetic Forge - Design Cosmos | Library of Realities</title>
        <meta name="description" content="Where creativity ignites and pixels become portals to infinite possibilities. Explore UI/UX, branding, graphic design, 3D motion, product design, and design systems." />
        <meta name="keywords" content="design, UI/UX, branding, graphic design, 3D design, product design, design systems, creative tools" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content="Aesthetic Forge - Design Cosmos" />
        <meta property="og:description" content="Where creativity ignites and pixels become portals to infinite possibilities." />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">
          {
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Aesthetic Forge - Design Cosmos",
            "description": "Where creativity ignites and pixels become portals to infinite possibilities.",
            "url": "https://ai-tools-directory.com/blog/design"
          }
        </script>
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-rose-900 to-black text-white overflow-hidden">
        {/* Creative particle background */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          {[...Array(80)].map((_, i) => (
            <div 
              key={i}
              className="absolute rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${Math.random() * 10 + 2}px`,
                height: `${Math.random() * 10 + 2}px`,
                backgroundColor: `hsl(${Math.random() * 360}, 70%, 60%)`,
                opacity: Math.random() * 0.4 + 0.1,
                animationDuration: `${Math.random() * 5 + 3}s`,
                animationDelay: `${Math.random() * 2}s`
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-4 py-12 max-w-6xl relative z-10">
          {/* Reality Header */}
          <div className="text-center mb-16 pt-8">
            <div className="mb-6">
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-rose-400 to-pink-500 bg-clip-text text-transparent mb-4">Aesthetic Forge</h1>
              <div className="w-32 h-1 bg-gradient-to-r from-rose-400 to-pink-500 mx-auto rounded-full mb-6"></div>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">The Design Cosmos - Where creativity ignites and pixels become portals to infinite possibilities.</p>
            </div>
            
            {/* Reality Navigation */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {subRealities.map((sub) => (
                <Link 
                  key={sub.id}
                  href={`/blog/design/${sub.id}`}
                  className="px-4 py-3 bg-rose-900/30 rounded-full text-rose-300 border border-rose-700/50 hover:bg-rose-800/50 hover:border-rose-600/50 transition-all duration-300 flex flex-col items-center min-w-[120px]"
                >
                  <span className="text-2xl mb-1">{sub.icon}</span>
                  <span className="text-sm font-medium">{sub.name}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Creative Showcase */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 flex items-center">
              <span className="mr-3">✨</span>
              Creative Showcase
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {featuredProjects.map((project) => (
                <article 
                  key={project.id}
                  className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-lg rounded-2xl overflow-hidden border border-rose-700/50 hover:border-rose-500/70 transition-all duration-500 transform hover:-translate-y-2"
                >
                  <div className="h-48 bg-gradient-to-r from-rose-600/20 to-pink-600/20 relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-24 h-24 rounded-full bg-gradient-to-r from-rose-500 to-pink-500 flex items-center justify-center text-3xl">
                        🎨
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, index) => (
                        <span key={index} className="px-2 py-1 bg-rose-900/30 text-rose-300 text-xs rounded-full border border-rose-700/50">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h3 className="text-xl font-bold mb-3 group-hover:text-rose-300 transition-colors">
                      <Link href={`/blog/design/${project.category}/${project.id}`} className="hover:text-rose-300 transition-colors">
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
          </div>

          {/* Design Categories and Tools */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {/* Design Categories */}
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-lg rounded-2xl border border-rose-700/50 p-6">
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <span className="mr-3">📂</span>
                Design Disciplines
              </h3>
              <div className="space-y-4">
                {subRealities.map((sub) => (
                  <Link 
                    key={sub.id}
                    href={`/blog/design/${sub.id}`}
                    className="block p-4 rounded-xl bg-gray-800/30 hover:bg-rose-900/20 border border-gray-700/50 hover:border-rose-700/50 transition-all duration-300"
                  >
                    <div className="flex items-center">
                      <span className="text-2xl mr-4">{sub.icon}</span>
                      <div>
                        <h4 className="font-bold text-lg">{sub.name}</h4>
                        <p className="text-gray-400 text-sm">{sub.description}</p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Design Tools */}
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-lg rounded-2xl border border-rose-700/50 p-6">
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <span className="mr-3">🛠️</span>
                Creative Toolkit
              </h3>
              <div className="space-y-4">
                {designTools.map((tool, index) => (
                  <div key={index} className="p-4 rounded-xl bg-gray-800/30 border border-gray-700/50">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-bold text-lg">{tool.name}</h4>
                        <p className="text-gray-400 text-sm mt-1">{tool.description}</p>
                      </div>
                      <div className="flex items-center bg-rose-900/30 px-2 py-1 rounded-full">
                        <span className="text-rose-400 mr-1">★</span>
                        <span className="text-rose-300 font-bold">{tool.rating}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 text-center">
                <Link 
                  href="/blog/design/tools" 
                  className="inline-flex items-center text-rose-400 hover:text-rose-300 font-medium"
                >
                  Explore All Design Tools
                  <span className="ml-2">→</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Recent Works */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 flex items-center">
              <span className="mr-3">🎨</span>
              Recent Creations
            </h2>
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-lg rounded-2xl border border-rose-700/50 overflow-hidden">
              <div className="divide-y divide-gray-700/50">
                {recentWorks.map((work) => (
                  <div key={work.id} className="p-6 hover:bg-gray-800/30 transition-colors">
                    <div className="flex justify-between items-center">
                      <h3 className="text-lg font-medium">
                        <Link href={`/blog/design/${work.category}/work-${work.id}`} className="hover:text-rose-300 transition-colors">
                          {work.title}
                        </Link>
                      </h3>
                      <div className="flex items-center">
                        <span className="text-gray-500 text-sm mr-4">{work.date}</span>
                        <Link 
                          href={`/blog/design/${work.category}/work-${work.id}`} 
                          className="text-rose-400 hover:text-rose-300 text-sm"
                        >
                          View →
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Design Resources */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 flex items-center">
              <span className="mr-3">📚</span>
              Design Resources
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-lg rounded-2xl border border-rose-700/50 p-6">
                <div className="text-4xl mb-4">🎓</div>
                <h3 className="text-xl font-bold mb-2">Learning Paths</h3>
                <p className="text-gray-400 mb-4">Structured courses to master design fundamentals and advanced techniques.</p>
                <Link href="/blog/design/learning" className="text-rose-400 hover:text-rose-300 font-medium">
                  Start Learning →
                </Link>
              </div>
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-lg rounded-2xl border border-rose-700/50 p-6">
                <div className="text-4xl mb-4">💡</div>
                <h3 className="text-xl font-bold mb-2">Inspiration Hub</h3>
                <p className="text-gray-400 mb-4">Curated collections of award-winning designs and creative concepts.</p>
                <Link href="/blog/design/inspiration" className="text-rose-400 hover:text-rose-300 font-medium">
                  Get Inspired →
                </Link>
              </div>
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-lg rounded-2xl border border-rose-700/50 p-6">
                <div className="text-4xl mb-4">👥</div>
                <h3 className="text-xl font-bold mb-2">Community</h3>
                <p className="text-gray-400 mb-4">Connect with designers worldwide and share your creative work.</p>
                <Link href="/blog/design/community" className="text-rose-400 hover:text-rose-300 font-medium">
                  Join Community →
                </Link>
              </div>
            </div>
          </div>

          {/* Return to Library */}
          <div className="text-center">
            <Link 
              href="/blog"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-rose-600 to-pink-600 text-white rounded-lg font-semibold hover:from-rose-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105"
            >
              <span className="mr-2">🌌</span>
              Return to Library of Realities
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}