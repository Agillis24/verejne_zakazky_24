import { Link, useSearchParams } from 'react-router';
import { Calendar, ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { articles } from '../data/articles';
import { SEO } from '../components/SEO';
import { StructuredData, createBreadcrumbSchema } from '../components/StructuredData';

const ITEMS_PER_PAGE = 5;

export function Aktuality() {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = parseInt(searchParams.get('page') || '1', 10);
  
  const totalPages = Math.ceil(articles.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentArticles = articles.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    setSearchParams({ page: page.toString() });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

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
        title="Aktuality - Veřejné zakázky 24"
        description="Nejnovější informace z oblasti veřejných zakázek, změny v legislativě, rozhodovací praxe ÚOHS a aktuální judikatura."
        keywords="aktuality veřejné zakázky, legislativa, judikatura, ÚOHS, rozhodnutí, metodika, komentáře"
        canonical={`https://www.zakazkovy-pruvodce.cz/aktuality${currentPage > 1 ? `?page=${currentPage}` : ''}`}
        ogType="website"
      />
      <StructuredData
        type="breadcrumb"
        data={createBreadcrumbSchema([
          { name: 'Domů', url: 'https://www.zakazkovy-pruvodce.cz' },
          { name: 'Aktuality', url: 'https://www.zakazkovy-pruvodce.cz/aktuality' },
        ])}
      />
      <div className="min-h-screen bg-slate-50">
        {/* Header */}
        <section className="pt-24 sm:pt-32 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="mb-4 sm:mb-6 text-3xl sm:text-4xl md:text-5xl">Aktuality</h1>
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto">
              Nejnovější informace z oblasti veřejných zakázek, změny v legislativě
              a rozhodovací praxe ÚOHS
            </p>
          </div>
        </section>

        {/* Articles */}
        <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid gap-6 sm:gap-8">
              {currentArticles.map((article) => (
                <article
                  key={article.id}
                  className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden"
                >
                  <div className="p-8">
                    <div className="flex flex-wrap items-center gap-3 mb-4">
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

                    <h2 className="mb-3 hover:text-orange-600 transition-colors text-2xl">
                      <Link to={`/aktuality/${article.id}`}>{article.title}</Link>
                    </h2>

                    <p className="text-slate-700 mb-4 leading-relaxed">
                      {article.excerpt}
                    </p>

                    <Link
                      to={`/aktuality/${article.id}`}
                      className="inline-flex items-center gap-2 text-orange-600 hover:text-orange-700 transition-colors"
                    >
                      Číst více
                      <ArrowRight size={16} />
                    </Link>
                  </div>
                </article>
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex items-center justify-center gap-2 mt-12">
                <button
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  className="p-2 rounded-lg border border-slate-300 hover:bg-slate-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  aria-label="Předchozí stránka"
                >
                  <ChevronLeft size={20} />
                </button>

                <div className="flex gap-2">
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <button
                      key={page}
                      onClick={() => handlePageChange(page)}
                      className={`px-4 py-2 rounded-lg transition-colors ${
                        currentPage === page
                          ? 'bg-orange-600 text-white'
                          : 'border border-slate-300 hover:bg-slate-100'
                      }`}
                    >
                      {page}
                    </button>
                  ))}
                </div>

                <button
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className="p-2 rounded-lg border border-slate-300 hover:bg-slate-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  aria-label="Další stránka"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            )}
          </div>
        </section>
      </div>
    </>
  );
}