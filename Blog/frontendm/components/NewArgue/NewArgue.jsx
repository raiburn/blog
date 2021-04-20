import React, { useState, useEffect } from "react";
import { StyleSheet, ScrollView} from 'react-native';
import { Navigation } from 'react-native-navigation';
import { SafeAreaView, TextInput, Button } from 'react-native';
import { Text, View } from '../Themed';
import * as Linking from 'expo-linking';


const NewArgue = (props) => {

    const onSubmit = () =>{
        props.navigation.navigate("NewArgue");
    }

    return(
        <View>
            <Button onPress={onSubmit} title="New Topic" color="#841584"/>
        </View>
    )
}

export default NewArgue;
