import React from 'react';
import Home from './screens/Home';
import { View, StyleSheet } from 'react-native';
import CreateEmployee from './screens/CreateEmployee';
// import Constants from 'expo-constants'

export default function App() {
  return (

    <View style = { styles.container }> 
      {/* <Home /> */}
      <CreateEmployee />
    </View>
    
  );
}

const styles = StyleSheet.create({
  container : {
    flex : 1,
    backgroundColor : '#e0e0e0',
    marginTop : 20
  }
})