import React from &apos;react&apos;;
import Head from &apos;next/head&apos;;
import Link from &apos;next/link&apos;;

export default function CreativityIndex() {
  // Creative skills guides data
  const creativityGuides = [
    {
      id: &apos;creative-writing-mastery&apos;,
      title: &apos;Creative Writing Mastery: From Idea to Published Work&apos;,
      excerpt: &apos;Develop your writing skills with techniques that will transform your ideas into compelling stories.&apos;,
      date: &apos;Dec 22, 2025&apos;,
      author: &apos;Author Maya Story&apos;,
      readTime: &apos;24 min read&apos;,
      tags: [&apos;Writing&apos;, &apos;Creativity&apos;, &apos;Storytelling&apos;]
    },
    {
      id: &apos;digital-art-techniques&apos;,
      title: &apos;Digital Art Techniques: Mastering Modern Creative Tools&apos;,
      excerpt: &apos;Learn professional digital art techniques using the latest software and creative approaches.&apos;,
      date: &apos;Dec 21, 2025&apos;,
      author: &apos;Digital Artist Alex Canvas&apos;,
      readTime: &apos;22 min read&apos;,
      tags: [&apos;Digital Art&apos;, &apos;Techniques&apos;, &apos;Creativity&apos;]
    },
    {
      id: &apos;photography-basics-advanced&apos;,
      title: &apos;Photography: From Basics to Advanced Techniques&apos;,
      excerpt: &apos;Master the technical and artistic aspects of photography to create stunning visual content.&apos;,
      date: &apos;Dec 20, 2025&apos;,
      author: &apos;Photographer Jordan Lens&apos;,
      readTime: &apos;26 min read&apos;,
      tags: [&apos;Photography&apos;, &apos;Basics&apos;, &apos;Advanced&apos;]
    },
    {
      id: &apos;music-production-fundamentals&apos;,
      title: &apos;Music Production: Essential Skills for Modern Musicians&apos;,
      excerpt: &apos;Learn the fundamentals of music production and develop your unique creative sound.&apos;,
      date: &apos;Dec 19, 2025&apos;,
      author: &apos;Producer Casey Sound&apos;,
      readTime: &apos;20 min read&apos;,
      tags: [&apos;Music&apos;, &apos;Production&apos;, &apos;Audio&apos;]
    },
    {
      id: &apos;design-thinking-process&apos;,
      title: &apos;Design Thinking: Creative Problem-Solving for Innovation&apos;,
      excerpt: &apos;Apply design thinking principles to solve complex problems with creative solutions.&apos;,
      date: &apos;Dec 18, 2025&apos;,
      author: &apos;Designer Taylor Innovation&apos;,
      readTime: &apos;28 min read&apos;,
      tags: [&apos;Design&apos;, &apos;Innovation&apos;, &apos;Problem-Solving&apos;]
    },
    {
      id: &apos;crafting-your-creative-identity&apos;,
      title: &apos;Crafting Your Creative Identity: Finding Your Unique Voice&apos;,
      excerpt: &apos;Discover and develop your personal creative style that will set you apart from others.&apos;,
      date: &apos;Dec 17, 2025&apos;,
      author: &apos;Creative Director Sam Vision&apos;,
      readTime: &apos;30 min read&apos;,
      tags: [&apos;Creativity&apos;, &apos;Identity&apos;, &apos;Style&apos;]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-green-900 to-black text-white&quot;>
      <Head>
        <title>Creative Skills - Knowledge Compendium</title>
        <meta name="description&quot; content="Develop your creative skills with comprehensive guides and expert insights.&quot; />
      </Head>

      <div className="container mx-auto px-4 py-12 max-w-6xl&quot;>
        <div className="text-center mb-12&quot;>
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-400 to-teal-500 bg-clip-text text-transparent mb-4&quot;>
            Creative Skills
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto&quot;>
            Develop your creative skills with comprehensive guides and expert insights.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8&quot;>
          {creativityGuides.map((guide) => (
            <article 
              key={guide.id}
              className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-lg rounded-2xl overflow-hidden border border-green-700/50 hover:border-green-500/70 transition-all duration-500 transform hover:-translate-y-2&quot;
            >
              <div className="h-48 bg-gradient-to-r from-green-600/20 to-teal-600/20 relative&quot;>
                <div className="absolute inset-0 flex items-center justify-center&quot;>
                  <div className="w-24 h-24 rounded-full bg-gradient-to-r from-green-500 to-teal-500 flex items-center justify-center text-3xl&quot;>
                    🎨
                  </div>
                </div>
              </div>
              <div className="p-6&quot;>
                <div className="flex flex-wrap gap-2 mb-4&quot;>
                  {guide.tags.map((tag, index) => (
                    <span key={index} className="px-2 py-1 bg-green-900/30 text-green-300 text-xs rounded-full border border-green-700/50&quot;>
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-green-300 transition-colors&quot;>
                  <Link href={`/blog/guides/creativity/${guide.id}`} className="hover:text-green-300 transition-colors&quot;>
                    {guide.title}
                  </Link>
                </h3>
                <p className="text-gray-400 mb-4&quot;>
                  {guide.excerpt}
                </p>
                <div className="flex items-center justify-between&quot;>
                  <span className="text-gray-500 text-sm&quot;>By {guide.author}</span>
                  <div className="text-right&quot;>
                    <span className="text-gray-500 text-sm block&quot;>{guide.date}</span>
                    <span className="text-gray-500 text-sm&quot;>{guide.readTime}</span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center&quot;>
          <Link 
            href="/blog/guides&quot;
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-600 to-teal-600 text-white rounded-lg font-semibold hover:from-green-700 hover:to-teal-700 transition-all duration-300&quot;
          >
            ← Back to Knowledge Compendium
          </Link>
        </div>
      </div>
    </div>
  );
}