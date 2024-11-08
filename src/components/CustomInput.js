import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const CustomInput = ({ iconName, placeholder, value, setValue, secureTextEntry }) => {
  return (
    <View style={styles.container}>
      <Ionicons name={iconName} size={20} color="gray" />
      <TextInput
        placeholder={placeholder}
        value={value}
        onChangeText={setValue}
        secureTextEntry={secureTextEntry}
        style={styles.input}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
    marginVertical: 5,
  },
  input: {
    marginLeft: 10,
    flex: 1,
  },
});

export default CustomInput;
