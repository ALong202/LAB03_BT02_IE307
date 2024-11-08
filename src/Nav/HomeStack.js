//\src\Nav\HomeStack.js
import { View, Text,TouchableOpacity } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from '../screens/HomeScreen2';
import { Entypo } from '@expo/vector-icons';
import HomeDetailsScreen from '../screens/HomeDetailsScreen';
import AddNote from '../screens/AddNote';
import EditNote from '../screens/EditNote';

const Stack=createStackNavigator();

const HomeStack = ({navigation}) => {

  return (
    <Stack.Navigator>
      <Stack.Screen name={"HomeScreen"} component={HomeScreen} 
      options={{headerLeft:()=> (
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <Entypo style={{padding: 10}} name="menu" size={24} color="black" />
        </TouchableOpacity>
      )}} 
      />
      <Stack.Screen name={"AddNote"} component={AddNote} />
      <Stack.Screen name="EditNote" component={EditNote} options={{ title: 'Edit Note' }} />
    </Stack.Navigator>
  );
};

export default  HomeStack;