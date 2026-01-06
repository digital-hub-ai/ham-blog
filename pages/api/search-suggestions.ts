import { NextApiRequest, NextApiResponse } from &apos;next&apos;;
import { getSearchSuggestions, trackSearchQuery } from &apos;../../services/searchSuggestions&apos;;
import { loadDocuments } from &apos;../../services/searchService&apos;;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Set CORS headers
  res.setHeader(&apos;Access-Control-Allow-Origin&apos;, &apos;*&apos;);
  res.setHeader(&apos;Access-Control-Allow-Methods&apos;, &apos;GET, POST, OPTIONS&apos;);
  res.setHeader(&apos;Access-Control-Allow-Headers&apos;, &apos;Content-Type, Authorization&apos;);

  // Handle CORS preflight
  if (req.method === &apos;OPTIONS&apos;) {
    return res.status(200).end();
  }

  try {
    switch (req.method) {
      case &apos;GET&apos;:
        const { q: query, type = &apos;all&apos; } = req.query;
        
        // Load documents for context
        const documents = await loadDocuments();
        
        // Get suggestions
        const suggestions = getSearchSuggestions({
          partialQuery: query as string,
          documents,
          type: type as any
        });
        
        return res.status(200).json({ 
          success: true,
          suggestions
        });
        
      case &apos;POST&apos;:
        // Track a search query
        const { searchQuery } = req.body;
        
        if (searchQuery) {
          trackSearchQuery(searchQuery);
        }
        
        return res.status(200).json({ 
          success: true,
          message: &apos;Search query tracked successfully&apos;
        });
        
      default:
        return res.status(405).json({ 
          success: false,
          message: &apos;Method not allowed&apos; 
        });
    }
  } catch (error) {
    console.error(&apos;Search suggestions error:&apos;, error);
    return res.status(500).json({ 
      success: false,
      message: &apos;Error processing search suggestions&apos;,
      error: error instanceof Error ? error.message : &apos;Unknown error&apos;
    });
  }
}