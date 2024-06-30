import { Box, Grid, InputBase, Typography } from "@mui/material"
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
    mainDiv: {
        border: '1px solid #1D1D20',
        borderRadius: '8px',
        margin: '1rem',
    },
    max_btn__wrap: {
        backgroundColor: '#101012',
        border: '1px solid #1D1D20',
        borderRadius: '8px',
        padding: '2px',
        marginTop: '0.5rem',
    },
    top__input: {
        margin: '0.5rem',
    },
    grid: {
        margin: '5px'
    },
    buy__btn: {
        backgroundColor: '#00FFFF !important',
        padding: '10px 0px !important',
        borderRadius: '8px !important',
        color: '#000 !important',
        textDecoration: 'none',
        fontWeight: 700,
        gap: "8px",
        display: 'flex',
        textAlign: 'center',
        fontSize: '20px',
        '&:hover': {
            backgroundColor: '#00ffff',
            color: '#000'
        }
    },
    Card: {
        backgroundColor: '#101012',
        border: '1px solid #1D1D20',
        padding: '1rem',
        borderRadius: '8px',
        textAlign: 'center',
        marginTop:'2.4rem',
        '@media(max-width : 900px)':{
            marginTop:'1rem',
        }
    },
    maind: {
        backgroundColor:'#000',
        margin: '1rem',
        border: '1px solid #1D1D20',
        padding: '1rem',
        borderRadius: '8px',

    }
}));

const Calcolate = () => {
    const classes = useStyles();
    return (
        <>
            <Box className={classes.maind}>
                <Grid container spacing={2}>
                    <Grid item lg={8} md={8} sm={12} xs={12}>
                        <Box className={classes.top__input}>
                            <Typography color="#fff">
                                Your investment in $ USD
                            </Typography>
                            <Box className={classes.max_btn__wrap}>
                                <InputBase

                                    sx={{
                                        flex: 1,
                                        color: '#fff',
                                        padding: '0.3rem 0.5rem',
                                        '::placeholder': {
                                            color: '#fff',
                                        },

                                        '& input[type=number]': {
                                            '-moz-appearance': 'textfield',
                                        },
                                        '& input[type=number]::-webkit-outer-spin-button, & input[type=number]::-webkit-inner-spin-button': {
                                            '-webkit-appearance': 'none',
                                            margin: 0,
                                        },
                                    }}
                                    fullWidth
                                    placeholder="Your investment in $ USD"
                                    type="number"
                                />
                            </Box>
                        </Box>
                        <Box className={classes.top__input}>
                            <Typography color="#fff">
                                Return comitment amount in $ USD
                            </Typography>
                            <Box className={classes.max_btn__wrap}>
                                <InputBase

                                    sx={{
                                        flex: 1,
                                        color: '#fff',
                                        padding: '0.3rem 0.5rem',
                                        '::placeholder': {
                                            color: '#fff',
                                        },

                                        '& input[type=number]': {
                                            '-moz-appearance': 'textfield',
                                        },
                                        '& input[type=number]::-webkit-outer-spin-button, & input[type=number]::-webkit-inner-spin-button': {
                                            '-webkit-appearance': 'none',
                                            margin: 0,
                                        },
                                    }}
                                    fullWidth
                                    placeholder="Return comitment amount in $ USD"
                                    type="number"
                                />
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item lg={4} md={4} sm={12} xs={12} >
                        <Box className={classes.Card}>
                            <Typography color={'#fff'} variant="h5">2000 RAMA</Typography>
                            <Typography mt={1} color={'#fff'}>return value</Typography>
                            <Typography mt={1} color={'#fff'} fontSize={14}>0.00%</Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}

export default Calcolate