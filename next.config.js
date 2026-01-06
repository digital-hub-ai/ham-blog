/** @type {import('next').NextConfig} */
const path = require('path');
const webpack = require('webpack');

// Security headers configuration
const securityHeaders = [
  {
    key: 'X-DNS-Prefetch-Control',
    value: 'on',
  },
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubDomains; preload',
  },
  {
    key: 'X-XSS-Protection',
    value: '1; mode=block',
  },
  {
    key: 'X-Frame-Options',
    value: 'SAMEORIGIN',
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff',
  },
  {
    key: 'Referrer-Policy',
    value: 'strict-origin-when-cross-origin',
  },
  {
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=(), interest-cohort=()',
  },
  {
    key: 'Content-Security-Policy',
    value: &quot;default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; img-src 'self' data: https:; font-src 'self' https://fonts.gstatic.com; connect-src 'self' https:; media-src 'self'; object-src 'none'; base-uri 'self'; form-action 'self'; frame-ancestors 'none';&quot;
  }
];

const nextConfig = {
  // Core optimizations
  reactStrictMode: true,
  swcMinify: true,
  compress: true,
  poweredByHeader: false,
  generateEtags: true,
  
  // Image optimization
  images: {
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 days
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.google.com',
        pathname: '/s2/favicons/**',
      },
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },

  // Performance optimizations
  experimental: {
    optimizeCss: true,
    scrollRestoration: true,
    optimizePackageImports: [
      'three', 
      'd3', 
      'framer-motion',
      '@heroicons/react',
      'react-icons'
    ]
  },

  // Compiler optimizations
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
    styledComponents: {
      ssr: true,
      displayName: true
    },
  },

  // Static generation and build settings
  staticPageGenerationTimeout: 600, // 10 minutes
  output: 'standalone',
  productionBrowserSourceMaps: false, // Disable in production for better performance
  
  // Vercel-specific optimizations
  poweredByHeader: false,
  generateEtags: false,

  
  // Webpack configuration for additional optimizations
  webpack: (config, { dev, isServer }) => {
    // Add polyfills for Node.js modules
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        net: false,
        tls: false,
        dns: false,
        child_process: false,
        module: false,
      };
    }

    // Add environment variables
    config.plugins.push(
      new webpack.EnvironmentPlugin({
        NODE_ENV: process.env.NODE_ENV,
        NEXT_PUBLIC_GA_TRACKING_ID: process.env.NEXT_PUBLIC_GA_TRACKING_ID || &apos;&apos;,
      })
    );

    // Optimize moment.js locales
    config.plugins.push(
      new webpack.IgnorePlugin({
        resourceRegExp: /^moment\/locale\/(en|es|fr|de|it|ja|zh-cn|zh-tw)$/,
      })
    );

    // Optimize lodash imports
    if (!dev) {
      config.optimization.minimize = true;
      config.optimization.splitChunks = {
        chunks: &apos;all&apos;,
        maxInitialRequests: 25,
        minSize: 20000,
        maxSize: 244000,
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name(module) {
              const packageName = module.context.match(
                /[\\/]node_modules[\\/](.*?)([\\/]|$)/
              )[1];
              return `npm.${packageName.replace(&apos;@&apos;, &apos;&apos;)}`;
            },
          },
        },
      };
    }

    return config;
  },

  // Security headers and CORS
  async headers() {
    return [
      // Security headers for all routes
      {
        source: &apos;/(.*)&apos;,
        headers: securityHeaders,
      },
      // API CORS headers
      {
        source: &apos;/api/:path*&apos;,
        headers: [
          { key: &apos;Access-Control-Allow-Credentials&apos;, value: &apos;true&apos; },
          { key: &apos;Access-Control-Allow-Origin&apos;, value: &apos;*&apos; },
          { key: &apos;Access-Control-Allow-Methods&apos;, value: &apos;GET,OPTIONS,PATCH,DELETE,POST,PUT&apos; },
          { key: &apos;Access-Control-Allow-Headers&apos;, value: &apos;X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version&apos; },
        ],
      },
      // Cache static assets
      {
        source: &apos;/_next/static/:path*&apos;,
        headers: [
          { key: &apos;Cache-Control&apos;, value: &apos;public, max-age=31536000, immutable&apos; },
        ],
      },
      {
        source: &apos;/static/:path*&apos;,
        headers: [
          { key: &apos;Cache-Control&apos;, value: &apos;public, max-age=31536000, immutable&apos; },
        ],
      },
    ];
  },

  // Environment variables
  env: {
    SITE_URL: process.env.SITE_URL || &apos;https://aitoolsdirectory.com&apos;,
  },

  // Redirects and rewrites
  async redirects() {
    return [
      {
        source: &apos;/privacy&apos;,
        destination: &apos;/privacy-policy&apos;,
        permanent: true,
      },
      {
        source: &apos;/tos&apos;,
        destination: &apos;/terms-of-service&apos;,
        permanent: true,
      },
    ];
  },

  // Internationalization (i18n) configuration
  i18n: {
    locales: [&apos;en&apos;],
    defaultLocale: &apos;en&apos;,
  },
};

// Bundle analyzer for production builds
if (process.env.ANALYZE === &apos;true&apos;) {
  const withBundleAnalyzer = require(&apos;@next/bundle-analyzer&apos;)({
    enabled: process.env.ANALYZE === &apos;true&apos;,
  });
  module.exports = withBundleAnalyzer(nextConfig);
} else {
  module.exports = nextConfig;
}