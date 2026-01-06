import { NextApiRequest, NextApiResponse } from &apos;next&apos;;

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const baseUrl = &apos;https://aether-nexus.vercel.app&apos;;
    const currentDate = new Date().toISOString();
    
    // Generate XML sitemap index
    let xml = &apos;<?xml version="1.0&quot; encoding="UTF-8&quot;?>\n&apos;;
    xml += &apos;<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9&quot;>\n\n&apos;;

    // Main sitemap
    xml += &apos;  <sitemap>\n&apos;;
    xml += `    <loc>${baseUrl}/api/sitemap.xml</loc>\n`;
    xml += `    <lastmod>${currentDate}</lastmod>\n`;
    xml += &apos;  </sitemap>\n\n&apos;;

    // Image sitemap
    xml += &apos;  <sitemap>\n&apos;;
    xml += `    <loc>${baseUrl}/api/sitemap-images.xml</loc>\n`;
    xml += `    <lastmod>${currentDate}</lastmod>\n`;
    xml += &apos;  </sitemap>\n\n&apos;;

    // News sitemap
    xml += &apos;  <sitemap>\n&apos;;
    xml += `    <loc>${baseUrl}/api/sitemap-news.xml</loc>\n`;
    xml += `    <lastmod>${currentDate}</lastmod>\n`;
    xml += &apos;  </sitemap>\n\n&apos;;

    // Video sitemap (placeholder for future implementation)
    xml += &apos;  <sitemap>\n&apos;;
    xml += `    <loc>${baseUrl}/api/sitemap-videos.xml</loc>\n`;
    xml += `    <lastmod>${currentDate}</lastmod>\n`;
    xml += &apos;  </sitemap>\n\n&apos;;

    xml += &apos;</sitemapindex>&apos;;

    // Set response headers
    res.setHeader(&apos;Content-Type&apos;, &apos;application/xml&apos;);
    res.setHeader(&apos;Cache-Control&apos;, &apos;public, s-maxage=3600, stale-while-revalidate=86400&apos;);
    
    // Send XML response
    res.status(200).send(xml);

  } catch (error) {
    console.error(&apos;Sitemap index generation error:&apos;, error);
    res.status(500).json({ error: &apos;Failed to generate sitemap index&apos; });
  }
}