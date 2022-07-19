import { Box, Drawer, ListItem, ListItemText } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { navConfig } from '../Mockup/mockup'
function SidebarDrawer() {
    const navigate = useNavigate()
    return (
        <Box>
            <Drawer variant='permanent' open anchor='left'>
                pc sidebar
            </Drawer>
            <Drawer variant='permanent' open={false} anchor='left'>
                {
                    navConfig.map(item => (
                        <ListItem button key={item.id} onClick={() => { navigate(item.path) }}>
                            <ListItemText>{item.title}</ListItemText>
                        </ListItem>
                    ))
                }
            </Drawer>
        </Box>
    )
}

export default SidebarDrawer