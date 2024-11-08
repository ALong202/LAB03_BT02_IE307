// src/screens/SettingScreen.js
import React, { useContext } from 'react';
import { View, Text, Switch, StyleSheet } from 'react-native';
import { SettingsContext } from '../context/SettingsContext';
import Slider from '@react-native-community/slider';

const SettingScreen = () => {
  const { darkMode, fontSize, updateDarkMode, updateFontSize } = useContext(SettingsContext);

  return (
    <View style={[styles.container, { backgroundColor: darkMode ? '#333' : '#fff' }]}>
      <Text style={[styles.label, { color: darkMode ? '#fff' : '#000' }]}>Dark Mode</Text>
      <Switch
        value={darkMode}
        onValueChange={updateDarkMode}
        trackColor={{ false: '#767577', true: '#81b0ff' }}
        thumbColor={darkMode ? '#f5dd4b' : '#f4f3f4'}
      />

      <Text style={[styles.label, { color: darkMode ? '#fff' : '#000' }]}>Font Size</Text>
      <Text style={[styles.fontSizeValue, { color: darkMode ? '#fff' : '#000' }]}>{fontSize}</Text>
      <Slider
        style={styles.slider}
        minimumValue={10}
        maximumValue={30}
        step={1}
        value={fontSize}
        onValueChange={updateFontSize}
        minimumTrackTintColor="#81b0ff"
        maximumTrackTintColor="#000000"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    fontSize: 18,
    marginVertical: 10,
  },
  fontSizeValue: {
    fontSize: 16,
    marginVertical: 5,
  },
  slider: {
    width: '80%',
    height: 40,
  },
});

export default SettingScreen;
