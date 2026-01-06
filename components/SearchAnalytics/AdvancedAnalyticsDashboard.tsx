import { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line } from 'recharts';
import { FaChartBar, FaChartPie, FaChartLine, FaRobot, FaSearch } from 'react-icons/fa';

interface SearchAnalytics {
  totalSearches: number;
  cacheHitRate: number;
  averageResponseTime: number;
  topSearchTerms: { term: string; count: number }[];
  modelUsage: { model: string; count: number }[];
  intentDistribution: { intent: string; count: number }[];
  performanceTrend: { date: string; responseTime: number; searches: number }[];
}

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8'];

const AdvancedAnalyticsDashboard = () => {
  const [analytics, setAnalytics] = useState<SearchAnalytics | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [timeRange, setTimeRange] = useState('7d');

  useEffect(() => {
    fetchAnalytics();
  }, [timeRange]);

  const fetchAnalytics = async () => {
    try {
      setLoading(true);
      const response = await fetch(`/api/search-analytics?range=${timeRange}`);
      const data = await response.json();
      setAnalytics(data);
    } catch (err) {
      setError(&apos;Failed to fetch analytics data&apos;);
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64&quot;>
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600&quot;></div>
      </div>
    );
  }

  if (error || !analytics) {
    return (
      <div className="bg-red-50 border border-red-200 rounded-lg p-6 text-center&quot;>
        <p className="text-red-700&quot;>{error || &apos;Failed to load analytics data&apos;}</p>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8&quot;>
      <div className="text-center mb-8&quot;>
        <h1 className="text-3xl font-bold text-gray-900 mb-2&quot;>Advanced Search Analytics</h1>
        <p className="text-gray-600&quot;>Insights into your AI-powered search performance</p>
      </div>

      {/* Time Range Selector */}
      <div className="flex justify-end mb-6&quot;>
        <div className="inline-flex rounded-md shadow-sm&quot;>
          {[&apos;1d&apos;, &apos;7d&apos;, &apos;30d&apos;, &apos;90d&apos;].map((range) => (
            <button
              key={range}
              onClick={() => setTimeRange(range)}
              className={`px-4 py-2 text-sm font-medium ${
                timeRange === range
                  ? &apos;bg-blue-600 text-white&apos;
                  : &apos;bg-white text-gray-700 hover:bg-gray-50&apos;
              } border border-gray-300 ${
                range === &apos;1d&apos; ? &apos;rounded-l-md&apos; : 
                range === &apos;90d&apos; ? &apos;rounded-r-md&apos; : 
                &apos;-ml-px
              }`}
            >
              {range}
            </button>
          ))}
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8&quot;>
        <div className="bg-white shadow rounded-lg p-6&quot;>
          <div className="flex items-center&quot;>
            <div className="rounded-full bg-blue-100 p-3&quot;>
              <FaSearch className="h-6 w-6 text-blue-600&quot; />
            </div>
            <div className="ml-4&quot;>
              <p className="text-sm font-medium text-gray-600&quot;>Total Searches</p>
              <p className="text-2xl font-semibold text-gray-900&quot;>{analytics.totalSearches.toLocaleString()}</p>
            </div>
          </div>
        </div>

        <div className="bg-white shadow rounded-lg p-6&quot;>
          <div className="flex items-center&quot;>
            <div className="rounded-full bg-green-100 p-3&quot;>
              <FaChartPie className="h-6 w-6 text-green-600&quot; />
            </div>
            <div className="ml-4&quot;>
              <p className="text-sm font-medium text-gray-600&quot;>Cache Hit Rate</p>
              <p className="text-2xl font-semibold text-gray-900&quot;>{analytics.cacheHitRate}%</p>
            </div>
          </div>
        </div>

        <div className="bg-white shadow rounded-lg p-6&quot;>
          <div className="flex items-center&quot;>
            <div className="rounded-full bg-purple-100 p-3&quot;>
              <FaChartLine className="h-6 w-6 text-purple-600&quot; />
            </div>
            <div className="ml-4&quot;>
              <p className="text-sm font-medium text-gray-600&quot;>Avg Response Time</p>
              <p className="text-2xl font-semibold text-gray-900&quot;>{Math.round(analytics.averageResponseTime)}ms</p>
            </div>
          </div>
        </div>

        <div className="bg-white shadow rounded-lg p-6&quot;>
          <div className="flex items-center&quot;>
            <div className="rounded-full bg-yellow-100 p-3&quot;>
              <FaRobot className="h-6 w-6 text-yellow-600&quot; />
            </div>
            <div className="ml-4&quot;>
              <p className="text-sm font-medium text-gray-600&quot;>Top Model</p>
              <p className="text-2xl font-semibold text-gray-900&quot;>
                {analytics.modelUsage.length > 0 ? analytics.modelUsage[0].model : &apos;N/A&apos;}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8&quot;>
        {/* Top Search Terms */}
        <div className="bg-white shadow rounded-lg p-6&quot;>
          <h2 className="text-lg font-semibold text-gray-900 mb-4&quot;>Top Search Terms</h2>
          <div className="h-80&quot;>
            <ResponsiveContainer width="100%&quot; height="100%&quot;>
              <BarChart data={analytics.topSearchTerms.slice(0, 10)}>
                <CartesianGrid strokeDasharray="3 3&quot; />
                <XAxis dataKey="term&quot; />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="count&quot; name="Search Count&quot; fill="#8884d8&quot; />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Model Usage */}
        <div className="bg-white shadow rounded-lg p-6&quot;>
          <h2 className="text-lg font-semibold text-gray-900 mb-4&quot;>AI Model Usage</h2>
          <div className="h-80&quot;>
            <ResponsiveContainer width="100%&quot; height="100%&quot;>
              <PieChart>
                <Pie
                  data={analytics.modelUsage}
                  cx="50%&quot;
                  cy="50%&quot;
                  labelLine={true}
                  label={(entry: { model: string; count: number }) => `${entry.model}: ${entry.count}`}
                  outerRadius={80}
                  fill="#8884d8&quot;
                  dataKey="count&quot;
                  nameKey="model&quot;
                >
                  {analytics.modelUsage.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8&quot;>
        {/* Intent Distribution */}
        <div className="bg-white shadow rounded-lg p-6&quot;>
          <h2 className="text-lg font-semibold text-gray-900 mb-4&quot;>Query Intent Distribution</h2>
          <div className="h-80&quot;>
            <ResponsiveContainer width="100%&quot; height="100%&quot;>
              <BarChart data={analytics.intentDistribution}>
                <CartesianGrid strokeDasharray="3 3&quot; />
                <XAxis dataKey="intent&quot; />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="count&quot; name="Query Count&quot; fill="#82ca9d&quot; />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Performance Trend */}
        <div className="bg-white shadow rounded-lg p-6&quot;>
          <h2 className="text-lg font-semibold text-gray-900 mb-4&quot;>Performance Trend</h2>
          <div className="h-80&quot;>
            <ResponsiveContainer width="100%&quot; height="100%&quot;>
              <LineChart data={analytics.performanceTrend}>
                <CartesianGrid strokeDasharray="3 3&quot; />
                <XAxis dataKey="date&quot; />
                <YAxis yAxisId="left&quot; />
                <YAxis yAxisId="right&quot; orientation="right&quot; />
                <Tooltip />
                <Legend />
                <Line 
                  yAxisId="left&quot;
                  type="monotone&quot; 
                  dataKey="responseTime&quot; 
                  name="Response Time (ms)&quot; 
                  stroke="#8884d8&quot; 
                  strokeWidth={2}
                  dot={{ r: 4 }}
                  activeDot={{ r: 6 }}
                />
                <Line 
                  yAxisId="right&quot;
                  type="monotone&quot; 
                  dataKey="searches&quot; 
                  name="Searches&quot; 
                  stroke="#82ca9d&quot; 
                  strokeWidth={2}
                  dot={{ r: 4 }}
                  activeDot={{ r: 6 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Detailed Metrics */}
      <div className="bg-white shadow rounded-lg p-6&quot;>
        <h2 className="text-lg font-semibold text-gray-900 mb-4&quot;>Detailed Metrics</h2>
        <div className="overflow-x-auto&quot;>
          <table className="min-w-full divide-y divide-gray-200&quot;>
            <thead className="bg-gray-50&quot;>
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider&quot;>
                  Metric
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider&quot;>
                  Value
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider&quot;>
                  Description
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200&quot;>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900&quot;>
                  Total Searches
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500&quot;>
                  {analytics.totalSearches.toLocaleString()}
                </td>
                <td className="px-6 py-4 text-sm text-gray-500&quot;>
                  Total number of search queries processed
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900&quot;>
                  Cache Hit Rate
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500&quot;>
                  {analytics.cacheHitRate}%
                </td>
                <td className="px-6 py-4 text-sm text-gray-500&quot;>
                  Percentage of searches served from cache
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900&quot;>
                  Average Response Time
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500&quot;>
                  {Math.round(analytics.averageResponseTime)}ms
                </td>
                <td className="px-6 py-4 text-sm text-gray-500&quot;>
                  Average time to process search queries
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900&quot;>
                  Top Search Term
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500&quot;>
                  {analytics.topSearchTerms.length > 0 ? analytics.topSearchTerms[0].term : &apos;N/A&apos;}
                </td>
                <td className="px-6 py-4 text-sm text-gray-500&quot;>
                  Most frequently searched term
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdvancedAnalyticsDashboard;