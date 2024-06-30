import { Box, Button, Grid, InputBase, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';


const useStyles = makeStyles((theme) => ({
  mainDiv:{
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
}));

const Form = () => {
  const classes = useStyles();

  return (
    <Box className={classes.mainDiv}>
      <Grid container spacing={0}>
        <Grid lg={6} md={6} sm={12} xs={12} >
          <Box className={classes.top__input}>
            <Typography color="#fff">
              UserName
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

                }}
                fullWidth
                placeholder="Enter Usarname"
                type="text"
              />
            </Box>
          </Box>
        </Grid>
        <Grid lg={6} md={6} sm={12} xs={12} >
          <Box className={classes.top__input}>
            <Typography color="#fff">
              Address
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
                placeholder="Enter Your Investment"
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
     <Box className={classes.top__input}>
     <Button

// disabled={
 
// }
fullWidth={true}
className={classes.buy__btn}
sx={{
    // opacity:  ? "1" : '0.3'
}}
   >SUBMIT
 
</Button>
     </Box>
    </Box>
  );
};

export default Form;
