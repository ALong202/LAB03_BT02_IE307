//src\screens\SignupScreen.js
import React, { useState, useContext } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';
import { AuthContext } from '../context/AuthContext';

const SignupScreen = ({ navigation }) => {
  const { signup } = useContext(AuthContext);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
        <View style={styles.header}>
        <Image source={{
          uri: 'https://www.scorchsoft.com/public/capabilities/head/react-native-logo-square.webp'}} style={styles.LogoImage} />
        <Text style={styles.logoText}>Welcome</Text>
      </View>
      <CustomInput
        iconName="person"
        placeholder="Enter username"
        value={username}
        setValue={setUsername}
      />
      <CustomInput
        iconName="mail"
        placeholder="Enter email"
        value={email}
        setValue={setEmail}
      />
      <CustomInput
        iconName="lock-closed"
        placeholder="Enter password"
        value={password}
        setValue={setPassword}
        secureTextEntry
      />
      <CustomInput
        iconName="lock-closed"
        placeholder="Confirm password"
        value={password}
        setValue={setPassword}
        secureTextEntry
      />
      <CustomButton title="Signup" onPress={() => signup(username, email, password)} />
        {/* Sign Up Link */}
        <View style={styles.txtLogin}>
          <Text style={{ fontSize: 16 }}>Already have an account? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={styles.linkText2}>Login now!</Text>
          </TouchableOpacity>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    padding: 20,
    
  },
  LogoImage: {
    width: 90,
    height: 90,
    marginTop: 30,
    borderRadius: "50%",
    objectFit: "cover",
  },
  logoText: {
    color: '#000',
    fontSize: 20,
    //textAlign: 'center',
  },
  linkText: {
    color: '#CD5C5C',
    marginTop: 2,
    textAlign: 'right',
    fontSize: 14,
  },
  linkText2: {
    color: '#007bff',
    marginTop: 2,
    textAlign: 'right',
    fontSize: 16,
    fontWeight: 'bold'
  },
  header: {
    alignItems: 'center',
    marginVertical: 20,
  },
  txtLogin: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'baseline',
    marginTop: 15,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
});

export default SignupScreen;
