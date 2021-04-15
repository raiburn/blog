import React, { useState, useEffect } from "react";
import Post from "../../Home/Feed/Post/Post";
import axios from "axios";
import "./FeedGroups.css";
import FlipMove from "react-flip-move";

function Feed() {
  const [data, setData] = useState([]);
  
  //get the groups data from the endpoint in the db
  useEffect( () => {
    const fetchData = async () => {
      try{
        const result = await axios.get(`${window.location.protocol}//${window.location.hostname}:8000/api/groups/`);
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
          <h2> Grupos</h2>
        </div>

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