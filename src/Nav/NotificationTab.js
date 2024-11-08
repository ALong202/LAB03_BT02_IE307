//src\Nav\NotificationTab.js
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import NotificationDetailsScreen from '../screens/NotificationDetailsScreen'
import NotificationScreen from '../screens/NotificationScreen'
import { TouchableOpacity } from 'react-native'
import { Entypo } from '@expo/vector-icons'

const Stack = createNativeStackNavigator();

const NotificationTab = ({ navigation }) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Notification"
        component={NotificationScreen}
        options={{
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.openDrawer()}>
              <Entypo style={{ padding: 10 }} name="menu" size={24} color="black" />
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen name="NotificationDetails" component={NotificationDetailsScreen} />
    </Stack.Navigator>
  );
};

export default NotificationTab;


