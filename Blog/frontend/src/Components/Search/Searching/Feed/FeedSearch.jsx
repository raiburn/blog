import React, { useState, useEffect } from "react";
import Searcher from "../../Searcher/Searcher";
import axios from "axios";
import Post from '../Post/PostSearch';
import FlipMove from "react-flip-move";
import { useLocation } from "react-router-dom";

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

function Feed() {
    const query = useQuery()
    const [data, setData] = useState([]);
    const user = query.get("user");

    useEffect(() => {
        (async () => {
            try {
                const { data: { users } } = await axios.get(`${window.location.protocol}//${window.location.hostname}:8000/api/search/` + user);
                console.log()
                setData(() => users);
            }
            catch (error) {
                console.log(error);
            }
        })()
    }, []);

    console.log(data)
    return (
        <div className="feedcontainer">
            <div className="feed">
                <div className="feed__header">
                    <h2> Buscar</h2>
                </div>
                <Searcher />
                <FlipMove>
                    {data.length > 0 ? data.map((post) => (
                        <Post
                            key={post._id}
                            email={post.username}
                            username={post.email}
                            verified={post._id}
                            text={post.name}
                            avatar={post._id}
                            image={post.image}
                        />
                    )) : null}
                </FlipMove>
            </div>
        </div>
    );
}

export default Feed;