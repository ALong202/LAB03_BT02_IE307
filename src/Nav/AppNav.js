//src\Nav\AppNav.js
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import DrawerNav from './DrawerNav';
//screenOptions={{ headerShown: false }}
const Stack = createStackNavigator();
// src\Nav\AppNav.js
const AppNav = () => {
  return (
    <Stack.Navigator >
      {/* Điều hướng mặc định là DrawerNav để duyệt các trang chính */}
      <Stack.Screen name="Main" component={DrawerNav} options={{headerShown:false}}/>
      {/* Thêm AuthStack để điều hướng khi cần đăng nhập */}
    </Stack.Navigator>
  );
};

export default AppNav;