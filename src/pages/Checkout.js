import React from 'react'
import { Paper, AppBar, Toolbar, Container, Avatar, Typography, Menu, MenuItem, Box, Grid, CardMedia, Card, Button, TextField, CardContent, Tooltip, CssBaseline, Stack, Rating, IconButton } from '@mui/material'
import { ImageList, ImageListItem, ImageListItemBar } from '@mui/material'
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import HorizontalLinearStepper from '../components/Stepper';
import CartMenu from '../components/CartMenu';
const steps = [
  'Select master blaster campaign settings',
  'Create an ad group',
  'Create an ad',
];

function Checkout({ cart, dispatch, children }) {
  const filteredCart = cart.filter(p => p.qty)
  return (
    <Container maxWidth="md" sx={{}}>
      <Stack
        direction="column"
        spacing={2}
        sx={{}}
      >

        <Paper elevation={2} sx={{ padding: 1, height: 'auto', mb: 5, mt: 3, pb: 5 }}>
          <Typography variant="h4" component="h1" sx={{ textAlign: 'center' }}>
            Checkout
          </Typography>
          <Typography variant="h6" component="p" sx={{ textAlign: 'center', pb: 3, color: 'lightgray' }}>
            (Mockup)
          </Typography>
          <Stack>

            <Box sx={{ width: '100%' }} p={0}>
              <HorizontalLinearStepper>
                <CartMenu array1={filteredCart} array2={cart} dispatch={dispatch} />
              </HorizontalLinearStepper>
          <Typography variant="body2" component="p" sx={{color: 'lightgray', pl: 3, fontSize: '0.8rem'}}>
            This particular component's logic was taken from the MUI docs.
          </Typography>
        
            </Box>
          </Stack>
        </Paper>

      </Stack>
    </Container>
  )
}

export default Checkout