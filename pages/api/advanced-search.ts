import { NextApiRequest, NextApiResponse } from 'next';
import { advancedSearchService, AdvancedSearchConfig } from '../../services/advancedSearchService';
import { Document } from '../../services/searchService';
import { loadDocuments } from '../../services/searchService';

// In-memory cache for documents
let cachedDocuments: Document[] = [];
let lastCacheUpdate = 0;
const CACHE_TTL = 10 * 60 * 1000; // 10 minutes

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  
  // Handle CORS preflight
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }
  
  if (req.method !== 'GET' && req.method !== 'POST') {
    return res.status(405).json({ 
      success: false,
      message: 'Method not allowed' 
    });
  }
  
  try {
    // Parse query parameters or body
    const {
      q: query,
      limit,
      type,
      category,
      subcategory,
      minRating,
      minReviews,
      maxPrice,
      pricingType,
      sortBy,
      sortOrder,
      userId,
      enableQuantumSearch,
      enableNeuromorphicSearch,
      enableConsciousnessAwareSearch,
      enableMultiverseSearch,
      enablePersonalization,
      enableDiversity,
      enableSentimentAnalysis,
      enableEntityExtraction,
      enableClustering,
      enableSummarization,
      enableExplanation,
      enableReranking
    } = req.method === 'GET' ? req.query : req.body;
    
    if (!query || typeof query !== 'string') {
      return res.status(400).json({ 
        success: false,
        message: 'Query parameter is required',
        results: []
      });
    }
    
    // Refresh cache if needed
    const now = Date.now();
    if (now - lastCacheUpdate > CACHE_TTL || cachedDocuments.length === 0) {
      console.log(&apos;Refreshing document cache...&apos;);
      try {
        cachedDocuments = await loadDocuments();
        lastCacheUpdate = now;
        console.log(`Cache refreshed with ${cachedDocuments.length} documents`);
      } catch (cacheError) {
        console.error(&apos;Error refreshing cache:&apos;, cacheError);
        // If cache refresh fails, use existing cache if available
        if (cachedDocuments.length === 0) {
          // If no cache and refresh failed, return error
          return res.status(500).json({ 
            success: false,
            message: &apos;Failed to load search data&apos;,
            results: []
          });
        }
        // Continue with existing cache
      }
    }
    
    // Build search configuration from query parameters
    const searchConfig: AdvancedSearchConfig = {
      userId: userId as string,
      enableQuantumSearch: enableQuantumSearch === &apos;true&apos;,
      enableNeuromorphicSearch: enableNeuromorphicSearch === &apos;true&apos;,
      enableConsciousnessAwareSearch: enableConsciousnessAwareSearch === &apos;true&apos;,
      enableMultiverseSearch: enableMultiverseSearch === &apos;true&apos;,
      enablePersonalization: enablePersonalization === &apos;true&apos;,
      enableDiversity: enableDiversity === &apos;true&apos;,
      enableSentimentAnalysis: enableSentimentAnalysis === &apos;true&apos;,
      enableEntityExtraction: enableEntityExtraction === &apos;true&apos;,
      enableClustering: enableClustering === &apos;true&apos;,
      enableSummarization: enableSummarization === &apos;true&apos;,
      enableExplanation: enableExplanation === &apos;true&apos;,
      enableReranking: enableReranking === &apos;true&apos;
    };
    
    // Build search options from query parameters
    const searchOptions = {
      limit: limit ? Number(limit) : 20,
      sortBy: sortBy as any,
      sortOrder: sortOrder as any,
      filters: {
        ...(type && { type: type as any }),
        ...(category && { category: category as string | string[] }),
        ...(subcategory && { subcategory: subcategory as string | string[] }),
        ...(minRating && { minRating: Number(minRating) }),
        ...(minReviews && { minReviews: Number(minReviews) }),
        ...(maxPrice && { maxPrice: Number(maxPrice) }),
        ...(pricingType && { pricingType: pricingType as any })
      }
    };
    
    // Perform advanced search
    console.time(`Advanced Search API - ${query}`);
    const searchResponse = await advancedSearchService.search(
      query,
      cachedDocuments,
      searchOptions,
      searchConfig
    );
    console.timeEnd(`Advanced Search API - ${query}`);
    
    return res.status(200).json({ 
      success: true,
      ...searchResponse
    });
    
  } catch (error) {
    console.error(&apos;Advanced search error:&apos;, error);
    return res.status(500).json({ 
      success: false,
      message: &apos;Error performing search&apos;,
      error: error instanceof Error ? error.message : &apos;Unknown error&apos;
    });
  }
}