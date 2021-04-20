import React, { useState, useEffect } from 'react';
import { StyleSheet, TextInput, Button} from 'react-native';
import * as Linking from 'expo-linking';
import { Text, View } from '../../components/Themed';
import isAuthenticated from '../../services/isAuthenticated';
import NewArgue from '../../services/NewArgue';


export default function Home( {navigation }) {
  const [text, OnChangeText] = useState();

  const onSubmit = () => {
    NewArgue(text);
  }

  useEffect(() => {
    (async ()=>{
      const auth = await isAuthenticated();
      if(!auth){
        Linking.openURL('http://localhost:19006/Login');
      }
    })()
  }, [])

    return (
          <View >
            <Text>Escribe el nuevo tema o pregunta</Text>
            <TextInput style={styles.input} onChangeText={OnChangeText} value={text}>
                
            </TextInput>
            <Button onPress={onSubmit} title="New Topic" color="#841584"/>
        </View>
        
    ); 
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