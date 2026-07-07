import React from "react";
import {
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Box,
  Typography,
} from "@mui/material";

import MenuBookRoundedIcon from "@mui/icons-material/MenuBookRounded";

import DashboardIcon from "@mui/icons-material/Dashboard";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import PeopleIcon from "@mui/icons-material/People";
import AssignmentIcon from "@mui/icons-material/Assignment";
import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn";

import { Link } from "react-router-dom";

const drawerWidth = 200;

const menuItems = [
  {
    text: "Dashboard",
    icon: <DashboardIcon />,
    path: "/dashboard",
  },

  {
    text: "Manage Book",
    icon: <MenuBookIcon />,
    path: "/book",
  },


  {
    text: "Manage Members",
    icon: <PeopleIcon />,
    path: "/member",
  },
  {
    text: "Manage Librarian",
    icon: <PeopleIcon />,
    path: "/librarian",
  },
  {
    text: "Issued Books",
    icon: <AssignmentIcon />,
    path: "/librarian/issued-books",
  },
  {
    text: "Return Books",
    icon: <KeyboardReturnIcon />,
    path: "/librarian/return-books",
  },
];;

function Sidebar(props) {
  return (
    <>

      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            backgroundColor: "#000000",
            color: "#ffffff",
          },
        }}
      >
        <Toolbar>
          <Typography
            variant="h6"
            sx={{
              fontWeight: "bold",
              letterSpacing: 1,
            }}
          ><MenuBookRoundedIcon
              sx={{ color: "#f4b400", fontSize: 35 }}
            />
            Book Buzz
          </Typography>
        </Toolbar>

        <Box sx={{ overflow: "auto" }}>
          <List>
            {menuItems.map((item) => (
              <ListItemButton
                key={item.text}
                component={Link}
                to={item.path}
                sx={{
                  mx: 1,
                  mb: 1,
                  borderRadius: 2,

                  "&:hover": {
                    backgroundColor: "#1976d2",
                  },
                }}
              >
                <ListItemIcon
                  sx={{
                    color: "#f4b400",
                  }}
                >
                  {item.icon}
                </ListItemIcon>

                <ListItemText primary={item.text} />
              </ListItemButton>
            ))}
          </List>
        </Box>
      </Drawer>

    </>
  );
}

export default Sidebar;
