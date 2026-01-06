import { NextApiRequest, NextApiResponse } from &apos;next&apos;;
import { 
  getSearchAnalytics, 
  getPerformanceMetrics, 
  logSearchQuery
} from &apos;../../services/searchAnalytics&apos;;

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
        const { 
          action = &apos;overview&apos;,
          query,
          userId
        } = req.query;
        
        switch (action) {
          case &apos;overview&apos;:
            // Get overall search analytics
            const analytics = getSearchAnalytics();
            return res.status(200).json({ 
              success: true,
              analytics
            });
            
          case &apos;query&apos;:
            // Get performance data for a specific query
            if (!query || typeof query !== &apos;string&apos;) {
              return res.status(400).json({ 
                success: false,
                message: &apos;Query parameter is required&apos;
              });
            }
            
            // We&apos;ll use logSearchQuery to track this query for performance analysis
            // In a real implementation, you would have a more sophisticated performance tracking system
            const performance = getPerformanceMetrics();
            return res.status(200).json({ 
              success: true,
              query,
              performance
            });
            
          case &apos;user&apos;:
            // For now, we&apos;ll return a placeholder since getUserSearchBehavior doesn&apos;t exist
            return res.status(200).json({ 
              success: true,
              userId,
              behavior: {
                totalSearches: 0,
                favoriteCategories: [],
                preferredFilters: {},
                searchFrequency: &apos;low&apos;
              }
            });
            
          default:
            return res.status(400).json({ 
              success: false,
              message: &apos;Invalid action parameter&apos;
            });
        }
        
      case &apos;POST&apos;:
        // Track a search event
        const { event } = req.body;
        
        if (!event) {
          return res.status(400).json({ 
            success: false,
            message: &apos;Event object is required in request body&apos;
          });
        }
        
        // Log the search query
        logSearchQuery({
          id: event.id || Date.now().toString(),
          query: event.query || &apos;&apos;,
          timestamp: new Date(event.timestamp || Date.now()),
          resultsCount: event.resultsCount || 0,
          responseTime: event.responseTime || 0,
          filtersApplied: event.filtersApplied || {},
          sortBy: event.sortBy || &apos;&apos;,
          userId: event.userId
        });
        
        return res.status(200).json({ 
          success: true,
          message: &apos;Search event tracked successfully&apos;
        });
        
      default:
        return res.status(405).json({ 
          success: false,
          message: &apos;Method not allowed&apos; 
        });
    }
  } catch (error) {
    console.error(&apos;Search analytics error:&apos;, error);
    return res.status(500).json({ 
      success: false,
      message: &apos;Error processing search analytics&apos;,
      error: error instanceof Error ? error.message : &apos;Unknown error&apos;
    });
  }
}