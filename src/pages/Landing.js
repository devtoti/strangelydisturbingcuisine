import React, { useState, useEffect } from 'react'
import { red, grey } from '@mui/material/colors'
import { Paper, AppBar, Toolbar, Container, Avatar, Typography, Menu, MenuItem, Box, Grid, CardMedia, Card, Button, CardContent, Tooltip, CssBaseline, Stack, Rating, IconButton } from '@mui/material'
import { Link, Outlet } from 'react-router-dom'
import img2 from '../../public/images/turtle-dish.jpg'
import { blue } from '@mui/material/colors'
import bgimgs from '../components/imgCarrousel'
const NAVBAR_HEIGHT = 64
let COUNT = 0

function Landing() {

  const [currBgImg, setCurrBgImg] = useState('')
  const [winHeight, setWinHeight] = useState(0)
  useEffect(() => {
    setWinHeight(window.innerHeight - NAVBAR_HEIGHT)
    setCurrBgImg(bgimgs[0].img)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      let modulo = COUNT % bgimgs.length
      setCurrBgImg(bgimgs[modulo].img)
      COUNT++
    }, 3000)
    return () => clearInterval(interval)
  }, [currBgImg])


  return (
    <>
      <div style={{ backgroundColor: 'rgb(0 0 0 /0.5)', height: winHeight, width: '100%', zIndex: -1}}>

        <CardMedia
          component="img"
          height={winHeight}
          image={currBgImg}
          sx={{position: 'relative', filter: 'grayscale(0.9) blur(1px)', zIndex: -2, transition: '0.3s all' }}
        >
        </CardMedia>
      </div>

      <Stack justifyContent="center" alignItems="center" sx={{ height: winHeight, flexWrap: 'wrap', width: '100vw', zIndex: 10, position: 'fixed', bottom: 0}} pr={5} pl={5}>
        <Typography variant="h2" component="h1" mb={3} sx={{ textAlign: "center", color: 'white', transition: '0.3s all', '&:hover': { fontSize: "4rem" } }}>
          Strangely Disturbing Cuisine
        </Typography>
        <Typography variant="h5" component="h1" sx={{ textAlign: "center", color: grey[500]}}>
          E-Commerce site prototype built with MUI and AI generated products
        </Typography>
        <Button component={Link} to="explore" variant="contained" pt={10} size="large" sx={{mt: 5}}>
          enter store
        </Button>
      </Stack>

    </>
  )
}

export default Landing