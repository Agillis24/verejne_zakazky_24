import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  ogType?: string;
  ogImage?: string;
  article?: {
    publishedTime?: string;
    modifiedTime?: string;
    author?: string;
    section?: string;
    tags?: string[];
  };
}

const defaultProps = {
  title: 'Veřejné zakázky 24 - Průvodce veřejnými zakázkami',
  description: 'Komplexní vzdělávací projekt zaměřený na českou legislativu veřejných zakázek. Aktuální informace, analýzy, metodiky a judikatura ÚOHS.',
  keywords: 'veřejné zakázky, ZZVZ, ÚOHS, zadávací řízení, legislativa, judikatura, metodika, vzdělávání, česká republika',
  canonical: 'https://www.zakazkovy-pruvodce.cz',
  ogType: 'website',
  ogImage: 'https://www.zakazkovy-pruvodce.cz/og-image.jpg',
};

export function SEO({
  title = defaultProps.title,
  description = defaultProps.description,
  keywords = defaultProps.keywords,
  canonical = defaultProps.canonical,
  ogType = defaultProps.ogType,
  ogImage = defaultProps.ogImage,
  article,
}: SEOProps) {
  const fullTitle = title === defaultProps.title ? title : `${title} | Veřejné zakázky 24`;

  return (
    <Helmet>
      {/* Základní meta tagy */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={canonical} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonical} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:locale" content="cs_CZ" />
      <meta property="og:site_name" content="Veřejné zakázky 24" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonical} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* Article meta tagy */}
      {article && (
        <>
          {article.publishedTime && (
            <meta property="article:published_time" content={article.publishedTime} />
          )}
          {article.modifiedTime && (
            <meta property="article:modified_time" content={article.modifiedTime} />
          )}
          {article.author && (
            <meta property="article:author" content={article.author} />
          )}
          {article.section && (
            <meta property="article:section" content={article.section} />
          )}
          {article.tags && article.tags.map((tag) => (
            <meta key={tag} property="article:tag" content={tag} />
          ))}
        </>
      )}
      
      {/* Dodatečné meta tagy */}
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="language" content="cs" />
      <meta name="revisit-after" content="7 days" />
      <meta name="author" content="Veřejné zakázky 24" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </Helmet>
  );
}