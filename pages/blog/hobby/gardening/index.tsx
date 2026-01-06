import React from &apos;react&apos;;
import Head from &apos;next/head&apos;;
import Link from &apos;next/link&apos;;

export default function GardeningIndex() {
  // Gardening projects
  const gardeningProjects = [
    { 
      id: &apos;urban-garden&apos;, 
      title: &apos;Urban Garden Oasis: Maximizing Small Spaces for Maximum Yield&apos;, 
      excerpt: &apos;Transform your apartment balcony into a productive garden with vertical growing techniques.&apos;,
      date: &apos;Dec 21, 2025&apos;,
      author: &apos;Green Thumb Mia&apos;,
      readTime: &apos;16 min read&apos;
    },
    { 
      id: &apos;companion-planting&apos;, 
      title: &apos;Companion Planting: Creating Synergistic Garden Ecosystems&apos;, 
      excerpt: &apos;Learn which plants grow better together and how to maximize your garden productivity naturally.&apos;,
      date: &apos;Dec 20, 2025&apos;,
      author: &apos;Botanist Sam Grow&apos;,
      readTime: &apos;18 min read&apos;
    },
    { 
      id: &apos;hydroponics-system&apos;, 
      title: &apos;Hydroponics System: Soil-Free Growing for Year-Round Harvest&apos;, 
      excerpt: &apos;Build your own hydroponic system for efficient, space-saving gardening indoors.&apos;,
      date: &apos;Dec 19, 2025&apos;,
      author: &apos;Hydro Expert Taylor Flow&apos;,
      readTime: &apos;17 min read&apos;
    },
    { 
      id: &apos;seed-saving&apos;, 
      title: &apos;Seed Saving: Preserving Heritage Varieties and Reducing Costs&apos;, 
      excerpt: &apos;Master the art of saving seeds from your garden to ensure future harvests.&apos;,
      date: &apos;Dec 18, 2025&apos;,
      author: &apos;Seed Keeper Casey Harvest&apos;,
      readTime: &apos;15 min read&apos;
    },
    { 
      id: &apos;permaculture-principles&apos;, 
      title: &apos;Permaculture Principles: Creating Sustainable Garden Systems&apos;, 
      excerpt: &apos;Apply permaculture design to create self-sustaining garden ecosystems.&apos;,
      date: &apos;Dec 17, 2025&apos;,
      author: &apos;Eco Designer Riley Earth&apos;,
      readTime: &apos;19 min read&apos;
    },
    { 
      id: &apos;indoor-herb-garden&apos;, 
      title: &apos;Indoor Herb Garden: Fresh Flavors Year-Round&apos;, 
      excerpt: &apos;Create a thriving indoor herb garden for fresh culinary ingredients anytime.&apos;,
      date: &apos;Dec 16, 2025&apos;,
      author: &apos;Herb Specialist Morgan Leaf&apos;,
      readTime: &apos;14 min read&apos;
    }
  ];

  return (
    <>
      <Head>
        <title>Gardening | Hobby Dimension</title>
        <meta name="description&quot; content="Explore gardening projects and techniques for growing your own food and flowers.&quot; />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-green-900 to-black text-white&quot;>
        <div className="container mx-auto px-4 py-12 max-w-6xl&quot;>
          <Link href="/blog/hobby&quot; className="inline-flex items-center text-green-400 hover:text-green-300 mb-8&quot;>
            <span className="mr-2&quot;>←</span>
            Back to Hobby Dimension
          </Link>

          <div className="mb-12&quot;>
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent mb-4&quot;>
              Gardening
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl&quot;>
              Explore gardening projects and techniques for growing your own food and flowers. From urban container gardens to permaculture principles, discover sustainable growing practices.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8&quot;>
            {gardeningProjects.map((project) => (
              <article 
                key={project.id}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-lg rounded-2xl overflow-hidden border border-green-700/50 hover:border-green-500/70 transition-all duration-500 transform hover:-translate-y-2&quot;
              >
                <div className="h-48 bg-gradient-to-r from-green-600/20 to-emerald-600/20 relative&quot;>
                  <div className="absolute inset-0 flex items-center justify-center&quot;>
                    <div className="w-24 h-24 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center text-3xl&quot;>
                      🌱
                    </div>
                  </div>
                </div>
                <div className="p-6&quot;>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-green-300 transition-colors&quot;>
                    <Link href={`/blog/hobby/gardening/${project.id}`} className="hover:text-green-300 transition-colors&quot;>
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
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-lg font-semibold hover:from-green-700 hover:to-emerald-700 transition-all duration-300&quot;
            >
              ← Back to Hobby Dimension
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}