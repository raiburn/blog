import React, { useState} from "react";
import "./Searcher.css";
import { Avatar, Button } from "@material-ui/core";
import  { useHistory }  from "react-router-dom";

function Searcher() {
  const [searchFor, setSearchFor] = useState("");

  let history = useHistory();

  const Search = (info) =>{
    history.push("/buscando?user="+info);
  } 

  return (
    <div className="newArgue">
      <form>
        <div className="newArgue__input">
          <Avatar src="../../../images/pfoto.jpg"/>
          <input
            onChange={(e) => setSearchFor(e.target.value)}
            value={searchFor}
            placeholder="escribe el usuario que deseas buscar"
            type="text"
          />
        </div>

        <Button
          onClick={(()=>Search(searchFor))}
          className="newArgue__argueButton"
        >
          Buscar
        </Button>
      </form>
    </div>
  );
}

export default Searcher;