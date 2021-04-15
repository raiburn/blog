import React from 'react';
import isAuthenticated from "../../services/IsAuthenticated";
import Feed from "./FeedGroups/FeedGroups";
import Adds from "../Adds/Adds";
import Sidebar from '../Sidebar/Sidebar';
import  { Redirect }  from "react-router-dom";


const Groups = () =>{
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

export default Groups;