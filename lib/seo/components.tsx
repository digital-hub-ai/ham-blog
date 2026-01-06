&apos;use client&apos;;

import React from &apos;react&apos;;
import Head from &apos;next/head&apos;;

interface SeoProps {
  title?: string;
  description?: string;
  keywords?: string[];
  image?: string;
  url?: string;
  type?: string;
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  canonical?: string;
  hreflang?: Record<string, string>;
  jsonLd?: any;
}

export const Seo: React.FC<SeoProps> = ({
  title,
  description,
  keywords,
  image,
  url,
  type = 'website',
  publishedTime,
  modifiedTime,
  author,
  canonical,
  hreflang,
  jsonLd
}) => {
  const siteTitle = title ? `${title} | AI Tools Directory` : &apos;AI Tools Directory - Discover the Best AI Tools&apos;;
  const siteDescription = description || &apos;Find and compare the best AI tools for your needs. Browse our comprehensive directory of artificial intelligence applications and services.&apos;;
  const siteImage = image || &apos;/og-image.jpg&apos;;
  const siteUrl = url || &apos;https://aitoolsdirectory.com&apos;;
  
  const jsonLdData = jsonLd ? JSON.stringify(jsonLd) : null;

  return (
    <Head>
      <title>{siteTitle}</title>
      <meta name="description&quot; content={siteDescription} />
      {keywords && <meta name="keywords&quot; content={keywords.join(', ')} />}
      
      {/* Open Graph */}
      <meta property="og:title&quot; content={siteTitle} />
      <meta property="og:description&quot; content={siteDescription} />
      <meta property="og:image&quot; content={siteImage} />
      <meta property="og:url&quot; content={siteUrl} />
      <meta property="og:type&quot; content={type} />
      {publishedTime && <meta property="article:published_time&quot; content={publishedTime} />}
      {modifiedTime && <meta property="article:modified_time&quot; content={modifiedTime} />}
      {author && <meta property="article:author&quot; content={author} />}
      
      {/* Twitter */}
      <meta name="twitter:card&quot; content="summary_large_image&quot; />
      <meta name="twitter:title&quot; content={siteTitle} />
      <meta name="twitter:description&quot; content={siteDescription} />
      <meta name="twitter:image&quot; content={siteImage} />
      
      {/* Canonical and hreflang */}
      {canonical && <link rel="canonical&quot; href={canonical} />}
      {hreflang && Object.entries(hreflang).map(([lang, href]) => (
        <link key={lang} rel="alternate&quot; hrefLang={lang} href={href} />
      ))}
      
      {/* JSON-LD */}
      {jsonLdData && (
        <script
          type="application/ld+json&quot;
          dangerouslySetInnerHTML={{ __html: jsonLdData }}
        />
      )}
      
      {/* Viewport */}
      <meta name="viewport&quot; content="width=device-width, initial-scale=1&quot; />
      
      {/* Theme color */}
      <meta name="theme-color&quot; content="#4f46e5&quot; />
    </Head>
  );
};

export default Seo;