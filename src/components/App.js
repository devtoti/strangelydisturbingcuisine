import React, { useState, useEffect, useReducer } from 'react'
import Container from '@mui/material/Container'
import CssBaseline from '@mui/material/CssBaseline'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import blue from '@mui/material/colors/blue';
import Paper from '@mui/material/Paper'
import BasicTable from './List'
import AccountInfo from './AccountInfo'
import Appbar from './Appbar'
import Landing from '../pages/Landing'
import Explore from '../pages/Explore'
import Store from '../pages/Store'
import Collections from '../pages/Collections'
import ProductInfo from '../pages/ProductInfo'
import ErrorPage from '../pages/ErrorPage'
import Checkout from '../pages/Checkout'
import Redirect from '../pages/Redirect'

import { AppBar, Toolbar, Collapse, Avatar, Menu, MenuItem, Box, Grid, Alert, CardMedia, Card, CardContent, Button, Tooltip, Stack, Rating, ImageList, ImageListItem } from '@mui/material'
import {
  BrowserRouter as Router,
  Switch,
  Routes,
  Route,
  Link,
  useLocation
} from "react-router-dom";
import Product from './Product'
import products from '../components/dataProducts'

const initialState = products.map(p => ({ ...p, qty: 0 }))




function App() {
  const [open, setOpen] = useState(false);
  const [prodName, setProdName] = useState('');
  const [selectedProducts, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setOpen(false)
    }, 2000)
    return () => clearTimeout(timeout)
  }, [open])

  function openAlert(name) {
    setProdName(name)
    setOpen(a => !a)
  }

  function reducer(state, action) {
    // console.log(state[action.id].qty)
    // console.table(state)
    let ix;

    //DEEP CLONE GOD LEVEL//
    const newState = JSON.parse(JSON.stringify(state))
    switch (action.name) {
      case 'add':
        ix = state.findIndex(p => p.id === action.id)
        newState[ix].qty += action.qty || 1
        openAlert(action.product)
        return newState

      case 'remove':
        ix = state.findIndex(p => p.id === action.id)
        newState[ix].qty -= action.qty || 1
        return newState
      default:
        console.log(action)
        throw new Error();
    }
  }



  const theme = createTheme({
    palette: {
      type: 'light',
      primary: {
        main: '#345798',
        light: '#5b7bb7',
        dark: '#20355a',
      },
      secondary: {
        main: '#f44336',
      },
      error: {
        main: '#d50000',
      },
      warning: {
        main: '#ffb74d',
      },
    },
    listItemText: {
      fontSize: '4rem',//Insert your required size
    }
  });


  return (
    <>

      <Router>
        <CssBaseline />
        <ThemeProvider theme={theme}>
          <Appbar
            cart={selectedProducts}
            dispatch={dispatch}
            open={open}
            setOpen={setOpen}
            prodName={prodName}
          // setSelectedProducts={setSelectedProducts} 
          >

          </Appbar>


          <Routes>
            <Route path="strangelydisturbingcuisine" element={<Landing />} />
            <Route path="/" element={<Landing />} />
            <Route path="strangelydisturbingcuisine/explore" element={<Explore />} />
            <Route path="strangelydisturbingcuisine/explore/collections" element={<Collections />} />
            <Route path="strangelydisturbingcuisine/explore/products" element={<Store
              dispatch={dispatch}
              products={selectedProducts}
            />} />
            <Route path="strangelydisturbingcuisine/explore/products/:id" element={<ProductInfo dispatch={dispatch} />} />
            <Route path="*" element={<ErrorPage />} />
            <Route path="strangelydisturbingcuisine/checkout" element={
              <Checkout cart={selectedProducts} dispatch={dispatch}>

              </Checkout>
            } />

          </Routes>
        </ThemeProvider>
      </Router>
    </>
  )
}

export default App