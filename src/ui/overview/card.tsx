import { convertToAbbreviated } from "@/lib/convertToAbbreviated";
import { formatNumberToCurrencyString } from "@/lib/formatNumberToCurrencyString";
import { Box, Grid, InputBase, Typography } from "@mui/material"
import { makeStyles } from '@mui/styles';
import { formatEther } from "viem";


const useStyles = makeStyles({
    mainDiv: {
        margin: '1rem',
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
        backgroundColor: '#101012',
        border: '1px solid #1D1D20',
        padding: '1rem',
        borderRadius: '8px',
        textAlign: 'center'
    },
    cardlist: {
        padding: '10px',
    },
    boxCr: {
        border: '1px solid #1D1D20',
        borderRadius: '8px',
        marginTop: '1.5rem'
    }



});





const Card = ({resultOfUserLocked}:any) => {
    const classes = useStyles();


    const Card = [

        {
            id: 1,
            Title: 'Your Total Investment',
            Amount: `${formatNumberToCurrencyString(Number(formatEther?.(BigInt?.(resultOfUserLocked?.data?.[1]?.result?.yourInvestmentInUsd ? resultOfUserLocked.data[1].result.yourInvestmentInUsd : 0))), 2)}`,
            Amount1: ``

        },
        {
            id: 2,
            Title: 'Your Total Asset Lock',
            Amount: `${convertToAbbreviated(formatEther?.(BigInt?.(resultOfUserLocked?.data?.[1]?.result?.assetAgainstYourInvestment ? resultOfUserLocked.data[1].result.assetAgainstYourInvestment : 0)), 3)} RAMA`,
            Amount1: `${formatNumberToCurrencyString(Number(formatEther?.(BigInt?.(resultOfUserLocked?.data?.[1]?.result?.assetAgainstYourInvestment? resultOfUserLocked.data[1].result.assetAgainstYourInvestment : 0))) * Number(formatEther?.(BigInt?.(resultOfUserLocked?.data ? resultOfUserLocked.data[2].result : 0))), 3)}`

        },
        {
            id: 3,
            Title: 'Your Total Return',
            Amount: `${formatNumberToCurrencyString(Number(formatEther?.(BigInt?.(resultOfUserLocked?.data?.[1]?.result?.returnCommitmentValueInUsd? resultOfUserLocked.data[1].result.returnCommitmentValueInUsd : 0))), 2)}`,
            Amount1: ``

        },
        {
            id: 4,
            Title: 'Your Total Return Claimed',
            Amount: `${convertToAbbreviated(formatEther?.(BigInt?.(resultOfUserLocked?.data?.[1]?.result?.returnClaimedValueInRama ? resultOfUserLocked.data[1].result.returnClaimedValueInRama : 0)), 3)} RAMA`,
            Amount1: `${formatNumberToCurrencyString(Number(formatEther?.(BigInt?.(resultOfUserLocked?.data?.[1]?.result?.returnClaimedValueInRama ? resultOfUserLocked.data[1].result.returnClaimedValueInRama : 0))) * Number(formatEther?.(BigInt?.(resultOfUserLocked?.data?.[2]?.result ? resultOfUserLocked.data[2].result : 0))), 3)}`

        }
    ]
    return (
        <>

            <Box className={classes.mainDiv}>
                <Box className={classes.boxCr}>
                    <Box className={classes.cardlist}>
                        <Grid container spacing={2}>
                            {Card.map((item, index) => (
                                <Grid key={index} item lg={3} md={3} sm={6} xs={12}>
                                    <Box className={classes.Card}>
                                        <Typography color={'#fff'}>{item.Title}</Typography>
                                        <Typography color={'#fff'} variant="h6">{item.Amount}</Typography>
                                        <Typography color={'#999'} >{item.Amount1}</Typography>
                                    </Box>
                                </Grid>
                            ))}

                        </Grid>
                    </Box>
                    <Box className={classes.cardlist}>
                        <Grid container spacing={2}>

                            <Grid item lg={12} md={12} sm={12} xs={12}>
                                <Box className={classes.Card}>
                                    <Typography color={'#fff'} variant="h5">Disclaimer for MumbleChat</Typography>
                                    <Typography mt={1} color={'#fff'} fontSize={14}> MumbleChat is a platform designed to facilitate communication and collaboration. While we strive to provide a secure and reliable service, we cannot guarantee the accuracy, completeness, or timeliness of any information exchanged through our platform. Users are responsible for the content they share and should exercise caution when sharing personal or sensitive information. MumbleChat is not liable for any direct, indirect, incidental, or consequential damages resulting from the use of our service. By using MumbleChat, you agree to adhere to our terms of service and privacy policy.</Typography>
                                </Box>
                            </Grid>


                        </Grid>
                    </Box>
                </Box>

            </Box>

        </>
    )
}

export default Card