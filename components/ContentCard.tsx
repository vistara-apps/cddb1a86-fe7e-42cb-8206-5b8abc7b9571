import { ContentSuggestion } from '@/lib/types';
import { formatDate } from '@/lib/utils';
import { ExternalLink, Newspaper, Rss, Headphones } from 'lucide-react';

interface ContentCardProps {
  content: ContentSuggestion;
  onRead: () => void;
}

const typeIcons = {
  News: Newspaper,
  Blog: Rss,
  Podcast: Headphones,
};

const typeColors = {
  News: 'bg-red-100 text-red-800',
  Blog: 'bg-green-100 text-green-800',
  Podcast: 'bg-purple-100 text-purple-800',
};

export function ContentCard({ content, onRead }: ContentCardProps) {
  const Icon = typeIcons[content.contentType];
  const colorClass = typeColors[content.contentType];

  return (
    <div className="card animate-fade-in hover:shadow-lg transition-shadow duration-200">
      <div className="flex items-start space-x-4">
        {/* Icon */}
        <div className="flex-shrink-0">
          <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
            <Icon className="w-6 h-6 text-gray-600" />
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between mb-2">
            <h3 className="text-lg font-semibold text-gray-900 line-clamp-2">
              {content.contentTitle}
            </h3>
          </div>

          {/* Type and Relevance */}
          <div className="flex items-center space-x-2 mb-3">
            <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${colorClass}`}>
              {content.contentType}
            </span>
            <div className="flex items-center">
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    className={`w-2 h-2 rounded-full ${
                      i < Math.round(content.relevanceScore * 5)
                        ? 'bg-yellow-400'
                        : 'bg-gray-200'
                    }`}
                  />
                ))}
              </div>
              <span className="text-xs text-gray-500 ml-2">
                {Math.round(content.relevanceScore * 100)}% match
              </span>
            </div>
          </div>

          {/* Summary */}
          <p className="text-sm text-gray-600 mb-3 line-clamp-2">
            {content.summary}
          </p>

          {/* Date */}
          <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
            <span>{formatDate(content.publishedAt)}</span>
          </div>

          {/* Read Button */}
          <button
            onClick={onRead}
            className="btn-primary w-full flex items-center justify-center space-x-2"
          >
            <ExternalLink className="w-4 h-4" />
            <span>Read {content.contentType}</span>
          </button>
        </div>
      </div>
    </div>
  );
}
