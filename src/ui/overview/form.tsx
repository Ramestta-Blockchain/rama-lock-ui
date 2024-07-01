import { ramaLockContractAddresses } from '@/configs';
import { ramaLockAbi } from '@/configs/abi/ramalock';
import { extractDetailsFromError } from '@/lib/extractDetailsFromError';
import { Box, Button, CircularProgress, Grid, InputBase, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import Image from 'next/image';
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { Address, formatEther, isAddress, parseEther } from 'viem';
import { useAccount, useChainId, useWaitForTransactionReceipt, useWriteContract } from 'wagmi';
import rmesta from '../../icons/rmesta.svg'
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import dayjs, { Dayjs } from 'dayjs';
import DateTimePickerComponent from './dateTimePickerComponent';
import { formatNumberToCurrencyString } from '@/lib/formatNumberToCurrencyString';

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
    backgroundColor: '#02b5b5 !important',
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
      backgroundColor: '#02b5b5',
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
  box_List: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px'
  },

  validate__box: {
    backgroundColor: '#101012',
    margin: '1rem auto auto auto',
    width: '250px',
    textAlign: 'center',
    padding: '10px',
    borderRadius: '30px',
    border: '1px solid red',

  },

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
  const [userStartDate, setUserStartDate] = useState<Dayjs | null>(dayjs());
  const [userEndDate, setUserEndDate] = useState<Dayjs | null>(null);
  const [lockValue, setLockValue] = useState('')
  // console.log(Number(userStartDate?.toDate().getTime())/1000, "userStartDate")




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
              <DateTimePickerComponent value={userStartDate} setValue={setUserStartDate} />
              {/* <InputBase
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
              /> */}
            </Box>
          </Box>
        </Grid>

        <Grid lg={6} md={6} sm={12} xs={12} >
          <Box className={classes.top__input}>
            <Typography color="#fff">
              End Date
            </Typography>
            <Box className={classes.max_btn__wrap}>
              <DateTimePickerComponent value={userEndDate} setValue={setUserEndDate} />
              {/* <InputBase
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
              /> */}
            </Box>
          </Box>
        </Grid>
        <Grid lg={12} md={12} sm={12} xs={12} >
          <Box className={classes.top__input}>
            <Typography color="#fff">
              RAMA Lock Value
            </Typography>
            <Box className={classes.max_btn__wrap}>
              <InputBase
                value={lockValue}
                onChange={(e) => { setLockValue(e.target.value) }}
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
                placeholder="RAMA Lock Value"
                type="number"
              />
            </Box>
          </Box>
        </Grid>
      </Grid>

      {
        (userAddress && !isAddress(userAddress)) && 
              <Box className={classes.validate__box} >
              <Typography component={'span'} fontWeight={200} color={'red'}>Enter a valid address</Typography>
            </Box>
      }
      {
        (userEndDate && userStartDate && (Number(userStartDate.toDate().getTime())/1000)>(Number(userEndDate.toDate().getTime())/1000)) && 
              <Box className={classes.validate__box} >
              <Typography component={'span'} fontWeight={200} color={'red'}>End date should be greater</Typography>
            </Box>
      }
      <Box className={classes.worth}>
        {resultOfUserLocked?.data?.[2].result &&
          <>

            <Box className={classes.box_List}>
              <Image src={rmesta} alt={""} width={40} />
              <Typography color={'#999'}>RAMA Price:
                <Typography component={'span'} color={'#fff'}> ${
                  Number(formatEther?.(BigInt?.(resultOfUserLocked.data[2].result))).toFixed(4)
                }
                </Typography>
              </Typography>
            </Box>
          </>
        }



        <Box className={classes.box_List}>
          <Image src={rmesta} alt={""} width={40} />
          <Typography color={'#999'}>RAMA Lock Value: <Typography component={'span'} color={'#fff'}>
            {/* {
            (resultOfUserLocked?.data) ? (
              (Number(Number(userInvesment) > 0 ? userInvesment : 0) / Number(formatEther?.(BigInt?.(resultOfUserLocked?.data ? resultOfUserLocked.data[2].result : 0)))
              ).toFixed(3)) : "0.000"
          } */}
          {
            formatNumberToCurrencyString(
              (Number(Number(lockValue) > 0 ? lockValue : 0) * Number(formatEther?.(BigInt?.(resultOfUserLocked?.data?.[2]?.result ? resultOfUserLocked.data[2].result : 0)))
              ),4
            )
          }
          </Typography></Typography>
        </Box>
      </Box>
      <Box className={classes.top__input}>
        <Button


          disabled={

            ((!userName || !userAddress || !userInvesment || !userCommitment || !userStartDate || !userEndDate || !lockValue) || isPendingBuyForWrite || isLoading
              // || (
              //     Number(formatEther?.(BigInt?.(balanceOfRama?.data?.value ? balanceOfRama?.data?.value.toString() : 0))) < Number(Number(buyInput) > 0 ? buyInput : 0)
              //   ) 
              || (
                (Number(userStartDate.toDate().getTime())/1000)>(Number(userEndDate.toDate().getTime())/1000)
              ) ||
              (
                (
                  !isAddress(userAddress)
                )
              )
            )
          }
          fullWidth={true}
          className={classes.buy__btn}
          sx={{
            opacity: !(
              ((!userName || !userAddress || !userInvesment || !userCommitment || !userStartDate || !userEndDate || !lockValue) || isPendingBuyForWrite || isLoading
                // || (
                //     Number(formatEther?.(BigInt?.(balanceOfRama?.data?.value ? balanceOfRama?.data?.value.toString() : 0))) < Number(Number(buyInput) > 0 ? buyInput : 0)
                //   )
                || (
                  (Number(userStartDate.toDate().getTime())/1000)>(Number(userEndDate.toDate().getTime())/1000)
                ) || (
                  !isAddress(userAddress)
                )
              )
            )
              ? "1" : '0.3'
          }}

          onClick={async () => {
            (userAddress && userStartDate && userEndDate ) && await writeContractAsync({
              abi: ramaLockAbi,
              address: chainId === 1370 ? ramaLockContractAddresses.ramestta.rama_lock : ramaLockContractAddresses.pingaksha.rama_lock,
              functionName: 'lock',
              args: [userName, userAddress, parseEther(userInvesment), parseEther(userCommitment), BigInt(parseInt(((userStartDate.toDate().getTime())/1000).toString())), BigInt(parseInt(((userEndDate.toDate().getTime())/1000).toString()))],
              account: address,
              value: parseEther(lockValue),
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
