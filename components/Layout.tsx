import { ReactNode } from &apos;react&apos;;
import Head from &apos;next/head&apos;;

interface LayoutProps {
  children: ReactNode;
  title?: string;
  description?: string;
}

export default function Layout({ children, title = &apos;AI Tools Directory&apos;, description = &apos;Discover and compare AI tools&apos; }: LayoutProps) {
  return (
    <div className="min-h-screen bg-gray-50&quot;>
      <Head>
        <title>{title}</title>
        <meta name="description&quot; content={description} />
        <link rel="icon&quot; href="/favicon.ico&quot; />
      </Head>

      <main className="container mx-auto px-4 py-8&quot;>
        {children}
      </main>

      <footer className="bg-white mt-12 py-6 border-t&quot;>
        <div className="container mx-auto px-4 text-center text-gray-600&quot;>
          <p>© {new Date().getFullYear()} AI Tools Directory. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
