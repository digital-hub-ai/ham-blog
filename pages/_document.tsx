// pages/_document.tsx
import { Html, Head, Main, NextScript } from &apos;next/document&apos;;
import Script from &apos;next/script&apos;;

export default function Document() {
  const siteUrl = &apos;https://aether-nexus.vercel.app&apos;;
  const siteName = &apos;AI Vault - Discover & Compare AI Tools&apos;;
  const description = &apos;Comprehensive directory of AI tools with detailed comparisons...&apos;;
  const defaultImage = `${siteUrl}/images/og-default.jpg`;
  const twitterHandle = &apos;@yourhandle&apos;;

  // JSON-LD structured data
  const structuredData = {
    &apos;@context&apos;: &apos;https://schema.org&apos;,
    &apos;@type&apos;: &apos;WebSite&apos;,
    name: siteName,
    url: siteUrl,
    description: description,
    potentialAction: {
      &apos;@type&apos;: &apos;SearchAction&apos;,
      target: `${siteUrl}/search?q={search_term_string}`,
      &apos;query-input&apos;: &apos;required name=search_term_string&apos;
    }
  };

  return (
    <Html lang="en&quot; className="scroll-smooth&quot;>
      <Head>
        {/* Character encoding */}
        <meta charSet="utf-8&quot; />
        
        {/* Primary Meta Tags */}
        <meta name="title&quot; content={siteName} />
        <meta name="description&quot; content={description} />
        <meta name="robots&quot; content="index, follow&quot; />
        <meta name="theme-color&quot; content="#111827&quot; />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type&quot; content="website&quot; />
        <meta property="og:url&quot; content={siteUrl} />
        <meta property="og:title&quot; content={siteName} />
        <meta property="og:description&quot; content={description} />
        <meta property="og:image&quot; content={defaultImage} />
        
        {/* Twitter */}
        <meta name="twitter:card&quot; content="summary_large_image&quot; />
        <meta name="twitter:site&quot; content={twitterHandle} />
        <meta name="twitter:creator&quot; content={twitterHandle} />
        
        {/* Preconnect to external domains */}
        <link rel="preconnect&quot; href="https://fonts.googleapis.com&quot; />
        <link rel="preconnect&quot; href="https://fonts.gstatic.com&quot; crossOrigin="anonymous&quot; />
        <link rel="preconnect&quot; href="https://www.google-analytics.com&quot; />
        
        {/* Fonts with proper loading */}
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap&quot;
          rel="stylesheet&quot;
        />
        
        {/* Favicons */}
        <link rel="icon&quot; href="/favicon.ico&quot; sizes="any&quot; />
        <link
          rel="icon&quot;
          href="/icon?<generated>&quot;
          type="image/png&quot;
          sizes="32x32&quot;
        />
        <link
          rel="apple-touch-icon&quot;
          href="/apple-icon?<generated>&quot;
          type="image/png&quot;
          sizes="180x180&quot;
        />
      </Head>
      <body className="min-h-screen antialiased&quot;>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}