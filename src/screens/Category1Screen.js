import { View, Text,StyleSheet } from 'react-native'
import React from 'react'

export default function Category1Screen() {
  return (
    <View style={styles.container}>
      <Text>Category 1</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});