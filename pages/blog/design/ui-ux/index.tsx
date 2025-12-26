import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function UiUxIndex() {
  // Sample UI/UX design articles
  const uiUxArticles = [
    { id: 'figma-vs-sketch-vs-penpot-2025-ultimate-ui-ux-platform-showdown', title: 'Figma vs. Sketch vs. Penpot: The Ultimate UI/UX Platform Showdown', date: 'Nov 19, 2025', excerpt: 'Comprehensive comparison of Figma, Sketch, and Penpot in 2025. Features, pricing, performance, and which UI/UX design platform is right for your team.' },
    { id: 'ai-powered-design-systems', title: 'AI-Powered Design Systems: The Next Evolution', date: 'Dec 15, 2025', excerpt: 'How artificial intelligence is revolutionizing design systems and component libraries for more consistent and efficient UI development.' },
    { id: 'dark-mode-best-practices', title: 'Dark Mode Best Practices: Designing for All Conditions', date: 'Dec 10, 2025', excerpt: 'Essential guidelines for implementing dark mode that enhances user experience without compromising accessibility or functionality.' },
    { id: 'microinteractions-that-delight', title: 'Microinteractions That Delight: Small Details, Big Impact', date: 'Dec 5, 2025', excerpt: 'The art and science of crafting microinteractions that enhance usability and create memorable user experiences.' },
    { id: 'voice-user-interface-design', title: 'Voice User Interface Design: Conversational UX Principles', date: 'Nov 30, 2025', excerpt: 'Designing intuitive voice interfaces that feel natural and enhance user interactions with voice-enabled products.' }
  ];
  return (
    <>
      <Head>
        <title>UI/UX Design | Aesthetic Forge</title>
        <meta name="description" content="Explore the latest UI/UX design trends, tools, and best practices for creating exceptional user experiences." />
        <meta name="keywords" content="UI design, UX design, user experience, user interface, design tools, design systems" />
      </Head>

      <div className="min-h-screen bg-white text-black">
        <div className="container mx-auto px-4 py-12 max-w-6xl">
          <Link href="/blog/design" className="inline-flex items-center text-rose-600 hover:text-rose-800 mb-8">
            <span className="mr-2">←</span>
            Back to Aesthetic Forge
          </Link>

          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">
              UI/UX Design
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl">
              Explore the latest UI/UX design trends, tools, and best practices for creating exceptional user experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {uiUxArticles.map((article) => (
              <article 
                key={article.id}
                className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300"
              >
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-black hover:text-rose-700 transition-colors">
                    <Link href={`/blog/design/ui-ux/${article.id}`}>
                      {article.title}
                    </Link>
                  </h3>
                  <p className="text-gray-700 mb-4">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-500 text-sm">{article.date}</span>
                    <Link 
                      href={`/blog/design/ui-ux/${article.id}`}
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