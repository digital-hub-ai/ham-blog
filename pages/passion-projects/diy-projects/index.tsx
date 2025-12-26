import { GetStaticProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { getAllPosts, getPostsByCategory } from '../../../lib/api';
import { Post } from '../../../types';
import Layout from '../../../components/Layout';

interface CategoryProps {
  posts: Post[];
}

export default function DIYProjects({ posts }: CategoryProps) {
  return (
    <Layout>
      <Head>
        <title>DIY Projects | Passion Projects</title>
        <meta name="description" content="Get inspired with creative do-it-yourself projects and tutorials" />
      </Head>

      <div className="container mx-auto px-4 py-12">
        <header className="mb-12 text-center">
          <h1 className="text-4xl font-bold mb-2">
            <span className="mr-2">🔨</span>
            DIY Projects
          </h1>
          <p className="text-xl text-gray-600">
            Get inspired with creative do-it-yourself projects and tutorials
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
                    href={`/passion-projects/diy-projects/${post.slug}`}
                    className="block text-xl font-semibold text-gray-900 hover:text-indigo-600 mb-2"
                  >
                    {post.title}
                  </Link>
                  <p className="text-gray-600 mb-4">
                    {post.excerpt}
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

export const getStaticProps: GetStaticProps = async () => {
  const posts = getPostsByCategory('DIY Projects', [
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
    'readingTime',
  ]);

  return {
    props: { posts },
  };
};
