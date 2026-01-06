import React from &apos;react&apos;;
import Head from &apos;next/head&apos;;
import Link from &apos;next/link&apos;;

export default function CollectingIndex() {
  // Collecting projects
  const collectingProjects = [
    { 
      id: &apos;coin-collecting&apos;, 
      title: &apos;Coin Collecting: Building a Numismatic Portfolio&apos;, 
      excerpt: &apos;Learn the fundamentals of coin collecting, from identifying valuable pieces to proper storage techniques.&apos;,
      date: &apos;Dec 21, 2025&apos;,
      author: &apos;Numismatist Alex Treasury&apos;,
      readTime: &apos;16 min read&apos;
    },
    { 
      id: &apos;vintage-comics&apos;, 
      title: &apos;Vintage Comic Collection: Preserving Pop Culture History&apos;, 
      excerpt: &apos;Guide to building and maintaining a valuable comic book collection with preservation tips.&apos;,
      date: &apos;Dec 20, 2025&apos;,
      author: &apos;Collector Taylor Panels&apos;,
      readTime: &apos;18 min read&apos;
    },
    { 
      id: &apos;antique-toys&apos;, 
      title: &apos;Antique Toy Collecting: Preserving Childhood Memories&apos;, 
      excerpt: &apos;Explore the world of vintage toy collecting, from identification to authentication techniques.&apos;,
      date: &apos;Dec 19, 2025&apos;,
      author: &apos;Toy Expert Casey Memory&apos;,
      readTime: &apos;17 min read&apos;
    },
    { 
      id: &apos;stamp-collecting&apos;, 
      title: &apos;Stamp Collecting: The Art of Philately&apos;, 
      excerpt: &apos;Comprehensive guide to stamp collecting, including country specialties and thematic collections.&apos;,
      date: &apos;Dec 18, 2025&apos;,
      author: &apos;Philatelist Riley Post&apos;,
      readTime: &apos;15 min read&apos;
    },
    { 
      id: &apos;vintage-cards&apos;, 
      title: &apos;Vintage Trading Card Collection: From Baseball to Modern Sets&apos;, 
      excerpt: &apos;Build a valuable trading card collection with expert advice on grading and storage.&apos;,
      date: &apos;Dec 17, 2025&apos;,
      author: &apos;Card Specialist Morgan Pack&apos;,
      readTime: &apos;19 min read&apos;
    },
    { 
      id: &apos;collectible-figures&apos;, 
      title: &apos;Collectible Figure Market: Action Figures to Articulated Dolls&apos;, 
      excerpt: &apos;Navigate the collectible figure market with tips on identifying rare pieces and proper care.&apos;,
      date: &apos;Dec 16, 2025&apos;,
      author: &apos;Figure Collector Jordan Box&apos;,
      readTime: &apos;14 min read&apos;
    }
  ];

  return (
    <>
      <Head>
        <title>Collecting | Hobby Dimension</title>
        <meta name="description&quot; content="Explore collecting hobbies and projects for building valuable collections.&quot; />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-amber-900 to-black text-white&quot;>
        <div className="container mx-auto px-4 py-12 max-w-6xl&quot;>
          <Link href="/blog/hobby&quot; className="inline-flex items-center text-amber-400 hover:text-amber-300 mb-8&quot;>
            <span className="mr-2&quot;>←</span>
            Back to Hobby Dimension
          </Link>

          <div className="mb-12&quot;>
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent mb-4&quot;>
              Collecting
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl&quot;>
              Explore collecting hobbies and projects for building valuable collections. From vintage treasures to modern rarities, discover the joy of curating meaningful items.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8&quot;>
            {collectingProjects.map((project) => (
              <article 
                key={project.id}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-lg rounded-2xl overflow-hidden border border-amber-700/50 hover:border-amber-500/70 transition-all duration-500 transform hover:-translate-y-2&quot;
              >
                <div className="h-48 bg-gradient-to-r from-amber-600/20 to-orange-600/20 relative&quot;>
                  <div className="absolute inset-0 flex items-center justify-center&quot;>
                    <div className="w-24 h-24 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 flex items-center justify-center text-3xl&quot;>
                      🗂️
                    </div>
                  </div>
                </div>
                <div className="p-6&quot;>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-amber-300 transition-colors&quot;>
                    <Link href={`/blog/hobby/collecting/${project.id}`} className="hover:text-amber-300 transition-colors&quot;>
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
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-amber-600 to-orange-600 text-white rounded-lg font-semibold hover:from-amber-700 hover:to-orange-700 transition-all duration-300&quot;
            >
              ← Back to Hobby Dimension
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}