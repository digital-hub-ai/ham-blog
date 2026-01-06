import React from &apos;react&apos;;
import Head from &apos;next/head&apos;;
import Link from &apos;next/link&apos;;

export default function UiUxIndex() {
  // Sample UI/UX design articles
  const uiUxArticles = [
    { id: &apos;figma-vs-sketch-vs-penpot-2025-ultimate-ui-ux-platform-showdown&apos;, title: &apos;Figma vs. Sketch vs. Penpot: The Ultimate UI/UX Platform Showdown&apos;, date: &apos;Nov 19, 2025&apos;, excerpt: &apos;Comprehensive comparison of Figma, Sketch, and Penpot in 2025. Features, pricing, performance, and which UI/UX design platform is right for your team.&apos; },
    { id: &apos;ai-powered-design-systems&apos;, title: &apos;AI-Powered Design Systems: The Next Evolution&apos;, date: &apos;Dec 15, 2025&apos;, excerpt: &apos;How artificial intelligence is revolutionizing design systems and component libraries for more consistent and efficient UI development.&apos; },
    { id: &apos;dark-mode-best-practices&apos;, title: &apos;Dark Mode Best Practices: Designing for All Conditions&apos;, date: &apos;Dec 10, 2025&apos;, excerpt: &apos;Essential guidelines for implementing dark mode that enhances user experience without compromising accessibility or functionality.&apos; },
    { id: &apos;microinteractions-that-delight&apos;, title: &apos;Microinteractions That Delight: Small Details, Big Impact&apos;, date: &apos;Dec 5, 2025&apos;, excerpt: &apos;The art and science of crafting microinteractions that enhance usability and create memorable user experiences.&apos; },
    { id: &apos;voice-user-interface-design&apos;, title: &apos;Voice User Interface Design: Conversational UX Principles&apos;, date: &apos;Nov 30, 2025&apos;, excerpt: &apos;Designing intuitive voice interfaces that feel natural and enhance user interactions with voice-enabled products.&apos; }
  ];
  return (
    <>
      <Head>
        <title>UI/UX Design | Aesthetic Forge</title>
        <meta name="description&quot; content="Explore the latest UI/UX design trends, tools, and best practices for creating exceptional user experiences.&quot; />
        <meta name="keywords&quot; content="UI design, UX design, user experience, user interface, design tools, design systems&quot; />
      </Head>

      <div className="min-h-screen bg-white text-black&quot;>
        <div className="container mx-auto px-4 py-12 max-w-6xl&quot;>
          <Link href="/blog/design&quot; className="inline-flex items-center text-rose-600 hover:text-rose-800 mb-8&quot;>
            <span className="mr-2&quot;>←</span>
            Back to Aesthetic Forge
          </Link>

          <div className="mb-12&quot;>
            <h1 className="text-4xl md:text-5xl font-bold text-black mb-4&quot;>
              UI/UX Design
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl&quot;>
              Explore the latest UI/UX design trends, tools, and best practices for creating exceptional user experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8&quot;>
            {uiUxArticles.map((article) => (
              <article 
                key={article.id}
                className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300&quot;
              >
                <div className="p-6&quot;>
                  <h3 className="text-xl font-bold mb-3 text-black hover:text-rose-700 transition-colors&quot;>
                    <Link href={`/blog/design/ui-ux/${article.id}`}>
                      {article.title}
                    </Link>
                  </h3>
                  <p className="text-gray-700 mb-4&quot;>
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between&quot;>
                    <span className="text-gray-500 text-sm&quot;>{article.date}</span>
                    <Link 
                      href={`/blog/design/ui-ux/${article.id}`}
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