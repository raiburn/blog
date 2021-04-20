import React, { useState } from 'react';
import { Navigation } from 'react-native-navigation';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaView, TextInput, Button, StyleSheet } from 'react-native';
import { Text, View } from '../../components/Themed';
import * as Linking from 'expo-linking';
import Auth from "../../services/Login/Auth.js";
import isAuthenticated from '../../services/isAuthenticated';

export default function  Login  ( { navigation } ) {
  const [text, onChangeUser] = React.useState("username");
  const [pass, onChangePass] = React.useState("password");
  const auth = isAuthenticated();

  const onSubmit = () =>{
    Auth(text, pass);
    setTimeout(function(){ navigation.navigate('Home'); }, 1000);
    
  }
  if(auth){
      return (

        <SafeAreaView>
          <TextInput style={styles.input} onChangeText={onChangeUser} value={text}/>
          <TextInput style={styles.input} onChangeText={onChangePass} value={pass}/>
          <Button onPress={onSubmit} title="Log in" color="#841584"/>
          <Text onPress={() => Linking.openURL('http://localhost:3000/registrarse')}>Registrarse</Text>
          <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
        </SafeAreaView>
      );
  }else{
    navigation.navigate('Home');
  }
}

const styles = StyleSheet.create({
  container: {
    color: 'blue',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
  },
});
