import React from &apos;react&apos;;
import Head from &apos;next/head&apos;;
import Link from &apos;next/link&apos;;

export default function GraphicDesignIndex() {
  // Sample graphic design articles
  const graphicDesignArticles = [
    { id: &apos;quantum-interface-design&apos;, title: &apos;Quantum Interface Design: Redefining Digital Interaction&apos;, date: &apos;Dec 20, 2025&apos;, excerpt: &apos;Exploring how quantum computing principles can inspire revolutionary user interface paradigms and visual languages.&apos; },
    { id: &apos;generative-art-algorithms&apos;, title: &apos;Generative Art Algorithms: Code as Creative Partner&apos;, date: &apos;Dec 14, 2025&apos;, excerpt: &apos;Harnessing algorithmic processes to create unique visual compositions that evolve and adapt in real-time.&apos; },
    { id: &apos;typography-in-2025&apos;, title: &apos;Typography in 2025: Variable Fonts and Expressive Letterforms&apos;, date: &apos;Dec 9, 2025&apos;, excerpt: &apos;The evolution of typography in the digital age with variable fonts, responsive lettering, and kinetic type.&apos; },
    { id: &apos;color-psychology-digital&apos;, title: &apos;Color Psychology in the Digital Age: Emotional Resonance&apos;, date: &apos;Dec 4, 2025&apos;, excerpt: &apos;Understanding how color influences digital experiences and creates emotional connections with users across cultures.&apos; },
    { id: &apos;minimalism-luxe&apos;, title: &apos;Minimalism in 2025: Less is Luxe&apos;, date: &apos;Nov 29, 2025&apos;, excerpt: &apos;The sophistication of restraint in contemporary graphic design and how simplicity creates powerful visual impact.&apos; }
  ];

  return (
    <>
      <Head>
        <title>Graphic Design | Aesthetic Forge</title>
        <meta name="description&quot; content="Explore contemporary graphic design techniques, trends, and creative approaches for impactful visual communication.&quot; />
        <meta name="keywords&quot; content="graphic design, visual communication, typography, color theory, design trends&quot; />
      </Head>

      <div className="min-h-screen bg-white text-black&quot;>
        <div className="container mx-auto px-4 py-12 max-w-6xl&quot;>
          <Link href="/blog/design&quot; className="inline-flex items-center text-rose-600 hover:text-rose-800 mb-8&quot;>
            <span className="mr-2&quot;>←</span>
            Back to Aesthetic Forge
          </Link>

          <div className="mb-12&quot;>
            <h1 className="text-4xl md:text-5xl font-bold text-black mb-4&quot;>
              Graphic Design
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl&quot;>
              Explore contemporary graphic design techniques, trends, and creative approaches for impactful visual communication.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8&quot;>
            {graphicDesignArticles.map((article) => (
              <article 
                key={article.id}
                className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300&quot;
              >
                <div className="p-6&quot;>
                  <h3 className="text-xl font-bold mb-3 text-black hover:text-rose-700 transition-colors&quot;>
                    <Link href={`/blog/design/graphic/${article.id}`}>
                      {article.title}
                    </Link>
                  </h3>
                  <p className="text-gray-700 mb-4&quot;>
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between&quot;>
                    <span className="text-gray-500 text-sm&quot;>{article.date}</span>
                    <Link 
                      href={`/blog/design/graphic/${article.id}`}
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