'use client';

import { useState } from 'react';
import { AppShell } from '@/components/AppShell';
import { ProfileCard } from '@/components/ProfileCard';
import { ResourceCard } from '@/components/ResourceCard';
import { ContentCard } from '@/components/ContentCard';
import { MediaCard } from '@/components/MediaCard';
import { Button } from '@/components/Button';
import { Input } from '@/components/Input';
import { Dropdown } from '@/components/Dropdown';
import { 
  mockUser, 
  mockPartners, 
  mockResources, 
  mockContent, 
  mockMedia 
} from '@/lib/mock-data';
import { PROFICIENCY_LEVELS, INTERESTS, SUBSCRIPTION_FEATURES } from '@/lib/constants';
import { Search, Filter, Crown, Star } from 'lucide-react';

export default function Home() {
  const [activeTab, setActiveTab] = useState('partners');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProficiency, setSelectedProficiency] = useState<string>('');
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);
  const [showFilters, setShowFilters] = useState(false);

  const proficiencyOptions = PROFICIENCY_LEVELS.map(level => ({
    value: level,
    label: level,
  }));

  const interestOptions = INTERESTS.map(interest => ({
    value: interest,
    label: interest,
  }));

  const filteredPartners = mockPartners.filter(partner => {
    const matchesSearch = partner.displayName.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         partner.bio.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesProficiency = !selectedProficiency || partner.proficiencyLevel === selectedProficiency;
    const matchesInterests = selectedInterests.length === 0 || 
                           selectedInterests.some(interest => partner.interests.includes(interest));
    
    return matchesSearch && matchesProficiency && matchesInterests;
  });

  const handleConnect = (partnerId: string) => {
    // In a real app, this would send a connection request
    alert(`Connection request sent to partner ${partnerId}!`);
  };

  const handleResourceAccess = (resourceId: string) => {
    // In a real app, this would open the resource or show upgrade prompt
    const resource = mockResources.find(r => r.resourceId === resourceId);
    if (resource?.isPremium && mockUser.subscriptionStatus === 'Free') {
      alert('This resource requires a Premium subscription. Upgrade to access!');
    } else {
      alert(`Opening resource: ${resource?.title}`);
    }
  };

  const handleContentRead = (contentId: string) => {
    // In a real app, this would open the content in a new tab or embedded view
    const content = mockContent.find(c => c.suggestionId === contentId);
    alert(`Opening content: ${content?.contentTitle}`);
  };

  const handleMediaWatch = (mediaId: string) => {
    // In a real app, this would open the media player or external link
    const media = mockMedia.find(m => m.mediaId === mediaId);
    alert(`Opening media: ${media?.title}`);
  };

  const renderPartnersTab = () => (
    <div className="space-y-6">
      {/* Search and Filters */}
      <div className="space-y-4">
        <div className="flex space-x-2">
          <div className="flex-1">
            <Input
              placeholder="Search partners..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
          </div>
          <Button
            variant="outline"
            onClick={() => setShowFilters(!showFilters)}
          >
            <Filter className="w-4 h-4" />
          </Button>
        </div>

        {showFilters && (
          <div className="card space-y-4">
            <Dropdown
              label="Proficiency Level"
              placeholder="Any level"
              options={proficiencyOptions}
              value={selectedProficiency}
              onChange={(value) => setSelectedProficiency(value as string)}
            />
            <Dropdown
              label="Interests"
              placeholder="Select interests"
              options={interestOptions}
              value={selectedInterests}
              onChange={(value) => setSelectedInterests(value as string[])}
              variant="multiSelect"
            />
          </div>
        )}
      </div>

      {/* Partners List */}
      <div className="space-y-4">
        {filteredPartners.map((partner) => (
          <ProfileCard
            key={partner.partnerId}
            variant="partner"
            data={partner}
            showConnectButton={true}
            onConnect={() => handleConnect(partner.partnerId)}
          />
        ))}
        {filteredPartners.length === 0 && (
          <div className="text-center py-8">
            <p className="text-gray-500">No partners found matching your criteria.</p>
          </div>
        )}
      </div>
    </div>
  );

  const renderResourcesTab = () => (
    <div className="space-y-6">
      {/* Premium Upgrade Banner */}
      {mockUser.subscriptionStatus === 'Free' && (
        <div className="card bg-gradient-to-r from-yellow-50 to-yellow-100 border-yellow-200">
          <div className="flex items-center space-x-3">
            <Crown className="w-8 h-8 text-yellow-600" />
            <div className="flex-1">
              <h3 className="font-semibold text-yellow-900">Upgrade to Premium</h3>
              <p className="text-sm text-yellow-700">
                Access all resources and unlock advanced features
              </p>
            </div>
            <Button variant="primary" size="sm">
              Upgrade
            </Button>
          </div>
        </div>
      )}

      {/* Resources List */}
      <div className="space-y-4">
        {mockResources.map((resource) => (
          <ResourceCard
            key={resource.resourceId}
            resource={resource}
            userSubscription={mockUser.subscriptionStatus}
            onAccess={() => handleResourceAccess(resource.resourceId)}
          />
        ))}
      </div>
    </div>
  );

  const renderContentTab = () => (
    <div className="space-y-6">
      {/* Personalization Notice */}
      <div className="card bg-blue-50 border-blue-200">
        <div className="flex items-center space-x-3">
          <Star className="w-6 h-6 text-blue-600" />
          <div>
            <h3 className="font-semibold text-blue-900">Personalized for You</h3>
            <p className="text-sm text-blue-700">
              Content curated based on your interests: {mockUser.interests.join(', ')}
            </p>
          </div>
        </div>
      </div>

      {/* Content List */}
      <div className="space-y-4">
        {mockContent.map((content) => (
          <ContentCard
            key={content.suggestionId}
            content={content}
            onRead={() => handleContentRead(content.suggestionId)}
          />
        ))}
      </div>
    </div>
  );

  const renderMediaTab = () => (
    <div className="space-y-6">
      {/* Media Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {mockMedia.map((media) => (
          <MediaCard
            key={media.mediaId}
            media={media}
            onWatch={() => handleMediaWatch(media.mediaId)}
          />
        ))}
      </div>
    </div>
  );

  const renderProfileTab = () => (
    <div className="space-y-6">
      {/* User Profile */}
      <ProfileCard
        variant="user"
        data={mockUser}
      />

      {/* Subscription Info */}
      <div className="card">
        <h3 className="text-heading mb-4">Subscription Benefits</h3>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="font-medium">Current Plan</span>
            <span className={`px-3 py-1 rounded-full text-sm font-medium ${
              mockUser.subscriptionStatus === 'Premium'
                ? 'bg-yellow-100 text-yellow-800'
                : 'bg-gray-100 text-gray-700'
            }`}>
              {mockUser.subscriptionStatus}
            </span>
          </div>
          
          <div className="space-y-2">
            {SUBSCRIPTION_FEATURES[mockUser.subscriptionStatus].map((feature, index) => (
              <div key={index} className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <span className="text-sm text-gray-700">{feature}</span>
              </div>
            ))}
          </div>

          {mockUser.subscriptionStatus === 'Free' && (
            <Button variant="primary" className="w-full mt-4">
              Upgrade to Premium - $5/month
            </Button>
          )}
        </div>
      </div>
    </div>
  );

  const renderTabContent = () => {
    switch (activeTab) {
      case 'partners':
        return renderPartnersTab();
      case 'resources':
        return renderResourcesTab();
      case 'content':
        return renderContentTab();
      case 'media':
        return renderMediaTab();
      case 'profile':
        return renderProfileTab();
      default:
        return renderPartnersTab();
    }
  };

  return (
    <AppShell activeTab={activeTab} onTabChange={setActiveTab}>
      {renderTabContent()}
    </AppShell>
  );
}
