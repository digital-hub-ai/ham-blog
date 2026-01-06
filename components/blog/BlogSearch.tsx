'use client';

import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faXmark, faFilter } from '@fortawesome/free-solid-svg-icons';

type BlogSearchProps = {
  onSearch: (query: string) => void;
  onCategoryFilter: (category: string) => void;
  onTagFilter: (tag: string) => void;
  categories: string[];
  tags: string[];
  activeCategory?: string;
  activeTag?: string;
};

export default function BlogSearch({ 
  onSearch, 
  onCategoryFilter, 
  onTagFilter, 
  categories, 
  tags, 
  activeCategory, 
  activeTag 
}: BlogSearchProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);

  // Debounce search
  useEffect(() => {
    const timer = setTimeout(() => {
      onSearch(searchQuery);
    }, 300);

    return () => clearTimeout(timer);
  }, [searchQuery, onSearch]);

  const handleClearSearch = () => {
    setSearchQuery('');
    onSearch('');
  };

  const handleCategoryClick = (category: string) => {
    if (activeCategory === category) {
      onCategoryFilter('');
    } else {
      onCategoryFilter(category);
    }
  };

  const handleTagClick = (tag: string) => {
    if (activeTag === tag) {
      onTagFilter(&apos;&apos;);
    } else {
      onTagFilter(tag);
    }
  };

  return (
    <div className="space-y-6&quot;>
      {/* Search Bar */}
      <div className="relative&quot;>
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none&quot;>
          <FontAwesomeIcon icon={faSearch} className="h-5 w-5 text-gray-400&quot; />
        </div>
        <input
          type="text&quot;
          className="block w-full pl-10 pr-3 py-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent&quot;
          placeholder="Search blog posts...&quot;
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        {searchQuery && (
          <button
            onClick={handleClearSearch}
            className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600 dark:hover:text-gray-300&quot;
          >
            <FontAwesomeIcon icon={faXmark} className="w-4 h-4&quot; />
          </button>
        )}
      </div>

      {/* Mobile Filters Button */}
      <div className="lg:hidden&quot;>
        <button
          type="button&quot;
          className="inline-flex items-center px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm text-sm font-medium text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500&quot;
          onClick={() => setIsFiltersOpen(!isFiltersOpen)}
        >
          <FontAwesomeIcon icon={faFilter} className="mr-2 w-4 h-4&quot; />
          {isFiltersOpen ? &apos;Hide Filters&apos; : &apos;Show Filters&apos;}
        </button>
      </div>

      {/* Filters */}
      <div className={`${isFiltersOpen ? &apos;block&apos; : &apos;hidden} lg:block space-y-6`}>
        {/* Categories */}
        <div>
          <h3 className="text-sm font-medium text-gray-900 dark:text-white mb-3&quot;>Categories</h3>
          <div className="space-y-2&quot;>
            <button
              onClick={() => handleCategoryClick(&apos;&apos;)}
              className={`block w-full text-left px-3 py-2 rounded-md text-sm font-medium ${
                !activeCategory
                  ? &apos;bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-100&apos;
                  : &apos;text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700&apos;
              }`}
            >
              All Categories
            </button>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => handleCategoryClick(category)}
                className={`block w-full text-left px-3 py-2 rounded-md text-sm font-medium ${
                  activeCategory === category
                    ? &apos;bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-100&apos;
                    : &apos;text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Tags */}
        <div>
          <h3 className="text-sm font-medium text-gray-900 dark:text-white mb-3&quot;>Popular Tags</h3>
          <div className="flex flex-wrap gap-2&quot;>
            {tags.slice(0, 15).map((tag) => (
              <button
                key={tag}
                onClick={() => handleTagClick(tag)}
                className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                  activeTag === tag
                    ? 'bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-100'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}