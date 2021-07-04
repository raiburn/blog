import React, { useState, useEffect } from "react";
import NewArgue from "../../Home/Feed/NewArgue/NewArgue";
import Post from "../../Home/Feed/Post/Post";
import axios from "axios";
import "./FeedUser.css";
import FlipMove from "react-flip-move";
import { useLocation } from "react-router-dom";

let uname ="";
function useQuery () {
  return new URLSearchParams(useLocation().search);
}

function Feed() {
  const query = useQuery()
  const [data, setData] = useState([]);
  const user = query.get("user");

  // useEffect( () => {
  //   const fetchData = async () => {
  //     try{
  //       const result = await axios.get(`${window.location.protocol}//${window.location.hostname}:8000/api/argues/`+user);
  //       setData(result.data.argues);
  //       uname = result.data.argues[0].users.username;
  //     }
  //     catch(error) {
  //       console.log(error);
  //     }
  //   }
  //   fetchData();
  // }, []);

  useEffect(() => {
    (async () => {
        try {
            const { data: { argues } } = await axios.get(`${window.location.protocol}//${window.location.hostname}:8000/api/argues/` + user);
            setData(() => argues);
            uname = argues[0].users.username;
        }
        catch (error) {
            console.log(error);
        }
    })()
}, []);

  return (
    <div className="feedcontainer">
      <div className="feed">
        <div className="feed__header">
          <h2> {uname}'s Profile</h2>
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