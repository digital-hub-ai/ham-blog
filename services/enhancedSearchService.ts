import { SearchResult, SearchOptions } from &apos;./searchService&apos;;

// Cache for search results
const searchCache = new Map<string, { data: any; timestamp: number }>();
const CACHE_TTL = 5 * 60 * 1000; // 5 minutes cache TTL

/**
 * Enhanced search function that uses the new v2 search API
 */
export const enhancedSearch = async (
  query: string,
  options: SearchOptions = {}
): Promise<{
  results: SearchResult[];
  facets: any;
  metadata: any;
}> => {
  // Create a cache key based on query and options
  const cacheKey = JSON.stringify({ query, options });
  const cached = searchCache.get(cacheKey);
  
  // Return cached result if available and not expired
  if (cached && Date.now() - cached.timestamp < CACHE_TTL) {
    return cached.data;
  }

  try {
    // Build query parameters
    const params = new URLSearchParams();
    
    // Add query
    if (query) params.append('q', query);
    
    // Add pagination and limits
    if (options.limit) params.append('limit', options.limit.toString());
    
    // Add filters
    if (options.filters) {
      const { filters } = options;
      
      // Type filter
      if (filters.type) {
        if (Array.isArray(filters.type)) {
          filters.type.forEach(type => params.append('type', type));
        } else {
          params.append('type', filters.type);
        }
      }
      
      // Category filter
      if (filters.category) {
        if (Array.isArray(filters.category)) {
          filters.category.forEach(cat => params.append('category', cat));
        } else {
          params.append('category', filters.category);
        }
      }
      
      // Other filters
      if (filters.minRating) params.append('minRating', filters.minRating.toString());
      if (filters.maxPrice) params.append('maxPrice', filters.maxPrice.toString());
      if (filters.pricingType) params.append('pricingType', filters.pricingType);
      if (filters.tags?.length) {
        filters.tags.forEach(tag => params.append('tag', tag));
      }
      
      // Date filters
      if (filters.date) params.append('date', filters.date);
      if (filters.launchDateFrom) params.append('launchDateFrom', filters.launchDateFrom);
      if (filters.launchDateTo) params.append('launchDateTo', filters.launchDateTo);
      if (filters.lastUpdatedFrom) params.append('lastUpdatedFrom', filters.lastUpdatedFrom);
      if (filters.lastUpdatedTo) params.append('lastUpdatedTo', filters.lastUpdatedTo);
      
      // Feature filters
      if (filters.features) {
        if (Array.isArray(filters.features)) {
          filters.features.forEach(feature => params.append(&apos;features&apos;, feature));
        } else {
          params.append(&apos;features&apos;, filters.features);
        }
      }
    }
    
    // Add sorting
    if (options.sortBy) params.append(&apos;sortBy&apos;, options.sortBy);
    if (options.sortOrder) params.append(&apos;sortOrder&apos;, options.sortOrder);
    
    // Add personalization options
    if (options.userId) params.append(&apos;userId&apos;, options.userId);
    if (options.boostFavorites) params.append(&apos;boostFavorites&apos;, &apos;true&apos;);
    if (options.boostHistory) params.append(&apos;boostHistory&apos;, &apos;true&apos;);
    if (options.excludeDisliked) params.append(&apos;excludeDisliked&apos;, &apos;true&apos;);
    
    // Make the API request
    const response = await fetch(`/api/v2/search?${params.toString()}`);
    
    if (!response.ok) {
      throw new Error(`Search failed: ${response.statusText}`);
    }
    
    const data = await response.json();
    
    if (!data.success) {
      throw new Error(data.message || &apos;Search failed&apos;);
    }
    
    // Cache the result
    searchCache.set(cacheKey, {
      data: {
        results: data.results,
        facets: data.facets,
        metadata: data.metadata
      },
      timestamp: Date.now()
    });
    
    return {
      results: data.results,
      facets: data.facets,
      metadata: data.metadata
    };
  } catch (error) {
    console.error(&apos;Search error:&apos;, error);
    throw error;
  }
};

/**
 * Get search suggestions based on query
 */
export const getSearchSuggestions = async (query: string): Promise<string[]> => {
  try {
    const response = await fetch(`/api/v2/suggest?q=${encodeURIComponent(query)}`);
    if (!response.ok) return [];
    const data = await response.json();
    return data.suggestions || [];
  } catch (error) {
    console.error('Error getting search suggestions:', error);
    return [];
  }
};

/**
 * Get search analytics
 */
export const getSearchAnalytics = async () => {
  try {
    const response = await fetch('/api/v2/search/analytics');
    if (!response.ok) return null;
    return await response.json();
  } catch (error) {
    console.error('Error getting search analytics:', error);
    return null;
  }
};

/**
 * Track search click event
 */
export const trackSearchClick = async (resultId: string, query: string, position: number) => {
  try {
    await fetch(&apos;/api/v2/search/track&apos;, {
      method: &apos;POST&apos;,
      headers: {
        &apos;Content-Type&apos;: &apos;application/json&apos;,
      },
      body: JSON.stringify({
        resultId,
        query,
        position,
        timestamp: new Date().toISOString(),
      }),
    });
  } catch (error) {
    console.error(&apos;Error tracking search click:&apos;, error);
  }
};

export default enhancedSearch;
