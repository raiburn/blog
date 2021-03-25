import React, { useState, useEffect } from "react";
import NewArgue from "../Feed/NewArgue/NewArgue";
import Post from "./Post/Post";
import axios from "axios";
import "./Feed.css";
import FlipMove from "react-flip-move";

function Feed() {
  const [data, setData] = useState([]);

  useEffect( () => {
    const fetchData = async () => {
      try{
        const result = await axios.get(`${window.location.protocol}//${window.location.hostname}:8000/api/argues/`);
        setData(result.data.argues);
      }
      catch(error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);
  console.log(data);

  return (
    <div className="feed">
      <div className="feed__header">
        <h2>Home</h2>
      </div>

      <NewArgue/>
      <FlipMove>
      {data.map((post) => (
          <Post
            key={post.text}
            email={post.users.username}
            username={post.users.email}
            verified={post.verified}
            text={post.message}
            avatar={post.avatar}
            image={post.image}
          />
        ))}
      </FlipMove>
    </div>
  );
}

export default Feed;