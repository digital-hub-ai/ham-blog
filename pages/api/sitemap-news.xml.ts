import { NextApiRequest, NextApiResponse } from &apos;next&apos;;
import { KnowledgeNode } from &apos;../../lib/adaptive-stream&apos;;

// Mock data - in production, this would come from your CMS/database
const knowledgeNodes: KnowledgeNode[] = [
  {
    id: &apos;1&apos;,
    title: &apos;The Future of AI-Driven Development&apos;,
    content: &apos;Comprehensive analysis of AI tools transforming software development...&apos;,
    excerpt: &apos;Explore how AI is revolutionizing the development landscape&apos;,
    author: &apos;AI Vault Team&apos;,
    publishedAt: &apos;2024-11-15T10:00:00Z&apos;,
    category: &apos;Development&apos;,
    tags: [&apos;AI&apos;, &apos;Development&apos;, &apos;Machine Learning&apos;, &apos;Automation&apos;],
    difficulty: &apos;intermediate&apos;,
    readTime: 8,
    engagementScore: 85,
    trending: true,
    slug: &apos;future-ai-driven-development&apos;,
    images: [&apos;/images/ai-development.jpg&apos;],
    rating: 4.5,
    reviewCount: 127,
    semanticEmbedding: [0.23, -0.45, 0.67, 0.12],
    targetAudience: [&apos;Developers&apos;, &apos;Tech Leads&apos;, &apos;Engineering Managers&apos;]
  },
  {
    id: &apos;2&apos;,
    title: &apos;Top 10 AI Tools for Content Creation&apos;,
    content: &apos;Discover the most powerful AI tools for content creation...&apos;,
    excerpt: &apos;Complete guide to AI-powered content creation tools&apos;,
    author: &apos;Content Team&apos;,
    publishedAt: &apos;2024-11-10T14:30:00Z&apos;,
    category: &apos;Content Creation&apos;,
    tags: [&apos;AI&apos;, &apos;Content&apos;, &apos;Writing&apos;, &apos;Marketing&apos;],
    difficulty: &apos;beginner&apos;,
    readTime: 6,
    engagementScore: 92,
    trending: true,
    slug: &apos;top-10-ai-tools-content-creation&apos;,
    images: [&apos;/images/content-creation.jpg&apos;],
    rating: 4.7,
    reviewCount: 203,
    semanticEmbedding: [0.34, 0.56, -0.23, 0.78],
    targetAudience: [&apos;Content Creators&apos;, &apos;Marketers&apos;, &apos;Writers&apos;]
  }
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const baseUrl = &apos;https://ai-vault.com&apos;;
    
    // Generate XML news sitemap
    let xml = &apos;<?xml version="1.0&quot; encoding="UTF-8&quot;?>\n&apos;;
    xml += &apos;<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9&quot;\n';
    xml += '        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9&quot;>\n\n';

    // Filter for recent and trending articles (published within last 2 days)
    const twoDaysAgo = new Date();
    twoDaysAgo.setDate(twoDaysAgo.getDate() - 2);
    
    const recentArticles = knowledgeNodes.filter(node => {
      const publicationDate = new Date(node.publishedAt);
      return publicationDate > twoDaysAgo && node.trending;
    });

    if (recentArticles.length === 0) {
      // If no recent articles, include the most recent trending article
      const mostRecent = knowledgeNodes
        .filter(node => node.trending)
        .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())[0];
      
      if (mostRecent) {
        recentArticles.push(mostRecent);
      }
    }

    recentArticles.forEach(node => {
      xml += &apos;  <url>\n&apos;;
      xml += `    <loc>${baseUrl}/blog/${node.slug}</loc>\n`;
      xml += `    <lastmod>${node.updatedAt || node.publishedAt}</lastmod>\n`;
      xml += &apos;    <changefreq>hourly</changefreq>\n&apos;;
      xml += &apos;    <priority>1.0</priority>\n&apos;;
      
      xml += &apos;    <news:news>\n&apos;;
      xml += &apos;      <news:publication>\n&apos;;
      xml += &apos;        <news:name>AI Vault Blog</news:name>\n&apos;;
      xml += &apos;        <news:language>en</news:language>\n&apos;;
      xml += `        <news:publication_date>${node.publishedAt}</news:publication_date>\n`;
      xml += &apos;        <news:publication>\n&apos;;
      xml += `          <news:name>AI Vault</news:name>\n`;
      xml += &apos;          <news:language>en</news:language>\n&apos;;
      xml += &apos;        </news:publication>\n&apos;;
      xml += &apos;      </news:publication>\n&apos;;
      xml += `      <news:title>${escapeXml(node.title)}</news:title>\n`;
      xml += `      <news:keywords>${node.tags.join(&apos;, &apos;)}</news:keywords>\n`;
      xml += &apos;      <news:genres>Blog, Technology, AI</news:genres>\n&apos;;
      xml += &apos;      <news:stock_tickers>NONE</news:stock_tickers>\n&apos;;
      xml += &apos;    </news:news>\n&apos;;
      
      xml += &apos;  </url>\n\n&apos;;
    });

    xml += &apos;</urlset>&apos;;

    // Set response headers
    res.setHeader(&apos;Content-Type&apos;, &apos;application/xml&apos;);
    res.setHeader(&apos;Cache-Control&apos;, &apos;public, s-maxage=300, stale-while-revalidate=3600&apos;); // News sitemaps update more frequently
    
    // Send XML response
    res.status(200).send(xml);

  } catch (error) {
    console.error(&apos;News sitemap generation error:&apos;, error);
    res.status(500).json({ error: &apos;Failed to generate news sitemap&apos; });
  }
}

// Helper function to escape XML special characters
function escapeXml(unsafe: string): string {
  return unsafe
    .replace(/&/g, &apos;&amp;&apos;)
    .replace(/</g, '&lt;')
    .replace(/>/g, &apos;&gt;&apos;)
    .replace(/&quot;/g, &apos;&quot;&apos;)
    .replace(/&apos;/g, &apos;&#039;&apos;);
}
