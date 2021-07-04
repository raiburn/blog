import React, { useState} from "react";
import { Avatar, Button } from "@material-ui/core";
import CreateGroup from "./CreateGroup";

const lvl = JSON.parse(localStorage.getItem('info'));

function NewGroup() {
  const [argueMessage, setArgueMessage] = useState("");
  const [info, setInfo] = useState("");

  if(lvl.level<2){
    return (
      <div></div>
    )
  }else {
    return (
      <div className="newArgue">
        <form onSubmit={(()=>CreateGroup(argueMessage, info))}>
          <div className="newArgue__input">
            <Avatar src="../../../images/pfoto.jpg"/>
            <input
              onChange={(e) => setArgueMessage(e.target.value)}
              value={argueMessage}
              placeholder="Nombre del grupo"
              type="text"
            />
          </div>
          <input
            value={info}
            onChange={(e) => setInfo(e.target.value)}
            className="newArgue__imageInput"
            placeholder="Información del grupo"
            type="text"
          />

          <Button
            type="submit"
            className="newArgue__argueButton"
          >
            New Group
          </Button>
        </form>
      </div>
    );
  }
}

export default NewGroup;