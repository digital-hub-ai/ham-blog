import React from &apos;react&apos;;
import Link from &apos;next/link&apos;;
import Image from &apos;next/image&apos;;
import { FontAwesomeIcon } from &apos;@fortawesome/react-fontawesome&apos;;
import { 
  faCalendarAlt, 
  faUser,
  faTags,
  faClock,
  faBookOpen,
  faArrowRight
} from &apos;@fortawesome/free-solid-svg-icons&apos;;

interface BlogPostCardProps {
  post: {
    id: string;
    title: string;
    excerpt: string;
    url: string;
    date: string;
    author: string;
    readTime: string;
    tags?: string[];
    category?: string;
    imageUrl?: string;
  };
  query?: string;
}

const BlogPostCard: React.FC<BlogPostCardProps> = ({ post, query = '' }) => {
  // Highlight matching text in the title and excerpt
  const highlightText = (text: string, highlight: string) => {
    if (!highlight.trim()) return text;
    
    const parts = text.split(new RegExp(`(${highlight})`, 'gi'));
    return parts.map((part, i) => 
      part.toLowerCase() === highlight.toLowerCase() ? 
      <span key={i} className="bg-yellow-100 text-yellow-800 px-1 rounded&quot;>{part}</span> : 
      part
    );
  };

  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden border border-gray-200&quot;>
      {post.imageUrl && (
        <div className="h-48 bg-gray-100 overflow-hidden&quot;>
          <Image 
            src={post.imageUrl} 
            alt={post.title}
            className="w-full h-full object-cover&quot;
            width={400}
            height={200}
          />
        </div>
      )}
      
      <div className="p-5&quot;>
        <div className="flex flex-col h-full&quot;>
          <div className="flex-grow&quot;>
            {post.category && (
              <span className="inline-block px-3 py-1 text-xs font-semibold text-blue-600 bg-blue-50 rounded-full mb-3&quot;>
                {post.category}
              </span>
            )}
            
            <h3 className="text-xl font-bold text-gray-900 mb-2 leading-tight&quot;>
              <Link href={post.url} className="hover:text-blue-600 transition-colors&quot;>
                {highlightText(post.title, query)}
              </Link>
            </h3>
            
            <p className="text-gray-600 mb-4 line-clamp-3&quot;>
              {highlightText(post.excerpt, query)}
            </p>
          </div>
          
          <div className="mt-4 pt-4 border-t border-gray-100&quot;>
            <div className="flex flex-wrap items-center justify-between text-sm text-gray-500&quot;>
              <div className="flex items-center space-x-4&quot;>
                <span className="flex items-center&quot;>
                  <FontAwesomeIcon icon={faUser} className="mr-1 text-gray-400&quot; />
                  {post.author}
                </span>
                <span className="flex items-center&quot;>
                  <FontAwesomeIcon icon={faCalendarAlt} className="mr-1 text-gray-400&quot; />
                  {new Date(post.date).toLocaleDateString(&apos;en-US&apos;, {
                    year: &apos;numeric&apos;,
                    month: &apos;long&apos;,
                    day: &apos;numeric&apos;
                  })}
                </span>
                <span className="flex items-center&quot;>
                  <FontAwesomeIcon icon={faClock} className="mr-1 text-gray-400&quot; />
                  {post.readTime}
                </span>
              </div>
              
              <Link 
                href={post.url}
                className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium mt-2 sm:mt-0&quot;
              >
                Read more
                <FontAwesomeIcon icon={faArrowRight} className="ml-1&quot; />
              </Link>
            </div>
            
            {post.tags && post.tags.length > 0 && (
              <div className="mt-3 flex flex-wrap gap-2&quot;>
                {post.tags.slice(0, 3).map((tag, index) => (
                  <span 
                    key={index} 
                    className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800&quot;
                  >
                    {tag}
                  </span>
                ))}
                {post.tags.length > 3 && (
                  <span className="text-xs text-gray-500 self-center&quot;>
                    +{post.tags.length - 3} more
                  </span>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPostCard;
