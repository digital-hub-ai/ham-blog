import { useState, useEffect, useCallback } from &apos;react&apos;;
import { semanticSearch, SearchResult, Document } from &apos;../../services/searchService&apos;;
import { useUserBehavior } from &apos;../../hooks/useUserBehavior&apos;;
import Link from &apos;next/link&apos;;

interface SemanticSearchProps {
  documents: Array<{
    id: string;
    title: string;
    content: string;
    url?: string;
    type?: Document['type']; // Make type optional and use the Document type
  }>;
  placeholder?: string;
  className?: string;
}

export default function SemanticSearch({ 
  documents, 
  placeholder = &apos;Search with natural language...&apos;,
  className = &apos;&apos;
}: SemanticSearchProps) {
  const [query, setQuery] = useState(&apos;&apos;);
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const { trackSearch, trackResultClick, getUserSearchHistory } = useUserBehavior();
  const [searchHistory, setSearchHistory] = useState<Array<{query: string}>>([]);

  // Load search history on component mount
  useEffect(() => {
    const history = getUserSearchHistory();
    setSearchHistory(history.map(item => ({ query: item.query })));
  }, [getUserSearchHistory]);

  // Debounce search
  useEffect(() => {
    if (query.trim() === '') {
      setResults([]);
      return;
    }

    const timer = setTimeout(async () => {
      setIsLoading(true);
      try {
        // Map documents to include the required type property
        const typedDocuments: Document[] = documents.map(doc => ({
          ...doc,
          type: doc.type || 'tool', // Default to 'tool' if type is not provided
          url: doc.url || '#' // Provide a default URL if not provided
        }));
        
        const searchResults = await semanticSearch(query, typedDocuments);
        setResults(searchResults);
        trackSearch(query, searchResults);
      } catch (error) {
        console.error('Search failed:', error);
      } finally {
        setIsLoading(false);
      }
    }, 300);

    return () => clearTimeout(timer);
  }, [query, documents, trackSearch]);

  const handleResultClick = (result: SearchResult) => {
    trackResultClick(query, result.id, result.title);
    setShowResults(false);
  };

  return (
    <div className={`relative ${className}`}>
      <div className="relative&quot;>
        <input
          type="text&quot;
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setShowResults(true);
          }}
          onFocus={() => setShowResults(true)}
          onBlur={() => setTimeout(() => setShowResults(false), 200)}
          placeholder={placeholder}
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent&quot;
        />
        {isLoading && (
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2&quot;>
            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-blue-500&quot;></div>
          </div>
        )}
      </div>

      {showResults && (
        <div className="absolute z-10 mt-1 w-full bg-white rounded-md shadow-lg border border-gray-200 max-h-96 overflow-auto&quot;>
          {query === &apos;&apos; ? (
            <div className="p-4&quot;>
              <h3 className="text-sm font-medium text-gray-700 mb-2&quot;>Recent Searches</h3>
              {searchHistory.length > 0 ? (
                <div className="space-y-1&quot;>
                  {searchHistory.map((item, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        setQuery(item.query);
                        setShowResults(true);
                      }}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded&quot;
                    >
                      {item.query}
                    </button>
                  ))}
                </div>
              ) : (
                <p className="text-sm text-gray-500&quot;>No recent searches</p>
              )}
            </div>
          ) : results.length > 0 ? (
            <div className="py-1&quot;>
              {results.map((result) => (
                <Link
                  key={result.id}
                  href={result.url || `#${result.id}`}
                  onClick={() => handleResultClick(result)}
                  className="block px-4 py-3 hover:bg-gray-50 transition-colors duration-150&quot;
                >
                  <h4 className="font-medium text-gray-900&quot;>{result.title}</h4>
                  <p className="text-sm text-gray-600 line-clamp-2&quot;>
                    {result.content}
                  </p>
                  <div className="mt-1 flex justify-between items-center&quot;>
                    <span className="text-xs text-blue-600&quot;>
                      {result.url ? new URL(result.url).hostname : &apos;&apos;}
                    </span>
                    <span className="text-xs text-gray-500&quot;>
                      {Math.round(result.similarity * 100)}% relevant
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="p-4 text-center text-gray-500&quot;>
              {isLoading ? &apos;Searching...&apos; : &apos;No results found&apos;}
            </div>
          )}
        </div>
      )}
    </div>
  );
}