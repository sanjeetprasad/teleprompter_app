import { Folder, Recording, Script, Subscription, User } from '@/models/types';
import { calcEstimatedDuration, calcWordCount } from '@/utils/script';

export const sampleFolders: Folder[] = [
  { id: 'folder-1', name: 'YouTube Shorts', createdAt: '2026-03-20T08:00:00Z' },
  { id: 'folder-2', name: 'Coaching Sessions', createdAt: '2026-03-18T08:00:00Z' },
  { id: 'folder-3', name: 'Sunday Talks', createdAt: '2026-03-15T08:00:00Z' },
];

const scriptBodies = [
  'Welcome back creators. Today I will show a three step hook framework to increase watch time in short videos.',
  'Take one deep breath. Start with gratitude. Name one win from yesterday and one focus for today.',
  'When presenting a proposal, start with the problem, then show the cost of inaction, and then present your solution.',
  'If your audience is distracted, slow down your pace and ask one reflective question before your main point.',
  'Today we are learning to tell clear stories with a beginning, conflict, and practical resolution.',
];

export const demoScripts: Script[] = scriptBodies.map((content, index) => {
  const wordCount = calcWordCount(content);
  return {
    id: `script-${index + 1}`,
    title: `Demo Script ${index + 1}`,
    content,
    folderId: sampleFolders[index % 3].id,
    createdAt: `2026-03-${10 + index}T09:30:00Z`,
    updatedAt: `2026-03-${20 + index}T11:45:00Z`,
    isFavorite: index < 2,
    wordCount,
    estimatedDuration: calcEstimatedDuration(wordCount),
  };
});

export const demoRecordings: Recording[] = [
  {
    id: 'rec-1',
    scriptId: 'script-1',
    fileUrl: 'file:///recordings/script-1.mp4',
    thumbnailUrl: 'file:///thumbnails/script-1.jpg',
    duration: 58,
    createdAt: '2026-03-22T12:45:00Z',
  },
];

export const settingsPreset: User['settings'] = {
  theme: 'dark',
  defaultFontSize: 36,
  defaultScrollSpeed: 1.2,
  mirrorModeDefault: false,
  countdownDuration: 3,
  saveToDevice: true,
  watermarkEnabled: true,
  language: 'en-US',
};

export const demoUser: User = {
  id: 'user-1',
  name: 'Alex Creator',
  email: 'alex@demo.app',
  planType: 'free',
  storageUsed: 1.8,
  settings: settingsPreset,
};

export const paywallConfig = {
  title: 'Teleprompter Pro Premium',
  subtitle: 'Unlock all premium features',
  freeTrialDays: 7,
  primaryCta: 'Start My Free Trial',
  secondaryCta: 'All Plans',
  features: [
    'Voice scrolling mode',
    '30 GB cloud storage',
    'Sync across devices',
    'Auto subtitles',
    'Unlimited recording with no watermark',
  ],
  plans: [
    { id: 'monthly', title: 'Monthly', price: '$12.99/mo' },
    { id: 'yearly', title: 'Yearly', price: '$79.99/yr' },
  ],
};

export const dummySubscription: Subscription = {
  id: 'sub-1',
  plan: 'monthly',
  trialStartDate: '2026-03-25T00:00:00Z',
  renewalDate: '2026-04-01T00:00:00Z',
  isActive: false,
};
