import { LearningResource } from '@/lib/types';
import { getProficiencyColor, formatDate, cn } from '@/lib/utils';
import { ExternalLink, Lock, BookOpen, Video, FileText, PenTool, Newspaper } from 'lucide-react';

interface ResourceCardProps {
  resource: LearningResource;
  onAccess: () => void;
  userSubscription: 'Free' | 'Premium';
}

const typeIcons = {
  Grammar: BookOpen,
  Vocabulary: FileText,
  Exercise: PenTool,
  Article: Newspaper,
  Video: Video,
};

export function ResourceCard({ resource, onAccess, userSubscription }: ResourceCardProps) {
  const Icon = typeIcons[resource.type];
  const canAccess = !resource.isPremium || userSubscription === 'Premium';

  return (
    <div className="card animate-fade-in hover:shadow-lg transition-shadow duration-200">
      <div className="flex items-start space-x-4">
        {/* Icon */}
        <div className="flex-shrink-0">
          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
            <Icon className="w-6 h-6 text-primary" />
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between mb-2">
            <h3 className="text-lg font-semibold text-gray-900 line-clamp-2">
              {resource.title}
            </h3>
            {resource.isPremium && (
              <Lock className="w-4 h-4 text-yellow-600 flex-shrink-0 ml-2" />
            )}
          </div>

          {/* Type and Difficulty */}
          <div className="flex items-center space-x-2 mb-3">
            <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
              {resource.type}
            </span>
            <span className={cn(
              'inline-flex items-center px-2 py-1 rounded-full text-xs font-medium',
              getProficiencyColor(resource.difficultyLevel)
            )}>
              {resource.difficultyLevel}
            </span>
          </div>

          {/* Description */}
          <p className="text-sm text-gray-600 mb-3 line-clamp-2">
            {resource.description}
          </p>

          {/* Category and Date */}
          <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
            <span>{resource.category}</span>
            <span>{formatDate(resource.createdAt)}</span>
          </div>

          {/* Access Button */}
          <button
            onClick={onAccess}
            disabled={!canAccess}
            className={cn(
              'w-full flex items-center justify-center space-x-2 px-4 py-2 rounded-md transition-colors duration-200',
              canAccess
                ? 'btn-primary'
                : 'bg-gray-100 text-gray-400 cursor-not-allowed'
            )}
          >
            {canAccess ? (
              <>
                <ExternalLink className="w-4 h-4" />
                <span>Access Resource</span>
              </>
            ) : (
              <>
                <Lock className="w-4 h-4" />
                <span>Premium Required</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
