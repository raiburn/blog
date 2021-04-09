import React, { useEffect } from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import isAuthenticated from '../services/isAuthenticated';
import * as Linking from 'expo-linking';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import Feed from '../components/Feed/Feed';
import { AntDesign } from '@expo/vector-icons';

export default function TabTwoScreen() {

  useEffect(() => {
    (async ()=>{
      const auth : boolean = await isAuthenticated();
      if(!auth){
        Linking.openURL('http://localhost:19006/Login');
      }
    })()
  }, [])

    return (
          <View style={styles.container}>
            <Feed />
        </View>
    ); 
}

const styles = StyleSheet.create({
  container: {
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
});
