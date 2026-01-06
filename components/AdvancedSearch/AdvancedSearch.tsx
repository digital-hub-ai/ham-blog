import { useState, useEffect } from &apos;react&apos;;
import { FaSearch, FaFilter, FaBrain, FaChartBar, FaRobot } from &apos;react-icons/fa&apos;;

interface SearchResult {
  id: string;
  title: string;
  content: string;
  url: string;
  type: string;
  category?: string;
  subcategory?: string;
  rating?: number;
  pricing?: string;
  tags?: string[];
  score: number;
  snippet: string;
  sentiment?: number;
  entities?: any[];
  diversityScore?: number;
  personalizationBoost?: number;
  explanations?: string[];
}

interface SearchResponse {
  success: boolean;
  message?: string;
  results: SearchResult[];
  queryUnderstanding: any;
  suggestions: string[];
  summary?: string;
  clusters?: any[];
  facets?: Record<string, any>;
  performance: {
    responseTime: number;
    modelUsed: string;
    resultsCount: number;
  };
}

const AdvancedSearch = () => {
  const [query, setQuery] = useState(&apos;&apos;);
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState({
    type: &apos;&apos;,
    category: &apos;&apos;,
    minRating: &apos;&apos;,
    pricing: &apos;&apos;,
  });
  const [searchConfig, setSearchConfig] = useState({
    enableQuantumSearch: false,
    enableNeuromorphicSearch: false,
    enableConsciousnessAwareSearch: false,
    enableMultiverseSearch: false,
    enablePersonalization: true,
    enableDiversity: true,
    enableSentimentAnalysis: true,
    enableEntityExtraction: true,
    enableClustering: true,
    enableSummarization: true,
    enableExplanation: true,
    enableReranking: true,
  });
  const [queryUnderstanding, setQueryUnderstanding] = useState<any>(null);
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [summary, setSummary] = useState<string | null>(null);
  const [performance, setPerformance] = useState<any>(null);

  const handleSearch = async () => {
    if (!query.trim()) return;
    
    setIsLoading(true);
    setError(null);
    
    try {
      const queryParams = new URLSearchParams({
        q: query,
        ...Object.fromEntries(
          Object.entries(filters).filter(([_, value]) => value !== '')
        ),
        ...Object.fromEntries(
          Object.entries(searchConfig).filter(([_, value]) => value === true)
            .map(([key]) => [key, 'true'])
        ),
      });
      
      const response = await fetch(`/api/advanced-search?${queryParams}`);
      const data: SearchResponse = await response.json();
      
      if (data.success) {
        setResults(data.results);
        setQueryUnderstanding(data.queryUnderstanding);
        setSuggestions(data.suggestions);
        setSummary(data.summary || null);
        setPerformance(data.performance);
      } else {
        setError(data.message || 'Search failed');
      }
    } catch (err) {
      setError('Failed to perform search');
      console.error('Search error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleFilterChange = (key: string, value: string) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  const handleConfigChange = (key: string, value: boolean) => {
    setSearchConfig(prev => ({ ...prev, [key]: value }));
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8&quot;>
      <div className="text-center mb-12&quot;>
        <h1 className="text-4xl font-bold text-gray-900 mb-4&quot;>
          Advanced AI-Powered Search
        </h1>
        <p className="text-xl text-gray-600&quot;>
          Experience the future of search with quantum-enhanced, consciousness-aware, and multiverse-powered results
        </p>
      </div>

      {/* Search Bar */}
      <div className="mb-8&quot;>
        <div className="flex shadow-lg rounded-lg overflow-hidden&quot;>
          <input
            type="text&quot;
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
            placeholder="Ask anything... (e.g., 'Best AI tools for content creation with sentiment analysis')&quot;
            className="flex-grow px-6 py-4 text-lg focus:outline-none&quot;
          />
          <button
            onClick={handleSearch}
            disabled={isLoading}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold disabled:opacity-50 transition-colors&quot;
          >
            {isLoading ? &apos;Searching...&apos; : &apos;Search&apos;}
          </button>
        </div>
        
        {suggestions.length > 0 && (
          <div className="mt-2 flex flex-wrap gap-2&quot;>
            {suggestions.slice(0, 5).map((suggestion, index) => (
              <button
                key={index}
                onClick={() => setQuery(suggestion)}
                className="text-sm bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-1 rounded-full transition-colors&quot;
              >
                {suggestion}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* AI Models Toggle */}
      <div className="mb-8 bg-gray-50 p-6 rounded-lg&quot;>
        <h2 className="text-xl font-semibold mb-4 flex items-center&quot;>
          <FaRobot className="mr-2&quot; />
          AI Enhancement Models
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4&quot;>
          {Object.entries(searchConfig).map(([key, value]) => (
            <label key={key} className="flex items-center space-x-2&quot;>
              <input
                type="checkbox&quot;
                checked={value}
                onChange={(e) => handleConfigChange(key, e.target.checked)}
                className="rounded&quot;
              />
              <span className="text-sm&quot;>
                {key.replace(/([A-Z])/g, &apos; $1).replace(/^./, str => str.toUpperCase())}
              </span>
            </label>
          ))}
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-8&quot;>
        {/* Filters Sidebar */}
        <div className={`lg:w-1/4 ${showFilters ? 'block' : 'hidden lg:block'}`}>
          <div className="bg-white shadow rounded-lg p-6 mb-6&quot;>
            <div className="flex justify-between items-center mb-4&quot;>
              <h2 className="text-lg font-semibold flex items-center&quot;>
                <FaFilter className="mr-2&quot; />
                Filters
              </h2>
              <button 
                onClick={() => setShowFilters(false)}
                className="lg:hidden text-gray-500 hover:text-gray-700&quot;
              >
                Close
              </button>
            </div>
            
            <div className="space-y-4&quot;>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1&quot;>
                  Content Type
                </label>
                <select
                  value={filters.type}
                  onChange={(e) => handleFilterChange(&apos;type, e.target.value)}
                  className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500&quot;
                >
                  <option value="&quot;>All Types</option>
                  <option value="tool&quot;>Tools</option>
                  <option value="blog&quot;>Blog Posts</option>
                  <option value="news&quot;>News</option>
                  <option value="update&quot;>Updates</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1&quot;>
                  Category
                </label>
                <input
                  type="text&quot;
                  value={filters.category}
                  onChange={(e) => handleFilterChange('category', e.target.value)}
                  placeholder="Enter category&quot;
                  className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500&quot;
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1&quot;>
                  Minimum Rating
                </label>
                <input
                  type="number&quot;
                  min="0&quot;
                  max="5&quot;
                  step="0.1&quot;
                  value={filters.minRating}
                  onChange={(e) => handleFilterChange('minRating', e.target.value)}
                  placeholder="0.0 - 5.0&quot;
                  className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500&quot;
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1&quot;>
                  Pricing
                </label>
                <select
                  value={filters.pricing}
                  onChange={(e) => handleFilterChange(&apos;pricing, e.target.value)}
                  className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500&quot;
                >
                  <option value="&quot;>All Pricing</option>
                  <option value="Free&quot;>Free</option>
                  <option value="Freemium&quot;>Freemium</option>
                  <option value="Paid&quot;>Paid</option>
                  <option value="Contact&quot;>Contact</option>
                  <option value="Open Source&quot;>Open Source</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="lg:w-3/4&quot;>
          {/* Query Understanding */}
          {queryUnderstanding && (
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6&quot;>
              <h3 className="font-semibold text-blue-800 mb-2&quot;>Query Understanding</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4&quot;>
                <div>
                  <span className="text-sm text-gray-600&quot;>Intent:</span>
                  <span className="ml-2 font-medium&quot;>{queryUnderstanding.intent}</span>
                </div>
                <div>
                  <span className="text-sm text-gray-600&quot;>Processed Query:</span>
                  <span className="ml-2 font-medium&quot;>{queryUnderstanding.processedQuery}</span>
                </div>
                <div>
                  <span className="text-sm text-gray-600&quot;>Entities Found:</span>
                  <span className="ml-2 font-medium&quot;>{queryUnderstanding.entities.length}</span>
                </div>
              </div>
            </div>
          )}

          {/* Summary */}
          {summary && (
            <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6&quot;>
              <h3 className="font-semibold text-green-800 mb-2&quot;>Search Summary</h3>
              <p className="text-green-700&quot;>{summary}</p>
            </div>
          )}

          {/* Performance Metrics */}
          {performance && (
            <div className="bg-purple-50 border border-purple-200 rounded-lg p-4 mb-6&quot;>
              <h3 className="font-semibold text-purple-800 mb-2 flex items-center&quot;>
                <FaChartBar className="mr-2&quot; />
                Performance Metrics
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4&quot;>
                <div>
                  <span className="text-sm text-gray-600&quot;>Response Time:</span>
                  <span className="ml-2 font-medium&quot;>{performance.responseTime}ms</span>
                </div>
                <div>
                  <span className="text-sm text-gray-600&quot;>Model Used:</span>
                  <span className="ml-2 font-medium&quot;>{performance.modelUsed}</span>
                </div>
                <div>
                  <span className="text-sm text-gray-600&quot;>Results:</span>
                  <span className="ml-2 font-medium&quot;>{performance.resultsCount}</span>
                </div>
              </div>
            </div>
          )}

          {/* Results */}
          {isLoading ? (
            <div className="flex justify-center items-center h-64&quot;>
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600&quot;></div>
            </div>
          ) : error ? (
            <div className="bg-red-50 border border-red-200 rounded-lg p-6 text-center&quot;>
              <p className="text-red-700&quot;>{error}</p>
            </div>
          ) : results.length > 0 ? (
            <div className="space-y-6&quot;>
              {results.map((result) => (
                <div key={result.id} className="bg-white shadow rounded-lg overflow-hidden&quot;>
                  <div className="p-6&quot;>
                    <div className="flex justify-between items-start&quot;>
                      <div>
                        <h3 className="text-xl font-semibold text-blue-600 hover:text-blue-800&quot;>
                          <a href={result.url} target="_blank&quot; rel="noopener noreferrer&quot;>
                            {result.title}
                          </a>
                        </h3>
                        <div className="flex flex-wrap gap-2 mt-2&quot;>
                          {result.category && (
                            <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded&quot;>
                              {result.category}
                            </span>
                          )}
                          {result.subcategory && (
                            <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded&quot;>
                              {result.subcategory}
                            </span>
                          )}
                          {result.rating && (
                            <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded&quot;>
                              ★ {result.rating}
                            </span>
                          )}
                          {result.pricing && (
                            <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded&quot;>
                              {result.pricing}
                            </span>
                          )}
                        </div>
                      </div>
                      <div className="text-right&quot;>
                        <div className="text-sm text-gray-500&quot;>Relevance</div>
                        <div className="font-semibold&quot;>{Math.round(result.score * 100)}%</div>
                      </div>
                    </div>
                    
                    <p className="mt-4 text-gray-700&quot;>{result.snippet}</p>
                    
                    {result.tags && result.tags.length > 0 && (
                      <div className="mt-3 flex flex-wrap gap-1&quot;>
                        {result.tags.slice(0, 5).map((tag, index) => (
                          <span key={index} className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded&quot;>
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                    
                    {result.explanations && result.explanations.length > 0 && (
                      <div className="mt-4 bg-gray-50 p-3 rounded&quot;>
                        <h4 className="font-medium text-gray-800 mb-2&quot;>Why this result?</h4>
                        <ul className="list-disc list-inside text-sm text-gray-700 space-y-1&quot;>
                          {result.explanations.slice(0, 3).map((explanation, index) => (
                            <li key={index}>{explanation}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          ) : query ? (
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-12 text-center&quot;>
              <FaSearch className="mx-auto h-12 w-12 text-gray-400&quot; />
              <h3 className="mt-2 text-lg font-medium text-gray-900&quot;>No results found</h3>
              <p className="mt-1 text-gray-500&quot;>
                Try adjusting your search or filters to find what you&rsquo;re looking for.
              </p>
            </div>
          ) : null}
        </div>
      </div>
      
      {/* Mobile Filter Toggle */}
      <button
        onClick={() => setShowFilters(true)}
        className="lg:hidden fixed bottom-4 right-4 bg-blue-600 text-white p-4 rounded-full shadow-lg&quot;
      >
        <FaFilter className="h-6 w-6&quot; />
      </button>
    </div>
  );
};

export default AdvancedSearch;