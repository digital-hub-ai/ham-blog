import { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import { FiAlertTriangle, FiBookOpen, FiCalendar, FiCheckCircle, FiClock, FiCode, FiCpu, FiDatabase, FiDownload, FiEye, FiFilter, FiGitBranch, FiGlobe, FiImage, FiInfo, FiLayers, FiList, FiMonitor, FiPieChart, FiRefreshCw, FiServer, FiSettings, FiShield, FiTrendingUp, FiType, FiZap } from 'react-icons/fi';
import { FaPython, FaRegLightbulb } from 'react-icons/fa';
import { SiJupyter, SiPytorch, SiScikitlearn, SiTensorflow } from 'react-icons/si';

const MLModelExplainability: NextPage = () => {
  const router = useRouter();
  const currentUrl = `https://aivault.ai${router.asPath}`;
  const title = &apos;ML Model Explainability: Techniques and Tools for Transparent AI | AI Vault&apos;;
  const description = &apos;Comprehensive guide to machine learning model explainability. Learn about interpretability techniques, SHAP, LIME, counterfactual explanations, and best practices for implementing explainable AI in production.&apos;;
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100&quot;>
      <Head>
        <title>{title}</title>
        <meta name="description&quot; content={description} />
        <meta name="keywords&quot; content="machine learning explainability, model interpretability, SHAP, LIME, XAI, explainable AI, AI transparency, model debugging&quot; />
        <meta name="author&quot; content="AI Vault Research Team&quot; />
        <meta name="viewport&quot; content="width=device-width, initial-scale=1.0&quot; />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type&quot; content="article&quot; />
        <meta property="og:title&quot; content={title} />
        <meta property="og:description&quot; content={description} />
        <meta property="og:url&quot; content={currentUrl} />
        <meta property="og:image&quot; content="https://aivault.ai/images/explainability-og.jpg&quot; />
        <meta property="og:site_name&quot; content="AI Vault&quot; />
        <meta property="article:published_time&quot; content="2025-04-15T00:00:00+00:00&quot; />
        <meta property="article:author&quot; content="AI Vault Research Team&quot; />
        <meta property="article:section&quot; content="AI Ethics&quot; />
        <meta property="article:tag&quot; content="AI Ethics&quot; />
        <meta property="article:tag&quot; content="Explainable AI&quot; />
        <meta property="article:tag&quot; content="Machine Learning&quot; />
        
        {/* Twitter */}
        <meta name="twitter:card&quot; content="summary_large_image&quot; />
        <meta name="twitter:site&quot; content="@aivault&quot; />
        <meta name="twitter:creator&quot; content="@aivault&quot; />
        <meta name="twitter:title&quot; content={title} />
        <meta name="twitter:description&quot; content={description} />
        <meta name="twitter:image&quot; content="https://aivault.ai/images/explainability-twitter.jpg&quot; />
        
        {/* Canonical URL */}
        <link rel="canonical&quot; href={currentUrl} />
        
        {/* Structured Data */}
        <script type="application/ld+json&quot;>
          {JSON.stringify({
            &quot;@context&quot;: &quot;https://schema.org&quot;,
            &quot;@type&quot;: &quot;Article&quot;,
            &quot;headline&quot;: title,
            &quot;description&quot;: description,
            &quot;image&quot;: &quot;https://aivault.ai/images/explainability-og.jpg&quot;,
            &quot;author&quot;: {
              &quot;@type&quot;: &quot;Organization&quot;,
              &quot;name&quot;: &quot;AI Vault Research Team&quot;,
              &quot;url&quot;: &quot;https://aivault.ai&quot;
            },
            &quot;publisher&quot;: {
              &quot;@type&quot;: &quot;Organization&quot;,
              &quot;name&quot;: &quot;AI Vault&quot;,
              &quot;logo&quot;: {
                &quot;@type&quot;: &quot;ImageObject&quot;,
                &quot;url&quot;: &quot;https://aivault.ai/logo.png&quot;
              }
            },
            &quot;datePublished&quot;: &quot;2025-04-15T00:00:00+00:00&quot;,
            &quot;dateModified&quot;: &quot;2025-04-15T00:00:00+00:00&quot;,
            &quot;mainEntityOfPage&quot;: {
              &quot;@type&quot;: &quot;WebPage&quot;,
              &quot;@id&quot;: currentUrl
            }
          })}
        </script>
      </Head>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12&quot;>
        <article className="bg-white shadow-xl rounded-2xl overflow-hidden&quot;>
          {/* Header */}
          <div className="relative&quot;>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-indigo-700 opacity-90&quot;></div>
            <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8 text-center&quot;>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-6&quot;>
                ML Model Explainability
              </h1>
              <p className="mt-6 max-w-3xl mx-auto text-xl text-purple-100&quot;>
                Techniques and Tools for Transparent AI
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4&quot;>
                <div className="flex items-center text-purple-100&quot;>
                  <span className="bg-purple-500 bg-opacity-30 rounded-full p-2 mr-2&quot;>
                    <FaRegLightbulb className="h-5 w-5&quot; />
                  </span>
                  <span>AI Ethics & Explainability</span>
                </div>
                <div className="flex items-center text-purple-100&quot;>
                  <span className="bg-purple-500 bg-opacity-30 rounded-full p-2 mr-2&quot;>
                    <FiClock className="h-5 w-5&quot; />
                  </span>
                  <span>35 min read</span>
                </div>
                <div className="flex items-center text-purple-100&quot;>
                  <span className="bg-purple-500 bg-opacity-30 rounded-full p-2 mr-2&quot;>
                    <FiCalendar className="h-5 w-5&quot; />
                  </span>
                  <span>April 15, 2025</span>
                </div>
              </div>
            </div>
          </div>

          {/* Author and Share */}
          <div className="bg-white px-6 py-4 border-b border-gray-200&quot;>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between&quot;>
              <div className="flex items-center&quot;>
                <div className="flex-shrink-0&quot;>
                  <img
                    className="h-10 w-10 rounded-full&quot;
                    src="/images/authors/ai-vault-research-team.jpg&quot;
                    alt="AI Vault Research Team&quot;
                  />
                </div>
                <div className="ml-3&quot;>
                  <p className="text-sm font-medium text-gray-900&quot;>AI Vault Research Team</p>
                  <div className="flex space-x-1 text-sm text-gray-500&quot;>
                    <span>AI Ethics & Explainability</span>
                  </div>
                </div>
              </div>
              <div className="mt-3 flex md:mt-0 space-x-3&quot;>
                <span className="inline-flex rounded-md shadow-sm&quot;>
                  <a
                    href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent(title)}`}
                    target="_blank&quot;
                    rel="noopener noreferrer&quot;
                    className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50&quot;
                  >
                    <svg className="-ml-1 mr-2 h-5 w-5 text-blue-400&quot; fill="currentColor&quot; viewBox="0 0 24 24&quot;>
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84&quot; />
                    </svg>
                    Share on Twitter
                  </a>
                </span>
                <span className="inline-flex rounded-md shadow-sm&quot;>
                  <a
                    href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(currentUrl)}`}
                    target="_blank&quot;
                    rel="noopener noreferrer&quot;
                    className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50&quot;
                  >
                    <svg className="-ml-1 mr-2 h-5 w-5 text-blue-600&quot; fill="currentColor&quot; viewBox="0 0 24 24&quot;>
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065a2.064 2.064 0 114.127 0 2.064 2.064 0 01-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z&quot; />
                    </svg>
                    Share on LinkedIn
                  </a>
                </span>
              </div>
            </div>
          </div>

          {/* Article Content */}
          <div className="px-6 py-8 lg:py-12 lg:px-12 max-w-4xl mx-auto prose prose-lg text-gray-700&quot;>
            <p className="lead text-xl text-gray-700 mb-8&quot;>
              As machine learning models become more complex and are deployed in critical applications, the need for explainability has never been greater. This comprehensive guide explores the techniques, tools, and best practices for making AI systems more transparent, interpretable, and trustworthy.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6&quot;>The Importance of Model Explainability</h2>
            
            <p>
              Model explainability refers to the ability to explain and present machine learning model behavior in understandable terms to humans. It&apos;s crucial for building trust, ensuring fairness, meeting regulatory requirements, and debugging models.
            </p>
            
            <div className="bg-purple-50 border-l-4 border-purple-400 p-4 my-6 rounded-r&quot;>
              <div className="flex&quot;>
                <div className="flex-shrink-0&quot;>
                  <FiAlertTriangle className="h-5 w-5 text-purple-700&quot; />
                </div>
                <div className="ml-3&quot;>
                  <h3 className="text-sm font-medium text-purple-800&quot;>Regulatory Landscape</h3>
                  <div className="mt-2 text-sm text-purple-700&quot;>
                    <p>Regulations like GDPR (Article 22), the EU AI Act, and various industry-specific guidelines now require organizations to provide explanations for automated decisions that significantly affect individuals. Failure to comply can result in fines up to 4% of global revenue or €20 million, whichever is higher.</p>
                  </div>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4&quot;>Key Benefits of Explainable AI</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8&quot;>
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200&quot;>
                <div className="text-purple-600 mb-3&quot;>
                  <FiShield className="h-8 w-8&quot; />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3&quot;>1. Trust & Accountability</h3>
                <p className="text-gray-700&quot;>Helps stakeholders understand and trust model decisions, enabling better accountability in AI systems.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200&quot;>
                <div className="text-purple-600 mb-3&quot;>
                  <FiFilter className="h-8 w-8&quot; />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3&quot;>2. Bias Detection</h3>
                <p className="text-gray-700&quot;>Reveals potential biases in model predictions by highlighting which features drive certain outcomes.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200&quot;>
                <div className="text-purple-600 mb-3&quot;>
                  <FiTrendingUp className="h-8 w-8&quot; />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3&quot;>3. Model Improvement</h3>
                <p className="text-gray-700&quot;>Provides insights for model debugging and improvement by identifying problematic patterns.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200&quot;>
                <div className="text-purple-600 mb-3&quot;>
                  <FiBookOpen className="h-8 w-8&quot; />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3&quot;>4. Regulatory Compliance</h3>
                <p className="text-gray-700&quot;>Helps meet legal requirements for explainability in regulated industries like finance and healthcare.</p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6&quot;>Types of Explainability Methods</h2>
            
            <p>
              Explainability methods can be categorized based on their scope and approach. Understanding these categories helps in selecting the right technique for your specific use case.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4&quot;>1. Global vs. Local Explanations</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6&quot;>
              <div className="bg-white p-6 rounded-lg shadow-md border border-blue-200&quot;>
                <h4 className="text-lg font-semibold text-blue-800 mb-3&quot;>Global Explanations</h4>
                <p className="text-gray-700&quot;>Provide an overall understanding of how the model makes decisions across the entire dataset.</p>
                <ul className="mt-3 space-y-2 text-sm text-gray-600&quot;>
                  <li className="flex items-start&quot;>
                    <FiCheckCircle className="h-4 w-4 text-blue-500 mr-2 mt-0.5 flex-shrink-0&quot; />
                    <span>Feature importance scores</span>
                  </li>
                  <li className="flex items-start&quot;>
                    <FiCheckCircle className="h-4 w-4 text-blue-500 mr-2 mt-0.5 flex-shrink-0&quot; />
                    <span>Decision rules</span>
                  </li>
                  <li className="flex items-start&quot;>
                    <FiCheckCircle className="h-4 w-4 text-blue-500 mr-2 mt-0.5 flex-shrink-0&quot; />
                    <span>Model-agnostic global surrogates</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md border border-green-200&quot;>
                <h4 className="text-lg font-semibold text-green-800 mb-3&quot;>Local Explanations</h4>
                <p className="text-gray-700&quot;>Explain individual predictions, showing how the model arrived at a specific output for a given input.</p>
                <ul className="mt-3 space-y-2 text-sm text-gray-600&quot;>
                  <li className="flex items-start&quot;>
                    <FiCheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0&quot; />
                    <span>SHAP values for individual predictions</span>
                  </li>
                  <li className="flex items-start&quot;>
                    <FiCheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0&quot; />
                    <span>LIME explanations</span>
                  </li>
                  <li className="flex items-start&quot;>
                    <FiCheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0&quot; />
                    <span>Counterfactual explanations</span>
                  </li>
                </ul>
              </div>
            </div>

            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4&quot;>2. Model-Specific vs. Model-Agnostic Methods</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6&quot;>
              <div className="bg-white p-6 rounded-lg shadow-md border border-purple-200&quot;>
                <h4 className="text-lg font-semibold text-purple-800 mb-3&quot;>Model-Specific</h4>
                <p className="text-gray-700&quot;>Methods designed for specific types of models, leveraging their internal structure.</p>
                <ul className="mt-3 space-y-2 text-sm text-gray-600&quot;>
                  <li className="flex items-start&quot;>
                    <FiCode className="h-4 w-4 text-purple-500 mr-2 mt-0.5 flex-shrink-0&quot; />
                    <span>Decision tree feature importance</span>
                  </li>
                  <li className="flex items-start&quot;>
                    <FiCode className="h-4 w-4 text-purple-500 mr-2 mt-0.5 flex-shrink-0&quot; />
                    <span>Neural network attention mechanisms</span>
                  </li>
                  <li className="flex items-start&quot;>
                    <FiCode className="h-4 w-4 text-purple-500 mr-2 mt-0.5 flex-shrink-0&quot; />
                    <span>Linear model coefficients</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md border border-orange-200&quot;>
                <h4 className="text-lg font-semibold text-orange-800 mb-3&quot;>Model-Agnostic</h4>
                <p className="text-gray-700&quot;>Can be applied to any machine learning model, treating it as a black box.</p>
                <ul className="mt-3 space-y-2 text-sm text-gray-600&quot;>
                  <li className="flex items-start&quot;>
                    <FiCode className="h-4 w-4 text-orange-500 mr-2 mt-0.5 flex-shrink-0&quot; />
                    <span>SHAP (SHapley Additive exPlanations)</span>
                  </li>
                  <li className="flex items-start&quot;>
                    <FiCode className="h-4 w-4 text-orange-500 mr-2 mt-0.5 flex-shrink-0&quot; />
                    <span>LIME (Local Interpretable Model-agnostic Explanations)</span>
                  </li>
                  <li className="flex items-start&quot;>
                    <FiCode className="h-4 w-4 text-orange-500 mr-2 mt-0.5 flex-shrink-0&quot; />
                    <span>Anchors</span>
                  </li>
                </ul>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6&quot;>Key Explainability Techniques</h2>
            
            <p>
              Let&apos;s dive deeper into the most widely used explainability techniques, their implementations, and when to use them.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4&quot;>1. SHAP (SHapley Additive exPlanations)</h3>
            
            <p>
              SHAP values provide a unified measure of feature importance by calculating the contribution of each feature to the prediction for a specific instance, based on concepts from cooperative game theory.
            </p>
            
            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 my-6 rounded-r&quot;>
              <div className="flex&quot;>
                <div className="flex-shrink-0&quot;>
                  <FiInfo className="h-5 w-5 text-blue-700&quot; />
                </div>
                <div className="ml-3&quot;>
                  <h3 className="text-sm font-medium text-blue-800&quot;>Key Properties of SHAP</h3>
                  <ul className="mt-2 text-sm text-blue-700 space-y-1&quot;>
                    <li><strong>Additive:</strong> The sum of SHAP values equals the difference between the model&apos;s prediction and the average prediction.</li>
                    <li><strong>Consistent:</strong> If a model changes so that a feature&apos;s contribution increases, the SHAP value also increases.</li>
                    <li><strong>Missingness:</strong> Features with missing values have a SHAP value of zero.</li>
                  </ul>
                </div>
              </div>
            </div>

            <h4 className="text-xl font-semibold text-gray-900 mt-6 mb-3&quot;>Implementing SHAP in Python</h4>
            
            <pre className="bg-gray-800 text-green-400 p-4 rounded-lg overflow-x-auto my-6&quot;>
              <code>
{`# Install required packages
# pip install shap pandas scikit-learn

import numpy as np
import pandas as pd
import shap
from sklearn.ensemble import RandomForestClassifier
from sklearn.datasets import load_breast_cancer
from sklearn.model_selection import train_test_split
import matplotlib.pyplot as plt

# Load and prepare data
data = load_breast_cancer()
X = pd.DataFrame(data.data, columns=data.feature_names)
y = data.target

# Split the data
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Train a model
model = RandomForestClassifier(n_estimators=100, random_state=42)
model.fit(X_train, y_train)

# Initialize SHAP explainer
explainer = shap.TreeExplainer(model)
shap_values = explainer.shap_values(X_test)

# Visualize the first prediction&apos;s explanation
shap.initjs()
shap.force_plot(
    explainer.expected_value[1], 
    shap_values[1][0,:], 
    X_test.iloc[0,:],
    feature_names=data.feature_names,
    matplotlib=True,
    show=False
)
plt.tight_layout()
plt.savefig(&apos;shap_force_plot.png&apos;, dpi=300, bbox_inches=&apos;tight&apos;)
plt.close()

# Summary plot (feature importance)
shap.summary_plot(shap_values[1], X_test, feature_names=data.feature_names, show=False)
plt.tight_layout()
plt.savefig(&apos;shap_summary_plot.png&apos;, dpi=300, bbox_inches=&apos;tight&apos;)
plt.close()

# Dependence plot for a specific feature
shap.dependence_plot(
    &quot;worst radius&quot;, 
    shap_values[1], 
    X_test, 
    feature_names=data.feature_names,
    interaction_index=None
)
plt.tight_layout()
plt.savefig(&apos;shap_dependence_plot.png&apos;, dpi=300, bbox_inches=tight&apos;)
plt.close()`}
              </code>
            </pre>

            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4&quot;>2. LIME (Local Interpretable Model-agnostic Explanations)</h3>
            
            <p>
              LIME explains individual predictions by approximating the model locally with an interpretable model, such as a linear model, in the neighborhood of the instance being explained.
            </p>

            <div className="bg-orange-50 border-l-4 border-orange-400 p-4 my-6 rounded-r&quot;>
              <div className="flex&quot;>
                <div className="flex-shrink-0&quot;>
                  <FiInfo className="h-5 w-5 text-orange-700&quot; />
                </div>
                <div className="ml-3&quot;>
                  <h3 className="text-sm font-medium text-orange-800&quot;>When to Use LIME</h3>
                  <ul className="mt-2 text-sm text-orange-700 space-y-1&quot;>
                    <li>• You need explanations for individual predictions</li>
                    <li>• The model is a black box (e.g., deep neural networks, ensemble methods)</li>
                    <li>• You want to understand model behavior for specific instances</li>
                    <li>• You need explanations for text, image, or tabular data</li>
                  </ul>
                </div>
              </div>
            </div>

            <h4 className="text-xl font-semibold text-gray-900 mt-6 mb-3&quot;>Implementing LIME in Python</h4>
            
            <pre className="bg-gray-800 text-green-400 p-4 rounded-lg overflow-x-auto my-6&quot;>
              <code>
{`# Install required packages
# pip install lime

import numpy as np
import pandas as pd
from sklearn.ensemble import RandomForestClassifier
from sklearn.datasets import load_breast_cancer
from sklearn.model_selection import train_test_split
from lime import lime_tabular
import matplotlib.pyplot as plt
from matplotlib import pyplot as plt
from lime import submodular_pick

# Load and prepare data
data = load_breast_cancer()
X = pd.DataFrame(data.data, columns=data.feature_names)
y = data.target

# Split the data
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Train a model
model = RandomForestClassifier(n_estimators=100, random_state=42)
model.fit(X_train, y_train)

# Initialize LIME explainer
explainer = lime_tabular.LimeTabularExplainer(
    training_data=X_train.values,
    feature_names=data.feature_names,
    class_names=[&apos;malignant&apos;, &apos;benign&apos;],
    mode=&apos;classification&apos;,
    verbose=True,
    random_state=42
)

# Explain a prediction
i = 0  # index of the instance to explain
exp = explainer.explain_instance(
    data_row=X_test.iloc[i],
    predict_fn=model.predict_proba,
    num_features=10,
    top_labels=1
)

# Save explanation to HTML
html = exp.as_html()
with open(&apos;lime_explanation.html&apos;, &apos;w&apos;) as f:
    f.write(html)

# Get the explanation as a matplotlib figure
fig = exp.as_pyplot_figure(label=1)
plt.tight_layout()
plt.savefig(&apos;lime_explanation.png&apos;, dpi=300, bbox_inches=&apos;tight&apos;)
plt.close()

# Submodular pick to get global insights
sp_obj = submodular_pick.SubmodularPick(
    explainer,
    X_test.values,
    model.predict_proba,
    num_features=10,
    num_exps_desired=10
)

# Save submodular pick explanations
for i, exp in enumerate(sp_obj.explanations):
    fig = exp.as_pyplot_figure(label=1)
    plt.tight_layout()
    plt.savefig(f&apos;lime_submodular_pick_{i}.png&apos;, dpi=300, bbox_inches=tight&apos;)
    plt.close()`}
              </code>
            </pre>

            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4&quot;>3. Counterfactual Explanations</h3>
            
            <p>
              Counterfactual explanations describe the smallest change to the feature values that would change the model&apos;s prediction to a predefined output. They answer the question: &quot;What would need to change to get a different outcome?&quot;
            </p>
            
            <div className="bg-green-50 border-l-4 border-green-400 p-4 my-6 rounded-r&quot;>
              <div className="flex&quot;>
                <div className="flex-shrink-0&quot;>
                  <FiInfo className="h-5 w-5 text-green-700&quot; />
                </div>
                <div className="ml-3&quot;>
                  <h3 className="text-sm font-medium text-green-800&quot;>Benefits of Counterfactual Explanations</h3>
                  <ul className="mt-2 text-sm text-green-700 space-y-1&quot;>
                    <li>• Intuitive and actionable for end-users</li>
                    <li>• Model-agnostic and can be applied to any black-box model</li>
                    <li>• Useful for understanding decision boundaries</li>
                    <li>• Can help identify potential biases in the model</li>
                  </ul>
                </div>
              </div>
            </div>

            <h4 className="text-xl font-semibold text-gray-900 mt-6 mb-3&quot;>Implementing Counterfactual Explanations</h4>
            
            <pre className="bg-gray-800 text-green-400 p-4 rounded-lg overflow-x-auto my-6&quot;>
              <code>
{`# Install required packages
# pip install alibi

import numpy as np
import pandas as pd
from sklearn.ensemble import RandomForestClassifier
from sklearn.datasets import load_breast_cancer
from sklearn.model_selection import train_test_split
import matplotlib.pyplot as plt
import tensorflow as tf
from alibi.explainers import Counterfactual

# Set random seed for reproducibility
np.random.seed(42)
tf.random.set_seed(42)

# Load and prepare data
data = load_breast_cancer()
X = pd.DataFrame(data.data, columns=data.feature_names)
y = data.target

# Split the data
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Define a simple neural network model
def create_model(input_shape):
    model = tf.keras.Sequential([
        tf.keras.layers.Dense(64, activation=&apos;relu&apos;, input_shape=input_shape),
        tf.keras.layers.Dropout(0.2),
        tf.keras.layers.Dense(32, activation=&apos;relu&apos;),
        tf.keras.layers.Dropout(0.2),
        tf.keras.layers.Dense(1, activation=&apos;sigmoid&apos;)
    ])
    model.compile(optimizer=&apos;adam&apos;, loss=&apos;binary_crossentropy&apos;, metrics=[&apos;accuracy&apos;])
    return model

# Create and train the model
input_shape = (X_train.shape[1],)
model = create_model(input_shape)
model.fit(
    X_train.values, 
    y_train,
    epochs=50,
    batch_size=32,
    validation_split=0.1,
    verbose=0
)

# Select an instance to explain
instance = X_test.iloc[0:1].values
prediction = model.predict(instance)
print(f&quot;Original prediction: {prediction[0][0]:.4f} (class: {int(prediction[0][0] > 0.5)})&quot;)

# Define predict function for the explainer
predict_fn = lambda x: model.predict(x)

# Initialize counterfactual explainer
cf = Counterfactual(
    predict_fn=predict_fn,
    shape=(1, X_train.shape[1]),
    target_proba=0.5,  # Target probability for the counterfactual
    target_class=&apos;other&apos;,  # We want to flip the prediction
    max_iter=1000,
    feature_range=(X_train.values.min(axis=0), X_train.values.max(axis=0)),
    lam_init=1e-1,
    max_lam_steps=10,
    learning_rate_init=0.1,
    feature_names=data.feature_names
)

# Generate counterfactual explanation
cf.fit(X_train.values)
explanation = cf.explain(instance)

# Get the counterfactual
if explanation.cf is not None:
    print(&quot;\nCounterfactual found!&quot;)
    print(f&quot;Original instance prediction: {model.predict(instance)[0][0]:.4f}&quot;)
    print(f&quot;Counterfactual prediction: {model.predict(explanation.cf[&apos;X&apos;])[0][0]:.4f}&quot;)
    
    # Calculate and display the changes
    changes = explanation.cf[&apos;X&apos;] - instance
    changes_df = pd.DataFrame({
        &apos;Feature&apos;: data.feature_names,
        &apos;Original&apos;: instance.flatten(),
        &apos;Counterfactual&apos;: explanation.cf[&apos;X&apos;].flatten(),
        &apos;Change&apos;: changes.flatten()
    })
    
    # Only show features that changed
    changed_features = changes_df[changes_df[&apos;Change&apos;] != 0].sort_values(&apos;Change&apos;, key=abs, ascending=False)
    print(&quot;\nFeature changes needed:&quot;)
    print(changed_features[[&apos;Feature&apos;, &apos;Original&apos;, &apos;Counterfactual&apos;, &apos;Change&apos;]].to_string(index=False))
    
    # Visualize the most important changes
    plt.figure(figsize=(10, 6))
    top_changes = changed_features.nlargest(5, &apos;Change&apos;, key=abs)
    plt.barh(
        top_changes[&apos;Feature&apos;], 
        top_changes[&apos;Change&apos;],
        color=[&apos;green&apos; if x > 0 else &apos;red&apos; for x in top_changes[&apos;Change&apos;]]
    )
    plt.title(&apos;Top Feature Changes for Counterfactual&apos;)
    plt.xlabel(&apos;Change in Feature Value&apos;)
    plt.tight_layout()
    plt.savefig(&apos;counterfactual_changes.png&apos;, dpi=300, bbox_inches=tight&apos;)
    plt.close()
else:
    print(&quot;No counterfactual found within the given constraints.&quot;)`}
              </code>
            </pre>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6&quot;>Explainability for Different Data Types</h2>
            
            <p>
              Different data types require different explainability approaches. Let&apos;s explore techniques for various data modalities.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4&quot;>1. Tabular Data</h3>
            
            <p>
              For tabular data, we&apos;ve already covered SHAP, LIME, and counterfactual explanations. Additional techniques include:
            </p>
            
            <ul className="list-disc pl-6 my-4 space-y-1&quot;>
              <li><strong>Partial Dependence Plots (PDP):</strong> Show the relationship between a feature and the predicted outcome after accounting for the average effect of all other features.</li>
              <li><strong>Individual Conditional Expectation (ICE):</strong> Similar to PDP but shows the relationship for individual instances.</li>
              <li><strong>Anchors:</strong> High-precision rules that &quot;anchor&quot; the prediction, providing conditions that are sufficient to guarantee the same prediction.</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4&quot;>2. Text Data</h3>
            
            <p>
              For text classification and generation models, explainability focuses on identifying which words or phrases influence the model&apos;s predictions.
            </p>
            
            <div className="bg-purple-50 border-l-4 border-purple-400 p-4 my-6 rounded-r&quot;>
              <div className="flex&quot;>
                <div className="flex-shrink-0&quot;>
                  <FiType className="h-5 w-5 text-purple-700&quot; />
                </div>
                <div className="ml-3&quot;>
                  <h3 className="text-sm font-medium text-purple-800&quot;>Text Explainability Techniques</h3>
                  <ul className="mt-2 text-sm text-purple-700 space-y-1&quot;>
                    <li>• <strong>Attention Mechanisms:</strong> For transformer models, attention weights can indicate which tokens the model focuses on.</li>
                    <li>• <strong>LIME for Text:</strong> Perturbs input text by removing words and observes changes in predictions.</li>
                    <li>• <strong>Integrated Gradients:</strong> Attributes the prediction to the input features by integrating gradients.</li>
                    <li>• <strong>SHAP for Text:</strong> Similar to LIME but using SHAP values for feature attribution.</li>
                  </ul>
                </div>
              </div>
            </div>

            <h4 className="text-xl font-semibold text-gray-900 mt-6 mb-3&quot;>Example: Text Classification with LIME</h4>
            
            <pre className="bg-gray-800 text-green-400 p-4 rounded-lg overflow-x-auto my-6&quot;>
              <code>
{`# Install required packages
# pip install lime nltk scikit-learn

import numpy as np
from sklearn.pipeline import Pipeline
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.linear_model import LogisticRegression
from sklearn.datasets import fetch_20newsgroups
from lime import lime_text
from lime.lime_text import LimeTextExplainer

# Load a text dataset
categories = [&apos;alt.atheism&apos;, &apos;soc.religion.christian&apos;]
newsgroups_train = fetch_20newsgroups(subset=&apos;train&apos;, categories=categories)
newsgroups_test = fetch_20newsgroups(subset=&apos;test&apos;, categories=categories)

# Create a simple text classification pipeline
pipeline = Pipeline([
    (&apos;tfidf&apos;, TfidfVectorizer(stop_words=english&apos;)),
    (&apos;clf&apos;, LogisticRegression(random_state=42))
])

# Train the model
pipeline.fit(newsgroups_train.data, newsgroups_train.target)

# Define class names for better interpretation
class_names = [&apos;atheism&apos;, &apos;christian&apos;]

# Initialize LIME explainer
explainer = LimeTextExplainer(class_names=class_names)

# Select a random instance to explain
idx = 10
text_instance = newsgroups_test.data[idx]
true_label = newsgroups_test.target[idx]
pred_label = pipeline.predict([text_instance])[0]
pred_proba = pipeline.predict_proba([text_instance])[0]

print(f&quot;True label: {class_names[true_label]}&quot;)
print(f&quot;Predicted label: {class_names[pred_label]} (confidence: {pred_proba.max():.2f})&quot;)

# Generate explanation
explanation = explainer.explain_instance(
    text_instance, 
    pipeline.predict_proba, 
    num_features=10,
    top_labels=1
)

# Save explanation to HTML
html = explanation.as_html()
with open(&apos;lime_text_explanation.html&apos;, &apos;w&apos;) as f:
    f.write(html)

# Show the explanation in notebook (if running in notebook)
# explanation.show_in_notebook(text=True)`}
              </code>
            </pre>

            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4&quot;>3. Image Data</h3>
            
            <p>
              For image classification and object detection models, explainability focuses on identifying which regions of the image influenced the model&apos;s predictions.
            </p>
            
            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 my-6 rounded-r&quot;>
              <div className="flex&quot;>
                <div className="flex-shrink-0&quot;>
                  <FiImage className="h-5 w-5 text-blue-700&quot; />
                </div>
                <div className="ml-3&quot;>
                  <h3 className="text-sm font-medium text-blue-800&quot;>Image Explainability Techniques</h3>
                  <ul className="mt-2 text-sm text-blue-700 space-y-1&quot;>
                    <li>• <strong>Grad-CAM:</strong> Visualizes the importance of regions in the image using gradients.</li>
                    <li>• <strong>SHAP for Images:</strong> Extends SHAP values to image data, showing pixel importance.</li>
                    <li>• <strong>LIME for Images:</strong> Segments the image into superpixels and perturbs them to explain predictions.</li>
                    <li>• <strong>Integrated Gradients:</strong> Attributes the prediction to input pixels by integrating gradients.</li>
                  </ul>
                </div>
              </div>
            </div>

            <h4 className="text-xl font-semibold text-gray-900 mt-6 mb-3&quot;>Example: Image Classification with Grad-CAM</h4>
            
            <pre className="bg-gray-800 text-green-400 p-4 rounded-lg overflow-x-auto my-6&quot;>
              <code>
{`# Install required packages
# pip install tensorflow matplotlib opencv-python numpy

import numpy as np
import tensorflow as tf
from tensorflow.keras.applications import VGG16
from tensorflow.keras.preprocessing import image
from tensorflow.keras.applications.vgg16 import preprocess_input, decode_predictions
import matplotlib.pyplot as plt
import cv2

# Load pre-trained VGG16 model
model = VGG16(weights=&apos;imagenet&apos;)

# Load and preprocess an image
img_path = &apos;example_image.jpg&apos;  # Replace with your image path
img = image.load_img(img_path, target_size=(224, 224))
x = image.img_to_array(img)
x = np.expand_dims(x, axis=0)
x = preprocess_input(x)

# Make prediction
preds = model.predict(x)
print(&apos;Predicted:&apos;, decode_predictions(preds, top=3)[0])

# Get the predicted class index
pred_class = np.argmax(preds[0])

# Grad-CAM implementation
def grad_cam(model, img_array, layer_name, pred_index=None):
    # Create a model that maps the input image to the activations
    # of the last conv layer and the output predictions
    grad_model = tf.keras.models.Model(
        [model.inputs],
        [model.get_layer(layer_name).output, model.output]
    )
    
    # Compute the gradient of the top predicted class for the input image
    # with respect to the activations of the last conv layer
    with tf.GradientTape() as tape:
        conv_outputs, predictions = grad_model(img_array)
        if pred_index is None:
            pred_index = tf.argmax(predictions[0])
        loss = predictions[:, pred_index]
    
    # Get the gradients of the loss with respect to the output feature map
    grads = tape.gradient(loss, conv_outputs)
    
    # Pool the gradients over all the axes leaving out the channel dimension
    pooled_grads = tf.reduce_mean(grads, axis=(0, 1, 2))
    
    # Multiply each channel in the feature map array by its importance
    conv_outputs = conv_outputs[0]
    for i in range(pooled_grads.shape[0]):
        conv_outputs[:, :, i] *= pooled_grads[i]
    
    # Average over all the channels to get the heatmap
    heatmap = tf.reduce_mean(conv_outputs, axis=-1)
    
    # ReLU on the heatmap (equivalent to passing the feature maps through a ReLU)
    heatmap = np.maximum(heatmap, 0)
    
    # Normalize the heatmap
    heatmap /= np.max(heatmap)
    
    return heatmap

# Generate class activation heatmap
layer_name = &apos;block5_conv3&apos;  # Last conv layer in VGG16
heatmap = grad_cam(model, x, layer_name)

# Rescale heatmap to a range 0-255
heatmap = np.uint8(255 * heatmap)

# Use jet colormap to colorize heatmap
heatmap = cv2.applyColorMap(heatmap, cv2.COLORMAP_JET)

# Superimpose the heatmap on the original image
img = cv2.imread(img_path)
img = cv2.cvtColor(img, cv2.COLOR_BGR2RGB)
img = cv2.resize(img, (224, 224))

# Resize heatmap to match the original image size
heatmap = cv2.resize(heatmap, (img.shape[1], img.shape[0]))

# Combine the heatmap with the original image
superimposed_img = heatmap * 0.4 + img
superimposed_img = np.uint8(superimposed_img)
superimposed_img = cv2.cvtColor(superimposed_img, cv2.COLOR_BGR2RGB)

# Display the original image and the heatmap
plt.figure(figsize=(20, 10))

plt.subplot(1, 2, 1)
plt.imshow(img)
plt.title(&apos;Original Image&apos;)
plt.axis(&apos;off&apos;)

plt.subplot(1, 2, 2)
plt.imshow(superimposed_img)
plt.title(&apos;Grad-CAM Heatmap&apos;)
plt.axis(&apos;off&apos;)

plt.tight_layout()
plt.savefig(&apos;grad_cam_visualization.png&apos;, dpi=300, bbox_inches=tight&apos;)
plt.close()`}
              </code>
            </pre>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6&quot;>Explainability in Production</h2>
            
            <p>
              Deploying explainability in production requires careful consideration of performance, scalability, and integration with existing systems.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4&quot;>1. Performance Considerations</h3>
            
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 my-6 rounded-r&quot;>
              <div className="flex&quot;>
                <div className="flex-shrink-0&quot;>
                  <FiZap className="h-5 w-5 text-yellow-700&quot; />
                </div>
                <div className="ml-3&quot;>
                  <h3 className="text-sm font-medium text-yellow-800&quot;>Performance Impact of Explainability</h3>
                  <ul className="mt-2 text-sm text-yellow-700 space-y-1&quot;>
                    <li>• SHAP can be computationally expensive, especially for large models or datasets</li>
                    <li>• LIME is generally faster but may need to be optimized for production use</li>
                    <li>• Consider using approximate methods or caching explanations for similar inputs</li>
                  </ul>
                </div>
              </div>
            </div>

            <h4 className="text-xl font-semibold text-gray-900 mt-6 mb-3&quot;>Optimizing SHAP for Production</h4>
            
            <pre className="bg-gray-800 text-green-400 p-4 rounded-lg overflow-x-auto my-6&quot;>
              <code>
{`# Install required packages
# pip install shap numba joblib

import numpy as np
import pandas as pd
import shap
from sklearn.ensemble import RandomForestClassifier
from sklearn.datasets import load_breast_cancer
import time
import joblib
from pathlib import Path

# Load and prepare data
data = load_breast_cancer()
X = pd.DataFrame(data.data, columns=data.feature_names)
y = data.target

# Train a model
model = RandomForestClassifier(n_estimators=100, random_state=42)
model.fit(X, y)

# 1. Use TreeExplainer for tree-based models (much faster than KernelExplainer)
# This is optimized for tree-based models like Random Forest and XGBoost
explainer = shap.TreeExplainer(model)

# 2. Pre-compute expected values for faster predictions
# This avoids recomputing the expected value for each explanation
expected_value = explainer.expected_value

# 3. Use a subset of the data for background distribution
# Instead of using all training data, use a representative sample
background = shap.sample(X, 100)  # Use 100 samples instead of the full dataset

def explain_instance(instance, explainer, expected_value):
    &quot;&quot;&quot;Explain a single instance using the pre-computed explainer.&quot;&quot;&quot;
    # Convert to numpy array if needed
    if hasattr(instance, &apos;values&apos;):
        instance = instance.values.reshape(1, -1)
    
    # Get SHAP values
    shap_values = explainer.shap_values(instance, check_additivity=False)
    
    # For binary classification, use the SHAP values for the positive class
    if isinstance(shap_values, list):
        shap_values = shap_values[1]  # Positive class
    
    return {
        &apos;shap_values&apos;: shap_values,
        &apos;expected_value&apos;: expected_value,
        &apos;prediction&apos;: model.predict_proba(instance)[0][1]  # Probability of positive class
    }

# 4. Cache explanations for similar inputs
# This is a simple in-memory cache, but you could use Redis or similar in production
explanation_cache = {}

def get_explanation_cached(instance, cache_key=None):
    &quot;&quot;&quot;Get explanation from cache or compute it if not found.&quot;&quot;&quot;
    if cache_key is None:
        # Create a simple hash of the instance for caching
        cache_key = hash(tuple(instance.flatten().astype(float)))
    
    if cache_key in explanation_cache:
        return explanation_cache[cache_key]
    
    # Compute explanation if not in cache
    explanation = explain_instance(instance, explainer, expected_value)
    explanation_cache[cache_key] = explanation
    return explanation

# 5. Parallelize explanations for multiple instances
def explain_batch(instances, n_jobs=-1):
    &quot;&quot;&quot;Explain multiple instances in parallel.&quot;&quot;&quot;
    return joblib.Parallel(n_jobs=n_jobs)(
        joblib.delayed(explain_instance)(instance.reshape(1, -1), explainer, expected_value)
        for instance in instances
    )

# Example usage
instance = X.iloc[0:1]  # Get first instance

# Time the first explanation (will be slower due to compilation)
start_time = time.time()
explanation = get_explanation_cached(instance.values)
first_time = time.time() - start_time
print(f&quot;First explanation took {first_time:.4f} seconds&quot;)

# Time subsequent explanations (should be faster, especially with caching)
start_time = time.time()
for _ in range(10):
    explanation = get_explanation_cached(instance.values)
subsequent_time = (time.time() - start_time) / 10
print(f&quot;Subsequent explanations took {subsequent_time:.4f} seconds on average&quot;)

# 6. Save and load the explainer for production use
explainer_save_path = &apos;shap_explainer.joblib&apos;
joblib.dump(explainer, explainer_save_path)

# In production, you would load it like this:
# explainer = joblib.load(explainer_save_path)

# 7. Batch processing for better performance
batch_size = 32
batch_explanations = explain_batch(X.iloc[:batch_size].values)
print(f&quot;Generated {len(batch_explanations)} explanations in a batch&quot;)`}
              </code>
            </pre>

            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4&quot;>2. API Design for Explainability</h3>
            
            <p>
              When exposing explainability features through an API, consider the following design patterns:
            </p>
            
            <ul className="list-disc pl-6 my-4 space-y-2&quot;>
              <li><strong>Synchronous vs. Asynchronous:</strong> For complex explanations, consider an asynchronous API that returns a job ID and allows clients to poll for results.</li>
              <li><strong>Granularity:</strong> Allow clients to specify the level of detail they need (e.g., just feature importance scores vs. full explanations).</li>
              <li><strong>Caching:</strong> Implement caching to avoid recomputing explanations for the same or similar inputs.</li>
              <li><strong>Rate Limiting:</strong> Protect your API from abuse with appropriate rate limiting.</li>
            </ul>

            <h4 className="text-xl font-semibold text-gray-900 mt-6 mb-3&quot;>Example: FastAPI Service for Model Explainability</h4>
            
            <pre className="bg-gray-800 text-green-400 p-4 rounded-lg overflow-x-auto my-6&quot;>
              <code>
{`# Install required packages
# pip install fastapi uvicorn python-multipart joblib scikit-learn pandas numpy

from fastapi import FastAPI, HTTPException, Depends, status
from fastapi.security import APIKeyHeader
from pydantic import BaseModel
from typing import List, Dict, Any, Optional
import joblib
import numpy as np
import pandas as pd
import hashlib
import time
from datetime import datetime
import os
from pathlib import Path

# Initialize FastAPI app
app = FastAPI(
    title="ML Model Explainability API&quot;,
    description="API for explaining machine learning model predictions&quot;,
    version="1.0.0&quot;
)

# Security
API_KEY = os.getenv(&quot;API_KEY&quot;, &quot;your-secret-key&quot;)
api_key_header = APIKeyHeader(name="X-API-Key&quot;)

def get_api_key(api_key: str = Depends(api_key_header)):
    if api_key != API_KEY:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid API Key&quot;
        )
    return api_key

# Models
class ExplanationRequest(BaseModel):
    features: Dict[str, Any]
    explanation_type: str = &quot;shap&quot;  # or &quot;lime&quot;, &quot;counterfactual&quot;
    num_features: Optional[int] = 5
    return_visualization: bool = True

class ExplanationResponse(BaseModel):
    explanation_id: str
    status: str
    explanation: Optional[Dict[str, Any]] = None
    visualization_url: Optional[str] = None
    timestamp: str

# Global variables for caching
EXPLANATION_CACHE = {}
MODEL = None
EXPLAINER = None

# Load model and explainer on startup
@app.on_event(&quot;startup&quot;)
async def load_model():
    global MODEL, EXPLAINER
    try:
        # In a real application, you would load your trained model here
        # For this example, we'll use a dummy model
        from sklearn.ensemble import RandomForestClassifier
        from sklearn.datasets import load_breast_cancer
        import shap
        
        # Load example data and train a simple model
        data = load_breast_cancer()
        X, y = data.data, data.target
        
        MODEL = RandomForestClassifier(n_estimators=100, random_state=42)
        MODEL.fit(X, y)
        
        # Initialize explainer
        EXPLAINER = shap.TreeExplainer(MODEL)
        
        print(&quot;Model and explainer loaded successfully&quot;)
    except Exception as e:
        print(f&quot;Error loading model: {str(e)}&quot;)
        raise e

def generate_explanation_id(features: dict, explanation_type: str) -> str:
    &quot;&quot;&quot;Generate a unique ID for the explanation request.&quot;&quot;&quot;
    feature_str = &quot;&quot;.join(f&quot;{k}:{v}&quot; for k, v in sorted(features.items()))
    return hashlib.md5(f&quot;{feature_str}:{explanation_type}&quot;.encode()).hexdigest()

@app.post(&quot;/explain&quot;, response_model=ExplanationResponse)
async def explain(
    request: ExplanationRequest,
    api_key: str = Depends(get_api_key)
):
    &quot;&quot;&quot;Generate an explanation for a model prediction.&quot;&quot;&quot;
    try:
        # Generate a unique ID for this explanation
        explanation_id = generate_explanation_id(request.features, request.explanation_type)
        
        # Check if explanation is already in cache
        if explanation_id in EXPLANATION_CACHE:
            return EXPLANATION_CACHE[explanation_id]
        
        # Convert features to the format expected by the model
        # In a real application, you would need to handle feature encoding properly
        feature_names = [&quot;mean radius&quot;, &quot;mean texture&quot;, &quot;mean perimeter&quot;, &quot;mean area&quot;, 
                        &quot;mean smoothness&quot;, &quot;mean compactness&quot;, &quot;mean concavity&quot;, 
                        &quot;mean concave points&quot;, &quot;mean symmetry&quot;, &quot;mean fractal dimension&quot;,
                        &quot;radius error&quot;, &quot;texture error&quot;, &quot;perimeter error&quot;, &quot;area error&quot;, 
                        &quot;smoothness error&quot;, &quot;compactness error&quot;, &quot;concavity error&quot;,
                        &quot;concave points error&quot;, &quot;symmetry error&quot;, &quot;fractal dimension error&quot;, 
                        &quot;worst radius&quot;, &quot;worst texture&quot;, &quot;worst perimeter&quot;, &quot;worst area&quot;, 
                        &quot;worst smoothness&quot;, &quot;worst compactness&quot;, &quot;worst concavity&quot;,
                        &quot;worst concave points&quot;, &quot;worst symmetry&quot;, &quot;worst fractal dimension&quot;]
        
        # Create a feature vector with the same order as the model expects
        feature_vector = np.array([request.features.get(feature, 0) for feature in feature_names]).reshape(1, -1)
        
        # Get model prediction
        prediction = MODEL.predict_proba(feature_vector)[0]
        predicted_class = int(prediction[1] > 0.5)
        
        # Generate explanation based on the requested type
        explanation = {}
        visualization_path = None
        
        if request.explanation_type == &quot;shap&quot;:
            # Generate SHAP values
            shap_values = EXPLAINER.shap_values(feature_vector, check_additivity=False)
            
            # For binary classification, use the SHAP values for the positive class
            if isinstance(shap_values, list):
                shap_values = shap_values[1]  # Positive class
            
            # Get top features
            top_indices = np.argsort(-np.abs(shap_values[0]))[:request.num_features]
            
            explanation = {
                &quot;type&quot;: &quot;shap&quot;,
                &quot;predicted_class&quot;: predicted_class,
                &quot;prediction_confidence&quot;: float(prediction[predicted_class]),
                &quot;feature_importance&quot;: [
                    {
                        &quot;feature&quot;: feature_names[i],
                        &quot;value&quot;: float(feature_vector[0, i]),
                        &quot;shap_value&quot;: float(shap_values[0, i]),
                        &quot;impact&quot;: float(shap_values[0, i] * 100)  # As percentage
                    }
                    for i in top_indices
                ],
                &quot;base_value&quot;: float(EXPLAINER.expected_value[1] if isinstance(EXPLAINER.expected_value, list) else EXPLAINER.expected_value)
            }
            
            # In a real application, you would generate and save a visualization
            # For this example, we&apos;ll just return a placeholder
            if request.return_visualization:
                visualization_path = f&quot;/visualizations/{explanation_id}.png&quot;
                # Save a dummy visualization in a real app, this would be a SHAP plot
                # import matplotlib.pyplot as plt
                # shap.plots.waterfall(shap_values[0], show=False)
                # plt.savefig(f&quot;static{visualization_path}&quot;)
                # plt.close()
        
        elif request.explanation_type == &quot;lime&quot;:
            # LIME explanation would go here
            explanation = {
                &quot;type&quot;: &quot;lime&quot;,
                &quot;predicted_class&quot;: predicted_class,
                &quot;explanation&quot;: &quot;LIME explanation would be generated here in a real implementation&quot;
            }
            
            if request.return_visualization:
                visualization_path = f&quot;/visualizations/{explanation_id}.png&quot;
        
        elif request.explanation_type == &quot;counterfactual&quot;:
            # Counterfactual explanation would go here
            explanation = {
                &quot;type&quot;: &quot;counterfactual&quot;,
                &quot;predicted_class&quot;: predicted_class,
                &quot;explanation&quot;: &quot;Counterfactual explanation would be generated here in a real implementation&quot;
            }
            
            if request.return_visualization:
                visualization_path = f&quot;/visualizations/{explanation_id}.png&quot;
        
        else:
            raise HTTPException(
                status_code=status.HTTP_400_BAD_REQUEST,
                detail=f&quot;Unsupported explanation type: {request.explanation_type}&quot;
            )
        
        # Prepare response
        response = ExplanationResponse(
            explanation_id=explanation_id,
            status="success&quot;,
            explanation=explanation,
            visualization_url=f&quot;https://api.yourservice.com{visualization_path}&quot; if visualization_path else None,
            timestamp=datetime.utcnow().isoformat()
        )
        
        # Cache the explanation
        EXPLANATION_CACHE[explanation_id] = response
        
        return response
    
    except Exception as e:
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=f&quot;Error generating explanation: {str(e)}&quot;
        )

@app.get(&quot;/explanations/{explanation_id}&quot;, response_model=ExplanationResponse)
async def get_explanation(
    explanation_id: str,
    api_key: str = Depends(get_api_key)
):
    &quot;&quot;&quot;Retrieve a previously generated explanation by ID.&quot;&quot;&quot;
    if explanation_id not in EXPLANATION_CACHE:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Explanation not found&quot;
        )
    
    return EXPLANATION_CACHE[explanation_id]

if __name__ == &quot;__main__&quot;:
    import uvicorn
    uvicorn.run(app, host="0.0.0.0&quot;, port=8000)`}
              </code>
            </pre>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6&quot;>Best Practices for Implementing Explainability</h2>
            
            <div className="space-y-6&quot;>
              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-purple-500&quot;>
                <h3 className="text-xl font-semibold text-gray-900 mb-3&quot;>1. Start with the Right Questions</h3>
                <p className="text-gray-700&quot;>Before implementing explainability, identify what you need to explain and to whom. Different stakeholders require different types of explanations.</p>
                <ul className="mt-3 pl-5 space-y-1 text-sm text-gray-600&quot;>
                  <li>• <strong>Data scientists</strong> need detailed technical explanations for model debugging.</li>
                  <li>• <strong>Business stakeholders</strong> need high-level insights into model behavior and business impact.</li>
                  <li>• <strong>End-users</strong> need simple, actionable explanations they can understand and trust.</li>
                  <li>• <strong>Regulators</strong> need documentation of model fairness, accountability, and compliance with regulations.</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-500&quot;>
                <h3 className="text-xl font-semibold text-gray-900 mb-3&quot;>2. Choose the Right Level of Explainability</h3>
                <p className="text-gray-700&quot;>Not all models require the same level of explainability. Consider the following factors when choosing an approach:</p>
                <div className="mt-3 grid grid-cols-1 md:grid-cols-2 gap-4&quot;>
                  <div className="p-3 bg-blue-50 rounded&quot;>
                    <h4 className="font-medium text-blue-800&quot;>High-Stakes Decisions</h4>
                    <p className="text-sm text-blue-700&quot;>For applications like healthcare, criminal justice, or financial lending, use the most interpretable models (e.g., linear models, decision trees) or combine complex models with robust explanation methods.</p>
                  </div>
                  <div className="p-3 bg-blue-50 rounded&quot;>
                    <h4 className="font-medium text-blue-800&quot;>Lower-Stakes Decisions</h4>
                    <p className="text-sm text-blue-700&quot;>For recommendations, ad targeting, or other lower-impact applications, simpler explanations or model-agnostic methods may suffice.</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-green-500&quot;>
                <h3 className="text-xl font-semibold text-gray-900 mb-3&quot;>3. Ensure Explanations are Actionable</h3>
                <p className="text-gray-700&quot;>Good explanations should help users understand how to achieve a desired outcome. Consider the following:</p>
                <ul className="mt-3 pl-5 space-y-1 text-sm text-gray-600&quot;>
                  <li>• Provide clear, non-technical language that matches the user&apos;s domain knowledge.</li>
                  <li>Highlight the most important factors influencing the prediction.</li>
                  <li>When possible, provide counterfactual explanations (e.g., &quot;If X were different by Y, the prediction would change to Z&quot;).</li>
                  <li>Allow users to explore &quot;what-if&quot; scenarios to understand how changes would affect predictions.</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-yellow-500&quot;>
                <h3 className="text-xl font-semibold text-gray-900 mb-3&quot;>4. Validate and Test Explanations</h3>
                <p className="text-gray-700&quot;>Just as you would validate your model&apos;s predictions, you should also validate its explanations:</p>
                <div className="mt-3 grid grid-cols-1 md:grid-cols-2 gap-4&quot;>
                  <div>
                    <h4 className="font-medium text-yellow-800&quot;>Sanity Checks</h4>
                    <ul className="mt-1 space-y-1 text-sm text-yellow-700&quot;>
                      <li>• Do the explanations make sense to domain experts?</li>
                      <li>• Are the most important features actually relevant to the prediction task?</li>
                      <li>• Do similar inputs produce similar explanations?</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-yellow-800&quot;>Quantitative Evaluation</h4>
                    <ul className="mt-1 space-y-1 text-sm text-yellow-700&quot;>
                      <li>• Measure the stability of explanations for similar inputs</li>
                      <li>• Test if removing important features actually changes the prediction</li>
                      <li>• Compare explanations across different explanation methods</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-red-500&quot;>
                <h3 className="text-xl font-semibold text-gray-900 mb-3&quot;>5. Address Potential Pitfalls</h3>
                <p className="text-gray-700&quot;>Be aware of common challenges in implementing explainability:</p>
                <div className="mt-3 space-y-3&quot;>
                  <div>
                    <h4 className="font-medium text-red-800&quot;>False Sense of Understanding</h4>
                    <p className="text-sm text-red-700&quot;>Explanations can sometimes give a false sense of understanding. Be transparent about the limitations of your explanation methods.</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-red-800&quot;>Explanation Hacking</h4>
                    <p className="text-sm text-red-700&quot;>Be cautious of adversarial attacks that can manipulate explanations without changing predictions, or vice versa.</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-red-800&quot;>Overhead</h4>
                    <p className="text-sm text-red-700&quot;>Some explanation methods can be computationally expensive. Consider the trade-off between explanation quality and performance.</p>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6&quot;>Future Trends in Explainable AI</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6&quot;>
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200&quot;>
                <h3 className="text-xl font-semibold text-gray-900 mb-3&quot;>1. Causal Explainability</h3>
                <p className="text-gray-700&quot;>Moving beyond correlation to understand causal relationships in model predictions, enabling more robust and actionable explanations.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200&quot;>
                <h3 className="text-xl font-semibold text-gray-900 mb-3&quot;>2. Interactive Explanations</h3>
                <p className="text-gray-700&quot;>Developing more interactive and dynamic explanation interfaces that allow users to explore and query model behavior in real-time.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200&quot;>
                <h3 className="text-xl font-semibold text-gray-900 mb-3&quot;>3. Explainability for Generative AI</h3>
                <p className="text-gray-700&quot;>New techniques to explain the behavior of large language models and other generative AI systems, which present unique interpretability challenges.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200&quot;>
                <h3 className="text-xl font-semibold text-gray-900 mb-3&quot;>4. Standardization and Regulation</h3>
                <p className="text-gray-700&quot;>Emerging standards and regulations that define what constitutes a &quot;good&quot; explanation in different domains and applications.</p>
              </div>
            </div>

            <div className="bg-purple-50 border-l-4 border-purple-400 p-4 my-8 rounded-r&quot;>
              <div className="flex&quot;>
                <div className="flex-shrink-0&quot;>
                  <FiCheckCircle className="h-5 w-5 text-purple-700&quot; />
                </div>
                <div className="ml-3&quot;>
                  <h3 className="text-sm font-medium text-purple-800&quot;>Key Takeaway</h3>
                  <div className="mt-2 text-sm text-purple-700&quot;>
                    <p>Model explainability is not just a technical challenge but a critical component of responsible AI development. By implementing robust explainability techniques, you can build more transparent, trustworthy, and accountable AI systems. Remember that explainability is not a one-size-fits-all solution—it requires careful consideration of your specific use case, stakeholders, and regulatory requirements.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-gray-200&quot;>
              <h3 className="text-lg font-medium text-gray-900&quot;>Additional Resources</h3>
              <ul className="mt-4 space-y-2&quot;>
                <li>
                  <a href="https://christophm.github.io/interpretable-ml-book/&quot; className="text-blue-600 hover:text-blue-800&quot;>Interpretable Machine Learning - A Guide for Making Black Box Models Explainable</a>
                </li>
                <li>
                  <a href="https://shap.readthedocs.io/&quot; className="text-blue-600 hover:text-blue-800&quot;>SHAP Documentation</a>
                </li>
                <li>
                  <a href="https://github.com/marcotcr/lime&quot; className="text-blue-600 hover:text-blue-800&quot;>LIME: Local Interpretable Model-agnostic Explanations</a>
                </li>
                <li>
                  <a href="https://docs.seldon.io/projects/alibi/en/stable/&quot; className="text-blue-600 hover:text-blue-800&quot;>Alibi: Algorithms for Explaining Machine Learning Models</a>
                </li>
                <li>
                  <a href="https://pair.withgoogle.com/guidebook/&quot; className="text-blue-600 hover:text-blue-800&quot;>People + AI Guidebook - Google&apos;s guide to human-centered AI products</a>
                </li>
              </ul>
            </div>
          </div>
        </article>
      </main>

      <footer className="bg-gray-800 text-white py-12&quot;>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8&quot;>
          <div className="md:flex md:items-center md:justify-between&quot;>
            <div className="flex justify-center md:justify-start&quot;>
              <div className="flex-shrink-0&quot;>
                <Link href="/&quot; className="flex items-center&quot;>
                  <span className="text-xl font-bold&quot;>AI Vault</span>
                </Link>
                <p className="mt-2 text-sm text-gray-400&quot;>Advancing transparent and responsible AI through cutting-edge research and development.</p>
              </div>
            </div>
            <div className="mt-8 md:mt-0&quot;>
              <p className="text-center text-base text-gray-400 md:text-right&quot;>
                &copy; 2025 AI Vault. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MLModelExplainability;
