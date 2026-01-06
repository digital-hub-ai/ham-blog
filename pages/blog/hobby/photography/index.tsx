import React from &apos;react&apos;;
import Head from &apos;next/head&apos;;
import Link from &apos;next/link&apos;;

export default function PhotographyIndex() {
  // Photography projects
  const photographyProjects = [
    { 
      id: &apos;macro-nature&apos;, 
      title: &apos;Macro Photography Tips for Nature Shots&apos;, 
      excerpt: &apos;Discover techniques for capturing the intricate details of nature in stunning close-up images.&apos;,
      date: &apos;Dec 21, 2025&apos;,
      author: &apos;Photographer Jordan Lens&apos;,
      readTime: &apos;16 min read&apos;
    },
    { 
      id: &apos;portrait-lighting&apos;, 
      title: &apos;Portrait Lighting: Creating Mood and Emotion&apos;, 
      excerpt: &apos;Master the art of lighting for portrait photography to create compelling and evocative images.&apos;,
      date: &apos;Dec 20, 2025&apos;,
      author: &apos;Artist Taylor Frame&apos;,
      readTime: &apos;18 min read&apos;
    },
    { 
      id: &apos;film-photography&apos;, 
      title: &apos;Film Photography: Rediscovering the Art of Analog Capture&apos;, 
      excerpt: &apos;Explore the unique aesthetics and techniques of film photography in the digital age.&apos;,
      date: &apos;Dec 19, 2025&apos;,
      author: &apos;Analog Specialist Casey Film&apos;,
      readTime: &apos;17 min read&apos;
    },
    { 
      id: &apos;drone-photography&apos;, 
      title: &apos;Drone Photography: Capturing Aerial Perspectives&apos;, 
      excerpt: &apos;Learn safe and effective techniques for capturing stunning aerial photographs and videos.&apos;,
      date: &apos;Dec 18, 2025&apos;,
      author: &apos;Aerial Expert Riley Sky&apos;,
      readTime: &apos;15 min read&apos;
    },
    { 
      id: &apos;astrophotography&apos;, 
      title: &apos;Astrophotography: Capturing the Night Sky&apos;, 
      excerpt: &apos;Techniques for photographing stars, planets, and celestial phenomena with stunning clarity.&apos;,
      date: &apos;Dec 17, 2025&apos;,
      author: &apos;Sky Watcher Morgan Star&apos;,
      readTime: &apos;19 min read&apos;
    },
    { 
      id: &apos;street-photography&apos;, 
      title: &apos;Street Photography: Capturing Urban Life&apos;, 
      excerpt: &apos;Tips and techniques for documenting candid moments in urban environments.&apos;,
      date: &apos;Dec 16, 2025&apos;,
      author: &apos;Documentary Shooter Alex Street&apos;,
      readTime: &apos;14 min read&apos;
    }
  ];

  return (
    <>
      <Head>
        <title>Photography | Hobby Dimension</title>
        <meta name="description&quot; content="Explore photography techniques and projects for capturing the world around you.&quot; />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-violet-900 to-black text-white&quot;>
        <div className="container mx-auto px-4 py-12 max-w-6xl&quot;>
          <Link href="/blog/hobby&quot; className="inline-flex items-center text-violet-400 hover:text-violet-300 mb-8&quot;>
            <span className="mr-2&quot;>←</span>
            Back to Hobby Dimension
          </Link>

          <div className="mb-12&quot;>
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-violet-400 to-purple-500 bg-clip-text text-transparent mb-4&quot;>
              Photography
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl&quot;>
              Explore photography techniques and projects for capturing the world around you. From macro details to sweeping landscapes, discover how to create compelling images with any camera.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8&quot;>
            {photographyProjects.map((project) => (
              <article 
                key={project.id}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-lg rounded-2xl overflow-hidden border border-violet-700/50 hover:border-violet-500/70 transition-all duration-500 transform hover:-translate-y-2&quot;
              >
                <div className="h-48 bg-gradient-to-r from-violet-600/20 to-purple-600/20 relative&quot;>
                  <div className="absolute inset-0 flex items-center justify-center&quot;>
                    <div className="w-24 h-24 rounded-full bg-gradient-to-r from-violet-500 to-purple-500 flex items-center justify-center text-3xl&quot;>
                      📸
                    </div>
                  </div>
                </div>
                <div className="p-6&quot;>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-violet-300 transition-colors&quot;>
                    <Link href={`/blog/hobby/photography/${project.id}`} className="hover:text-violet-300 transition-colors&quot;>
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
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-violet-600 to-purple-600 text-white rounded-lg font-semibold hover:from-violet-700 hover:to-purple-700 transition-all duration-300&quot;
            >
              ← Back to Hobby Dimension
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}