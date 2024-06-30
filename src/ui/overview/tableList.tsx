import { Box, Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";

import Image from "next/image";
import r2 from '../../icons/r2.svg'
import HoverTool from "@/theme/components/hoverTool";
import { makeStyles } from '@mui/styles';
import logo from '../../icons/rmesta.svg'
import CountdownTimer from "./countdownTimer";



const useStyles = makeStyles({
    tableContainer: {
        // maxHeight: 100, 
        '&::-webkit-scrollbar': {
            width: '12px',
        },
        '&::-webkit-scrollbar-track': {
            background: '#101012',
            borderRadius: '0px',
        },
        '&::-webkit-scrollbar-thumb': {
            backgroundColor: '#1D1D20',
            borderRadius: '10px',
            border: '3px solid #101012',
        },
        '&::-webkit-scrollbar-thumb:hover': {
            backgroundColor: '#555',
        },
    },
    noData: {
        height: '50px',
        display: 'flex',
        width: '100%',
        justifyContent: 'center',
        justifyItems: "center",
        backgroundColor: '#080808'
    },
    stakebtn: {
        backgroundColor: 'transparent',
        padding: '10px',
        borderRadius: '6px',
        border: '1px solid #00ffff !important',
        color: '#00ffff !important',
        textDecoration: 'none',
        transition: '0.5s',
        '&:hover': {
            backgroundColor: '#00ffff !important',
            color: '#000 !important'
        }
    },
})



const TableList = () => {
    const classes = useStyles();

    const Tablecol = [
        {
            id: 1,
            Userprofile: logo,
            ProfileAddress: "0xcc5...be31",
            Name: 'Junaid',
            investment: '$0.00',
            asset: '0.00 RAMA',
            return: '$0.00',
            lockTime: 'timer',
            unlockTime: 'June 30, 2024, at 10:30 AM',
        },
        {
            id: 2,
            Userprofile: logo,
            ProfileAddress: "0xcc5...be31",
            Name: 'Junaid',
            investment: '$0.00',
            asset: '0.00 RAMA',
            return: '$0.00',
            lockTime: 'timer',
            unlockTime: 'June 30, 2024, at 10:30 AM',
        },


    ]

    const targetDate = new Date('2024-12-31T23:59:59');




    return (

        <>
            <Box>
                <TableContainer component={Paper} className={classes.tableContainer}>
                    <Table sx={{ minWidth: 1000, backgroundColor: '#080808', border: '1px solid #1D1D20', borderRadius: '4px' }} aria-label="simple table">

                        <TableHead sx={{ backgroundColor: '#101012' }}>
                            <TableRow>
                                <TableCell sx={{ borderBottom: '1px solid #1D1D20', fontSize: 18, color: '#fff', padding: 1 }} >User</TableCell>
                                <TableCell sx={{ borderBottom: '1px solid #1D1D20', fontSize: 18, color: '#fff', padding: 1 }} align="left">Name </TableCell>
                                <TableCell sx={{ borderBottom: '1px solid #1D1D20', fontSize: 18, color: '#fff', padding: 1 }} align="left">Your Investment</TableCell>
                                <TableCell sx={{ borderBottom: '1px solid #1D1D20', fontSize: 18, color: '#fff', padding: 1 }} align="left">Asset</TableCell>
                                <TableCell sx={{ borderBottom: '1px solid #1D1D20', fontSize: 18, color: '#fff', padding: 1 }} align="left">Return</TableCell>
                                <TableCell sx={{ borderBottom: '1px solid #1D1D20', fontSize: 18, color: '#fff', padding: 1 }} align="left">Return Claimed</TableCell>
                                <TableCell sx={{ borderBottom: '1px solid #1D1D20', fontSize: 18, color: '#fff', padding: 1 }} align="left">Lock Time</TableCell>
                                <TableCell sx={{ borderBottom: '1px solid #1D1D20', fontSize: 18, color: '#fff', padding: 1 }} align="left">Unlock Time</TableCell>
                                <TableCell sx={{ borderBottom: '1px solid #1D1D20', fontSize: 18, color: '#fff', padding: 1 }} align="right">Action</TableCell>

                            </TableRow>

                        </TableHead >

                        <TableBody >


                            <TableRow

                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell sx={{ borderBottom: '1px solid #1D1D20', padding: 1, color: '#fff' }} component="th" scope="row">
                                    <Box sx={{
                                        display: 'flex',
                                        gap: '10px',
                                        alignItems: 'center'
                                    }}>
                                        <Image src={logo} alt={""} width={50} />
                                        <Typography>0xcc5...be31</Typography>
                                    </Box>
                                </TableCell>

                                <TableCell sx={{ borderBottom: '1px solid #1D1D20', padding: 1, color: '#fff' }} align="left">Junaid</TableCell>
                                <TableCell sx={{ borderBottom: '1px solid #1D1D20', padding: 1, color: '#fff' }} align="left">$0.00</TableCell>
                                <TableCell sx={{ borderBottom: '1px solid #1D1D20', padding: 1, color: '#fff' }} align="left">0.00 RAMA</TableCell>
                                <TableCell sx={{ borderBottom: '1px solid #1D1D20', padding: 1, color: '#fff' }} align="left">$0.00</TableCell>
                                <TableCell sx={{ borderBottom: '1px solid #1D1D20', padding: 1, color: '#fff' }} align="left">$0.00</TableCell>
                                <TableCell sx={{ borderBottom: '1px solid #1D1D20', padding: 1, color: '#fff' }} align="left"><CountdownTimer targetDate={targetDate} /></TableCell>
                                <TableCell sx={{ borderBottom: '1px solid #1D1D20', padding: 1, color: '#fff' }} align="left">June 30, 2024, at 10:30 AM</TableCell>
                                <TableCell sx={{ borderBottom: '1px solid #1D1D20', padding: 1, color: '#fff' }} align="right"><Button className={classes.stakebtn}>Unlock</Button></TableCell>

                            </TableRow>



                            {/* <Box ml={30} className={classes.noData}>
                                            <Typography color={'#fff'} margin={'auto'}>No Data Found!</Typography>
                                        </Box> */}


                        </TableBody>

                    </Table>
                </TableContainer>
            </Box>
        </>

    );
}

export default TableList