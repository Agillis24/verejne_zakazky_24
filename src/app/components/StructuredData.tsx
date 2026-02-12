import { Helmet } from 'react-helmet-async';

interface OrganizationSchema {
  '@context': string;
  '@type': string;
  name: string;
  url: string;
  logo: string;
  description: string;
  contactPoint?: {
    '@type': string;
    contactType: string;
    email: string;
  };
  sameAs?: string[];
}

interface ArticleSchema {
  '@context': string;
  '@type': string;
  headline: string;
  description: string;
  image?: string;
  datePublished: string;
  dateModified?: string;
  author: {
    '@type': string;
    name: string;
  };
  publisher: {
    '@type': string;
    name: string;
    logo: {
      '@type': string;
      url: string;
    };
  };
  mainEntityOfPage: {
    '@type': string;
    '@id': string;
  };
}

interface BreadcrumbSchema {
  '@context': string;
  '@type': string;
  itemListElement: Array<{
    '@type': string;
    position: number;
    name: string;
    item?: string;
  }>;
}

interface StructuredDataProps {
  type: 'organization' | 'article' | 'breadcrumb';
  data: OrganizationSchema | ArticleSchema | BreadcrumbSchema;
}

export function StructuredData({ type, data }: StructuredDataProps) {
  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(data)}
      </script>
    </Helmet>
  );
}

// Pomocné funkce pro vytváření strukturovaných dat
export const createOrganizationSchema = (): OrganizationSchema => ({
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Veřejné zakázky 24',
  url: 'https://www.zakazkovy-pruvodce.cz',
  logo: 'https://www.zakazkovy-pruvodce.cz/logo.png',
  description: 'Komplexní vzdělávací projekt zaměřený na českou legislativu veřejných zakázek',
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'customer support',
    email: 'info@zakazkovy-pruvodce.cz',
  },
});

export const createArticleSchema = (
  title: string,
  description: string,
  publishedDate: string,
  modifiedDate: string,
  url: string,
  imageUrl?: string
): ArticleSchema => ({
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: title,
  description: description,
  image: imageUrl,
  datePublished: publishedDate,
  dateModified: modifiedDate,
  author: {
    '@type': 'Organization',
    name: 'Veřejné zakázky 24',
  },
  publisher: {
    '@type': 'Organization',
    name: 'Veřejné zakázky 24',
    logo: {
      '@type': 'ImageObject',
      url: 'https://www.zakazkovy-pruvodce.cz/logo.png',
    },
  },
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': url,
  },
});

export const createBreadcrumbSchema = (
  items: Array<{ name: string; url?: string }>
): BreadcrumbSchema => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    ...(item.url && { item: item.url }),
  })),
});