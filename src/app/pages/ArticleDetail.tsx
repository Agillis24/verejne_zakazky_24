import { useParams, Link, Navigate } from 'react-router';
import { Calendar, ArrowLeft, ArrowRight } from 'lucide-react';
import { articles } from '../data/articles';
import { SEO } from '../components/SEO';
import { StructuredData, createArticleSchema, createBreadcrumbSchema } from '../components/StructuredData';

export function ArticleDetail() {
  const { id } = useParams<{ id: string }>();
  const article = articles.find((a) => a.id === id);

  if (!article) {
    return <Navigate to="/aktuality" replace />;
  }

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      Legislativa: 'bg-blue-100 text-blue-700',
      Judikatura: 'bg-purple-100 text-purple-700',
      Metodika: 'bg-emerald-100 text-emerald-700',
      'Nové video': 'bg-orange-100 text-orange-700',
      Komentář: 'bg-slate-100 text-slate-700',
    };
    return colors[category] || 'bg-slate-100 text-slate-700';
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('cs-CZ', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    }).format(date);
  };

  return (
    <>
      <SEO
        title={article.title}
        description={article.excerpt}
        keywords={`${article.category}, veřejné zakázky, ${article.isPremium ? 'premium obsah' : 'free obsah'}, ÚOHS, legislativa`}
        canonical={`https://www.zakazkovy-pruvodce.cz/aktuality/${article.id}`}
        ogType="article"
        ogImage={article.image}
        article={{
          publishedTime: article.date,
          modifiedTime: article.date,
          author: 'Veřejné zakázky 24',
          section: article.category,
          tags: [article.category, 'veřejné zakázky'],
        }}
      />
      <StructuredData
        type="article"
        data={createArticleSchema(
          article.title,
          article.excerpt,
          article.date,
          article.date,
          `https://www.zakazkovy-pruvodce.cz/aktuality/${article.id}`,
          article.image
        )}
      />
      <StructuredData
        type="breadcrumb"
        data={createBreadcrumbSchema([
          { name: 'Domů', url: 'https://www.zakazkovy-pruvodce.cz' },
          { name: 'Aktuality', url: 'https://www.zakazkovy-pruvodce.cz/aktuality' },
          { name: article.title },
        ])}
      />
      <div className="min-h-screen pt-24 sm:pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <article className="max-w-4xl mx-auto">
          <Link
            to="/aktuality"
            className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-900 transition-colors mb-6 sm:mb-8 text-sm sm:text-base"
          >
            <ArrowLeft size={20} />
            Zpět na aktuality
          </Link>

          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="aspect-[16/9] sm:aspect-[21/9] relative overflow-hidden bg-slate-200">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
            </div>

            <div className="p-8 md:p-12">
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <span
                  className={`px-3 py-1 text-sm rounded-full ${getCategoryColor(
                    article.category
                  )}`}
                >
                  {article.category}
                </span>
                <div className="flex items-center gap-2 text-sm text-slate-600">
                  <Calendar size={16} />
                  {formatDate(article.date)}
                </div>
              </div>

              <h1 className="mb-8 text-3xl md:text-4xl leading-tight">
                {article.title}
              </h1>

              {article.videoEmbed && (
                <div className="mb-8 aspect-video rounded-lg overflow-hidden bg-slate-200">
                  <iframe
                    src={article.videoEmbed}
                    title={article.title}
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              )}

              <div
                className="prose prose-slate prose-lg max-w-none article-content"
                dangerouslySetInnerHTML={{ __html: article.content }}
              />

              <div className="mt-12 pt-8 border-t border-slate-200">
                <div className="bg-orange-50 rounded-xl p-8 text-center">
                  <h3 className="mb-3 text-xl">
                    Podrobné rozbory najdete v prémiové sekci
                  </h3>
                  <p className="text-slate-700 mb-6 leading-relaxed">
                    Získejte přístup k detailním analýzám rozhodnutí ÚOHS,
                    judikátů a praktickým komentářům k aktuálním změnám v
                    legislativě.
                  </p>
                  <a
                    href="https://herohero.co/verejnezakazky"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-orange-600 hover:text-orange-700 transition-colors"
                  >
                    Přihlásit se na Herohero
                    <ArrowRight size={16} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </article>

        <style>{`
          .article-content h2 {
            font-family: 'Playfair Display', serif;
            font-size: 1.75rem;
            margin-top: 2rem;
            margin-bottom: 1rem;
            color: #1e293b;
          }

          .article-content h3 {
            font-family: 'Playfair Display', serif;
            font-size: 1.5rem;
            margin-top: 1.5rem;
            margin-bottom: 0.75rem;
            color: #334155;
          }

          .article-content p {
            margin-bottom: 1.25rem;
            line-height: 1.75;
            color: #475569;
          }

          .article-content ul,
          .article-content ol {
            margin-bottom: 1.25rem;
            padding-left: 1.5rem;
          }

          .article-content li {
            margin-bottom: 0.5rem;
            line-height: 1.75;
            color: #475569;
          }

          .article-content blockquote {
            border-left: 4px solid #9333ea;
            padding-left: 1.5rem;
            margin: 2rem 0;
            font-style: italic;
            color: #64748b;
            background: #f8fafc;
            padding: 1.5rem;
            border-radius: 0.5rem;
          }

          .article-content blockquote p {
            margin: 0;
          }

          .article-content strong {
            color: #1e293b;
            font-weight: 600;
          }

          .article-content a {
            color: #9333ea;
            text-decoration: underline;
          }

          .article-content a:hover {
            color: #7e22ce;
          }
        `}</style>
      </div>
    </>
  );
}