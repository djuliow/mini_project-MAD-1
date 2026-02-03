import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const MySettings = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.content}>This Settings</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },
  content: {
    fontSize: 22,

  }
});


export default MySettings