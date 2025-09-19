export const PROFICIENCY_LEVELS = ['Beginner', 'Intermediate', 'Advanced'] as const;

export const INTERESTS = [
  'Travel',
  'Food & Cooking',
  'Sports',
  'Music',
  'Movies & TV',
  'Books & Literature',
  'Technology',
  'Business',
  'Art & Culture',
  'History',
  'Science',
  'Politics',
  'Fashion',
  'Photography',
  'Gaming',
] as const;

export const PRACTICE_TIMES = [
  'Morning (6-12)',
  'Afternoon (12-18)',
  'Evening (18-24)',
  'Late Night (24-6)',
] as const;

export const RESOURCE_TYPES = [
  'Grammar',
  'Vocabulary',
  'Exercise',
  'Article',
  'Video',
] as const;

export const CONTENT_TYPES = [
  'News',
  'Blog',
  'Podcast',
] as const;

export const MEDIA_TYPES = [
  'Film',
  'Series',
  'YouTube',
] as const;

export const SUBSCRIPTION_FEATURES = {
  Free: [
    'Basic partner matching',
    'Limited resource access',
    '5 connection requests per month',
    'Basic content suggestions',
  ],
  Premium: [
    'Unlimited partner matching',
    'Full resource library access',
    'Unlimited connection requests',
    'Personalized content feed',
    'Advanced filtering options',
    'Priority support',
  ],
};
