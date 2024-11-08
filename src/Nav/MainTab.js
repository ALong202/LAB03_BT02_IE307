//\src\Nav\MainTab.js
import React from 'react'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeStack from './HomeStack';
import { Ionicons } from '@expo/vector-icons';
import SettingScreen from '../screens/SettingScreen.js';
//screenOptions={{ headerShown: false }}
const Tab = createBottomTabNavigator();

const MainTab = () => {
  return (
    <Tab.Navigator 
      screenOptions={({ route } ) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'Home') iconName = focused ? 'home' : 'home-outline';

          else if (route.name === 'settings') iconName = focused ? 'settings' : 'settings-outline';

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'blue',
        tabBarInactiveTintColor: 'gray',
        // headerShown: false,
      })}
    >
      <Tab.Screen name="Home" component={HomeStack} options={{headerShown:false}}/>

      <Tab.Screen name="settings" component={SettingScreen} options={{headerShown:false}}/>
    </Tab.Navigator>
  );
};
export default MainTab;