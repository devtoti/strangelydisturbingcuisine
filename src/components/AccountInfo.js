import React from 'react'
import { Paper, AppBar, Toolbar, Container, Avatar, Typography, Menu, MenuItem, Box, Tooltip, CssBaseline } from '@mui/material'
import { useState, useEffect, useRef } from 'react'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';

import { red } from '@mui/material/colors'
import IconButton from '@mui/material/IconButton';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';

function AccountInfo() {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}} mr={2}>
            <Typography variant="h5" component="h2" mt={5}>
                Account Section
            </Typography>
            <Paper elevation={2} sx={{mt: 2, pr: 2, width: {sm: 300, md: 500, lg: 700, xl: 900}}}>
                <Box>
                    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                        {[0, 1, 2, 3].map((value) => {
                            const labelId = `checkbox-list-label-${value}`;

                            return (
                                <ListItem
                                    key={value}
                                    secondaryAction={
                                        <IconButton edge="end" aria-label="comments">
                                        </IconButton>
                                    }
                                    disablePadding
                                >
                                    <ListItemButton role={undefined} dense>
                                        <ListItemIcon>
                                            <Checkbox
                                                edge="start"
                                                checked={2}
                                                tabIndex={-1}
                                                disableRipple
                                                inputProps={{ 'aria-labelledby': labelId }}
                                            />
                                        </ListItemIcon>
                                        <ListItemText id={labelId} primary={`Line item ${value + 1}`} />
                                    </ListItemButton>
                                    <RemoveCircleOutlineIcon />
                                </ListItem>
                            );
                        })}
                    </List>
                </Box>
            </Paper>
        </Box>
    )
}

export default AccountInfo