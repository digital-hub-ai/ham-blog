import { useState, useEffect, useRef, useCallback } from &apos;react&apos;;
import Head from &apos;next/head&apos;;
import { useRouter } from &apos;next/router&apos;;
import { FontAwesomeIcon } from &apos;@fortawesome/react-fontawesome&apos;;
import { 
  faSearch, 
  faSpinner, 
  faFilter,
  faSort,
  faTimes,
  faChevronDown,
  faStar,
  faDollarSign,
  faTag,
  faLayerGroup,
  faFire,
  faClock,
  faArrowUpWideShort
} from &apos;@fortawesome/free-solid-svg-icons&apos;;
import AIToolCard from &apos;../components/search/AIToolCard&apos;;
import BlogPostCard from &apos;../components/search/BlogPostCard&apos;;

// Types
interface SearchResult {
  id: string;
  title: string;
  description?: string;
  excerpt?: string;
  content?: string;
  url: string;
  type: &apos;tool&apos; | &apos;blog&apos; | &apos;news&apos; | &apos;update&apos;;
  category?: string;
  subcategory?: string;
  score?: number;
  snippet?: string;
  imageUrl?: string;
  publishedAt?: string;
  date?: string;
  author?: string;
  readTime?: string;
  rating?: number;
  pricing?: string;
  tags?: string[];
  features?: string[];
  reviews?: number;
  lastUpdated?: string;
}

interface FilterOption {
  value: string;
  label: string;
  count: number;
  icon?: any;
}

interface SortOption {
  value: string;
  label: string;
  icon?: any;
}

// Mock data for demonstration
const mockTools: SearchResult[] = [
  {
    id: &apos;tool-1&apos;,
    title: &apos;GPT-5 Playground&apos;,
    description: &apos;Advanced AI playground with GPT-5 capabilities for developers and researchers.&apos;,
    excerpt: &apos;Advanced AI playground with GPT-5 capabilities&apos;,
    url: &apos;/tools/gpt-5-playground&apos;,
    type: &apos;tool&apos;,
    category: &apos;Text Generation&apos;,
    subcategory: &apos;LLM&apos;,
    rating: 4.8,
    pricing: &apos;Freemium&apos;,
    tags: [&apos;AI&apos;, &apos;NLP&apos;, &apos;Text Generation&apos;],
    features: [&apos;Code completion&apos;, &apos;Text generation&apos;, &apos;API access&apos;],
    lastUpdated: &apos;2025-04-20&apos;,
    reviews: 1245
  },
  // Add more mock tools as needed
];

const mockBlogs: SearchResult[] = [
  {
    id: &apos;blog-1&apos;,
    title: &apos;The Future of AI in 2025: Trends and Predictions&apos;,
    excerpt: &apos;Exploring the latest advancements in AI technology and what to expect in the coming years.&apos;,
    description: &apos;Exploring the latest advancements in AI technology and what to expect in the coming years.&apos;,
    url: &apos;/blog/future-of-ai-2025&apos;,
    type: &apos;blog&apos;,
    category: &apos;AI Trends&apos;,
    date: &apos;2025-04-15&apos;,
    author: &apos;AI Research Team&apos;,
    readTime: &apos;8 min read&apos;,
    tags: [&apos;AI&apos;, &apos;Trends&apos;, &apos;2025&apos;, &apos;Predictions&apos;],
    imageUrl: &apos;/images/ai-trends-2025.jpg&apos;
  },
  // Add more mock blogs as needed
];

// Mock search function (replace with actual API call)
const searchContent = async (query: string, filters: any = {}): Promise<SearchResult[]> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 500));
  
  // In a real app, this would be an API call to your search backend
  const allResults = [...mockTools, ...mockBlogs];
  
  // Simple search implementation (replace with proper search logic)
  const queryLower = query.toLowerCase();
  return allResults.filter(item => 
    item.title.toLowerCase().includes(queryLower) || 
    (item.description || '').toLowerCase().includes(queryLower) ||
    (item.content || '').toLowerCase().includes(queryLower) ||
    (item.tags || []).some(tag => tag.toLowerCase().includes(queryLower))
  );
}
// Available filters
const availableFilters = {
  type: [
    { value: &apos;tool&apos;, label: &apos;AI Tools&apos;, icon: faLayerGroup },
    { value: &apos;blog&apos;, label: &apos;Blog Posts&apos;, icon: faFire },
  ],
  category: [
    { value: &apos;text&apos;, label: &apos;Text Generation&apos; },
    { value: &apos;image&apos;, label: &apos;Image Generation&apos; },
    { value: &apos;code&apos;, label: &apos;Code Generation&apos; },
    { value: &apos;voice&apos;, label: &apos;Voice AI&apos; },
    { value: &apos;trends&apos;, label: &apos;AI Trends&apos; },
    { value: &apos;tutorials&apos;, label: &apos;Tutorials&apos; },
  ],
  pricing: [
    { value: &apos;free&apos;, label: &apos;Free&apos; },
    { value: &apos;freemium&apos;, label: &apos;Freemium&apos; },
    { value: &apos;paid&apos;, label: &apos;Paid&apos; },
  ],
  sort: [
    { value: &apos;relevance&apos;, label: &apos;Relevance&apos;, icon: faSearch },
    { value: &apos;newest&apos;, label: &apos;Newest&apos;, icon: faClock },
    { value: &apos;popular&apos;, label: &apos;Most Popular&apos;, icon: faFire },
    { value: &apos;top-rated&apos;, label: &apos;Top Rated&apos;, icon: faStar },
  ]
};

export default function EnhancedSearchPage() {
  const router = useRouter();
  const { q, type, category, price, sort } = router.query;
  
  const [searchQuery, setSearchQuery] = useState(typeof q === &apos;string&apos; ? q : &apos;&apos;);
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [activeFilters, setActiveFilters] = useState({
    type: typeof type === 'string' ? [type] : [],
    category: typeof category === 'string' ? [category] : [],
    price: typeof price === 'string' ? [price] : [],
  });
  const [sortBy, setSortBy] = useState(sort || 'relevance');
  const [showFilters, setShowFilters] = useState(false);
  const [showSort, setShowSort] = useState(false);
  const [searchStats, setSearchStats] = useState({
    total: 0,
    tools: 0,
    blogs: 0,
    responseTime: 0
  });

  const performSearch = useCallback(async () => {
    if (!searchQuery.trim()) {
      setResults([]);
      return;
    }

    setIsLoading(true);
    const startTime = Date.now();
    
    try {
      const searchResults = await searchContent(searchQuery, {
        types: activeFilters.type,
        categories: activeFilters.category,
        priceRange: activeFilters.price,
        sort: sortBy
      });
      
      const endTime = Date.now();
      
      setResults(searchResults);
      setSearchStats({
        total: searchResults.length,
        tools: searchResults.filter(r => r.type === 'tool').length,
        blogs: searchResults.filter(r => r.type === 'blog').length,
        responseTime: (endTime - startTime) / 1000
      });
    } catch (error) {
      console.error('Search error:', error);
    } finally {
      setIsLoading(false);
    }
  }, [searchQuery, activeFilters, sortBy]);

  // Update URL when filters or sort change
  useEffect(() => {
    const query: any = {};
    if (searchQuery) query.q = searchQuery;
    if (activeFilters.type.length) query.type = activeFilters.type[0];
    if (activeFilters.category.length) query.category = activeFilters.category[0];
    if (activeFilters.price.length) query.price = activeFilters.price[0];
    if (sortBy) query.sort = sortBy;
    
    router.replace({
      pathname: router.pathname,
      query
    }, undefined, { shallow: true });
    
    // Perform search when query or filters change
    performSearch();
  }, [searchQuery, activeFilters, sortBy, performSearch]);

  // Initial search on page load
  useEffect(() => {
    if (q) {
      performSearch();
    }
  }, [q, performSearch, router]);

  const handleFilterToggle = (filterType: 'type' | 'category' | 'price', value: string) => {
    setActiveFilters(prev => ({
      ...prev,
      [filterType]: prev[filterType].includes(value)
        ? prev[filterType].filter(v => v !== value)
        : [...prev[filterType], value]
    }));
  };

  const clearFilters = () => {
    setActiveFilters({
      type: [],
      category: [],
      price: []
    });
    setSortBy('relevance');
  };

  // Group results by type for better display
  const tools = results.filter(r => r.type === 'tool');
  const blogs = results.filter(r => r.type === &apos;blog&apos;);

  return (
    <div className="min-h-screen bg-gray-50&quot;>
      <Head>
        <title>{searchQuery ? `${searchQuery} - AI Search` : &apos;AI Search - Find AI Tools and Content&apos;}</title>
        <meta name="description&quot; content="Search the best AI tools, articles, and resources in one place.&quot; />
      </Head>

      {/* Search Header */}
      <header className="bg-white shadow-sm&quot;>
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8&quot;>
          <div className="max-w-3xl mx-auto&quot;>
            <h1 className="text-3xl font-bold text-gray-900 mb-6&quot;>
              {searchQuery ? `Results for &quot;${searchQuery}&quot;` : &apos;Search AI Tools & Content&apos;}
            </h1>
            
            {/* Search Bar */}
            <div className="relative&quot;>
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none&quot;>
                <FontAwesomeIcon icon={faSearch} className="h-5 w-5 text-gray-400&quot; />
              </div>
              <input
                type="text&quot;
                className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-base&quot;
                placeholder="Search for AI tools, articles, and more...&quot;
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && performSearch()}
              />
              {isLoading && (
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center&quot;>
                  <FontAwesomeIcon icon={faSpinner} className="animate-spin h-5 w-5 text-gray-400&quot; />
                </div>
              )}
            </div>
            
            {/* Search Stats */}
            {searchQuery && (
              <div className="mt-4 flex flex-wrap items-center text-sm text-gray-500&quot;>
                <span className="mr-4&quot;>{searchStats.total} results found</span>
                {searchStats.tools > 0 && (
                  <span className="mr-4 flex items-center&quot;>
                    <FontAwesomeIcon icon={faLayerGroup} className="mr-1 text-blue-500&quot; />
                    {searchStats.tools} tools
                  </span>
                )}
                {searchStats.blogs > 0 && (
                  <span className="mr-4 flex items-center&quot;>
                    <FontAwesomeIcon icon={faFire} className="mr-1 text-orange-500&quot; />
                    {searchStats.blogs} articles
                  </span>
                )}
                <span className="flex items-center&quot;>
                  <FontAwesomeIcon icon={faClock} className="mr-1 text-gray-400&quot; />
                  {searchStats.responseTime.toFixed(2)}s
                </span>
                
                {(activeFilters.type.length > 0 || activeFilters.category.length > 0 || activeFilters.price.length > 0) && (
                  <button 
                    onClick={clearFilters}
                    className="ml-auto text-sm text-blue-600 hover:text-blue-800 flex items-center&quot;
                  >
                    <FontAwesomeIcon icon={faTimes} className="mr-1&quot; />
                    Clear filters
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
        
        {/* Filter Bar */}
        <div className="border-t border-gray-200 bg-white&quot;>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8&quot;>
            <div className="flex items-center justify-between py-2 overflow-x-auto&quot;>
              <div className="flex space-x-2&quot;>
                {/* Type Filter */}
                <div className="relative&quot;>
                  <button 
                    onClick={() => setShowFilters(!showFilters)}
                    className={`flex items-center px-3 py-2 rounded-md text-sm font-medium ${showFilters ? &apos;bg-blue-50 text-blue-700&apos; : &apos;text-gray-700 hover:bg-gray-100}`}
                  >
                    <FontAwesomeIcon icon={faFilter} className="mr-2&quot; />
                    Type
                    <FontAwesomeIcon icon={faChevronDown} className="ml-2 text-xs&quot; />
                  </button>
                  
                  {showFilters && (
                    <div className="absolute z-10 mt-1 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5&quot;>
                      <div className="py-1&quot;>
                        {availableFilters.type.map((filter) => (
                          <button
                            key={filter.value}
                            onClick={() => handleFilterToggle(&apos;type&apos;, filter.value)}
                            className={`w-full text-left px-4 py-2 text-sm flex items-center ${activeFilters.type.includes(filter.value) ? &apos;bg-blue-50 text-blue-700&apos; : &apos;text-gray-700 hover:bg-gray-50&apos;}`}
                          >
                            <FontAwesomeIcon 
                              icon={filter.icon} 
                              className={`mr-2 ${activeFilters.type.includes(filter.value) ? &apos;text-blue-500&apos; : &apos;text-gray-400}`} 
                            />
                            {filter.label}
                            {activeFilters.type.includes(filter.value) && (
                              <span className="ml-auto&quot;>✓</span>
                            )}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
                
                {/* Sort Dropdown */}
                <div className="relative&quot;>
                  <button 
                    className="flex items-center px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-100&quot;
                    onClick={() => setShowSort(!showSort)}
                  >
                    <FontAwesomeIcon icon={faArrowUpWideShort} className="mr-2&quot; />
                    Sort: {availableFilters.sort.find(s => s.value === sortBy)?.label || &apos;Relevance&apos;}
                    <FontAwesomeIcon icon={faChevronDown} className="ml-2 text-xs&quot; />
                  </button>
                  
                  {showSort && (
                    <div className="absolute z-10 mt-1 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5&quot;>
                      <div className="py-1&quot;>
                        {availableFilters.sort.map((sortOption) => (
                          <button
                            key={sortOption.value}
                            onClick={() => {
                              setSortBy(sortOption.value);
                              setShowSort(false);
                            }}
                            className={`w-full text-left px-4 py-2 text-sm flex items-center ${sortBy === sortOption.value ? &apos;bg-blue-50 text-blue-700&apos; : &apos;text-gray-700 hover:bg-gray-50&apos;}`}
                          >
                            <FontAwesomeIcon 
                              icon={sortOption.icon} 
                              className={`mr-2 ${sortBy === sortOption.value ? &apos;text-blue-500&apos; : &apos;text-gray-400}`} 
                            />
                            {sortOption.label}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8&quot;>
        {isLoading ? (
          <div className="flex justify-center items-center py-20&quot;>
            <FontAwesomeIcon icon={faSpinner} className="animate-spin h-8 w-8 text-blue-500&quot; />
            <span className="ml-3 text-gray-600&quot;>Searching...</span>
          </div>
        ) : results.length === 0 && searchQuery ? (
          <div className="text-center py-12&quot;>
            <h3 className="text-lg font-medium text-gray-900&quot;>No results found</h3>
            <p className="mt-2 text-gray-500&quot;>Try different keywords or remove search filters</p>
          </div>
        ) : (
          <div className="space-y-12&quot;>
            {/* AI Tools Section */}
            {tools.length > 0 && (
              <section>
                <div className="flex items-center mb-6&quot;>
                  <h2 className="text-xl font-bold text-gray-900 flex items-center&quot;>
                    <FontAwesomeIcon icon={faLayerGroup} className="mr-2 text-blue-500&quot; />
                    AI Tools
                  </h2>
                  <span className="ml-2 px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800&quot;>
                    {tools.length}
                  </span>
                </div>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3&quot;>
                  {tools.map((tool) => (
                    <AIToolCard key={tool.id} tool={{...tool, description: tool.description || &apos;}} query={searchQuery} />
                  ))}
                </div>
              </section>
            )}

            {/* Blog Posts Section */}
            {blogs.length > 0 && (
              <section>
                <div className="flex items-center mb-6&quot;>
                  <h2 className="text-xl font-bold text-gray-900 flex items-center&quot;>
                    <FontAwesomeIcon icon={faFire} className="mr-2 text-orange-500&quot; />
                    Blog Posts & Articles
                  </h2>
                  <span className="ml-2 px-2.5 py-0.5 rounded-full text-xs font-medium bg-orange-100 text-orange-800&quot;>
                    {blogs.length}
                  </span>
                </div>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3&quot;>
                  {blogs.map((post) => (
                    <BlogPostCard key={post.id} post={{...post, excerpt: post.excerpt || &apos;&apos;, date: post.date || &apos;&apos;, author: post.author || &apos;&apos;, readTime: post.readTime || &apos;}} query={searchQuery} />
                  ))}
                </div>
              </section>
            )}
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-12&quot;>
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8&quot;>
          <p className="text-center text-gray-500 text-sm&quot;>
            &copy; {new Date().getFullYear()} AI Search. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
