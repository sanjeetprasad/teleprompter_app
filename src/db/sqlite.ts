import * as SQLite from 'expo-sqlite';

export const db = SQLite.openDatabaseSync('teleprompter.db');

export function initDb() {
  db.execSync(`
    CREATE TABLE IF NOT EXISTS scripts (
      id TEXT PRIMARY KEY NOT NULL,
      title TEXT NOT NULL,
      content TEXT NOT NULL,
      folderId TEXT,
      createdAt TEXT NOT NULL,
      updatedAt TEXT NOT NULL,
      isFavorite INTEGER NOT NULL,
      wordCount INTEGER NOT NULL,
      estimatedDuration INTEGER NOT NULL
    );
  `);
}
