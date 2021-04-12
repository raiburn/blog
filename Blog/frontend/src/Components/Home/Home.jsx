import React from 'react';
import isAuthenticated from "../../services/IsAuthenticated";
import Feed from "./Feed/Feed";
import Adds from "../Adds/Adds";

import Sidebar from '../Sidebar/Sidebar';
import  { Redirect }  from "react-router-dom";


const Home = () =>{
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

export default Home;