import React from 'react';
import isAuthenticated from "../../services/IsAuthenticated";
import  { Redirect }  from "react-router-dom";


const Home = () =>{
    const auth = isAuthenticated();
    if(auth){
        return (
            <div className="app">
                <text>Logeado</text>
            </div>
        )
    }else{
        return (
            <Redirect to ="/"/>
        )
    }
}

export default Home;