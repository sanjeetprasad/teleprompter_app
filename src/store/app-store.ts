import { create } from 'zustand';
import { demoRecordings, demoScripts, demoUser, dummySubscription, sampleFolders } from '@/data/demo-data';
import { Folder, Recording, Script, User } from '@/models/types';
import { calcEstimatedDuration, calcWordCount } from '@/utils/script';

interface AppState {
  seenOnboarding: boolean;
  user: User;
  scripts: Script[];
  folders: Folder[];
  recordings: Recording[];
  selectedScriptId?: string;
  subscriptionActive: boolean;
  completeOnboarding: () => void;
  createScript: () => string;
  updateScript: (id: string, patch: Partial<Pick<Script, 'title' | 'content' | 'folderId' | 'isFavorite'>>) => void;
  deleteScript: (id: string) => void;
  duplicateScript: (id: string) => void;
  createFolder: (name: string) => void;
  moveScript: (scriptId: string, folderId: string) => void;
  togglePremium: () => void;
}

export const useAppStore = create<AppState>((set, get) => ({
  seenOnboarding: false,
  user: demoUser,
  scripts: demoScripts,
  folders: sampleFolders,
  recordings: demoRecordings,
  selectedScriptId: demoScripts[0]?.id,
  subscriptionActive: dummySubscription.isActive,
  completeOnboarding: () => set({ seenOnboarding: true }),
  createScript: () => {
    const id = `script-${Date.now()}`;
    const script: Script = {
      id,
      title: 'Untitled Script',
      content: '',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      isFavorite: false,
      wordCount: 0,
      estimatedDuration: 0,
    };
    set((state) => ({ scripts: [script, ...state.scripts], selectedScriptId: id }));
    return id;
  },
  updateScript: (id, patch) =>
    set((state) => ({
      scripts: state.scripts.map((script) => {
        if (script.id !== id) return script;
        const content = patch.content ?? script.content;
        const wordCount = calcWordCount(content);
        return {
          ...script,
          ...patch,
          wordCount,
          estimatedDuration: calcEstimatedDuration(wordCount),
          updatedAt: new Date().toISOString(),
        };
      }),
    })),
  deleteScript: (id) => set((state) => ({ scripts: state.scripts.filter((script) => script.id !== id) })),
  duplicateScript: (id) => {
    const target = get().scripts.find((s) => s.id === id);
    if (!target) return;
    const clone: Script = {
      ...target,
      id: `script-${Date.now()}`,
      title: `${target.title} (Copy)`,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    set((state) => ({ scripts: [clone, ...state.scripts] }));
  },
  createFolder: (name) =>
    set((state) => ({
      folders: [...state.folders, { id: `folder-${Date.now()}`, name, createdAt: new Date().toISOString() }],
    })),
  moveScript: (scriptId, folderId) => get().updateScript(scriptId, { folderId }),
  togglePremium: () =>
    set((state) => ({
      subscriptionActive: !state.subscriptionActive,
      user: { ...state.user, planType: state.subscriptionActive ? 'free' : 'premium' },
    })),
}));
