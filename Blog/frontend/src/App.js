import React from "react";
import Home from "./Components/Home/Home";
import "./App.css";
import Login from "./Components/Login/Login";
import Register from "./Components/Login/Register/Register";
import NotFound from "./Components/NotFound/NotFound";
import Wall from "./Components/Wall/Wall";
import Search from "./Components/Search/Search";
import Groups from "./Components/Groups/Groups";
import Profiles from "./Components/Profiles/Profiles";
import Searching from "./Components/Search/Searching/Searching";
import Comment from "./Components/Comments/Comment";

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


function App() {
  return (
    // BEM
    <Router>
      <Switch>
        <Route exact path='/' component={Login}>
        </Route>
        <Route exact path='/registrarse' component={Register}>
        </Route>
        <Route exact path ='/inicio' component={Home}>
        </Route>
        <Route path ='/perfil' component={Wall}>
        </Route>
        <Route exact path ='/Grupos' component={Groups}>
        </Route>
        <Route path ='/comentario' component={Comment}>
        </Route>
        <Route path ='/perfiles' component={Profiles}>
        </Route>
        <Route exact path ='/buscar' component={Search}>
        </Route>
        <Route path ='/buscando' component={Searching}>
        </Route>
        <Route path='*' component={NotFound}>
        </Route>
    </Switch>
  </Router>
        );
}

export default App;
