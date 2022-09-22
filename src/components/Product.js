import React from 'react'
import { red } from '@mui/material/colors'
import { Paper, AppBar, Toolbar, Container, Avatar, Typography, Menu, MenuItem, Box, Grid, CardMedia, Card, Button, CardContent, Tooltip, CssBaseline, Stack, Rating, IconButton } from '@mui/material'
import { Link, Outlet } from 'react-router-dom'
import img2 from '../../public/images/turtle-dish.jpg'
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';




function Product({ item, dispatch }) {

    const { id, name, price, rating, img, qty, description } = item

    const AddToCart = () => {
        return (
            <Stack direction="row" justifyContent="space-between" alignItems="flex-end" sx={{ mt: 2, width: '100%' }}>
                <Box sx={{ display: 'flex', alignItems: 'flex-end', p: 0 }}>
                    <IconButton variant='outlined'
                        color="primary"
                        size="small"
                        onClick={() => dispatch({ name: 'remove', qty: 1, id, product: name })}>
                        <RemoveIcon />
                    </IconButton>
                    <Typography variant="subtitle1" fontWeight="bold" pr={1} pl={1}>
                        {qty}
                    </Typography>
                    <IconButton variant='outlined' component="button" size="small"
                        color="primary"
                        onClick={() => dispatch({ name: 'add', qty: 1, id, product: name })}>
                        <AddIcon />
                    </IconButton>

                </Box>
                <Typography variant="subtitle1" fontWeight="bold" pt={1} color="primary">
                    $ {price * qty}
                </Typography>
            </Stack>
        )
    }

    const ProdNotSelected = () => {
        return (

            <Box sx={{ alignItems: 'flex-end', width: '100%', display: 'flex', justifyContent: 'space-between'}}>
                <Typography variant="h6" component="h4" sx={{ textAlign: 'start'}}>${price}</Typography>
                <Button variant="outlined" size="small" onClick={() => dispatch({ name: 'add', qty: 1, id, product: name })}>Add</Button>
            </Box>
        )
    }

    return (


        <Card sx={{
            borderRadius: 0, position: 'relative',
        }}>
            <CardMedia
                component="img"
                height="200"
                src={img}
                alt={description}
            />
            <CardContent sx={{ pt: 0.5, pl: 1, pb: 0, mb: 0 }} component="article" sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', height: '150px', p: {xs: '8px', sm: 2}}}>
                <Box sx={{ width: '100%', ml: 0}}>
                    <Link to={`${id}`} style={{ textDecoration: 'none' }}>
                        <Typography variant="body2" component="h3" pt={0} sx={{ mb: 0, '&:hover': { color: 'rgb(0 0 0 /0.5)' } }}>
                            {name}
                        </Typography>
                    </Link>
                    <Rating name="size-small" value={rating} size="small" readOnly sx={{display: {xs: 'flex', sm:'flex'}}} >
                    </Rating>
                </Box>
                {qty === 0 && <ProdNotSelected />}
                {qty > 0 && <AddToCart />}
            </CardContent>
        </Card>
    )
}

export default Product