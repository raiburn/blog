import React from 'react';
import isAutenticated from "../../services/IsAutenticated";
import  { Redirect }  from "react-router-dom";


const Home = () =>{
    const auth = isAutenticated();
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