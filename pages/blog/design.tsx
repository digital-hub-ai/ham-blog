import React from &apos;react&apos;;
import Head from &apos;next/head&apos;;
import Link from &apos;next/link&apos;;

export default function DesignReality() {
  // Sub-realities within the design dimension
  const subRealities = [
    { id: &apos;ui-ux&apos;, name: &apos;UI/UX Design&apos;, icon: &apos;🖥️&apos;, description: &apos;Interactive experiences that delight users&apos; },
    { id: &apos;branding&apos;, name: &apos;Branding&apos;, icon: &apos;🎯&apos;, description: &apos;Visual identities that tell compelling stories&apos; },
    { id: &apos;graphic&apos;, name: &apos;Graphic Design&apos;, icon: &apos;🎨&apos;, description: &apos;Visual communications that captivate audiences&apos; },
    { id: &apos;3d-motion&apos;, name: &apos;3D & Motion&apos;, icon: &apos;🎬&apos;, description: &apos;Dynamic visuals that bring ideas to life&apos; },
    { id: &apos;product&apos;, name: &apos;Product Design&apos;, icon: &apos;📦&apos;, description: &apos;Functional aesthetics that solve real problems&apos; },
    { id: &apos;design-systems&apos;, name: &apos;Design Systems&apos;, icon: &apos;🔧&apos;, description: &apos;Scalable foundations for consistent experiences&apos; }
  ];

  // Featured design projects
  const featuredProjects = [
    {
      id: &apos;quantum-interface-design&apos;,
      title: &apos;Quantum Interface Design: Redefining Digital Interaction&apos;,
      excerpt: &apos;Exploring how quantum computing principles can inspire revolutionary user interface paradigms and visual languages.&apos;,
      date: &apos;Dec 21, 2025&apos;,
      author: &apos;Designer Luna Pixel&apos;,
      readTime: &apos;13 min read&apos;,
      tags: [&apos;UI/UX&apos;, &apos;Future Design&apos;, &apos;Innovation&apos;],
      category: &apos;ui-ux&apos;
    },
    {
      id: &apos;neural-branding-creating-identities-that-think&apos;,
      title: &apos;Neural Branding: Creating Identities That Think&apos;,
      excerpt: &apos;How AI-driven design is transforming brand identity creation and emotional connection through data-informed visual strategies.&apos;,
      date: &apos;Dec 19, 2025&apos;,
      author: &apos;Creative Director Max Artiste&apos;,
      readTime: &apos;11 min read&apos;,
      tags: [&apos;Branding&apos;, &apos;AI&apos;, &apos;Psychology&apos;],
      category: &apos;branding&apos;
    },
    {
      id: &apos;generative-art-algorithms&apos;,
      title: &apos;Generative Art Algorithms: Code as Creative Partner&apos;,
      excerpt: &apos;Harnessing algorithmic processes to create unique visual compositions that evolve and adapt in real-time.&apos;,
      date: &apos;Dec 18, 2025&apos;,
      author: &apos;Algorithmic Artist Pixel Weaver&apos;,
      readTime: &apos;14 min read&apos;,
      tags: [&apos;Graphic Design&apos;, &apos;AI Art&apos;, &apos;Computational Creativity&apos;],
      category: &apos;graphic&apos;
    },
    {
      id: &apos;holographic-ui&apos;,
      title: &apos;Holographic User Interfaces: Designing in 3D Space&apos;,
      excerpt: &apos;The challenges and opportunities of creating interfaces for augmented and mixed reality environments.&apos;,
      date: &apos;Dec 17, 2025&apos;,
      author: &apos;Spatial Designer Zoe Depth&apos;,
      readTime: &apos;15 min read&apos;,
      tags: [&apos;3D Design&apos;, &apos;AR/VR&apos;, &apos;Future Tech&apos;],
      category: &apos;3d-motion&apos;
    }
  ];  // Recent design works
  const recentWorks = [
    { id: &apos;1&apos;, title: &apos;Minimalism in 2025: Less is Luxe&apos;, date: &apos;Dec 21, 2025&apos;, category: &apos;graphic&apos; },
    { id: &apos;2&apos;, title: &apos;Color Psychology in Branding&apos;, date: &apos;Dec 20, 2025&apos;, category: &apos;branding&apos; },
    { id: &apos;3&apos;, title: &apos;Typography Trends for Digital Media&apos;, date: &apos;Dec 19, 2025&apos;, category: &apos;graphic&apos; },
    { id: &apos;4&apos;, title: &apos;Sustainable Design Principles&apos;, date: &apos;Dec 18, 2025&apos;, category: &apos;product&apos; },
    { id: &apos;5&apos;, title: &apos;Accessibility in UI Design&apos;, date: &apos;Dec 17, 2025&apos;, category: &apos;ui-ux&apos; }
  ];

  // Design tools and resources
  const designTools = [
    { name: &apos;Penpot 2025&apos;, description: &apos;Open-source design and prototyping platform with AI assistance&apos;, rating: 4.8 },
    { name: &apos;Figma Quantum&apos;, description: &apos;Next-gen collaborative design tool with real-time co-creation&apos;, rating: 4.9 },
    { name: &apos;Blender Neo&apos;, description: &apos;Advanced 3D modeling and animation suite with neural rendering&apos;, rating: 4.7 },
    { name: &apos;Adobe Creative Suite AI&apos;, description: &apos;Industry-standard tools enhanced with artificial intelligence&apos;, rating: 4.6 }
  ];

  return (
    <>
      <Head>
        <title>Aesthetic Forge - Design Cosmos | Library of Realities</title>
        <meta name="description&quot; content="Where creativity ignites and pixels become portals to infinite possibilities. Explore UI/UX, branding, graphic design, 3D motion, product design, and design systems.&quot; />
        <meta name="keywords&quot; content="design, UI/UX, branding, graphic design, 3D design, product design, design systems, creative tools&quot; />
        <meta name="viewport&quot; content="width=device-width, initial-scale=1&quot; />
        <link rel="icon&quot; href="/favicon.ico&quot; />
        <meta property="og:title&quot; content="Aesthetic Forge - Design Cosmos&quot; />
        <meta property="og:description&quot; content="Where creativity ignites and pixels become portals to infinite possibilities.&quot; />
        <meta property="og:type&quot; content="website&quot; />
        <script type="application/ld+json&quot; dangerouslySetInnerHTML={{__html: `{&quot;@context&quot;: &quot;https://schema.org&quot;,&quot;@type&quot;: &quot;WebPage&quot;,&quot;name&quot;: &quot;Aesthetic Forge - Design Cosmos&quot;,&quot;description&quot;: &quot;Where creativity ignites and pixels become portals to infinite possibilities.&quot;,&quot;url&quot;: &quot;https://ai-tools-directory.com/blog/design&quot;}`}} />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-rose-900 to-black text-white overflow-hidden&quot;>
        {/* Creative particle background */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none&quot;>
          {[...Array(80)].map((_, i) => (
            <div 
              key={i}
              className="absolute rounded-full animate-pulse&quot;
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

        <div className="container mx-auto px-4 py-12 max-w-6xl relative z-10&quot;>
          {/* Reality Header */}
          <div className="text-center mb-16 pt-8&quot;>
            <div className="mb-6&quot;>
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-rose-400 to-pink-500 bg-clip-text text-transparent mb-4&quot;>Aesthetic Forge</h1>
              <div className="w-32 h-1 bg-gradient-to-r from-rose-400 to-pink-500 mx-auto rounded-full mb-6&quot;></div>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto&quot;>The Design Cosmos - Where creativity ignites and pixels become portals to infinite possibilities.</p>
            </div>
            
            {/* Reality Navigation */}
            <div className="flex flex-wrap justify-center gap-4 mb-12&quot;>
              {subRealities.map((sub) => (
                <Link 
                  key={sub.id}
                  href={`/blog/design/${sub.id}`}
                  className="px-4 py-3 bg-rose-900/30 rounded-full text-rose-300 border border-rose-700/50 hover:bg-rose-800/50 hover:border-rose-600/50 transition-all duration-300 flex flex-col items-center min-w-[120px]&quot;
                >
                  <span className="text-2xl mb-1&quot;>{sub.icon}</span>
                  <span className="text-sm font-medium&quot;>{sub.name}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Creative Showcase */}
          <div className="mb-16&quot;>
            <h2 className="text-3xl font-bold mb-8 flex items-center&quot;>
              <span className="mr-3&quot;>✨</span>
              Creative Showcase
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8&quot;>
              {featuredProjects.map((project) => (
                <article 
                  key={project.id}
                  className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-lg rounded-2xl overflow-hidden border border-rose-700/50 hover:border-rose-500/70 transition-all duration-500 transform hover:-translate-y-2&quot;
                >
                  <div className="h-48 bg-gradient-to-r from-rose-600/20 to-pink-600/20 relative&quot;>
                    <div className="absolute inset-0 flex items-center justify-center&quot;>
                      <div className="w-24 h-24 rounded-full bg-gradient-to-r from-rose-500 to-pink-500 flex items-center justify-center text-3xl&quot;>
                        🎨
                      </div>
                    </div>
                  </div>
                  <div className="p-6&quot;>
                    <div className="flex flex-wrap gap-2 mb-4&quot;>
                      {project.tags.map((tag, index) => (
                        <span key={index} className="px-2 py-1 bg-rose-900/30 text-rose-300 text-xs rounded-full border border-rose-700/50&quot;>
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h3 className="text-xl font-bold mb-3 group-hover:text-rose-300 transition-colors&quot;>
                      <Link href={`/blog/design/${project.category}/${project.id}`} className="hover:text-rose-300 transition-colors&quot;>
                        {project.title}
                      </Link>
                    </h3>
                    <p className="text-gray-400 mb-4&quot;>
                      {project.excerpt}
                    </p>
                    <div className="flex items-center justify-between&quot;>
                      <span className="text-gray-500 text-sm&quot;>By {project.author}</span>
                      <div className="text-right&quot;>
                        <span className="text-gray-500 text-sm block&quot;>{project.date}</span>
                        <span className="text-gray-500 text-sm&quot;>{project.readTime}</span>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Design Categories and Tools */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16&quot;>
            {/* Design Categories */}
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-lg rounded-2xl border border-rose-700/50 p-6&quot;>
              <h3 className="text-2xl font-bold mb-6 flex items-center&quot;>
                <span className="mr-3&quot;>📂</span>
                Design Disciplines
              </h3>
              <div className="space-y-4&quot;>
                {subRealities.map((sub) => (
                  <Link 
                    key={sub.id}
                    href={`/blog/design/${sub.id}`}
                    className="block p-4 rounded-xl bg-gray-800/30 hover:bg-rose-900/20 border border-gray-700/50 hover:border-rose-700/50 transition-all duration-300&quot;
                  >
                    <div className="flex items-center&quot;>
                      <span className="text-2xl mr-4&quot;>{sub.icon}</span>
                      <div>
                        <h4 className="font-bold text-lg&quot;>{sub.name}</h4>
                        <p className="text-gray-400 text-sm&quot;>{sub.description}</p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Design Tools */}
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-lg rounded-2xl border border-rose-700/50 p-6&quot;>
              <h3 className="text-2xl font-bold mb-6 flex items-center&quot;>
                <span className="mr-3&quot;>🛠️</span>
                Creative Toolkit
              </h3>
              <div className="space-y-4&quot;>
                {designTools.map((tool, index) => (
                  <div key={index} className="p-4 rounded-xl bg-gray-800/30 border border-gray-700/50&quot;>
                    <div className="flex justify-between items-start&quot;>
                      <div>
                        <h4 className="font-bold text-lg&quot;>{tool.name}</h4>
                        <p className="text-gray-400 text-sm mt-1&quot;>{tool.description}</p>
                      </div>
                      <div className="flex items-center bg-rose-900/30 px-2 py-1 rounded-full&quot;>
                        <span className="text-rose-400 mr-1&quot;>★</span>
                        <span className="text-rose-300 font-bold&quot;>{tool.rating}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 text-center&quot;>
                <Link 
                  href="/blog/design/tools&quot; 
                  className="inline-flex items-center text-rose-400 hover:text-rose-300 font-medium&quot;
                >
                  Explore All Design Tools
                  <span className="ml-2&quot;>→</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Recent Works */}
          <div className="mb-16&quot;>
            <h2 className="text-3xl font-bold mb-8 flex items-center&quot;>
              <span className="mr-3&quot;>🎨</span>
              Recent Creations
            </h2>
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-lg rounded-2xl border border-rose-700/50 overflow-hidden&quot;>
              <div className="divide-y divide-gray-700/50&quot;>
                {recentWorks.map((work) => (
                  <div key={work.id} className="p-6 hover:bg-gray-800/30 transition-colors&quot;>
                    <div className="flex justify-between items-center&quot;>
                      <h3 className="text-lg font-medium&quot;>
                        <Link href={`/blog/design/${work.category}/work-${work.id}`} className="hover:text-rose-300 transition-colors&quot;>
                          {work.title}
                        </Link>
                      </h3>
                      <div className="flex items-center&quot;>
                        <span className="text-gray-500 text-sm mr-4&quot;>{work.date}</span>
                        <Link 
                          href={`/blog/design/${work.category}/work-${work.id}`} 
                          className="text-rose-400 hover:text-rose-300 text-sm&quot;
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
          <div className="mb-16&quot;>
            <h2 className="text-3xl font-bold mb-8 flex items-center&quot;>
              <span className="mr-3&quot;>📚</span>
              Design Resources
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6&quot;>
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-lg rounded-2xl border border-rose-700/50 p-6&quot;>
                <div className="text-4xl mb-4&quot;>🎓</div>
                <h3 className="text-xl font-bold mb-2&quot;>Learning Paths</h3>
                <p className="text-gray-400 mb-4&quot;>Structured courses to master design fundamentals and advanced techniques.</p>
                <Link href="/blog/design/learning&quot; className="text-rose-400 hover:text-rose-300 font-medium&quot;>
                  Start Learning →
                </Link>
              </div>
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-lg rounded-2xl border border-rose-700/50 p-6&quot;>
                <div className="text-4xl mb-4&quot;>💡</div>
                <h3 className="text-xl font-bold mb-2&quot;>Inspiration Hub</h3>
                <p className="text-gray-400 mb-4&quot;>Curated collections of award-winning designs and creative concepts.</p>
                <Link href="/blog/design/inspiration&quot; className="text-rose-400 hover:text-rose-300 font-medium&quot;>
                  Get Inspired →
                </Link>
              </div>
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-lg rounded-2xl border border-rose-700/50 p-6&quot;>
                <div className="text-4xl mb-4&quot;>👥</div>
                <h3 className="text-xl font-bold mb-2&quot;>Community</h3>
                <p className="text-gray-400 mb-4&quot;>Connect with designers worldwide and share your creative work.</p>
                <Link href="/blog/design/community&quot; className="text-rose-400 hover:text-rose-300 font-medium&quot;>
                  Join Community →
                </Link>
              </div>
            </div>
          </div>

          {/* Return to Library */}
          <div className="text-center&quot;>
            <Link 
              href="/blog&quot;
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-rose-600 to-pink-600 text-white rounded-lg font-semibold hover:from-rose-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105&quot;
            >
              <span className="mr-2&quot;>🌌</span>
              Return to Library of Realities
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}