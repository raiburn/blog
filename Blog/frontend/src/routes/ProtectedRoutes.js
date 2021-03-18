import React from 'react';
import { Route, Redirect } from "react-router-dom";
import Home from "../components/Home/Home";
import Login from "../Components/Login/Login";

const ProtectedRoutes = () => {
  // : <Redirect to='/' />
  return (
    <>
      {isAutenticaced() ? (
        <Route exact path="/inicio" component={Home} />
      ) : (
        <Redirect to="/" component ={Login}/>
      )}
    </>
  );
};
export default ProtectedRoutes;