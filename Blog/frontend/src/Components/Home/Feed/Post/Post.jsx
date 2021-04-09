import React, { forwardRef } from "react";
import "./Post.css";
import { Avatar } from "@material-ui/core";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import  { useHistory }  from "react-router-dom";



const Post = forwardRef(

  ({ email, username, verified, text, image, avatar }, ref) => {

    let history = useHistory();

    const Comment = () =>{
      history.push("/comentario/argue="+verified);
    } 

    const GoUser = () =>{
      history.push("/perfiles/user="+avatar);
    }

    return (
      <div className="post" ref={ref}>
        <div className="post__avatar">
          <Avatar src={avatar} />
        </div>
        <div className="post__body">
          <div className="post__header">
            <div className="post__headerText">
              <h3 onClick={GoUser}>
                {email}{" "}
                <span className="post__headerSpecial">
                  {verified && <VerifiedUserIcon className="post__badge" />} 
                  {username}
                </span>
              </h3>
            </div>
            <div className="post__headerDescription">
              <p>{text}</p>
            </div>
          </div>
          <img src={image} alt="" />
          <div className="post__footer">
            <ChatBubbleOutlineIcon fontSize="small" onClick={Comment} />
            <FavoriteBorderIcon fontSize="small" />
          </div>
        </div>
      </div>
    );
  }
);

export default Post;