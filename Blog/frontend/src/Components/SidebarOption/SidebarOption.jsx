import React from "react";
import "./SidebarOption.css";
import  { useHistory }  from "react-router-dom";

const SidebarOption = ({ active, text, Icon }) => {
  let history = useHistory();
  const Go = ({}) => {
    history.push("/"+text);
  }

  return (
    <div className={`sidebarOption ${active && "sidebarOption--active"}`} onClick={Go}>
      <Icon />
      <h2>{text}</h2>
    </div>
  );
}

export default SidebarOption;