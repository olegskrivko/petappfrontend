// DrawerAppBar.js
import React, { useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

// React MUI
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import SearchIcon from "@mui/icons-material/Search";
import { BASE_URL } from "../../middleware/config";
import PetsIcon from "@mui/icons-material/Pets";
import LanguageSelector from "../LanguageSelector";
// Custom Components
// import { useAuth } from "../../middleware/AuthContext";
import { useAuth } from "../../middleware/AuthContext";
import { LanguageContext } from "../../middleware/LanguageContext";

const drawerWidth = 240;

const navItems = {
  // "/": "Home",
  "/pets": "Pets",
  // "/about": "About",
  "/services": "Services",
  // "/contact": "Contact",
  "/user/profile": "Profile",
  "/admin/dashboard": "Dashboard",
  // "/login": "Login",
};

function DrawerAppBar(props) {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  // const { isAuthenticated, logout } = useAuth();
  const { user, logout } = useAuth();
  const { selectedLanguage, setSelectedLanguage } = useContext(LanguageContext);

  const navigate = useNavigate();
  console.log("user", user);
  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const handleLogout = () => {
    console.log("Logging out...");
    logout();
    console.log("Logout successful");
    navigate("/"); // Redirect to the homepage after logout
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Box
        style={{
          width: "100%",
          height: "3.5rem",
          backgroundColor: "orange",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography variant="body1">
          <Link
            to="/"
            style={{
              color: "white",
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
            }}
          >
            <PetsIcon sx={{ marginRight: "0.4rem" }} /> PawClix
          </Link>
        </Typography>
      </Box>

      <Divider />
      <List>
        {Object.entries(navItems).map(([path, itemName]) => (
          <ListItem key={path} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <Link to={path} style={{ textDecoration: "none", width: "100%" }}>
                <ListItemText primary={itemName} />
              </Link>
            </ListItemButton>
          </ListItem>
        ))}
        {/* {isAuthenticated() && (
          <ListItem disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <Link
                to="/auth"
                style={{ textDecoration: "none", width: "100%" }}
              >
                <ListItemText onClick={handleLogout} primary={"Logout"} />
              </Link>
            </ListItemButton>
          </ListItem>
        )} */}
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: "flex", p: 3 }}>
      <CssBaseline />

      <AppBar
        component="nav"
        sx={{
          background: "#1D1D1D",
        }}
      >
        <Container disableGutters>
          <Toolbar
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>

            <Typography variant="h6" component="div">
              <Link
                to="/"
                style={{
                  color: "white",
                  textDecoration: "none",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <PetsIcon sx={{ marginRight: "0.4rem", color: "#ffc107" }} />
                PawClix
              </Link>
            </Typography>

            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              {Object.entries(navItems).map(([path, itemName]) => (
                <Link key={path} to={path}>
                  <Button sx={{ color: "#fff", fontWeight: "400" }}>
                    {itemName}
                  </Button>
                </Link>
              ))}
              {user ? (
                <Link to="/">
                  <Button
                    onClick={handleLogout}
                    sx={{ color: "#fff", fontWeight: "400" }}
                  >
                    Logout
                  </Button>
                </Link>
              ) : (
                <Link to="/login">
                  <Button sx={{ color: "#fff", fontWeight: "400" }}>
                    Login
                  </Button>
                </Link>
              )}
            </Box>
            <LanguageSelector />
          </Toolbar>
        </Container>
      </AppBar>

      <nav>
        <Drawer
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
      </nav>
    </Box>
  );
}

export default DrawerAppBar;
