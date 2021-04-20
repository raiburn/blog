import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Login from './Screens/Login/Login';
import Home from './Screens/Home/Home';
import Comment from './Screens/Comment/Comment';
import NewArgue from './Screens/NewArgue/NewArgue';
import Profile from './Screens/Profile/Profile';
import { NavigationContainer } from '@react-navigation/native';
import { Navigation } from 'react-native-navigation';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Comment" component = {Comment} />
        <Stack.Screen name="NewArgue" component = {NewArgue} />
        <Stack.Screen name="Profile" component = {Profile} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});



