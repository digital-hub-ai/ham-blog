/**
 * Voice search service with speech recognition and processing
 */

// Voice search command patterns
const voiceCommands = {
  search: [
    &apos;search for&apos;, &apos;find&apos;, &apos;look for&apos;, &apos;show me&apos;, &apos;i want to find&apos;,
    &apos;can you find&apos;, &apos;please search for&apos;, &apos;search&apos;
  ],
  filter: {
    category: [&apos;in category&apos;, &apos;under category&apos;, &apos;from category&apos;, &apos;category&apos;],
    rating: [&apos;rated&apos;, &apos;with rating&apos;, &apos;rating above&apos;, &apos;rating over&apos;],
    price: [&apos;under&apos;, &apos;below&apos;, &apos;less than&apos;, &apos;cheaper than&apos;, &apos;costs less than&apos;],
    type: [&apos;type&apos;, &apos;kind of&apos;, &apos;sort of&apos;]
  },
  sort: [
    &apos;sort by&apos;, &apos;order by&apos;, &apos;rank by&apos;, &apos;arrange by&apos;
  ]
};

// Process voice search query
export function processVoiceQuery(query: string): {
  searchTerms: string[];
  filters: Record<string, any>;
  sortBy?: string;
  sortOrder?: &apos;asc&apos; | &apos;desc&apos;;
} {
  const result = {
    searchTerms: [] as string[],
    filters: {} as Record<string, any>,
    sortBy: undefined as string | undefined,
    sortOrder: undefined as 'asc' | 'desc' | undefined
  };

  // Convert to lowercase for processing
  let processedQuery = query.toLowerCase().trim();

  // Extract search terms by removing command words
  const searchTerms: string[] = [];
  
  // Remove command prefixes
  for (const command of voiceCommands.search) {
    if (processedQuery.startsWith(command)) {
      processedQuery = processedQuery.substring(command.length).trim();
      break;
    }
  }

  // Extract filters
  // Rating filters (e.g., &quot;rated 4 stars&quot; or &quot;rating above 3&quot;)
  const ratingMatch = processedQuery.match(/(?:rated|ratin(?:g|gs?)\s+(?:above|over|more than))\s+(\d+(?:\.\d+)?)/i);
  if (ratingMatch) {
    result.filters.minRating = parseFloat(ratingMatch[1]);
    processedQuery = processedQuery.replace(ratingMatch[0], '').trim();
  }

  // Price filters (e.g., &quot;under $50&quot; or &quot;less than 20 dollars&quot;)
  const priceMatch = processedQuery.match(/(?:under|below|less than|cheaper than|costs less than)\s+\$?(\d+(?:\.\d+)?)/i);
  if (priceMatch) {
    result.filters.maxPrice = parseFloat(priceMatch[1]);
    processedQuery = processedQuery.replace(priceMatch[0], '').trim();
  }

  // Category filters (e.g., &quot;in image generation category&quot;)
  const categoryMatch = processedQuery.match(/(?:in|under|from)?\s*category\s+(.+?)(?:\s+(?:category|section))?$/i);
  if (categoryMatch) {
    result.filters.category = categoryMatch[1].trim();
    processedQuery = processedQuery.replace(categoryMatch[0], '').trim();
  }

  // Sort commands (e.g., &quot;sort by rating&quot; or &quot;order by price&quot;)
  const sortMatch = processedQuery.match(/(?:sort|order|rank)\s+by\s+(rating|price|date|title|relevance)(?:\s+(ascending|descending|asc|desc))?/i);
  if (sortMatch) {
    result.sortBy = sortMatch[1].toLowerCase();
    if (sortMatch[2]) {
      const order = sortMatch[2].toLowerCase();
      result.sortOrder = order.startsWith('desc') ? 'desc' : 'asc';
    }
    processedQuery = processedQuery.replace(sortMatch[0], '').trim();
  }

  // Extract remaining terms as search terms
  if (processedQuery) {
    result.searchTerms = processedQuery
      .split(/\s+/)
      .filter(term => term.length > 0 && ![&apos;and&apos;, &apos;or&apos;, &apos;the&apos;, &apos;a&apos;, &apos;an&apos;].includes(term));
  }

  return result;
}

// Convert voice query to search API parameters
export function voiceQueryToSearchParams(query: string): Record<string, string> {
  const processed = processVoiceQuery(query);
  const params: Record<string, string> = {};

  // Add search terms
  if (processed.searchTerms.length > 0) {
    params.q = processed.searchTerms.join(' ');
  }

  // Add filters
  if (processed.filters.category) {
    params.category = processed.filters.category;
  }
  if (processed.filters.minRating) {
    params.minRating = processed.filters.minRating.toString();
  }
  if (processed.filters.maxPrice) {
    params.maxPrice = processed.filters.maxPrice.toString();
  }

  // Add sorting
  if (processed.sortBy) {
    params.sortBy = processed.sortBy;
  }
  if (processed.sortOrder) {
    params.sortOrder = processed.sortOrder;
  }

  return params;
}

// Generate voice search suggestions
export function generateVoiceSearchSuggestions(previousQueries: string[] = []): string[] {
  const baseSuggestions = [
    &quot;Search for image generation tools&quot;,
    &quot;Find AI writing assistants&quot;,
    &quot;Show me video editing AI&quot;,
    &quot;Look for free SEO tools&quot;,
    &quot;Search for chatbots rated 4 stars or higher&quot;,
    &quot;Find AI tools under $20&quot;,
    &quot;Show me productivity tools in the writing category&quot;,
    &quot;Search for tools sorted by rating&quot;,
    &quot;Find the best AI tools for content creation&quot;,
    &quot;Look for machine learning platforms&quot;
  ];

  // Add personalized suggestions based on previous queries
  const personalizedSuggestions: string[] = [];
  if (previousQueries.length > 0) {
    const lastQuery = previousQueries[previousQueries.length - 1];
    if (lastQuery) {
      personalizedSuggestions.push(`Search for more like &quot;${lastQuery}&quot;`);
      personalizedSuggestions.push(`Find alternatives to &quot;${lastQuery}&quot;`);
    }
  }

  // Combine and limit to 10 suggestions
  return [...personalizedSuggestions, ...baseSuggestions].slice(0, 10);
}

// Voice command templates
export const voiceCommandTemplates = {
  basicSearch: [
    &quot;Search for {query}&quot;,
    &quot;Find {query}&quot;,
    &quot;Look for {query}&quot;,
    &quot;Show me {query}&quot;
  ],
  filteredSearch: [
    &quot;Find {query} rated {rating} stars or higher&quot;,
    &quot;Search for {query} under ${price}&quot;,
    &quot;Show me {query} in the {category} category&quot;,
    &quot;Find {query} sorted by {sortField}&quot;
  ],
  complexSearch: [
    &quot;Search for {query} rated above {rating} and under ${price}&quot;,
    &quot;Find {query} in {category} sorted by rating&quot;,
    &quot;Show me {query} with high ratings in the {category} category&quot;
  ]
};

export default {
  processVoiceQuery,
  voiceQueryToSearchParams,
  generateVoiceSearchSuggestions,
  voiceCommandTemplates
};