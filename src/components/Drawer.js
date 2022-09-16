import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import HomeIcon from '@mui/icons-material/Home';
import ExploreIcon from '@mui/icons-material/Explore';
import StoreIcon from '@mui/icons-material/Store';
import CollectionsIcon from '@mui/icons-material/Collections';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom'
export default function NavDrawer({ openDrawer, toggleDrawer }) {

    return (
        <div>

            <React.Fragment>
                <Drawer
                    anchor="top"
                    open={openDrawer}
                    onClose={toggleDrawer(false)}
                >
                    <Box
                        sx={{ width: 'auto' }}
                        role="presentation"
                        onClick={toggleDrawer(false)}
                        onKeyDown={toggleDrawer(false)}
                    >
                        <List>

                            <Link to="strangelydisturbingcuisine" style={{ textDecoration: 'none', color: 'rgb(0 0 0 /0.7)' }}>
                                <ListItem disablePadding>
                                    <ListItemButton>
                                        <ListItemIcon>
                                            <HomeIcon />
                                        </ListItemIcon>
                                        <ListItemText primary="Home" />
                                    </ListItemButton>
                                </ListItem>
                            </Link>
                            <Link to="strangelydisturbingcuisine/explore/collections" style={{ textDecoration: 'none', color: 'rgb(0 0 0 /0.7)' }}>
                                <ListItem disablePadding>
                                    <ListItemButton>
                                        <ListItemIcon>
                                            <CollectionsIcon />
                                        </ListItemIcon>
                                        <ListItemText primary="Collections" />
                                    </ListItemButton>
                                </ListItem>
                            </Link>
                            <Link to="strangelydisturbingcuisine/explore/products" style={{ textDecoration: 'none', color: 'rgb(0 0 0 /0.7)' }}>
                                <ListItem disablePadding>
                                    <ListItemButton>
                                        <ListItemIcon>
                                            <StoreIcon />
                                        </ListItemIcon>
                                        <ListItemText primary="Store" />
                                    </ListItemButton>
                                </ListItem>
                            </Link>
                            <Link to="strangelydisturbingcuisine/checkout" style={{ textDecoration: 'none', color: 'rgb(0 0 0 /0.7)' }}>
                                <ListItem disablePadding>
                                    <ListItemButton>
                                        <ListItemIcon>
                                            <ShoppingCartIcon />
                                        </ListItemIcon>
                                        <ListItemText primary="Cart" />
                                    </ListItemButton>
                                </ListItem>
                            </Link>

                        </List>
                        <Divider />

                    </Box>
                </Drawer>
            </React.Fragment>
        </div>
    );
}
