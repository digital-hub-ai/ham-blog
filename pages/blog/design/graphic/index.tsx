import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function GraphicDesignIndex() {
  // Sample graphic design articles
  const graphicDesignArticles = [
    { id: 'quantum-interface-design', title: 'Quantum Interface Design: Redefining Digital Interaction', date: 'Dec 20, 2025', excerpt: 'Exploring how quantum computing principles can inspire revolutionary user interface paradigms and visual languages.' },
    { id: 'generative-art-algorithms', title: 'Generative Art Algorithms: Code as Creative Partner', date: 'Dec 14, 2025', excerpt: 'Harnessing algorithmic processes to create unique visual compositions that evolve and adapt in real-time.' },
    { id: 'typography-in-2025', title: 'Typography in 2025: Variable Fonts and Expressive Letterforms', date: 'Dec 9, 2025', excerpt: 'The evolution of typography in the digital age with variable fonts, responsive lettering, and kinetic type.' },
    { id: 'color-psychology-digital', title: 'Color Psychology in the Digital Age: Emotional Resonance', date: 'Dec 4, 2025', excerpt: 'Understanding how color influences digital experiences and creates emotional connections with users across cultures.' },
    { id: 'minimalism-luxe', title: 'Minimalism in 2025: Less is Luxe', date: 'Nov 29, 2025', excerpt: 'The sophistication of restraint in contemporary graphic design and how simplicity creates powerful visual impact.' }
  ];

  return (
    <>
      <Head>
        <title>Graphic Design | Aesthetic Forge</title>
        <meta name="description" content="Explore contemporary graphic design techniques, trends, and creative approaches for impactful visual communication." />
        <meta name="keywords" content="graphic design, visual communication, typography, color theory, design trends" />
      </Head>

      <div className="min-h-screen bg-white text-black">
        <div className="container mx-auto px-4 py-12 max-w-6xl">
          <Link href="/blog/design" className="inline-flex items-center text-rose-600 hover:text-rose-800 mb-8">
            <span className="mr-2">←</span>
            Back to Aesthetic Forge
          </Link>

          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">
              Graphic Design
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl">
              Explore contemporary graphic design techniques, trends, and creative approaches for impactful visual communication.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {graphicDesignArticles.map((article) => (
              <article 
                key={article.id}
                className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300"
              >
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-black hover:text-rose-700 transition-colors">
                    <Link href={`/blog/design/graphic/${article.id}`}>
                      {article.title}
                    </Link>
                  </h3>
                  <p className="text-gray-700 mb-4">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-500 text-sm">{article.date}</span>
                    <Link 
                      href={`/blog/design/graphic/${article.id}`}
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