import React, { useState, useEffect } from "react";
import Post from "../../Home/Feed/Post/Post";
import NewGroup from "../NewGroup/NewGroup";
import axios from "axios";
import FlipMove from "react-flip-move";
import { useLocation } from "react-router-dom";

function FeedGroups() {
  const [data, setData] = useState([]);
  const query = useQuery();
  const group = query.get("group");

  function useQuery () {
    return new URLSearchParams(useLocation().search);
  }
  
  //get the groups data from the endpoint in the db
  useEffect(() => {
    (async () => {
        try {
            const { data: { groups } } = await axios.get(`${window.location.protocol}//${window.location.hostname}:8000/api/groups/`+group);
            setData(() => groups);
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
          <h2> Grupos Profiles</h2>
        </div>
        <NewGroup />
        <FlipMove>
        {data.map((post) => (
            <Post
            key={post._id}
            email={post.name}
            username={"grupo"}
            verified={post._id}
            text={post.information}
            avatar={post._id}
            image={post.image}
            />
          ))}
        </FlipMove>
      </div>
    </div>
  );
}

export default FeedGroups;