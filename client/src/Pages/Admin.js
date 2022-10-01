import * as React from 'react'
import { Divider, Drawer, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography, CssBaseline, Box } from '@mui/material';

import InboxIcon from '@mui/icons-material/Inbox';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';

function Admin() {
    
    return(<div>
    
 
      <List><ListItem>
      <ListItemButton>
      <ListItemIcon><MailIcon /></ListItemIcon>
      Products</ListItemButton>
      </ListItem>
      <ListItem>
      <ListItemButton>
      <ListItemIcon><MailIcon /></ListItemIcon>
     Brands</ListItemButton>
      </ListItem>
      <ListItem>
      <ListItemButton>
      <ListItemIcon><MailIcon /></ListItemIcon>
      Clients</ListItemButton>
      </ListItem>
      <ListItem>
      <ListItemButton>
      <ListItemIcon><MailIcon /></ListItemIcon>
     Merchants</ListItemButton>
      </ListItem>
      <ListItem>
      <ListItemButton>
      <ListItemIcon><MailIcon /></ListItemIcon>
      Admins</ListItemButton>
      </ListItem>
      <ListItem>
      <ListItemButton>
      <ListItemIcon><MailIcon /></ListItemIcon>
      Stats</ListItemButton>
      </ListItem></List>
      
    </div>)
  }


export default Admin;