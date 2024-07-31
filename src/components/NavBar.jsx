import React from "react";
import { AppBar, Toolbar } from "@mui/material";
import LogoImage from "../assets/images/Cidrelar.png";

function NavBar() {
  return (
    <AppBar position="static" color="transparent" elevation={0}>
      <Toolbar>
        <img src={LogoImage} alt="Logo da Loja" style={{ height: "80px" }} />
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
