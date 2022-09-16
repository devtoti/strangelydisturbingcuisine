import React, { useState, useEffect } from 'react'

import { Paper, AppBar, Toolbar, Container, Avatar, Typography, Menu, MenuItem, Box, Grid, CardMedia, Card, Button, CardContent, Tooltip, CssBaseline, Stack, Rating } from '@mui/material'
import { Link, Outlet } from 'react-router-dom'

function ErrorPage() {
    const [winHeight, setWinHeight] = useState(0)
    useEffect(() => {
        setWinHeight(window.innerHeight)
    }, [])
    const NAVBAR_HEIGHT = 56

    return (
        <Container maxWidth="lg" sx={{ position: 'absolute', height: winHeight - NAVBAR_HEIGHT }}>
            <Stack direction="row" alignItems="center" justifyContent="center"
             alignContent="center"
              sx={{ flexWrap: 'wrap', height: 'inherit' }}>

                <Typography variant="h4" component="h3" sx={{ width: '100%', textAlign: 'center', mt: 'auto' }}>
                    Oops!
                </Typography>
                <Typography variant="h5" component="h4" sx={{ width: '100%', textAlign: 'center' }}>
                    Page not found
                </Typography>
                <Typography variant="h6" component="h4" pr={1}>
                    (Error 404)
                </Typography>
        

                <Link to="/" style={{ width: '100%', textAlign: 'center', position: 'absolute', textDecoration:'none', bottom: "2rem"}}>

                    <Typography variant="h6" component="p" >
                        Go back to home page
                    </Typography>
                </Link>
       
            </Stack>
        </Container>
    )
}

export default ErrorPage