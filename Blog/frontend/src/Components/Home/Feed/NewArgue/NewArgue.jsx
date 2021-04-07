import React, { useState} from "react";
import "./NewArgue.css";
import { Avatar, Button } from "@material-ui/core";
import CreateArgue from "./CreateArgue";

function NewArgue() {
  const [argueMessage, setArgueMessage] = useState("");
  const [Image, setImage] = useState("");

  return (
    <div className="newArgue">
      <form onSubmit={(()=>CreateArgue(argueMessage))}>
        <div className="newArgue__input">
          <Avatar src="../../../images/pfoto.jpg"/>
          <input
            onChange={(e) => setArgueMessage(e.target.value)}
            value={argueMessage}
            placeholder="Tu discusión o pregunta aqui"
            type="text"
          />
        </div>
        <input
          value={Image}
          onChange={(e) => setImage(e.target.value)}
          className="newArgue__imageInput"
          placeholder="Opcional: Desea agregar una imagen?"
          type="text"
        />

        <Button
          type="submit"
          className="newArgue__argueButton"
        >
          New Topic
        </Button>
      </form>
    </div>
  );
}

export default NewArgue;