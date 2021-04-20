import React, { useEffect } from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import isAuthenticated from '../../services/isAuthenticated';
import * as Linking from 'expo-linking';
import { Navigation } from 'react-native-navigation';
import { Text, View } from '../../components/Themed';
import Feed from '../../components/Feed/Feed.jsx';

export default function Home( { navigation }) {
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
            <Feed navigation={ navigation }/>
            <View>
            </View>
        </View>
        
    ); 
}

