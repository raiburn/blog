import React from 'react';
import isAuthenticated from "../../services/IsAuthenticated";
import Feed from "./FeedComments/Feed"
import Adds from "../Adds/Adds";

import Sidebar from '../Sidebar/Sidebar';
import  { Redirect }  from "react-router-dom";


const Comment = () =>{
    const auth = isAuthenticated();
    if(auth){
        
        return (
                <div class="app">
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

export default Comment;