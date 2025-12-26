import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function ProductDesignIndex() {
  // Sample product design articles
  const productDesignArticles = [
    { id: 'sustainable-design-principles', title: 'Sustainable Design Principles: Eco-Conscious Product Creation', date: 'Dec 18, 2025', excerpt: 'Building products that communicate environmental responsibility and resonate with conscious consumers.' },    { id: 'human-centered-iot', title: 'Human-Centered IoT Design: Connecting Things Thoughtfully', date: 'Dec 11, 2025', excerpt: 'Designing interconnected products that enhance human experiences while respecting privacy and cognitive load.' },
    { id: 'inclusive-design-practices', title: 'Inclusive Design Practices: Accessibility for All Users', date: 'Dec 6, 2025', excerpt: 'Creating products that are usable by people with diverse abilities, ages, and cultural backgrounds from the outset.' },
    { id: 'material-innovation-2025', title: 'Material Innovation in 2025: Smart Surfaces and Adaptive Textures', date: 'Dec 1, 2025', excerpt: 'Exploring cutting-edge materials that respond to environmental conditions and user interactions for next-generation products.' },
    { id: 'design-for-manufacturing', title: 'Design for Manufacturing Excellence: Efficiency and Quality', date: 'Nov 26, 2025', excerpt: 'Optimizing product designs for streamlined manufacturing processes while maintaining quality and design integrity.' }
  ];

  return (
    <>
      <Head>
        <title>Product Design | Aesthetic Forge</title>
        <meta name="description" content="Explore industrial design, user experience, and innovation strategies for creating meaningful and functional physical products." />
        <meta name="keywords" content="product design, industrial design, UX design, innovation, manufacturing" />
      </Head>

      <div className="min-h-screen bg-white text-black">
        <div className="container mx-auto px-4 py-12 max-w-6xl">
          <Link href="/blog/design" className="inline-flex items-center text-rose-600 hover:text-rose-800 mb-8">
            <span className="mr-2">←</span>
            Back to Aesthetic Forge
          </Link>

          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">
              Product Design
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl">
              Explore industrial design, user experience, and innovation strategies for creating meaningful and functional physical products.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {productDesignArticles.map((article) => (
              <article 
                key={article.id}
                className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300"
              >
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-black hover:text-rose-700 transition-colors">
                    <Link href={`/blog/design/product/${article.id}`}>
                      {article.title}
                    </Link>
                  </h3>
                  <p className="text-gray-700 mb-4">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-500 text-sm">{article.date}</span>
                    <Link 
                      href={`/blog/design/product/${article.id}`}
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