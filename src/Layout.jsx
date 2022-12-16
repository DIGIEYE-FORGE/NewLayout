import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
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
import { NavLink, Outlet } from "react-router-dom";
// import { makeStyles, Theme } from '@material-ui/core/styles';
const drawerWidth = 220;

const arr = [
  {
    text: "test1",
    icon: <MailIcon />,
    route: "/test",
  },
  {
    text: "test2",
    icon: <MailIcon />,
    route: "/test2",
  },
];

export default function PermanentDrawerLeft() {
  const [selected, setSelected] = React.useState(false);
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: `calc(100% - ${drawerWidth}px)`,
          ml: `${drawerWidth}px`,
          background: "#FCFAFA",
          color: 'black'
          //   boxShadow:
        }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Permanent drawer
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
          background: "white",
          boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.05)",
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar>LOGO</Toolbar>
        <List>
          {arr.map((stat, index) => (
            <ListItem
              key={index}
              disablePadding
              style={{
                marginBlock: "10px",
                background: "white",
                paddingInline: "1rem",
                borderRadius: "8px",
              }}
            >
              <NavLink
                className="botton"
                to={stat.route}
                style={({ isActive }) => ({
                  display: 'flex',
                  height: "40px",
                  borderRadius: "8px",
                  width: "100%",
                  color: isActive ? "#fff" : "#545e6f",
                  background: isActive ? "#7600dc" : "#ffff",
                })}
              >
                <ListItemButton>
                  <ListItemIcon>{<MailIcon />}</ListItemIcon>
                  <ListItemText primary={stat.text} />
                </ListItemButton>
              </NavLink>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          bgcolor: "background.default",
          p: 3,
          background: "#FCFAFA",
        }}
      >
        <Toolbar />
        amine
        <Outlet />
      </Box>
    </Box>
  );
}
