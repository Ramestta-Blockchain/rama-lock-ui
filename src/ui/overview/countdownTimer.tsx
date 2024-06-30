import React, { useEffect, useState } from 'react';
import { makeStyles } from '@mui/styles';
import { Typography, Grid, Paper, Box } from '@mui/material';

const useStyles = makeStyles({
  countdownContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
   
  },
  paper: {
    padding: '20px',
    textAlign: 'center',
    color: '#fff',
backgroundColor:'transparent'
  },
  timerText: {
    fontSize: '2rem',
  },
});

interface CountdownTimerProps {
  targetDate: Date;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ targetDate }) => {
  const classes = useStyles();
  const [timeLeft, setTimeLeft] = useState<{ days: number; hours: number; minutes: number; seconds: number }>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference <= 0) {
        clearInterval(intervalId);
      } else {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <Box className={classes.countdownContainer}>
      
        <Typography className={classes.timerText} >
          {`${timeLeft.days}d : ${timeLeft.hours}h : ${timeLeft.minutes}m : ${timeLeft.seconds}s`}
        </Typography>
       
    </Box>
  );
};

export default CountdownTimer;
