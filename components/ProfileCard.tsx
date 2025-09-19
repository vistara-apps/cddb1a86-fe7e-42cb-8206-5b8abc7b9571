import { User, PracticePartner } from '@/lib/types';
import { getProficiencyColor, cn } from '@/lib/utils';
import { MapPin, Clock, Heart } from 'lucide-react';

interface ProfileCardProps {
  variant: 'user' | 'partner';
  data: User | PracticePartner;
  onConnect?: () => void;
  showConnectButton?: boolean;
}

export function ProfileCard({ variant, data, onConnect, showConnectButton = false }: ProfileCardProps) {
  const isPartner = variant === 'partner';
  const partner = isPartner ? data as PracticePartner : null;
  const user = !isPartner ? data as User : null;

  return (
    <div className="card animate-fade-in">
      <div className="flex items-start space-x-4">
        {/* Avatar */}
        <div className="flex-shrink-0">
          <img
            src={data.avatar || 'https://via.placeholder.com/60x60?text=User'}
            alt={data.displayName}
            className="w-15 h-15 rounded-full object-cover"
          />
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-lg font-semibold text-gray-900 truncate">
              {data.displayName}
            </h3>
            {partner?.isNative && (
              <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-accent text-white">
                Native
              </span>
            )}
          </div>

          {/* Proficiency Level */}
          <div className="mb-3">
            <span className={cn(
              'inline-flex items-center px-2 py-1 rounded-full text-xs font-medium',
              getProficiencyColor(data.proficiencyLevel)
            )}>
              {data.proficiencyLevel}
            </span>
          </div>

          {/* Bio */}
          {(partner?.bio || user?.bio) && (
            <p className="text-sm text-gray-600 mb-3 line-clamp-2">
              {partner?.bio || user?.bio}
            </p>
          )}

          {/* Interests */}
          <div className="mb-3">
            <div className="flex flex-wrap gap-1">
              {data.interests.slice(0, 3).map((interest) => (
                <span
                  key={interest}
                  className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-gray-100 text-gray-700"
                >
                  <Heart className="w-3 h-3 mr-1" />
                  {interest}
                </span>
              ))}
              {data.interests.length > 3 && (
                <span className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-gray-100 text-gray-700">
                  +{data.interests.length - 3} more
                </span>
              )}
            </div>
          </div>

          {/* Availability (for partners) */}
          {partner && (
            <div className="mb-3">
              <div className="flex items-center text-sm text-gray-600">
                <Clock className="w-4 h-4 mr-1" />
                <span>{partner.availability.join(', ')}</span>
              </div>
            </div>
          )}

          {/* Subscription Status (for user) */}
          {user && (
            <div className="mb-3">
              <span className={cn(
                'inline-flex items-center px-2 py-1 rounded-full text-xs font-medium',
                user.subscriptionStatus === 'Premium'
                  ? 'bg-yellow-100 text-yellow-800'
                  : 'bg-gray-100 text-gray-700'
              )}>
                {user.subscriptionStatus}
              </span>
            </div>
          )}

          {/* Connect Button */}
          {showConnectButton && onConnect && (
            <button
              onClick={onConnect}
              className="btn-primary w-full mt-2"
            >
              Connect
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
