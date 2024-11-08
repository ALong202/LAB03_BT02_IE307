// src/SettingsContext.js
import React, { createContext, useState, useEffect } from 'react';
import { db } from '../database/database';
const SettingsContext = createContext();

const SettingsProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);
  const [fontSize, setFontSize] = useState(16);

  const updateDarkMode = (newDarkModeValue) => {
    setDarkMode(newDarkModeValue);
    try {
      db.transaction((tx) => {
        tx.executeSql(
          'INSERT OR REPLACE INTO settings (id, darkMode, fontSize) VALUES (1, ?, ?)',
          [newDarkModeValue ? 1 : 0, fontSize],
          () => {
            console.log("Dark mode updated in settings");
          }
        );
      });
    } catch (error) {
      console.error("Error updating dark mode:", error);
    }
  };

  const updateFontSize = (newFontSizeValue) => {
    setFontSize(newFontSizeValue);
    try {
      db.transaction((tx) => {
        tx.executeSql(
          'INSERT OR REPLACE INTO settings (id, darkMode, fontSize) VALUES (1, ?, ?)',
          [darkMode ? 1 : 0, newFontSizeValue],
          () => {
            console.log("Font size updated in settings");
          }
        );
      });
    } catch (error) {
      console.error("Error updating font size:", error);
    }
  };

  useEffect(() => {
    const fetchDataFromDatabase = () => {
      try {
        db.transaction((tx) => {
          tx.executeSql('SELECT * FROM settings WHERE id = 1', [], (tx, results) => {
            if (results.rows.length > 0) {
              const { darkMode, fontSize } = results.rows.item(0);
              setDarkMode(darkMode === 1);
              setFontSize(fontSize || 16);
            } else {
              setDarkMode(false);
              setFontSize(16);
            }
          });
        });
      } catch (error) {
        console.error("Error fetching settings from database:", error);
      }
    };

    fetchDataFromDatabase(); // Fetch on mount only
  }, []);

  return (
    <SettingsContext.Provider
      value={{ darkMode, fontSize, updateDarkMode, updateFontSize }}
    >
      {children}
    </SettingsContext.Provider>
  );
};

export { SettingsContext, SettingsProvider };
