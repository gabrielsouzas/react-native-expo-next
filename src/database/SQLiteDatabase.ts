import * as SQLite from 'expo-sqlite/next';

export const db = SQLite.openDatabaseSync('carservicedb.sqlite');

// Funcionando
export const executeTransaction = (
  sql: string,
  values?: SQLite.SQLiteBindParams
): Promise<unknown> => {
  return new Promise<unknown>((resolve, reject) => {
    try {
      const allRows = db.getAllSync(sql, values || []);
      resolve(allRows);
    } catch (error) {
      console.log(error);
      reject(error);
    }
  });
};

// Não testado
export const bulkTransaction = (sql: string): Promise<void> => {
  return new Promise<void>((resolve, reject) => {
    try {
      db.execSync(sql);
      resolve();
    } catch (error) {
      reject(error);
    }
  });
};

// Funcionando
export const writeTransaction = (
  sql: string,
  params?: SQLite.SQLiteBindParams
): Promise<SQLite.SQLiteRunResult> => {
  return new Promise<SQLite.SQLiteRunResult>((resolve, reject) => {
    try {
      const result = db.runSync(sql, params || []);
      resolve(result);
    } catch (error) {
      reject(error);
    }
  });
};
