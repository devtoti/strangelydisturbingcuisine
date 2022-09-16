import React, { useState, useEffect } from 'react'
import { Paper, AppBar, Toolbar, Container, Avatar, Alert, Collapse, Typography, Menu, MenuItem, Box, Grid, CardMedia, Tooltip, CssBaseline, TextField, GridItem, Stack } from '@mui/material'
import { Outlet } from 'react-router-dom'
import Product from '../components/Product'
import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
function Landing({ setSelectedProducts, dispatch, products }) {

    const [open, setOpen] = useState(false);
    return (
        <>

            <Container maxWidth="lg">
                <Box pt={5}>
                    <Typography variant="h4" component="h6">
                        Trending Recipes
                    </Typography>
                    <Typography variant="subtitle1" component="p" mb={2}>
                        You asked, we listened. Bon appétit.
                    </Typography>
                </Box>
                <Box elevation={5} sx={{ pb: 10 }}>
                    <Grid container spacing={{ xs: 2, md: 1 }} columns={12}>
                        {products.map((item, ix) =>
                            <Grid item xs={6} sm={4} md={3} lg={2} key={ix}>
                                <Product id={ix} item={item}
                                    setSelectedProducts={setSelectedProducts} dispatch={dispatch} />
                            </Grid>
                        )}
                    </Grid>
                </Box>
            </Container>

        </>
    )
}

export default Landing