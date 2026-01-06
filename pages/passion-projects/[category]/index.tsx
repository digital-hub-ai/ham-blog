import { GetStaticProps, GetStaticPaths } from &apos;next&apos;;
import Head from &apos;next/head&apos;;
import Link from &apos;next/link&apos;;
import { getAllPosts, getPostsByCategory } from &apos;../../../lib/api&apos;;
import { Post } from &apos;../../../types&apos;;
import Layout from &apos;../../../components/Layout&apos;;

interface CategoryProps {
  posts: Post[];
  category: string;
  categoryName: string;
}

export default function CategoryPage({ posts, category, categoryName }: CategoryProps) {
  const emojiMap: Record<string, string> = {
    &apos;diy-projects&apos;: &apos;🔨&apos;,
    &apos;arts-crafts&apos;: &apos;✂️&apos;,
    &apos;music-audio&apos;: &apos;🎵&apos;,
    &apos;gardening&apos;: &apos;🌱&apos;,
    &apos;photography&apos;: &apos;📸&apos;,
    &apos;collecting&apos;: &apos;弆&apos;,
  };

  const emoji = emojiMap[category] || &apos;✨&apos;;

  return (
    <Layout>
      <Head>
        <title>{categoryName} | Passion Projects</title>
        <meta name="description&quot; content={`Explore ${categoryName} projects and ideas`} />
      </Head>

      <div className="container mx-auto px-4 py-12&quot;>
        <header className="mb-12 text-center&quot;>
          <h1 className="text-4xl font-bold mb-2&quot;>
            <span className="mr-2&quot;>{emoji}</span>
            {categoryName}
          </h1>
          <p className="text-xl text-gray-600&quot;>
            {getCategoryDescription(categoryName)}
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
                    href={`/passion-projects/${category}/${post.slug}`}
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
