// src\screens\AddNote.js
import React, { useState, useContext } from 'react';
import { View, TextInput, Alert, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { addNote } from '../database/database';
import { SettingsContext } from '../context/SettingsContext';
import { useNavigation } from '@react-navigation/native';

const AddNote = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const navigation = useNavigation();
  const { darkMode, fontSize } = useContext(SettingsContext);

  // Hàm xử lý lưu ghi chú
  const handleSave = () => {
    if (!title.trim()) {
      Alert.alert('Warning', 'Please enter a title!'); // Cảnh báo nếu tiêu đề trống
      return;
    }
    // Gọi hàm addNote và quay lại màn hình chính sau khi lưu thành công
    addNote(title, content, () => navigation.goBack());
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
        style={[styles.textInput2, { color: darkMode ? 'white' : 'black' }]}
        multiline
      />

      {/* Khu vực chứa các biểu tượng */}
      <View style={styles.iconButton}>
        {/* Biểu tượng hủy */}
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="close-circle" size={fontSize + 30} color={"red"} />
        </TouchableOpacity>

        {/* Biểu tượng lưu */}
        <TouchableOpacity onPress={handleSave}>
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
    width: '85%',
    marginBottom: 20,
    padding: 10,
    color: '#000',
  },
  textInput2: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    width: '85%',
    marginBottom: 20,
    padding: 10,
    color: '#000',
    height: "40%",
    textAlignVertical: 'top',
  },
});

export default AddNote;
