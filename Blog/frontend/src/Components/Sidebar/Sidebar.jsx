import React from "react";
import "./Sidebar.css";
import SidebarOption from "../SidebarOption/SidebarOption";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import GroupIcon from '@material-ui/icons/Group';
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { Button } from "@material-ui/core";


const Sidebar = () => {

  function resolveAfter2Seconds(x) {
    return new Promise(resolve => {
      setTimeout(() => {
          window.location.reload();
        resolve(x);
      }, 1000);
    });
  }

async function f1() {
    await resolveAfter2Seconds(15);
  }

  const logout = () => {
    localStorage.removeItem("token");
    f1();
    
  }

    return (
      <div className="sidebar">
        <div class="sidebarlogo"></div>
        <br/>
        <SidebarOption active Icon={HomeIcon} text="Inicio" />
        <SidebarOption Icon={SearchIcon} text="Buscar" />
        <SidebarOption Icon={GroupIcon} text="Grupos" />
        <SidebarOption Icon={PermIdentityIcon} text="Perfil" />
        <SidebarOption Icon={MoreHorizIcon} text="Mas" />

        <Button variant="outlined" className="sidebar__Log-out" fullWidth onClick={logout}>
          Log out
        </Button>
      </div>
    );
  }
  
  export default Sidebar;