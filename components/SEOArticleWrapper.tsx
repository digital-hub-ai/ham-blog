import React from &apos;react&apos;;
import Head from &apos;next/head&apos;;
import Link from &apos;next/link&apos;;
import { KnowledgeNode } from &apos;../lib/adaptive-stream&apos;;
import StructuredDataFabric from &apos;../lib/structured-data-fabric&apos;;
import SEOAutomationEngine from &apos;../lib/seo-automation&apos;;

interface SEOArticleWrapperProps {
  node?: KnowledgeNode;
  blogPost?: KnowledgeNode;
  children: React.ReactNode;
  instance?: &apos;founder&apos; | &apos;developer&apos; | &apos;designer&apos; | &apos;analyst&apos; | &apos;case-study&apos;;
}

const SEOArticleWrapper: React.FC<SEOArticleWrapperProps> = ({ 
  node, 
  blogPost,
  children, 
  instance = 'developer' 
}) => {
  // Support both node and blogPost props for backward compatibility
  const knowledgeNode = node || blogPost;
  const structuredDataFabric = new StructuredDataFabric();
  const seoEngine = new SEOAutomationEngine();
  
  // Generate all structured data
  const structuredDataList = knowledgeNode ? structuredDataFabric.generateAllStructuredData(knowledgeNode) : [];
  
  // Generate optimized meta tags
  const metaTags = React.useMemo(() => {
    // In production, this would be generated dynamically
    return {
      title: knowledgeNode?.title || &apos;&apos;,
      description: knowledgeNode?.excerpt || &apos;&apos;,
      ogTitle: knowledgeNode?.title || &apos;&apos;,
      ogDescription: knowledgeNode?.excerpt || &apos;&apos;,
      ogImage: knowledgeNode?.images?.[0] || &apos;/api/og/default&apos;,
      twitterTitle: knowledgeNode?.title || &apos;&apos;,
      twitterDescription: knowledgeNode?.excerpt || &apos;&apos;,
      twitterImage: knowledgeNode?.images?.[0] || &apos;/api/og/default&apos;,
      canonical: `https://ai-vault.com/blog/${knowledgeNode?.slug}`,
      robots: &apos;index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1&apos;,
      keywords: knowledgeNode?.tags?.join(&apos;, &apos;) || &apos;&apos;,
    };
  }, [knowledgeNode]);

  // Generate breadcrumbs
  const breadcrumbs = [
    { name: &apos;Home&apos;, url: &apos;https://ai-vault.com&apos; },
    { name: &apos;Blog&apos;, url: &apos;https://ai-vault.com/blog&apos; },
    ...(knowledgeNode ? [
      { name: knowledgeNode.category, url: `https://ai-vault.com/blog/category/${knowledgeNode.category}` },
      { name: knowledgeNode.title, url: `https://ai-vault.com/blog/${knowledgeNode.slug}` }
    ] : [])
  ];

  return (
    <>
      <Head>
        {/* Primary Meta Tags */}
        <title>{metaTags.title}</title>
        <meta name="description&quot; content={metaTags.description} />
        <meta name="keywords&quot; content={metaTags.keywords} />
        
        {/* Canonical URL */}
        <link rel="canonical&quot; href={metaTags.canonical} />
        
        {/* Robots */}
        <meta name="robots&quot; content={metaTags.robots} />
        
        {/* Open Graph */}
        <meta property="og:title&quot; content={metaTags.ogTitle} />
        <meta property="og:description&quot; content={metaTags.ogDescription} />
        <meta property="og:image&quot; content={metaTags.ogImage} />
        <meta property="og:url&quot; content={metaTags.canonical} />
        <meta property="og:type&quot; content="article&quot; />
        <meta property="og:site_name&quot; content="AI Vault&quot; />
        <meta property="article:published_time&quot; content={knowledgeNode?.publishedAt} />
        <meta property="article:modified_time&quot; content={knowledgeNode?.updatedAt || knowledgeNode?.publishedAt} />
        <meta property="article:author&quot; content={knowledgeNode?.author} />
        <meta property="article:section&quot; content={knowledgeNode?.category} />
        {knowledgeNode?.tags.map((tag, index) => (
          <meta key={index} property="article:tag&quot; content={tag} />
        ))}
        
        {/* Twitter Card */}
        <meta name="twitter:card&quot; content="summary_large_image&quot; />
        <meta name="twitter:site&quot; content="@aivault&quot; />
        <meta name="twitter:creator&quot; content="@aivault&quot; />
        <meta name="twitter:title&quot; content={metaTags.twitterTitle} />
        <meta name="twitter:description&quot; content={metaTags.twitterDescription} />
        <meta name="twitter:image&quot; content={metaTags.twitterImage} />
        
        {/* Additional Meta Tags */}
        <meta name="author&quot; content={knowledgeNode?.author} />
        <meta name="publisher&quot; content="AI Vault&quot; />
        <meta name="theme-color&quot; content="#0066CC&quot; />
        <meta name="msapplication-TileColor&quot; content="#0066CC&quot; />
        
        {/* Language and Region */}
        <meta name="language&quot; content="English&quot; />
        <meta name="geo.region&quot; content="US&quot; />
        <meta name="geo.placename&quot; content="United States&quot; />
        
        {/* Content Classification */}
        <meta name="content-type&quot; content="article&quot; />
        <meta name="content-category&quot; content={knowledgeNode?.category} />
        <meta name="difficulty&quot; content={knowledgeNode?.difficulty} />
        <meta name="read-time&quot; content={`${knowledgeNode?.readTime} minutes`} />
        
        {/* Structured Data */}
        {structuredDataList.map((data, index) => (
          <script
            key={index}
            type="application/ld+json&quot;
            dangerouslySetInnerHTML={{ __html: data }}
          />
        ))}
        
        {/* Preload Critical Resources */}
        <link rel="preload&quot; href="/fonts/inter-var.woff2&quot; as="font&quot; type="font/woff2&quot; crossOrigin="&quot; />
        <link rel="preload&quot; href="/api/og/${knowledgeNode?.slug}&quot; as="image&quot; />
        
        {/* DNS Prefetch */}
        <link rel="dns-prefetch&quot; href="//fonts.googleapis.com&quot; />
        <link rel="dns-prefetch&quot; href="//www.googletagmanager.com&quot; />
        <link rel="dns-prefetch&quot; href="//www.google-analytics.com&quot; />
        
        {/* Alternate Language Versions */}
        <link rel="alternate&quot; hrefLang="en&quot; href={metaTags.canonical} />
        <link rel="alternate&quot; hrefLang="x-default&quot; href={metaTags.canonical} />
      </Head>

      {/* Hidden SEO Content (Invisible-to-Visible Strategy) */}
      <div className="sr-only&quot; aria-hidden="true&quot;>
        {/* Standard HTML fallback for crawlers */}
        <article>
          <h1>{knowledgeNode?.title}</h1>
          <p>{knowledgeNode?.excerpt}</p>
          
          {/* Author information */}
          <div className="author-info&quot;>
            <span>By {knowledgeNode?.author}</span>
            <time dateTime={knowledgeNode?.publishedAt}>{knowledgeNode?.publishedAt}</time>
          </div>
          
          {/* Category and tags */}
          <div className="taxonomy&quot;>
            <span>Category: {knowledgeNode?.category}</span>
            <div className="tags&quot;>
              {knowledgeNode?.tags.map(tag => <span key={tag}>{tag}</span>)}
            </div>
          </div>
          
          {/* FAQ Section for SEO */}
          {knowledgeNode?.faqs && knowledgeNode?.faqs.length > 0 && (
            <section className="faq-section&quot;>
              <h2>Frequently Asked Questions</h2>
              {knowledgeNode?.faqs.map((faq, index) => (
                <div key={index}>
                  <h3>{faq.question}</h3>
                  <p>{faq.answer}</p>
                </div>
              ))}
            </section>
          )}
          
          {/* Standard comparison table */}
          {knowledgeNode?.comparisonTools && knowledgeNode?.comparisonTools.length > 0 && (
            <section className="comparison-table&quot;>
              <h2>Tool Comparison</h2>
              <table>
                <thead>
                  <tr>
                    <th>Tool</th>
                    <th>Description</th>
                    <th>Category</th>
                    <th>Platform</th>
                    <th>Pricing</th>
                  </tr>
                </thead>
                <tbody>
                  {knowledgeNode?.comparisonTools.map((tool, index) => (
                    <tr key={index}>
                      <td>{tool.name}</td>
                      <td>{tool.description}</td>
                      <td>{tool.category}</td>
                      <td>{tool.platform}</td>
                      <td>{tool.pricing || &apos;Free&apos;}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </section>
          )}
          
          {/* How-to steps */}
          {knowledgeNode?.howToSteps && knowledgeNode?.howToSteps.length > 0 && (
            <section className="how-to-steps&quot;>
              <h2>How to Guide</h2>
              {knowledgeNode?.howToSteps.map((step, index) => (
                <div key={index}>
                  <h3>Step {index + 1}: {step.name}</h3>
                  <p>{step.text}</p>
                </div>
              ))}
            </section>
          )}
        </article>
      </div>

      {/* Breadcrumb Navigation */}
      <nav aria-label="Breadcrumb&quot; className="mb-6&quot;>
        <ol className="flex items-center space-x-2 text-sm text-gray-600&quot;>
          {breadcrumbs.map((crumb, index) => (
            <li key={index} className="flex items-center&quot;>
              {index > 0 && <span className="mx-2&quot;>/</span>}
              {index === breadcrumbs.length - 1 ? (
                <span className="text-gray-900 font-medium&quot;>{crumb.name}</span>
              ) : (
                <Link href={crumb.url} className="hover:text-blue-600 transition-colors&quot;>
                  {crumb.name}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </nav>

      {/* Main Article Content */}
      <article className="prose prose-lg max-w-none&quot;>
        {/* Article Header */}
        <header className="mb-8&quot;>
          <div className="flex items-center space-x-4 text-sm text-gray-600 mb-4&quot;>
            <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium&quot;>
              {knowledgeNode?.category}
            </span>
            <span>•</span>
            <time dateTime={knowledgeNode?.publishedAt}>
              {knowledgeNode?.publishedAt ? new Date(knowledgeNode.publishedAt).toLocaleDateString(&apos;en-US&apos;, {
                year: &apos;numeric&apos;,
                month: &apos;long&apos;,
                day: &apos;numeric&apos;
              }) : &apos;Unknown date&apos;}
            </time>
            <span>•</span>
            <span>{knowledgeNode?.readTime} min read</span>
            <span>•</span>
            <span className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-xs font-medium&quot;>
              {knowledgeNode?.difficulty}
            </span>
          </div>
          
          <h1 className="text-4xl font-bold text-gray-900 mb-4&quot;>{knowledgeNode?.title}</h1>
          
          <p className="text-xl text-gray-600 mb-6&quot;>{knowledgeNode?.excerpt}</p>
          
          {/* Author Badge */}
          <div className="flex items-center space-x-4&quot;>
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold&quot;>
              {knowledgeNode?.author ? knowledgeNode.author.charAt(0).toUpperCase() : &apos;A&apos;}
            </div>
            <div>
              <p className="font-medium text-gray-900&quot;>{knowledgeNode?.author}</p>
              <p className="text-sm text-gray-600&quot;>AI Expert</p>
            </div>
          </div>
        </header>

        {/* Instance Switcher */}
        <div className="mb-8 p-4 bg-gray-50 rounded-lg border border-gray-200&quot;>
          <p className="text-sm font-medium text-gray-700 mb-2&quot;>View this article as:</p>
          <div className="flex flex-wrap gap-2&quot;>
            {[&apos;founder&apos;, &apos;developer&apos;, &apos;designer&apos;, &apos;analyst&apos;, &apos;case-study&apos;].map((inst) => (
              <button
                key={inst}
                className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
                  inst === instance
                    ? &apos;bg-blue-600 text-white&apos;
                    : &apos;bg-white text-gray-700 hover:bg-gray-100 border border-gray-300
                }`}
              >
                {inst.charAt(0).toUpperCase() + inst.slice(1).replace(&apos;-&apos;, &apos; &apos;)}
              </button>
            ))}
          </div>
        </div>

        {/* Answer Summary for Featured Snippets */}
        <div className="mb-8 p-6 bg-blue-50 rounded-lg border border-blue-200&quot;>
          <h2 className="text-lg font-semibold text-blue-900 mb-2&quot;>Key Takeaways</h2>
          <div className="text-blue-800&quot;>
            {knowledgeNode?.content ? knowledgeNode.content.split(&apos;.&apos;).slice(0, 3).join(&apos;.&apos;).trim() : &apos;No content available.&apos;}.
          </div>
        </div>

        {/* Main Content */}
        <div className="article-content&quot;>
          {children}
        </div>

        {/* FAQ Section */}
        {knowledgeNode?.faqs && knowledgeNode?.faqs.length > 0 && (
          <section className="mt-12&quot;>
            <h2 className="text-2xl font-bold text-gray-900 mb-6&quot;>Frequently Asked Questions</h2>
            <div className="space-y-4&quot;>
              {knowledgeNode?.faqs.map((faq, index) => (
                <details key={index} className="bg-gray-50 rounded-lg p-6 border border-gray-200&quot;>
                  <summary className="font-medium text-gray-900 cursor-pointer hover:text-blue-600 transition-colors&quot;>
                    {faq.question}
                  </summary>
                  <p className="mt-3 text-gray-700&quot;>{faq.answer}</p>
                </details>
              ))}
            </div>
          </section>
        )}

        {/* Related Tools */}
        {knowledgeNode?.linkedTools && knowledgeNode?.linkedTools.length > 0 && (
          <section className="mt-12&quot;>
            <h2 className="text-2xl font-bold text-gray-900 mb-6&quot;>Related Tools</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4&quot;>
              {knowledgeNode?.linkedTools.map((tool, index) => (
                <div key={index} className="bg-white rounded-lg p-6 border border-gray-200 hover:border-blue-300 transition-colors&quot;>
                  <h3 className="font-semibold text-gray-900 mb-2&quot;>{tool.name}</h3>
                  <p className="text-gray-600 text-sm mb-3&quot;>AI-powered tool for enhanced productivity</p>
                  <Link 
                    href={tool.url || `/tools/${tool.id}`}
                    className="text-blue-600 hover:text-blue-800 text-sm font-medium&quot;
                  >
                    Learn more →
                  </Link>
                </div>
              ))}
            </div>
          </section>
        )}
      </article>

      {/* Schema.org Microdata */}
      <div itemScope itemType="https://schema.org/TechArticle&quot; className="hidden&quot;>
        <meta itemProp="headline&quot; content={knowledgeNode?.title} />
        <meta itemProp="description&quot; content={knowledgeNode?.excerpt} />
        <meta itemProp="datePublished&quot; content={knowledgeNode?.publishedAt} />
        <meta itemProp="author&quot; content={knowledgeNode?.author} />
        <meta itemProp="publisher&quot; content="AI Vault&quot; />
        <meta itemProp="image&quot; content={knowledgeNode?.images?.[0] || '/api/og/default'} />
      </div>
    </>
  );
};

export default SEOArticleWrapper;
