export type PlanType = 'free' | 'premium';

export interface UserSettings {
  theme: 'dark' | 'light';
  defaultFontSize: number;
  defaultScrollSpeed: number;
  mirrorModeDefault: boolean;
  countdownDuration: number;
  saveToDevice: boolean;
  watermarkEnabled: boolean;
  language: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  planType: PlanType;
  storageUsed: number;
  settings: UserSettings;
}

export interface Script {
  id: string;
  title: string;
  content: string;
  folderId?: string;
  createdAt: string;
  updatedAt: string;
  isFavorite: boolean;
  wordCount: number;
  estimatedDuration: number;
}

export interface Folder {
  id: string;
  name: string;
  createdAt: string;
}

export interface Recording {
  id: string;
  scriptId: string;
  fileUrl: string;
  thumbnailUrl: string;
  duration: number;
  subtitlesUrl?: string;
  createdAt: string;
}

export interface Subscription {
  id: string;
  plan: 'monthly' | 'yearly';
  trialStartDate: string;
  renewalDate: string;
  isActive: boolean;
}
