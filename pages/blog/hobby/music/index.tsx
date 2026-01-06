import React from &apos;react&apos;;
import Head from &apos;next/head&apos;;
import Link from &apos;next/link&apos;;

export default function MusicIndex() {
  // Music & Audio projects
  const musicProjects = [
    { 
      id: &apos;vinyl-restoration&apos;, 
      title: &apos;Vinyl Record Restoration: Bringing Old Music Back to Life&apos;, 
      excerpt: &apos;Professional techniques for cleaning, repairing, and preserving vintage vinyl collections.&apos;,
      date: &apos;Dec 21, 2025&apos;,
      author: &apos;Audiophile Sam Groove&apos;,
      readTime: &apos;16 min read&apos;
    },
    { 
      id: &apos;home-studio-setup&apos;, 
      title: &apos;Home Studio Setup: Creating Your Personal Music Creation Space&apos;, 
      excerpt: &apos;Complete guide to setting up a professional-quality home recording studio on a budget.&apos;,
      date: &apos;Dec 20, 2025&apos;,
      author: &apos;Producer Alex Sound&apos;,
      readTime: &apos;18 min read&apos;
    },
    { 
      id: &apos;synthesizer-programming&apos;, 
      title: &apos;Synthesizer Programming: Crafting Unique Sounds from Scratch&apos;, 
      excerpt: &apos;Learn the fundamentals of sound synthesis and create your own distinctive electronic music textures.&apos;,
      date: &apos;Dec 19, 2025&apos;,
      author: &apos;Sound Designer Taylor Wave&apos;,
      readTime: &apos;17 min read&apos;
    },
    { 
      id: &apos;guitar-building&apos;, 
      title: &apos;Guitar Building: Craft Your Own Custom Instrument&apos;, 
      excerpt: &apos;Step-by-step guide to building a custom electric or acoustic guitar from scratch.&apos;,
      date: &apos;Dec 18, 2025&apos;,
      author: &apos;Luthier Casey String&apos;,
      readTime: &apos;20 min read&apos;
    },
    { 
      id: &apos;audio-repair&apos;, 
      title: &apos;Audio Equipment Repair: Fixing Vintage and Modern Gear&apos;, 
      excerpt: &apos;Essential techniques for diagnosing and repairing common issues in audio equipment.&apos;,
      date: &apos;Dec 17, 2025&apos;,
      author: &apos;Technician Riley Amplify&apos;,
      readTime: &apos;19 min read&apos;
    },
    { 
      id: &apos;dj-mixing&apos;, 
      title: &apos;DJ Mixing: From Beginner to Club-Ready Performer&apos;, 
      excerpt: &apos;Master the art of beatmatching, mixing, and reading a crowd for memorable performances.&apos;,
      date: &apos;Dec 16, 2025&apos;,
      author: &apos;DJ Morgan Beat&apos;,
      readTime: &apos;15 min read&apos;
    }
  ];

  return (
    <>
      <Head>
        <title>Music & Audio | Hobby Dimension</title>
        <meta name="description&quot; content="Explore music production, audio engineering, and instrument crafting projects.&quot; />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-black text-white&quot;>
        <div className="container mx-auto px-4 py-12 max-w-6xl&quot;>
          <Link href="/blog/hobby&quot; className="inline-flex items-center text-blue-400 hover:text-blue-300 mb-8&quot;>
            <span className="mr-2&quot;>←</span>
            Back to Hobby Dimension
          </Link>

          <div className="mb-12&quot;>
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent mb-4&quot;>
              Music & Audio
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl&quot;>
              Explore music production, audio engineering, and instrument crafting projects. From vinyl restoration to home studio setup, discover the art of sound creation and preservation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8&quot;>
            {musicProjects.map((project) => (
              <article 
                key={project.id}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-lg rounded-2xl overflow-hidden border border-blue-700/50 hover:border-blue-500/70 transition-all duration-500 transform hover:-translate-y-2&quot;
              >
                <div className="h-48 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 relative&quot;>
                  <div className="absolute inset-0 flex items-center justify-center&quot;>
                    <div className="w-24 h-24 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center text-3xl&quot;>
                      🎵
                    </div>
                  </div>
                </div>
                <div className="p-6&quot;>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-blue-300 transition-colors&quot;>
                    <Link href={`/blog/hobby/music/${project.id}`} className="hover:text-blue-300 transition-colors&quot;>
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

          <div className="mt-12 text-center&quot;>
            <Link 
              href="/blog/hobby&quot;
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300&quot;
            >
              ← Back to Hobby Dimension
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}