export class SyncService {
  async syncNow() {
    return { syncedAt: new Date().toISOString(), conflicts: 0 };
  }
}

export const syncService = new SyncService();
