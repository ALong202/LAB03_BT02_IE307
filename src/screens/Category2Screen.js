import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function Category2Screen() {
  return (
    <View style={styles.container}>
      <Text>Category 2</Text>
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