import React from 'react'
import { Paper, AppBar, Toolbar, Container, Avatar, Typography, Menu, MenuItem, Box, Grid, CardMedia, Card, Button, TextField, CardContent, Tooltip, CssBaseline, Stack, Rating, IconButton } from '@mui/material'
import { ImageList, ImageListItem, ImageListItemBar } from '@mui/material'
import { red, grey } from '@mui/material/colors'
import { useTheme } from '@mui/material/styles';
import {Link} from 'react-router-dom'

const stores = [
  {
    name: 'Globe Market',
    img: 'https://www.theacsi.org/wp-content/uploads/2022/01/acsi-supermarket-industry-scaled.jpg'
  },
  {
    name: 'BarraDish',
    img: 'https://www.supermarketnews.com/sites/supermarketnews.com/files/styles/article_featured_retina/public/Aldi%20store_produce%20area.jpg?itok=EIbPYvCA'
  },
  {
    name: 'Jobin Store',
    img: 'https://static.timesofisrael.com/www/uploads/2022/09/Caption_Shufersal-Tel-Aviv_3_Credit_Trigo.jpg.jpg'
  },
  {
    name: 'Bossa Market',
    img: 'https://www.dgicommunications.com/wp-content/uploads/2022/01/grocery-store-design-.jpg'
  },
]

function Landing() {


  const theme = useTheme()
  return (
    <>
      <Box>
        <Paper sx={{ position: 'absolute', right: 0 }}>
          <TextField id="outlined-basic" p={0} label="Search" variant="filled" sx={{ bgcolor: 'white', borderRadius: 2, padding: 0 }} />
        </Paper>
        <CardMedia
          component="img"
          height="140"
          image="https://s32519.pcdn.co/wp-content/uploads/2016/06/blog-supermarket-inventory-management-1.jpg.optimal.jpg"
          alt="image of a supermarket"
          sx={{ filter: 'grayscale(100%)' }}
        />
      </Box>
      <Container maxWidth="md">
        <Typography variant="h2" component="h1" mt={5} mb={1} sx={{ textAlign: "start", color: grey[1000], transition: '0.3s all', '&:hover': { fontSize: "4rem" } }}>
          Stores
        </Typography>
        <Typography variant="h6" component="h1" sx={{ textAlign: "start", color: grey[400] }}>
          Visit your nearest stores' products with just one click
        </Typography>
        <ImageList
          sx={{ width: '100%', height: 450 }}
          cols={4} gap={15}>
          {stores.map((item, id) => {
            return (
              <ImageListItem key={id} component={Link} to="/explore/products">
                <ImageListItemBar 
                title={item.name}
                position="top"
                // primaryTypographyProps={{fontSize: '3rem'}} 
                // disableTypography 
                // classes={{theme.listItemText.fontSize}
                />
                <img
                  src={item.img}
                  loading="lazy"
                  style={{'&:hover': { width: '500px'}}}
                />
              </ImageListItem>
            )
          })}
        </ImageList>
      </Container>
    </>
  )
}

export default Landing