import { ramaLockContractAddresses } from '@/configs';
import { ramaLockAbi } from '@/configs/abi/ramalock';
import { extractDetailsFromError } from '@/lib/extractDetailsFromError';
import { Box, Button, CircularProgress, Grid, InputBase, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import Image from 'next/image';
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { Address, formatEther, parseEther } from 'viem';
import { useAccount, useChainId, useWaitForTransactionReceipt, useWriteContract } from 'wagmi';
import rmesta from '../../icons/rmesta.svg'

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
  worth: {
    display: 'flex',
    justifyContent: 'center',
    gap: '10px',
    alignItems: 'center',
    padding: '1rem 0rem',
    flexWrap: 'wrap'
},
  box_List:{
    display:'flex',
    alignItems:'center',
    gap:'10px'
}
}));

const Form = ({ resultOfUserLocked }: any) => {
  const classes = useStyles();
  const { address } = useAccount()
  const chainId = useChainId()
  const { writeContractAsync, data, isPending: isPendingBuyForWrite } = useWriteContract(
    {
      mutation: {
        onSettled(data, error, variables, context) {
          if (error) {
            toast.error(extractDetailsFromError(error.message as string) as string)
          } else {
            toast.success("Your RAMA Locked successfully")
          }
        },
      }
    }
  )
  const { isLoading } = useWaitForTransactionReceipt({
    hash: data,
  })

  const [userName, setUserName] = useState('')
  const [userAddress, setUserAddress] = useState<Address | null>(null)
  const [userInvesment, setUserInvesment] = useState('')
  const [userCommitment, setUserCommitment] = useState('')
  const [userStartDate, setUserStartDate] = useState('')
  const [userEndDate, setUserEndDate] = useState('')
  console.log((new Date(userStartDate !== '' ? userStartDate : 0).getTime()) / 1000, "userStartDate");
  console.log((new Date(userEndDate !== '' ? userEndDate : 0).getTime()) / 1000, "userEndDate");

  

  return (
    <Box className={classes.mainDiv}>
      <Grid container spacing={0}>
        <Grid lg={6} md={6} sm={12} xs={12} >
          <Box className={classes.top__input}>
            <Typography color="#fff">
              User Name
            </Typography>
            <Box className={classes.max_btn__wrap}>
              <InputBase
                value={userName}
                onChange={(e) => { setUserName(e.target.value) }}
                sx={{
                  flex: 1,
                  color: '#fff',
                  padding: '0.3rem 0.5rem',
                  '::placeholder': {
                    color: '#fff',
                  },

                }}
                fullWidth
                placeholder="Enter User Name"
                type="text"
              />
            </Box>
          </Box>
        </Grid>
        <Grid lg={6} md={6} sm={12} xs={12} >
          <Box className={classes.top__input}>
            <Typography color="#fff">
              User Address
            </Typography>
            <Box className={classes.max_btn__wrap}>
              <InputBase
                value={userAddress}
                onChange={(e) => { setUserAddress(e.target.value as Address) }}
                sx={{
                  flex: 1,
                  color: '#fff',

                  padding: '0.3rem 0.5rem',
                  '::placeholder': {
                    color: '#fff',
                  },


                }}
                fullWidth
                placeholder="Enter Address"
                type="text"
              />
            </Box>
          </Box>
        </Grid>
        <Grid lg={6} md={6} sm={12} xs={12} >
          <Box className={classes.top__input}>
            <Typography color="#fff">
              Your Investment
            </Typography>
            <Box className={classes.max_btn__wrap}>
              <InputBase
                value={userInvesment}
                onChange={(e) => { setUserInvesment(e.target.value) }}
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
                placeholder="Enter Your Investment In $"
                type="number"
              />
            </Box>
          </Box>
        </Grid>
        <Grid lg={6} md={6} sm={12} xs={12} >
          <Box className={classes.top__input}>
            <Typography color="#fff">
              Return Commitment
            </Typography>
            <Box className={classes.max_btn__wrap}>
              <InputBase
                value={userCommitment}
                onChange={(e) => { setUserCommitment(e.target.value) }}
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
                placeholder="Enter Return Commitment In $"
                type="number"
              />
            </Box>
          </Box>
        </Grid>

        <Grid lg={6} md={6} sm={12} xs={12} >
          <Box className={classes.top__input}>
            <Typography color="#fff">
              Start Date
            </Typography>
            <Box className={classes.max_btn__wrap}>
              <InputBase
                value={userStartDate}
                onChange={(e) => { setUserStartDate(e.target.value) }}
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
                placeholder="Select Start Date"
                type="date"
              />
            </Box>
          </Box>
        </Grid>

        <Grid lg={6} md={6} sm={12} xs={12} >
          <Box className={classes.top__input}>
            <Typography color="#fff">
              End Date
            </Typography>
            <Box className={classes.max_btn__wrap}>
              <InputBase
                value={userEndDate}
                onChange={(e) => { setUserEndDate(e.target.value) }}
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
                placeholder="Select End Date"
                type="date"
              />
            </Box>
          </Box>
        </Grid>
      </Grid>
      <Box className={classes.worth}>
        {(resultOfUserLocked?.data && userInvesment) &&
          <>

            <Box className={classes.box_List}>
              <Image src={rmesta} alt={""} width={40} />
              <Typography color={'#999'}>RAMA Price:
                <Typography component={'span'} color={'#fff'}> ${
                 Number(formatEther?.(BigInt?.(resultOfUserLocked.data[2].result))).toFixed(3)
                }
                </Typography>
              </Typography>
            </Box>
          </>
        }
        <Box className={classes.box_List}>
        <Image src={rmesta} alt={""} width={40} />
          <Typography color={'#999'}>RAMA Lock: <Typography component={'span'} color={'#fff'}>{
            (resultOfUserLocked?.data) ? (
              (Number(Number(userInvesment) > 0 ? userInvesment : 0) / Number(formatEther?.(BigInt?.(resultOfUserLocked?.data ? resultOfUserLocked.data[2].result : 0)))
            ).toFixed(3)) : "0.000"
          } RAMA</Typography></Typography>
        </Box>
      </Box>
      <Box className={classes.top__input}>
        <Button


          disabled={

            ((!userName || !userAddress || !userInvesment || !userCommitment || !userStartDate || !userEndDate) || isPendingBuyForWrite || isLoading
              // || (
              //     Number(formatEther?.(BigInt?.(balanceOfRama?.data?.value ? balanceOfRama?.data?.value.toString() : 0))) < Number(Number(buyInput) > 0 ? buyInput : 0)
              //   )
            )
          }
          fullWidth={true}
          className={classes.buy__btn}
          sx={{
            opacity: !(
              ((!userName || !userAddress || !userInvesment || !userCommitment || !userStartDate || !userEndDate) || isPendingBuyForWrite || isLoading
                // || (
                //     Number(formatEther?.(BigInt?.(balanceOfRama?.data?.value ? balanceOfRama?.data?.value.toString() : 0))) < Number(Number(buyInput) > 0 ? buyInput : 0)
                //   )
              )
            )
              ? "1" : '0.3'
          }}

          onClick={async () => {
            await writeContractAsync({
              abi: ramaLockAbi,
              address: chainId === 1370 ? ramaLockContractAddresses.ramestta.rama_lock : ramaLockContractAddresses.pingaksha.rama_lock,
              functionName: 'lock',
              args: [userName, userAddress as Address, parseEther(userInvesment), parseEther(userCommitment), BigInt((new Date(userStartDate !== '' ? userStartDate : 0).getTime()) / 1000), BigInt((new Date(userEndDate !== '' ? userEndDate : 0).getTime()) / 1000)],
              account: address,
              value: parseEther((Number(userInvesment) / Number(formatEther?.(BigInt?.(resultOfUserLocked?.data ? resultOfUserLocked.data[2].result : 0)))).toString()),
            })


          }}
        >Lock
          {
            (isPendingBuyForWrite || isLoading) && <CircularProgress size={18} color="inherit" />
          }
        </Button>
      </Box>
    </Box>
  );
};

export default Form;
