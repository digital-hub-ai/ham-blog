import { GetStaticProps, GetStaticPaths } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { getPostBySlug, getAllPosts, Post } from '../../../../lib/api';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import Layout from '../../../../components/Layout';
import { ParsedUrlQuery } from 'querystring';

interface PostPageProps {
  post: Post & {
    mdxSource: MDXRemoteSerializeResult;
  };
}

interface Params extends ParsedUrlQuery {
  slug: string;
}

const components = {
  // Add any custom MDX components here
};

export default function Post({ post }: PostPageProps) {
  return (
    <Layout>
      <Head>
        <title>{post.title} | DIY Projects</title>
        <meta name="description" content={post.excerpt} />
      </Head>

      <article className="max-w-4xl mx-auto px-4 py-12">
        <header className="mb-12">
          <div className="text-sm text-indigo-600 font-semibold mb-4">
            <Link href="/passion-projects/diy-projects" className="hover:underline">
              DIY Projects
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
          <MDXRemote {...post.mdxSource} components={components} />
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
      </article>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps<PostPageProps, Params> = async ({ params }) => {
  if (!params?.slug) {
    return {
      notFound: true,
    };
  }
  
  const slug = params.slug;
  
  const post = getPostBySlug(slug, [
    'title',
    'date',
    'slug',
    'author',
    'content',
    'coverImage',
    'excerpt',
    'readingTime',
  ], 'content/posts/passion-projects/diy-projects');

  if (!post) {
    return {
      notFound: true,
    };
  }

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

export const getStaticPaths: GetStaticPaths<Params> = async () => {
  const posts = getAllPosts(['slug'], 'content/posts/passion-projects/diy-projects');
  
  const paths = posts.map((post) => ({
    params: {
      slug: post.slug,
    },
  }));

  return {
    paths,
    fallback: false,
  };
};
