import { NextApiRequest, NextApiResponse } from &apos;next&apos;;
// Remove the mock data import since we&apos;ll use actual blog post data
import { readFileSync } from &apos;fs&apos;;
import { join } from &apos;path&apos;;

// Function to get all blog post slugs from the blog directory
function getAllBlogPostSlugs() {
  try {
    // In a real implementation, you would dynamically read the blog directory
    // For now, we&apos;ll return a sample of actual blog post IDs from your blog.tsx file
    return [
      &apos;no-code-low-code-revolution-2025&apos;,
      &apos;data-science-workstation-2025&apos;,
      &apos;ai-powered-content-creation-stack-2025&apos;,
      &apos;one-person-game-dev-arsenal-2025&apos;,
      &apos;full-stack-web3-developer-kit-2025&apos;,
      &apos;beyond-rag-agentic-search-stack&apos;,
      &apos;gpu-poor-guide-ai-training&apos;,
      &apos;llm-ops-stack-guide&apos;,
      &apos;model-kitchen-revolution-fine-tune-open-source-ai&apos;,
      &apos;ai-coding-assistants-2025&apos;,
      &apos;ai-mental-health-2025&apos;,
      &apos;ai-automation-business&apos;,
      &apos;ai-design-tools-2024&apos;,
      &apos;ai-development-tools-2024&apos;,
      &apos;ai-marketing-tools-2024&apos;,
      &apos;ai-productivity-tools-2024&apos;,
      &apos;ai-tools-comparison-2024&apos;,
      &apos;future-of-artificial-intelligence&apos;,
      &apos;machine-learning-beginners-guide&apos;,
      &apos;top-10-ai-tools-content-creation-2024&apos;,
      &apos;ai-transforming-software-development&apos;,
      &apos;future-ai-business-analytics&apos;,
      &apos;ai-business-analytics-guide&apos;,
      &apos;ai-ethics-2024&apos;,
      &apos;ai-healthcare-revolution&apos;,
      &apos;we-used-ai-to-build-startup-48-hours-stack-cost-reality&apos;,
      &apos;beyond-chatgpt-atlas-neo-guide-niche-ai-tools-youve-never-heard-of&apos;,
      &apos;ai-education-future&apos;,
      &apos;ai-finance-2025&apos;,
      &apos;ai-education-2025&apos;,
      &apos;ai-cybersecurity-2025&apos;,
      &apos;ai-marketing-2025&apos;,
      &apos;ai-customer-service-2025&apos;,
      &apos;ai-supply-chain-2025&apos;,
      &apos;ai-sports-2025&apos;,
      &apos;ai-tourism-2025&apos;,
      &apos;ai-food-beverage-2025&apos;,
      &apos;ai-construction-2025&apos;,
      &apos;ai-government-2025&apos;,
      &apos;ai-insurance-2025&apos;,
      &apos;ai-telecommunications-2025&apos;,
      &apos;ai-banking-2025&apos;,
      &apos;ai-logistics-2025&apos;,
      &apos;ai-hospitality-2025&apos;,
      &apos;ai-cybersecurity-2024&apos;,
      &apos;ai-content-creation-2024&apos;,
      &apos;ai-ecommerce-2024&apos;,
      &apos;ai-finance-2024&apos;,
      &apos;ai-data-science-2024&apos;,
      &apos;ai-healthcare-2024&apos;,
      &apos;ai-manufacturing-2024&apos;,
      &apos;ai-agriculture-2024&apos;,
      &apos;ai-transportation-2024&apos;,
      &apos;ai-real-estate-2024&apos;,
      &apos;ai-legal-services-2024&apos;,
      &apos;ai-human-resources-2024&apos;,
      &apos;ai-retail-2024&apos;,
      &apos;ai-energy-2024&apos;,
      &apos;ai-entertainment-2024&apos;,
      &apos;ai-healthcare-2025&apos;,
      &apos;ai-manufacturing-2025&apos;,
      &apos;ai-agriculture-2025&apos;,
      &apos;ai-transportation-2025&apos;,
      &apos;ai-real-estate-2025&apos;,
      &apos;ai-legal-services-2025&apos;,
      &apos;ai-human-resources-2025&apos;,
      &apos;ai-retail-2025&apos;,
      &apos;ai-energy-2025&apos;,
      &apos;ai-entertainment-2025&apos;,
      &apos;ai-media-2025&apos;,
      &apos;ai-sports-analytics-2025&apos;,
      &apos;ai-fashion-2025&apos;,
      &apos;ai-music-2025&apos;,
      &apos;ai-gaming-2025&apos;,
      &apos;ai-construction-2025&apos;,
      &apos;ai-utilities-2025&apos;,
      &apos;ai-mining-2025&apos;,
      &apos;ai-aviation-2025&apos;,
      &apos;ai-maritime-2025&apos;,
      &apos;ai-financial-technology-2025&apos;,
      &apos;ai-future-technologies-2025&apos;,
      &apos;ai-space-exploration-2025&apos;,
      &apos;ai-robotics-2025&apos;,
      &apos;ai-quantum-computing-2025&apos;,
      &apos;ai-biotechnology-2025&apos;,
      &apos;ai-climate-change-2025&apos;,
      &apos;ai-smart-cities-2025&apos;,
      &apos;ai-defense-2025&apos;,
      &apos;ai-agriculture-technology-2025&apos;,
      &apos;ai-environmental-science-2025&apos;,
      &apos;ai-renewable-energy-2025&apos;,
      &apos;ai-food-technology-2025&apos;,
      &apos;ai-water-management-2025&apos;,
      &apos;ai-waste-management-2025&apos;,
      &apos;ai-forestry-2025&apos;,
      &apos;ai-oceanography-2025&apos;,
      &apos;ai-philosophy-2025&apos;,
      &apos;ai-history-2025&apos;,
      &apos;ai-literature-2025&apos;,
      &apos;ai-meteorology-2025&apos;,
      &apos;ai-geology-2025&apos;,
      &apos;ai-archaeology-2025&apos;,
      &apos;ai-linguistics-2025&apos;,
      &apos;ai-psychology-2025&apos;,
      &apos;ai-sociology-2025&apos;,
      &apos;ai-anthropology-2025&apos;,
      &apos;the-state-of-open-source-2025-funding-fragmentation-future&apos;,
      &apos;the-great-consolidation-which-saas-categories-are-dying-and-which-are-thriving&apos;,
      &apos;our-aws-bill-was-50-000-how-we-fixed-it-a-cloud-cost-optimization-playbook&apos;,
      &apos;the-ultimate-guide-to-developer-onboarding-the-tools-that-make-new-hires-productive-in-day-1&apos;,
      &apos;your-team-is-drowning-in-notifications-heres-a-systematic-framework-for-digital-wellness&apos;,
      &apos;tool-darwinism-why-the-best-product-doesnt-always-win&apos;,
      &apos;the-composability-imperative-why-your-future-stack-will-be-built-like-lego-blocks&apos;,
      &apos;the-ethics-of-code-a-developers-guide-to-responsible-tool-selection&apos;,
      &apos;from-monolith-to-micro-saas-the-unstoppable-fragmentation-of-software&apos;,
      &apos;the-atlas-neo-manifesto-why-the-world-needs-a-smarter-map-of-the-digital-toolscape&apos;,
      &apos;the-2025-developers-stack-architectural-blueprint-building-at-scale&apos;,
      &apos;beyond-feature-lists-executives-framework-strategic-saas-procurement&apos;,
      &apos;the-tool-selection-paradox-why-more-choice-kills-productivity-how-to-fix-it&apos;,
      &apos;figma-vs-sketch-vs-penpot-2025-ultimate-ui-ux-platform-showdown&apos;,
      &apos;the-low-code-arena-developers-brutally-honest-review-bubble-webflow-adalo&apos;,
      &apos;notion-vs-coda-vs-anytype-quest-one-true-workspace&apos;,
      &apos;the-invisible-interface-how-ai-agents-will-make-apps-websites-obsolete&apos;,
      &apos;pricing-page-teardown-how-top-100-saas-companies-structure-their-plans&apos;
    ];
  } catch (error) {
    console.error(&apos;Error reading blog directory:&apos;, error);
    return [];
  }
}

const staticPages = [
  { url: &apos;/&apos;, priority: &apos;1.0&apos;, changefreq: &apos;daily&apos; },
  { url: &apos;/blog&apos;, priority: &apos;0.9&apos;, changefreq: &apos;daily&apos; },
  { url: &apos;/blog/neural-stream&apos;, priority: &apos;0.9&apos;, changefreq: &apos;daily&apos; },
  { url: &apos;/ai-tools&apos;, priority: &apos;0.8&apos;, changefreq: &apos;weekly&apos; },
  { url: &apos;/compare&apos;, priority: &apos;0.8&apos;, changefreq: &apos;weekly&apos; },
  { url: &apos;/new-tools&apos;, priority: &apos;0.8&apos;, changefreq: &apos;daily&apos; },
  { url: &apos;/suggest-tool&apos;, priority: &apos;0.7&apos;, changefreq: &apos;monthly&apos; },
  { url: &apos;/favorites&apos;, priority: &apos;0.7&apos;, changefreq: &apos;weekly&apos; },
  { url: &apos;/about&apos;, priority: &apos;0.6&apos;, changefreq: &apos;monthly&apos; },
  { url: &apos;/contact&apos;, priority: &apos;0.5&apos;, changefreq: &apos;monthly&apos; },
  { url: &apos;/terms&apos;, priority: &apos;0.4&apos;, changefreq: &apos;yearly&apos; },
  { url: &apos;/privacy&apos;, priority: &apos;0.4&apos;, changefreq: &apos;yearly&apos; }
];

// Get all categories and subcategories from the tools data
// In a real implementation, you would import the actual tools data
function getAllCategoriesAndSubcategories() {
  // This is a simplified version - in reality you would extract this from your tools data
  return {
    categories: [
      &apos;Development&apos;, &apos;Content Creation&apos;, &apos;Business&apos;, &apos;Analytics&apos;, &apos;Design&apos;,
      &apos;Marketing&apos;, &apos;Productivity&apos;, &apos;Education&apos;, &apos;Healthcare&apos;, &apos;Finance&apos;,
      &apos;Cybersecurity&apos;, &apos;E-commerce&apos;, &apos;Data Science&apos;, &apos;Legal Services&apos;,
      &apos;Human Resources&apos;, &apos;Retail&apos;, &apos;Energy&apos;, &apos;Entertainment&apos;, &apos;Manufacturing&apos;,
      &apos;Agriculture&apos;, &apos;Transportation&apos;, &apos;Real Estate&apos;, &apos;Media&apos;, &apos;Sports&apos;,
      &apos;Fashion&apos;, &apos;Music&apos;, &apos;Gaming&apos;, &apos;Construction&apos;, &apos;Utilities&apos;, &apos;Mining&apos;,
      &apos;Aviation&apos;, &apos;Maritime&apos;, &apos;Financial Technology&apos;, &apos;Future Technologies&apos;,
      &apos;Space Exploration&apos;, &apos;Robotics&apos;, &apos;Quantum Computing&apos;, &apos;Biotechnology&apos;,
      &apos;Climate Change&apos;, &apos;Smart Cities&apos;, &apos;Defense&apos;, &apos;Agriculture Technology&apos;,
      &apos;Environmental Science&apos;, &apos;Renewable Energy&apos;, &apos;Food Technology&apos;,
      &apos;Water Management&apos;, &apos;Waste Management&apos;, &apos;Forestry&apos;, &apos;Oceanography&apos;,
      &apos;Philosophy&apos;, &apos;History&apos;, &apos;Literature&apos;, &apos;Meteorology&apos;, &apos;Geology&apos;,
      &apos;Archaeology&apos;, &apos;Linguistics&apos;, &apos;Psychology&apos;, &apos;Sociology&apos;, &apos;Anthropology&apos;
    ],
    subcategories: [
      // This would be dynamically generated from your tools data
      &apos;AI & Generative Art&apos;, &apos;Writing & Content&apos;, &apos;Image Generation&apos;,
      &apos;Video Animation&apos;, &apos;AI Agents & Automation&apos;, &apos;Development Tools&apos;,
      &apos;Marketing Tools&apos;, &apos;Productivity Tools&apos;, &apos;Tool Comparison&apos;,
      &apos;Future Tech&apos;, &apos;Machine Learning&apos;, &apos;Business Automation&apos;,
      &apos;Business Analytics&apos;, &apos;AI Ethics&apos;, &apos;Healthcare&apos;, &apos;Education&apos;,
      &apos;Finance&apos;, &apos;Cybersecurity&apos;, &apos;E-commerce&apos;, &apos;Data Science&apos;,
      &apos;Legal Services&apos;, &apos;Human Resources&apos;, &apos;Retail&apos;, &apos;Energy&apos;,
      &apos;Entertainment&apos;, &apos;Manufacturing&apos;, &apos;Agriculture&apos;, &apos;Transportation&apos;,
      &apos;Real Estate&apos;, &apos;Media&apos;, &apos;Sports&apos;, &apos;Fashion&apos;, &apos;Music&apos;, &apos;Gaming&apos;,
      &apos;Construction&apos;, &apos;Utilities&apos;, &apos;Mining&apos;, &apos;Aviation&apos;, &apos;Maritime&apos;,
      &apos;Financial Technology&apos;, &apos;Future Technologies&apos;, &apos;Space Exploration&apos;,
      &apos;Robotics&apos;, &apos;Quantum Computing&apos;, &apos;Biotechnology&apos;, &apos;Climate Change&apos;,
      &apos;Smart Cities&apos;, &apos;Defense&apos;, &apos;Agriculture Technology&apos;,
      &apos;Environmental Science&apos;, &apos;Renewable Energy&apos;, &apos;Food Technology&apos;,
      &apos;Water Management&apos;, &apos;Waste Management&apos;, &apos;Forestry&apos;, &apos;Oceanography&apos;,
      &apos;Philosophy&apos;, &apos;History&apos;, &apos;Literature&apos;, &apos;Meteorology&apos;, &apos;Geology&apos;,
      &apos;Archaeology&apos;, &apos;Linguistics&apos;, &apos;Psychology&apos;, &apos;Sociology&apos;, &apos;Anthropology&apos;
    ]
  };
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const baseUrl = &apos;https://aether-nexus.vercel.app&apos;;
    const currentDate = new Date().toISOString();
    
    // Generate XML sitemap
    let xml = &apos;<?xml version="1.0&quot; encoding="UTF-8&quot;?>\n&apos;;
    xml += &apos;<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9&quot;\n';
    xml += '        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9&quot;\n';
    xml += '        xmlns:xhtml="http://www.w3.org/1999/xhtml&quot;\n';
    xml += '        xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0&quot;\n';
    xml += '        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1&quot;\n';
    xml += '        xmlns:video="http://www.google.com/schemas/sitemap-video/1.1&quot;>\n\n';

    // Add static pages
    staticPages.forEach(page => {
      xml += &apos;  <url>\n&apos;;
      xml += `    <loc>${baseUrl}${page.url}</loc>\n`;
      xml += `    <lastmod>${currentDate}</lastmod>\n`;
      xml += `    <changefreq>${page.changefreq}</changefreq>\n`;
      xml += `    <priority>${page.priority}</priority>\n`;
      xml += &apos;  </url>\n\n';
    });

    // Add blog posts
    const blogSlugs = getAllBlogPostSlugs();
    blogSlugs.forEach(slug => {
      xml += &apos;  <url>\n&apos;;
      xml += `    <loc>${baseUrl}/blog/${slug}</loc>\n`;
      xml += `    <lastmod>${currentDate}</lastmod>\n`;
      xml += &apos;    <changefreq>weekly</changefreq>\n&apos;;
      xml += &apos;    <priority>0.8</priority>\n&apos;;
      xml += &apos;  </url>\n\n';
    });

    // Add category pages
    const { categories, subcategories } = getAllCategoriesAndSubcategories();
    categories.forEach(category => {
      const slug = category.toLowerCase().replace(/\s+/g, &apos;-&apos;);
      xml += &apos;  <url>\n&apos;;
      xml += `    <loc>${baseUrl}/ai-tools/${slug}</loc>\n`;
      xml += `    <lastmod>${currentDate}</lastmod>\n`;
      xml += &apos;    <changefreq>weekly</changefreq>\n&apos;;
      xml += &apos;    <priority>0.7</priority>\n&apos;;
      xml += &apos;  </url>\n\n';
    });

    // Add subcategory pages (simplified - in reality you'd want to match them with their categories)
    subcategories.forEach(subcategory => {
      const slug = subcategory.toLowerCase().replace(/\s+/g, &apos;-&apos;).replace(/&/g, &apos;and&apos;);
      xml += &apos;  <url>\n&apos;;
      xml += `    <loc>${baseUrl}/ai-tools/category/${slug}</loc>\n`;
      xml += `    <lastmod>${currentDate}</lastmod>\n`;
      xml += &apos;    <changefreq>weekly</changefreq>\n&apos;;
      xml += &apos;    <priority>0.6</priority>\n&apos;;
      xml += &apos;  </url>\n\n&apos;;
    });

    xml += &apos;</urlset>&apos;;

    // Set response headers
    res.setHeader(&apos;Content-Type&apos;, &apos;application/xml&apos;);
    res.setHeader(&apos;Cache-Control&apos;, &apos;public, s-maxage=3600, stale-while-revalidate=86400&apos;);
    
    // Send XML response
    res.status(200).send(xml);

  } catch (error) {
    console.error(&apos;Sitemap generation error:&apos;, error);
    res.status(500).json({ error: &apos;Failed to generate sitemap&apos; });
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