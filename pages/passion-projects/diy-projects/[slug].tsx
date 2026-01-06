import { GetStaticProps, GetStaticPaths } from &apos;next&apos;;
import Head from &apos;next/head&apos;;
import Link from &apos;next/link&apos;;
import { getPostBySlug, getAllPosts, Post } from &apos;../../../../lib/api&apos;;
import { serialize } from &apos;next-mdx-remote/serialize&apos;;
import { MDXRemote, MDXRemoteSerializeResult } from &apos;next-mdx-remote&apos;;
import Layout from &apos;../../../../components/Layout&apos;;
import { ParsedUrlQuery } from &apos;querystring&apos;;

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
        <meta name="description&quot; content={post.excerpt} />
      </Head>

      <article className="max-w-4xl mx-auto px-4 py-12&quot;>
        <header className="mb-12&quot;>
          <div className="text-sm text-indigo-600 font-semibold mb-4&quot;>
            <Link href="/passion-projects/diy-projects&quot; className="hover:underline&quot;>
              DIY Projects
            </Link>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6&quot;>{post.title}</h1>
          
          <div className="flex items-center mt-8&quot;>
            {post.author?.picture && (
              <img
                src={post.author.picture}
                className="w-12 h-12 rounded-full mr-4&quot;
                alt={post.author.name}
              />
            )}
            <div>
              <p className="font-medium text-gray-900&quot;>
                {post.author?.name || &apos;Anonymous&apos;}
              </p>
              <div className="flex text-sm text-gray-500&quot;>
                <time dateTime={post.date}>
                  {new Date(post.date).toLocaleDateString(&apos;en-US&apos;, {
                    year: &apos;numeric&apos;,
                    month: &apos;long&apos;,
                    day: &apos;numeric&apos;,
                  })}
                </time>
                <span className="mx-2&quot;>•</span>
                <span>{post.readingTime} min read</span>
              </div>
            </div>
          </div>
        </header>

        {post.coverImage && (
          <div className="mb-12 rounded-lg overflow-hidden&quot;>
            <img 
              src={post.coverImage} 
              alt={post.title} 
              className="w-full h-auto max-h-[500px] object-cover&quot;
            />
          </div>
        )}

        <div className="prose prose-lg max-w-none&quot;>
          <MDXRemote {...post.mdxSource} components={components} />
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200&quot;>
          <h2 className="text-2xl font-bold mb-6&quot;>About the Author</h2>
          <div className="flex items-start&quot;>
            {post.author?.picture && (
              <img
                src={post.author.picture}
                className="w-16 h-16 rounded-full mr-4&quot;
                alt={post.author.name}
              />
            )}
            <div>
              <h3 className="text-xl font-semibold&quot;>{post.author?.name || &apos;Anonymous&apos;}</h3>
              {post.author?.bio && (
                <p className="mt-2 text-gray-600&quot;>{post.author.bio}</p>
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
    &apos;title&apos;,
    &apos;date&apos;,
    &apos;slug&apos;,
    &apos;author&apos;,
    &apos;content&apos;,
    &apos;coverImage&apos;,
    &apos;excerpt&apos;,
    &apos;readingTime&apos;,
  ], &apos;content/posts/passion-projects/diy-projects&apos;);

  if (!post) {
    return {
      notFound: true,
    };
  }

  const mdxSource = await serialize(post.content || &apos;&apos;);

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
