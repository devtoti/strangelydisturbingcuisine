import React from 'react'
import { useState, useEffect, useRef } from 'react'
import '../styles.css'
import { Paper, AppBar, Toolbar, Stack, Divider, Container, Avatar, Typography, Menu, MenuItem, Box, Tooltip, Button, CssBaseline, CardMedia, Lis, ListItem, Collapse, Alert } from '@mui/material'
import { useTheme } from '@mui/material/styles';
import NavDrawer from '../components/Drawer'
import IconButton from '@mui/material/IconButton';
import CartMenu from './CartMenu';
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AirlinesIcon from '@mui/icons-material/Airlines';
import { red, grey } from '@mui/material/colors'


import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'


function Appbar({ cart, setSelectedProducts, dispatch, open, setOpen, prodName, children }) {

    const theme = useTheme()
    const [isOpen, setisOpen] = useState(false)
    const [isCartOpen, setIsCartOpen] = useState(false)
    const [isHambOpen, setIsHambOpen] = useState(false)
    const [isAlertOpen, setIsAlertOpen] = useState(false)
    const [openDrawer, setOpenDrawer] = useState(false);
    const refUser = useRef()
    const refCart = useRef()
    const refHamb = useRef()
    const filteredCart = cart.filter(p => p.qty)

    const openCloseMenu = (setState) => {
        const node = event.target.nodeName
        // if (node === "svg" || node === "BUTTON" || node === "A") return
        setState(prev => !prev)


    }

    const removeItem = ix => {
        setSelectedProducts(() => cart.filter((item, id) => id !== ix))
    }


    const toggleDrawer = (trueOrFalse) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setOpenDrawer(trueOrFalse);
    };

    const pages = [
        {
            name: 'About Me',
            url: 'https://devtoti.vercel.app'
        },
        {
            name: 'Portfolio',
            url: 'https://dribbble.com/totisketches'
        },

    ]
  

    const EmptyCartMenu = () => {
        return <Box p={2} pt={0}
            onKeyDown={() => openCloseMenu(setIsCartOpen)}

        >

            <Typography pt={1}

            >
                There are no items in your cart.
            </Typography>

            <Button component={Link} to="strangelydisturbingcuisine/explore/products" variant='outlined' sx={{ width: '100%', mt: 2 }}>

                Explore

            </Button>
        </Box>
    }


    return (
        <>
            <AppBar pl={1} position="sticky"

            >

                <Box sx={{ display: 'flex', flexGrow: 1, justifyContent: 'space-between', alignItems: 'center' }}>
                    <Toolbar>
                        <MenuIcon variant="contained" ref={refHamb} onClick={() => setOpenDrawer(true)} sx={{ mr: 1, cursor: 'pointer', '&hover': { color: theme.palette.secondary.light } }} />
                        <NavDrawer setOpenDrawer={setOpenDrawer} openDrawer={openDrawer} toggleDrawer={toggleDrawer} />
                        {/* <BakeryDiningIcon sx={{ display: { xs: 'block', md: 'flex' }, mr: 1, '&:hover': { color: theme.palette.warning.main } }} /> */}
                        <Typography noWrap variant="h6"


                            sx={{ display: { xs: 'none', sm: 'block', lg: 'block' }, textDecoration: 'none', color: 'white', letterSpacing: 1, ml: 1 }}>
                            Strangely Disturbing Cuisine
                        </Typography>
                    </Toolbar>
                    <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                   
                        <Tooltip title="Cart">


                            <ShoppingCartIcon sx={{ mr: { xs: 1, md: 2, lg: 3 }, cursor: 'pointer', }} onClick={() => openCloseMenu(setIsCartOpen)} ref={refCart} />

                        </Tooltip>
                        <Menu open={isCartOpen} keepMounted anchorEl={refCart.current} anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'right'
                        }}
                            onClose={(e) => openCloseMenu(setIsCartOpen)}
                        >
                            <Typography variant="h6" component="h3" pl={2}>
                                Your cart
                            </Typography>
                            <Divider />
                            {filteredCart.every(p => p.qty === 0) && isCartOpen && <EmptyCartMenu />}
                            {filteredCart.length > 0 && <CartMenu array1={filteredCart} array2={cart} dispatch={dispatch}/>}
                        </Menu>
                        <Tooltip title="Account">

                            <Avatar alt="profile picture"
                                elevation={2}
                                src="https://media-exp1.licdn.com/dms/image/C5603AQHTwsNu_yPXCQ/profile-displayphoto-shrink_800_800/0/1661310282017?e=1668643200&v=beta&t=heRwhd0YXYCIgA1QdWqTCKhohAR914KgN5UIUxR1PXA" onClick={() => openCloseMenu(setisOpen)} sx={{ cursor: "pointer", mr: { xs: 1, md: 2, lg: 3 } }} ref={refUser} />
                        </Tooltip>
                    </Box>
                    <Menu open={isOpen} keepMounted anchorEl={refUser.current} onClose={(e) => openCloseMenu(setisOpen)} anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'right'
                    }} name="acc" sx={{textAlign: 'center'}}>
                        <Typography variant="h6" component="h3" sx={{minWidth: '200px'}}>
                            Antonio Ruiz
                        </Typography>
                        <Typography variant="subtitle2" component="h4" sx={{ color: grey[500] }}>
                            Frontend Developer
                        </Typography>
                        <Divider />
                        {pages.map((page, ix) => {
                            return < MenuItem key={ix} component="a" href={page.url} target="_blank"
                                rel="noreferrer" onClick={() => openCloseMenu(setisOpen)} sx={{ minWidth: '150px' }}>
                                <Typography variant="body1" component="p" sx={{ width: '100%', textAlign: 'center' }}>{page.name}</Typography>
                            </MenuItem>
                        })}
                    </Menu>
                </Box>

            </AppBar>
            <Collapse in={open}
                sx={{ position: 'fixed', width: '100%', zIndex: 10 }}>
                <Alert
                    variant="filled"
                    action={
                        <IconButton
                            aria-label="close"
                            color="inherit"
                            size="medium"
                            onClick={() => {
                                setOpen(false);
                            }}

                        >
                            <CloseIcon fontSize="inherit" />
                        </IconButton>
                    }
                    sx={{ mb: 1 }}
                >
                    <Typography variant="body2" component="p">
                        {prodName} has been added to your cart.
                    </Typography>
                </Alert>
            </Collapse>
        </>
    )
}



export default Appbar