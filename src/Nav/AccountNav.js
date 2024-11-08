//src\Nav\AccountNav.js
import React, { useLayoutEffect } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import AccountScreen from '../screens/AccountScreen';
import ProfileScreen from '../screens/ProfileScreen';
import { useAuth } from '../context/AuthContext';
import LoginScreen from '../screens/LoginScreen';
import SignUpScreen from '../screens/SignUpScreen';
import ForgotPassword from '../screens/ForgotPassword';
import AuthStack from './AuthStack';

// src\Nav\AccountNav.js
const Stack = createStackNavigator();

const AccountNav = () => {
  const { user } = useAuth(); // Lấy thông tin người dùng từ useAuth hook

  return (
    <Stack.Navigator>
      {user ? ( // Nếu người dùng đã đăng nhập, hiển thị AccountScreen
        <>
          <Stack.Screen
            name="Tài khoản"
            component={AccountScreen}
            // options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Profile"
            component={ProfileScreen}
          />
        </>
      ) : ( // Nếu chưa đăng nhập, hiển thị LoginScreen
        <>
          <Stack.Screen
            name="Auth"
            component={AuthStack}
            options={{headerShown:false}}
            // options={{ headerShown: false }} // Ẩn header nếu cần
          />
        </>
        




      )}
    </Stack.Navigator>
  );
};

export default AccountNav;