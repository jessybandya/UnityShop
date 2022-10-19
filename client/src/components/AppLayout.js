import React, { useContext, useEffect } from "react";
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

import About from "../Pages/About.js";
//import Account from "../Pages/Account.js";
import Admin from "../Pages/Admin.js";
import Customers from "../Pages/Customers.js";
import Cart from "../Pages/Cart.js";
import Error404 from "../Pages/Error404.js";
import Homepage from "../Pages/Homepage";
//import ItemCard from '../Pages/ItemCard.js';
import EditPost from "../Pages/EditPost.js";
import Members from "../Pages/Members.js";
import NewPost from "../Pages/NewPost.js";
import Profile from "../Pages/Profile";
import Settings from "../Pages/settings.js";
import SignIn from "../Pages/SignIn.js";
import SignUp from "../Pages/Signup.js";
import ViewPost from "../Pages/ViewPost.js";
import DrawerContent from "./drawer.js";
import { UserContextProvider } from "../context/user-context.js";

/*Structure of this component:
1. Navbar
2. Drawer
3. Router*/
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
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  //Get user profile from context
  //const { state, dispatch } = useContext(UserContext);

  //const useContext = React.useContext();

  const container =
    window !== undefined ? () => window().document.body : undefined;

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
            <DrawerContent />
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
            <DrawerContent />
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
            {/* <Route path="account" exact element={<Account />} />*/}
            <Route path="admin" exact element={<Admin />} />
            <Route path="cart" exact element={<Cart />} />
            <Route path="customers" exact element={<Customers />} />
            <Route path="*" exact element={<Error404 />} />
            <Route path="editpost" exact element={<EditPost />} />
            <Route path="members" exact element={<Members />} />
            <Route path="newpost" exact element={<NewPost />} />
            <Route path="account" exact element={<Profile />} />
            <Route path="signin" exact element={<SignIn />} />
            <Route path="signup" exact element={<SignUp />} />
            <Route index exact element={<Homepage />} />
            <Route path="settings" exact element={<Settings />} />
            <Route path="viewpost/:postid" exact element={<ViewPost />} />
          </Routes>
        </Box>
      </Box>
    </UserContextProvider>
  );
}

export default AppLayout;
