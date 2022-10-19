import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";

import MenuIcon from "@mui/icons-material/Menu";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import {
  AppBar,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
  CssBaseline,
  Box,
} from "@mui/material";
import { UserContext, UserContextProvider } from "../context/user-context.js";

const handleDrawerToggle = () => {
  setMobileOpen(!mobileOpen);
};

export default function DrawerContent() {
  const [state, dispatch] = useContext(UserContext);

  async function logout() {
    await dispatch({
      type: "DEL_USER",
    });
    navigate("/");
  }

  return (
    <>
      <UserContextProvider>
        <Toolbar />
        <Divider />
        {/*Conditional rendering depends on whether a user is signed in or not*/}
        {state.user.email != null ? (
          <List>
            <ListItem>
              <Link to="/account">
                <ListItemButton>
                  <ListItemIcon>
                    <AccountCircleIcon />
                  </ListItemIcon>
                  Account
                </ListItemButton>
              </Link>
            </ListItem>
            <ListItem>
              <Link to="/">
                <ListItemButton onClick="logout()">
                  <ListItemIcon>
                    <LogoutIcon />
                  </ListItemIcon>
                  Sign Out
                </ListItemButton>
              </Link>
            </ListItem>
            {/**/}
            <Divider />
            <ListItem>
              <Link to="/newpost">
                <ListItemButton>
                  <ListItemIcon>
                    <AddIcon />
                  </ListItemIcon>
                  Create new post
                </ListItemButton>
              </Link>
            </ListItem>
            <ListItem>
              <Link to="/members">
                <ListItemButton>
                  <ListItemIcon>
                    <AddIcon />
                  </ListItemIcon>
                  View Members
                </ListItemButton>
              </Link>
            </ListItem>
          </List>
        ) : (
          <List>
            <ListItem>
              <Link to="/members">
                <ListItemButton>
                  <ListItemIcon>
                    <AccountCircleIcon />
                  </ListItemIcon>
                  View Members
                </ListItemButton>
              </Link>
            </ListItem>
            <ListItem>
              <Link to="/signup">
                <ListItemButton>
                  <ListItemIcon>
                    <AccountCircleIcon />
                  </ListItemIcon>
                  Sign Up
                </ListItemButton>
              </Link>
            </ListItem>
            <ListItem>
              <Link to="/signin">
                <ListItemButton>
                  <ListItemIcon>
                    <LoginIcon />
                  </ListItemIcon>
                  Sign In
                </ListItemButton>
              </Link>
            </ListItem>
          </List>
        )}
        <Divider />
      </UserContextProvider>
    </>
  );
}
