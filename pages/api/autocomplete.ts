import { NextApiRequest, NextApiResponse } from &apos;next&apos;;
import { getAutocompleteSuggestions, getTrendingSearchTerms } from &apos;../../services/autocomplete&apos;;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Set CORS headers
  res.setHeader(&apos;Access-Control-Allow-Origin&apos;, &apos;*&apos;);
  res.setHeader(&apos;Access-Control-Allow-Methods&apos;, &apos;GET, OPTIONS&apos;);
  res.setHeader(&apos;Access-Control-Allow-Headers&apos;, &apos;Content-Type&apos;);

  // Handle CORS preflight
  if (req.method === &apos;OPTIONS&apos;) {
    return res.status(200).end();
  }

  if (req.method !== &apos;GET&apos;) {
    return res.status(405).json({ 
      success: false,
      message: &apos;Method not allowed&apos; 
    });
  }

  const { q: query, type = &apos;suggestions&apos; } = req.query;

  try {
    if (type === &apos;trending&apos;) {
      const trendingTerms = getTrendingSearchTerms(10);
      return res.status(200).json({ 
        success: true,
        type: &apos;trending&apos;,
        terms: trendingTerms
      });
    }

    if (!query || typeof query !== &apos;string&apos;) {
      // Return trending terms if no query
      const trendingTerms = getTrendingSearchTerms(10);
      return res.status(200).json({ 
        success: true,
        type: &apos;trending&apos;,
        terms: trendingTerms
      });
    }

    const suggestions = getAutocompleteSuggestions(query, 10);
    
    return res.status(200).json({ 
      success: true,
      type: &apos;suggestions&apos;,
      query,
      suggestions
    });
  } catch (error) {
    console.error(&apos;Autocomplete error:&apos;, error);
    return res.status(500).json({ 
      success: false,
      message: &apos;Error generating autocomplete suggestions&apos;,
      error: error instanceof Error ? error.message : &apos;Unknown error&apos;
    });
  }
}