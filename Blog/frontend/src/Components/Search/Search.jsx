import React from 'react';
import isAuthenticated from "../../services/IsAuthenticated";
import Adds from "../Adds/Adds";
import Sidebar from '../Sidebar/Sidebar';
import Feed from './Feed/Feed';
import  { Redirect }  from "react-router-dom";


const Search = () =>{
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

export default Search;