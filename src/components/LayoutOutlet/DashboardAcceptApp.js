import { Box, Button, FormControl, Grid, InputBase, NativeSelect, styled, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { DashboardAcceptAppStyles } from '../../assets/styles/DashboardAcceptAppStyles'
import Form from '../AcceptAppComponent/Form';
import WidgetSummary from '../AcceptAppComponent/WidgetSummary'

const BootstrapInput = styled(InputBase)(({ theme }) => ({
    'label + &': {
        marginTop: theme.spacing(3),
    },
    '& .MuiInputBase-input': {
        borderRadius: 4,
        position: 'relative',
        backgroundColor: theme.palette.background.paper,
        border: '1px solid #ced4da',
        fontSize: 16,
        padding: '10px 26px 10px 12px',
        transition: theme.transitions.create(['border-color', 'box-shadow']),
        // Use the system font instead of the default Roboto font.
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
        '&:focus': {
            borderRadius: 4,
            borderColor: '#80bdff',
            boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
        },
    },
}));

const DashboardAcceptApp = () => {
    const classes = DashboardAcceptAppStyles()
    const [dateTime, setDateTime] = useState(new Date());

    useEffect(() => {
        const id = setInterval(() => setDateTime(new Date()), 1000);
        return () => {
            clearInterval(id);
        }
    }, []);
    return (
        <Box className={classes.root}>
            <Box className={classes.dateAndForm}>
                {/* DATE TIME NOW */}
                <h4 className={classes.dateTime}>{`${dateTime.toLocaleDateString()} ${dateTime.toLocaleTimeString()}`}</h4>
                {/* FORM CONTROL */}
                <FormControl sx={{ m: 1, width: '15vw' }} variant="standard">
                    <NativeSelect
                        id="demo-customized-select-native"
                        input={<BootstrapInput />}>
                        <option aria-label="None" value="" />
                        <option value={10}>Ten</option>
                        <option value={20}>Twenty</option>
                        <option value={30}>Thirty</option>
                    </NativeSelect>
                </FormControl>
            </Box>
            {/* WIDGET SUMMARY*/}
            <WidgetSummary />
            {/* MAIN CONTENT */}
            <Grid container>
                <Grid item lg={10} md={10} sm={12}>
                    <Form />
                </Grid>
                <Grid className={classes.buttons} sx={{ "& .MuiGrid-root": { flexDirection: 'none' }, flexDirection: 'column' }} item lg={2} md={2} sm={12}>
                    <Button className={classes.btn} variant='contained' sx={{ backgroundColor: 'success.light', mt: '10px', mb: '10px', width: '9vw' }}>Nhận</Button>
                    <Button className={classes.btn} variant='contained' sx={{ backgroundColor: 'warning.light', mt: '10px', mb: '10px', width: '9vw' }}>Hủy</Button>
                    <Button className={classes.btn} variant='contained' sx={{ backgroundColor: 'error.light', mt: '10px', mb: '10px', width: '9vw' }}>Gọi</Button>
                </Grid>
            </Grid>
        </Box>
    )
}

export default DashboardAcceptApp