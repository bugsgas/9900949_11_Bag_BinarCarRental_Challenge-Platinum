import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import SearchAppBar from "../component/SearchAppBar";

import { useState } from "react";
import { Outlet, ScrollRestoration, Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Breadcrumbs from "../component/Breadcrumbs";

export default function LayoutAdmin() {
  const [showCarBox, setShowCarBox] = useState(false);
  const [showAddCar, setShowAddCar] = useState(false);
  const navigate = useNavigate();

  const handleCarBoxClick = () => {
    navigate("/listcar");
  };

  const handleDashboard = () => {
    navigate("/dashboard");
  };

  const drawerWidth = 240;

  return (
    <Box sx={{ display: "flex" }}>
      <ScrollRestoration />
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <SearchAppBar />
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: "auto" }}>
          <List>
            <ListItem disablePadding>
              <ListItemButton onClick={handleDashboard}>
                <ListItemIcon>
                  <MailIcon />
                </ListItemIcon>
                <ListItemText> Dashboard </ListItemText>
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
              <ListItemButton onClick={handleCarBoxClick}>
                <ListItemIcon>
                  <MailIcon />
                </ListItemIcon>
                <ListItemText> Car </ListItemText>
              </ListItemButton>
            </ListItem>
          </List>
          <Divider />
        </Box>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        <main>
          <Breadcrumbs />
          <Outlet />
        </main>
      </Box>
    </Box>
  );
}
