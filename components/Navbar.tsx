&quot;use client&quot;;

import Link from &apos;next/link&apos;;
import React, { useEffect, useState, useRef } from &apos;react&apos;;
import { useRouter } from &apos;next/router&apos;;
import { FontAwesomeIcon } from &apos;@fortawesome/react-fontawesome&apos;;
import { 
  faBars, 
  faMoon, 
  faSearch,
  faSpinner,
  faSun, 
  faTimes 
} from &apos;@fortawesome/free-solid-svg-icons&apos;;
import { useAuth } from &apos;../contexts/MockAuthContext&apos;;

// Define the SearchSuggestion interface
interface SearchSuggestion {
  id: string;
  type: string;
  text: string;
  category?: string;
  subcategory?: string;
  query?: string;
  popularity?: number;
  recency?: number;
  confidence?: number;
}

export default function Navbar() {
  const router = useRouter();
  const { isAuthenticated, logout } = useAuth();
  const [searchQuery, setSearchQuery] = useState(&apos;&apos;);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark'>(&apos;light&apos;);
  const [isSearching, setIsSearching] = useState(false);
  const [searchSuggestions, setSearchSuggestions] = useState<SearchSuggestion[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const searchTimeoutRef = useRef<NodeJS.Timeout>();
  const suggestionsRef = useRef<HTMLFormElement>(null);

  // Debounce search to prevent too many requests
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    performSearch();
  };

  const performSearch = () => {
    const query = searchQuery.trim();
    if (query) {
      setIsSearching(true);
      setShowSuggestions(false);
      
      // Clear any pending search
      if (searchTimeoutRef.current) {
        clearTimeout(searchTimeoutRef.current);
      }
      
      // Set a new timeout
      searchTimeoutRef.current = setTimeout(() => {
        router.push({
          pathname: '/search',
          query: { q: query },
        });
        
        // Close mobile menu if open
        if (isMenuOpen) {
          setIsMenuOpen(false);
        }
        
        setIsSearching(false);
      }, 300); // 300ms debounce time
    }
  };
  
  // Fetch search suggestions
  const fetchSearchSuggestions = async (query: string) => {
    if (!query.trim()) {
      setSearchSuggestions([]);
      setShowSuggestions(false);
      return;
    }
    
    try {
      const response = await fetch(`/api/search-suggestions?q=${encodeURIComponent(query)}&type=all`);
      const data = await response.json();
      
      if (data.success && data.suggestions) {
        setSearchSuggestions(data.suggestions.slice(0, 8)); // Limit to 8 suggestions
        setShowSuggestions(data.suggestions.length > 0);
      } else {
        setSearchSuggestions([]);
        setShowSuggestions(false);
      }
    } catch (error) {
      console.error(&apos;Error fetching search suggestions:&apos;, error);
      setSearchSuggestions([]);
      setShowSuggestions(false);
    }
  };
  
  // Handle search input change with debounce
  const handleSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchQuery(value);
    
    // Clear any pending suggestion fetch
    if (searchTimeoutRef.current) {
      clearTimeout(searchTimeoutRef.current);
    }
    
    // Fetch suggestions with debounce
    if (value.trim()) {
      searchTimeoutRef.current = setTimeout(() => {
        fetchSearchSuggestions(value);
      }, 300); // 300ms debounce time
    } else {
      setSearchSuggestions([]);
      setShowSuggestions(false);
    }
  };
  
  // Handle suggestion click
  const handleSuggestionClick = (suggestion: SearchSuggestion) => {
    const query = suggestion.query || suggestion.text;
    setSearchQuery(query);
    setShowSuggestions(false);
    
    // Perform search with the selected suggestion
    router.push({
      pathname: '/search',
      query: { q: query },
    });
    
    // Close mobile menu if open
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  };
  
  // Handle click outside to close suggestions
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (suggestionsRef.current && !suggestionsRef.current.contains(event.target as Node)) {
        setShowSuggestions(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  
  // Clean up timeout on unmount
  useEffect(() => {
    return () => {
      if (searchTimeoutRef.current) {
        clearTimeout(searchTimeoutRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const stored = typeof window !== 'undefined' ? localStorage.getItem('theme') : null;
    if (stored === 'dark') {
      setTheme('dark');
      document.documentElement.classList.add('dark');
    }
  }, []);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const toggleTheme = () => {
    setTheme((prev: 'light' | 'dark') => {
      const next = prev === 'light' ? 'dark' : 'light';
      if (next === 'dark') {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
      try { localStorage.setItem('theme', next); } catch { }
      return next;
    });
  };

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <div className={`sticky top-0 z-40 transition-all duration-300 ${isScrolled ? 'bg-white/90 dark:bg-gray-900/80 backdrop-blur border-b border-gray-200 dark:border-gray-800 shadow-sm' : 'bg-white dark:bg-gray-900'}`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8&quot;>
        <div className="flex items-center justify-between h-16&quot;>
          {/* Logo */}
          <div className="flex items-center&quot;>
            <Link href="/&quot; className="text-xl font-extrabold tracking-tight&quot;>
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent&quot;>Ham Blog</span>
            </Link>
          </div>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center space-x-6&quot;>
            <Link href="/&quot; className="text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400&quot;>Home</Link>
            <Link href="/compare&quot; className="text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400&quot;>Compare</Link>
            <Link href="/blog&quot; className="text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400&quot;>Blog</Link>
            <Link href="/about&quot; className="text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400&quot;>About</Link>
            <Link href="/contact&quot; className="text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400&quot;>Contact</Link>
          </div>

          {/* Right actions */}
          <div className="flex items-center space-x-3&quot;>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 dark:text-gray-300 dark:hover:text-white dark:hover:bg-gray-800&quot;
              aria-label={`Switch to ${theme === &apos;light&apos; ? &apos;dark&apos; : &apos;light&apos;} mode`}
              title={`Switch to ${theme === &apos;light&apos; ? &apos;dark&apos; : &apos;light&apos;} mode`}
            >
              <FontAwesomeIcon 
                icon={theme === &apos;dark ? faSun : faMoon} 
                className="w-5 h-5&quot; 
                fixedWidth 
              />
            </button>

            {!isAuthenticated && (
              <div className="hidden md:flex items-center space-x-2&quot;>
                <Link href="/login&quot; className="px-3 py-1.5 text-sm text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400&quot;>Login</Link>
                <Link href="/signup&quot; className="px-3 py-1.5 text-sm rounded-md bg-blue-600 text-white hover:bg-blue-700&quot;>Sign Up</Link>
              </div>
            )}
          </div>
        </div>
      </nav>

      {/* Mobile navigation - Always visible */}
      <div className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800&quot;>
        <div className="px-4 py-2 flex overflow-x-auto space-x-4 hide-scrollbar&quot;>
          <Link href="/&quot; className="flex-shrink-0 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 whitespace-nowrap&quot;>Home</Link>
          <Link href="/compare&quot; className="flex-shrink-0 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 whitespace-nowrap&quot;>Compare</Link>
          <Link href="/blog&quot; className="flex-shrink-0 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 whitespace-nowrap&quot;>Blog</Link>
          <Link href="/about&quot; className="flex-shrink-0 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 whitespace-nowrap&quot;>About</Link>
          <Link href="/contact&quot; className="flex-shrink-0 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 whitespace-nowrap&quot;>Contact</Link>
          {!isAuthenticated && (
            <>
              <Link href="/login&quot; className="flex-shrink-0 py-2 text-sm text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 whitespace-nowrap&quot;>Login</Link>
              <Link href="/signup&quot; className="flex-shrink-0 py-2 text-sm text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 whitespace-nowrap&quot;>Sign Up</Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
}