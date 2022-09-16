import React from 'react'
import { Paper, AppBar, Toolbar, Container, Avatar, Typography, Menu, MenuItem, Box, Grid, CardMedia, Tooltip, CssBaseline, TextField, Button, Stack } from '@mui/material'

import { Outlet, Link } from 'react-router-dom'
import Product from '../components/Product'
import SearchIcon from '@mui/icons-material/Search';
import dishesGIF from '../../static/strangely-disturbing-cuisine.gif'
function Explore() {
  return (
    <>
      <Box>

        <CardMedia
          component="img"
          height="140"
          image="https://s32519.pcdn.co/wp-content/uploads/2016/06/blog-supermarket-inventory-management-1.jpg.optimal.jpg"
          alt="image of a supermarket"
          sx={{ filter: 'grayscale(100%)' }}
        />

      </Box>
      <Container maxWidth="sm" sx={{}}>
        <Stack
          direction="column"
          spacing={2}
          sx={{}}
        >

          <Paper elevation={2} sx={{ maxWidth: '100%', padding: 2, height: 'auto', mb: 5, transform: 'translate(0, -100px)' }}>

            <Typography variant="h4" component="h3" sx={{ display: 'inline-block' }}>
              Collections
            </Typography>
            <Typography variant="body1" component="p" >
              <span style={{ fontWeight: 'bold' }}>Strangely Disturbing Cuisine</span> offers you fresh, entertaining, and exotic dishes generated with AI algorithms.
            </Typography>
            <Stack direction="row" justifyContent="space-between" pt={2}>

              <Button variant="text" component={Link} to="products"> products</Button>
              <Button variant="text" component={Link} to="collections"> Stores</Button>
            </Stack>
          </Paper>
          <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'center', transform: 'translate(0, -125px)', overflow: 'hidden', width: '100%'}}>
            <CardMedia 
              component="img"
              // height="194"
              image={dishesGIF}
              alt="an animation of many exotic dishes"
              sx={{width: {xs: '50vh', sm: '60vh'}}}
            />
          </Box>
        </Stack>
      </Container>
    </>
  )
}

export default Explore