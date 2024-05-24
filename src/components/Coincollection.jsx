import React from 'react';
import { makeStyles } from '@mui/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import bitImage from './bit.png'; // Importing the image

const useStyles = makeStyles(() => ({
  bitcoinContainer: {
    marginTop:"5%",
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    padding: '20px', // Adding some padding for better spacing
    boxShadow: '0 4px 15px rgba(255,255, 255, 0.2)', 
  },
  bitcoinItem: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: '10px', // Adding margin between items
  },
  bitcoinImage: {
    width: '50px',
    height: '50px',
    marginBottom: '10px', // Space between image and text
  },
  bitcoinTitle: {
    textAlign: 'center',
    color: '#fff',
  },
}));

function BitcoinComponent() {
  const classes = useStyles();

  return (
    <>
      <Typography style={{marginTop:"8%",fontSize:"14px",alignItems:"center",textAlign:"center"}}>*For more information,
      <a href="" style={{textDecoration:"none", color:"purple"}}>Check the whitepaper
      <i class="fa-solid fa-arrow-right-long" style={{marginLeft:"10px",fontSize:"15px"}}></i></a></Typography>
      <Typography style={{marginTop:"4%",fontSize:"30px",alignItems:"center",textAlign:"center"}}>Strategic Partnership</Typography>
    <Box className={classes.bitcoinContainer}>
      {[...Array(10)].map((_, index) => (
        <Box key={index} className={classes.bitcoinItem}>
          <img
            src={bitImage}
            alt={`Bitcoin ${index}`}
            className={classes.bitcoinImage}
          />
          <Typography className={classes.bitcoinTitle}>Bitcoin {index + 1}</Typography>
        </Box>
      ))}
    </Box>
    </>
  );
}

export default BitcoinComponent;
