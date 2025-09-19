export interface User {
  userId: string;
  farcasterId: string;
  displayName: string;
  proficiencyLevel: 'Beginner' | 'Intermediate' | 'Advanced';
  interests: string[];
  preferredPracticeTimes: string[];
  subscriptionStatus: 'Free' | 'Premium';
  avatar?: string;
  bio?: string;
}

export interface PracticePartner {
  partnerId: string;
  userId: string;
  availability: string[];
  interests: string[];
  proficiencyLevel: 'Beginner' | 'Intermediate' | 'Advanced';
  bio: string;
  displayName: string;
  avatar?: string;
  isNative: boolean;
}

export interface LearningResource {
  resourceId: string;
  title: string;
  url: string;
  type: 'Grammar' | 'Vocabulary' | 'Exercise' | 'Article' | 'Video';
  category: string;
  difficultyLevel: 'Beginner' | 'Intermediate' | 'Advanced';
  description: string;
  isPremium: boolean;
  createdAt: string;
}

export interface ContentSuggestion {
  suggestionId: string;
  userId: string;
  contentTitle: string;
  contentType: 'News' | 'Blog' | 'Podcast';
  url: string;
  relevanceScore: number;
  publishedAt: string;
  summary: string;
}

export interface MediaItem {
  mediaId: string;
  title: string;
  url: string;
  type: 'Film' | 'Series' | 'YouTube';
  description: string;
  subtitleUrl?: string;
  thumbnailUrl: string;
  duration?: string;
  genre: string[];
}

export interface PracticeSession {
  sessionId: string;
  partnerId: string;
  userId: string;
  scheduledAt: string;
  status: 'Scheduled' | 'Completed' | 'Cancelled';
  notes?: string;
}

export interface ConnectionRequest {
  requestId: string;
  fromUserId: string;
  toUserId: string;
  message: string;
  status: 'Pending' | 'Accepted' | 'Declined';
  createdAt: string;
}
