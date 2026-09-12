import * as SQLite from 'expo-sqlite';
import { ALL_TABLES } from './shema';

const DB_NAME = 'cajanegra.db';

let dbInstance: SQLite.SQLiteDatabase | null = null;

export async function getDatabase(): Promise<SQLite.SQLiteDatabase> {
    if (dbInstance) return dbInstance;

    dbInstance = await SQLite.openDatabaseAsync(DB_NAME);
    return dbInstance;
};

export async function initDatabase(): Promise<void> {
    const db = await getDatabase();

    for (const statement of ALL_TABLES) {
        await db.execAsync(statement);
    }

    console.log('Base de datos inicializada correctamente');
};