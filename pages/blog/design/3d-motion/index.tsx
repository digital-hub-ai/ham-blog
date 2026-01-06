import React from &apos;react&apos;;
import Head from &apos;next/head&apos;;
import Link from &apos;next/link&apos;;

export default function Motion3dIndex() {
  // Sample 3D & Motion design articles
  const motion3dArticles = [
    { id: &apos;holographic-ui&apos;, title: &apos;Holographic User Interfaces: Designing in 3D Space&apos;, date: &apos;Dec 17, 2025&apos;, excerpt: &apos;The challenges and opportunities of creating interfaces for augmented and mixed reality environments.&apos; },
    { id: &apos;cinematic-animation-principles&apos;, title: &apos;Cinematic Animation Principles for Digital Experiences&apos;, date: &apos;Dec 13, 2025&apos;, excerpt: &apos;Applying film industry techniques to create compelling motion graphics and animated user interfaces that tell stories.&apos; },
    { id: &apos;real-time-rendering-optimization&apos;, title: &apos;Real-Time Rendering Optimization: Performance and Quality Balance&apos;, date: &apos;Dec 7, 2025&apos;, excerpt: &apos;Techniques for achieving high-quality 3D visuals while maintaining smooth performance across devices and platforms.&apos; },
    { id: &apos;spatial-audio-design&apos;, title: &apos;Spatial Audio Design: Sound as a Dimension&apos;, date: &apos;Dec 2, 2025&apos;, excerpt: &apos;Creating immersive audio experiences that complement visual design and enhance user engagement in 3D environments.&apos; },
    { id: &apos;procedural-animation-systems&apos;, title: &apos;Procedural Animation Systems: Dynamic Movement Generation&apos;, date: &apos;Nov 27, 2025&apos;, excerpt: &apos;Using algorithms and physics simulations to create realistic and adaptive animations that respond to user interactions.&apos; }
  ];  return (
    <>
      <Head>
        <title>3D & Motion Design | Aesthetic Forge</title>
        <meta name="description&quot; content="Explore 3D modeling, animation, and motion graphics techniques for creating dynamic and immersive visual experiences.&quot; />
        <meta name="keywords&quot; content="3D design, motion graphics, animation, AR, VR, spatial design&quot; />
      </Head>

      <div className="min-h-screen bg-white text-black&quot;>
        <div className="container mx-auto px-4 py-12 max-w-6xl&quot;>
          <Link href="/blog/design&quot; className="inline-flex items-center text-rose-600 hover:text-rose-800 mb-8&quot;>
            <span className="mr-2&quot;>←</span>
            Back to Aesthetic Forge
          </Link>

          <div className="mb-12&quot;>
            <h1 className="text-4xl md:text-5xl font-bold text-black mb-4&quot;>
              3D & Motion Design
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl&quot;>
              Explore 3D modeling, animation, and motion graphics techniques for creating dynamic and immersive visual experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8&quot;>
            {motion3dArticles.map((article) => (
              <article 
                key={article.id}
                className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300&quot;
              >
                <div className="p-6&quot;>
                  <h3 className="text-xl font-bold mb-3 text-black hover:text-rose-700 transition-colors&quot;>
                    <Link href={`/blog/design/3d-motion/${article.id}`}>
                      {article.title}
                    </Link>
                  </h3>
                  <p className="text-gray-700 mb-4&quot;>
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between&quot;>
                    <span className="text-gray-500 text-sm&quot;>{article.date}</span>
                    <Link 
                      href={`/blog/design/3d-motion/${article.id}`}
                      className="text-rose-600 hover:text-rose-800 text-sm&quot;
                    >
                      Read Guide →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-12 text-center&quot;>
            <Link 
              href="/blog/design&quot;
              className="inline-flex items-center px-6 py-3 bg-rose-600 text-white rounded-lg font-semibold hover:bg-rose-700 transition-all duration-300&quot;
            >
              ← Back to Design Cosmos
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}