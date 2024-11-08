//src\screens\LoginScreen.js
import React, { useState, useContext, useEffect } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';
import { AuthContext } from '../context/AuthContext';

const LoginScreen = ({ navigation }) => {
  const { login, storedCredentials } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Prefill email if passed from ProfileScreen
  useEffect(() => {
    if (storedCredentials) {
      setEmail(storedCredentials.email);
      setPassword(storedCredentials.password);
    }
  }, [storedCredentials]);


  return (
    <View style={styles.container}>
      <View style={styles.header}>
        {/* <Image source={require('../../assets/logoreact.png')} style={styles.LogoImage} /> */}
        <Image source={{
          uri: 'https://www.scorchsoft.com/public/capabilities/head/react-native-logo-square.webp'}} style={styles.LogoImage} />
        <Text style={styles.logoText}>Welcome</Text>
      </View>

      <CustomInput
        iconName="mail"
        placeholder="Email"
        value={email}
        setValue={setEmail}
      />
      <CustomInput
        iconName="lock-closed"
        placeholder="Password"
        value={password}
        setValue={setPassword}
        secureTextEntry
      />


      {/* Forgot Password Link */}
      <TouchableOpacity onPress={() => navigation.navigate("ForgotPassword")}>
        <Text style={styles.linkText}>Forgot password?</Text>
      </TouchableOpacity>

      <CustomButton title="LOG IN" onPress={() => login(email, password)} />

      <Text style={{ marginTop: 10, textAlign: 'center', fontWeight: 'bold', fontSize: 16 }}>Or login with</Text>

      {/* Social Media Login Section */}
      <View style={styles.socialLoginContainer}>
        <TouchableOpacity style={styles.socialButton}>
          <Image source={{
            uri: 'https://freepnglogo.com/images/all_img/facebook-circle-logo-png.png'}} style={styles.socialLogo} />

        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
          <Image source={{
            uri: 'https://cmctelecom.vn/wp-content/uploads/2024/01/png-transparent-google-logo-google-text-trademark-logo.png'}} style={styles.socialLogo} />
        </TouchableOpacity>
      </View>

      {/* Sign Up Link */}
      <View style={styles.txtLogin}>
        <Text style={{ fontSize: 16 }}>Don't have an account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
          <Text style={styles.linkText2}>Sign up here!</Text>
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
    fontSize: 20,
    color: '#000',
    fontWeight: 'bold',
    marginTop: 5,
  },
  header: {
    alignItems: 'center',
    marginVertical: 20,
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
  socialLoginContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 15,
  },
  socialButton: {
    marginHorizontal: 3,
  },
  socialLogo: {
    width: 55,
    height: 55,
  },
  txtLogin: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'baseline',
    marginTop: 15,
  },
});

export default LoginScreen;
