import { NextApiRequest, NextApiResponse } from &apos;next&apos;;
import { applyAdvancedFilters, getAvailableFilterFields, getFilterFieldStatistics, createSimpleFilter, parseFilterString } from &apos;../../services/searchFilters&apos;;
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
    // Load documents
    const documents = await loadDocuments();
    
    switch (req.method) {
      case &apos;GET&apos;:
        const { 
          action = &apos;filter&apos;,
          filter: filterString,
          category,
          subcategory,
          minRating,
          maxPrice,
          tags,
          type,
          sortBy,
          sortOrder,
          limit,
          offset
        } = req.query;
        
        switch (action) {
          case &apos;fields&apos;:
            // Get available filter fields
            const fields = getAvailableFilterFields(documents);
            return res.status(200).json({ 
              success: true,
              fields
            });
            
          case &apos;statistics&apos;:
            // Get field statistics
            const field = req.query.field as string;
            if (!field) {
              return res.status(400).json({ 
                success: false,
                message: &apos;Field parameter is required for statistics&apos;
              });
            }
            
            const statistics = getFilterFieldStatistics(documents, field);
            return res.status(200).json({ 
              success: true,
              field,
              statistics
            });
            
          case &apos;filter&apos;:
          default:
            // Apply filters
            let filter;
            
            // Parse filter string if provided
            if (filterString && typeof filterString === &apos;string&apos;) {
              filter = parseFilterString(filterString);
            } else {
              // Create simple filter from query parameters
              filter = createSimpleFilter({
                category: category as string,
                subcategory: subcategory as string,
                minRating: minRating ? Number(minRating) : undefined,
                maxPrice: maxPrice ? Number(maxPrice) : undefined,
                tags: tags ? (Array.isArray(tags) ? tags : [tags]) : undefined,
                type: type as string
              });
            }
            
            // Add sorting and pagination if specified
            if (filter) {
              if (sortBy) filter.sortBy = sortBy as string;
              if (sortOrder) filter.sortOrder = sortOrder as &apos;asc&apos; | &apos;desc&apos;;
              if (limit) filter.limit = Number(limit);
              if (offset) filter.offset = Number(offset);
              
              const filteredDocuments = applyAdvancedFilters(documents, filter);
              
              return res.status(200).json({ 
                success: true,
                count: filteredDocuments.length,
                documents: filteredDocuments
              });
            }
            
            return res.status(400).json({ 
              success: false,
              message: &apos;No valid filter provided&apos;
            });
        }
        
      case &apos;POST&apos;:
        // Apply advanced filters from request body
        const { filter } = req.body;
        
        if (!filter) {
          return res.status(400).json({ 
            success: false,
            message: &apos;Filter object is required in request body&apos;
          });
        }
        
        const filteredDocuments = applyAdvancedFilters(documents, filter);
        
        return res.status(200).json({ 
          success: true,
          count: filteredDocuments.length,
          documents: filteredDocuments
        });
        
      default:
        return res.status(405).json({ 
          success: false,
          message: &apos;Method not allowed&apos; 
        });
    }
  } catch (error) {
    console.error(&apos;Search filters error:&apos;, error);
    return res.status(500).json({ 
      success: false,
      message: &apos;Error processing search filters&apos;,
      error: error instanceof Error ? error.message : &apos;Unknown error&apos;
    });
  }
}