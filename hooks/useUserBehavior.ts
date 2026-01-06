import { useEffect } from &apos;react&apos;;
import { useRouter } from &apos;next/router&apos;;

type SearchEvent = {
  query: string;
  timestamp: number;
  results: Array<{ id: string; title: string }>;
  selectedResult?: string;
};

export function useUserBehavior() {
  const router = useRouter();

  // Page view tracking removed

  const trackSearch = (query: string, results: Array<{ id: string; title: string }>) => {
    const searchEvent: SearchEvent = {
      query,
      timestamp: Date.now(),
      results: results.map(r => ({ id: r.id, title: r.title }))
    };
    
    // Store in session storage for personalization
    const searchHistory = JSON.parse(sessionStorage.getItem('searchHistory') || '[]');
    searchHistory.unshift(searchEvent);
    sessionStorage.setItem('searchHistory', JSON.stringify(searchHistory.slice(0, 10)));

    // Analytics tracking removed
  };

  const trackResultClick = (query: string, resultId: string, resultTitle: string) => {
    // Update the last search event with the selected result
    const searchHistory = JSON.parse(sessionStorage.getItem('searchHistory') || '[]');
    if (searchHistory.length > 0 && searchHistory[0].query === query) {
      searchHistory[0].selectedResult = resultId;
      sessionStorage.setItem('searchHistory', JSON.stringify(searchHistory));
    }

    // Track the click event
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'select_content', {
        content_type: 'search_result',
        item_id: resultId,
        search_term: query,
      });
    }
  };

  const getUserSearchHistory = () => {
    if (typeof window === &apos;undefined&apos;) return [];
    return JSON.parse(sessionStorage.getItem(&apos;searchHistory&apos;) || &apos;[]&apos;) as SearchEvent[];
  };

  return {
    trackSearch,
    trackResultClick,
    getUserSearchHistory,
  };
}
