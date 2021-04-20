import React, { useState, useEffect } from 'react';
import { StyleSheet, ScrollView, TextInput, Button,} from 'react-native';
import * as Linking from 'expo-linking';
import { Text, View } from '../../components/Themed';
import axios from 'axios';
import Comments from '../../components/Comments/Comments';

export default function Comment ( {route, navigation }) {
  const [data, setData] = useState([]);
  const [argue, setArgue] = useState("");
  const [text, setText] = useState("");

  const onSubmit = () => {
    console.log("intentando comentar");
  }

  useEffect(() => {
    const {id} = route.params;
    (async () => {
        try {
            const argue = await axios.get(`${window.location.protocol}//${window.location.hostname}:8000/api/bus_argue/` + id);
            const { data: { comments } } = await axios.get(`${window.location.protocol}//${window.location.hostname}:8000/api/comments/` + id);
            setData(() => comments);
            setArgue(argue);
        }
        catch (error) {
            console.log(error);
        }
    })()
}, []);

    return (
          <View >
            <Text>{argue.data}</Text>
            <View>
            {data.length>0?data.map((post) =>(
          <Comments
          key={post._id}
          email={post.users.username}
          username={post.users.email}
          verified={post.verified}
          text={post.message}
          avatar={post._id}
          image={post.image}
          />
        )):null}
            </View>
            <TextInput style={styles.input} onChangeText={setText} value={text} ></TextInput>
            <Button style={styles.button} onPress={onSubmit} title="comentar" />
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