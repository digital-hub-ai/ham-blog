import { NextApiRequest, NextApiResponse } from &apos;next&apos;;
import { 
  addToSearchHistory, 
  recordClickedResult, 
  getRecentSearches, 
  getPersonalizedSuggestions,
  getUserSearchStats,
  clearSearchHistory
} from &apos;../../services/searchHistory&apos;;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Set CORS headers
  res.setHeader(&apos;Access-Control-Allow-Origin&apos;, &apos;*&apos;);
  res.setHeader(&apos;Access-Control-Allow-Methods&apos;, &apos;GET, POST, DELETE, OPTIONS&apos;);
  res.setHeader(&apos;Access-Control-Allow-Headers&apos;, &apos;Content-Type, Authorization&apos;);

  // Handle CORS preflight
  if (req.method === &apos;OPTIONS&apos;) {
    return res.status(200).end();
  }

  // For demo purposes, we&apos;ll use a simple user ID
  // In a real application, this would come from authentication
  const userId = (req.headers[&apos;x-user-id&apos;] as string) || &apos;anonymous&apos;;
  
  try {
    switch (req.method) {
      case &apos;GET&apos;:
        const { action: getAction = &apos;recent&apos;, query } = req.query;
        
        switch (getAction) {
          case &apos;recent&apos;:
            const recentSearches = getRecentSearches(userId, 10);
            return res.status(200).json({ 
              success: true,
              action: &apos;recent&apos;,
              searches: recentSearches
            });
            
          case &apos;suggestions&apos;:
            const suggestions = getPersonalizedSuggestions(userId, query as string, 10);
            return res.status(200).json({ 
              success: true,
              action: &apos;suggestions&apos;,
              query,
              suggestions
            });
            
          case &apos;stats&apos;:
            const stats = getUserSearchStats(userId);
            return res.status(200).json({ 
              success: true,
              action: &apos;stats&apos;,
              stats
            });
            
          default:
            return res.status(400).json({ 
              success: false,
              message: &apos;Invalid action parameter&apos; 
            });
        }
        
      case &apos;POST&apos;:
        const { action: postAction, data } = req.body;
        
        switch (postAction) {
          case &apos;recordSearch&apos;:
            if (!data?.query) {
              return res.status(400).json({ 
                success: false,
                message: &apos;Query is required&apos; 
              });
            }
            addToSearchHistory(userId, data.query, data.resultsCount || 0);
            return res.status(200).json({ 
              success: true,
              message: &apos;Search recorded&apos;
            });
            
          case &apos;recordClick&apos;:
            if (!data?.query || !data?.resultId) {
              return res.status(400).json({ 
                success: false,
                message: &apos;Query and resultId are required&apos; 
              });
            }
            recordClickedResult(userId, data.query, data.resultId);
            return res.status(200).json({ 
              success: true,
              message: &apos;Click recorded&apos;
            });
            
          default:
            return res.status(400).json({ 
              success: false,
              message: &apos;Invalid action&apos; 
            });
        }
        
      case &apos;DELETE&apos;:
        clearSearchHistory(userId);
        return res.status(200).json({ 
          success: true,
          message: &apos;Search history cleared&apos;
        });
        
      default:
        return res.status(405).json({ 
          success: false,
          message: &apos;Method not allowed&apos; 
        });
    }
  } catch (error) {
    console.error(&apos;Search history error:&apos;, error);
    return res.status(500).json({ 
      success: false,
      message: &apos;Error processing search history request&apos;,
      error: error instanceof Error ? error.message : &apos;Unknown error&apos;
    });
  }
}