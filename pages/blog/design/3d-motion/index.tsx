import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function Motion3dIndex() {
  // Sample 3D & Motion design articles
  const motion3dArticles = [
    { id: 'holographic-ui', title: 'Holographic User Interfaces: Designing in 3D Space', date: 'Dec 17, 2025', excerpt: 'The challenges and opportunities of creating interfaces for augmented and mixed reality environments.' },
    { id: 'cinematic-animation-principles', title: 'Cinematic Animation Principles for Digital Experiences', date: 'Dec 13, 2025', excerpt: 'Applying film industry techniques to create compelling motion graphics and animated user interfaces that tell stories.' },
    { id: 'real-time-rendering-optimization', title: 'Real-Time Rendering Optimization: Performance and Quality Balance', date: 'Dec 7, 2025', excerpt: 'Techniques for achieving high-quality 3D visuals while maintaining smooth performance across devices and platforms.' },
    { id: 'spatial-audio-design', title: 'Spatial Audio Design: Sound as a Dimension', date: 'Dec 2, 2025', excerpt: 'Creating immersive audio experiences that complement visual design and enhance user engagement in 3D environments.' },
    { id: 'procedural-animation-systems', title: 'Procedural Animation Systems: Dynamic Movement Generation', date: 'Nov 27, 2025', excerpt: 'Using algorithms and physics simulations to create realistic and adaptive animations that respond to user interactions.' }
  ];  return (
    <>
      <Head>
        <title>3D & Motion Design | Aesthetic Forge</title>
        <meta name="description" content="Explore 3D modeling, animation, and motion graphics techniques for creating dynamic and immersive visual experiences." />
        <meta name="keywords" content="3D design, motion graphics, animation, AR, VR, spatial design" />
      </Head>

      <div className="min-h-screen bg-white text-black">
        <div className="container mx-auto px-4 py-12 max-w-6xl">
          <Link href="/blog/design" className="inline-flex items-center text-rose-600 hover:text-rose-800 mb-8">
            <span className="mr-2">←</span>
            Back to Aesthetic Forge
          </Link>

          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">
              3D & Motion Design
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl">
              Explore 3D modeling, animation, and motion graphics techniques for creating dynamic and immersive visual experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {motion3dArticles.map((article) => (
              <article 
                key={article.id}
                className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300"
              >
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-black hover:text-rose-700 transition-colors">
                    <Link href={`/blog/design/3d-motion/${article.id}`}>
                      {article.title}
                    </Link>
                  </h3>
                  <p className="text-gray-700 mb-4">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-500 text-sm">{article.date}</span>
                    <Link 
                      href={`/blog/design/3d-motion/${article.id}`}
                      className="text-rose-600 hover:text-rose-800 text-sm"
                    >
                      Read Guide →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link 
              href="/blog/design"
              className="inline-flex items-center px-6 py-3 bg-rose-600 text-white rounded-lg font-semibold hover:bg-rose-700 transition-all duration-300"
            >
              ← Back to Design Cosmos
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}