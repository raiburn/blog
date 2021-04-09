import React, { useState, useEffect } from "react";
import NewArgue from "../../Home/Feed/NewArgue/NewArgue";
import Post from "../../Home/Feed/Post/Post";
import axios from "axios";
import "./FeedUser.css";
import FlipMove from "react-flip-move";

function Feed() {
  const [data, setData] = useState([]);

  useEffect( () => {
    const fetchData = async () => {
      try{
        const token = localStorage.getItem('token');
        const result = await axios.get(`${window.location.protocol}//${window.location.hostname}:8000/api/argue/${token}`);
        setData(result.data.argues);
      }
      catch(error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  return (
    <div className="feedcontainer">
      <div className="feed">
        <div className="feed__header">
          <h2>Profile</h2>
        </div>

        <NewArgue/>
        <FlipMove>
        {data.map((post) => (
            <Post
              key={post._id}
              email={post.users.username}
              username={post.users.email}
              verified={post._id}
              text={post.message}
              avatar={post.users._id}
              image={post.image}
            />
          ))}
        </FlipMove>
      </div>
    </div>
  );
}

export default Feed;