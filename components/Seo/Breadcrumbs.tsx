import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

type BreadcrumbItem = {
  label: string;
  href: string;
  active?: boolean;
};

export const Breadcrumbs: React.FC = () => {
  const router = useRouter();
  const pathSegments = router.asPath.split('/').filter(Boolean);

  const breadcrumbs = pathSegments.map((segment, index) => {
    const href = `/${pathSegments.slice(0, index + 1).join('/')}`;
    const label = segment
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
    
    return {
      label,
      href,
      active: index === pathSegments.length - 1,
    };
  });

  // Add home as the first breadcrumb
  breadcrumbs.unshift({ label: 'Home', href: '/', active: pathSegments.length === 0 });

  // Generate structured data for breadcrumbs
  const breadcrumbStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbs.map((item, index) => ({
      &apos;@type&apos;: &apos;ListItem&apos;,
      position: index + 1,
      name: item.label,
      item: `${process.env.NEXT_PUBLIC_SITE_URL || &apos;https://ai-vault.example.com&apos;}${item.href}`
    }))
  };

  return (
    <nav aria-label="Breadcrumb&quot; className="text-sm text-gray-600 mb-6&quot;>
      <script
        type="application/ld+json&quot;
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }}
      />
      <ol className="flex flex-wrap items-center gap-2&quot;>
        {breadcrumbs.map((item, index) => (
          <li key={item.href} className="flex items-center&quot;>
            {index > 0 && (
              <span className="mx-2 text-gray-400&quot;>/</span>
            )}
            {item.active ? (
              <span className="text-gray-900 font-medium&quot; aria-current="page&quot;>
                {item.label}
              </span>
            ) : (
              <Link 
                href={item.href}
                className="text-blue-600 hover:text-blue-800 hover:underline transition-colors&quot;
              >
                {item.label}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};
