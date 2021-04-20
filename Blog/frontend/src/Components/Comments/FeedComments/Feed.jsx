import React, { useState, useEffect } from "react";
import NewComment from "./NewComment/NewComment";
import Post from "./PostComment/Post";
import axios from "axios";
import FlipMove from "react-flip-move";
import { useLocation } from "react-router-dom";

function Feed() {
  const [data, setData] = useState([]);
  const query = useQuery();
  const argue = query.get("argue");

  function useQuery () {
    return new URLSearchParams(useLocation().search);
  }
  
  useEffect(() => {
    (async () => {
        try {
            const { data: { comments } } = await axios.get(`${window.location.protocol}//${window.location.hostname}:8000/api/comments/` + argue);
            setData(() => comments);
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
        <h2>Comentario</h2>
      </div>

      <NewComment/>
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