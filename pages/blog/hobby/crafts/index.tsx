import React from &apos;react&apos;;
import Head from &apos;next/head&apos;;
import Link from &apos;next/link&apos;;

export default function CraftsIndex() {
  // Arts & Crafts projects
  const craftProjects = [
    { 
      id: &apos;watercolor-techniques&apos;, 
      title: &apos;Watercolor Techniques: Master the Flow of Pigment and Water&apos;, 
      excerpt: &apos;Learn essential watercolor techniques to create beautiful, flowing artworks with depth and dimension.&apos;,
      date: &apos;Dec 21, 2025&apos;,
      author: &apos;Artist Jordan Brush&apos;,
      readTime: &apos;16 min read&apos;
    },
    { 
      id: &apos;knitting-projects&apos;, 
      title: &apos;Knitting Projects: From Scarves to Complex Patterns&apos;, 
      excerpt: &apos;Step-by-step guides for knitters of all skill levels, from basic stitches to intricate designs.&apos;,
      date: &apos;Dec 20, 2025&apos;,
      author: &apos;Artisan Sam Stitch&apos;,
      readTime: &apos;18 min read&apos;
    },
    { 
      id: &apos;pottery-beginners&apos;, 
      title: &apos;Pottery for Beginners: Shaping Clay into Functional Art&apos;, 
      excerpt: &apos;Introduction to pottery techniques, tools, and processes for creating beautiful, functional ceramic pieces.&apos;,
      date: &apos;Dec 19, 2025&apos;,
      author: &apos;Ceramist Taylor Clay&apos;,
      readTime: &apos;17 min read&apos;
    },
    { 
      id: &apos;scrapbooking-memories&apos;, 
      title: &apos;Scrapbooking Memories: Preserving Life Through Creative Design&apos;, 
      excerpt: &apos;Techniques for creating meaningful scrapbooks that preserve memories with artistic flair.&apos;,
      date: &apos;Dec 18, 2025&apos;,
      author: &apos;Designer Casey Memory&apos;,
      readTime: &apos;15 min read&apos;
    },
    { 
      id: &apos;macrame-wall-hangings&apos;, 
      title: &apos;Macrame Wall Hangings: Creating Textured Art with Knots&apos;, 
      excerpt: &apos;Learn traditional macrame knots to create beautiful wall hangings and home décor pieces.&apos;,
      date: &apos;Dec 17, 2025&apos;,
      author: &apos;Artisan Riley Knot&apos;,
      readTime: &apos;14 min read&apos;
    },
    { 
      id: &apos;jewelry-making&apos;, 
      title: &apos;Jewelry Making: Crafting Personal Accessories with Style&apos;, 
      excerpt: &apos;Explore various techniques for creating unique jewelry pieces from wire wrapping to beadwork.&apos;,
      date: &apos;Dec 16, 2025&apos;,
      author: &apos;Designer Morgan Shine&apos;,
      readTime: &apos;19 min read&apos;
    }
  ];

  return (
    <>
      <Head>
        <title>Arts & Crafts | Hobby Dimension</title>
        <meta name="description&quot; content="Explore creative arts and crafts projects for all skill levels.&quot; />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-black text-white&quot;>
        <div className="container mx-auto px-4 py-12 max-w-6xl&quot;>
          <Link href="/blog/hobby&quot; className="inline-flex items-center text-purple-400 hover:text-purple-300 mb-8&quot;>
            <span className="mr-2&quot;>←</span>
            Back to Hobby Dimension
          </Link>

          <div className="mb-12&quot;>
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent mb-4&quot;>
              Arts & Crafts
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl&quot;>
              Explore creative arts and crafts projects for all skill levels. From traditional techniques to modern innovations, discover new ways to express your artistic side.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8&quot;>
            {craftProjects.map((project) => (
              <article 
                key={project.id}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-lg rounded-2xl overflow-hidden border border-purple-700/50 hover:border-purple-500/70 transition-all duration-500 transform hover:-translate-y-2&quot;
              >
                <div className="h-48 bg-gradient-to-r from-purple-600/20 to-pink-600/20 relative&quot;>
                  <div className="absolute inset-0 flex items-center justify-center&quot;>
                    <div className="w-24 h-24 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-3xl&quot;>
                      ✂️
                    </div>
                  </div>
                </div>
                <div className="p-6&quot;>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-purple-300 transition-colors&quot;>
                    <Link href={`/blog/hobby/crafts/${project.id}`} className="hover:text-purple-300 transition-colors&quot;>
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
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300&quot;
            >
              ← Back to Hobby Dimension
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}