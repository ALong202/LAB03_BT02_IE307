//App.js
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import AppNav from './src/Nav/AppNav'
import { NavigationContainer } from '@react-navigation/native';
import { initDatabase } from './src/database/database';
import { useEffect } from 'react';
import { SettingsProvider } from './src/context/SettingsContext';

//<MainTab/> <AppNav/>
export default function App() {
  useEffect(() => {
    initDatabase(); // Initialize database on app start
  }, []);

  return (
      <SettingsProvider>
        <NavigationContainer>
          <DrawerNav/>
        </NavigationContainer>
      </SettingsProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
