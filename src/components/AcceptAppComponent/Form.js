import { FormControl, FormControlLabel, FormLabel, Grid, Radio, RadioGroup, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { FormStyle } from '../../assets/styles/FormStyles'

function Form() {
    const classes = FormStyle()
    return (
        <Box
            component="form"
            noValidate
            autoComplete="off"
            className={classes.root}
        >
            <Typography variant="h6" className={classes.typo}>ĐƠN MỚI</Typography>
            <Grid container sx={{
                "& .MuiTextField-root": { m: 1, width: "90%" }
            }}>
                <Grid item lg={6} md={6} sm={6} xs={6} >
                    <TextField
                        required
                        id="standard-required"
                        label="Điện thoại"
                        defaultValue="Thu ha"
                        variant="standard"
                    />
                    <TextField
                        required
                        id="standard-required"
                        label="Sản phẩm"
                        defaultValue="Thu ha"
                        variant="standard"
                    />
                </Grid>
                <Grid item lg={6} md={6} sm={6} xs={6}>
                    <TextField
                        required
                        id="standard-required"
                        label="Tên người nhận"
                        defaultValue="Thu ha"
                        variant="standard"
                    />
                    <TextField
                        required
                        id="standard-required"
                        label="Giá tiền"
                        defaultValue="Thu ha"
                        variant="standard"
                    />
                </Grid>
            </Grid>
            <Grid container>
                <Grid item sx={{
                    "& .MuiTextField-root": { m: 1, width: "50vw" }
                }}>
                    <TextField
                        required
                        id="standard-required"
                        label="Địa chỉ"
                        defaultValue="Thu ha"
                        variant="standard"
                    />
                </Grid>
            </Grid>

            <Grid container>
                <Grid item lg={6} md={6} sm={6} xs={6}>
                    <FormControl>
                        <RadioGroup
                            aria-labelledby="demo-radio-buttons-group-label"
                            defaultValue="female"
                            name="radio-buttons-group"
                        >
                            <FormControlLabel value="female" control={<Radio />} label="Miền Bắc" />
                            <FormControlLabel value="male" control={<Radio />} label="Miền Nam" />
                        </RadioGroup>
                    </FormControl>
                </Grid>
                <Grid item lg={6} md={6} sm={6} xs={6}>
                    <FormControl>
                        <RadioGroup
                            aria-labelledby="demo-radio-buttons-group-label"
                            defaultValue="female"
                            name="radio-buttons-group"
                        >
                            <FormControlLabel value="female" control={<Radio />} label="Nam" />
                            <FormControlLabel value="male" control={<Radio />} label="Nữ" />
                        </RadioGroup>
                    </FormControl>
                </Grid>
            </Grid>

            <Grid container>
                <Grid item sx={{
                    "& .MuiTextField-root": { m: 1, width: "50vw" }, mb: '40px'
                }}>
                    <TextField
                        required
                        id="standard-required"
                        label="Ghi chú"
                        defaultValue="Thu ha"
                        variant="standard"
                    />
                </Grid>
            </Grid>
        </Box>
    )
}

export default Form

