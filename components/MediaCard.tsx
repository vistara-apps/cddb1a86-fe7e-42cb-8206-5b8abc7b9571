import { MediaItem } from '@/lib/types';
import { cn } from '@/lib/utils';
import { Play, Clock, Subtitles } from 'lucide-react';

interface MediaCardProps {
  media: MediaItem;
  onWatch: () => void;
}

const typeColors = {
  Film: 'bg-blue-100 text-blue-800',
  Series: 'bg-green-100 text-green-800',
  YouTube: 'bg-red-100 text-red-800',
};

export function MediaCard({ media, onWatch }: MediaCardProps) {
  const colorClass = typeColors[media.type];

  return (
    <div className="card animate-fade-in hover:shadow-lg transition-shadow duration-200 overflow-hidden">
      {/* Thumbnail */}
      <div className="relative mb-4">
        <img
          src={media.thumbnailUrl}
          alt={media.title}
          className="w-full h-48 object-cover rounded-md"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-200">
          <button
            onClick={onWatch}
            className="bg-white bg-opacity-90 rounded-full p-3 hover:bg-opacity-100 transition-all duration-200"
          >
            <Play className="w-6 h-6 text-gray-900" />
          </button>
        </div>
        {media.subtitleUrl && (
          <div className="absolute top-2 right-2 bg-black bg-opacity-70 rounded-full p-1">
            <Subtitles className="w-4 h-4 text-white" />
          </div>
        )}
      </div>

      {/* Content */}
      <div>
        <div className="flex items-start justify-between mb-2">
          <h3 className="text-lg font-semibold text-gray-900 line-clamp-2">
            {media.title}
          </h3>
        </div>

        {/* Type and Duration */}
        <div className="flex items-center space-x-2 mb-3">
          <span className={cn(
            'inline-flex items-center px-2 py-1 rounded-full text-xs font-medium',
            colorClass
          )}>
            {media.type}
          </span>
          {media.duration && (
            <div className="flex items-center text-xs text-gray-500">
              <Clock className="w-3 h-3 mr-1" />
              {media.duration}
            </div>
          )}
        </div>

        {/* Genres */}
        <div className="flex flex-wrap gap-1 mb-3">
          {media.genre.map((genre) => (
            <span
              key={genre}
              className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-gray-100 text-gray-700"
            >
              {genre}
            </span>
          ))}
        </div>

        {/* Description */}
        <p className="text-sm text-gray-600 mb-4 line-clamp-2">
          {media.description}
        </p>

        {/* Watch Button */}
        <button
          onClick={onWatch}
          className="btn-primary w-full flex items-center justify-center space-x-2"
        >
          <Play className="w-4 h-4" />
          <span>Watch Now</span>
        </button>
      </div>
    </div>
  );
}
