//src\Nav\DrawerNav.js
import React from 'react';
import { createDrawerNavigator } from "@react-navigation/drawer";
import NotificationTab from './NotificationTab';
import { Ionicons } from '@expo/vector-icons'; // Import Ionicons
import MainTab from './MainTab'; 
import HelpScreen from '../screens/HelpScreen';

const DrawerNav = () => {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator>
      <Drawer.Screen 
        name="Trang chủ" 
        component={MainTab} 
        options={{
          headerShown: false,
          drawerIcon: ({ color, size }) => (
            <Ionicons name="home-outline" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen 
        name="Thông báo" 
        component={NotificationTab} 
        options={{
          headerShown: false,
          drawerIcon: ({ color, size }) => (
            <Ionicons name="notifications-outline" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen 
        name="Trợ giúp" 
        component={HelpScreen} 
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name="help-circle-outline" size={size} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  )
}
export default DrawerNav;
