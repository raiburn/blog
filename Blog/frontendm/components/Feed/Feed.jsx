import React, { useState, useEffect } from "react";
import { StyleSheet, ScrollView} from 'react-native';
import axios from "axios";
import { Text, View } from '../Themed';
import Post from "../Post/Post.jsx";
import NewArgue from '../NewArgue/NewArgue';

function Feed( props ) {
    const [data, setData] = useState([]);
    useEffect( () => {
      (async ()=>{
        try{
          const result = await axios.get(`${window.location.protocol}//${window.location.hostname}:8000/api/argues/`);
          setData(()=> result.data.argues);
        }
        catch(error) {
          console.log(error);
        }
      })()
    }, []);

    return (
        <View style={styles.container} >
          <NewArgue navigation={props.navigation}/>
        {data.length>0?data.map((post) =>(
          <Post navigation={props.navigation}
          key={post._id}
          email={post.users.username}
          username={post.users.email}
          verified={post.users._id}
          text={post.message}
          avatar={post._id}
          image={post.image}
          />
        )):null}
        </View>
    )
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

export default Feed;