import React, { useState, useEffect } from "react";
import { StyleSheet, ScrollView} from 'react-native';
import axios from "axios";
import { Text, View } from '../Themed';
import Post from "../Post/Post";

function Feed() {
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
        {data.length>0?data.map((post) =>(
          <Post 
          key={post._id}
          email={post.users.username}
          username={post.users.email}
          verified={post.verified}
          text={post.message}
          avatar={post.avatar}
          image={post.image}
          />
        )):null}
        </View>
    )
}

const styles = StyleSheet.create({
  container:{
    position: "absolute",
    
  }
})
export default Feed;