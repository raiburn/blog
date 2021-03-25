import React from 'react';
import isAuthenticated from "../../services/IsAuthenticated";
import Feed from "./Feed/Feed";

import Sidebar from './Sidebar/Sidebar';
import  { Redirect }  from "react-router-dom";


const Home = () =>{
    const auth = isAuthenticated();
    if(auth){
        
        return (
                <div className="app">
                    <Sidebar />
                    <Feed />
                </div>
        )
    }else{
        return (
            <Redirect to ="/"/>
        )
    }
}

export default Home;