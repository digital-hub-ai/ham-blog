// components/comparison-dimensions/sentiment-sphere.tsx
'use client';

import { useState, useEffect } from 'react';

interface SentimentSphereProps {
  tools: string[];
  userPreferences: any;
  onReady: () => void;
}

export default function SentimentSphere({ tools, userPreferences, onReady }: SentimentSphereProps) {
  const [selectedTimeframe, setSelectedTimeframe] = useState<'week' | 'month' | 'quarter'>(&apos;month&apos;);
  const [selectedSource, setSelectedSource] = useState<'all' | 'twitter' | 'reddit' | 'reviews'>('all');

  useEffect(() => {
    onReady();
  }, [onReady]);

  // Mock sentiment data
  const getSentimentData = (toolName: string) => {
    const baseSentiment = {
      positive: Math.random() * 30 + 40,
      neutral: Math.random() * 20 + 20,
      negative: Math.random() * 20 + 10
    };

    // Adjust based on tool
    const adjustments: Record<string, Partial<typeof baseSentiment>> = {
      'ChatGPT': { positive: 15, negative: -5 },
      'Claude': { positive: 10, neutral: 5 },
      'Gemini': { positive: 5, negative: 5 }
    };

    const adjustment = adjustments[toolName] || {};
    
    return {
      positive: Math.min(80, baseSentiment.positive + (adjustment.positive || 0)),
      neutral: Math.min(40, baseSentiment.neutral + (adjustment.neutral || 0)),
      negative: Math.max(5, baseSentiment.negative + (adjustment.negative || 0))
    };
  };

  const getReviews = (toolName: string) => {
    const mockReviews = [
      {
        text: &quot;Amazing tool, completely transformed our workflow!&quot;,
        sentiment: 'positive',
        source: 'Twitter',
        timestamp: '2 hours ago',
        likes: 45
      },
      {
        text: &quot;Good but could use better integration options&quot;,
        sentiment: 'neutral',
        source: 'Reddit',
        timestamp: '1 day ago',
        likes: 12
      },
      {
        text: &quot;Had some issues with customer support response time&quot;,
        sentiment: 'negative',
        source: 'Reviews',
        timestamp: '3 days ago',
        likes: 8
      },
      {
        text: &quot;The API is fantastic and very reliable&quot;,
        sentiment: 'positive',
        source: 'Twitter',
        timestamp: '1 week ago',
        likes: 67
      }
    ];

    return mockReviews.map(review => ({
      ...review,
      tool: toolName,
      text: review.text.replace('tool', toolName.toLowerCase())
    }));
  };

  const getSentimentColor = (sentiment: string) => {
    switch (sentiment) {
      case 'positive': return 'text-green-400';
      case 'neutral': return 'text-yellow-400';
      case 'negative': return 'text-red-400';
      default: return 'text-gray-400';
    }
  };

  const getSentimentEmoji = (sentiment: string) => {
    switch (sentiment) {
      case &apos;positive&apos;: return &apos;😊&apos;;
      case &apos;neutral&apos;: return &apos;😐&apos;;
      case &apos;negative&apos;: return &apos;😞&apos;;
      default: return &apos;❓&apos;;
    }
  };

  return (
    <div className="p-6&quot;>
      {/* Header */}
      <div className="mb-6&quot;>
        <h2 className="text-2xl font-bold mb-2&quot;>Sentiment Sphere</h2>
        <p className="text-gray-400&quot;>AI-powered review analysis and user sentiment</p>
      </div>

      {/* Controls */}
      <div className="flex gap-4 mb-6&quot;>
        <div className="flex gap-2&quot;>
          {([&apos;week&apos;, &apos;month&apos;, &apos;quarter&apos;] as const).map((timeframe) => (
            <button
              key={timeframe}
              onClick={() => setSelectedTimeframe(timeframe)}
              className={`px-3 py-1 rounded text-sm capitalize ${
                selectedTimeframe === timeframe
                  ? &apos;bg-blue-500 text-white&apos;
                  : &apos;bg-white/10 text-gray-300 hover:bg-white/20
              }`}
            >
              {timeframe}
            </button>
          ))}
        </div>
        
        <div className="flex gap-2&quot;>
          {(['all', 'twitter', 'reddit', 'reviews'] as const).map((source) => (
            <button
              key={source}
              onClick={() => setSelectedSource(source)}
              className={`px-3 py-1 rounded text-sm capitalize ${
                selectedSource === source
                  ? 'bg-purple-500 text-white'
                  : 'bg-white/10 text-gray-300 hover:bg-white/20'
              }`}
            >
              {source}
            </button>
          ))}
        </div>
      </div>

      {/* Sentiment Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8&quot;>
        {tools.map((toolName) => {
          const sentiment = getSentimentData(toolName);
          const total = sentiment.positive + sentiment.neutral + sentiment.negative;

          return (
            <div key={toolName} className="bg-white/10 rounded-lg p-4 border border-white/20&quot;>
              <h3 className="font-semibold mb-3&quot;>{toolName}</h3>
              
              <div className="space-y-2&quot;>
                <div className="flex justify-between items-center&quot;>
                  <span className="text-green-400&quot;>😊 Positive</span>
                  <span>{Math.round((sentiment.positive / total) * 100)}%</span>
                </div>
                <div className="w-full bg-white/20 rounded-full h-2&quot;>
                  <div
                    className="bg-green-400 h-2 rounded-full&quot;
                    style={{ width: `${(sentiment.positive / total) * 100}%` }}
                  ></div>
                </div>

                <div className="flex justify-between items-center&quot;>
                  <span className="text-yellow-400&quot;>😐 Neutral</span>
                  <span>{Math.round((sentiment.neutral / total) * 100)}%</span>
                </div>
                <div className="w-full bg-white/20 rounded-full h-2&quot;>
                  <div
                    className="bg-yellow-400 h-2 rounded-full&quot;
                    style={{ width: `${(sentiment.neutral / total) * 100}%` }}
                  ></div>
                </div>

                <div className="flex justify-between items-center&quot;>
                  <span className="text-red-400&quot;>😞 Negative</span>
                  <span>{Math.round((sentiment.negative / total) * 100)}%</span>
                </div>
                <div className="w-full bg-white/20 rounded-full h-2&quot;>
                  <div
                    className="bg-red-400 h-2 rounded-full&quot;
                    style={{ width: `${(sentiment.negative / total) * 100}%` }}
                  ></div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Recent Reviews */}
      <div>
        <h3 className="font-semibold mb-4&quot;>Recent Reviews</h3>
        <div className="space-y-4&quot;>
          {tools.flatMap(toolName => 
            getReviews(toolName).map((review, index) => (
              <div key={`${toolName}-${index}`} className="bg-white/10 rounded-lg p-4 border border-white/20&quot;>
                <div className="flex items-start justify-between mb-2&quot;>
                  <div className="flex items-center gap-2&quot;>
                    <span className="text-2xl&quot;>{getSentimentEmoji(review.sentiment)}</span>
                    <span className={`font-medium ${getSentimentColor(review.sentiment)}`}>
                      {review.sentiment.charAt(0).toUpperCase() + review.sentiment.slice(1)}
                    </span>
                    <span className="text-sm text-gray-400&quot;>•</span>
                    <span className="text-sm text-gray-400&quot;>{review.tool}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-400&quot;>
                    <span>{review.source}</span>
                    <span>•</span>
                    <span>{review.timestamp}</span>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-2&quot;>{review.text}</p>
                
                <div className="flex items-center gap-4 text-sm text-gray-400&quot;>
                  <div className="flex items-center gap-1&quot;>
                    <span>❤️</span>
                    <span>{review.likes}</span>
                  </div>
                  <button className="hover:text-white transition-colors&quot;>🔄 Share</button>
                  <button className="hover:text-white transition-colors&quot;>💬 Reply</button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      {/* AI Insights */}
      <div className="mt-8 p-4 bg-gradient-to-r from-blue-500/20 to-purple-600/20 rounded-lg border border-blue-400/30&quot;>
        <h3 className="font-semibold mb-2&quot;>🤖 AI Sentiment Analysis</h3>
        <div className="space-y-2 text-sm text-gray-300&quot;>
          <p>• Overall sentiment is trending positive across all tools</p>
          <p>• Users frequently mention API reliability and ease of use</p>
          <p>• Common concerns include pricing transparency and customer support</p>
          <p>• Integration capabilities are highly valued in user reviews</p>
        </div>
      </div>
    </div>
  );
}
