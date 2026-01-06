import React from &apos;react&apos;;
import Head from &apos;next/head&apos;;
import Link from &apos;next/link&apos;;

export default function DesignSystemsIndex() {
  // Sample design systems articles
  const designSystemsArticles = [
    { id: &apos;ai-powered-design-systems&apos;, title: &apos;AI-Powered Design Systems: The Next Evolution&apos;, date: &apos;Dec 15, 2025&apos;, excerpt: &apos;How artificial intelligence is revolutionizing design systems and component libraries for more consistent and efficient UI development.&apos; },
    { id: &apos;cross-platform-design-systems&apos;, title: &apos;Cross-Platform Design Systems: Unified Experiences&apos;, date: &apos;Dec 10, 2025&apos;, excerpt: &apos;Creating cohesive design systems that work seamlessly across web, mobile, desktop, and emerging platform ecosystems.&apos; },
    { id: &apos;design-tokens-scalability&apos;, title: &apos;Design Tokens for Scalability: Managing Visual Consistency&apos;, date: &apos;Dec 5, 2025&apos;, excerpt: &apos;Implementing design tokens to maintain visual consistency across large-scale products and distributed design teams.&apos; },
    { id: &apos;component-architecture-patterns&apos;, title: &apos;Component Architecture Patterns: Building Flexible UIs&apos;, date: &apos;Nov 30, 2025&apos;, excerpt: &apos;Effective patterns for organizing and structuring UI components to maximize reusability and maintainability.&apos; },
    { id: &apos;design-system-governance&apos;, title: &apos;Design System Governance: Ensuring Adoption and Evolution&apos;, date: &apos;Nov 25, 2025&apos;, excerpt: &apos;Strategies for managing design system governance, stakeholder alignment, and continuous improvement processes.&apos; }
  ];

  return (
    <>
      <Head>
        <title>Design Systems | Aesthetic Forge</title>
        <meta name="description&quot; content="Explore design system methodologies, component libraries, and scalable design practices for consistent and efficient product development.&quot; />
        <meta name="keywords&quot; content="design systems, component libraries, design tokens, scalability, consistency&quot; />
      </Head>

      <div className="min-h-screen bg-white text-black&quot;>
        <div className="container mx-auto px-4 py-12 max-w-6xl&quot;>
          <Link href="/blog/design&quot; className="inline-flex items-center text-rose-600 hover:text-rose-800 mb-8&quot;>
            <span className="mr-2&quot;>←</span>
            Back to Aesthetic Forge
          </Link>

          <div className="mb-12&quot;>
            <h1 className="text-4xl md:text-5xl font-bold text-black mb-4&quot;>
              Design Systems
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl&quot;>
              Explore design system methodologies, component libraries, and scalable design practices for consistent and efficient product development.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8&quot;>
            {designSystemsArticles.map((article) => (
              <article 
                key={article.id}
                className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300&quot;
              >
                <div className="p-6&quot;>
                  <h3 className="text-xl font-bold mb-3 text-black hover:text-rose-700 transition-colors&quot;>
                    <Link href={`/blog/design/design-systems/${article.id}`}>
                      {article.title}
                    </Link>
                  </h3>
                  <p className="text-gray-700 mb-4&quot;>
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between&quot;>
                    <span className="text-gray-500 text-sm&quot;>{article.date}</span>
                    <Link 
                      href={`/blog/design/design-systems/${article.id}`}
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