// src/database/database.js
import * as SQLite from 'expo-sqlite/legacy';

export const db = SQLite.openDatabase('notes.db');

export const initDatabase = () => {
  db.transaction(tx => {
    tx.executeSql(
      `CREATE TABLE IF NOT EXISTS notes (id INTEGER PRIMARY KEY NOT NULL, title TEXT NOT NULL, content TEXT);`,
      [],
      () => console.log("Notes table created or already exists."),
      (_, error) => console.log("Error creating notes table:", error)
    );

    tx.executeSql(
      'CREATE TABLE IF NOT EXISTS settings (id INTEGER PRIMARY KEY AUTOINCREMENT, fontSize INTEGER, darkMode INTEGER);',
      [],
      () => console.log("Settings table created or already exists."),
      (_, error) => console.log("Error creating settings table:", error)
    );
  });
};

export const addNote = (title, content, callback) => {
  db.transaction((tx) => {
    tx.executeSql(
      'INSERT INTO notes (title, content) VALUES (?, ?);',
      [title, content],
      (_, result) => callback(result),
      (_, error) => console.log('Error adding note:', error)
    );
  });
};

export const fetchNotes = (successCallback) => {
  db.transaction(tx => {
    tx.executeSql(
      'SELECT * FROM notes;',
      [],
      (_, result) => successCallback(result.rows._array)
    );
  });
};

export const getNotes = (callback) => {
  db.transaction((tx) => {
    tx.executeSql(
      'SELECT * FROM notes;',
      [],
      (_, { rows }) => callback(rows._array),
      (_, error) => console.log('Error fetching notes:', error)
    );
  });
};

export const deleteNote = (id, successCallback) => {
  db.transaction(tx => {
    tx.executeSql(
      'DELETE FROM notes WHERE id = ?;',
      [id],
      (_, result) => successCallback(result)
    );
  });
  
};
export const updateNote = (id, title, content, callback) => {
  db.transaction((tx) => {
    tx.executeSql(
      'UPDATE notes SET title = ?, content = ? WHERE id = ?;',
      [title, content, id],
      (_, result) => callback(result),
      (_, error) => console.log('Error updating note:', error)
    );
  });
};