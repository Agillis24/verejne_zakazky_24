import { useParams, Link, Navigate } from 'react-router';
import { Clock, ArrowLeft, ArrowRight, Lock, Play } from 'lucide-react';
import { videos } from '../data/videos';

export function VideoDetail() {
  const { id } = useParams<{ id: string }>();
  const video = videos.find((v) => v.id === id);

  if (!video) {
    return <Navigate to="/" replace />;
  }

  const getVideoThumbnail = (thumbnail: string): string => {
    const thumbnails: Record<string, string> = {
      'legal documents': 'https://images.unsplash.com/photo-1659355894099-b2c2b2884322?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080',
      'business meeting': 'https://images.unsplash.com/photo-1606836591695-4d58a73eba1e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080',
      'office documents': 'https://images.unsplash.com/photo-1583521214690-73421a1829a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080',
      'courthouse architecture': 'https://images.unsplash.com/photo-1619806677949-cbae91e82cea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080',
      'data analysis': 'https://images.unsplash.com/photo-1666875753105-c63a6f3bdc86?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080',
      'contract signing': 'https://images.unsplash.com/photo-1603796846097-bee99e4a601f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080',
    };
    return thumbnails[thumbnail] || thumbnails['legal documents'];
  };

  return (
    <div className="min-h-screen pt-24 sm:pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
      <article className="max-w-4xl mx-auto">
        <Link
          to="/#videa"
          className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-900 transition-colors mb-6 sm:mb-8 text-sm sm:text-base"
        >
          <ArrowLeft size={20} />
          Zpět na videa
        </Link>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="aspect-[16/9] sm:aspect-[21/9] relative overflow-hidden bg-slate-200">
            {video.isPremium ? (
              <>
                <img
                  src={getVideoThumbnail(video.thumbnail)}
                  alt={video.title}
                  className="w-full h-full object-cover opacity-40"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                  <div className="w-24 h-24 bg-orange-600 rounded-full flex items-center justify-center mb-6">
                    <Lock size={48} />
                  </div>
                  <h3 className="text-2xl mb-2">Prémiový obsah</h3>
                  <p className="text-slate-300 mb-6">
                    Toto video je dostupné pouze pro členy na Herohero
                  </p>
                  <a
                    href="https://herohero.co/verejnezakazky"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors"
                  >
                    Získat prémiový přístup
                    <ArrowRight size={20} />
                  </a>
                </div>
              </>
            ) : (
              <>
                <div className="aspect-video rounded-lg overflow-hidden bg-slate-900">
                  <iframe
                    src={video.url}
                    title={video.title}
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </>
            )}
          </div>

          <div className="p-6 sm:p-8">
            <h1 className="mb-4 text-3xl md:text-4xl leading-tight">
              {video.title}
            </h1>

            <p className="text-slate-700 mb-6 leading-relaxed text-base sm:text-lg">
              {video.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://herohero.co/verejnezakazky"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors"
              >
                Sledovat na Herohero
                <ArrowRight size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-200">
          <div className="bg-orange-50 rounded-xl p-8 text-center">
            <h3 className="mb-3 text-xl">
              Další videa a premium obsah na Herohero
            </h3>
            <p className="text-slate-700 mb-6 leading-relaxed">
              Získejte přístup ke kompletní knihovně videopřednášek,
              detailních rozborů a praktických příkladů z oblasti veřejných
              zakázek.
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
      </article>
    </div>
  );
}