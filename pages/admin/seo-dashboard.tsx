import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import SEOAutomationEngine from '../../lib/seo-automation';
import { VoiceSearchOptimizer } from '../../lib/voice-search-optimization';
import { EEATEnhancer } from '../../lib/eeat-enhancement';
import { KnowledgeNode } from '../../lib/adaptive-stream';

interface SEOMetrics {
  overallScore: number;
  readabilityScore: number;
  keywordDensity: number;
  semanticRelevance: number;
  competitorGap: number;
  answerIntent: number;
  technicalSEO: number;
  voiceSearchScore: number;
  eeatScore: number;
  coreWebVitals: {
    lcp: number;
    fid: number;
    cls: number;
  };
  searchVisibility: {
    organic: number;
    featuredSnippets: number;
    peopleAlsoAsk: number;
    voiceSearch: number;
  };
  contentPerformance: {
    pageViews: number;
    avgTimeOnPage: number;
    bounceRate: number;
    conversionRate: number;
  };
}

interface ContentAudit {
  id: string;
  title: string;
  url: string;
  lastUpdated: string;
  seoScore: number;
  issues: string[];
  recommendations: string[];
  status: 'optimal' | 'needs-improvement' | 'critical';
}

interface KeywordTracking {
  keyword: string;
  position: number;
  previousPosition: number;
  searchVolume: number;
  difficulty: number;
  url: string;
  trend: 'up' | 'down' | 'stable';
}

const SEODashboard: React.FC = () => {
  const [metrics, setMetrics] = useState<SEOMetrics | null>(null);
  const [contentAudit, setContentAudit] = useState<ContentAudit[]>([]);
  const [keywordTracking, setKeywordTracking] = useState<KeywordTracking[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedTab, setSelectedTab] = useState<'overview' | 'content' | 'keywords' | 'technical'>('overview');

  const seoEngine = new SEOAutomationEngine();
  const voiceOptimizer = new VoiceSearchOptimizer();
  const eeatEnhancer = new EEATEnhancer();

  useEffect(() => {
    fetchSEOMetrics();
    fetchContentAudit();
    fetchKeywordTracking();
  }, []);

  const fetchSEOMetrics = async () => {
    try {
      // Mock data - in production, this would come from your analytics API
      const mockMetrics: SEOMetrics = {
        overallScore: 87,
        readabilityScore: 92,
        keywordDensity: 78,
        semanticRelevance: 85,
        competitorGap: 73,
        answerIntent: 89,
        technicalSEO: 94,
        voiceSearchScore: 82,
        eeatScore: 91,
        coreWebVitals: {
          lcp: 2.1,
          fid: 45,
          cls: 0.08
        },
        searchVisibility: {
          organic: 68,
          featuredSnippets: 12,
          peopleAlsoAsk: 8,
          voiceSearch: 5
        },
        contentPerformance: {
          pageViews: 45230,
          avgTimeOnPage: 4.5,
          bounceRate: 32,
          conversionRate: 3.2
        }
      };
      setMetrics(mockMetrics);
    } catch (error) {
      console.error('Error fetching SEO metrics:', error);
    } finally {
      setLoading(false);
    }
  };

  const fetchContentAudit = async () => {
    try {
      // Mock data - in production, this would come from your CMS API
      const mockAudit: ContentAudit[] = [
        {
          id: '1',
          title: 'The Future of AI-Driven Development',
          url: '/blog/future-ai-driven-development',
          lastUpdated: '2024-01-15',
          seoScore: 87,
          issues: [
            'Meta description could be more compelling',
            'Missing internal links to related content',
            'Image alt tags need optimization'
          ],
          recommendations: [
            'Update meta description to include target keywords',
            'Add 3-5 internal links to relevant articles',
            'Optimize all images with descriptive alt text'
          ],
          status: 'needs-improvement'
        },
        {
          id: '2',
          title: 'Top 10 AI Tools for Content Creation',
          url: '/blog/top-10-ai-tools-content-creation',
          lastUpdated: '2024-01-10',
          seoScore: 94,
          issues: [],
          recommendations: [
            'Consider adding a video summary',
            'Expand FAQ section for more featured snippet opportunities'
          ],
          status: 'optimal'
        },
        {
          id: '3',
          title: 'AI in Healthcare: Opportunities and Challenges',
          url: '/blog/ai-healthcare-opportunities',
          lastUpdated: '2023-12-20',
          seoScore: 65,
          issues: [
            'Content is outdated',
            'Missing E-E-A-T signals',
            'No structured data for medical claims',
            'Low readability score'
          ],
          recommendations: [
            'Update content with latest research',
            'Add author credentials and fact-checking',
            'Implement medical claim schema',
            'Simplify language for better readability'
          ],
          status: 'critical'
        }
      ];
      setContentAudit(mockAudit);
    } catch (error) {
      console.error('Error fetching content audit:', error);
    }
  };

  const fetchKeywordTracking = async () => {
    try {
      // Mock data - in production, this would come from your SEO tool API
      const mockKeywords: KeywordTracking[] = [
        {
          keyword: 'AI tools for developers',
          position: 3,
          previousPosition: 5,
          searchVolume: 12400,
          difficulty: 68,
          url: '/blog/ai-tools-developers',
          trend: 'up'
        },
        {
          keyword: 'best AI writing tools',
          position: 7,
          previousPosition: 6,
          searchVolume: 8900,
          difficulty: 72,
          url: '/blog/best-ai-writing-tools',
          trend: 'down'
        },
        {
          keyword: 'AI content creation software',
          position: 12,
          previousPosition: 12,
          searchVolume: 5600,
          difficulty: 65,
          url: '/blog/ai-content-creation-software',
          trend: 'stable'
        },
        {
          keyword: 'machine learning tools comparison',
          position: 5,
          previousPosition: 8,
          searchVolume: 7800,
          difficulty: 70,
          url: '/blog/machine-learning-tools-comparison',
          trend: 'up'
        },
        {
          keyword: 'AI automation for business',
          position: 9,
          previousPosition: 11,
          searchVolume: 10200,
          difficulty: 75,
          url: '/blog/ai-automation-business',
          trend: 'up'
        }
      ];
      setKeywordTracking(mockKeywords);
    } catch (error) {
      console.error('Error fetching keyword tracking:', error);
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'optimal':
        return 'text-green-600 bg-green-100';
      case 'needs-improvement':
        return 'text-yellow-600 bg-yellow-100';
      case 'critical':
        return 'text-red-600 bg-red-100';
      default:
        return 'text-gray-600 bg-gray-100';
    }
  };

  const getScoreColor = (score: number) => {
    if (score >= 90) return 'text-green-600';
    if (score >= 70) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case 'up':
        return '↑';
      case 'down':
        return '↓';
      default:
        return '→';
    }
  };

  const getTrendColor = (trend: string) => {
    switch (trend) {
      case &apos;up&apos;:
        return &apos;text-green-600&apos;;
      case &apos;down&apos;:
        return &apos;text-red-600&apos;;
      default:
        return &apos;text-gray-600&apos;;
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center&quot;>
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600&quot;></div>
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>SEO Dashboard - AI Vault</title>
        <meta name="description&quot; content="Comprehensive SEO monitoring and optimization dashboard&quot; />
      </Head>

      <div className="min-h-screen bg-gray-50&quot;>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8&quot;>
          {/* Header */}
          <div className="mb-8&quot;>
            <h1 className="text-3xl font-bold text-gray-900&quot;>SEO Dashboard</h1>
            <p className="mt-2 text-gray-600&quot;>Monitor and optimize your SEO performance in real-time</p>
          </div>

          {/* Tab Navigation */}
          <div className="mb-8 border-b border-gray-200&quot;>
            <nav className="-mb-px flex space-x-8&quot;>
              {([&apos;overview&apos;, &apos;content&apos;, &apos;keywords&apos;, &apos;technical&apos;] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setSelectedTab(tab)}
                  className={`py-2 px-1 border-b-2 font-medium text-sm capitalize ${
                    selectedTab === tab
                      ? &apos;border-blue-500 text-blue-600&apos;
                      : &apos;border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300
                  }`}
                >
                  {tab}
                </button>
              ))}
            </nav>
          </div>

          {/* Overview Tab */}
          {selectedTab === &apos;overview&apos; && metrics && (
            <div className="space-y-6&quot;>
              {/* Key Metrics */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6&quot;>
                <div className="bg-white p-6 rounded-lg shadow&quot;>
                  <h3 className="text-sm font-medium text-gray-500 mb-2&quot;>Overall SEO Score</h3>
                  <p className={`text-3xl font-bold ${getScoreColor(metrics.overallScore)}`}>
                    {metrics.overallScore}
                  </p>
                  <p className="text-sm text-gray-600 mt-1&quot;>Overall performance</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow&quot;>
                  <h3 className="text-sm font-medium text-gray-500 mb-2&quot;>Organic Visibility</h3>
                  <p className="text-3xl font-bold text-blue-600&quot;>{metrics.searchVisibility.organic}%</p>
                  <p className="text-sm text-gray-600 mt-1&quot;>Search visibility score</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow&quot;>
                  <h3 className="text-sm font-medium text-gray-500 mb-2&quot;>Featured Snippets</h3>
                  <p className="text-3xl font-bold text-green-600&quot;>{metrics.searchVisibility.featuredSnippets}</p>
                  <p className="text-sm text-gray-600 mt-1&quot;>Active snippets</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow&quot;>
                  <h3 className="text-sm font-medium text-gray-500 mb-2&quot;>Page Views</h3>
                  <p className="text-3xl font-bold text-purple-600&quot;>
                    {metrics.contentPerformance.pageViews.toLocaleString()}
                  </p>
                  <p className="text-sm text-gray-600 mt-1&quot;>Total page views</p>
                </div>
              </div>

              {/* SEO Scores Breakdown */}
              <div className="bg-white p-6 rounded-lg shadow&quot;>
                <h3 className="text-lg font-semibold text-gray-900 mb-4&quot;>SEO Scores Breakdown</h3>
                <div className="space-y-4&quot;>
                  {[
                    { label: &apos;Readability&apos;, score: metrics.readabilityScore },
                    { label: &apos;Keyword Density&apos;, score: metrics.keywordDensity },
                    { label: &apos;Semantic Relevance&apos;, score: metrics.semanticRelevance },
                    { label: &apos;Answer Intent&apos;, score: metrics.answerIntent },
                    { label: &apos;Technical SEO&apos;, score: metrics.technicalSEO },
                    { label: &apos;Voice Search&apos;, score: metrics.voiceSearchScore },
                    { label: &apos;E-E-A-T, score: metrics.eeatScore }
                  ].map((item) => (
                    <div key={item.label} className="flex items-center justify-between&quot;>
                      <div className="flex-1&quot;>
                        <div className="flex items-center justify-between mb-1&quot;>
                          <span className="text-sm font-medium text-gray-700&quot;>{item.label}</span>
                          <span className={`text-sm font-bold ${getScoreColor(item.score)}`}>
                            {item.score}
                          </span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2&quot;>
                          <div
                            className={`h-2 rounded-full ${
                              item.score >= 90 ? &apos;bg-green-500&apos; : item.score >= 70 ? &apos;bg-yellow-500&apos; : &apos;bg-red-500
                            }`}
                            style={{ width: `${item.score}%` }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Core Web Vitals */}
              <div className="bg-white p-6 rounded-lg shadow&quot;>
                <h3 className="text-lg font-semibold text-gray-900 mb-4&quot;>Core Web Vitals</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6&quot;>
                  <div>
                    <h4 className="text-sm font-medium text-gray-500 mb-2&quot;>Largest Contentful Paint</h4>
                    <p className={`text-2xl font-bold ${metrics.coreWebVitals.lcp <= 2.5 ? &apos;text-green-600&apos; : &apos;text-red-600}`}>
                      {metrics.coreWebVitals.lcp}s
                    </p>
                    <p className="text-sm text-gray-600&quot;>Target: &lt;2.5s</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-500 mb-2&quot;>First Input Delay</h4>
                    <p className={`text-2xl font-bold ${metrics.coreWebVitals.fid <= 100 ? &apos;text-green-600&apos; : &apos;text-red-600}`}>
                      {metrics.coreWebVitals.fid}ms
                    </p>
                    <p className="text-sm text-gray-600&quot;>Target: &lt;100ms</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-500 mb-2&quot;>Cumulative Layout Shift</h4>
                    <p className={`text-2xl font-bold ${metrics.coreWebVitals.cls <= 0.1 ? &apos;text-green-600&apos; : &apos;text-red-600}`}>
                      {metrics.coreWebVitals.cls}
                    </p>
                    <p className="text-sm text-gray-600&quot;>Target: &lt;0.1</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Content Audit Tab */}
          {selectedTab === &apos;content&apos; && (
            <div className="space-y-6&quot;>
              <div className="bg-white rounded-lg shadow overflow-hidden&quot;>
                <div className="px-6 py-4 border-b border-gray-200&quot;>
                  <h3 className="text-lg font-semibold text-gray-900&quot;>Content Audit</h3>
                  <p className="text-sm text-gray-600&quot;>Review and optimize your content for better SEO performance</p>
                </div>
                <div className="overflow-x-auto&quot;>
                  <table className="min-w-full divide-y divide-gray-200&quot;>
                    <thead className="bg-gray-50&quot;>
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider&quot;>
                          Content
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider&quot;>
                          SEO Score
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider&quot;>
                          Status
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider&quot;>
                          Last Updated
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider&quot;>
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200&quot;>
                      {contentAudit.map((content) => (
                        <tr key={content.id}>
                          <td className="px-6 py-4 whitespace-nowrap&quot;>
                            <div>
                              <div className="text-sm font-medium text-gray-900&quot;>{content.title}</div>
                              <div className="text-sm text-gray-500&quot;>{content.url}</div>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap&quot;>
                            <div className="flex items-center&quot;>
                              <span className={`text-lg font-bold ${getScoreColor(content.seoScore)}`}>
                                {content.seoScore}
                              </span>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap&quot;>
                            <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(content.status)}`}>
                              {content.status.replace(&apos;-&apos;, &apos; &apos;)}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500&quot;>
                            {new Date(content.lastUpdated).toLocaleDateString()}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium&quot;>
                            <button className="text-blue-600 hover:text-blue-900 mr-3&quot;>View</button>
                            <button className="text-green-600 hover:text-green-900&quot;>Optimize</button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Content Issues */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6&quot;>
                {contentAudit.filter(c => c.issues.length > 0).map((content) => (
                  <div key={content.id} className="bg-white p-6 rounded-lg shadow&quot;>
                    <h4 className="font-semibold text-gray-900 mb-3&quot;>{content.title}</h4>
                    <div className="space-y-2&quot;>
                      <h5 className="text-sm font-medium text-red-600&quot;>Issues:</h5>
                      <ul className="list-disc list-inside space-y-1&quot;>
                        {content.issues.map((issue, index) => (
                          <li key={index} className="text-sm text-gray-600&quot;>{issue}</li>
                        ))}
                      </ul>
                      <h5 className="text-sm font-medium text-green-600 mt-3&quot;>Recommendations:</h5>
                      <ul className="list-disc list-inside space-y-1&quot;>
                        {content.recommendations.map((rec, index) => (
                          <li key={index} className="text-sm text-gray-600&quot;>{rec}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Keywords Tab */}
          {selectedTab === &apos;keywords&apos; && (
            <div className="space-y-6&quot;>
              <div className="bg-white rounded-lg shadow overflow-hidden&quot;>
                <div className="px-6 py-4 border-b border-gray-200&quot;>
                  <h3 className="text-lg font-semibold text-gray-900&quot;>Keyword Tracking</h3>
                  <p className="text-sm text-gray-600&quot;>Monitor your keyword rankings and performance</p>
                </div>
                <div className="overflow-x-auto&quot;>
                  <table className="min-w-full divide-y divide-gray-200&quot;>
                    <thead className="bg-gray-50&quot;>
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider&quot;>
                          Keyword
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider&quot;>
                          Position
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider&quot;>
                          Trend
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider&quot;>
                          Search Volume
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider&quot;>
                          Difficulty
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider&quot;>
                          URL
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200&quot;>
                      {keywordTracking.map((keyword, index) => (
                        <tr key={index}>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900&quot;>
                            {keyword.keyword}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap&quot;>
                            <div className="flex items-center&quot;>
                              <span className="text-lg font-bold text-gray-900&quot;>{keyword.position}</span>
                              {keyword.previousPosition !== keyword.position && (
                                <span className="ml-2 text-sm text-gray-500&quot;>
                                  ({keyword.previousPosition})
                                </span>
                              )}
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap&quot;>
                            <span className={`text-lg font-bold ${getTrendColor(keyword.trend)}`}>
                              {getTrendIcon(keyword.trend)}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900&quot;>
                            {keyword.searchVolume.toLocaleString()}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap&quot;>
                            <div className="flex items-center&quot;>
                              <div className="flex-1 mr-2&quot;>
                                <div className="w-full bg-gray-200 rounded-full h-2&quot;>
                                  <div
                                    className={`h-2 rounded-full ${
                                      keyword.difficulty <= 30 ? &apos;bg-green-500&apos; : 
                                      keyword.difficulty <= 60 ? &apos;bg-yellow-500&apos; : &apos;bg-red-500
                                    }`}
                                    style={{ width: `${keyword.difficulty}%` }}
                                  ></div>
                                </div>
                              </div>
                              <span className="text-sm text-gray-900&quot;>{keyword.difficulty}</span>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-600&quot;>
                            {keyword.url}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* Technical SEO Tab */}
          {selectedTab === &apos;technical&apos; && (
            <div className="space-y-6&quot;>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6&quot;>
                {/* Sitemap Status */}
                <div className="bg-white p-6 rounded-lg shadow&quot;>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4&quot;>Sitemap Status</h3>
                  <div className="space-y-3&quot;>
                    <div className="flex items-center justify-between&quot;>
                      <span className="text-sm text-gray-600&quot;>Main Sitemap</span>
                      <span className="text-sm font-medium text-green-600&quot;>✓ Active</span>
                    </div>
                    <div className="flex items-center justify-between&quot;>
                      <span className="text-sm text-gray-600&quot;>Image Sitemap</span>
                      <span className="text-sm font-medium text-green-600&quot;>✓ Active</span>
                    </div>
                    <div className="flex items-center justify-between&quot;>
                      <span className="text-sm text-gray-600&quot;>News Sitemap</span>
                      <span className="text-sm font-medium text-green-600&quot;>✓ Active</span>
                    </div>
                    <div className="flex items-center justify-between&quot;>
                      <span className="text-sm text-gray-600&quot;>Last Submitted</span>
                      <span className="text-sm text-gray-900&quot;>2 hours ago</span>
                    </div>
                    <div className="flex items-center justify-between&quot;>
                      <span className="text-sm text-gray-600&quot;>URLs Indexed</span>
                      <span className="text-sm text-gray-900&quot;>1,247 / 1,250</span>
                    </div>
                  </div>
                </div>

                {/* IndexNow Status */}
                <div className="bg-white p-6 rounded-lg shadow&quot;>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4&quot;>IndexNow Status</h3>
                  <div className="space-y-3&quot;>
                    <div className="flex items-center justify-between&quot;>
                      <span className="text-sm text-gray-600&quot;>API Key</span>
                      <span className="text-sm font-medium text-green-600&quot;>✓ Configured</span>
                    </div>
                    <div className="flex items-center justify-between&quot;>
                      <span className="text-sm text-gray-600&quot;>Last Notification</span>
                      <span className="text-sm text-gray-900&quot;>30 minutes ago</span>
                    </div>
                    <div className="flex items-center justify-between&quot;>
                      <span className="text-sm text-gray-600&quot;>Success Rate</span>
                      <span className="text-sm text-gray-900&quot;>98%</span>
                    </div>
                    <div className="flex items-center justify-between&quot;>
                      <span className="text-sm text-gray-600&quot;>Search Engines</span>
                      <span className="text-sm text-gray-900&quot;>5 connected</span>
                    </div>
                    <div className="flex items-center justify-between&quot;>
                      <span className="text-sm text-gray-600&quot;>Notifications Sent</span>
                      <span className="text-sm text-gray-900&quot;>247 today</span>
                    </div>
                  </div>
                </div>

                {/* Structured Data */}
                <div className="bg-white p-6 rounded-lg shadow&quot;>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4&quot;>Structured Data</h3>
                  <div className="space-y-3&quot;>
                    <div className="flex items-center justify-between&quot;>
                      <span className="text-sm text-gray-600&quot;>Article Schema</span>
                      <span className="text-sm font-medium text-green-600&quot;>✓ Valid</span>
                    </div>
                    <div className="flex items-center justify-between&quot;>
                      <span className="text-sm text-gray-600&quot;>FAQ Schema</span>
                      <span className="text-sm font-medium text-green-600&quot;>✓ Valid</span>
                    </div>
                    <div className="flex items-center justify-between&quot;>
                      <span className="text-sm text-gray-600&quot;>Breadcrumb Schema</span>
                      <span className="text-sm font-medium text-green-600&quot;>✓ Valid</span>
                    </div>
                    <div className="flex items-center justify-between&quot;>
                      <span className="text-sm text-gray-600&quot;>Organization Schema</span>
                      <span className="text-sm font-medium text-green-600&quot;>✓ Valid</span>
                    </div>
                    <div className="flex items-center justify-between&quot;>
                      <span className="text-sm text-gray-600&quot;>Total Schemas</span>
                      <span className="text-sm text-gray-900&quot;>12 active</span>
                    </div>
                  </div>
                </div>

                {/* Crawl Budget */}
                <div className="bg-white p-6 rounded-lg shadow&quot;>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4&quot;>Crawl Budget</h3>
                  <div className="space-y-3&quot;>
                    <div className="flex items-center justify-between&quot;>
                      <span className="text-sm text-gray-600&quot;>Daily Crawl Limit</span>
                      <span className="text-sm text-gray-900&quot;>500 pages</span>
                    </div>
                    <div className="flex items-center justify-between&quot;>
                      <span className="text-sm text-gray-600&quot;>Crawled Today</span>
                      <span className="text-sm text-gray-900&quot;>342 pages</span>
                    </div>
                    <div className="flex items-center justify-between&quot;>
                      <span className="text-sm text-gray-600&quot;>Crawl Success Rate</span>
                      <span className="text-sm text-gray-900&quot;>99.2%</span>
                    </div>
                    <div className="flex items-center justify-between&quot;>
                      <span className="text-sm text-gray-600&quot;>Avg Response Time</span>
                      <span className="text-sm text-gray-900&quot;>245ms</span>
                    </div>
                    <div className="flex items-center justify-between&quot;>
                      <span className="text-sm text-gray-600&quot;>Crawl Errors</span>
                      <span className="text-sm text-red-600&quot;>2 pages</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default SEODashboard;
