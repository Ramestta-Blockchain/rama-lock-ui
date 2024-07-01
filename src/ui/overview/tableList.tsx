import { Box, Button, CircularProgress, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";

import Image from "next/image";
import r2 from '../../icons/r2.svg'
import HoverTool from "@/theme/components/hoverTool";
import { makeStyles } from '@mui/styles';
import logo from '../../icons/rmesta.svg'
import CountdownTimer from "./countdownTimer";
import { useAccount, useBlockNumber, useChainId, useReadContract, useWaitForTransactionReceipt, useWriteContract } from "wagmi";
import { ramaLockAbi } from "@/configs/abi/ramalock";
import { ramaLockContractAddresses } from "@/configs";
import { Address, formatEther, zeroAddress } from "viem";
import AddressCopy from "@/theme/components/addressCopy";
import shortenString from "@/lib/shortenString";
import { formatNumberToCurrencyString } from "@/lib/formatNumberToCurrencyString";
import { convertToAbbreviated } from "@/lib/convertToAbbreviated";
import { toast } from "react-toastify";
import { extractDetailsFromError } from "@/lib/extractDetailsFromError";
import { useEffect } from "react";
import { useQueryClient } from "@tanstack/react-query";



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
        borderBottom: 'none',
        width: '100%',
        justifyContent: 'center',
        justifyItems: "center",
        backgroundColor: '#080808',
    },
    stakebtn: {
        backgroundColor: 'transparent',
        padding: '10px',
        borderRadius: '6px',
        border: '1px solid #02b5b5 !important',
        color: '#02b5b5 !important',
        textDecoration: 'none',
        transition: '0.5s',
        '&:hover': {
            backgroundColor: '#02b5b5 !important',
            color: '#000 !important'
        }
    },
})



const TableList = ({ resultOfUserLocked }: any) => {
    const classes = useStyles();
    const { address } = useAccount()
    const chainId = useChainId()
    const queryClient = useQueryClient()
    const { data: blockNumber } = useBlockNumber({ watch: true })
    const contractBase = {
        abi: ramaLockAbi,
        address: chainId === 1370 ? ramaLockContractAddresses.ramestta.rama_lock : ramaLockContractAddresses.pingaksha.rama_lock,
    }

    const resultOfLockersLength = useReadContract({
        ...contractBase,
        functionName: 'totalLockersLength',
        args: [],
        account: zeroAddress
    })

    const resultOfLockers = useReadContract({
        ...contractBase,
        functionName: 'getLockers',
        args: [BigInt(0), Number(resultOfLockersLength?.data) > 0 ? resultOfLockersLength.data as bigint : BigInt(0)],
        account: zeroAddress
    })


    // const targetDate = new Date('2024-12-31T23:59:59');

    const TableRowCustom = ({ user }: { user: Address }) => {
        const resultOfUserLockedLength = useReadContract({
            ...contractBase,
            functionName: 'totalLockedLengthForUser',
            args: [user],
            account: zeroAddress
        })
        const resultOfUserLockedList = useReadContract({
            ...contractBase,
            functionName: 'user2LockedList',
            args: [user, BigInt(0), Number(resultOfUserLockedLength?.data) > 0 ? resultOfUserLockedLength.data as bigint : BigInt(0)],
            account: zeroAddress
        })
        const Action = ({ user, index }: { user: Address, index: number }) => {
            const { writeContractAsync, data, isPending: isPendingUnstakeForWrite } = useWriteContract({
                mutation: {
                    onSettled(data, error, variables, context) {
                        if (error) {
                            toast.error(extractDetailsFromError(error.message as string) as string)
                        } else {
                            toast.success("Unlocked successfully")
                        }
                    },
                }
            })
            const { isLoading } = useWaitForTransactionReceipt({
                hash: data,
            })
            return (
                <Button
                    disabled={
                        (isPendingUnstakeForWrite || isLoading)
                    }
                    className={classes.stakebtn}
                    sx={{
                        opacity: !(
                            isPendingUnstakeForWrite || isLoading
                        ) ? "1" : '0.3',
                        marginLeft: '7px'
                    }}
                    onClick={async () => {
                        await writeContractAsync({
                            ...contractBase,
                            functionName: resultOfUserLocked.data[0].result !== address ? 'unlockForUser' : 'unlock',
                            args: resultOfUserLocked.data[0].result !== address ? [BigInt(index)] : [user, BigInt(index)],
                            account: address
                        })
                    }}

                >Unlock
                    {
                        (isPendingUnstakeForWrite || isLoading) && <CircularProgress sx={{ ml: "7px" }} size={18} color="inherit" />
                    }
                </Button>
            )
        }
        useEffect(() => {
            queryClient.invalidateQueries({ queryKey: resultOfUserLockedLength.queryKey })
            queryClient.invalidateQueries({ queryKey: resultOfUserLockedList.queryKey })
        }, [blockNumber, queryClient, resultOfUserLockedLength, resultOfUserLockedList])
        return (
            <>
                {
                    resultOfUserLockedList?.data && resultOfUserLockedList?.data?.length > 0 ? (
                        resultOfUserLockedList.data.map((item: any, index: number) => (
                            <TableRow key={index} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                <TableCell sx={{ borderBottom: '1px solid #1D1D20', padding: 1, color: '#fff' }} component="th" scope="row">
                                    <Box sx={{
                                        display: 'flex',
                                        gap: '10px',
                                        alignItems: 'center'
                                    }}>
                                        <Image src={logo} alt={""} width={44} />
                                        <AddressCopy
                                            textColor="#02b5b5 !important"
                                            hrefLink={
                                                chainId === 1370 ? `https://ramascan.com/address/${user}` :
                                                    `https://pingaksha.ramascan.com/address/${user}`
                                            }
                                            text={user as string}
                                            addresstext={shortenString(user as Address)} />
                                    </Box>
                                </TableCell>

                                <TableCell sx={{ borderBottom: '1px solid #1D1D20', padding: 1, color: '#fff' }} align="left">{item.userName}</TableCell>
                                <TableCell sx={{ borderBottom: '1px solid #1D1D20', padding: 1, color: '#fff' }} align="left">
                                    {
                                        formatNumberToCurrencyString(Number(formatEther?.(BigInt?.(item.yourInvestmentInUsd))), 2)
                                    }
                                </TableCell>
                                <TableCell sx={{ borderBottom: '1px solid #1D1D20', padding: 1, color: '#fff' }} align="left">{
                                    convertToAbbreviated(formatEther?.(BigInt?.(item.assetAgainstYourInvestment)), 3)
                                } RAMA</TableCell>
                                <TableCell sx={{ borderBottom: '1px solid #1D1D20', padding: 1, color: '#fff' }} align="left">
                                    {
                                        formatNumberToCurrencyString(Number(formatEther?.(BigInt?.(item.returnCommitmentValueInUsd))), 2)
                                    }
                                </TableCell>
                                <TableCell sx={{ borderBottom: '1px solid #1D1D20', padding: 1, color: '#fff' }} align="left">
                                    {
                                        convertToAbbreviated(formatEther?.(BigInt?.(item.returnClaimedValueInRama)), 3)
                                    }
                                </TableCell>
                                <TableCell sx={{ borderBottom: '1px solid #1D1D20', padding: 1, color: '#fff' }} align="left">
                                    {
                                        new Date(Number(item.lockedTime) * 1000).toLocaleString()
                                    }
                                </TableCell>
                                <TableCell sx={{ borderBottom: '1px solid #1D1D20', padding: 1, color: '#fff' }} align="left">
                                    {/* <CountdownTimer targetDate={new Date(Number(item.unlockedTime) * 1000)} />
                                     */}
                                    {
                                        new Date(Number(item.unlockedTime) * 1000).toLocaleString()
                                    }
                                </TableCell>
                                <TableCell sx={{ borderBottom: '1px solid #1D1D20', padding: 1, color: '#fff' }} align="right">
                                    <Action user={user} index={index} />
                                </TableCell>

                            </TableRow>
                        ))
                    ) : (
                        (
                            <TableRow>
                                <TableCell sx={{ borderBottom: '1px solid #1D1D20', padding: 1, color: '#fff' }} colSpan={9} align="center" className={classes.noData}>
                                    <Typography color={'#fff'} align="center">No Data Found!</Typography>
                                </TableCell>
                            </TableRow>
                        )
                    )

                }
            </>
        )
    }

    useEffect(() => {
        queryClient.invalidateQueries({ queryKey: resultOfLockersLength.queryKey })
        queryClient.invalidateQueries({ queryKey: resultOfLockers.queryKey })
    }, [blockNumber, queryClient, resultOfLockersLength, resultOfLockers])


    return (

        <>
            <Box>
                <TableContainer component={Paper} className={classes.tableContainer}>
                    <Table sx={{ minWidth: 1200, backgroundColor: '#080808', border: '1px solid #1D1D20', borderRadius: '4px' }} aria-label="simple table">

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


                            {
                                resultOfUserLocked?.data && resultOfUserLocked.data[0].result !== address ? (
                                    <TableRowCustom user={address as Address} />
                                ) : (
                                    resultOfLockers.data && resultOfLockers.data.map((item, index) => (
                                        <TableRowCustom key={index} user={item} />
                                    ))
                                )

                            }



                        </TableBody>

                    </Table>
                </TableContainer>
            </Box>
        </>

    );
}

export default TableList