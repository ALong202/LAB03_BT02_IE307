// src/screens/EditNote.js
import React, { useState, useContext } from 'react';
import { View, TextInput, Alert, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { updateNote } from '../database/database';
import { SettingsContext } from '../context/SettingsContext';

const EditNote = ({ route, navigation }) => {
  const { note } = route.params; // Lấy dữ liệu ghi chú từ params
  const [title, setTitle] = useState(note.title);
  const [content, setContent] = useState(note.content);
  const { darkMode, fontSize } = useContext(SettingsContext);

  const handleUpdate = () => {
    if (!title.trim()) {
      Alert.alert('Warning', 'Please enter a title!');
      return;
    }
    // Cập nhật ghi chú trong CSDL và quay về trang chủ
    updateNote(note.id, title, content, () => navigation.goBack());
  };

  return (
    <View style={[styles.container, { backgroundColor: darkMode ? '#333' : '#fff' }]}>
      
      <TextInput
        placeholder="Enter title"
        placeholderTextColor={darkMode ? 'rgba(255, 255, 255, 0.5)' : 'rgba(0, 0, 0, 0.5)'}
        value={title}
        onChangeText={(text) => setTitle(text)}
        style={[styles.textInput, { color: darkMode ? 'white' : 'black' }]}
      />
      <TextInput
        placeholder="Enter content"
        placeholderTextColor={darkMode ? 'rgba(255, 255, 255, 0.5)' : 'rgba(0, 0, 0, 0.5)'}
        value={content}
        onChangeText={(text) => setContent(text)}
        style={[styles.textInput, { color: darkMode ? 'white' : 'black' }]}
        multiline
      />




      <View style={styles.iconButton}>
        {/* Biểu tượng hủy */}
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="close-circle" size={fontSize + 30} color={"red"} />
        </TouchableOpacity>

        {/* Biểu tượng lưu */}
        <TouchableOpacity onPress={handleUpdate}>
          <Ionicons name="checkmark-circle" size={fontSize + 30} color={"green"} />
        </TouchableOpacity>
      </View>



      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  iconButton: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    width: '80%',
    marginBottom: 20,
    padding: 10,
    color: '#000',
  },
});

export default EditNote;
