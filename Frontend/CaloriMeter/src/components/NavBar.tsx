import { useState } from 'react'
import {AppBar, Box, Button, IconButton, Menu, MenuItem, Toolbar, Typography} from '@mui/material';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MenuIcon from '@mui/icons-material/Menu';


export default function NavBar() {
    const [loggedIn, setLoggedIn] = useState(true); // toggles the display of the login button

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

                    {   !loggedIn ?
                        <Button color="inherit">Login</Button> :  
                        <div>
                        <IconButton
                          size="large"
                          aria-label="account of current user"
                          aria-controls="menu-appbar"
                          aria-haspopup="true"
                          color="inherit"
                        >
                          <AccountCircle />
                        </IconButton>
                        <Menu
                          id="menu-appbar"
                          anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                          }}
                          keepMounted
                          transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                          }}
                          open={false}
                        >
                          <MenuItem>Profile</MenuItem>
                          <MenuItem>My account</MenuItem>
                        </Menu>
                      </div>
                    }
                </Toolbar>
            </AppBar>
        </Box>
    );
}