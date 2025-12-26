import React, { useState, useEffect, useRef, useCallback } from 'react';
import styles from '../../styles/InfinityStream.module.css';
import { FiClock, FiTrendingUp, FiZap, FiStar, FiEye, FiHeart, FiShare2, FiMessageSquare, FiBookmark } from 'react-icons/fi';

interface ContentItem {
  id: string;
  title: string;
  description: string;
  tags: string[];
  time: string;
  type: string;
  likes: number;
  comments: number;
}

// Sample data for the streams
const sampleContent = {
  personalized: [
    {
      id: 'p1',
      title: 'AI-Powered Content Creation Tools',
      description: 'Discover how AI is revolutionizing content creation with these cutting-edge tools.',
      tags: ['AI', 'Content Creation', 'Productivity'],
      time: '5 min read',
      type: 'guide',
      likes: 42,
      comments: 8,
    },
    {
      id: 'p2',
      title: 'The Future of Web Development',
      description: 'Explore the latest trends and technologies shaping the future of web development.',
      tags: ['Web Dev', 'Trends', 'Future'],
      time: '7 min read',
      type: 'article',
      likes: 36,
      comments: 5,
    },
  ],
  trending: [
    {
      id: 't1',
      title: 'New JavaScript Framework Released',
      description: 'A new JavaScript framework is taking the developer community by storm. Here\'s what you need to know.',
      tags: ['JavaScript', 'Framework', 'News'],
      time: '3 min read',
      type: 'news',
      likes: 128,
      comments: 24,
    },
  ],
  serendipity: [
    {
      id: 's1',
      title: 'The Art of Mindful Coding',
      description: 'How practicing mindfulness can make you a better developer and improve your code quality.',
      tags: ['Mindfulness', 'Productivity', 'Wellness'],
      time: '6 min read',
      type: 'article',
      likes: 89,
      comments: 12,
    },
  ],
};

// Simulate API call for more content
const fetchMoreContent = async (streamType: string, page: number): Promise<ContentItem[]> => {
  // In a real app, this would be an actual API call
  return new Promise((resolve) => {
    setTimeout(() => {
      const newContent = [];
      const types = ['article', 'guide', 'news', 'tutorial'];
      const tags = [
        ['AI', 'Machine Learning', 'Neural Networks'],
        ['Web Dev', 'Frontend', 'Backend'],
        ['Mobile', 'iOS', 'Android'],
        ['Cloud', 'DevOps', 'Infrastructure'],
      ];
      
      for (let i = 0; i < 3; i++) {
        const tagSet = tags[Math.floor(Math.random() * tags.length)];
        newContent.push({
          id: `${streamType}-${page}-${i}`,
          title: `Interesting ${streamType} Content ${page * 3 + i + 1}`,
          description: `This is a sample ${streamType} content item that would be dynamically loaded as you scroll.`,
          tags: tagSet,
          time: `${Math.floor(Math.random() * 10) + 1} min read`,
          type: types[Math.floor(Math.random() * types.length)],
          likes: Math.floor(Math.random() * 100),
          comments: Math.floor(Math.random() * 20),
        });
      }
      
      resolve(newContent);
    }, 1000);
  });
};

const StreamCard = ({ item, index }: { item: any, index: number }) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <div 
      ref={cardRef}
      className={`${styles.card} ${isVisible ? styles.animateIn : ''}`}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className={styles.cardHeader}>
        <div>
          <h3 className={styles.cardTitle}>{item.title}</h3>
          <div className={styles.cardMeta}>
            <span>{item.type} • {item.time}</span>
          </div>
        </div>
        <div className={styles.cardActions}>
          <button className={styles.iconButton}>
            <FiBookmark size={18} />
          </button>
        </div>
      </div>
      
      <p className={styles.cardContent}>{item.description}</p>
      
      <div className={styles.tags}>
        {item.tags.map((tag: string, i: number) => (
          <span key={i} className={styles.tag}>
            {tag}
          </span>
        ))}
      </div>
      
      <div className={styles.cardFooter}>
        <div className={styles.stats}>
          <span className={styles.stat}><FiHeart size={16} /> {item.likes}</span>
          <span className={styles.stat}><FiMessageSquare size={16} /> {item.comments}</span>
        </div>
        <button className={styles.shareButton}>
          <FiShare2 size={16} />
        </button>
      </div>
    </div>
  );
};

interface StreamSectionProps {
  title: string;
  icon: React.ReactNode;
  type: string;
  initialContent: ContentItem[];
}

const StreamSection: React.FC<StreamSectionProps> = ({ 
  title, 
  icon, 
  type, 
  initialContent 
}) => {
  const [content, setContent] = useState(initialContent);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const observer = useRef<IntersectionObserver | null>(null);
  const loadMoreRef = useRef<HTMLDivElement>(null);

  const loadMore = useCallback(async () => {
    if (loading || !hasMore) return;
    
    setLoading(true);
    try {
      const newContent = await fetchMoreContent(type, page);
      if (newContent && Array.isArray(newContent)) {
        setContent(prev => [...prev, ...newContent]);
        setPage(prev => prev + 1);
        // In a real app, you'd have a way to know if there's more content
        if (page >= 3) setHasMore(false);
      }
    } catch (error) {
      console.error('Error loading more content:', error);
    } finally {
      setLoading(false);
    }
  }, [type, page, loading, hasMore]);

  useEffect(() => {
    if (!loadMoreRef.current) return;
    
    observer.current = new IntersectionObserver(
      (entries) => {
        const first = entries[0];
        if (first.isIntersecting && hasMore) {
          loadMore();
        }
      },
      { threshold: 0.5 }
    );
    
    const currentRef = loadMoreRef.current;
    if (currentRef) {
      observer.current.observe(currentRef);
    }
    
    return () => {
      if (observer.current && currentRef) {
        observer.current.unobserve(currentRef);
      }
    };
  }, [loadMore, hasMore]);

  return (
    <div className={styles.streamSection}>
      <div className={styles.streamHeader}>
        <h2 className={styles.streamTitle}>
          {icon} {title}
        </h2>
        <button className={styles.seeAllButton}>
          See All
        </button>
      </div>
      
      <div className={styles.streamContent}>
        {content.map((item, index) => (
          <StreamCard key={item.id} item={item} index={index} />
        ))}
        
        {loading && (
          <div className={styles.loading}>
            <div className={styles.loadingSpinner}></div>
            Loading more...
          </div>
        )}
        <div ref={loadMoreRef} style={{ height: '20px' }} />
      </div>
    </div>
  );
};

const InfinityStream: React.FC = () => {
  return (
    <section className={styles.infinityStream} id="infinity-stream">
      <div className={styles.streamContainer}>
        <StreamSection 
          title="For You" 
          icon={<FiStar />} 
          type="personalized" 
          initialContent={sampleContent.personalized} 
        />
        
        <StreamSection 
          title="Trending Now" 
          icon={<FiTrendingUp />} 
          type="trending" 
          initialContent={sampleContent.trending} 
        />
        
        <StreamSection 
          title="Discover" 
          icon={<FiZap />} 
          type="serendipity" 
          initialContent={sampleContent.serendipity} 
        />
      </div>
      
      {/* Live Pulse Ticker */}
      <div className={styles.livePulse}>
        <div className={styles.liveIndicator}>
          <FiZap /> LIVE
        </div>
        <div className={styles.tickerContent}>
          <span>New AI model released • </span>
          <span>Tech conference starts in 2 days • </span>
          <span>Latest updates on Web3 development • </span>
          <span>Breaking: Major tech acquisition announced</span>
        </div>
      </div>
    </section>
  );
};

export default InfinityStream;
