import React, { useState, useEffect } from "react";
import Searcher from '../Searcher/Searcher';
import axios from "axios";


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
  return (
    <div className="feedcontainer">
        <div className="feed">
            <div className="feed__header">
                <h2>Buscar</h2>
            </div>

            <Searcher/>
        </div>
    </div>
  );
}

export default Feed;