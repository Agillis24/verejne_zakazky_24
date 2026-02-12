import { Lock, Play } from 'lucide-react';
import { Link } from 'react-router';
import { Video } from '../data/videos';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface VideoCardProps {
  video: Video;
}

export function VideoCard({ video }: VideoCardProps) {
  return (
    <Link
      to={`/video/${video.id}`}
      className="group relative bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
    >
      <div className="relative aspect-video overflow-hidden bg-slate-200">
        <ImageWithFallback
          src={getVideoThumbnail(video.thumbnail)}
          alt={video.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        
        {video.isPremium ? (
          <div className="absolute top-3 right-3 px-3 py-1 bg-orange-600 text-white text-sm rounded-full flex items-center gap-1.5">
            <Lock size={14} />
            Premium
          </div>
        ) : (
          <div className="absolute top-3 right-3 px-3 py-1 bg-emerald-600 text-white text-sm rounded-full">
            Free
          </div>
        )}

        <div className="absolute bottom-3 left-3 text-white text-sm font-medium">
          {video.duration}
        </div>

        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
          <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center">
            {video.isPremium ? (
              <Lock size={24} className="text-orange-600" />
            ) : (
              <Play size={24} className="text-slate-900" />
            )}
          </div>
        </div>
      </div>

      <div className="p-5">
        <div className="text-sm text-orange-600 mb-2">{video.category}</div>
        <h3 className="mb-2 line-clamp-2 min-h-[3rem]">{video.title}</h3>
        <p className="text-sm text-slate-600 line-clamp-2 mb-4">
          {video.description}
        </p>

        {video.isPremium && (
          <div className="w-full px-4 py-2 bg-orange-600 text-white rounded-lg group-hover:bg-orange-700 transition-colors text-sm text-center">
            Zobrazit detail
          </div>
        )}
      </div>
    </Link>
  );
}

function getVideoThumbnail(thumbnail: string): string {
  const thumbnails: Record<string, string> = {
    'legal documents': 'https://images.unsplash.com/photo-1659355894099-b2c2b2884322?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsZWdhbCUyMGRvY3VtZW50cyUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NzA4NDE4NzZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    'business meeting': 'https://images.unsplash.com/photo-1606836591695-4d58a73eba1e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG1lZXRpbmd8ZW58MXx8fHwxNzcwNzQyNjcwfDA&ixlib=rb-4.1.0&q=80&w=1080',
    'office documents': 'https://images.unsplash.com/photo-1583521214690-73421a1829a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvZmZpY2UlMjBkb2N1bWVudHN8ZW58MXx8fHwxNzcwODQxODc3fDA&ixlib=rb-4.1.0&q=80&w=1080',
    'courthouse architecture': 'https://images.unsplash.com/photo-1619806677949-cbae91e82cea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3VydGhvdXNlJTIwYXJjaGl0ZWN0dXJlfGVufDF8fHx8MTc3MDgyNjk5OHww&ixlib=rb-4.1.0&q=80&w=1080',
    'data analysis': 'https://images.unsplash.com/photo-1666875753105-c63a6f3bdc86?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwYW5hbHlzaXN8ZW58MXx8fHwxNzcwODQxODc3fDA&ixlib=rb-4.1.0&q=80&w=1080',
    'contract signing': 'https://images.unsplash.com/photo-1603796846097-bee99e4a601f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb250cmFjdCUyMHNpZ25pbmd8ZW58MXx8fHwxNzcwODQxODc4fDA&ixlib=rb-4.1.0&q=80&w=1080',
  };
  return thumbnails[thumbnail] || thumbnails['legal documents'];
}