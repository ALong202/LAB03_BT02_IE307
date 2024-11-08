import React, { useEffect, useState, useContext } from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet, Alert } from 'react-native';
import { useIsFocused } from '@react-navigation/native';
import { getNotes, deleteNote } from '../database/database';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { SettingsContext } from '../context/SettingsContext';
import {FAB, Provider as PaperProvider, Card, Title, Paragraph } from 'react-native-paper';


const HomeScreen = ({ navigation }) => {
  const [notes, setNotes] = useState([]);
  const isFocused = useIsFocused();
  const { darkMode, fontSize } = useContext(SettingsContext);

  useEffect(() => {
    if (isFocused) {
      getNotes((fetchedNotes) => setNotes(fetchedNotes)); // Lấy tất cả ghi chú từ cơ sở dữ liệu
    }
  }, [isFocused]);

  // Function to delete a note
  const handleDeleteNote = (noteId) => {
    Alert.alert(
      "Delete Note",
      "Are you sure you want to delete this note?",
      [
        { text: "Cancel", style: "cancel" },
        {
          text: "Delete",
          onPress: () => {
            deleteNote(noteId); // Xóa ghi chú từ cơ sở dữ liệu
            setNotes(notes.filter(note => note.id !== noteId)); // Cập nhật danh sách ghi chú
          },
          style: "destructive"
        }
      ]
    );
  };

  const renderNoteItem = ({ item }) => (
    <TouchableOpacity
      style={styles.noteContainer}
      onPress={() => navigation.navigate('EditNote', { note: item })}
    >
      <View style={{ flex: 1 }}>
        <Text style={[styles.noteTitle, { color: darkMode ? '#fff' : '#000', fontSize: fontSize + 2 }]}>{item.title}</Text>
        <Text style={[styles.noteContent, { color: darkMode ? '#bbb' : '#666', fontSize }]}>{item.content}</Text>
      </View>
      <TouchableOpacity onPress={() => handleDeleteNote(item.id)}>
        <Ionicons name="trash-outline" size={24} color="red" />
      </TouchableOpacity>
    </TouchableOpacity>
  );

  return (
    <View style={[styles.container, { backgroundColor: darkMode ? '#333' : '#fff' }]}>
      <Text style={[styles.headerTxt, { color: darkMode ? '#0D92F4' : 'orange', fontSize: fontSize + 5 }]}>Note App</Text>

      <View style={styles.AllNote}>
        <Text style={[styles.contentTxt, { color: darkMode ? '#fff' : '#000', fontSize: fontSize + 5 }]}>All notes</Text>
        <TouchableOpacity onPress={() => navigation.navigate('AddNote')}>
          <Ionicons name="add-circle" size={50} color={darkMode ? "#0D92F4" : "orange"} />
        </TouchableOpacity>
      </View>

      <FlatList
        data={notes}
        renderItem={renderNoteItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  headerTxt: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'orange',
    textAlign: 'center',
    marginBottom: 20,
  },
  noteContainer: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  noteTitle: {
    fontSize: 18,
    fontWeight: 'bold',

  },
  noteContent: {
    fontSize: 16,
    color: '#666',
  },
  AllNote: {
    flexDirection: 'row',
    width: '90%',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  contentTxt: {
    fontSize: 22,
    textAlign: "left",
    fontWeight: "bold",
    marginLeft: 5
  },
  noteContent: {
    width: 50,
    height: 50,
  },

});

export default HomeScreen;
