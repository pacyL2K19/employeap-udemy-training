import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CreateEmployee from './screens/CreateEmployee'
import Home from './screens/Home';
import Constants from 'expo-constants'

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Home /> */}
      <CreateEmployee />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor : '#e0d0e0',
    marginTop : Constants.statusBarHeight
  },
});
