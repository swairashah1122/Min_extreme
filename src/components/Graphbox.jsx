import React from 'react';
import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';
import Graphimg from './graph.png';

const MyComponent = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box
    display={"flex"}
    flexDirection={{xs:'column',sm:'column',md:'row',lg:'row'}}
    justifyContent="space-between"
    alignItems={isSmallScreen ? 'flex-start' : 'center'}
    height="auto"
    marginTop={"8%"}
    p={2}
    >
      <Box
        flex={1}
        display="flex"
        flexDirection="column"
        justifyContent="center"
        p={2}
      >
      
        <Typography variant="h4" >Buyback and Burn to significant growth</Typography>
        <Typography 
          variant="body1" 
          paragraph 
          sx={{
            paddingTop: "20px",
            fontSize: "12px",
            color: 'rgba(221, 221, 221, 1)',
            textAlign: isSmallScreen ? 'left' : 'center'
          }}
        >
         A continuous process of buying back and burning tokens has been proven to be an effective strategy for achieving substantial growth. Our Bitcoin mining utility creates a self-sustaining income stream that supports the growth of this token and helps establish a stable price.
        </Typography> </Box>
      <Box flex={1} p={2} display="flex" justifyContent="center">
        <img src={Graphimg} alt="Graph" style={{ backgroundColor:"white",maxWidth: '100%', height: 'auto' }} />
      </Box>
    </Box>
  );
};

export default MyComponent;
