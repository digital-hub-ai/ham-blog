import { GetStaticProps } from &apos;next&apos;;
import Head from &apos;next/head&apos;;
import Link from &apos;next/link&apos;;
import { getAllPosts } from &apos;../../lib/api&apos;;
import { Post } from &apos;../../types&apos;;
import Layout from &apos;../../components/Layout&apos;;
import styles from &apos;../../styles/Blog.module.css&apos;;

type Props = {
  allPosts: Post[];
};

export default function PassionProjects({ allPosts }: Props) {
  const featuredPost = allPosts[0];
  const recentPosts = allPosts.slice(1, 5);
  const categories = [
    { slug: &apos;diy-projects&apos;, name: &apos;DIY Projects&apos;, emoji: &apos;🔨&apos; },
    { slug: &apos;arts-crafts&apos;, name: &apos;Arts & Crafts&apos;, emoji: &apos;✂️&apos; },
    { slug: &apos;music-audio&apos;, name: &apos;Music & Audio&apos;, emoji: &apos;🎵&apos; },
    { slug: &apos;gardening&apos;, name: &apos;Gardening&apos;, emoji: &apos;🌱&apos; },
    { slug: &apos;photography&apos;, name: &apos;Photography&apos;, emoji: &apos;📸&apos; },
    { slug: &apos;collecting&apos;, name: &apos;Collecting&apos;, emoji: &apos;弆&apos; },
  ];

  return (
    <Layout>
      <Head>
        <title>Passion Projects | AI Tools Directory</title>
        <meta name="description&quot; content="Explore creative pursuits, DIY projects, and personal passions that enrich life.&quot; />
      </Head>

      <div className="container mx-auto px-4 py-12&quot;>
        <header className="mb-12 text-center&quot;>
          <h1 className="text-4xl font-bold mb-4&quot;>Passion Projects</h1>
          <p className="text-xl text-gray-600&quot;>Explore creative pursuits, DIY projects, and personal passions that enrich life.</p>
        </header>

        {/* Categories */}
        <section className="mb-16&quot;>
          <h2 className="text-2xl font-semibold mb-6&quot;>Categories</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4&quot;>
            {categories.map((category) => (
              <Link 
                key={category.slug} 
                href={`/passion-projects/${category.slug}`}
                className="flex flex-col items-center justify-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 text-center&quot;
              >
                <span className="text-3xl mb-2&quot;>{category.emoji}</span>
                <span className="font-medium&quot;>{category.name}</span>
              </Link>
            ))}
          </div>
        </section>

        {/* Featured Post */}
        {featuredPost && (
          <section className="mb-16&quot;>
            <h2 className="text-2xl font-semibold mb-6&quot;>Featured Creations</h2>
            <div className="bg-white rounded-lg shadow-md overflow-hidden&quot;>
              <div className="md:flex&quot;>
                <div className="md:flex-shrink-0 md:w-1/3&quot;>
                  <img 
                    className="h-48 w-full object-cover md:h-full&quot; 
                    src={featuredPost.coverImage || &apos;/images/placeholder.jpg} 
                    alt={featuredPost.title} 
                  />
                </div>
                <div className="p-8&quot;>
                  <div className="uppercase tracking-wide text-sm text-indigo-600 font-semibold&quot;>
                    {featuredPost.category}
                  </div>
                  <Link 
                    href={`/passion-projects/${featuredPost.category.toLowerCase()}/${featuredPost.slug}`}
                    className="block mt-1 text-2xl font-medium text-gray-900 hover:text-indigo-600&quot;
                  >
                    {featuredPost.title}
                  </Link>
                  <p className="mt-3 text-gray-600&quot;>
                    {featuredPost.excerpt}
                  </p>
                  <div className="mt-4&quot;>
                    <div className="flex items-center&quot;>
                      <div className="text-sm&quot;>
                        <p className="text-gray-900&quot;>
                          {featuredPost.author?.name || &apos;Anonymous&apos;}
                        </p>
                        <p className="text-gray-500&quot;>
                          {new Date(featuredPost.date).toLocaleDateString(&apos;en-US&apos;, {
                            year: &apos;numeric&apos;,
                            month: &apos;long&apos;,
                            day: &apos;numeric&apos;,
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
          <h2 className="text-2xl font-semibold mb-6&quot;>Recent Activities</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8&quot;>
            {recentPosts.map((post) => (
              <div key={post.slug} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-200&quot;>
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
                    href={`/passion-projects/${post.category.toLowerCase()}/${post.slug}`}
                    className="block text-xl font-semibold text-gray-900 hover:text-indigo-600 mb-2&quot;
                  >
                    {post.title}
                  </Link>
                  <p className="text-gray-600 mb-4&quot;>
                    {post.excerpt.length > 100 
                      ? `${post.excerpt.substring(0, 100)}...` 
                      : post.excerpt}
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
    &apos;title&apos;,
    &apos;date&apos;,
    &apos;slug&apos;,
    &apos;author&apos;,
    &apos;coverImage&apos;,
    &apos;excerpt&apos;,
    &apos;category&apos;,
    &apos;readingTime&apos;,
  ]);

  return {
    props: { allPosts },
  };
};
