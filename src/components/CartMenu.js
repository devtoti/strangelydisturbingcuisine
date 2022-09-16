import { red, grey } from '@mui/material/colors'
import React from 'react'
import { Paper, AppBar, Toolbar, Stack, Divider, Container, Avatar, Typography, Menu, MenuItem, Box, Tooltip, Button, CssBaseline, CardMedia, Lis, ListItem, Collapse, Alert } from '@mui/material'
import AirlinesIcon from '@mui/icons-material/Airlines';
import { useState, useEffect, useRef } from 'react'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import '../styles.css'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import BakeryDiningIcon from '@mui/icons-material/BakeryDining';
import { useTheme } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import NavDrawer from '../components/Drawer'
import { Link } from 'react-router-dom'
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { useLocation } from 'react-router-dom'

function CartMenu({ array1, array2, dispatch }) {
    const location = useLocation()

    return (


        <Box maxWidth>
            {array1.map((item, ix) =>
                <article className={ix} key={ix} id={ix}>
                    <ListItem id={ix}>
                        <Stack direction="row" alignItems="center" sx={{ flexGrow: 1, flexWrap: 'wrap' }}>

                            <Avatar
                                src={item.img}
                                alt={item.name}
                                sx={{ mr: 1 }}>

                            </Avatar>
                            <Typography pr={2} variant="subtitle2" sx={{ minWidth: { lg: '200px', sm: '50px' } }}>

                                {item.name}
                            </Typography>
                            <Box sx={{ display: 'flex', flexDirection: 'row', ml: 'auto', verticalAlign: 'center', flexWrap: 'nowrap' }}>

                                <Typography variant="subtitle1" pr={2} sx={{ fontWeight: 'bold', lineHeight: '40px' }}>

                                    x{item.qty}
                                </Typography>
                                <Typography variant="subtitle1" mr="auto" sx={{ textAlign: 'start', lineHeight: '40px' }}>

                                    ${item.qty * item.price}
                                </Typography>
                               
                                    <IconButton color="primary" sx={{ p: 0, ml: 1 }}>

                                        <RemoveCircleOutlineIcon sx={{ ml: 'auto' }}
                                            onClick={() => dispatch({ name: 'remove', qty: 1, id: item.id })}
                                        />
                                    </IconButton>
                                    <IconButton sx={{ color: 'rgb(0 0 0 /0.5)', p: 0, ml: 1 }}>

                                        <DeleteOutlineIcon sx={{ ml: 'auto' }}
                                            onClick={() => dispatch({ name: 'remove', qty: item.qty, id: item.id })}
                                        />
                                    </IconButton>
                               
                            </Box>

                        </Stack>
                    </ListItem>
                </article>
            )}
            <Divider variant="middle" />
            <ListItem>

                <Stack direction="row" alignItems="center" sx={{ flexGrow: 1 }}>


                    <Typography variant="subtitle1" pr={2} sx={{ fontWeight: 'bold', minWidth: '50px', flexGrow: 1 }}>

                        TOTAL
                    </Typography>
                    <Typography variant="subtitle1" mr="auto" sx={{ textAlign: 'start' }} pr={1.5}>

                        ${array2.reduce((prev, curr) => prev + (curr.qty * curr.price), 0)}
                    </Typography>
                    {location.pathname === '/checkout' && null}
                    {location.pathname !== '/checkout' &&
                        <Button component={Link} to="strangelydisturbingcuisine/checkout" variant="contained" size="small">
                            Checkout
                        </Button>
                    }
                </Stack>
            </ListItem>


        </Box>
    )
}

export default CartMenu