import { View, Text, StyleSheet, Button } from 'react-native';
import React from 'react'
import NotificationDetailsScreen from './NotificationDetailsScreen';


const NotificationScreen = ({navigation}) => {
  const onClickNavigateDetails = () => {
    navigation.navigate('NotificationDetails');
  };
  return (
    <View style={styles.container}>
      <Text>NotificationScreen</Text>
      <Button
            title="Go to details"
            onPress={onClickNavigateDetails}
            color="#00A86B"
          />
    </View>
  )
}

export default NotificationScreen

const styles = StyleSheet.create({
  container: {
    flex : 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
})
