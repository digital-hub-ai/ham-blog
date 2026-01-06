import { Metadata } from &apos;next&apos;;
import { tools } from &apos;../../data/tools&apos;;
import { categories } from &apos;../../data/categories&apos;;

// Base URL for the site
export const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || &apos;https://aitoolsdirectory.com&apos;;

// Default metadata for the site
export const DEFAULT_METADATA: Metadata = {
  title: {
    default: &apos;AI Tools Directory - Discover the Best AI Tools&apos;,
    template: &apos;%s | AI Tools Directory&apos;
  },
  description: &apos;Find and compare the best AI tools for your needs. Browse our comprehensive directory of artificial intelligence applications and services.&apos;,
  keywords: [&apos;AI tools&apos;, &apos;artificial intelligence&apos;, &apos;machine learning&apos;, &apos;AI software&apos;, &apos;AI applications&apos;, &apos;AI directory&apos;],
  authors: [{ name: &apos;AI Tools Directory Team&apos; }],
  creator: &apos;AI Tools Directory&apos;,
  publisher: &apos;AI Tools Directory&apos;,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      &apos;max-video-preview&apos;: -1,
      &apos;max-image-preview&apos;: &apos;large&apos;,
      &apos;max-snippet&apos;: -1,
    },
  },
  alternates: {
    canonical: BASE_URL
  }
};

// Generate metadata for tool pages
export function generateToolMetadata(toolName: string, toolData: any): Metadata {
  const title = `${toolName} - AI Tool Review & Comparison`;
  const description = toolData.description.substring(0, 160);
  
  return {
    title,
    description,
    keywords: [toolName, toolData.category, toolData.subcategory, ...toolData.tags],
    openGraph: {
      title,
      description,
      url: `${BASE_URL}/ai-tools/${encodeURIComponent(toolData.category)}/${encodeURIComponent(toolData.subcategory)}/${encodeURIComponent(toolName)}`,
      siteName: &apos;AI Tools Directory&apos;,
      images: [
        {
          url: toolData.favicon || &apos;/og-image.jpg&apos;,
          width: 1200,
          height: 630,
          alt: `${toolName} - AI Tool`,
        },
      ],
      locale: &apos;en_US&apos;,
      type: &apos;website&apos;,
    },
    twitter: {
      card: &apos;summary_large_image&apos;,
      title,
      description,
      images: [toolData.favicon || &apos;/twitter-image.jpg&apos;],
    },
  };
}

// Generate metadata for category pages
export function generateCategoryMetadata(categoryName: string): Metadata {
  const title = `${categoryName} - AI Tools Directory`;
  const description = `Discover the best ${categoryName} AI tools. Browse our comprehensive directory of ${categoryName} applications and services.`;
  
  return {
    title,
    description,
    keywords: [categoryName, &apos;AI tools&apos;, &apos;artificial intelligence&apos;],
    openGraph: {
      title,
      description,
      url: `${BASE_URL}/ai-tools/${encodeURIComponent(categoryName)}`,
      siteName: &apos;AI Tools Directory&apos;,
      images: [
        {
          url: &apos;/og-image.jpg&apos;,
          width: 1200,
          height: 630,
          alt: categoryName,
        },
      ],
      locale: &apos;en_US&apos;,
      type: &apos;website&apos;,
    },
    twitter: {
      card: &apos;summary_large_image&apos;,
      title,
      description,
      images: [&apos;/twitter-image.jpg&apos;],
    },
  };
}

// Generate metadata for subcategory pages
export function generateSubcategoryMetadata(categoryName: string, subcategoryName: string): Metadata {
  const title = `${subcategoryName} - ${categoryName} | AI Tools Directory`;
  const description = `Discover the best ${subcategoryName} tools in ${categoryName}. Browse our comprehensive directory of ${subcategoryName} AI applications.`;
  
  return {
    title,
    description,
    keywords: [subcategoryName, categoryName, &apos;AI tools&apos;, &apos;artificial intelligence&apos;],
    openGraph: {
      title,
      description,
      url: `${BASE_URL}/ai-tools/${encodeURIComponent(categoryName)}/${encodeURIComponent(subcategoryName)}`,
      siteName: &apos;AI Tools Directory&apos;,
      images: [
        {
          url: &apos;/og-image.jpg&apos;,
          width: 1200,
          height: 630,
          alt: `${subcategoryName} - ${categoryName}`,
        },
      ],
      locale: &apos;en_US&apos;,
      type: &apos;website&apos;,
    },
    twitter: {
      card: &apos;summary_large_image&apos;,
      title,
      description,
      images: [&apos;/twitter-image.jpg&apos;],
    },
  };
}

// Generate metadata for blog posts
export function generateBlogMetadata(title: string, excerpt: string, slug: string, imageUrl?: string): Metadata {
  const fullTitle = `${title} | AI Tools Directory Blog`;
  const description = excerpt.substring(0, 160);
  
  return {
    title: fullTitle,
    description,
    keywords: [title, &apos;AI&apos;, &apos;artificial intelligence&apos;, &apos;machine learning&apos;, &apos;blog&apos;],
    openGraph: {
      title: fullTitle,
      description,
      url: `${BASE_URL}/blog/${slug}`,
      siteName: &apos;AI Tools Directory Blog&apos;,
      images: [
        {
          url: imageUrl || &apos;/blog/og-image.jpg&apos;,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: &apos;en_US&apos;,
      type: &apos;article&apos;,
    },
    twitter: {
      card: &apos;summary_large_image&apos;,
      title: fullTitle,
      description,
      images: [imageUrl || &apos;/blog/twitter-image.jpg&apos;],
    },
  };
}

// Generate JSON-LD structured data for tools
export function generateToolJsonLd(toolData: any) {
  return {
    &apos;@context&apos;: &apos;https://schema.org&apos;,
    &apos;@type&apos;: &apos;SoftwareApplication&apos;,
    &apos;name&apos;: toolData.name,
    &apos;description&apos;: toolData.description,
    &apos;url&apos;: toolData.url,
    &apos;applicationCategory&apos;: &apos;BusinessApplication&apos;,
    &apos;operatingSystem&apos;: &apos;Web&apos;,
    &apos;offers&apos;: {
      &apos;@type&apos;: &apos;Offer&apos;,
      &apos;price&apos;: &apos;0&apos;,
      &apos;priceCurrency&apos;: &apos;USD&apos;,
      &apos;category&apos;: toolData.pricing
    },
    &apos;aggregateRating&apos;: {
      &apos;@type&apos;: &apos;AggregateRating&apos;,
      &apos;ratingValue&apos;: toolData.rating,
      &apos;ratingCount&apos;: Math.floor(Math.random() * 100) + 10
    }
  };
}

// Generate JSON-LD structured data for organization
export function generateOrganizationJsonLd() {
  return {
    &apos;@context&apos;: &apos;https://schema.org&apos;,
    &apos;@type&apos;: &apos;Organization&apos;,
    &apos;name&apos;: &apos;AI Tools Directory&apos;,
    &apos;url&apos;: BASE_URL,
    &apos;logo&apos;: `${BASE_URL}/logo.png`,
    &apos;sameAs&apos;: [
      &apos;https://twitter.com/aitoolsdirectory&apos;,
      &apos;https://www.linkedin.com/company/aitoolsdirectory&apos;,
      &apos;https://www.facebook.com/aitoolsdirectory&apos;
    ]
  };
}

// Generate JSON-LD structured data for website
export function generateWebsiteJsonLd() {
  return {
    &apos;@context&apos;: &apos;https://schema.org&apos;,
    &apos;@type&apos;: &apos;WebSite&apos;,
    &apos;name&apos;: &apos;AI Tools Directory&apos;,
    &apos;url&apos;: BASE_URL,
    &apos;potentialAction&apos;: {
      &apos;@type&apos;: &apos;SearchAction&apos;,
      &apos;target&apos;: `${BASE_URL}/search?q={search_term_string}`,
      &apos;query-input&apos;: &apos;required name=search_term_string&apos;
    }
  };
}

// Generate canonical URL
export function generateCanonicalUrl(path: string): string {
  return `${BASE_URL}${path}`;
}

// Generate hreflang tags
export function generateHreflangUrls(path: string): Record<string, string> {
  const url = `${BASE_URL}${path}`;
  return {
    &apos;en-US&apos;: url,
    &apos;x-default&apos;: url
  };
}