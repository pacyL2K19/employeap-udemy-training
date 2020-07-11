import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CreateEmployee from './screens/CreateEmployee'
import Home from './screens/Home';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Profile from './screens/Profile';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { reducer } from './reducers/reducer'

const store = createStore ()
const Stack = createStackNavigator ()
const myOptions = {
  title: 'Home',
  headerTintColor : 'white',
  headerStyle : {
    backgroundColor : '#006aff'
  }
}

function App() {
  return (
    <View style={styles.container}>
      <Stack.Navigator>
        <Stack.Screen 
          name = 'Home' 
          component = {Home} 
          options = {myOptions}
        />
        <Stack.Screen 
          name = 'Create' 
          component = {CreateEmployee} 
          options = {{ 
            ...myOptions,
            title : 'Create'
          }}
        />
        <Stack.Screen 
          name = 'Profile' 
          component = {Profile} 
          options = {{ 
            ...myOptions,
            title : 'Profile'
          }}
        />
      </Stack.Navigator>
    </View>
  );
}

export default () => {
  return (
    <NavigationContainer>
      <App />
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor : '#e0d0e0',
  },
});
