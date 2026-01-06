// components/ToolNexus/ReviewIntelligence.tsx
import { useState, useEffect, useMemo } from &apos;react&apos;;
import { 
  ReviewIntelligence as ReviewIntelligenceType,
  ToolNexus,
  UserPersona,
  Review,
  SentimentAnalysis,
  TopicAnalysis,
  ReviewSummary
} from &apos;../../types/tool-nexus&apos;;

interface ReviewIntelligenceProps {
  reviewData: ReviewIntelligenceType;
  tool: ToolNexus;
  userPersona: UserPersona;
}

const ReviewIntelligence: React.FC<ReviewIntelligenceProps> = ({
  reviewData,
  tool,
  userPersona
}) => {
  const [activeTab, setActiveTab] = useState<'summary' | 'topics' | 'sentiment' | 'reviews'>(&apos;summary&apos;);
  const [selectedTimeRange, setSelectedTimeRange] = useState(&apos;30d&apos;);
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);
  const [sentimentFilter, setSentimentFilter] = useState<'all' | 'positive' | 'negative' | 'neutral'>('all');

  // Calculate filtered reviews based on filters
  const filteredReviews = useMemo(() => {
    let reviews = reviewData.reviews;

    // Filter by time range
    const daysAgo = parseInt(selectedTimeRange.replace('d', ''));
    const cutoffDate = new Date();
    cutoffDate.setDate(cutoffDate.getDate() - daysAgo);
    
    reviews = reviews.filter(review => new Date(review.date) >= cutoffDate);

    // Filter by sentiment
    if (sentimentFilter !== 'all') {
      reviews = reviews.filter(review => review.sentiment === sentimentFilter);
    }

    // Filter by topic
    if (selectedTopic) {
      reviews = reviews.filter(review => 
        review.topics.some(topic => topic.name === selectedTopic)
      );
    }

    return reviews;
  }, [reviewData.reviews, selectedTimeRange, sentimentFilter, selectedTopic]);

  // Calculate sentiment distribution
  const sentimentDistribution = useMemo(() => {
    const distribution = { positive: 0, negative: 0, neutral: 0 };
    filteredReviews.forEach(review => {
      distribution[review.sentiment]++;
    });
    return distribution;
  }, [filteredReviews]);

  // Get relevant topics based on user persona
  const getRelevantTopics = () => {
    const personaTopicMap: Record<string, string[]> = {
      developer: ['api', 'performance', 'documentation', 'integration'],
      designer: ['ui', 'design', 'templates', 'customization'],
      executive: ['pricing', 'roi', 'support', 'security'],
      team_lead: ['collaboration', 'team_features', 'management', 'onboarding'],
      freelancer: ['pricing', 'ease_of_use', 'features', 'support'],
      student: ['learning_curve', 'documentation', 'free_tier', 'tutorials']
    };

    const relevantTopics = personaTopicMap[userPersona.primary_persona] || [];
    return reviewData.topic_analysis.topics
      .filter(topic => relevantTopics.some(relevant => topic.name.includes(relevant)))
      .sort((a, b) => b.mention_count - a.mention_count);
  };

  const TabNavigation: React.FC = () => (
    <div className="flex border-b border-white/20 mb-6&quot;>
      {[
        { id: &apos;summary&apos;, label: &apos;Intelligent Summary&apos;, icon: &apos;📊&apos; },
        { id: &apos;topics&apos;, label: &apos;Topic Analysis&apos;, icon: &apos;🏷️&apos; },
        { id: &apos;sentiment&apos;, label: &apos;Sentiment Trends&apos;, icon: &apos;😊&apos; },
        { id: &apos;reviews&apos;, label: &apos;Smart Reviews&apos;, icon: &apos;💬&apos; }
      ].map((tab) => (
        <button
          key={tab.id}
          onClick={() => setActiveTab(tab.id as any)}
          className={`px-6 py-3 border-b-2 transition-all flex items-center gap-2 ${
            activeTab === tab.id
              ? &apos;border-purple-500 text-white&apos;
              : &apos;border-transparent text-white/60 hover:text-white hover:border-white/20
          }`}
        >
          <span>{tab.icon}</span>
          <span>{tab.label}</span>
        </button>
      ))}
    </div>
  );

  const FilterControls: React.FC = () => (
    <div className="flex flex-wrap gap-4 mb-6&quot;>
      <div className="flex items-center gap-2&quot;>
        <span className="text-white/60 text-sm&quot;>Time Range:</span>
        <select
          value={selectedTimeRange}
          onChange={(e) => setSelectedTimeRange(e.target.value)}
          className="px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white text-sm&quot;
        >
          <option value="7d&quot;>Last 7 days</option>
          <option value="30d&quot;>Last 30 days</option>
          <option value="90d&quot;>Last 90 days</option>
          <option value="365d&quot;>Last year</option>
        </select>
      </div>

      {activeTab === &apos;reviews&apos; && (
        <>
          <div className="flex items-center gap-2&quot;>
            <span className="text-white/60 text-sm&quot;>Sentiment:</span>
            <select
              value={sentimentFilter}
              onChange={(e) => setSentimentFilter(e.target.value as any)}
              className="px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white text-sm&quot;
            >
              <option value="all&quot;>All</option>
              <option value="positive&quot;>Positive</option>
              <option value="negative&quot;>Negative</option>
              <option value="neutral&quot;>Neutral</option>
            </select>
          </div>

          <div className="flex items-center gap-2&quot;>
            <span className="text-white/60 text-sm&quot;>Topic:</span>
            <select
              value={selectedTopic || &apos;}
              onChange={(e) => setSelectedTopic(e.target.value || null)}
              className="px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white text-sm&quot;
            >
              <option value="&quot;>All topics</option>
              {reviewData.topic_analysis.topics.map((topic, index) => (
                <option key={index} value={topic.name}>
                  {topic.name} ({topic.mention_count})
                </option>
              ))}
            </select>
          </div>
        </>
      )}
    </div>
  );

  const SummaryView: React.FC = () => {
    const summary = reviewData.summary;
    const relevantTopics = getRelevantTopics();

    return (
      <div className="space-y-6&quot;>
        {/* Key Insights */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6&quot;>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20&quot;>
            <h5 className="font-medium text-white mb-4&quot;>Overall Rating</h5>
            <div className="flex items-center gap-4 mb-3&quot;>
              <div className="text-4xl font-bold text-yellow-400&quot;>
                {summary.overall_rating.toFixed(1)}
              </div>
              <div className="flex flex-col&quot;>
                <div className="flex gap-1&quot;>
                  {[...Array(5)].map((_, i) => (
                    <div
                      key={i}
                      className={`w-4 h-4 rounded-full ${
                        i < Math.floor(summary.overall_rating) 
                          ? &apos;bg-yellow-400&apos; 
                          : &apos;bg-white/20
                      }`}
                    />
                  ))}
                </div>
                <div className="text-sm text-white/60&quot;>
                  {filteredReviews.length} reviews
                </div>
              </div>
            </div>
            <div className="text-sm text-white/70&quot;>
              {summary.total_reviews} total reviews • {summary.rating_distribution.length} ratings
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20&quot;>
            <h5 className="font-medium text-white mb-4&quot;>Sentiment Score</h5>
            <div className="flex items-center gap-4 mb-3&quot;>
              <div className="text-4xl font-bold text-green-400&quot;>
                {summary.sentiment_score.toFixed(1)}
              </div>
              <div className="text-sm text-white/70&quot;>/ 10</div>
            </div>
            <div className="space-y-2&quot;>
              <div className="flex justify-between text-sm&quot;>
                <span className="text-green-400&quot;>Positive: {sentimentDistribution.positive}</span>
                <span className="text-red-400&quot;>Negative: {sentimentDistribution.negative}</span>
              </div>
              <div className="flex justify-between text-sm&quot;>
                <span className="text-gray-400&quot;>Neutral: {sentimentDistribution.neutral}</span>
              </div>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20&quot;>
            <h5 className="font-medium text-white mb-4&quot;>Review Trend</h5>
            <div className="flex items-center gap-4 mb-3&quot;>
              <div className="text-4xl font-bold text-blue-400&quot;>
                {summary.review_trend === &apos;increasing&apos; ? &apos;↑&apos; : 
                 summary.review_trend === &apos;decreasing&apos; ? &apos;↓&apos; : &apos;→&apos;}
              </div>
              <div className="text-sm text-white/70 capitalize&quot;>
                {summary.review_trend} velocity
              </div>
            </div>
            <div className="text-sm text-white/60&quot;>
              {filteredReviews.length} reviews in {selectedTimeRange}
            </div>
          </div>
        </div>

        {/* Key Insights */}
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20&quot;>
          <h5 className="font-medium text-white mb-4&quot;>AI-Generated Insights</h5>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4&quot;>
            {summary.key_insights.map((insight, index) => (
              <div key={index} className="p-4 bg-purple-500/10 rounded-lg border border-purple-500/20&quot;>
                <div className="flex items-start gap-3&quot;>
                  <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0&quot; />
                  <div>
                    <div className="text-white mb-1&quot;>{insight.insight}</div>
                    <div className="text-xs text-white/60&quot;>
                      Confidence: {(insight.confidence * 100).toFixed(0)}% • 
                      Based on {insight.supporting_data_points} data points
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Relevant Topics for Persona */}
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20&quot;>
          <h5 className="font-medium text-white mb-4&quot;>
            Topics Relevant to {userPersona.primary_persona}
          </h5>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4&quot;>
            {relevantTopics.slice(0, 6).map((topic, index) => (
              <div key={index} className="p-4 bg-white/5 rounded-lg border border-white/10&quot;>
                <div className="flex items-center justify-between mb-2&quot;>
                  <span className="font-medium text-white&quot;>{topic.name}</span>
                  <span className="text-sm text-white/60&quot;>{topic.mention_count} mentions</span>
                </div>
                <div className="text-sm text-white/70&quot;>
                  Avg. sentiment: {topic.sentiment_score.toFixed(1)}/10
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  const TopicsView: React.FC = () => (
    <div className="space-y-6&quot;>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6&quot;>
        {/* Topic Cloud */}
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20&quot;>
          <h5 className="font-medium text-white mb-4&quot;>Topic Cloud</h5>
          <div className="flex flex-wrap gap-3&quot;>
            {reviewData.topic_analysis.topics.map((topic, index) => (
              <button
                key={index}
                onClick={() => setSelectedTopic(topic.name)}
                className={`px-4 py-2 rounded-full border transition-all ${
                  selectedTopic === topic.name
                    ? &apos;bg-purple-500/20 border-purple-500/30 text-purple-300&apos;
                    : &apos;bg-white/5 border-white/10 text-white/70 hover:bg-white/10
                }`}
                style={{
                  fontSize: `${Math.max(0.8, Math.min(1.2, topic.mention_count / 20))}rem`
                }}
              >
                {topic.name} ({topic.mention_count})
              </button>
            ))}
          </div>
        </div>

        {/* Topic Details */}
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20&quot;>
          <h5 className="font-medium text-white mb-4&quot;>Topic Analysis</h5>
          <div className="space-y-3 max-h-96 overflow-y-auto&quot;>
            {reviewData.topic_analysis.topics
              .sort((a, b) => b.mention_count - a.mention_count)
              .map((topic, index) => (
                <div key={index} className="p-3 bg-white/5 rounded-lg&quot;>
                  <div className="flex items-center justify-between mb-2&quot;>
                    <span className="font-medium text-white&quot;>{topic.name}</span>
                    <span className="text-sm text-white/60&quot;>{topic.mention_count} mentions</span>
                  </div>
                  <div className="flex items-center gap-4 text-sm&quot;>
                    <div className="flex items-center gap-2&quot;>
                      <span className="text-white/60&quot;>Sentiment:</span>
                      <div className={`px-2 py-1 rounded text-xs ${
                        topic.sentiment_score >= 7 ? &apos;bg-green-500/20 text-green-300&apos; :
                        topic.sentiment_score >= 4 ? &apos;bg-yellow-500/20 text-yellow-300&apos; :
                        &apos;bg-red-500/20 text-red-300
                      }`}>
                        {topic.sentiment_score.toFixed(1)}
                      </div>
                    </div>
                    <div className="flex items-center gap-2&quot;>
                      <span className="text-white/60&quot;>Trend:</span>
                      <span className="text-white&quot;>
                        {topic.trend === &apos;increasing&apos; ? &apos;↑&apos; : 
                         topic.trend === &apos;decreasing&apos; ? &apos;↓&apos; : &apos;→&apos;}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>

      {/* Topic Evolution */}
      <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20&quot;>
        <h5 className="font-medium text-white mb-4&quot;>Topic Evolution Over Time</h5>
        <div className="text-center py-8 text-white/60&quot;>
          Topic evolution chart would be rendered here showing how different topics
          have trended over the selected time period.
        </div>
      </div>
    </div>
  );

  const SentimentView: React.FC = () => (
    <div className="space-y-6&quot;>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6&quot;>
        {/* Sentiment Distribution */}
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20&quot;>
          <h5 className="font-medium text-white mb-4&quot;>Sentiment Distribution</h5>
          <div className="space-y-3&quot;>
            {[
              { sentiment: &apos;positive&apos;, count: sentimentDistribution.positive, color: &apos;green&apos; },
              { sentiment: &apos;neutral&apos;, count: sentimentDistribution.neutral, color: &apos;gray&apos; },
              { sentiment: &apos;negative&apos;, count: sentimentDistribution.negative, color: &apos;red }
            ].map((item) => (
              <div key={item.sentiment} className="flex items-center gap-3&quot;>
                <span className="text-white capitalize text-sm w-20&quot;>{item.sentiment}</span>
                <div className="flex-1 bg-white/10 rounded-full h-4 overflow-hidden&quot;>
                  <div
                    className={`bg-${item.color}-500 h-full transition-all duration-300`}
                    style={{ width: `${(item.count / filteredReviews.length) * 100}%` }}
                  />
                </div>
                <span className="text-white text-sm w-12 text-right&quot;>{item.count}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Sentiment Trends */}
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20&quot;>
          <h5 className="font-medium text-white mb-4&quot;>Sentiment Trends</h5>
          <div className="text-center py-8 text-white/60&quot;>
            Sentiment trend chart would be rendered here showing
            how sentiment has changed over time.
          </div>
        </div>

        {/* Sentiment by Topic */}
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20&quot;>
          <h5 className="font-medium text-white mb-4&quot;>Sentiment by Topic</h5>
          <div className="space-y-2 max-h-64 overflow-y-auto&quot;>
            {reviewData.topic_analysis.topics.slice(0, 8).map((topic, index) => (
              <div key={index} className="flex items-center justify-between text-sm&quot;>
                <span className="text-white/70&quot;>{topic.name}</span>
                <div className={`px-2 py-1 rounded text-xs ${
                  topic.sentiment_score >= 7 ? &apos;bg-green-500/20 text-green-300&apos; :
                  topic.sentiment_score >= 4 ? &apos;bg-yellow-500/20 text-yellow-300&apos; :
                  &apos;bg-red-500/20 text-red-300
                }`}>
                  {topic.sentiment_score.toFixed(1)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Sentiment Analysis Details */}
      <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20&quot;>
        <h5 className="font-medium text-white mb-4&quot;>Detailed Sentiment Analysis</h5>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6&quot;>
          <div>
            <h6 className="text-white mb-3&quot;>Positive Drivers</h6>
            <div className="space-y-2&quot;>
              {reviewData.sentiment_analysis.positive_keywords.slice(0, 5).map((keyword, index) => (
                <div key={index} className="flex items-center gap-2&quot;>
                  <div className="w-2 h-2 bg-green-400 rounded-full&quot; />
                  <span className="text-white/70&quot;>{keyword}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h6 className="text-white mb-3&quot;>Negative Drivers</h6>
            <div className="space-y-2&quot;>
              {reviewData.sentiment_analysis.negative_keywords.slice(0, 5).map((keyword, index) => (
                <div key={index} className="flex items-center gap-2&quot;>
                  <div className="w-2 h-2 bg-red-400 rounded-full&quot; />
                  <span className="text-white/70&quot;>{keyword}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const ReviewsView: React.FC = () => (
    <div className="space-y-6&quot;>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6&quot;>
        {/* Review Stats */}
        <div className="lg:col-span-1&quot;>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20&quot;>
            <h5 className="font-medium text-white mb-4&quot;>Review Statistics</h5>
            <div className="space-y-3&quot;>
              <div className="flex justify-between&quot;>
                <span className="text-white/60&quot;>Total Reviews</span>
                <span className="font-medium text-white&quot;>{filteredReviews.length}</span>
              </div>
              <div className="flex justify-between&quot;>
                <span className="text-white/60&quot;>Avg. Rating</span>
                <span className="font-medium text-white&quot;>
                  {filteredReviews.length > 0 
                    ? (filteredReviews.reduce((sum, r) => sum + r.rating, 0) / filteredReviews.length).toFixed(1)
                    : &apos;0.0&apos;
                  }
                </span>
              </div>
              <div className="flex justify-between&quot;>
                <span className="text-white/60&quot;>Avg. Helpfulness</span>
                <span className="font-medium text-white&quot;>
                  {filteredReviews.length > 0 
                    ? (filteredReviews.reduce((sum, r) => sum + r.helpfulness_score, 0) / filteredReviews.length).toFixed(1)
                    : &apos;0.0&apos;
                  }
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Reviews List */}
        <div className="lg:col-span-2 space-y-4 max-h-96 overflow-y-auto&quot;>
          {filteredReviews.map((review, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20&quot;>
              <div className="flex items-start justify-between mb-3&quot;>
                <div className="flex items-center gap-3&quot;>
                  <div className="w-10 h-10 bg-purple-500/20 rounded-full flex items-center justify-center&quot;>
                    <span className="text-purple-300 font-medium&quot;>
                      {review.author.charAt(0).toUpperCase()}
                    </span>
                  </div>
                  <div>
                    <div className="font-medium text-white&quot;>{review.author}</div>
                    <div className="text-sm text-white/60&quot;>
                      {new Date(review.date).toLocaleDateString()} • {review.verified_purchase ? &apos;✓ Verified&apos; : &apos;&apos;}
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2&quot;>
                  <div className="flex gap-1&quot;>
                    {[...Array(5)].map((_, i) => (
                      <div
                        key={i}
                        className={`w-3 h-3 rounded-full ${
                          i < review.rating ? &apos;bg-yellow-400&apos; : &apos;bg-white/20&apos;
                        }`}
                      />
                    ))}
                  </div>
                  <div className={`px-2 py-1 rounded text-xs ${
                    review.sentiment === &apos;positive&apos; ? &apos;bg-green-500/20 text-green-300&apos; :
                    review.sentiment === &apos;negative&apos; ? &apos;bg-red-500/20 text-red-300&apos; :
                    &apos;bg-gray-500/20 text-gray-300
                  }`}>
                    {review.sentiment}
                  </div>
                </div>
              </div>

              <p className="text-white/80 mb-3&quot;>{review.content}</p>

              <div className="flex items-center justify-between&quot;>
                <div className="flex flex-wrap gap-2&quot;>
                  {review.topics.map((topic, i) => (
                    <span key={i} className="px-2 py-1 bg-white/10 rounded text-xs text-white/70&quot;>
                      {topic.name}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-3 text-sm text-white/60&quot;>
                  <span>👍 {review.helpful_votes}</span>
                  <span>Helpfulness: {review.helpfulness_score.toFixed(1)}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="max-w-7xl mx-auto&quot;>
      <div className="mb-8&quot;>
        <h3 className="text-2xl font-semibold text-white mb-2&quot;>Review Intelligence</h3>
        <p className="text-white/60&quot;>
          AI-powered analysis of user reviews with persona-relevant insights
        </p>
      </div>

      <TabNavigation />
      <FilterControls />

      <div className="mt-6&quot;>
        {activeTab === &apos;summary&apos; && <SummaryView />}
        {activeTab === &apos;topics&apos; && <TopicsView />}
        {activeTab === &apos;sentiment&apos; && <SentimentView />}
        {activeTab === &apos;reviews&apos; && <ReviewsView />}
      </div>
    </div>
  );
};

export default ReviewIntelligence;
