import { convertToAbbreviated } from "@/lib/convertToAbbreviated";
import { formatNumberToCurrencyString } from "@/lib/formatNumberToCurrencyString";
import { Box, Grid, InputBase, Typography } from "@mui/material"
import { makeStyles } from '@mui/styles';
import { formatEther } from "viem";
 


const useStyles = makeStyles({
    mainDiv: {
        margin: '1rem',
        '@media(max-width : 600px)': {
            margin: '8px'
        }
    },
    box_hding: {

        backgroundColor: '#101012',
        border: '1px solid #1D1D20',
        display: 'flex',
        justifyContent: 'center',
        height: '480px',
        alignItems: 'center',
        borderRadius: '8px'
    },
    Card: {
        backgroundColor: '#02b5b5',
        border: '1px solid #02b5b5',
        padding: '1rem',
        borderRadius: '8px',
        height: '100%'
    },
    cardlist: {
        padding: '10px',
    },
    terms: {
        padding: '10px',
    },
    boxCr: {
        border: '1px solid #1D1D20',
        borderRadius: '8px',
        marginTop: '1.5rem'
    },
    stepByStep:{
        marginTop:'1rem'
    },
    stepByStepbox:{
        backgroundColor:'#1c1c201f',
        padding:'1rem',
        borderRadius:'8px',
        marginTop:'1rem',
        border:'1px solid #02b5b56b'
    }



});





const Terms = ({ resultOfUserLocked }: any) => {
    const classes = useStyles();



    return (
        <>

            <Box className={classes.mainDiv}>
                <Box className={classes.boxCr}>

                    <Box className={classes.cardlist}>
                        <Grid container spacing={2}>

                            <Grid item lg={12} md={12} sm={12} xs={12}>
                                <Box className={classes.Card}>
                                    <Box sx={{ textAlign: 'center' }}>
                                        <Typography color={'#000'} variant="h5">Mutual Commitment Agreement</Typography>
                                        <Typography mt={1} color={'#000'} fontSize={17} variant="h6">Hello Ramestta Private Investors</Typography>
                                    </Box>

                                </Box>
                            </Grid>




                        </Grid>
                    </Box>
                    <Box className={classes.terms}>
                        <Grid container spacing={2}>
                            <Grid item lg={12} md={12} sm={12} xs={12}>
                                <Box className={classes.stepByStep}>
                                <Typography color={'#02b5b5'} variant="h5">Introduction</Typography>
                                <Typography mt={1} color={'#fff'} >Welcome to the Ramestta Private Investors platform. This platform supports blockchain development while securing investor funds through smart contracts to ensure investors receive the exact value as committed at the time of investing.</Typography>
                                </Box>

                                <Box className={classes.stepByStep}>
                                <Typography color={'#02b5b5'} variant="h5">Investment Overview</Typography>
                                <Typography mt={1} color={'#fff'} >Once an investor funds the platform, the developers commit to a specific return and fix the tenure. A smart contract is created with these details, operating without any middleman to deliver the committed profit.</Typography>
                                </Box>

                                <Box className={classes.stepByStepbox}>
                                <Typography color={'#fff'} variant="h6">Example for Clarity</Typography>
                                <Typography mt={1} color={'#fff'}  fontWeight={700}>Invested Amount: <Typography component={'span'} fontWeight={300}>Investment amount can be a minimum of $5,000 and a maximum of $10,000,000, depending on the investor.</Typography></Typography>
                                <Typography mt={1} color={'#fff'}  fontWeight={700}>Date of Investment: <Typography component={'span'} fontWeight={300}>When investment is initiated.</Typography></Typography>
                                <Typography mt={1} color={'#fff'} fontWeight={700}>Return Value: <Typography component={'span'} fontWeight={300}>Return commitment value varies from investor to investor, depending on the amount of investment. The minimum and maximum returns are mutually decided between the developer and investors.</Typography></Typography>
                                <Typography mt={1} color={'#fff'}  fontWeight={700}>Tenure: <Typography component={'span'} fontWeight={300}>Tenure also varies, with the minimum tenure being 24 months. It is determined based on mutual consent and understanding.</Typography></Typography>
                                </Box>

                                <Box className={classes.stepByStep}>
                                <Typography color={'#02b5b5'} variant="h5">Terms of Investment</Typography>
                                <Typography mt={1} color={'#fff'} variant="h6">Initial Locking: <Typography component={'span'}>The contract will lock RAMA worth the invested amount based on the market price on the date of investment.</Typography></Typography>
                                <Typography mt={1} color={'#fff'} variant="h6">Return Mechanism: <Typography component={'span'}>At the end of the tenure, the smart contract will automatically check the current market value of the locked RAMA.</Typography></Typography>
                                </Box>

                                <Box className={classes.stepByStepbox}>
                                <Typography color={'#fff'}>Example:</Typography>
                                <Typography mt={1} color={'#fff'} >If the market value of locked RAMA equals the return commitment amount, the same quantity of RAMA will be released to the investor, so that the investor can sell RAMA on the exchange and get their money in their fiat account.</Typography>
                                <Typography mt={1} color={'#fff'} >If the value is lower than the return commitment amount, the contract will add more RAMA to match the committed return amount.</Typography>
                                <Typography mt={1} color={'#fff'} >If the value is greater than the return commitment amount, the contract will reduce the RAMA quantity to match the committed return amount.</Typography>
                                </Box>

                                <Box className={classes.stepByStep}>
                                <Typography mt={1} color={'#fff'} variant="h6">Principal Lock: <Typography component={'span'}>Before the tenure ends, no principal or part of the invested amount will be returned. The investment amount and the return commitment amount will vary as per the specific commitment.</Typography></Typography>
                                <Typography mt={1} color={'#fff'} variant="h6">Investment Limits: <Typography component={'span'}>The minimum investment amount is $5,000, and the maximum investment amount is $10,000,000.</Typography></Typography>
                                </Box>

                                <Box className={classes.stepByStep}>
                                <Typography mt={1} color={'#02b5b5'} >All investments will be legally subject to the terms of the above policies.</Typography>
                                </Box>

                                 
                            </Grid>
                        </Grid>
                    </Box>
                </Box>

            </Box>

        </>
    )
}

export default Terms