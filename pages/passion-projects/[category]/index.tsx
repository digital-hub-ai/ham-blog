import { GetStaticProps, GetStaticPaths } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { getAllPosts, getPostsByCategory } from '../../../lib/api';
import { Post } from '../../../types';
import Layout from '../../../components/Layout';

interface CategoryProps {
  posts: Post[];
  category: string;
  categoryName: string;
}

export default function CategoryPage({ posts, category, categoryName }: CategoryProps) {
  const emojiMap: Record<string, string> = {
    'diy-projects': '🔨',
    'arts-crafts': '✂️',
    'music-audio': '🎵',
    'gardening': '🌱',
    'photography': '📸',
    'collecting': '弆',
  };

  const emoji = emojiMap[category] || '✨';

  return (
    <Layout>
      <Head>
        <title>{categoryName} | Passion Projects</title>
        <meta name="description" content={`Explore ${categoryName} projects and ideas`} />
      </Head>

      <div className="container mx-auto px-4 py-12">
        <header className="mb-12 text-center">
          <h1 className="text-4xl font-bold mb-2">
            <span className="mr-2">{emoji}</span>
            {categoryName}
          </h1>
          <p className="text-xl text-gray-600">
            {getCategoryDescription(categoryName)}
          </p>
        </header>

        {posts.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article key={post.slug} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-200">
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
                    href={`/passion-projects/${category}/${post.slug}`}
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
              </article>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No posts found in this category yet. Check back soon!</p>
          </div>
        )}
      </div>
    </Layout>
  );
}

function getCategoryDescription(categoryName: string): string {
  const descriptions: Record<string, string> = {
    'DIY Projects': 'Get inspired with creative do-it-yourself projects and tutorials',
    'Arts & Crafts': 'Discover artistic projects and craft ideas to spark your creativity',
    'Music & Audio': 'Explore music creation, production, and audio engineering',
    'Gardening': 'Tips, tricks, and guides for gardening enthusiasts',
    'Photography': 'Techniques and inspiration for photographers of all levels',
    'Collecting': 'Showcasing unique collections and collecting tips',
  };
  
  return descriptions[categoryName] || 'Explore our collection of creative projects and ideas';
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const category = params?.category as string;
  const categoryMap: Record<string, string> = {
    'diy-projects': 'DIY Projects',
    'arts-crafts': 'Arts & Crafts',
    'music-audio': 'Music & Audio',
    'gardening': 'Gardening',
    'photography': 'Photography',
    'collecting': 'Collecting',
  };

  const categoryName = categoryMap[category] || category;
  const posts = getPostsByCategory(categoryName, [
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
    'readingTime',
  ]);

  return {
    props: { posts, category, categoryName },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const categories = [
    'diy-projects',
    'arts-crafts', 
    'music-audio',
    'gardening',
    'photography',
    'collecting',
  ];

  const paths = categories.map((category) => ({
    params: { category },
  }));

  return {
    paths,
    fallback: false,
  };
};
