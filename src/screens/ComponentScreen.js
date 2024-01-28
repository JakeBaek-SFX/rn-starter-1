import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const ComponentScreen = () => {
  const name = 'Jake';

  return (
    <View>
      <Text style={styles.primaryTextStyle}>Getting started with React Native!</Text>
      <Text style={styles.secondaryTextStyle}>My name is {name}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  primaryTextStyle: {
    fontSize: 45
  },
  secondaryTextStyle: {
    fontSize: 20
  }
})

export default ComponentScreen;