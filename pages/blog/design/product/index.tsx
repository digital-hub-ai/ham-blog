import React from &apos;react&apos;;
import Head from &apos;next/head&apos;;
import Link from &apos;next/link&apos;;

export default function ProductDesignIndex() {
  // Sample product design articles
  const productDesignArticles = [
    { id: &apos;sustainable-design-principles&apos;, title: &apos;Sustainable Design Principles: Eco-Conscious Product Creation&apos;, date: &apos;Dec 18, 2025&apos;, excerpt: &apos;Building products that communicate environmental responsibility and resonate with conscious consumers.&apos; },    { id: &apos;human-centered-iot&apos;, title: &apos;Human-Centered IoT Design: Connecting Things Thoughtfully&apos;, date: &apos;Dec 11, 2025&apos;, excerpt: &apos;Designing interconnected products that enhance human experiences while respecting privacy and cognitive load.&apos; },
    { id: &apos;inclusive-design-practices&apos;, title: &apos;Inclusive Design Practices: Accessibility for All Users&apos;, date: &apos;Dec 6, 2025&apos;, excerpt: &apos;Creating products that are usable by people with diverse abilities, ages, and cultural backgrounds from the outset.&apos; },
    { id: &apos;material-innovation-2025&apos;, title: &apos;Material Innovation in 2025: Smart Surfaces and Adaptive Textures&apos;, date: &apos;Dec 1, 2025&apos;, excerpt: &apos;Exploring cutting-edge materials that respond to environmental conditions and user interactions for next-generation products.&apos; },
    { id: &apos;design-for-manufacturing&apos;, title: &apos;Design for Manufacturing Excellence: Efficiency and Quality&apos;, date: &apos;Nov 26, 2025&apos;, excerpt: &apos;Optimizing product designs for streamlined manufacturing processes while maintaining quality and design integrity.&apos; }
  ];

  return (
    <>
      <Head>
        <title>Product Design | Aesthetic Forge</title>
        <meta name="description&quot; content="Explore industrial design, user experience, and innovation strategies for creating meaningful and functional physical products.&quot; />
        <meta name="keywords&quot; content="product design, industrial design, UX design, innovation, manufacturing&quot; />
      </Head>

      <div className="min-h-screen bg-white text-black&quot;>
        <div className="container mx-auto px-4 py-12 max-w-6xl&quot;>
          <Link href="/blog/design&quot; className="inline-flex items-center text-rose-600 hover:text-rose-800 mb-8&quot;>
            <span className="mr-2&quot;>←</span>
            Back to Aesthetic Forge
          </Link>

          <div className="mb-12&quot;>
            <h1 className="text-4xl md:text-5xl font-bold text-black mb-4&quot;>
              Product Design
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl&quot;>
              Explore industrial design, user experience, and innovation strategies for creating meaningful and functional physical products.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8&quot;>
            {productDesignArticles.map((article) => (
              <article 
                key={article.id}
                className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300&quot;
              >
                <div className="p-6&quot;>
                  <h3 className="text-xl font-bold mb-3 text-black hover:text-rose-700 transition-colors&quot;>
                    <Link href={`/blog/design/product/${article.id}`}>
                      {article.title}
                    </Link>
                  </h3>
                  <p className="text-gray-700 mb-4&quot;>
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between&quot;>
                    <span className="text-gray-500 text-sm&quot;>{article.date}</span>
                    <Link 
                      href={`/blog/design/product/${article.id}`}
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