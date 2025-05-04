import { useState } from 'react';

// mui components
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';

// mui icons 
import AccountCircle from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';


export default function NavBar() {
    const [loggedIn, setLoggedIn] = useState(true); // toggles the display of the login button
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null); // HTML element that the Menu will be positioned relative to

    function handleLogin() {
      setLoggedIn(true);
    }

    function handleLogout() {
      setLoggedIn(false);
      handleMenuClose();
    }

    // open the menu when the profile icon is clicked 
    function handleMenuOpen(event: React.MouseEvent<HTMLElement>) {
      setAnchorEl(event.currentTarget);
    }

    // close the menu 
    function handleMenuClose() {
      setAnchorEl(null);
    }

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        CaloriMeter
                    </Typography>

                    { loggedIn ?
                        <div>
                          <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            color="inherit"
                            onClick={handleMenuOpen}
                          >
                            <AccountCircle />
                          </IconButton>
                          <Menu
                            id="menu-appbar"
                            anchorEl={anchorEl}
                            anchorOrigin={{
                              vertical: 'top',
                              horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                              vertical: 'top',
                              horizontal: 'right',
                            }}
                            open={Boolean(anchorEl)}
                            onClose={handleMenuClose}
                          >
                          <MenuItem>Profile</MenuItem>
                          <MenuItem onClick={handleLogout}><LogoutIcon/> &nbsp; Logout</MenuItem>
                        </Menu>
                      </div>

                      : <Button color="inherit" onClick={handleLogin}>Login</Button>
                    }
                </Toolbar>
            </AppBar>
        </Box>
    );
}