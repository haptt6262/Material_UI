import { Grid, Typography } from '@mui/material'
import React from 'react'
import { WidgetSummaryStyle } from '../../assets/styles/WidgetSummaryStyles'


function WidgetSummary() {
    const classes = WidgetSummaryStyle()
    return (
        <Grid container className={classes.root}>
            <Grid item lg={2.8} md={2.8} sm={2.8} xs={2.8} className={classes.typo} sx={{ backgroundColor: 'success.light' }} >
                <Typography variant='h3'>0</Typography>
                <Typography variant='body1'>Nhận</Typography>
            </Grid>
            <Grid item lg={2.8} md={2.8} sm={2.8} xs={2.8} className={classes.typo} sx={{ backgroundColor: 'warning.light' }}>
                <Typography variant='h3'>0</Typography>
                <Typography variant='body1'>Huỷ</Typography>
            </Grid>
            <Grid item lg={2.8} md={2.8} sm={2.8} xs={2.8} className={classes.typo} sx={{ backgroundColor: 'error.light' }}>
                <Typography variant='h3'>0</Typography>
                <Typography variant='body1'>Gọi lại</Typography>
            </Grid>
            <Grid item lg={2.8} md={2.8} sm={2.8} xs={2.8} className={classes.typo} sx={{ backgroundColor: 'primary.light' }}>
                <Typography variant='h3'>0</Typography>
                <Typography variant='body1'>Tổng đơn</Typography>
            </Grid>
        </Grid>
    )
}

export default WidgetSummary