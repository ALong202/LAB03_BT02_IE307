import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function FavouritesScreen() {
  return (
    <View style={styles.container}>
      <Text>Favourites Screen</Text>
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