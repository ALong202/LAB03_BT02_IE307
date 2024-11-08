
//src\context\AuthContext.js
import React, { createContext, useState,useEffect, useContext } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert} from 'react-native'

export const AuthContext = createContext();
export const useAuth = () => {
  return useContext(AuthContext);
};
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);  
  const [storedCredentials, setStoredCredentials] = useState({ email: '', password: '' });

  const usersDatabase = [
    { email: "12345678@gm.uit.edu.vn", password: "nguyenvana" },
    { email: "a", password: "a" },
    // Add more users as needed
  ];

  // Load thông tin đăng nhập từ AsyncStorage khi ứng dụng khởi chạy
  useEffect(() => {
    const loadCredentials = async () => {
      try {
        const email = await AsyncStorage.getItem('email');
        const password = await AsyncStorage.getItem('password');
        if (email && password) {
          setStoredCredentials({ email, password });
        }
      } catch (error) {
        console.log('Error loading credentials', error);
      }
    };

    loadCredentials();
  }, []);

  //
  const login = async (email, password) => {
    const validUser = usersDatabase.find(
      (user) => user.email === email && user.password === password
    );

    if (validUser) {
      setUser({ email });
      await AsyncStorage.setItem('email', email);
      await AsyncStorage.setItem('password', password);
    } else {
      Alert.alert('Incorrect email or password.');
    }
  };


  const signup = (username, email, password) => {
    if (email.includes("@gm.uit.edu.vn")) {
      setUser({ email });
    } else {
      alert("Email không phải email sinh viên!");
    }
  };

  const logout = async () => {
    setUser(null);
    // Giữ lại thông tin đăng nhập khi người dùng đăng xuất
    const email = await AsyncStorage.getItem('email');
    const password = await AsyncStorage.getItem('password');
    setStoredCredentials({ email, password });
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, logout, storedCredentials }}>
      {children}
    </AuthContext.Provider>
  );
};
