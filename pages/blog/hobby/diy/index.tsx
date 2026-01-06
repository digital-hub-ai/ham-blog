import React from &apos;react&apos;;
import Head from &apos;next/head&apos;;
import Link from &apos;next/link&apos;;

export default function DiyIndex() {
  // DIY projects
  const diyProjects = [
    { 
      id: &apos;smart-home-diy&apos;, 
      title: &apos;Smart Home DIY: Build Your Own Automated Lighting System&apos;, 
      excerpt: &apos;Step-by-step guide to creating a custom smart lighting solution using Arduino and IoT sensors.&apos;,
      date: &apos;Dec 21, 2025&apos;,
      author: &apos;Maker Alex Workshop&apos;,
      readTime: &apos;16 min read&apos;
    },
    { 
      id: &apos;custom-furniture&apos;, 
      title: &apos;Custom Furniture Building: Craft Your Own Unique Pieces&apos;, 
      excerpt: &apos;Learn the fundamentals of furniture design and construction to create custom pieces that reflect your personal style.&apos;,
      date: &apos;Dec 20, 2025&apos;,
      author: &apos;Craftsman Taylor Wood&apos;,
      readTime: &apos;18 min read&apos;
    },
    { 
      id: &apos;electronics-prototyping&apos;, 
      title: &apos;Electronics Prototyping: From Breadboard to Circuit Board&apos;, 
      excerpt: &apos;Master the process of designing and building electronic circuits from initial concept to final product.&apos;,
      date: &apos;Dec 19, 2025&apos;,
      author: &apos;Innovator Jordan Circuit&apos;,
      readTime: &apos;20 min read&apos;
    },
    { 
      id: &apos;3d-printing-projects&apos;, 
      title: &apos;3D Printing Projects: Transform Ideas into Physical Objects&apos;, 
      excerpt: &apos;Explore creative applications of 3D printing technology for functional and artistic projects.&apos;,
      date: &apos;Dec 18, 2025&apos;,
      author: &apos;Designer Casey Print&apos;,
      readTime: &apos;17 min read&apos;
    },
    { 
      id: &apos;soldering-workshop&apos;, 
      title: &apos;Soldering Workshop: Master the Art of Electrical Connections&apos;, 
      excerpt: &apos;Comprehensive guide to soldering techniques for electronics enthusiasts and DIY professionals.&apos;,
      date: &apos;Dec 17, 2025&apos;,
      author: &apos;Technician Riley Solder&apos;,
      readTime: &apos;15 min read&apos;
    },
    { 
      id: &apos;arduino-automation&apos;, 
      title: &apos;Arduino Automation: Control Your World with Microcontrollers&apos;, 
      excerpt: &apos;Learn to build automated systems for home, garden, and workshop using Arduino platforms.&apos;,
      date: &apos;Dec 16, 2025&apos;,
      author: &apos;Engineer Morgan Code&apos;,
      readTime: &apos;19 min read&apos;
    }
  ];

  return (
    <>
      <Head>
        <title>DIY Projects | Hobby Dimension</title>
        <meta name="description&quot; content="Explore creative DIY projects and tutorials for makers and tinkerers.&quot; />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-orange-900 to-black text-white&quot;>
        <div className="container mx-auto px-4 py-12 max-w-6xl&quot;>
          <Link href="/blog/hobby&quot; className="inline-flex items-center text-orange-400 hover:text-orange-300 mb-8&quot;>
            <span className="mr-2&quot;>←</span>
            Back to Hobby Dimension
          </Link>

          <div className="mb-12&quot;>
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent mb-4&quot;>
              DIY Projects
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl&quot;>
              Explore creative DIY projects and tutorials for makers and tinkerers. From electronics to woodworking, discover projects that challenge your skills and creativity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8&quot;>
            {diyProjects.map((project) => (
              <article 
                key={project.id}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-lg rounded-2xl overflow-hidden border border-orange-700/50 hover:border-orange-500/70 transition-all duration-500 transform hover:-translate-y-2&quot;
              >
                <div className="h-48 bg-gradient-to-r from-orange-600/20 to-red-600/20 relative&quot;>
                  <div className="absolute inset-0 flex items-center justify-center&quot;>
                    <div className="w-24 h-24 rounded-full bg-gradient-to-r from-orange-500 to-red-500 flex items-center justify-center text-3xl&quot;>
                      🔨
                    </div>
                  </div>
                </div>
                <div className="p-6&quot;>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-orange-300 transition-colors&quot;>
                    <Link href={`/blog/hobby/diy/${project.id}`} className="hover:text-orange-300 transition-colors&quot;>
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
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-lg font-semibold hover:from-orange-700 hover:to-red-700 transition-all duration-300&quot;
            >
              ← Back to Hobby Dimension
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}