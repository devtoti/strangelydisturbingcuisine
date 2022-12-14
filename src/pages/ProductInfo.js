import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import products from '../components/dataProducts'
import { useLocation } from 'react-router-dom'
import { Paper, AppBar, Toolbar, Container, Avatar, Typography, Menu, MenuItem, Box, Grid, Alert, CardMedia, Card, CardContent, Button, Tooltip, CssBaseline, Stack, Rating, ImageList, ImageListItem } from '@mui/material'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { red, grey } from '@mui/material/colors'
import Backdrop from '@mui/material/Backdrop';
import Collapse from '@mui/material/Collapse'
import CircularProgress from '@mui/material/CircularProgress';
import FullWidthTabs from '../components/Tabs'
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';



function ProductInfo({ dispatch }) {
  const params = useParams()
  const [data, setData] = useState({})
  const [favorite, setFavorite] = useState(false)
  const [isInCart, setIsInCart] = useState(false);
  const [value, setValue] = useState(1)
  const [winHeight, setWinHeight] = useState(0)
  const [totalPrice, setTotalPrice] = useState(0)
  const [userQuantity, setUserQuantity] = useState(0)

  const NAVBAR_HEIGHT = 56
  useEffect(() => {
    const chosenProduct = products.find(item => item.id == params.id)
    setData(chosenProduct)
    setWinHeight(window.innerHeight)

  }, [])


  useEffect(() => {
    setTotalPrice(data.price)
  }, [data])


  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsInCart(false)

    }, 1000);

    return () => {
      clearTimeout(timeout)

    }
  }, [isInCart])

  useEffect(() => {

    setTotalPrice(value * data.price)
    setUserQuantity(value)
  }, [value])

  let location = useLocation();

  const { id, name, rating, price, img, description, category } = data


  const addToFav = () => {
    setFavorite(prev => !prev)
  }

  const updateUserProducts = (e) => {
    value = e.target.valueAsNumber
    setTotalPrice(value * data.price)
    setUserQuantity(value)
  }

  function updateInput(e) {
    const itemNum = e.target.valueAsNumber
    if (!itemNum) setValue(1)
    else if (itemNum >= 50) setValue(50)
    else setValue(itemNum)
  }

  const EmptyCartMenu = () => {
    return <Box p={2} pt={0}
      onKeyDown={() => openCloseMenu(setIsCartOpen)}

    >

      <Typography pt={1}

      >
        There are no items in your cart.
      </Typography>

      <Button variant='outlined' sx={{ width: '100%', mt: 2 }}>
        <Link to="strangelydisturbingcuisine/explore/products">
          Explore
        </Link>
      </Button>
    </Box>
  }

  return (
    <>


      <Container maxWidth="sm" sx={{
        // backgroundColor: 'hsl(50 20% 90%)',
         display: 'flex', flexDirection: 'column', flewWrap: 'wrap',
        height: winHeight - NAVBAR_HEIGHT,
        position: 'relative',
      }}>
        <Box pt={2}>
          <CardMedia
            component="img"

            image={img}
            alt={description}
            sx={{ height: { xs: 200, sm: 300 } }}
          />
          <ImageList cols={4} sx={{ mt: 1, overflow: 'hidden', height: { xs: 75, sm: 100, md: 150 } }}>
            {Array.from(Array(4)).map((item, ix) => (
              <ImageListItem key={ix}
              >
                <img
                  src={img}
                  srcSet={img}
                  alt={description}
                  loading="lazy"
                />
              </ImageListItem>
            ))}
          </ImageList>

        </Box>
        <Stack direction="row" justifyContent="space-between" spacing={{ xs: 1, sm: 2, md: 4 }}>
          <Typography variant="h5" component="h1">

            {name}
          </Typography>
          {!favorite && <FavoriteBorderIcon sx={{ cursor: "pointer", color: "rgba(0 0 0/0.5)" }} onClick={addToFav} />}
          {favorite && <FavoriteIcon sx={{ cursor: "pointer", color: red[700] }} onClick={addToFav} />}

        </Stack>
        <Typography variant="subtitle2" component="h3">
          {category}
        </Typography>
        <Typography variant="body2" component="p" sx={{ paddingTop: 2, flewGrow: 2 }}>
          {description}
        </Typography>



        <Box pt={2}>
          <Typography>
            Quantity
          </Typography>
          <input type="number" min="1" max={50} placeholder="" step="1" value={value}
            onChange={(e) => updateInput(e)}
            style={{ padding: "0 1rem" }}></input>
        </Box>
        <Box sx={{ mt: 'auto', mb: 2, pb: 2, 
        // backgroundColor: 'hsl(50 20% 90%)' 
      }}
        >
          <Typography variant="subtitle1" component="p" pt={1}>
            Price
          </Typography>

          <Stack direction="row" justifyContent="space-between" alignItems="center" spacing={{ xs: 1, sm: 2, md: 4 }}
          // sx={{outline: '1px solid green'}}
          >
            <Box>
              <Typography variant="h4" component="p">
                ${totalPrice}
              </Typography>
            </Box>
            <Stack direction="row" alignItems="center" >
              <Typography variant="body1" component="p" pr={1} sx={{ color: grey[500] }}>
                ${price}/pc
              </Typography>
              <IconButton onClick={() => {
                setIsInCart(true)
                dispatch({ name: 'add', qty: userQuantity, id, product: name })
              }}>
                <Button variant="outlined" sx={{ height: "2rem" }}>Add to cart</Button>
              </IconButton>
            </Stack>
          </Stack>
        </Box>
      </Container>

      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={isInCart}
      >
        <CircularProgress color="inherit" />
      </Backdrop>

    </>
  )
}


export default ProductInfo