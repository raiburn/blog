import React from 'react';
import isAuthenticated from "../../services/IsAuthenticated";
import Feed from "./Feed/FeedProfile";
import Adds from "../Adds/Adds";
import Sidebar from '../Sidebar/Sidebar';
import  { Redirect }  from "react-router-dom";


const Wall = () =>{
    const auth = isAuthenticated();
    if(auth){
        
        return (
                <div className="app">
                    <Sidebar />
                    <Feed />
                    <Adds />
                </div>
        )
    }else{
        return (
            <Redirect to ="/"/>
        )
    }
}

export default Wall;