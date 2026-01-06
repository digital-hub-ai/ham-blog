import { GetStaticProps } from &apos;next&apos;;
import Head from &apos;next/head&apos;;
import Link from &apos;next/link&apos;;
import { getAllPosts, getPostsByCategory } from &apos;../../../lib/api&apos;;
import { Post } from &apos;../../../types&apos;;
import Layout from &apos;../../../components/Layout&apos;;

interface CategoryProps {
  posts: Post[];
}

export default function DIYProjects({ posts }: CategoryProps) {
  return (
    <Layout>
      <Head>
        <title>DIY Projects | Passion Projects</title>
        <meta name="description&quot; content="Get inspired with creative do-it-yourself projects and tutorials&quot; />
      </Head>

      <div className="container mx-auto px-4 py-12&quot;>
        <header className="mb-12 text-center&quot;>
          <h1 className="text-4xl font-bold mb-2&quot;>
            <span className="mr-2&quot;>🔨</span>
            DIY Projects
          </h1>
          <p className="text-xl text-gray-600&quot;>
            Get inspired with creative do-it-yourself projects and tutorials
          </p>
        </header>

        {posts.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8&quot;>
            {posts.map((post) => (
              <article key={post.slug} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-200&quot;>
                <img 
                  className="h-48 w-full object-cover&quot; 
                  src={post.coverImage || &apos;/images/placeholder.jpg} 
                  alt={post.title} 
                />
                <div className="p-6&quot;>
                  <div className="text-sm text-indigo-600 font-semibold mb-1&quot;>
                    {post.category}
                  </div>
                  <Link 
                    href={`/passion-projects/diy-projects/${post.slug}`}
                    className="block text-xl font-semibold text-gray-900 hover:text-indigo-600 mb-2&quot;
                  >
                    {post.title}
                  </Link>
                  <p className="text-gray-600 mb-4&quot;>
                    {post.excerpt}
                  </p>
                  <div className="flex items-center text-sm text-gray-500&quot;>
                    <span>
                      {new Date(post.date).toLocaleDateString(&apos;en-US&apos;, {
                        year: &apos;numeric&apos;,
                        month: &apos;short&apos;,
                        day: &apos;numeric&apos;,
                      })}
                    </span>
                    <span className="mx-2&quot;>•</span>
                    <span>{post.readingTime} min read</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="text-center py-12&quot;>
            <p className="text-gray-500 text-lg&quot;>No posts found in this category yet. Check back soon!</p>
          </div>
        )}
      </div>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = getPostsByCategory(&apos;DIY Projects&apos;, [
    &apos;title&apos;,
    &apos;date&apos;,
    &apos;slug&apos;,
    &apos;author&apos;,
    &apos;coverImage&apos;,
    &apos;excerpt&apos;,
    &apos;readingTime&apos;,
  ]);

  return {
    props: { posts },
  };
};
