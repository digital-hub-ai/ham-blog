import { GetStaticProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { getAllPosts } from '../../lib/api';
import { Post } from '../../types';
import Layout from '../../components/Layout';
import styles from '../../styles/Blog.module.css';

type Props = {
  allPosts: Post[];
};

export default function PassionProjects({ allPosts }: Props) {
  const featuredPost = allPosts[0];
  const recentPosts = allPosts.slice(1, 5);
  const categories = [
    { slug: 'diy-projects', name: 'DIY Projects', emoji: '🔨' },
    { slug: 'arts-crafts', name: 'Arts & Crafts', emoji: '✂️' },
    { slug: 'music-audio', name: 'Music & Audio', emoji: '🎵' },
    { slug: 'gardening', name: 'Gardening', emoji: '🌱' },
    { slug: 'photography', name: 'Photography', emoji: '📸' },
    { slug: 'collecting', name: 'Collecting', emoji: '弆' },
  ];

  return (
    <Layout>
      <Head>
        <title>Passion Projects | AI Tools Directory</title>
        <meta name="description" content="Explore creative pursuits, DIY projects, and personal passions that enrich life." />
      </Head>

      <div className="container mx-auto px-4 py-12">
        <header className="mb-12 text-center">
          <h1 className="text-4xl font-bold mb-4">Passion Projects</h1>
          <p className="text-xl text-gray-600">Explore creative pursuits, DIY projects, and personal passions that enrich life.</p>
        </header>

        {/* Categories */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-6">Categories</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((category) => (
              <Link 
                key={category.slug} 
                href={`/passion-projects/${category.slug}`}
                className="flex flex-col items-center justify-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 text-center"
              >
                <span className="text-3xl mb-2">{category.emoji}</span>
                <span className="font-medium">{category.name}</span>
              </Link>
            ))}
          </div>
        </section>

        {/* Featured Post */}
        {featuredPost && (
          <section className="mb-16">
            <h2 className="text-2xl font-semibold mb-6">Featured Creations</h2>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="md:flex">
                <div className="md:flex-shrink-0 md:w-1/3">
                  <img 
                    className="h-48 w-full object-cover md:h-full" 
                    src={featuredPost.coverImage || '/images/placeholder.jpg'} 
                    alt={featuredPost.title} 
                  />
                </div>
                <div className="p-8">
                  <div className="uppercase tracking-wide text-sm text-indigo-600 font-semibold">
                    {featuredPost.category}
                  </div>
                  <Link 
                    href={`/passion-projects/${featuredPost.category.toLowerCase()}/${featuredPost.slug}`}
                    className="block mt-1 text-2xl font-medium text-gray-900 hover:text-indigo-600"
                  >
                    {featuredPost.title}
                  </Link>
                  <p className="mt-3 text-gray-600">
                    {featuredPost.excerpt}
                  </p>
                  <div className="mt-4">
                    <div className="flex items-center">
                      <div className="text-sm">
                        <p className="text-gray-900">
                          {featuredPost.author?.name || 'Anonymous'}
                        </p>
                        <p className="text-gray-500">
                          {new Date(featuredPost.date).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                          })}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Recent Posts */}
        <section>
          <h2 className="text-2xl font-semibold mb-6">Recent Activities</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentPosts.map((post) => (
              <div key={post.slug} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-200">
                <img 
                  className="h-48 w-full object-cover" 
                  src={post.coverImage || '/images/placeholder.jpg'} 
                  alt={post.title} 
                />
                <div className="p-6">
                  <div className="text-sm text-indigo-600 font-semibold mb-1">
                    {post.category}
                  </div>
                  <Link 
                    href={`/passion-projects/${post.category.toLowerCase()}/${post.slug}`}
                    className="block text-xl font-semibold text-gray-900 hover:text-indigo-600 mb-2"
                  >
                    {post.title}
                  </Link>
                  <p className="text-gray-600 mb-4">
                    {post.excerpt.length > 100 
                      ? `${post.excerpt.substring(0, 100)}...` 
                      : post.excerpt}
                  </p>
                  <div className="flex items-center text-sm text-gray-500">
                    <span>
                      {new Date(post.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric',
                      })}
                    </span>
                    <span className="mx-2">•</span>
                    <span>{post.readingTime} min read</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
    'category',
    'readingTime',
  ]);

  return {
    props: { allPosts },
  };
};
