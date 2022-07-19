import React from 'react'
import { Box, Divider, Drawer, Typography, ListItem, ListItemText, IconButton, Avatar } from '@mui/material'
import { useLocation, useNavigate } from 'react-router-dom'
import { SidebarStyle } from '../assets/styles/SidebarStyles'
import { account } from '../Mockup/mockup'
import { navConfig } from '../Mockup/mockup'
import { Menu } from '@mui/icons-material'

function Sidebar({ isMobile, funcSetIsMobile }) {
    const classes = SidebarStyle()
    const navigate = useNavigate()
    const location = useLocation()

    return (
        <Box className={classes.root}>
            <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={funcSetIsMobile}
                className={classes.iconButton}
            >
                <Menu />
            </IconButton>

            <Box className={classes.drawer}>
                <Drawer variant='permanent' open anchor='left' classes={{ paper: classes.drawerPaper }}
                >
                    {/* account */}
                    <Box className={classes.account}>
                        <Box className={classes.avatar}>
                            <Avatar variant='rounded' src={account.logoURL} alt='logo' sx={{ width: 100, height: 100 }} />
                        </Box>
                        <Typography variant="subtitle2" sx={{ color: '#fff', textTransform: 'uppercase' }}>
                            {account.displayName}
                        </Typography>
                        <Typography variant="subtitle2" sx={{ color: '#fff' }}>
                            {account.email}
                        </Typography>
                    </Box>
                    <Divider sx={{ borderColor: 'white', marginBottom: '15px' }} />
                    {/* list */}
                    {
                        navConfig.map(item => (
                            <ListItem button key={item.id} onClick={() => { navigate(item.path) }} sx={{ padding: 0 }}>
                                <ListItemText sx={{ margin: 0, paddingLeft: '15px', paddingTop: '10px', paddingBottom: '10px' }} className={location.pathname === item.path ? classes.active : 'red'} >{item.title}</ListItemText>
                            </ListItem>
                        ))
                    }
                </Drawer>
            </Box>

            <Box>
                <Drawer variant='temporary' open={isMobile} anchor='left' classes={{ paper: classes.drawerPaper }} onClick={funcSetIsMobile}
                >
                    {/* account */}
                    <Box className={classes.account}>
                        <Box className={classes.avatar}>
                            <Avatar variant='rounded' src={account.logoURL} alt='logo' sx={{ width: 100, height: 100 }} />
                        </Box>
                        <Typography variant="subtitle2" sx={{ color: '#fff', textTransform: 'uppercase' }}>
                            {account.displayName}
                        </Typography>
                        <Typography variant="subtitle2" sx={{ color: '#fff' }}>
                            {account.email}
                        </Typography>
                    </Box>
                    <Divider className='classes.dividerBar' />
                    {/* list */}
                    {
                        navConfig.map(item => (
                            <ListItem button key={item.id} onClick={() => { navigate(item.path) }} sx={{ padding: 0 }}>
                                <ListItemText sx={{ margin: 0, paddingLeft: '15px', paddingTop: '10px', paddingBottom: '10px' }} className={location.pathname === item.path ? classes.active : 'red'} >{item.title}</ListItemText>
                            </ListItem>
                        ))
                    }
                </Drawer>
            </Box>
        </Box >
    )
}

export default Sidebar