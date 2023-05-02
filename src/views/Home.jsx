import { Menu as MenuIcon } from "@mui/icons-material";
import {
  AppBar,
  Button,
  IconButton,
  MenuItem,
  MenuList,
  Menu,
  Paper,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { logout } from "../firebase/utils";

export default function Home() {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState();
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={handleClick}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            IPP Internal Tool
          </Typography>
          <Button
            color="inherit"
            onClick={() => {
              logout();
              navigate("/");
            }}
          >
            Logout
          </Button>
        </Toolbar>
      </AppBar>
      <Menu
        open={!!anchorEl}
        anchorEl={anchorEl}
        onClick={handleClose}
        onClose={handleClose}
      >
        <MenuItem onClick={() => navigate("applications")}>
          View Applications
        </MenuItem>
        <MenuItem onClick={() => navigate("partners")}>
          Update Partners
        </MenuItem>
      </Menu>
      <Outlet />
    </div>
  );
}
