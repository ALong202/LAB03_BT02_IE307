import { View, Text } from 'react-native'
import React from 'react'
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs"
import Category1Screen from '../screens/Category1Screen';
import Category2Screen from '../screens/Category2Screen';
import Category3Screen from '../screens/Category3Screen';

const MaterialTopTab = createMaterialTopTabNavigator();

const CategoryScreenTab = () => {
  return (
    <MaterialTopTab.Navigator>
      <MaterialTopTab.Screen name={"category1"} component={Category1Screen}/>
      <MaterialTopTab.Screen name={"category2"} component={Category2Screen}/>
      <MaterialTopTab.Screen name={"category3"} component={Category3Screen}/>
    </MaterialTopTab.Navigator>
  )
}
export default CategoryScreenTab