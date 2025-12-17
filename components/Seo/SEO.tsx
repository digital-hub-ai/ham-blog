import Head from 'next/head';
import { useRouter } from 'next/router';
import { NextSeo } from 'next-seo';

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
  const siteUrl = 'https://yourwebsite.com'; // Replace with your actual domain
  const pageUrl = `${siteUrl}${router.asPath}`;
  const defaultImage = `${siteUrl}${image}`;
  const siteName = 'AI Tools Hub'; // Replace with your site name

  // Default schema for organization
  const defaultSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteName,
    url: siteUrl,
    potentialAction: {
      '@type': 'SearchAction',
      target: `${siteUrl}/search?q={search_term_string}`,
      'query-input': 'required name=search_term_string',
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
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema || defaultSchema),
          }}
        />
        {publishDate && (
          <meta property="article:published_time" content={publishDate} />
        )}
        {modifiedDate && (
          <meta property="article:modified_time" content={modifiedDate} />
        )}
        <link rel="canonical" href={canonical || pageUrl} />
      </Head>
    </>
  );
};

export default SEO;
