import React, { useContext } from "react";
import { Link, Route, Routes } from "react-router-dom";

import PropTypes from "prop-types";
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

import MenuIcon from "@mui/icons-material/Menu";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";

import About from "../Pages/About.js";
import Account from "../Pages/Account.js";
import Admin from "../Pages/Admin.js";
import Customers from "../Pages/Customers.js";
import Cart from "../Pages/Cart.js";
import Error404 from "../Pages/Error404.js";
import Homepage from "../Pages/Homepage";
//import ItemCard from '../Pages/ItemCard.js';
import EditPost from "../Pages/EditPost.js";
import NewPost from "../Pages/NewPost.js";
import Profile from "../Pages/Profile";
import Settings from "../Pages/settings.js";
import SignIn from "../Pages/SignIn.js";
import SignUp from "../Pages/Signup.js";
import { UserContextProvider, UserContext } from "../context/user-context.js";

//const user = JSON.parse(localstorage.getitem('user'));

function logout() {
  dispatch("DEL_USER");
  //localStorage.removeItem('user');
  alert("Logged out.");
  window.location.href = "/";
}

const drawerWidth = 240;

function AppLayout(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  //Get user profile from context
  //const useContext = React.useContext();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const user = state.user;
  const drawer = (
    <>
      <Toolbar />
      <Divider />
      {/*Conditional rendering depends on whether a user is signed in or not*/}
      {state.firstName != null ? (
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
          {/*</List> <Divider />
      <List>*/}
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
            <Link to="/editpost">
              <ListItemButton>
                <ListItemIcon>
                  <EditIcon />
                </ListItemIcon>
                Edit posts
              </ListItemButton>
            </Link>
          </ListItem>
        </List>
      ) : (
        <List>
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
    </>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  //useEffect(()=>{alert(user)})

  return (
    <UserContextProvider>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar
          position="fixed"
          sx={{
            width: { sm: `calc(100% - ${drawerWidth}px)` },
            ml: { sm: `${drawerWidth}px` },
          }}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap component="div">
              EBESA
            </Typography>
          </Toolbar>
        </AppBar>
        <Box
          component="nav"
          sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
          aria-label="mailbox folders"
        >
          {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
          >
            {drawer}
          </Drawer>
          <Drawer
            variant="permanent"
            sx={{
              display: { xs: "none", sm: "block" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
            open
          >
            {drawer}
          </Drawer>
        </Box>
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
            width: { sm: `calc(100% - ${drawerWidth}px)` },
          }}
        >
          <Toolbar />
          <Typography paragraph>
            Environmental and Biosystems Engineering Students' Association
          </Typography>
          <Routes>
            <Route path="about" exact element={<About />} />
            <Route path="account" exact element={<Account />} />
            <Route path="admin" exact element={<Admin />} />
            <Route path="cart" exact element={<Cart />} />
            <Route path="customers" exact element={<Customers />} />
            <Route path="*" exact element={<Error404 />} />
            <Route path="editpost" exact element={<EditPost />} />
            <Route path="newpost" exact element={<NewPost />} />
            <Route path="profile" exact element={<Profile />} />
            <Route path="signin" exact element={<SignIn />} />
            <Route path="signup" exact element={<SignUp />} />
            <Route index exact element={<Homepage />} />
            <Route path="settings" exact element={<Settings />} />
          </Routes>
        </Box>
      </Box>
    </UserContextProvider>
  );
}

export default AppLayout;
