// DrawerAppBar.js
import React, { useEffect, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
// React MUI
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import SearchIcon from '@mui/icons-material/Search';
import { BASE_URL } from '../../middleware/config';
import PetsIcon from '@mui/icons-material/Pets';
import LanguageSelector from '../LanguageSelector';
import ManageSearchIcon from '@mui/icons-material/ManageSearch';

// Custom Components
// import { useAuth } from "../../middleware/AuthContext";
import { useAuth } from '../../middleware/AuthContext';
import { LanguageContext } from '../../middleware/LanguageContext';
// import { useDrawer } from '../../context/DrawerContext';

const drawerWidth = 240;

const navItems = {
  // "/": "Home",
  '/pets': 'pets',
  // "/about": "About",
  // '/services': 'Services',
  // '/shelters': 'shelters',
  // '/articles': 'articles',
  // '/add-service-category': 'Add service category',
  // '/service-categories': 'services',

  // '/create-service': 'Add Service',
  // '/create-business': 'Add Business',
  // '/create-article': 'Create Article',
  // "/contact": "Contact",
  // '/user/profile': 'Profile',
  // '/admin/dashboard': 'Dashboard',
  // "/login": "Login",
};

function DrawerAppBar(props) {
  // const { openDrawer } = useDrawer();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  // const { isAuthenticated, logout } = useAuth();
  const { user, logout } = useAuth();
  const { selectedLanguage, setSelectedLanguage } = useContext(LanguageContext);
  const { t } = useTranslation('navbar');
  const navigate = useNavigate();
  console.log('userDRAWer', user);
  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const handleLogout = () => {
    console.log('Logging out...');
    logout();
    console.log('Logout successful');
    navigate('/'); // Redirect to the homepage after logout
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Box
        style={{
          width: '100%',
          height: '3.5rem',
          backgroundColor: '#22badf',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography variant="body1">
          <Link
            to="/"
            style={{
              color: 'white',
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <PetsIcon sx={{ marginRight: '0.4rem', color: '#ffcb56' }} /> PawClix
          </Link>
        </Typography>
      </Box>

      <Divider />
      <List>
        {Object.entries(navItems).map(([path, itemName]) => (
          <ListItem key={path} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <Link to={path} style={{ textDecoration: 'none', width: '100%' }}>
                <ListItemText primary={t(itemName)} />
              </Link>
            </ListItemButton>
          </ListItem>
        ))}
        {user ? (
          <Link to="/user/profile">
            <Button
              variant="contained"
              size="small"
              sx={{
                color: '#000', // Change font color to black for better contrast
                fontWeight: '500',

                backgroundColor: '#ffcb56',
                '&:hover': {
                  backgroundColor: '#e0a800', // Adjust the hover color as needed
                },
              }}
            >
              {t('profile')}
            </Button>
          </Link>
        ) : (
          <Link to="/login">
            <Button
              size="small"
              sx={{
                color: '#000', // Change font color to black for better contrast
                fontWeight: '500',

                backgroundColor: '#ffcb56',
                '&:hover': {
                  backgroundColor: '#e0a800', // Adjust the hover color as needed
                },
              }}
            >
              {t('login')}
            </Button>
          </Link>
        )}
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
    <Box sx={{ display: 'flex', p: 3 }}>
      <CssBaseline />

      <AppBar
        component="nav"
        sx={{
          // background: '#1D1D1D',
          background: '#22badf',
        }}
      >
        <Container disableGutters>
          <Toolbar
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: 'none' } }}
            >
              <MenuIcon />
            </IconButton>

            <Typography variant="h6" component="div">
              <Link
                to="/"
                style={{
                  color: 'white',
                  textDecoration: 'none',
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <PetsIcon sx={{ marginRight: '0.4rem', color: '#ffcb56' }} />
                PawClix
              </Link>
            </Typography>

            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
              {Object.entries(navItems).map(([path, itemName]) => (
                <Link key={path} to={path}>
                  <Button sx={{ color: '#fff', fontWeight: '400' }}>{t(itemName)}</Button>
                </Link>
              ))}
              {user ? (
                <Link to="/user/profile">
                  <Button
                    variant="contained"
                    size="small"
                    sx={{
                      color: '#000', // Change font color to black for better contrast
                      fontWeight: '500',

                      backgroundColor: '#ffcb56',
                      '&:hover': {
                        backgroundColor: '#e0a800', // Adjust the hover color as needed
                      },
                    }}
                  >
                    {t('profile')}
                  </Button>
                  ffcb56
                </Link>
              ) : (
                <Link to="/login">
                  <Button
                    size="small"
                    sx={{
                      color: '#000', // Change font color to black for better contrast
                      fontWeight: '500',

                      backgroundColor: '#ffcb56',
                      // backgroundColor: '#ffcb56',
                      '&:hover': {
                        backgroundColor: '#e0a800', // Adjust the hover color as needed
                      },
                    }}
                  >
                    {t('login')}
                  </Button>
                </Link>
              )}
            </Box>

            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              {/* <IconButton
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={openDrawer}
                sx={{ display: { xs: 'block', sm: 'none', md: 'none' }, marginRight: 1 }}
              >
                <SearchIcon />
              </IconButton> */}

              <LanguageSelector />
            </Box>
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
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
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
