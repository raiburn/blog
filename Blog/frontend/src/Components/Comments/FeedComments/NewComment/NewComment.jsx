import React, { useState} from "react";
import { Avatar, Button } from "@material-ui/core";
import CreateComment from "./Comment";
import { useLocation } from "react-router-dom";

function NewComment() {
  const [commentMessage, setcommentMessage] = useState("");
  const [Image, setImage] = useState("");

  function useQuery () {
    return new URLSearchParams(useLocation().search);
  }

  function onSubmit(){
    CreateComment(commentMessage, argue);
  }

  const query = useQuery();
  const argue = query.get("argue");

  return (
    <div className="newArgue">
      <form >
        <div className="newArgue__input">
          <Avatar src="../../../images/pfoto.jpg"/>
          <input
            onChange={(e) => setcommentMessage(e.target.value)}
            value={commentMessage}
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
          onClick={(()=>onSubmit())}
          className="newArgue__argueButton"
        >
          New Comment
        </Button>
      </form>
    </div>
  );
}

export default NewComment;