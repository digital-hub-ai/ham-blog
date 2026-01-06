import Head from &apos;next/head&apos;;
import { useRouter } from &apos;next/router&apos;;
import { NextSeo } from &apos;next-seo&apos;;

type SEOProps = {
  title: string;
  description: string;
  canonical?: string;
  image?: string;
  article?: boolean;
  keywords?: string[];
  publishDate?: string;
  modifiedDate?: string;
  author?: string;
  schema?: any;
};

export const SEO: React.FC<SEOProps> = ({
  title,
  description,
  canonical,
  image = '/images/og-image.jpg',
  article = false,
  keywords = ['AI tools', 'artificial intelligence', 'machine learning'],
  publishDate,
  modifiedDate,
  author,
  schema,
}) => {
  const router = useRouter();
  const siteUrl = &apos;https://yourwebsite.com&apos;; // Replace with your actual domain
  const pageUrl = `${siteUrl}${router.asPath}`;
  const defaultImage = `${siteUrl}${image}`;
  const siteName = &apos;AI Tools Hub&apos;; // Replace with your site name

  // Default schema for organization
  const defaultSchema = {
    &apos;@context&apos;: &apos;https://schema.org&apos;,
    &apos;@type&apos;: &apos;WebSite&apos;,
    name: siteName,
    url: siteUrl,
    potentialAction: {
      &apos;@type&apos;: &apos;SearchAction&apos;,
      target: `${siteUrl}/search?q={search_term_string}`,
      &apos;query-input&apos;: &apos;required name=search_term_string&apos;,
    },
  };

  return (
    <>
      <NextSeo
        title={`${title} | ${siteName}`}
        description={description}
        canonical={canonical || pageUrl}
        openGraph={{
          type: article ? 'article' : 'website',
          url: pageUrl,
          title: `${title} | ${siteName}`,
          description,
          images: [
            {
              url: defaultImage,
              width: 1200,
              height: 630,
              alt: title,
            },
          ],
          site_name: siteName,
        }}
        twitter={{
          handle: '@yourtwitter',
          site: '@yoursite',
          cardType: 'summary_large_image',
        }}
        additionalMetaTags={[
          {
            name: 'keywords',
            content: keywords.join(', '),
          },
          {
            name: 'author',
            content: author || siteName,
          },
          {
            name: 'viewport',
            content: 'width=device-width, initial-scale=1.0',
          },
          {
            name: 'robots',
            content: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1',
          },
        ]}
      />
      
      {/* Structured Data */}
      <Head>
        <script
          type="application/ld+json&quot;
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema || defaultSchema),
          }}
        />
        {publishDate && (
          <meta property="article:published_time&quot; content={publishDate} />
        )}
        {modifiedDate && (
          <meta property="article:modified_time&quot; content={modifiedDate} />
        )}
        <link rel="canonical&quot; href={canonical || pageUrl} />
      </Head>
    </>
  );
};

export default SEO;
