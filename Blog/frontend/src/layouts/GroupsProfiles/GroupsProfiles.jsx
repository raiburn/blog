import React from 'react';
import isAuthenticated from "../../services/IsAuthenticated";
import Adds from "../../Components/Adds/Adds";
import FeedGroups from '../../Components/Groups/FeedGroupsProfiles/FeedGroupsProfiles'
import Sidebar from '../../Components/Sidebar/Sidebar';
import  { Redirect }  from "react-router-dom";


const Groups = () =>{
    const auth = isAuthenticated();
    if(auth){
        
        return (
                <div className="app">
                    <Sidebar />
                    <FeedGroups />
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