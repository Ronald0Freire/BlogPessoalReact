import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { Box } from "@mui/material";
import React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import "./Navbar.css";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";
import Sacola from "./sacola.png";
import Input from "@mui/material/Input";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import SearchIcon from '@mui/icons-material/Search';

function Navbar() {
  return (
    <>
      <AppBar position="static" className="appbar">
        <Toolbar variant="dense" className="bar">

         <Box>
         <div className="menuicons">
            <div className="menuicon"></div>
            <div className="menuicon"></div>
            <div className="menuicon"></div>
         </div>
         </Box>

          <Box className="logo">
            <Typography className="text-logo" variant="h5" color="inherit">
              GreenShop
              <div className="barrinha"></div>
            </Typography>
          </Box>

          <Box className="menu-right" display="flex">
            <Box className="pesquisa">
              <FormControl variant="standard" color='success' >
                <Input
                placeholder="Buscar Produtos"
                  startAdornment={
                    <InputAdornment position="start">
                      <SearchIcon className="lupa"/>
                    </InputAdornment>
                  }
                />
              </FormControl>
            </Box>

            <Box>
              <PopupState variant="popover" popupId="demo-popup-menu">
                {(popupState) => (
                  <React.Fragment>
                    <Button
                      className="perfil"
                      variant="contained"
                      {...bindTrigger(popupState)}
                    >
                      Minha Conta
                    </Button>
                    <Menu {...bindMenu(popupState)}>
                      <MenuItem onClick={popupState.close}>Perfil</MenuItem>
                      <MenuItem onClick={popupState.close}>
                        Meus Pedidos
                      </MenuItem>
                      <MenuItem onClick={popupState.close}>Logout</MenuItem>
                    </Menu>
                  </React.Fragment>
                )}
              </PopupState>
            </Box>

            <Box className="sacola">
              <div className="sacolaa">
              <img src={Sacola} alt="" />
              <div className="qtd">5</div>
              </div>              
            </Box>

          </Box>
        </Toolbar>
        <Toolbar className="bar2">
        <a href="#">produtos</a>
        <a href="#">categorias</a>
        <a href="#">promoções</a>
        <a href="#">móveis</a>
        <a href="#">decoração</a>
        <a href="#">blog</a>
        </Toolbar>
      </AppBar>
    </>
  );
}
export default Navbar;