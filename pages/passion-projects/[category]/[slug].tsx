import { GetStaticProps, GetStaticPaths } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { getAllPosts, getPostBySlug } from '../../../../lib/api';
import { Post } from '../../../../types';
import Layout from '../../../../components/Layout';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';

type PostPageProps = {
  post: Post & {
    mdxSource: MDXRemoteSerializeResult;
  };
};

export default function PostPage({ post }: PostPageProps) {
  return (
    <Layout>
      <Head>
        <title>{post.title} | Passion Projects</title>
        <meta name="description" content={post.excerpt} />
        {post.ogImage && (
          <meta property="og:image" content={post.ogImage.url} />
        )}
      </Head>

      <article className="max-w-4xl mx-auto px-4 py-12">
        <header className="mb-12">
          <div className="text-sm text-indigo-600 font-semibold mb-4">
            <Link 
              href={`/passion-projects/${post.category.toLowerCase()}`}
              className="hover:underline"
            >
              {post.category}
            </Link>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{post.title}</h1>
          
          <div className="flex items-center mt-8">
            {post.author?.picture && (
              <img
                src={post.author.picture}
                className="w-12 h-12 rounded-full mr-4"
                alt={post.author.name}
              />
            )}
            <div>
              <p className="font-medium text-gray-900">
                {post.author?.name || 'Anonymous'}
              </p>
              <div className="flex text-sm text-gray-500">
                <time dateTime={post.date}>
                  {new Date(post.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </time>
                <span className="mx-2">•</span>
                <span>{post.readingTime} min read</span>
              </div>
            </div>
          </div>
        </header>

        {post.coverImage && (
          <div className="mb-12 rounded-lg overflow-hidden">
            <img 
              src={post.coverImage} 
              alt={post.title} 
              className="w-full h-auto max-h-[500px] object-cover"
            />
          </div>
        )}

        <div className="prose prose-lg max-w-none">
          <MDXRemote {...post.mdxSource} />
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <h2 className="text-2xl font-bold mb-6">About the Author</h2>
          <div className="flex items-start">
            {post.author?.picture && (
              <img
                src={post.author.picture}
                className="w-16 h-16 rounded-full mr-4"
                alt={post.author.name}
              />
            )}
            <div>
              <h3 className="text-xl font-semibold">{post.author?.name || 'Anonymous'}</h3>
              {post.author?.bio && (
                <p className="mt-2 text-gray-600">{post.author.bio}</p>
              )}
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <h2 className="text-2xl font-bold mb-6">More in {post.category}</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* You can add related posts here */}
          </div>
          <div className="mt-8 text-center">
            <Link 
              href={`/passion-projects/${post.category.toLowerCase()}`}
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200"
            >
              View all {post.category} posts
            </Link>
          </div>
        </div>
      </article>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const category = params?.category as string;
  const slug = params?.slug as string;
  
  const post = getPostBySlug(slug, [
    'title',
    'date',
    'slug',
    'author',
    'content',
    'ogImage',
    'coverImage',
    'excerpt',
    'category',
    'readingTime',
  ]);

  if (!post) {
    return {
      notFound: true,
    };
  }

  // Serialize the MDX content
  const mdxSource = await serialize(post.content || '');

  return {
    props: {
      post: {
        ...post,
        mdxSource,
      },
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = getAllPosts(['slug', 'category']);
  
  const paths = posts.map((post) => ({
    params: {
      category: post.category.toLowerCase(),
      slug: post.slug,
    },
  }));

  return {
    paths,
    fallback: false,
  };
};
